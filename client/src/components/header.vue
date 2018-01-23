<template>
    <header>
        <a href="/" class="brand">
            <img src="../assets/img/logo.svg" alt="#">
        </a>
        <ul class="nav">
            <li v-for="item in list">{{item.name}}</li>
        </ul>
    </header>    
</template>
<script>
    export default {
        data() {
            return {
                list:[{
                    name: '关于',
                },{
                    name: '设置',
                }]
            }
        }
    }
</script>
<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between;
    padding: 5px 60px 5px 60px;
    background: #444;
    color: #ccc;
    .brand {
        display: block;
        width: 120px;
        height: 40px;
        line-height: 40px;
    }
    .nav {
        display: flex;
        line-height: 40px;
        li {
            margin-left: 10px;
            cursor: pointer;
        }
    }
}
</style>
