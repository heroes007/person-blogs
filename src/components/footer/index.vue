<template>
    <div class="footer">
        <div class="footer-content">
            <div>我的个人博客</div>
            <div>当前时间：{{date}}</div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "index",
        data() {
            return {
                date: ''
            }
        },
        mounted() {
            setInterval(() => {
                this.date = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
            }, 1000)
        }
    }
</script>

<style scoped>
    .footer{
        height: 300px;
        width: 100%;
        background-color: rgba(35,40,45,.8);
        position: relative;
        bottom: 0;
    }
    .footer-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 100%;
    }
</style>
