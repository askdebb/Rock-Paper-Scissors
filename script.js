import {
    yesInfo,
    userName,
    userGender,
    userLevel,
    noName,
    challengeUser,
    challengeGender,
    challengeLevel,
    containerBrave,
    anyChallengerHead,
    braveBtn,
    elementColumnContainer,
    containerScore,
    waitingForChallenger,
    containerInputInteractions,
    containerUserInfo,
    gameStartSection,
    gameStart,
    btnGo,
    userSelectElement,
    userSide,
    btnGoBackDiv,
    cpuSideRender,
    userSideLeft,
    userSideLeftImage,
    processingBar,
    gameStartSectionIntermediate,
    intermediateBtn,
    userInfoChallenge,
    rpsContainer,
    roundCount,
    roundCountMainRound,
    roundCountMain
  
    

} from './declarations.js';


import  { changeBackToNo,
          changeNoBtnToClear,         

        } from './ready4challenge.js';

import {
    gameSectionStartBeginner,

} from './beginnerLevel.js';


import { gameStartSectionRender } from './gameplay.js';


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









function gameIntestineIntermediate(){
    containerInputInteractions.style.width= '96%';
    
    gameStartSectionIntermediate.style.display ="block";
    gameStartSectionIntermediate.style.width ="90%";
    gameStartSectionIntermediate.style.margin ="0 auto";

    gameStart.style.display = 'flex';
    gameStart.style.justifyContent = 'space-around';
    gameStart.style.alignItems = 'center';

    userSide.style.width = '50%';
    userSide.style.padding = '10px 0';

    cpuSideRender.style.width = '50%';
    cpuSideRender.style.padding = '10px 0';
    
    containerInputInteractions.appendChild(gameStartSectionIntermediate);



}

intermediateBtn.addEventListener("click", function() {
    gameStartsNow(rpsContainer[Math.floor(Math.random() * 3)]);
});






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




let gameRunner = 2;

function gameStartsNow(userSelectValue) {
      
    userSideLeft.style.display = 'none';
    userSideLeftImage.style.display = 'inline';

    const imgUser = document.createElement('img');
    const userValue = "./images/" + userSelectValue + ".png";
    imgUser.src = userValue;
    userSideLeftImage.appendChild(imgUser);

    if(userSelectValue === 'rock'){
        const userRockSound = new Audio("./sounds/rock.mp3");
        userRockSound.play();

    } else if (userSelectValue === 'paper'){
        const userPaperSound = new Audio("./sounds/paper.mp3");
        userPaperSound.play();

    }else {
        const userScissorsSound = new Audio("./sounds/scissors.mp3");
        userScissorsSound.play();

    }

    const cpuElement = rpsContainer[Math.floor(Math.random() * 3)];
    const cpuSelect = "./images/" + cpuElement +".png";
    const cpu = cpuSelect;  
    cpuSideRender.innerHTML = "<img src = './images/thinking.png' width=100% height=100% />";

    setTimeout(function() {
        cpuSideRender.innerHTML = " ";
        const imgCpu = document.createElement('img');
        
        imgCpu.src = cpu;
        cpuSideRender.style.height = '20%';
        cpuSideRender.style.width = '20%';
        cpuSideRender.appendChild(imgCpu);
        processingBar.style.display = 'block';

        if(cpuElement === 'rock'){
            const cpuRockSound = new Audio("./sounds/rock.mp3");
            cpuRockSound.play();
    
        } else if (cpuElement === 'paper'){
            const cpuPaperSound = new Audio("./sounds/paper.mp3");
            cpuPaperSound.play();
    
        }else {
            const cpuScissorsSound = new Audio("./sounds/scissors.mp3");
            cpuScissorsSound.play();
        }

    }, 2000);
    
    
    setTimeout(function() {
        if((userSelectValue === 'rock' &&  cpuElement === 'rock') || (userSelectValue === 'paper' &&  cpuElement === 'paper') || (userSelectValue === 'scissors' &&  cpuElement === 'scissors')){
            processingBar.innerText = "Draw";
            processingBar.style.backgroundColor = "blue";
            const drawSound = new Audio("./sounds/draw.mp3");
            drawSound.play();
            setTimeout(function() {
                reStageGameNextRound();
            },3000);
        }
        else if(userSelectValue === 'rock' &&  cpuElement === 'paper'){
            const cpuWinsSound = new Audio("./sounds/paperfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRound();
            }, 6000);
        }
        else if(userSelectValue === 'paper' &&  cpuElement === 'scissors'){
            const cpuWinsSound = new Audio("./sounds/scissorsfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRound();
            }, 5000);
        }
        else if(userSelectValue === 'scissors' &&  cpuElement === 'rock'){
            const cpuWinsSound = new Audio("./sounds/rockfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRound();
            }, 6000);
            
        }
        else if(userSelectValue === 'paper' &&  cpuElement === 'rock'){
            const userWinsSound = new Audio("./sounds/paperfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRound();
            }, 6000);
        }
        else if(userSelectValue === 'scissors' &&  cpuElement === 'paper'){
            const userWinsSound = new Audio("./sounds/scissorsfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRound();
            }, 5000);
        }
        else if(userSelectValue === 'rock' &&  cpuElement === 'scissors'){
            const userWinsSound = new Audio("./sounds/rockfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRound();
            }, 6000);
            
        }

    }, 5000);
     
    
    
    console.log("cpu select: " + cpu);
    console.log("user select: "+userValue);
}


