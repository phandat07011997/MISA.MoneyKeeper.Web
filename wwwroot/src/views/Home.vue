<template>
  <div class="home">
    <img alt="sothuchi logo" src="../assets/logo.jpg">
    <HelloWorld msg="Welcome to Money Keeper!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang="scss">
    img{
        width:150px;
    }
    </style>