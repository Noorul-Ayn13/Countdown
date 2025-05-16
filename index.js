
setTimeout(
    () =>{
        console.log(document.getElementById("count").innerHTML=10)
        setTimeout(() =>{
            console.log(document.getElementById("count").innerHTML=9)
            setTimeout(() =>{
                console.log(document.getElementById("count").innerHTML=8)
                setTimeout(() =>{
                    console.log(document.getElementById("count").innerHTML=7)
                    setTimeout(() =>{
                        console.log(document.getElementById("count").innerHTML=6)
                        setTimeout(()=>{
                            console.log(document.getElementById("count").innerHTML=5)
                            setTimeout(()=>{
                                console.log(document.getElementById("count").innerHTML=4)
                                setTimeout(()=>{
                                    console.log(document.getElementById("count").innerHTML=3)
                                    setTimeout(()=>{
                                        console.log(document.getElementById("count").innerHTML=2)
                                        setTimeout(()=>{
                                            console.log(document.getElementById("count").innerHTML=1)
                                            setTimeout(()=>{
                                                console.log(document.getElementById("count").innerHTML="Happy Birthday")

                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)

