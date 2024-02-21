import {braveBtn,
        anyChallengerHead,
        waitingForChallenger,
        yesInfo,
        containerInputInteractions,
        elementColumnContainer,
        containerUserInfo,
        containerScore,
        containerElementShow,
        containerBrave,
        gameStartSection,
        gameStart,
        userSide,
        cpuSideRender,

    } from "./declarations.js";

import {gameStartSectionRender} from "./gameplay.js"

export function gameSectionStartBeginner(){
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


export function gameIntestineBeginner(){
    containerInputInteractions.style.width= '96%';
   
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


