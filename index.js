//required onchange="displayFileName()"
const firebaseConfig = {
  apiKey: "AIzaSyBCvwUbbIW7uKEYUIMgLyZZOiQMPI8rKtw",
  authDomain: "minute-prints.firebaseapp.com",
  projectId: "minute-prints",
  storageBucket: "minute-prints.appspot.com",
  messagingSenderId: "612027663649",
  appId: "1:612027663649:web:005a76af6c049d40036a60",
  measurementId: "G-TXRQ1548X2"
};
firebase.initializeApp(firebaseConfig);

let fileName;
let fileInput;
var pageCount;

document.getElementById("file-upload").addEventListener('change', function (event) {
  fileInput = document.getElementById('file-upload');
  const labelUpload = document.getElementById('label-upload');
  
  if (fileInput.files.length > 0) {
    labelUpload.textContent = fileInput.files[0].name;
  } else {
    labelUpload.textContent = '';
  }
  fileName = fileInput.files[0].name;
  //document.querySelector(".button_wrapper").style.display="block";
  
  let storageRef = firebase.storage().ref("Shop1/"+fileName);

  let task = storageRef.put(event.target.files[0]);
});




function profile(){
  window.location.assign("profile.html")
}

const plus=document.querySelector(".plus"),
minus=document.querySelector(".minus"),
num=document.querySelector(".num");
let a =1;
plus.addEventListener("click", ()=>{
  a++;
  a=(a<10)?"0"+a:a;
  num.innerText=a;
  console.log(a);
});
minus.addEventListener("click", ()=>{
  if(a>1){
    a--;
    a=(a<10)?"0"+a:a;
    num.innerText=a;
  }
});


let mediaRecorder;
let chunks = [];
let stream;
let audioPlayer = document.getElementById("audio-player");
let audioUrl = 'null'

document.getElementById("start").addEventListener('click', function (event) {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (streamData) {
      stream = streamData;
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.addEventListener('dataavailable', function (event) {
        chunks.push(event.data);
      });
      mediaRecorder.start();
      console.log('Recording started');
      document.getElementById("stop").style.display="block";
      document.getElementById("start").style.display="none";
      document.getElementById("text").textContent="Recording : ";
    })
    .catch(function (error) {
      console.error('Error accessing microphone : ', error);
    });
});

document.getElementById("stop").addEventListener('click', function (event) {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
    mediaRecorder.addEventListener('stop', function () {
      const audioBlob = new Blob(chunks, { type: 'audio/webm' });
      audioUrl = URL.createObjectURL(audioBlob);
      console.log(audioPlayer)
      audioPlayer.src = audioUrl;
      //audioPlayer.play(); // Uncomment this line to play the recorded audio automatically
      console.log('Recording stopped');
      document.getElementById("start").style.display="block";
      console.log('Audio URL:', audioUrl);
      document.getElementById("audio-player").style.display = "block";
      document.getElementById("stop").style.display="none";
      document.getElementById("text").textContent="To Change recording : ";
      // Do something with the recorded audio data (e.g., upload to Firebase)
    });
  }
});

function pay(){
  var data=document.getElementsByName("btn");
  var i;
  for(i=0;i<=data.length;i++){
      if(data[i].checked){
          if(data[i].value=="Offline"){
              window.location.assign("offline.html")
          }
          else{
              window.location.assign("online.html")
          }
      }
  }
}

function populateSecondDropdown() {
  var firstDropdown = document.getElementById("firstDropdown");
  var secondDropdown = document.getElementById("secondDropdown");
  var selectedOption = firstDropdown.value;

  // Clear existing options
  secondDropdown.innerHTML = "";

  if (selectedOption === "option1") {
    // Populate options for option1
    var option1Values = ["Shop t1", "Shop t2", "Shop t3"];
    for (var i = 0; i < option1Values.length; i++) {
      var option = document.createElement("option");
      option.text = option1Values[i];
      secondDropdown.add(option);
    }
  } else if (selectedOption === "option2") {
    var option1Values = ["Shop e1", "Shop e2", "Shop e3"];
    for (var i = 0; i < option1Values.length; i++) {
      var option = document.createElement("option");
      option.text = option1Values[i];
      secondDropdown.add(option);
    }
  }
  else if (selectedOption === "option3") {
    var option1Values = ["Shop k1", "Shop k2", "Shop k3"];
    for (var i = 0; i < option1Values.length; i++) {
      var option = document.createElement("option");
      option.text = option1Values[i];
      secondDropdown.add(option);
    }
  }
  else if (selectedOption === "option4") {
    var option1Values = ["Shop kz1", "Shop kz2", "Shop kz3"];
    for (var i = 0; i < option1Values.length; i++) {
      var option = document.createElement("option");
      option.text = option1Values[i];
      secondDropdown.add(option);
    }
  }
}


