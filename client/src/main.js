// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
    Button,
    Menu,
    MenuItem,
    MenuItemGroup,
    Pagination,
    Dialog,
    Form,
    FormItem,
    Input,
} from 'element-ui'
Vue.config.productionTip = false
let arr = [Button, Menu, MenuItem, MenuItemGroup, Pagination,Dialog,Input,
    Form,
    FormItem,]
arr.forEach(item => {
    Vue.component(item.name, item)
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
