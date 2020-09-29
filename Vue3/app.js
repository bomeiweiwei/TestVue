var vm=new Vue({
    el:'#app',
    data:{
        count:0,
        isActive:true,
        isClild:true,
        txtColor:'gray',
        bgColor:'pink',
        colorList:['pink','green','blue','orange']
    },
    methods:{
        Counter(){
            this.count++;
            if(this.count%3==0){
                this.isActive=this.isClild=true;
                //this.bgColor=this.colorList[0];
            }else if(this.count%3==1){
                this.isActive=!this.isActive;
                //this.bgColor=this.colorList[1];
            }else if(this.count%3==1){
                this.isClild=!this.isClild;
                //this.bgColor=this.colorList[2];
            }
            const index=Math.floor(Math.random()*4);
            this.bgColor=this.colorList[index];
        }
    }
});