import {postData, deleteData} from './basic'

export default {
    signUp(params) {
        return postData('/users',params)
    },
    signOut(params) {
        return deleteData('/users' + params)
    }
}