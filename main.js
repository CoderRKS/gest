//https://teachablemachine.withgoogle.com/models/tCp9iQ4bi/model.json

Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 90,
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      "<img id = 'captured_image' src = '" + data_uri + " '/>";
  });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/tCp9iQ4bi/model.json",
  modelLoaded
);

function modelLoaded() {
  console.log("model Loaded !");
}

function check() {
  img = document.getElementById("captured_image");
  classifier.classify(img, gotResults);
}

var synth = window.speechSynthesis;

function gotResults(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    // speak();
    if (results[0].label == "Two") {
      document.getElementById("label").innerHTML = "Its amazing ! &#128076;";
      synth.speak(new SpeechSynthesisUtterance("Its amazing"));
    } else if (results[0].label == "Aazing") {
      document.getElementById("label").innerHTML = "Its Mervolous ! &#128077;";
      synth.speak(new SpeechSynthesisUtterance("Its Mervolous"));
    } else if (results[0].label == "Best") {
      document.getElementById("label").innerHTML = "Its Best ! &#9996;";
      synth.speak(new SpeechSynthesisUtterance("all the Best"));
    }
  }
}
