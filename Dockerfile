#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["MISA.MoneyKeeper.Web/MISA.MoneyKeeper.Web.csproj", "MISA.MoneyKeeper.Web/"]
RUN dotnet restore "MISA.MoneyKeeper.Web/MISA.MoneyKeeper.Web.csproj"
COPY . .
WORKDIR "/src/MISA.MoneyKeeper.Web"
RUN dotnet build "MISA.MoneyKeeper.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MISA.MoneyKeeper.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MISA.MoneyKeeper.Web.dll"]

#Build Vue
FROM node:latest as build-stage
WORKDIR /app
COPY MISA.MoneyKeeper.Web/wwwroot/package*.json ./
RUN ls

COPY ./ .

RUN cd MISA.MoneyKeeper.Web/wwwroot && npm install && npm install -g @vue/cli && npm run build 

FROM nginx as production-stage
RUN mkdir /app
RUN ls
COPY --from=build-stage /app/MISA.MoneyKeeper.Web/wwwroot/dist /app
COPY /MISA.MoneyKeeper.Web/wwwroot/nginx.conf /etc/nginx/nginx.conf