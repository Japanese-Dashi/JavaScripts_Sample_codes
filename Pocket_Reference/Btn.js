function ocBtn1(){
    const number1 = document.form1.number1

    number1.value = "60"
    document.getElementById("span1").textContent = number1.value
}

function ocBtn2(){
    document.form1.number1.value = ""
    document.getElementById("span1").textContent = ""
}