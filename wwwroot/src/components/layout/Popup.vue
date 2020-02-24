

<template>
    <div class="modal fade" v-bind:id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-icon">
                        <slot name="iconModal"></slot>
                    </div>
                    <div class="col-md-4 modal-title" id="exampleModalLabel">
                        <div class="col-md-12">
                            <slot name="headerExpense"></slot>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class=""><slot></slot></div>
                    </div>

                    <button type="button" class=" close button-style" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="contentModal"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="buttonModal"></slot>
                    <!--<button type="button" class="btn btn-danger" data-dismiss="modal"> <i class="far fa-trash-alt"></i> Hủy</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fas fa-save"></i> Lưu</button>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'popup',
        props: [
            'modal'
        ],
        data: () => {
            return {
            };
        },
        //props: [expense],
    };
    </script>
<style lang="scss" scoped>
   @import "../../assets/css/layout/pop-up.scss";
</style>