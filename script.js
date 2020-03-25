function pass2(){
    let output = document.querySelector("#output")
    let input = (document.querySelector("#input")).value
    
    //convert phase variables
    let pos = (input.length) - 1
    let res = 0
    let multiplicator = 1

    //test variables
    let test = true
    let testLength = true
    let posCheck = input.length - 1
    

    //Check if the input only has ones and zeros.
    for(let multi = input.length ;multi != 0 ; multi --){
        if (input[posCheck] == 1 || input[posCheck] == 0){
            console.log('ok')
            posCheck --
            

        } else {
            test = false
            window.alert("Use only binaryes")
            break
        }
    }

    //Check the length of the input.
    if (input.length >= 9){
        console.log("bababa")
        testLength = false
        window.alert("Max 8 numbers")
    } else {
        console.log("aqui")
    }
    
    //Convert to binary.
    if(testLength == true && test == true ){
        for(let multi = input.length ;multi != 0 ; multi --) {
            res  += Number(input[pos]) * multiplicator

            multiplicator *= 2
            pos--

        }

        output.innerHTML = res
    }
}