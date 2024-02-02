var myPromise=new Promise((res,rej)=>{
    let completedStatus=true
    if(completedStatus==true){
        res("Completed")
    }
    else{
        rej("Not completed")
    }
})

myPromise.then(res=>console.log("Name will marked in placement form")).catch(rej=>console.log("Name"))