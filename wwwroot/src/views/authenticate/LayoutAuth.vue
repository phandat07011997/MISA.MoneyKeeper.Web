<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <div class="hello">
                    <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    
</script>
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
