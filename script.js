const btnAgreeYes = document.getElementById('btn-yes');
const btnAgreeNo = document.getElementById('btn-no');
const yesInfo = document.querySelector('.yes-info');

const userName = document.getElementById('username');
const userGender = document.getElementById('gender');
const userLevel = document.getElementById('level');
const yesBtn = document.getElementById('submit-user-info');
const noName = document.getElementById('no-name');

let challengeUser = document.getElementById('challenge-user');
let challengeGender = document.getElementById('challenge-gender');
let challengeLevel = document.getElementById('challenge-level');

const containerBrave = document.querySelector('.container-brave');

const anyChallengerHead = document.getElementById('h2');
const braveBtn = document.querySelector('.brave-btn');
const containerElementShow = document.querySelector('.container-element-show');
const elementColumnContainer = document.querySelector('.element-column-container');
const containerScore = document.querySelector('.container-score');

const waitingForChallenger = document.getElementById('waiting');

const containerInputInteractions = document.querySelector('.container-input-interactions');
const containerUserInfo = document.querySelector('.container-user-info');

const gameStartSection = document.querySelector('.game-start-section');
const gameStart = document.querySelector('.game-start');

const btnGo = document.getElementById('btn-go');
const userSelectElement = document.getElementById('user-select-element');
const userSide = document.querySelector('.user-side');
const btnGoBackDiv = document.querySelector('.redo-btn');
const showUserSide = document.querySelector('.show-user-side');
const cpuSideRender = document.querySelector('.cpu-side');
const userSideLeft = document.querySelector('.user-side-left');
const userSideLeftImage = document.querySelector('.user-side-left-image');
const processingBar = document.querySelector('.processing-bar');

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
        userInfoChallenge = [];
        btnReturnToFillForm();
        console.log(userInfoChallenge);
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
        yesInfo.style.display = "none";
        noName.style.display = "block";

    //    feedBackInfo("No name entered");
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

noName.addEventListener('click', function() {
    yesInfo.style.display = "flex";
    noName.style.display = "none";
});

// function feedBackInfo(infoHere){
//     // document.querySelector('.container-input-interactions').innerHTML = " ";

//     yesInfo.style.display = 'none';
//     const newSpanElement = document.createElement('span');
//     const newBtn = document.createElement('button');
//     newSpanElement.innerText = infoHere;
//     newSpanElement.style.fontWeight = '600';
    
//     newBtn.innerText = "Go Back";
//     newBtn.style.padding = '5px 10px';
//     newBtn.style.border = 'none';
//     newBtn.style.backgroundColor = '#5cb45c';
//     newBtn.style.color = '#fff';
//     newBtn.style.cursor = 'pointer';
//     newBtn.style.borderRadius = '5px';
//     newBtn.style.fontSize = '1rem';
//     newBtn.style.marginLeft = '5px';

//     newBtn.addEventListener('mouseover', function() {
//         this.style.backgroundColor = '#088f08';
//         this.style.fontWeight = '600';
//         this.style.transition = '0.3s ease-in-out';
//     })

//     newBtn.onclick = btnReturnToFillForm;
//     newSpanElement.appendChild(newBtn);
//     containerInputInteractions.appendChild(newSpanElement);
// }

function btnReturnToFillForm() {
    waitingForChallenger.style.display = "none";
    noName.style.display = "none";
    // document.querySelector('.container-input-interactions').innerHTML = " ";
 
    yesInfo.style.display = "flex";
    yesInfo.style.flexDirection = "column"; 
    yesInfo.style.justifyContent = "space-between"; 
    containerInputInteractions.style.backgroundColor = '#E5E5E5';
    containerInputInteractions.appendChild(yesInfo);
}

function gameSectionStartBeginner(){
    // document.querySelector('.container-element-show').innerHTML = " ";
    // document.querySelector('.container-brave').innerHTML = " ";
    braveBtn.style.display = "none";

    anyChallengerHead.style.display = "none";
    waitingForChallenger.style.display = "none";
    yesInfo.style.display = "none";
    containerInputInteractions.style.width= '96%';

    const divForGif = document.createElement('div');
    divForGif.innerHTML = "<img src = './images/loading.gif' height='100%'/>";
    containerInputInteractions.appendChild(divForGif);
    
    const beginnerSound = new Audio("./sounds/beginner.mp3");
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
    }, 9000);
}

function gameStartSectionRender(){
    // document.querySelector('.container-input-interactions').innerHTML = " ";
    containerInputInteractions.style.width= '96%';
    // containerInputInteractions.style.margin= '0 auto';
   
    gameStartSection.style.display = 'block';
    gameStartSection.style.width = '90%';
    gameStartSection.style.margin = '0 auto';

    gameStart.style.display = 'flex';
    gameStart.style.justifyContent = 'space-around';
    gameStart.style.alignItems = 'center';

    userSide.style.width = '50%';
    userSide.style.padding = '10px 0';

    cpuSideRender.style.width = '50%';
    cpuSideRender.style.padding = '10px 0';
    
    containerInputInteractions.appendChild(gameStartSection);
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


let userScore = document.getElementById('userScore');
let cpuScore = document.getElementById('cpuScore');
let roundCount = document.getElementById('round-count');
let roundCountMainRound = document.querySelector('.round-count');
let roundCountMain = document.querySelector('.round-count-main');

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

    userInfoChallenge = [];
    gameEnd.style.display = "none";

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
    
}