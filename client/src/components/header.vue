<template>
    <header>
        <a href="/" class="brand">
            <img src="../assets/img/logo.svg" alt="#">
        </a>
        <ul class="nav">
            <li v-for="(item,index) in list" @click='liClickHandler(index)' :key="index">{{item.name}}</li>
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
                },{
                    name: '登录',
                }]
            }
        },
        methods:{
            liClickHandler(index) {
                console.log(index)
                switch(index) {
                    case 0: this.$router.push('/about') 
                            break
                }
            }
        }
    }
</script>
<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
        flex-wrap: wrap;
        line-height: 40px;
        li {
            margin-left: 10px;
            cursor: pointer;
        }
    }
}
</style>
