import {userInfoChallenge,
        userSideLeft,
        userSideLeftImage,
        rpsContainer,
        cpuSideRender,
        processingBar,
        roundCountMainRound,
        roundCount,
        roundCountMain,
        gameStart,
        gameEnd,
        elementColumnContainer,
        containerUserInfo,
        challengeUser,
        challengeGender,
        challengeLevel,
        containerScore,
        waitingForChallenger,
        gameStartSection,
        containerBrave,
        braveBtn,
        anyChallengerHead,
        yesInfo,
        containerInputInteractions,
        containerElementShow,
        userSideLeftIntermediate,
        userSideLeftImageIntermediate,
        cpuSideRenderIntermediate,
        gameStartIntermediate,
        gameEndIntermediate,
        challengeLevelCPU,
        challengeUsernameCPU,
        challengeGenderCPU,
        gameStartSectionIntermediate

    } from "./declarations.js";

import { gameIntestineBeginner } from "./beginnerLevel.js";
import { gameIntestineIntermediate } from "./intermediateLevel.js";
import { beginner, changeBackToNo, intermediate } from "./ready4challenge.js";


export function gameSectionStartBeginner(){

    userInfoChallenge.forEach((itemOFUserInfo) => {
        if(itemOFUserInfo.Level === "Beginner"){
           takeOver("beginner", 4000);  
        }
        else if(itemOFUserInfo.Level === "Intermediate"){
            takeOver("intermediate", 10000);
        }
        else if(itemOFUserInfo.Level === "Advanced"){
            takeOver("advanced");
        }
    })
  
}

function takeOver(level, duration){
    braveBtn.style.display = "none";

    anyChallengerHead.style.display = "none";
    waitingForChallenger.style.display = "none";
    yesInfo.style.display = "none";
    containerInputInteractions.style.width= '96%';

    const divForGif = document.createElement('div');
    divForGif.innerHTML = "<img src = './images/loading.gif' height='100%'/>";
    containerInputInteractions.appendChild(divForGif);
    
    const beginnerSound = new Audio("./sounds/"+level+".mp3");
    beginnerSound.play();

    
    elementColumnContainer.style.display = "none";
   
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
        divForGif.style.display = "none";
        document.querySelector('body').style.backgroundColor = '#E5E5E5';
        gameStartSectionRender();
    }, duration);

}

export function gameStartSectionRender(){
    userInfoChallenge.forEach((itemOFUserInfo) => {

        switch (itemOFUserInfo.Level) {
            case "Beginner":
                gameIntestineBeginner();
                break;
            case "Intermediate":
                gameIntestineIntermediate(); 
                break;
            case "Advanced":
                const labelInstruction = document.getElementById('user-label-description');
                labelInstruction.innerHTML = "Click to choose element: "
                gameIntestineBeginner();
                break;
        
            default:
                console.log("You choose sthg different");
                break;
        }
    
       });
  
}


export function gameStartsNow(userSelectValue) {
      
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


let gameRunner = 2;
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
            beginner.forEach((cpuData) => {
                const cpuNameData = cpuData.nameCPU
                gameEndStat(cpuNameData + " is the champion and you LOST!!",  '#946d09');
            })
            const cpuWinnerSound = new Audio("./sounds/ending-laughter_loser-beginner.mp3");
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
        gameRunner --;
        console.log("game runner remains: "+gameRunner);
    } 

    
console.log("now round: "+roundCount.innerText);
console.log("game runner now: "+gameRunner);
}

export function userWinsEachRound(){
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

export function cpuWinsEachRound(){
    beginner.forEach((cpuItemData) => {
        const cpuName = cpuItemData.nameCPU;
        processingBar.innerText = cpuName + " wins!";
    })
    cpuScore.innerText++;
    processingBar.style.backgroundColor = "#daa520";
  
        setTimeout(function() {
            reStageGameNextRound();
        },2000);
   
    
}

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

    },4000);

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

    challengeUsernameCPU.innerText = "";
    challengeGenderCPU.innerText = "";
    challengeLevelCPU.innerText = "";
   
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


