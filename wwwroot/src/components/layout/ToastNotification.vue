<template>
    <div role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false" class="toast-style hideMe"  >
        <div class="toast-header">
            <strong class="mr-auto"><slot name="toast_title"></slot></strong>
            <small>11 mins ago</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            <slot name="toast_body"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'toast_notification',
        data() {
            return {
            }
        },
        
    }
</script> 
<style scoped>
    .toast-style{
        width:350px;
        background-color:white;
        z-index:3000;
        position:absolute;
        top:92%;
        left:80%;
        transform: translateX(-50%);
        transform:translateY(-50%);
    }
    .hideMe {
    -webkit-animation: cssAnimation 5s forwards; 
    animation: cssAnimation 5s forwards;
}
@keyframes cssAnimation {
    0%   {opacity: 1;}
    90%  {opacity: 1;}
    100% {opacity: 0;}
}
@-webkit-keyframes cssAnimation {
    0%   {opacity: 1;}
    90%  {opacity: 1;}
    100% {opacity: 0;}
}
</style>