function userWinsEachRound(){
    userInfoChallenge.forEach((userData) => {
       const userNameData = userData.Username;
       processingBar.innerText = userNameData + " wins!";
    })
    userScore.innerText++;
    processingBar.style.backgroundColor = "green";

        setTimeout(function() {
            reStageGameNextRound();
        },2000);
   
}

function cpuWinsEachRound(){
    processingBar.innerText = "CPU Mary Asare wins!";
    cpuScore.innerText++;
    processingBar.style.backgroundColor = "#daa520";
  
        setTimeout(function() {
            reStageGameNextRound();
        },2000);
   
    
}

const gameEnd = document.querySelector('.game-end');

function reStageGameNextRound(){
    if(gameRunner < 1){
        roundCountMainRound.style.display = 'none';
        roundCountMain.style.display = 'flex';
        roundCountMain.innerText = "Game Over";
        roundCountMain.style.color = "red";
        roundCountMain.style.fontWeight = "600";
        gameStart.style.display = "none";
        
        if(userScore.innerText > cpuScore.innerText){
            userInfoChallenge.forEach((userData) => {
                const userNameData = userData.Username;
                gameEndStat((userNameData + " is the champion!"), 'green');
             })
            const userWinnerSound = new Audio("./sounds/userwinner.mp3");
            userWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#5dc7e7";

        } else if (userScore.innerText < cpuScore.innerText){
            gameEndStat("CPU Mary Asare is the champion and you LOST!!",  '#946d09');
            const cpuWinnerSound = new Audio("./sounds/gameover-lost.mp3");
            cpuWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#800303";

        }
        else {
            gameEndStat("A tie!", "blue");
            const noWinnerSound = new Audio("./sounds/tie.mp3");
            noWinnerSound.play();
        }

    } else {
        userSideLeft.style.display = 'flex';
        userSideLeftImage.innerHTML = " ";
        userSideLeftImage.style.display = 'none';
        gameStartSectionRender();
        cpuSideRender.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
        processingBar.style.display = 'none';
        processingBar.innerText = 'processing winner...';
        processingBar.style.backgroundColor = 'red';
        roundCount.innerText++;
        gameRunner--;
        console.log("game runner remains: "+gameRunner);
    } 
}

console.log("now round: "+roundCount.innerText);
console.log("game runner now: "+gameRunner);


function gameEndStat(outcomeStat, backGroundColor){
    gameEnd.style.display = 'block';
    gameEnd.innerText = outcomeStat;
    gameEnd.style.backgroundColor = backGroundColor;
    gameEnd.style.textAlign = "center";
    gameEnd.style.color = '#fff';
    processingBar.style.display = "none";

    setTimeout(function(){
        const btnRestartYes = document.createElement('button');
        btnRestartYes.innerText = "Yes";
        btnRestartYes.style.backgroundColor = "#fff";
        btnRestartYes.style.color = backGroundColor;
        btnRestartYes.style.padding = "5px 6px";
        btnRestartYes.style.margin = "5px 15px";
        btnRestartYes.onclick = restartGame;
        btnRestartYes.style.cursor = 'pointer';
        btnRestartYes.style.border = 'none';
        btnRestartYes.style.borderRadius = '3px';

        const btnRestartNo = document.createElement('button');
        btnRestartNo.innerText = 'No';
        btnRestartNo.style.backgroundColor = "#fff";
        btnRestartNo.style.color = 'red';
        btnRestartNo.style.padding = "5px 6px";
        btnRestartNo.style.margin = "5px 15px";
        btnRestartNo.onclick = endGame;
        btnRestartNo.style.cursor = 'pointer';
        btnRestartNo.style.border = 'none';
        btnRestartNo.style.borderRadius = '3px';


        btnRestartYes.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });
        btnRestartNo.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });

        gameEnd.innerText = "Restart?";
        gameEnd.appendChild(btnRestartYes);
        gameEnd.appendChild(btnRestartNo);

    },2000);

}

function restartGame(){
    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";
    processingBar.innerText = "processing winner...";
    processingBar.style.backgroundColor = 'red';

    document.querySelector('body').style.backgroundColor = '#E5E5E5';
    gameEnd.style.display = "none";
    userSideLeft.style.display = 'flex';

    userSideLeftImage.innerHTML = " ";
    // userSelectElement.innerText = "Choose ...";
    
    userSideLeftImage.style.display = 'none';
    cpuSideRender.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    gameSectionStartBeginner(); 
}

function endGame(){
    document.querySelector('body').style.backgroundColor = '#E5E5E5';

    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";

    userInfoChallenge.length = 0;
    gameEnd.style.display = "none";

    // userSelectElement.innerText = "Choose ...";
    elementColumnContainer.style.display = "flex";
    containerUserInfo.style.display = "none";

    challengeUser.innerText = "";
    challengeGender.innerText = "";
    challengeLevel.innerText = "";
   


    containerScore.style.display = "none";
    waitingForChallenger.style.display = "block";
    gameStartSection.style.display = "none";

    containerBrave.style.display = "flex";
    braveBtn.style.display = "block";
    anyChallengerHead.style.display = "block";

    braveBtn.style.marginLeft = "20px";
    anyChallengerHead.style.marginLeft = "20px";
    yesInfo.style.display = "none";

    processingBar.style.display = 'none';
    processingBar.innerText = "processing winner...";
    processingBar.style.backgroundColor = 'red';


    // gameEnd.style.display = "none";
    userSideLeft.style.display = 'flex';

    userSideLeftImage.innerHTML = " ";
    
    userSideLeftImage.style.display = 'none';
    // gameSectionStartBeginner(); 
    cpuSideRender.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    changeBackToNo();
}