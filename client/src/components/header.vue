<template>
    <header>
        <el-button type="primary">主要按钮</el-button>
        <a href="/"></a>
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
    padding: 5px 10px 5px 10px;
    height: 60px;
    background: #444;
    color: #ccc;
    .nav {
        display: flex;
        li {
            margin-left: 10px;
        }
    }
}
</style>
