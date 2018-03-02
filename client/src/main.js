// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookies from 'vue-cookies'
import {
    Button,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Pagination,
    Dialog,
    Form,
    FormItem,
    Input,
    Message 
} from 'element-ui'
Vue.prototype.$message = Message
Vue.config.productionTip = false
let arr = [Button, Menu, MenuItem,Submenu, MenuItemGroup, Pagination,Dialog,Input,
    Form,
    FormItem]
arr.forEach(item => {
    Vue.component(item.name, item)
})
Vue.use(VueCookies)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
