<template>
  <i
    class="collapse-button"
    :class="[isOpenData ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"
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
    margin-top: 4px;
    font-size: 25px;
    color: gray;
  }
</style>