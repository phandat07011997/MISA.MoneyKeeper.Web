<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            Please view help in <a href="sothuchi.vn" target="_blank" rel="noopener">www.sothuchi.vn</a>
        </p>
        <h3>Go to MISA website</h3>
        <ul>
            <li><a href="https://www.misa.com.vn" target="_blank" rel="noopener">home</a></li>
            <li><a href="https://misa.com.vn/lien-he" target="_blank" rel="noopener">contact</a></li>
        </ul>
        <h3>MISA Product</h3>
        <ul>
            <li><a href="https://misa.com.vn/san-pham/plid/1/Phan-mem-Ke-toan-Doanh-nghiep" target="_blank" rel="noopener">Bussiness</a></li>
            <li><a href="https://misa.com.vn/san-pham/plid/13/Phan-mem-ke-toan-HCSN" target="_blank" rel="noopener">Group country</a></li>
            <li><a href="https://www.misa.com.vn/san-pham/plid/19/phan-mem-quan-ly-nha-hang" target="_blank" rel="noopener">Cukcuk.vn</a></li>
            <li><a href="https://twitter.com/misajsc" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://misa.com.vn" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>MISA Forum</h3>
        <ul>
            <li><a href="https://www.misa.com.vn/cong-ty/van-hoa#!misa-va-toi" target="_blank" rel="noopener">MISA and me</a></li>
            <li><a href="https://www.misa.com.vn/Trang-tuyen-dung/Vi-tri-tuyen-dung" target="_blank" rel="noopener">jod day</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
