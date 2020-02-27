<template>
    <div class="container container-currency shadow mt-5" v-if="!hide">
        <div class="d-flex-column " style="position:relative">
            <div class="header_language ml-0">
                <button class="back_settings" @click="$emit('hidden-content')">
                    <i class="fas fa-arrow-left" style="font-size:32px;"></i>
                </button>
                <span style="font-size:32px;color: rgb(8, 72, 102);">Chọn đồng tiền chính</span>
            </div>
            <div class="row ml-0 d-flex align-items-center pt-3 search-wrapper" style="margin-top:10px">
                <div class="col-sm-6 d-flex justify-content-star align-items-center ml-0 p-0 input-div">
                    <i class=" fas fa-search ml-2" style="font-size:24px;color:#888;position:absolute"></i>
                    <input class=" input-search" type="text" placeholder=" Tìm kiếm ..." v-model="search" />
                </div>

                <div class="col-sm-6 d-flex justify-content-end align-items-end" style="font-size:17px;">Đang dùng : <span style="font-weight:bold">{{ inforUser.CurrencyCode}} - {{getCurrency}}</span></div>
            </div>
            <div class="list-currency d-block mt-3 border-top wrapperv scroll border-left">
                <ul v-for="currency in currenciesSearch" v-bind:key="currency.id" class="mb-0">
                    <li class="row border-bottom item-in-list m-auto" style="height:50px;cursor:pointer" @click="selectCurrency(currency.currencyCode); active_icon(currency.currencyCode)">
                        <div class="col-sm-1 d-flex justify-content-center align-items-center"><img v-bind:src=getFlag(currency.currencyFlag) /> </div>
                        
                        <div class="col-sm-1 d-flex justify-content-center align-items-center"><i v-bind:class="currency.iconCurrency"></i></div>

                        <div class="col-sm-9 d-flex justify-content-start align-items-center">{{currency.currencyCode}} - {{currency.currencyname}}</div>
                        <div class="col-sm-1 justify-content-start align-items-center icon-check " v-bind:id="currency.currencyCode"><i class="fas fa-check"></i></div>
                    </li>
                </ul>
            </div>
            <div class="button_money">
                <button type="button" class="btn btn-lg btn-success mt-4" @click="postCurrency ">
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
                search: '',
                resultMessage:'',
                inforUser: Object,
                userInfor: Object,
                select_currency: '',
                currencies: [
                    {
                        id: 1,
                        iconCurrency: 'fas fa-dollar-sign',
                        currencyCode: 'VND',
                        currencyFlag:'vietnam.png',
                        currencyname: 'Vietnamese Dong',

                    },
                    {
                        id: 2,
                        iconCurrency: 'fas fa-dollar-sign',
                        currencyCode: 'USD',
                        currencyFlag:'usa.png',
                        currencyname: 'United Stated Dollar',
                    },
                    {
                        id: 3,
                        iconCurrency: 'fas fa-euro-sign',
                        currencyCode: 'EUR',
                        currencyFlag:"flag-of-europe.png",
                        currencyname: 'Euro',
                    },
                    {
                        id: 4,
                        iconCurrency: 'fas fa-yen-sign',
                        currencyCode: 'JPY',
                        currencyFlag:"japan.png",
                        currencyname: 'Japanese Yen',
                    },
                    {
                        id: 5,
                        iconCurrency: 'fas fa-dollar-sign',
                        currencyCode: 'KRW',
                        currencyFlag:'south-korea.png',
                        currencyname: 'Korea Won',
                    },
                    {
                        id: 6,
                        iconCurrency: '',
                        currencyCode: 'CNY',
                        currencyFlag: "china.png",
                        currencyname: 'Yuan Renminbi',
                    },
                    {
                        id: 7,
                        iconCurrency: 'fas fa-dollar-sign',
                        currencyCode: 'RUB',
                        currencyFlag:"russian-federation.png",
                        currencyname: 'Rubles',
                    },
                    {
                        id: 8,
                        iconCurrency: 'fas fa-dollar-sign',
                        currencyCode: 'BRL',
                        currencyFlag:"brazil.png",
                        currencyname: 'Reais',
                    },
                    {
                        id: 9,
                        iconCurrency: 'fas fa-dollar-sign',
                        currencyCode: 'GBP',
                        currencyFlag:"great-britain.png",
                        currencyname: 'Pound',
                    },
                    {
                        id: 10,
                        iconCurrency: 'fas fa-dollar-sign',
                        currencyCode: 'INR',
                        currencyFlag:"india.png",
                        currencyname: 'India Rupee',
                    },
                    {
                        id: 11,
                        iconCurrency: 'fas fa-dollar-sign',
                        currencyCode: 'LAK',
                        currencyFlag:"laos.png",
                        currencyname: 'Lao Kip',
                    },
                    {
                        id: 12,
                        iconCurrency: 'fas fa-dollar-sign',
                        currencyCode: 'THB',
                        currencyFlag:"thailand.png",
                        currencyname: 'Baht',
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
                    console.log(self.inforUser.CurrencyCode);
                })


        },

        methods: {
            getFlag(temp) {
                return 'https://img.icons8.com/color/48/000000/' + temp;
            },
            selectCurrency(temp) {
                return this.select_currency = temp;
            },
            active_icon(temp) {
                var divs = document.getElementsByClassName("icon-check");
                console.log(divs);
                for (var i = 0; i < divs.length; i++) {
                    divs[i].classList.remove('active');
                }
                document.getElementById(temp).className += ' active';


            },

            postCurrency() {
                axios.post("http://localhost:8080/Services/FinanceService.svc/json/GetLastestSynchronizeData", {
                    synchronizeObjectParam: { userId: this.inforUser.UserId, IsoLastSynchronizeDateTime: "", uuidDevice: "null", syncLoadType: 2, }

                })
                    .then(res => {
                        let temp = res.data.userInfoData;
                        temp.CurrencyCode = this.select_currency;
                        return temp
                    })
                    .then(temp => {
                        axios.post("http://localhost:8080/Services/FinanceService.svc/json/SynchronizeData", {
                            userId: this.inforUser.UserId,
                            uuidDevice: "",
                            synchronizeData: {
                                userInfoData: temp
                            },

                        })
                            .then(response => {
                                console.log(response);
                                this.resultMessage = response.data.resultMessage;
                                console.log(this.resultMessage);
                            })

                    }
                    );
                if (this.resultMessage === "Success") {
                    this.inforUser.CurrencyCode = this.select_currency;
                    console.log("OK")
                }
                else {
                    console.log("false");
                }

            },
            
            

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
            },

            currenciesSearch() {

                return this.currencies.filter(item => {
                    return item.currencyname.toLowerCase().includes(this.search.toLowerCase()) || item.currencyCode.toLowerCase().includes(this.search.toLowerCase());

                })
            },
           
        },

        props: ['hide'],




    }
