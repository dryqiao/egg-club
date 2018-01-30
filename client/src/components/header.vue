<template>
    <header>
        <a href="/" class="brand">
            <img src="../assets/img/logo.svg" alt="#">
        </a>
        <ul class="nav">
            <li v-for="(item,index) in list" @click='liClickHandler(index)' :key="index">{{item.name}}</li>
        </ul>
        <el-dialog title="登录" :visible.sync="dialogFormVisible" width="500px" center>
            <el-form :model="logData" label-width="80px" label-position="left">
                <el-form-item label="账号">
                    <el-input v-model="logData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="logData.password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="signUp">注册</el-button>
                <el-button type="primary" @click="signIn">登录</el-button>
            </div>
        </el-dialog>
    </header>
</template>
<script>
import api from '../api/users'
    export default {
        data() {
            return {
                dialogFormVisible:false,
                logData:{
                    username: '',
                    password: ''
                },
                list: [{
                    name: '关于',
                }, {
                    name: '设置',
                }, {
                    name: '登录',
                }]
            }
        },
        methods: {
            liClickHandler(index) {
                switch (index) {
                    case 0:
                        this.$router.push('/about')
                        break
                    case 2:
                        this.dialogFormVisible = true
                        break
                }
            },
            signIn() {
                //登录
            },
            signUp() {
                //注册
                api.signUp(this.logData)
            },
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
