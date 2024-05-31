var perro_c = 0;
var gato_c = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/XXVzjdN7J/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255 ) + 1;
        random_number_g = Math.floor(Math.random() * 255 ) + 1;
        random_number_b = Math.floor(Math.random() * 255 ) + 1;

        document.getElementById("result_label").innerHTML = 'Escucho : '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Perro - '+perro_c+ ' Gato - '+gato_c;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_image");

        if(results[0].label == "perro"){
            img.src = 'bark.gif';
            perro_c = perro_c +1;
        } else if(results[0].label == "gato"){
            img.src = 'meow.gif';
            gato_c = gato_c + 1;
    } else {
        img.src = 'listen.gif';
    }
}
}