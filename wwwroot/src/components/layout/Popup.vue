
    <template>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="col-md-4 modal-title" id="exampleModalLabel">
                                <div class="col-md-12"><slot name="headerExpense"></slot></div>
              
                        </div>
                        <div class="col-md-4">
                            <div class=""><slot ></slot></div>
                        </div>
                        
                        <button type="button" class=" close button-style" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot name="contentModal"></slot>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal"> <i class="far fa-trash-alt"></i> Hủy</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fas fa-save"></i> Lưu</button>
                    </div>
                </div>
            </div>
            </div>
    </template>
    <script>
        export default {
        name:'popup',
        data: () => {
            return {
            };
            },
        //props: [expense],
    };
    </script>
<style >
    .modal-content{
      position: absolute;
      margin-top: 75px;
      left: 50%;
      transform: translateX(-50%);
        max-width: 900px;
    /* width: 500px; */
    min-width: 500px;
    min-height: 700px;
        
    }


    .modal-dialog {
        /*position:*/ 
    }
    .modal-header {
        text-align: center;
    background: #319e4e;
    color: white;
    font-size: 20px;
    }

    .button-style {
        margin-right: 20px;
        color: #fff;
        opacity: 1 !important;
    }


    @media (min-width: 576px) {
        .modal-dialog {
            max-width: 900px !important;
            margin: 1.75rem auto;
        }
    }
</style>