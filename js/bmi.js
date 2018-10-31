/* BMI Calculator function*/
function BMICalculate()

/* Accept input variables*/ {
    var weight = document.getElementById('weight').value;
    var heightft = document.getElementById('heightft').value;

    /* Error Handling  for invalid data entered*/
    if (weight == "") {
        swal({title: "", text: "Por favor ingresa tu peso :).", imageUrl: "img/calcoLogo.png"});
        return;
    }
    if (heightft == "") {
        swal({title: "", text: "Por favor ingresa tu altura :).", imageUrl: "img/calcoLogo.png"});
        return;
    }
    if (weight < 0) {
        swal({title: "", text: "mmm... imposible.... no hay peso negativo :P", imageUrl: "img/calcoLogo.png"});
        return;
    }
    if (heightft < 0) {
        swal({
            title: "",
            text: "Te mediste adentro de un pozo? :P, pone la altura positiva :).",
            imageUrl: "img/calcoLogo.png"
        });
        return;
    }

    var bmi = Math.round((weight / (heightft * heightft )));
    swal({title: "Tu IMC es...", text: getDescription(bmi), imageUrl: "img/logo.png"});
}

/* Interpretation of BMI value */
function getDescription(thisBMI) {
    if (thisBMI < 18.5)
        return thisBMI  + " - BAJO PESO - Es conveniente que hagas una consulta con un Nutricionista para alcanzar un peso saludable comiendo en calidad o que se evalúe si sos delgado/a por cuestiones genéticas.";
    else if (thisBMI >= 18.5 && thisBMI <= 24.99)
        return thisBMI + " - Tu peso es adecuado para tu altura. De todas formas, es necesario realizar comidas sanas para prevenir enfermedades y tener una buena calidad de vida.";
    else if (thisBMI >= 25 && thisBMI <= 29.99)
        return thisBMI + " - SOBREPESO - Es necesario realizar una consulta  médica y nutricional para lograr descender unos kilogramos y mantener una buena calidad de vida. Existe también la posibilidad (si sos deportista) que esté aumentada tu masa muscular y por lo tanto sea algo saludable.";
    else if (thisBMI >= 30 && thisBMI <= 39.99)
        return thisBMI + " - OBESIDAD - Es necesario realizar una consulta médica - nutricional y comenzar un tratamiento de descenso de peso.";
    else return "Por favor, ingrese los valores correctamente :)";
}

/* Reset Button */
function Clear() {
    document.getElementById('weight').value = "";
    document.getElementById('heightft').value = "";
    document.getElementById('BMI').value = "";
    document.getElementById('DESC').value = "";
    bmi = "";
}