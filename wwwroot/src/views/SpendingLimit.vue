<template>
    <div class="limit">
        <div class="limit-item">
            <div class="limit-item-one"></div>
            <div class="limit-item-two"></div>
        </div>
        <div class="limit-item">
            <div class="limit-item-three"></div>
        </div>
    </div>
</template>
<style scoped>
    .limit {
        width:100%;
        height:100%;
        padding: 0px 20px 0px 20px;
    }
    .limit-item {
        width:100%;
        height:45%;
        display:flex;
        justify-content: space-between;
        margin-top:30px;
    }
    .limit-item-one {
        width:49%;
        height:100%;
        background-image: url('../assets/img/hanmuchi.png');
        background-size:contain;
    }
    .limit-item-two {
        width:49%;
        height:100%;
        background-image: url('../assets/img/hanmuc1.png');
        background-size:contain;
    }
    .limit-item-three {
        width:100%;
        height:100%;
        background-image: url('../assets/img/hanmuc2.png');
        background-size:contain;
    }
</style>