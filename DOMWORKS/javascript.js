var product={
    "name":"samsung",
    "price":"12345",
    getName(){
        return this.name
    },
    getPrice(){
        return this.price
    }
}
console.log(product.getName());


document={      
            //it can only useed in client side
}

window={
    cosole:{
        log(){

        }
    }
}

global={
    console:{
        log(){

        }
    }
}
window.console.log()
global.console.log()

document={
    textContent,

    querySelector(){

    },
    querySelectorAll(){

    },
    getElementById(){
        
    },
    getElementsByClassName(){

    },
    getElementsByTagNameNS(){

    },
}