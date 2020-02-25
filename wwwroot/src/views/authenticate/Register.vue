<template>
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
</template>