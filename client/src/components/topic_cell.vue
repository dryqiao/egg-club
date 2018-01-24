<template>
    <div class="topic_cell">
        <div class="cell_info">
            <a href="" class="user_avatar">
                <img src="../assets/img/logo.svg" alt="">
            </a>
            <span class="counts">
                <span title="回复数">{{cellData.reply_count}}</span>
                <span>/</span>
                <span title="浏览数" class="visit_count">{{cellData.visit_count}}</span>
            </span>
            <span class="topic_title" @click="titleClickHandler(cellData.key)">{{cellData.title}}</span>
        </div>
        <div class="last_active_time">
            <img src="../assets/img/logo.svg" alt="">
            <span>{{cellData.lastActiveTime}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            cellData: Object
        },
        methods: {
            titleClickHandler(title) {
                console.log(title)
            },
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
        .cell_info {
            display: flex;
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
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
                    color: #cccccc;
                }
            }
            .topic_title {
                margin-left: 20px;
                font-size: 16px;
                cursor: pointer;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .last_active_time {
            display: flex;
            flex: 0 0 100px;
            img {
                width: 30px;
                height: 30px;
            }
        }
    }

</style>
