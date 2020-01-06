<template>
    <div class="content">
        <div class="overlay"></div>
        <div class="header">
            <Dropdown v-for="(item, index) in navigatationList" :key="index" placement="bottom">
                <Icon :type="item.icon || 'ios-home'" color="#fff" size="18" style="margin-right: 4px;"/>
<!--                <a :href="item.url">{{item.father}}</a>-->
                <span @click="handleRouter(item)">{{item.father}}</span>
                <DropdownMenu slot="list" v-for="(item1, index1) in item.son" :key="index1">
                    <DropdownItem>
                        <span @click="handleRouter(item1)">{{item1.name}}</span>
<!--                        <a :href="item1.url">{{item1.name}}</a>-->
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="new-header">
            hello world
        </div>
    </div>
</template>

<script>
    import navigatationList from './navigataion.js'

    export default {
        data() {
            return {
                navigatationList,
                list:[1,2,3]
            }
        },
        methods: {
            handleRouter(item) {
                this.$router.push(item.url)
            }
        }
    }
</script>

<style scoped lang="less">
    .content{
        background-image: url("https://upload-chen.oss-cn-beijing.aliyuncs.com/03.jpg");
        height: 320px;
        background-position: center center;
        background-size: cover;
        position: relative;
    }
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        background-color: rgba(66,64,64,.2);
        height: 100%;
    }
    .new-header{
        display: none;
    }
    .header{
        background-color: rgba(40,42,44,.6);
        padding: 0 80px;
        display: flex;
        z-index: 2;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        flex-wrap: wrap;
        justify-content: center;

        .ivu-dropdown{
            padding: 7px 18px;

            /deep/ .ivu-select-dropdown{
                background-color: rgba(93,93,93,.8);
                color: #fff;
                padding: 0;
                margin: 7px 0;
                border-radius: 0;
                text-align: center;
            }
            /deep/ .ivu-dropdown-item:hover{
                background-color: #999;
            }
        }
        span{
            color: #fff;
            font-size: 16px;
            padding: 7px 0px;
        }
    }
    .header-drop{
        background-color: rgba(40,42,44,.6);
        color: #fff;
    }
    @media screen and (max-width: 800px) {
        .header{
            display: none;
        }
        .new-header{
            display: block;
        }
    }
</style>
