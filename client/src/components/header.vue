<template>
    <header>
        <a href="/" class="brand">
            <img src="../assets/img/logo.svg" alt="#">
        </a>
        <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" class="nav-list">
            <el-menu-item index="0" @click="createTopic">发帖</el-menu-item>
            <el-menu-item index="1" @click="aboutClick">关于</el-menu-item>
            <el-menu-item index="2" @click="setClick">设置</el-menu-item>
            <el-menu-item v-if="!username" index="3" @click="logInClick">登录</el-menu-item>
            <el-submenu index="4" v-else>
                <template slot="title">{{username}}</template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3" @click="logOut">登出</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-dialog title="登录" :visible.sync="dialogFormVisible" width="500px" center>
            <el-form :model="logData" :rules="rules" label-width="80px" label-position="left">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="logData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="logData.password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="signUp">注册</el-button>
                <el-button type="primary" @click="logIn">登录</el-button>
            </div>
        </el-dialog>
    </header>
</template>
<script>
    import USER from "../api/users"
    import SESSION from '../api/session'
    export default {
        data() {
            return {
                dialogFormVisible: false,
                username: '',
                logData: {
                    username: "",
                    password: ""
                },
                rules: {
                    username: [{
                            required: true,
                            message: '请输入账号',
                            trigger: 'blur'
                        },
                        // {
                        //     min: 3,
                        //     max: 5,
                        //     message: '长度在 3 到 5 个字符',
                        //     trigger: 'blur'
                        // }
                    ],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            createTopic() {
                this.$router.push("/write")
            },
            aboutClick() {
                this.$router.push("/about")
            },
            setClick() {},
            logInClick() {
                this.dialogFormVisible = true
            },
            logIn() {
                //登录
                SESSION.logIn(this.logData).then(res => {
                    if (res.c === 1) {
                        this.$cookies.set('user_token', res.data.token)
                        this.dialogFormVisible = false
                        this.$message.success({
                            message: '登录成功!',
                            type: 'success'
                        });
                        this.username = this.logData.username
                    }
                })
            },
            logOut() {
                SESSION.logOut(this.username).then(res => {
                    if(res.c === 1) {
                        this.username =  null
                        this.$cookies.remove('user_token')
                        this.$message.success({
                            message: '登出成功!',
                            type: 'success'
                        });
                    }
                })
            },
            signUp() {
                //注册
                USER.signUp(this.logData);
            }
        }
    };

</script>
<style lang="less" scoped>
    header {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 5px 60px 5px 60px;
        background: #545c64;
        color: #ccc;
        .brand {
            display: block;
            width: 120px;
            height: 40px;
            line-height: 40px;
        }
        .nav-list {
            border-bottom: none;
            .el-menu li {
                min-width: 100px;
            }
        }
    }

</style>
