<template>
  <div class="d-flex">
    <Popup v-bind:modal="modal">
      <template v-slot:iconModal>
        <img width="30" src="../../assets/img/edit-icon.png" />
      </template>
      
      <template v-slot:headerExpense>Thông tin tài khoản</template>
      
      <template v-slot:contentModal>
        <div>content</div>
      </template>
      <template v-slot:buttonModal>
        <button type="button" class="btn btn-danger" data-dismiss="modal"> <i class="far fa-trash-alt"></i> Hủy</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" ><i class="fas fa-save"></i> Lưu thay đổi</button>
      </template>
    </Popup>
  </div>
</template>
<script>
import Popup from "../layout/Popup.vue";
export default {
  props: ["modal"],
  components: {
    Popup
  }
};
</script>
