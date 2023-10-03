function calculate(){
    let height = document.querySelector("#height").value
    let weight = document.querySelector("#weight").value
    let result = document.querySelector("#result")

    let hasil = (weight/(height/100)**2).toPrecision(3)

    if (hasil <18.5){
        result.innerHTML = "Your BMI is " + "<strong>" + hasil + "</strong>" + " which means You are <strong>Underweight</strong>"
    } else if (hasil >= 18.5 && hasil <= 24.9){
        result.innerHTML = "Your BMI is " + "<strong>" + hasil + "</strong>" + " which means You are <strong>Normal</strong>"
    } else if (hasil >= 25 && hasil <= 29.9){
        result.innerHTML = "Your BMI is " + "<strong>" + hasil + "</strong>" + " which means You are <strong>Overweight</strong>"
    } else if (hasil >= 30){
        result.innerHTML = "Your BMI is " + "<strong>" + hasil + "</strong>" + " which means You are <strong>Obesity</strong>"
    }
}