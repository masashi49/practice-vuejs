

//カスタムタグを宣言
var appFooter = {
    template:'<div>{{message}}</div>',
    data:function(){
        return {
            message:'this is footer'
        }
    }
}
Vue.component('app-footer', appFooter);


//カスタムタグを宣言
var appHeader = {
    template:'<div>{{message}}</div>',
    data:function(){
        return {
            message:'this is header'
        }
    }
}
Vue.component('app-header', appHeader);



//カスタムタグを宣言
var appList = {
    template:'#template-list',
    props:['item'],
    data:function(){
        return {
            message:'this is list'
        }    }
}
Vue.component('app-list', appList);



//カスタムタグを宣言
var appContent = {
    template:'<div>{{message}}</div>',
    props:['item'],
    data:function(){
        return {
            message:'this is content'
        }    }
}
Vue.component('app-content', appContent);

document.addEventListener("DOMContentLoaded", function() {

    new Vue({
        el: '#app',
        data: {
           　message:'aiaiaia',
            task:'tasktask',
            test:'test',
            task_list:[
                'りんご',
                'ごりら',
                'らっぱ'
            ],
            error:false
        },
        methods:{
            add: function () {
                this.task_list.push(this.task);
            },
            input: function () {
                console.log(this.task.length);

                if(this.task.length>20){
                    this.error = true
                }else{
                    this.error = false
                }
            }
        }
    })
});

