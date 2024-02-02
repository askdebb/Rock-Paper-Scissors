const btnAgreeYes = document.getElementById('btn-yes');
const btnAgreeNo = document.getElementById('btn-no');
const yesInfo = document.querySelector('.yes-info');

const userName = document.getElementById('username');
const userGender = document.getElementById('gender');
const userLevel = document.getElementById('level');
const yesBtn = document.getElementById('submit-user-info');

let challengeUser = document.getElementById('challenge-user');
let challengeGender = document.getElementById('challenge-gender');
let challengeLevel = document.getElementById('challenge-level');

const containerBrave = document.querySelector('.container-brave');
const containerElementShow = document.querySelector('.container-element-show');
const containerScore = document.querySelector('.container-score');

const containerInputInteractions = document.querySelector('.container-input-interactions');
const containerUserInfo = document.querySelector('.container-user-info');

const gameStartSection = document.querySelector('.game-start-section');
const gameStart = document.querySelector('.game-start');

const btnGo = document.getElementById('btn-go');
const userSelectElement = document.getElementById('user-select-element');
const userSide = document.querySelector('.user-side');
const btnGoBackDiv = document.querySelector('.redo-btn');
const showUserSide = document.querySelector('.show-user-side');

let userInfoChallenge = [];
const rpsContainer = ["rock", "paper", "scissors"];


userGender.addEventListener('click', function() {
    changeBackToNo();
})
userLevel.addEventListener('click', function() {
    changeBackToNo();
})

userName.addEventListener("keyup", function() {
    this.value = this.value.replace(/[^a-zA-Z ]+/,'');
    
})

userName.addEventListener('focus', function () {
    changeNoBtnToClear();
})



const btnClicked = $('.btn').click(function (e){
    let btnID = e.target.id;
    if(btnID === btnAgreeYes.id) {
        btnReturnToFillForm();
    }
    else if (e.target.innerText === "Clear"){
        userName.value = "";
        userGender.value = "Male";
        userLevel.value = "Beginner";
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
            emElement.innerText = "Scared of me? Hahahaa!!   RUN!!!!!.......  🏃🏿🏃🏿🏃🏿";
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


// console.log(containerUserInfo);
yesBtn.addEventListener("click", function() {
    
   let userNameReal = userName.value;
   userNameReal = userNameReal.slice(0,1).toUpperCase() + userNameReal.slice(1,userNameReal.length).toLowerCase();
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
           gameSectionStartBeginner(); 
        break;
   }
   console.log(userInfoChallenge);
   userInfoChallenge.forEach((itemOFUserInfo) => {
    if(itemOFUserInfo.Level === "Beginner" && itemOFUserInfo.Username !== ""){
        beginnerChallenge(itemOFUserInfo.Username, itemOFUserInfo.Gender, itemOFUserInfo.Level);
    }
   })
});

function gameSectionStartBeginner(){
    document.querySelector('.container-element-show').innerHTML = " ";
    document.querySelector('.container-brave').innerHTML = " ";
    containerInputInteractions.style.width= '200px';
    containerInputInteractions.style.height= '50px';
    containerInputInteractions.innerHTML = "<img src = './images/loading.gif'/>";

    containerUserInfo.style.display = 'flex';
    containerScore.style.display = 'flex';

    containerUserInfo.style.justifyContent = 'space-around';
    containerScore.style.justifyContent = 'space-around';

    containerElementShow.style.display = 'block';
    containerBrave.style.display = 'block';
    containerBrave.style.padding = '0.5rem 0';
   
    containerBrave.appendChild(containerScore);
    containerElementShow.appendChild(containerUserInfo);

    setTimeout(function (){
        document.querySelector('.container-input-interactions').innerHTML = " ";
        containerInputInteractions.style.width= '100%';
        containerInputInteractions.style.height= '20vh';

        gameStartSection.style.display = 'flex';
        gameStartSection.style.justifyContent = 'end';
        // gameStartSection.style.justifyContent = 'space-between';
        // gameStartSection.style.alignItems = 'center';
        gameStart.style.display = 'flex';
        gameStart.style.justifyContent = 'space-between';
        gameStart.style.alignItems = 'center';
        gameStart.style.marginLeft = '10%';
        containerInputInteractions.appendChild(gameStartSection);
    }, 1000);
}

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

function beginnerChallenge (username, usergender, userlevel){
   
    const emUser = document.createElement('em');
    emUser.innerText = username;
    emUser.style.fontWeight = '600';
    challengeUser.appendChild(emUser);
    
    const emGender = document.createElement('em');
    emGender.innerText = usergender;
    emGender.style.fontWeight = '600';
    challengeGender.appendChild(emGender);

    const emLevel = document.createElement('em');
    emLevel.innerText = userlevel;
    emLevel.style.fontWeight = '600';
    challengeLevel.appendChild(emLevel);
}

btnGo.addEventListener('click', function() {
    
    if(userSelectElement.value === ""){
        containerInputInteractions.style.height= '7vh';
        userSide.style.display = 'none';
        btnGoBackDiv.style.display = "block";
        // btnGoBackDiv.style.paddingBottom = "30px";
        console.log("empty");

    }
    else {
        console.log(userSelectElement.value);
    }

});

btnGoBackDiv.addEventListener('click', function() {
    containerInputInteractions.style.height= '20vh';
    userSide.style.display = 'flex';
    btnGoBackDiv.style.display = "none";
    
});