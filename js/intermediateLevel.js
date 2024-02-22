import {intermediateBtn,
        containerInputInteractions,
        gameStartSectionIntermediate,
        gameStart, 
        userSide,
        cpuSideRender,
        rpsContainer,
        

        } from "./declarations.js";

import { gameStartsNow } from "./gameplay.js";



 export function gameIntestineIntermediate(){
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
