<template>
  <div class="edit-cat-popup">
    <Popup v-bind:modal="modal">
      <template v-slot:headerExpense>
        <h3 class="modal-title">Cảnh báo</h3>
      </template>
      <template v-slot:contentModal>
        <div class="modal-body">
            <h1>Chú ý:</h1>
            <h3>Bạn không được sửa, xóa hạng mục này!</h3>
        </div>
      </template>
      <template v-slot:buttonModal>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            <i class="far fa-trash-alt"></i> Đóng
          </button>
        </div>
      </template>
    </Popup>
  </div>
</template>

<script>
import Popup from "../../layout/Popup.vue";
export default {
  props: ["modal"],
  components: {
    Popup
  }
};
</script>

<style lang="scss" scoped>

</style>