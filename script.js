const btnAgreeYes = document.getElementById('btn-yes');
const btnAgreeNo = document.getElementById('btn-no');
const yesInfo = document.querySelector('.yes-info');

const userName = document.getElementById('username');
const userGender = document.getElementById('gender');
const userLevel = document.getElementById('level');
const yesBtn = document.getElementById('submit-user-info');


let userInfoChallenge = [];
userName.addEventListener('click', function () {
    changeNoBtnToClear();
})

userGender.addEventListener('click', function() {
    changeBackToNo();
})
userLevel.addEventListener('click', function() {
    changeBackToNo();
})

userName.addEventListener("keyup", function() {
    this.value = this.value.replace(/[^a-zA-Z ]+/,'');
    
})

const containerInputInteractions = document.querySelector('.container-input-interactions');

const btnClicked = $('.btn').click(function (e){
    let btnID = e.target.id;
    if(btnID === btnAgreeYes.id) {
        btnReturnToFillForm();
    }
    else if (e.target.innerText === "Clear"){
        userName.value = "";
        userGender.value = "Male";
        userLevel.value = "beginner";
        userInfoChallenge = [];
            setTimeout(function(){
                changeBackToNo();
        }, 200);
    }
    else {
            document.querySelector('.container-input-interactions').innerHTML = " ";
            btnAgreeYes.style.visibility = "hidden";

            btnAgreeNo.addEventListener('mouseover', function() {
                this.innerText = "No";
                this.style.backgroundColor = "#a05656";
            })
            
            noBtnDetails();
            userInfoChallenge = [];
            setTimeout(function(){
                btnAgreeYes.style.visibility = "visible";
            },9000);
        }    
});

function changeBackToNo(){
    btnAgreeNo.innerText = "No";
    btnAgreeNo.style.backgroundColor = "#a05656";
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

   switch (userNameReal) {
    case '':
       feedBackInfo("No name entered");
        break;
    default:
        userInfoChallenge.push({
            Username: userNameReal,
            Gender: userGenderReal,
            Level: userLevelReal
           })
        break;
   }
   console.log(userInfoChallenge);
});

function btnReturnToFillForm() {
    document.querySelector('.container-input-interactions').innerHTML = " ";
    yesInfo.style.display = "flex";
    yesInfo.style.flexDirection = "column"; 
    yesInfo.style.justifyContent = "space-between"; 
    containerInputInteractions.style.backgroundColor = '#E5E5E5';
    containerInputInteractions.appendChild(yesInfo);
}


function feedBackInfo(infoHere){
    document.querySelector('.container-input-interactions').innerHTML = " ";

    yesInfo.style.display = 'none';
    const newSpanElement = document.createElement('span');
    const newBtn = document.createElement('button');
    newSpanElement.innerText = infoHere;
    newSpanElement.style.fontWeight = '600';
    newBtn.innerText = "Go Back";
    newBtn.style.padding = '5px 10px';
    newBtn.style.border = 'none';
    newBtn.style.backgroundColor = '#5cb45c';
    newBtn.style.color = '#fff';
    newBtn.style.cursor = 'pointer';
    newBtn.style.borderRadius = '5px';
    newBtn.style.fontSize = '1rem';
    newBtn.style.marginLeft = '5px';

    newBtn.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#088f08';
        this.style.fontWeight = '600';
        this.style.transition = '0.3s ease-in-out';
    })

    newBtn.onclick = btnReturnToFillForm;
    newSpanElement.appendChild(newBtn);
    containerInputInteractions.appendChild(newSpanElement);

}

