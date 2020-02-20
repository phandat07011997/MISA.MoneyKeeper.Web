
<template>
    <div class="d-flex">
        <Popup><template v-slot:headerExpense>Them ghi chep</template>
               <template v-slot:contentModal>
                   Noi dung cac chu can lam
               </template>
        </Popup>
    </div>
</template>
<script>
    import Popup from './layout/Popup.vue'
    export default {
        data() {
            return {
            };
            },
        components: {
            Popup,
        }
    }
</script>
<style scoped>
</style>