// intermediate level gameplay
export function gameStartsNowIntermediate(userSelectValue) {
    document.querySelector('body').style.backgroundColor = "#B784B7";

    userSideLeftIntermediate.style.display = 'none';
    userSideLeftImageIntermediate.style.display = 'inline';

    const imgUser = document.createElement('img');
    const userValue = "./images/" + userSelectValue + ".png";
    imgUser.src = userValue;
    userSideLeftImageIntermediate.appendChild(imgUser);

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
    cpuSideRenderIntermediate.innerHTML = "<img src = './images/thinking.png' width=100% height=100% />";

    setTimeout(function() {
        cpuSideRenderIntermediate.innerHTML = " ";
        const imgCpu = document.createElement('img');
        
        imgCpu.src = cpu;
        cpuSideRenderIntermediate.style.height = '20%';
        cpuSideRenderIntermediate.style.width = '20%';
        cpuSideRenderIntermediate.appendChild(imgCpu);
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
                reStageGameNextRoundIntermediate();
            },3000);
        }
        else if(userSelectValue === 'rock' &&  cpuElement === 'paper'){
            const cpuWinsSound = new Audio("./sounds/paperfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRoundIntermediate();
            }, 6000);
        }
        else if(userSelectValue === 'paper' &&  cpuElement === 'scissors'){
            const cpuWinsSound = new Audio("./sounds/scissorsfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRoundIntermediate();
            }, 5000);
        }
        else if(userSelectValue === 'scissors' &&  cpuElement === 'rock'){
            const cpuWinsSound = new Audio("./sounds/rockfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRoundIntermediate();
            }, 6000);
            
        }
        else if(userSelectValue === 'paper' &&  cpuElement === 'rock'){
            const userWinsSound = new Audio("./sounds/paperfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRoundIntermediate();
            }, 6000);
        }
        else if(userSelectValue === 'scissors' &&  cpuElement === 'paper'){
            const userWinsSound = new Audio("./sounds/scissorsfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRoundIntermediate();
            }, 5000);
        }
        else if(userSelectValue === 'rock' &&  cpuElement === 'scissors'){
            const userWinsSound = new Audio("./sounds/rockfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRoundIntermediate();
            }, 6000);
            
        }

    }, 5000);
     
    
    
    console.log("cpu select: " + cpu);
    console.log("user select: "+userValue);
}

function reStageGameNextRoundIntermediate(){
    document.querySelector('body').style.backgroundColor = "#B784B7";

    if(gameRunner < 1){
        roundCountMainRound.style.display = 'none';
        roundCountMain.style.display = 'flex';
        roundCountMain.innerText = "Game Over";
        roundCountMain.style.color = "red";
        roundCountMain.style.fontWeight = "600";
        gameStartIntermediate.style.display = "none";
        
        if(userScore.innerText > cpuScore.innerText){
            userInfoChallenge.forEach((userData) => {
                const userNameData = userData.Username;
                gameEndStatIntermediate((userNameData + " is the champion!"), 'green');
             })
            const userWinnerSound = new Audio("./sounds/intermediate-winner.mp3");
            userWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#96E9C6";

        } else if (userScore.innerText < cpuScore.innerText){
            intermediate.forEach((cpuData) => {
                const intermediateUserNameData = cpuData.nameCPU;
                gameEndStatIntermediate(intermediateUserNameData + " is the champion and you LOST!!",  '#946d09');


            })
            const cpuWinnerSound = new Audio("./sounds/ending-laughter_loser-intermediate.mp3");
            cpuWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#9B4444";

        }
        else {
            gameEndStatIntermediate("A tie!", "blue");
            const noWinnerSound = new Audio("./sounds/tie.mp3");
            noWinnerSound.play();
        }

    } else {
        userSideLeftIntermediate.style.display = 'flex';
        userSideLeftImageIntermediate.innerHTML = " ";
        userSideLeftImageIntermediate.style.display = 'none';
        gameStartSectionRender();
        cpuSideRenderIntermediate.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
        processingBar.style.display = 'none';
        processingBar.innerText = 'processing winner...';
        processingBar.style.backgroundColor = 'red';
        roundCount.innerText++;
        gameRunner --;
        console.log("game runner remains: "+gameRunner);
    } 

    
console.log("now round: "+roundCount.innerText);
console.log("game runner now: "+gameRunner);
}

