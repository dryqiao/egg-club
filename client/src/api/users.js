import {postData} from './basic'

export default {
    signUp(params) {
        return postData('/users',params)
    },
    signIn(params) {
        return postData('/session',params)
    }
}