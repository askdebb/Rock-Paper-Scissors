import { btnReturnToFillForm } from "./script.js";

import { gameSectionStartBeginner } from "./gameplay.js";

import {btnAgreeNo,
        btnAgreeYes,
        challengeGender,
        challengeUser,
        challengeLevel,
        containerInputInteractions,
        emElement,
        userName,
        userGender,
        userLevel,
        userInfoChallenge,
        waitingForChallenger,
        yesBtn,
        yesInfo,
        noName,

} from "./declarations.js";



export const btnClicked = $('.btn').click(function (e){
    let btnID = e.target.id;
    if(btnID === btnAgreeYes.id) {
        userInfoChallenge.length = 0;
        emElement.style.display = "none";
        btnReturnToFillForm();
        console.log(userInfoChallenge);
    }
    else if (e.target.innerText === "Clear"){
        userName.value = "";
        userGender.value = "Male";
        userLevel.value = "Beginner";
        userInfoChallenge.length = 0;
            setTimeout(function(){
                changeBackToNo();
        }, 1000);
    }
    else {
            waitingForChallenger.style.display = "none";
            noName.style.display = "none";
            yesInfo.style.display = "none";
            // document.querySelector('.container-input-interactions').innerHTML = " ";
            btnAgreeYes.style.visibility = "hidden";
            emElement.style.display = "block";

            btnAgreeNo.addEventListener('mouseover', function() {
                this.innerText = "No";
                this.style.backgroundColor = "#a05656";
            })
            
            noBtnDetails();
            userInfoChallenge.length = 0;
            setTimeout(function(){
                btnAgreeYes.style.visibility = "visible";
            },9000);
        }    
});


export function changeBackToNo(){
    btnAgreeNo.innerText = "No";
    btnAgreeNo.style.backgroundColor = "#a05656";
}

export function changeNoBtnToClear() {
    btnAgreeNo.innerText = "Clear";
    btnAgreeNo.style.backgroundColor = "#3A3A3A";
}


export function noBtnDetails (){
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
        emElement.innerText = "Don't you wanna compete with Chris?";
        soundPlay();
    }, 3000);
}

function soundPlay(){
const lafter = new Audio("./sounds/laughter.mp3");
lafter.play();
}

yesBtn.addEventListener("click", function() {
    
    let userNameReal = userName.value;
    userNameReal = userNameReal.slice(0,1).toUpperCase() + userNameReal.slice(1,userNameReal.length).toLowerCase();
    const userGenderReal = userGender.value;
    const userLevelReal = userLevel.value;
 
    switch (userNameReal) {
     case '':
         yesInfo.style.display = "none";
         noName.style.display = "block";
         noName.style.marginBottom = "10px";
 
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
     else if(itemOFUserInfo.Level === "Intermediate" && itemOFUserInfo.Username !== ""){
         beginnerChallenge(itemOFUserInfo.Username, itemOFUserInfo.Gender, itemOFUserInfo.Level);
     }
     else if(itemOFUserInfo.Level === "Advanced" && itemOFUserInfo.Username !== ""){
         beginnerChallenge(itemOFUserInfo.Username, itemOFUserInfo.Gender, itemOFUserInfo.Level);
     }
 
 
    })
 });

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
