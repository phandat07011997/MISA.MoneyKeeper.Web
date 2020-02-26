<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <div class="hello">
                    <div class="login">
                        <div class="main">
                            <div class="logo">
                                <img src="https://testid.misa.com.vn/img/Logo%20MISA_VN.svg" alt="misa-icon" />
                            </div>
                            <div class="content" v-if="lang === 'VN'">
                                <div class="left">
                                    <h2>Đăng nhập</h2>
                                    <p>Một tài khoản sử dụng tất cả các ứng dụng của MISA</p>

                                    <input type="text"
                                           id="email"
                                           name="email"
                                           v-model="email"
                                           placeholder="Số điện thoại hoặc email" />
                                    <p class="errorEmail text-danger"></p>
                                    <input type="password"
                                           id="pass"
                                           name="pass"
                                           v-model="pass"
                                           placeholder="Mật khẩu" />
                                    <span toggle="#pass"
                                          class="fa fa-fw fa-eye field-icon toggle-password"
                                          @click="hello()"
                                          style="cursor: pointer"></span>
                                    <p class="error_pass text-danger"></p>
                                    <a class="forget-pass">Bạn quên mật khẩu</a>
                                    <button class="nut-login" @click="dangnhap()">Đăng nhập</button>

                                    <span>Bạn chưa có tài khoản,</span>
                                    <a @click="signIn">Đăng ký ngay</a>
                                </div>
                                <div class="right">
                                    <p>Hoặc đăng nhập với</p>
                                    <button>
                                        <i class="fa fa-circle-o-notch fa-spin"></i>
                                    </button>
                                    <button>
                                        <i class="fa fa-cog fa-spin"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="content" v-if="lang === 'EN'">
                                <div class="left">
                                    <h2>Sign in</h2>
                                    <p>One account uses all MISA applications</p>

                                    <input type="text"
                                           id="email"
                                           name="email"
                                           v-model="email"
                                           placeholder="Phone number or email" />

                                    <input type="password"
                                           id="pass"
                                           name="pass"
                                           v-model="pass"
                                           placeholder="Password" />
                                    <span toggle="#pass"
                                          class="fa fa-fw fa-eye field-icon toggle-password"
                                          @click="hello()"
                                          style="cursor: pointer"></span>
                                    <a class="forget-pass">Forgot password</a>
                                    <button class="nut-login" @click="dangnhap()">Sign in</button>
                                    <p class="error text-danger"></p>

                                    <span>Do not have an account,</span>
                                    <a @click="signIn">Sign up now</a>
                                </div>
                                <div class="right">
                                    <p>Or sign in with</p>
                                    <button>
                                        <i class="fa fa-circle-o-notch fa-spin"></i>
                                    </button>
                                    <button>
                                        <i class="fa fa-cog fa-spin"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <a class="language"
                           @click="changeLanguage()">{{ this.lang === "VN" ? "English" : "Tiếng Việt"}}</a>
                    </div>

                    <div class="signup">
                        <div class="main">
                            <div class="logo">
                                <img src="https://testid.misa.com.vn/img/Logo%20MISA_VN.svg" alt />
                            </div>
                            <div class="content">
                                <div class="left">
                                    <h2>Create account</h2>
                                    <p>Sign up below to create a secure account</p>
                                    <label for="email_signUp">Email</label>
                                    <input type="text" id="email_signUp" name="email_signUp" v-model="email" />
                                    <label for="pass_signUp">Mat khau</label>
                                    <input type="password" id="pass_signUp" name="pass_signUp" v-model="pass" />
                                    <span toggle="#pass_signUp" class="fa fa-fw fa-eye field-icon toggle-password"></span>

                                    <button class="nut-login" @click="dangky()">Dang Ky</button>
                                    <p class="error text-danger"></p>
                                    <!-- <a href="#" class="forget-pass">Quen mat khau</a> -->
                                    <span>Already have account?</span>
                                    <a @click="signUp">Sign In</a>
                                </div>
                                <div class="right">
                                    <button>
                                        <i class="fa fa-smile-o"></i>
                                    </button>
                                    <button>
                                        <i class="fa fa-sign-language"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="language" @click="changeLanguage()"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import qs from "qs";
    export default {
        name: "Login",
        //   props: {
        //     msg: String
        //   },
        data() {
            return {
                email: "",
                pass: "",
                lang: "EN",
            };
        },
        methods: {
            signIn() {
                document.querySelector(".login").style.display = "none";
                document.querySelector(".signup").style.display = "block";
                // document.getElementById("demo").innerHTML = x;
            },

            signUp() {
                document.querySelector(".signup").style.display = "none";
                document.querySelector(".login").style.display = "block";
                // document.getElementById("demo").innerHTML = x;
            },
            dangnhap() {
                if (this.email === "") {
                    document.querySelector('p.errorEmail').innerHTML = "Yêu cầu nhập email"

                }
                if (this.pass === "") {
                    document.querySelectorAll("p.error_pass").innerHTML =
                        "Bạn nên điền password";
                }
                if (this.email && this.pass) {
                    var self = this;
                    axios
                        .post("http://localhost:8080/AuthenticationService.svc/json/login", {
                            username: this.email,
                            password: this.pass
                        })
                        .then(function (response) {
                            alert(response);
                            localStorage.setItem("user", JSON.stringify({
                                username: self.email,
                                password: self.pass
                            }));
                            window.location.href = "/";
                        })
                        .catch(function (error) {
                            alert(error);
                        });
                }
            },

            dangky() {
                if (this.email === "" || this.pass === "") {
                    document.querySelector("p.error").innerHTML =
                        "Ban nen dien du thong tin";
                } else {
                    const url =
                        "http://testnew.sothuchi.vn/Services/MISAMembershipService.svc/json/CreateUser";
                    const data = {
                        userObject: {
                            userInfo: {
                                UserName: this.email,
                                Password: this.pass
                            }
                        }
                    };

                    const options = {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        data: qs.stringify(data),
                        url
                    };
                    axios(options).then(response => alert(response));
                }
            },
            hello() {
                var toggle__pass = document.querySelectorAll(".toggle-password")[0];
                toggle__pass.classList.toggle("fa-eye");
                toggle__pass.classList.toggle("fa-eye-slash");
                var toggle = toggle__pass.getAttribute("toggle");
                var toggle__button = document.querySelectorAll(toggle)[0];

                var input = toggle__button.getAttribute("type");

                if (input === "password") {
                    toggle__button.setAttribute("type", "text");
                } else {
                    toggle__button.setAttribute("type", "password");
                }
            },
            changeLanguage() {
                if (this.lang === "VN") {
                    this.lang = "EN";
                } else {
                    this.lang = "VN";
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .login {
        width: 560px;
        margin: auto;
    }

    .main {
        /* background-color: #e2e2db; */
        border-radius: 12px;
        text-align: center;
    }

    .content {
        width: 100%;
        /* margin-top: 263px; */
        overflow: hidden;
        padding: 10px 40px;
        box-sizing: border-box;
        /* border-radius: 30px; */
        /* text-align: center; */
        box-shadow: 5px 0 26px #ccc;
    }

    .left {
        margin-right: 0px;
    }

    h2 {
        font-size: 33px;
        margin-bottom: 10px;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 7px;
        border-radius: 6px;
        outline: 0;
        border: 1px solid gray;
        display: block;
        margin-bottom: 20px;
    }

        input[type="text"]:focus,
        input[type="password"]:focus {
            border: 1px solid blue;
        }

    .nut-login {
        display: block;
        padding: 9px;
        width: 100%;
        border-radius: 20px;
        background-color: #0a5afdf5;
        color: white;
        font-size: 20px;
        margin-bottom: 10px;
        cursor: pointer;
        outline: none;
        border: none;
    }

    a.forget-pass {
        display: block;
        text-align: right;
        margin-bottom: 10px;
        color: #0a5afdf5;
    }

    span {
        text-align: center;
        display: inline-block;
    }

    a {
        color: #0a5afdf5;
        cursor: pointer;
        transition: 0.4s;
    }

        a:hover {
            text-decoration: none;
        }

    .right p {
        margin-top: 10px;
        color: gray;
        font-size: 14px;
    }

    .right button {
        border: 1px solid #ccc;
        padding: 15px 19px;
        display: inline-block;
        /* margin-bottom: 20px; */
        /* width: 100%; */
        border-radius: 50%;
        cursor: pointer;
        outline: none;
    }

        .right button:last-child {
            margin-left: 8px;
        }

    .signup {
        display: none;
        margin-left: 30%;
    }

    p {
        margin-bottom: 15px;
        color: black;
    }

    img {
        padding: 10px;
        display: block;
        margin: auto;
    }

    .logo {
        padding-bottom: 20px;
    }

    .field-icon {
        float: right;
        left: -8px;
        top: -48px;
        position: relative;
        z-index: 2;
    }

    .language {
        display: block;
        text-align: center;
        margin-top: 20px;
    }

        .language:hover {
            text-decoration: underline;
        }

    .container-fluid {
        position: relative;
        background: url("https://testid.misa.com.vn/img/bg.svg");
        height: 100vh;
    }

    .col-sm-6.offset-sm-3 {
        position: absolute;
        /* top: 50%; */
        /* left: 50%; */
        transform: translate(0%, 30%);
    }

    .text-danger {
        text-align: left;
    }
</style>
