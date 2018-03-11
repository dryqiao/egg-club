<template>
    <div class="write_wrapper">
        <el-row>
            <el-col :span="24">
                <el-input v-model="title" placeholder="请输入标题"></el-input>
            </el-col>
        </el-row>
        <mavon-editor class="editor" v-model="topicData" />
        <el-button size="small" type="primary" @click="subitTopic">发布</el-button>
    </div>
</template>
<script>
import api from '../api/posts'
    export default {
        data() {
            return {
                topicData: '',
                title: ''
            }
        },
        methods: {
            subitTopic() {
                let _this = this
                api.createPost({
                    title: _this.title,
                    content: _this.topicData
                }).then(res => {
                    console.log(res);
                })
            }
        }
    }

</script>

<style lang="less" scoped>
    .write_wrapper {
        padding: 10px 20px;
        .el-row {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .editor {
            min-height: 400px;
            margin-bottom: 10px;
        }
    }

</style>
