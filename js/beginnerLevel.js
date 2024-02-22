import {
        containerInputInteractions,
        gameStartSection,
        gameStart,
        userSide,
        cpuSideRender,

    } from "./declarations.js";



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


