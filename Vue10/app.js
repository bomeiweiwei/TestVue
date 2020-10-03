Vue.component('example',{
    template:`
      <button @click="handelClick">Click me</button>
    `,
    methods:{
        handelClick(){
            //alert('Hello world');
            this.$emit('child-event',"James");
        }
    },
    props:{
        value:{
          type:Number,
          default:5566
        }
    }
});

var vm=new Vue({
    el:'#app',
    data:{
      
    },
    methods:{
        phandelClick(data){
            alert(`Hello world!!!!!${data}`); 
        }
    },
    computed:{
       
    },
    watch:{
       
    }
});