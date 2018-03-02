import {postData, deleteData} from './basic'

export default {
    logIn(params) {
        return postData('/session',params)
    },
    logOut(params) {
        return deleteData('/session/' + params)
    }
}