function onSubmit(){
   let farenheit=document.getElementById("temperatureInFarenheit").value
   let celsius=document.getElementById("celsius")

    let answer= (farenheit - 32) * 5 / 9
   
   
    
    celsius.innerHTML= answer
   
}

