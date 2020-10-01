var vm=new Vue({
    el:'#app',
    data:{
        ProductName:'',
        Price:0,
        Count:0,
        ProductList: [
            { ProductName: '漫畫書', Price: 85, Count: 5 },
            { ProductName: '參考書', Price: 120, Count: 15 },
            { ProductName: '筆記本', Price: 10, Count: 20 },
        ]
    },
    methods:{
        AddProduct(){
            var total=0;
            var obj={ProductName:this.ProductName,Price:this.Price,Count:this.Count};
            this.ProductList.push(obj);
            total=CalTotal(this.ProductList);
            this.$refs.Total.innerText=total;
        },
        DelProduct(index){
            this.ProductList.splice(index,1);
        }
    },
    mounted(){
        var total=0;
        total=CalTotal(this.ProductList);
        this.$refs.Total.innerText=total;
    }
});

function CalTotal(list){
    var total=0;
    list.forEach(function (element) {
            total+=element.Price*element.Count;
          });
    return total;
        }