var vm=new Vue({
    el:'#app',
    data:{
        rectWidth:300,
        rectHeight:100,
        drinkArray:[
            {id:1,name:'珍珠奶茶(35)',price:35},
            {id:2,name:'檸檬紅茶(30)',price:30},
            {id:3,name:'百香綠茶(35)',price:35},
            {id:4,name:'咖啡(80)',price:80},
            {id:5,name:'啤酒(65)',price:65},
        ],
        selectList:[],
        showList:[],
        Total:0
    },
    methods:{
        buy:function(id){
            this.drinkArray.forEach(item=>{
                if(id==item.id){
                    this.selectList.push(item.id);
                }
            });
        }
    },
    computed:{
        GetArea:function(){
            return this.rectWidth*this.rectHeight;
        }
    },
    watch:{
        rectWidth:function(newValue,oldValue){
            console.log(`Wideh新值=${newValue},舊值=${newValue}`);
        },
        selectList:function(newList,oldList){
            let _showList=[];          
            this.Total=0;

            if(newList.length>=2){
                var id=newList[1];
                var obj=this.drinkArray.find(element=>element.id==id);
                if(obj!=null){
                    _showList.push(`第二杯半價=>${obj.name} * 1 = ${obj.price/2}`);
                    this.Total+=obj.price/2;
                }
            }

            var newSel=[];
            for(i=0;i<newList.length;i++){
                if(i!=1){
                    newSel.push(newList[i]);
                }
            }
            if(newSel.length>0){
                this.drinkArray.forEach(drink=>{
                    var sel=newSel.filter(element=>element==drink.id);
                    if(sel.length>0){
                        var count=sel.length;
                        _showList.push(`${drink.name} * ${count} = ${drink.price*count}`);
                        this.Total+=drink.price*count;
                    }
                });
            }
            this.showList=_showList;
        },
    }
});