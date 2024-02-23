import {intermediateBtn,
        containerInputInteractions,
        gameStartSectionIntermediate,
        gameStartIntermediate, 
        userSideIntermediate,
        cpuSideRenderIntermediate,
        rpsContainer,
        containerBrave,
        cpuScore,
        userScore,
        
        

        } from "./declarations.js";

import { gameStartsNowIntermediate } from "./gameplay.js";



 export function gameIntestineIntermediate(){
    document.querySelector('body').style.backgroundColor = "#661b70";

    containerInputInteractions.style.width = '96%';

    containerBrave.style.margin = '3px 0';
    containerBrave.style.border = "2px solid #FC6736";
    containerBrave.style.borderRadius = "10px";

    cpuScore.style.fontWeight = "600";
    userScore.style.fontWeight = "600";

    document.querySelector('footer').style.marginTop = "5px";
    
    gameStartSectionIntermediate.style.display ="block";
    gameStartSectionIntermediate.style.width ="90%";
    gameStartSectionIntermediate.style.margin ="0 auto";

    gameStartIntermediate.style.display = 'flex';
    gameStartIntermediate.style.justifyContent = 'space-around';
    gameStartIntermediate.style.alignItems = 'center';
    gameStartIntermediate.style.alignItems = 'center';

    userSideIntermediate.style.width = '50%';
    userSideIntermediate.style.padding = '10px 0';

    cpuSideRenderIntermediate.style.width = '50%';
    cpuSideRenderIntermediate.style.padding = '10px 0';
    
    containerInputInteractions.appendChild(gameStartSectionIntermediate);



}

 intermediateBtn.addEventListener("click", function() {
    gameStartsNowIntermediate(rpsContainer[Math.floor(Math.random() * 3)]);
});
