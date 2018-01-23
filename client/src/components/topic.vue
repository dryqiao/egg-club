<template>
    <div class="topic">
        <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="meneSelectHandler">
            <el-menu-item v-for="item in menuList" :index="item.index" :key="item.index">{{item.text}}</el-menu-item>
        </el-menu>
        <div class="topic_list">
            <div v-for="(item,index) in topicList" :key="index" class="topic_cell">
                <a href="" class="user_avatar">
                    <img src="../assets/img/logo.svg" alt="">
                </a>
                <span class="counts">
                    <span title="回复数">{{item.reply_count}}</span>
                    <span>/</span>
                    <span title="浏览数" class="visit_count">{{item.visit_count}}</span>
                </span>
                <span class="topic_title" @click="titleClickHandler(item.key)">{{item.title}}</span>
                <span class="last_active_time">
                    <img src="../assets/img/logo.svg" alt="">
                    <span>{{item.lastActiveTime}}</span>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: "1",
                menuList: [{
                    text: '全部',
                    index: "1"
                }, {
                    text: '精华',
                    index: "2"
                }, {
                    text: '分享',
                    index: "3"
                }],
                topicList: [{
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime:'3小时前'
                }]
            }
        },
        methods: {
            meneSelectHandler(index) {
                console.log(index)
            },
            titleClickHandler(title) {
                console.log(title)
            }
        }


    }

</script>
<style lang="less" scoped>
    .topic_cell {
        display: flex;
        padding: 10px;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #cccccc;
        &:hover {
            background-color: #f6f6f6;
        }
        .user_avatar {
            background-color: red;
            img {
                width: 30px;
                height: 30px;
            }
        }
        .counts {
            margin-left: 10px;
            font-size: 10px;
            .visit_count {
                color:#cccccc;
            }
        }
        .topic_title {
            margin-left: 20px;
            font-size: 16px;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
        .last_active_time {
            display: flex;
            float: right;
            img {
                width: 30px;
                height: 30px;
            }
        }
    }

</style>
