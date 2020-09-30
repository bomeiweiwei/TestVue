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
            var obj={ProductName:this.ProductName,Price:this.Price,Count:this.Count};
            this.ProductList.push(obj);
        },
        DelProduct(index){
            this.ProductList.splice(index,1);
        }
    }
});