import {postData, deleteData} from './basic'

export default {
    createPost(params) {
        return postData('/posts',params)
    },
    logOut(params) {
        return deleteData('/session/' + params)
    }
}