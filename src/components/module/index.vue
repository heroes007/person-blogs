<template>
    <div class="module">
        <div class="module-content">
            <div class="module-bgc">
                <div class="module-content-title">模块的测试</div>
                <div class="module-content-message">模块的测试</div>
            </div>
        </div>
        <div class="module-message">
            <div style="display: flex">
                <div>2019.1.1</div>
                <div>2019.1.1</div>
                <div>2019.1.1</div>
                <div>2019.1.1</div>
            </div>
            <div>阅读全文</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
    .module {
        margin: 15px;
        height: 340px;
        border-radius: 20px;
        background-color: #fff;
        overflow: hidden;
    }

    .module-content {
        height: 300px;
        background-image: url('https://xiaoyou66.com/wp-content/themes/kratos/static/images/thumb/01f16c83ba7b3a42969a4cba995b3fc8c551b8ac.png');

        .module-bgc {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, .3);
            transition: padding-bottom 0.2s;

            &:hover {
                padding-bottom: 50px;
                .module-content-message {
                    display: inline-block;
                }
            }
            .module-content-title {
                font-size: 30px;
                color: #fff;
            }

            .module-content-message {
                display: none;
                color: #fff;
            }
        }
    }

    .module-message{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0 20px;
    }
</style>
