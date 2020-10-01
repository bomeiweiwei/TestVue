var vm=new Vue({
    el:'#app',
    data:{
        txtBookName:'',
        txtBookDesc:'',
        txtBookPrice:0,
        txtBookCount:0,
        selectBookCat:'',
        chkUserValues:[],
        SecretValue:'',
        chkPublish:'',
        chkSprice:'',
        preview:''
    },
    methods:{
        selectBookCatDesc(){

        },
        handelFileUpload(event){
            var file=event.target.files[0];
            if(file && file.type.match(/^image\/(png|jpeg)$/)){
                this.preview=window.URL.createObjectURL(file);
            }
        }
    }
});