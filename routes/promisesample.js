function add(num1,num2,callback){
    let err=false
    if(num1==0){
     err=true   
    }
    callback(num1+num2,err)
}
add(10,20,(sum,error)=>{
    if(error){
        console.log('there is a error')
    }else{
        console.log(sum)
    }
})