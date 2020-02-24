<template>
  <i
    class="collapse-button"
    :class="[isOpenData ? 'fas fa-caret-down' : 'fas fa-caret-up']"
    href="#"
    data-toggle="collapse"
    v-bind:data-target="parNote"
    @click="isOpenData = !isOpenData"
  ></i>
</template>

<script>
export default {
  props: ["isOpen", "parNote"],
  data: function () {
        return {
            isOpenData: this.isOpen
        }
    }
};
</script>
<style lang="scss" scoped>
  .collapse-button{
    font-size: 35px;
    color: gray;
  }
</style>