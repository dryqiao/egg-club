<template>
    <div class="topic">
        <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="meneSelectHandler">
            <el-menu-item v-for="item in menuList" :index="item.index" :key="item.index">{{item.text}}</el-menu-item>
        </el-menu>
        <div class="topic_list">
            <cell v-for="(item,index) in topicList" :key="index" :cellData="item"></cell>
        </div>
        <div class="block">
            <el-pagination @current-change="currentChangeHandler" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalSize">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import cell from './topic_cell'
    export default {
        components: {
            cell
        },
        data() {
            return {
                pageSize: 25,
                totalSize: 250,
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
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞发哈UI合法佛玩红发红玩挖肺晚饭后',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }, {
                    title: 'gfiafuia发哈是否还会飞',
                    author: '张三',
                    avatar: '',
                    reply_count: 10,
                    visit_count: 100,
                    tag: '问答',
                    key: '213',
                    lastActiveTime: '3小时前'
                }]
            }
        },
        methods: {
            meneSelectHandler(index) {
                console.log(index)
            },
            currentChangeHandler(index) {
                console.log(index)
            }
        }


    }

</script>
<style lang="less" scoped>


</style>
