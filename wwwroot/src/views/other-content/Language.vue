<template>
    <div class="container" v-if="!hide">
        <div class="row">
            <div class="col-sm-12 header_language">
                <button class="back_settings" @click="$emit('hidden-content')">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <span>Language</span>
            </div>
            <div class="col-sm-12 language__item" @click="select_language" >
                <span>Tiếng Việt</span>
                <br />
                <span>Vietnamese</span>

                <button class="active">
                    <i class="fas fa-check"></i>
                </button>
            </div>

            <div class="col-sm-12 language__item" @click="select_language">
                <span>English</span>
                <br />
                <span>English</span>

                <button>
                    <i class="fas fa-check"></i>
                </button>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3 offset-sm-9">
                <div class="button__finish" @click="change_language()">
                    Done
                </div>
            </div>
        </div>

        <p>{{ hello }}</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'language',
        data() {
            return {
                user: Object,
                lang: 'vi-VN',
            }
        },
        methods: {
            select_language(event) {
                var buttons = document.querySelectorAll(".language__item button");
                
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].classList.remove("active");
                }

                var currButton = event.target.querySelectorAll("button")[0];
                var span = currButton.parentElement.firstChild;
         
                if (span.innerHTML === "Tiếng Việt") {
                    this.lang = "vi-VN";
                } else {
                    this.lang = "en-US";
                }
                currButton.classList.add("active");
                //this.lang = title;
                console.log(this.lang)
            },
        
        change_language() {
            var self = this;
                var userName = "dinhduca7@gmail.com"
               
                console.log(userName);
                axios.get("http://localhost:8080/Services/MISAMembershipService.svc/json/GetUserInfo?userName=" + userName).then(function(response) {
                    console.log(response);
                    self.user = response;
                    
                })
                    .catch(function (err) {
                        console.log(err);

                    })
         
    }
    },

        computed: {
            hello() {
                return this.user.data ? this.user.data.UserId : "";
            }
        },
        props: ['hide']
    }
</script>

<style scoped>
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
    }

        .col-sm-12.header_language span {
            color: #17a2b8;
        }

    .language__item button.active {
        display: block;
    }

    span:first-child {
        font-size: 30px;
        font-weight: 500;
    }

    .language__item {
        border-bottom: 1px solid lightgray;
        margin: 0 10px;
        padding-bottom: 10px;
    }

        .language__item button {
            display: none;
            float: right;
            border: none;
            outline: none;
            background: none;
            color: #17a2b8;
            transform: translateY(-22px);
            margin-right: 20px;
        }

    .button__finish {
        padding: 10px;
        color: white;
        background: #17a2b8;
        text-align: center;
        margin-top: 30px;
        margin-right: -27px;
        margin-left: 89px;
        cursor: pointer;
    }
</style>

