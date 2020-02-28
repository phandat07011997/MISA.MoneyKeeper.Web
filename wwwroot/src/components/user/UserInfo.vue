<template>
  <div class="d-flex">
    <Popup v-bind:modal="modal">
      <template v-slot:iconModal>
        <img width="30" src="../../assets/img/edit-icon.png" />
      </template>

      <template v-slot:headerExpense>Thông tin tài khoản</template>

      <template v-slot:contentModal>
        <div class="row">
          <div class="col-sm-4">
            <span class="fileinput-button">
              <img src="../../assets/img/user-icon.png" />
              <input type="file" name="files[]" multiple />
              <p>Thay ảnh đại diện</p>
            </span>
          </div>
          <div class="col-sm-8">
            <form>
              <div class="form-group">
                <label for="inputFullName">Tên hiển thị</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputFullName"
                  v-model="userInfoData.FullName"
                />
              </div>
              <div class="form-group">
                <label for="inputFullName">Số điện thoại</label>
                <input
                  type="number"
                  class="form-control"
                  id="inputFullName"
                  v-model="userInfoData.Mobile"
                />
              </div>
              <div class="form-group">
                <label for="inputFullName">Ngày sinh</label>
                <input type="date" class="form-control" id="inputFullName" v-model="date" />
              </div>
              <div class="form-group">
                <label for="inputFullName">Giới tính</label>
                <br />
                <label class="radio-inline">
                  <input type="radio" name="optradio" value="0" v-model="userInfoData.Gender" />Nam
                </label>
                &nbsp;
                <label class="radio-inline">
                  <input type="radio" name="optradio" value="1" v-model="userInfoData.Gender" />Nữ
                </label>
              </div>
              <div class="form-group">
                <label for="inputAddress">Địa chỉ</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  v-model="userInfoData.Address"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress">Nghề nghiệp</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  v-model="userInfoData.JobName"
                />
              </div>
            </form>
          </div>
        </div>
      </template>
      <template v-slot:buttonModal>
        <button type="button" class="btn btn-danger" data-dismiss="modal">
          <i class="far fa-trash-alt"></i> Hủy
        </button>
        <button type="button" class="btn btn-success" data-dismiss="modal">
          <i class="fas fa-save"></i> Lưu thay đổi
        </button>
      </template>
    </Popup>
  </div>
</template>
<script>
import Popup from "../layout/Popup.vue";
import { mapGetters } from "vuex";
export default {
  props: ["modal"],
  data() {
    return {
      // date : this.moment(this.$store.state.userinfodata.userInfo.IsoBirthDay.toString())
      
      date : 1
       
    };
  },
  components: {
    Popup
  },
  // methods: {
  //   moment(date) {
  //     var moment = require("moment");
  //     return moment(date,"DD/MM/YYYY hh:mm:ss A").format("YYYY-MM-DD");
  //   }
  // },
  created() {
    this.$store.dispatch("fetchUserInfoData");
  },
  computed: {
    ...mapGetters(["userInfoData"])
  }
};
</script>
<style lang="scss" >
#userModal {
  .modal-content {
    min-height: 100px;
    max-width: 700px;
    .modal-body {
      .fileinput-button {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: 100%;
        border: 2px dotted #319e4e;
        border-radius: 5px;
        padding: 10px;
        color: #319e4e;
        font-size: 20px;
        text-align: center;
        img {
          width: 150px;
          height: 150px;
        }

        input {
          position: absolute;
          top: 0;
          right: 0;
          margin: 0;
          opacity: 0;
          -ms-filter: "alpha(opacity=0)";
          font-size: 200px !important;
          direction: ltr;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
