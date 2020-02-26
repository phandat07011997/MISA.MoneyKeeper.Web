<template>
    <div class="container container-currency shadow mt-5" v-if="!hide" >
        <div class="d-flex-column">
            <div class="header_language ml-0">

                <button class="back_settings" @click="$emit('hidden-content')">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <span>Chọn đồng tiền chính</span>
            </div>
            <div class="row ml-0 d-flex align-items-center">
                <input class="col-sm-6 search-bar" type="text" placeholder="Search ..."/>
                <div class="col-sm-6 d-flex justify-content-end">Đang dùng:{{ inforUser.CurrencyCode}} - {{getCurrency}}</div>
            </div>
            <div class="list-currency d-block pt-2">
                <ul v-for="currency in currencies" v-bind:key="currency.id" class="border" >
                    <li class="row border-bottom" style="height:50px;cursor:pointer" @click="select-currency">
                        <div class="col-sm-1 d-flex justify-content-start align-items-center">{{currency.iconCurrency}}</div>
                        <div class="col-sm-11 d-flex justify-content-start align-items-center">{{currency.currencyCode}} - {{currency.currencyname}}</div>
                    </li>
                </ul>
            </div>
            <div class="button_money">
                <button type="button" class="btn-done" @click="postCurrency">
                    Xong
                </button>
            </div>
        </div>
        </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'default-currency',
        data() {
            return {
                inforUser: Object,
                currencies: [
                    {
                        id: 1,
                        iconCurrency: '',
                        currencyCode: 'EUR',
                        currencyname: 'Euro',
                    }, 
                    {
                        id: 2,
                        iconCurrency: '',
                        currencyCode: 'USD',
                        currencyname: 'United Stated Dollar',
                    },
                    {
                        id: 3,
                        iconCurrency: '',
                        currencyCode: 'VND',
                        currencyname: 'Vietnamese DONG',
                    },
                ]
            }
        },
        created() {

                var self = this;
                var username = JSON.parse(localStorage.getItem('user')).username;
                console.log(username);
                var link = "http://localhost:8080/Services/MISAMembershipService.svc/json/GetUserInfo?userName=" + username;
                axios
                    .get(link)
                    .then(function (response) {
                        self.inforUser = response.data;
                        console.log(response);
                        alert(response)
                    })
               

            },

        method() {
            //postCurrency(){
            //    var userId = this.inforUser.UserId;
            //    axios.post("http://testnew.sothuchi.vn/Services/FinanceService.svc/json/GetLastestSynchronizeData"),{
            //        body:
            //            { "synchronizeObjectParam": { "userId": userId, "IsoLastSynchronizeDateTime": "", "uuidDevice": "", "syncLoadType": 2 } }
                    
            //    }
            //    .then
            //}

        },
        computed: {
            getCurrency() {
                for (var i = 0; i < this.currencies.length; i++) {
                    if (this.inforUser.CurrencyCode === this.currencies[i].currencyCode) {
                        console.log(this.currencies[i].currencyname);
                        return this.currencies[i].currencyname;
                    }
                }
                return '';
            }
        },
        
        filter() {

        },
       
        props: ['hide']
    }
</script>
<style scoped>
    .container-currency{
        background:white;
    }
     button.back_settings {
        padding: 10px;
        border: none;
        background: none;
        margin-right: 22px;
        color: lightblue;
        outline: none;
        font-size: 20px;
    }

        button.back_settings:hover i {
            color: #17a2b8;
        }

    .col-sm-12.header_language {
        font-size: 30px;
        padding: 10px;
        margin-left:0px;
    }

        .col-sm-12.header_language span {
            color: #17a2b8;
        }

    .language__item button.active {
        display: block;
    }
    .search-bar{
        margin-left:0;
        width:600px;
        padding:0px;
        height:40px;
    }
    .button_money{
        text-align:right;
        
    }
    .btn-done{
        width:90px;
        color: white;
        background: #17a2b8;
        height:50px;
        border:none;
    }
</style>