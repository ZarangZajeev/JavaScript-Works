let interval;
function start(){
    setInterval(getRandomSizes,500)
}

function getRandomSizes(){
    let boxes=document.querySelectorAll(".box")
    for(let b of boxes){
        let height=Math.floor(Math.random()*100)+50;
        b.style.height=`${height}PX`
    }
}

function stop(){
    clearInterval(interval)
}