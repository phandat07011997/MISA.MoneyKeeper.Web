<template>
    <div class="container-notification border">
        <div class="title-notification border-bottom p-2"><h3>Thông báo</h3></div>
        <div class="body-notification">
            <table v-for="noti in notifications" v-bind:key="noti.id">
                <tr class="border-bottom" >
                    
                </tr>
                
            </table>
        </div>
        <div class="footer-notification"></div>
    </div>
</template>
<script>
    export default {
        name: 'notification',
        data() {
            return {
                notifications: [
                    {
                        id: 1,
                        notificationName: '',
                        notificationDecription:'',
                    },
                    {
                        id: 2,
                        notificationName: '',
                        notificationDecription:'',
                    },
                    {
                        id: 3,
                        notificationName: '',
                        notificationDecription:'',
                    },

            ]
            }
        }
    }
</script>
<style scoped>
    .container-notification{
        position:absolute;
        width:500px;
        height:600px;
        max-height:1000px;
        margin-top:500px;
            margin-top: 0;
    margin-left:76%;
        margin-left: calc(100%-60px);
        background-color:white; 
        z-index:1;

    }
    .body-notification table{
        width:100%;
    }
    .body-notification table tr{
        width:100%;
        height:60px;
        display:flex;
        justify-content:start;
        align-items:center;
        padding-left:8px;
        
    }
    .list-currency.scroll {
            margin: 4px, 4px;
            padding: 4px;
            overflow-x: hidden;
            overflow-x: auto;
            text-align: justify;
        }

        .list-currency::-webkit-scrollbar {
            width: 5px;
        }

        .list-currency::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        .list-currency::-webkit-scrollbar-thumb {
            background: #888;
            
        }

            .list-currency::-webkit-scrollbar-thumb:hover {
                background: #555;
            }
</style>