</script>
<style scoped>
    .container-currency {
        background: white;
        height: 682px;
    }

    button.back_settings {
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

    .header_language {
        font-size: 30px;
        padding-top:10px;
    }

        .col-sm-12.header_language span {
            color: #17a2b8;
        }

    .language__item button.active {
        display: block;
    }

    .search-bar {
        margin-left: 0;
        width: 600px;
        padding: 0px;
        height: 40px;
        border-radius: 15px;
        border: 1px solid black;
    }

    .button_money {
        text-align: right;
        margin-bottom: 0px;
    }

    .btn-done {
        width: 120px;
        color: white;
        background: #17a2b8;
        height: 90px;
        border: none;
        margin-right: 0px;
        bottom: 0px;
    }

    .item-in-list:hover, active {
        background-color: #1088C0;
        height: 100%;
        margin: 0px;
        color: white;
    }

    .btn-done:hover {
        background: #1088C0;
        outline:none !important;
    }

    .active {
        display: flex !important;
    }

    .icon-check {
        display: none;
    }

    .list-currency {
        height: 456px;
        max-height: 456px;
     
    }

        .list-currency.scroll {
            margin: 4px, 4px;
            padding: 4px;
            overflow-x: hidden;
            overflow-x: auto;
            text-align: justify;
        }

        .list-currency::-webkit-scrollbar {
            width: 5px;
        }

        .list-currency::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        .list-currency::-webkit-scrollbar-thumb {
            background: #888;
            
        }

            .list-currency::-webkit-scrollbar-thumb:hover {
                background: #555;
            }
       input[type=text]{
           outline:none !important;
           outline-color:none;
           background-color:#e9ebee;
           font-size:18px;
           border:1px solid #888;
           width:600px;
           height:40px;
           padding: 12px 40px;
           border-top:none;
           border-left:none;
           border-right:none;
       }
       input[type=text]:focus {
    outline:none;
}
       .input-div{

       }
       
</style>