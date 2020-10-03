var app= new Vue({
    data:{
        message:'Hello World',
        count:0
    }
});

Vue.component('example1',{
    template:`
      <button @click="handelClick">Click me</button>
    `,
    methods:{
        handelClick(){
            alert('Hello world');
        }
    },
});

Vue.component('example2',{
    template:`
      <p>{{ Message }}</p>
    `,
    computed:{
        Message:function(){
            return app.$data.message+','+app.$data.count;
        }
    },
    created:function(){
        this.$on('Counter',function(){
            app.$data.count++;
            //console.log('5555555');
        });
    },
});

Vue.component('example3',{
    template:`
    <button @click="handelClick">按我</button>
    `,
    computed:{
        appCount:function(){
            return app.$data.count;
        }
    },
    created:function(){
        app.$on('appEvent',function(){
            this.count++;
        });
    },
    methods:{
        handelClick(){
            app.$emit('appEvent');
        }
    }
});

Vue.component('example4',{
    template:`
    <div>
        <slot>預設顯示文字1</slot>
        <slot name="tag2">預設顯示文字2</slot>
        <slot name="tag3">預設顯示文字3</slot>
    </div>
    `,
    
});

var vm=new Vue({
    el:'#app',
    methods:{
        btn_click(){
            this.$refs.comp.$emit('Counter');
        }
    }
});