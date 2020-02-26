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
                <input type="text" class="form-control" id="inputFullName" v-model="UserInfoData.FullName" />
              </div>
              <div class="form-group">
                <label for="inputFullName">Số điện thoại</label>
                <input type="number" class="form-control" id="inputFullName" v-model="UserInfoData.Mobile" />
              </div>
              <div class="form-group">
                <label for="inputFullName">Ngày sinh</label>
                <input type="date" class="form-control" id="inputFullName" v-model="UserInfoData.IsoBirthDay"/>
              </div>
              <div class="form-group">
                <label for="inputFullName">Giới tính</label>
                <br />
                <label class="radio-inline">
                  <input type="radio" name="optradio" value="0" v-model="UserInfoData.Gender"/>Nam
                </label>
                &nbsp;
                <label class="radio-inline">
                  <input type="radio" name="optradio" value="1" v-model="UserInfoData.Gender"/>Nữ
                </label>
              </div>
              <div class="form-group">
                <label for="inputAddress">Địa chỉ</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  value="Số 2 ngõ 124/22/44 Âu Cơ"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress">Nghề nghiệp</label>
                <input type="text" class="form-control" id="inputAddress" v-model="UserInfoData.JobName" />
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
export default {
  props: ["modal"],
  data() {
    return {
      UserInfoData: {
        LastChangedDate: null,
        TableKey: 0,
        UserId: "ac1118ab-d601-43a4-8336-2369c8c2de04",
        Address: null,
        AvatarName: "740cc942-da25-4cdd-b038-def600c94fc6.jpeg",
        Commune: null,
        CountDayRemaining: -1,
        Country: null,
        Currency: "en-US",
        CurrencyCode: "VND",
        District: null,
        Email: "truonglv@gmail.com",
        FeatureLimit: "",
        FirstName: null,
        FullName: "truonglv",
        Gender: 0,
        InitializeLanguage: "vi-VN",
        IsAdsRemove: false,
        IsAlreadySetPassword: true,
        IsAutoMigrated: false,
        IsConfirmShareCode: true,
        IsInitializingAccount: true,
        IsMigrated: false,
        IsPremium: false,
        IsSyncContact: true,
        IsoBirthDay: "01/01/1753 12:00:00 AM",
        IsoCreatedDate: "09/06/2019 06:09:02 PM",
        IsoEndDate: "01/01/1753 12:00:00 AM",
        IsoStartDate: "01/01/1753 12:00:00 AM",
        JobName: "Sinh viên",
        Language: "vi-VN",
        LastName: null,
        ListLinkAccount: null,
        ManagingPurpose: 0,
        MisaUserID: "1433154",
        Mobile: "0396934750",
        MonthlySalary: null,
        Password: null,
        ProductID: "",
        Province: null,
        Relationship: 0,
        ResponseResult: null,
        SettingInfoJson: null,
        TotalCoin: 270,
        UUIDDevice: null,
        UserName: "truonglv@gmail.com"
      }
    };
  },
  components: {
    Popup
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
