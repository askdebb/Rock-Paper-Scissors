const btnAgreeYes = document.getElementById('btn-yes');
const btnAgreeNo = document.getElementById('btn-no');
const yesInfo = document.querySelector('.yes-info');

const userName = document.getElementById('username');
const userGender = document.getElementById('gender');
const userLevel = document.getElementById('level');
const yesBtn = document.getElementById('submit-user-info');


const userInfoChallenge = [];

const containerInputInteractions = document.querySelector('.container-input-interactions');

const btnClicked = $('.btn').click(function (e){
    let btnID = e.target.id;
    if(btnID === btnAgreeYes.id) {
        document.querySelector('.container-input-interactions').innerHTML = " ";
        const newDiv = document.createElement('div')
        yesInfo.style.display = "flex";
        yesInfo.style.flexDirection = "column"; 
        yesInfo.style.justifyContent = "space-between"; 
        yesInfo.style.transition =  "all 0.4s";
        changeNoBtnToClear();
        containerInputInteractions.style.backgroundColor = '#E5E5E5';
        newDiv.appendChild(yesInfo);
        containerInputInteractions.appendChild(newDiv);
        console.log("yes pressed");
    }
    else {
        if(btnID === btnAgreeYes.id){
            document.querySelector('.container-input-interactions').innerHTML = " ";
            btnAgreeYes.style.visibility = "hidden";
            noBtnDetails();
            setTimeout(function(){
                btnAgreeYes.style.visibility = "visible";
            },9000);
        }
        else {
            userName.placeholder = "Enter name here.."
            // userName.value = " ";
            userGender.value = "Male";
            userLevel.value = "beginner";
            btnAgreeNo.innerText = "No";
            btnAgreeNo.style.backgroundColor = "#a05656";
            console.log(this);

            this.addEventListener("click", function(e) {
               switchBtnFunction();
            })
            
        } 
    }
});

function switchBtnFunction() {
    if(userName.value === " "){
        document.querySelector('.container-input-interactions').innerHTML = " ";
        noBtnDetails ();
    }
}

function changeNoBtnToClear() {
    btnAgreeNo.innerText = "Clear";
    btnAgreeNo.style.backgroundColor = "#3A3A3A";

}


const emElement = document.createElement('em');
let lafter;
function noBtnDetails (){
    emElement.innerText = "Loading....";
    emElement.style.color = '#fff';
    soundControl();
    containerInputInteractions.style.backgroundColor = '#F72201';
    containerInputInteractions.appendChild(emElement);
    }
   
    
function soundControl(){
        setTimeout(function (){
            emElement.innerText = "Scared of me? Hahahaa!!   RUN!!!!!.......      🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿";
            soundPlay();
        }, 1000);
        setTimeout(function (){
            emElement.innerText = "Don't you wanna compete with Sir Chris?";
            soundPlay();
        }, 3000);
}

function soundPlay(){
    lafter = new Audio("./sounds/laughter.mp3");
    lafter.play();
}

yesBtn.addEventListener("click", function() {
   const userNameReal = userName.value;
   const userGenderReal = userGender.value;
   const userLevelReal = userLevel.value;

   userInfoChallenge.push({
    Username: userNameReal,
    Gender: userGenderReal,
    Level: userLevelReal
   })

   console.log(userInfoChallenge);

});