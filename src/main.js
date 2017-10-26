// 导入vue核心包
import Vue from 'vue';

// 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';

// 将vueRouter对象绑定到Vue对象上 use是绑定的意思
import App from './App.vue';
Vue.use(vueRouter);



// 导入组件页面对象

import login from './components/admin/account/login.vue';
//导入后台管理系统的整体布局组件
import layout from './components/admin/layout.vue';
//导入goodslist.vue
import goodslist from './components/admin/goods/goodslist.vue';
// 定义路由规则
var router = new vueRouter({
    //导入login.vue组件对象
    routes: [
        //default默认的路由，path是不要默认到这里，redirect是默认到达的路径
        { name: 'default', path: '/', redirect: '/admin' },
        //path是跳转到   路径的意思
        { name: 'login', path: '/login', component: login },
        //admin对应的就是layout，上左右是固定的中间没有其他页面填充
        {
            name: 'layout',
            path: '/admin',
            component: layout,
            children: [
                { name: 'goodslist', path: 'goodslist', component: goodslist }
            ]
        }

    ]

});
// 导入axios包
import axios from 'axios';
//设定axios的基本的url请求前缀
//定义请求的数据API前面相同的域名
axios.defaults.baseURL = 'http://157.122.54.189:9095';
//想要在将来的每个子组件中的方法中均可以使用this.$http去调用其方法执行ajax请求
//就要将axios对象挂载到vue的原型属性$http上
Vue.prototype.$http = axios;


//绑定到Vue上，不然会没有效果
Vue.use(axios)


//使用elementUI这个框架的步骤
import elementUI from 'element-ui';
//导入elementui的css控制样式
import '../static/css/theme_rms/index.css'
//将此项目的全局样式导入到elementCss之后
import '../static/css/site.css'
//绑定
Vue.use(elementUI);
// 实例化Vue
new Vue({
    el: '#app',
    // 使用路由对象实例
    router,
    //es6写法：将app当做根组件替换index1.html这个模板中的<div id="app">
    render: c => c(App)
});