export function userWinsEachRoundIntermediate(){
    userInfoChallenge.forEach((userData) => {
       const userNameData = userData.Username;
       processingBar.innerText = userNameData + " wins!";
    })
    userScore.innerText++;
    processingBar.style.backgroundColor = "green";

        setTimeout(function() {
            reStageGameNextRoundIntermediate();
        },2000);
   
}

export function cpuWinsEachRoundIntermediate(){
    intermediate.forEach((cpuDataInformationIntermediate) => {
        const intermediateCpuData = cpuDataInformationIntermediate.nameCPU;
        processingBar.innerText = intermediateCpuData + " wins!";
    })
    cpuScore.innerText++;
    processingBar.style.backgroundColor = "#070F2B";
  
        setTimeout(function() {
            reStageGameNextRoundIntermediate();
        },2000);
   
    
}


function gameEndStatIntermediate(outcomeStat, backGroundColor){
    gameEndIntermediate.style.display = 'block';
    gameEndIntermediate.innerText = outcomeStat;
    gameEndIntermediate.style.backgroundColor = backGroundColor;
    gameEndIntermediate.style.textAlign = "center";
    gameEndIntermediate.style.color = '#fff';
    processingBar.style.display = "none";

    setTimeout(function(){
        const btnRestartYes = document.createElement('button');
        btnRestartYes.innerText = "Yes";
        btnRestartYes.style.backgroundColor = "#fff";
        btnRestartYes.style.color = backGroundColor;
        btnRestartYes.style.padding = "5px 6px";
        btnRestartYes.style.margin = "5px 15px";
        btnRestartYes.onclick = restartGameIntermediate;
        btnRestartYes.style.cursor = 'pointer';
        btnRestartYes.style.border = 'none';
        btnRestartYes.style.borderRadius = '3px';

        const btnRestartNo = document.createElement('button');
        btnRestartNo.innerText = 'No';
        btnRestartNo.style.backgroundColor = "#fff";
        btnRestartNo.style.color = 'red';
        btnRestartNo.style.padding = "5px 6px";
        btnRestartNo.style.margin = "5px 15px";
        btnRestartNo.onclick = endGameIntermediate;
        btnRestartNo.style.cursor = 'pointer';
        btnRestartNo.style.border = 'none';
        btnRestartNo.style.borderRadius = '3px';


        btnRestartYes.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });
        btnRestartNo.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });

        gameEndIntermediate.innerText = "Restart?";
        gameEndIntermediate.appendChild(btnRestartYes);
        gameEndIntermediate.appendChild(btnRestartNo);

    },4000);

}

function restartGameIntermediate(){
    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";
    processingBar.innerText = "processing winner...";
    processingBar.style.backgroundColor = 'red';

    document.querySelector('body').style.backgroundColor = "#B784B7";

    gameEndIntermediate.style.display = "none";
    userSideLeftIntermediate.style.display = 'flex';

    userSideLeftImageIntermediate.innerHTML = " ";
    // userSelectElement.innerText = "Choose ...";
    
    userSideLeftImageIntermediate.style.display = 'none';
    cpuSideRenderIntermediate.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    gameSectionStartBeginner(); 
}

function endGameIntermediate(){
    document.querySelector('body').style.backgroundColor = '#E5E5E5';

    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";

    userInfoChallenge.length = 0;
    gameEndIntermediate.style.display = "none";

    // userSelectElement.innerText = "Choose ...";
    elementColumnContainer.style.display = "flex";
    containerUserInfo.style.display = "none";

    challengeUser.innerText = "";
    challengeGender.innerText = "";
    challengeLevel.innerText = "";

    challengeUsernameCPU.innerText = "";
    challengeGenderCPU.innerText = "";
    challengeLevelCPU.innerText = "";
   
    containerBrave.style.margin = '0';
    containerBrave.style.border = "none";
    containerBrave.style.borderRadius = "0";

    document.querySelector('footer').style.marginTop = "0";


    containerScore.style.display = "none";
    waitingForChallenger.style.display = "block";
    gameStartSectionIntermediate.style.display = "none";

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
    userSideLeftIntermediate.style.display = 'flex';

    userSideLeftImageIntermediate.innerHTML = " ";
    
    userSideLeftImageIntermediate.style.display = 'none';
    // gameSectionStartBeginner(); 
    cpuSideRenderIntermediate.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    changeBackToNo();
}