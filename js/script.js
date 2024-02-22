import {
    yesInfo,
    userName,
    userGender,
    userLevel,
    noName,
    waitingForChallenger,
    containerInputInteractions,
    btnGo,
    userSelectElement,
    btnGoBackDiv,
    cpuSideRender,
    userSideLeft,
  

} from './declarations.js';


import  { changeBackToNo,
          changeNoBtnToClear,         

        } from './ready4challenge.js';



import { gameStartSectionRender, gameStartsNow } from './gameplay.js';


userGender.addEventListener('click', function() {
    changeBackToNo();
})
userLevel.addEventListener('click', function() {
    changeBackToNo();
})

userName.addEventListener("keyup", function() {
    this.value = this.value.replace(/[^a-zA-Z ]+/,'');
    changeNoBtnToClear();
    
})

userName.addEventListener('focus', function () {
    changeNoBtnToClear();
})


noName.addEventListener('click', function() {
    yesInfo.style.display = "flex";
    noName.style.display = "none";
});


export function btnReturnToFillForm() {
    waitingForChallenger.style.display = "none";
    noName.style.display = "none";
 
    yesInfo.style.display = "flex";
    yesInfo.style.flexDirection = "column"; 
    yesInfo.style.justifyContent = "space-between"; 
    containerInputInteractions.style.backgroundColor = '#E5E5E5';
    containerInputInteractions.appendChild(yesInfo);
}


btnGo.addEventListener('click', function() {
    
    if(userSelectElement.value === ""){
        userSideLeft.style.display = 'none';
        btnGoBackDiv.style.display = "block";
        cpuSideRender.innerHTML = "<img src = './images/marry-runaway.png' />";
        console.log("empty");
    }
    else {
    
        gameStartsNow(userSelectElement.value);
    }

});

btnGoBackDiv.addEventListener('click', function() {
    userSideLeft.style.display = 'flex';
    gameStartSectionRender();
    btnGoBackDiv.style.display = "none";
    cpuSideRender.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
});

















