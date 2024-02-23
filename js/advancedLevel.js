import { advancedBtn, 
        cpuSideRenderAdvanced, 
        gameStartAdvanced, 
        gameStartSectionAdvanced, 
        userSideAdvanced,
        containerInputInteractions,
        containerBrave,
        cpuScore,
        userScore,
        rpsContainer,
        containerElementShow
    
    } from "./declarations.js";
import { gameStartsNowAdvanced } from "./gameplay.js";


export function gameIntestineAdvanced(){
    document.querySelector('body').style.backgroundColor = "#643843";

    containerInputInteractions.style.width = '96%';
    // containerInputInteractions.style.borderRadius = '15px';
    containerInputInteractions.style.borderTopRightRadius = '10px';
    containerInputInteractions.style.borderTopLeftRadius = '10px';
   
    containerElementShow.style.borderBottomLeftRadius =  '10px';
    containerElementShow.style.borderBottomRightRadius =  '10px';
    containerElementShow.style.transition = "0.5s ease";


    containerBrave.style.margin = '15px 0';
    containerBrave.style.border = "2px solid #FC6736";
    containerBrave.style.borderRadius = "10px";

    cpuScore.style.fontWeight = "600";
    userScore.style.fontWeight = "600";

    document.querySelector('footer').style.marginTop = "5px";
    document.querySelector('footer').style.borderBottomRightRadius = "7px";
    document.querySelector('footer').style.borderBottomLeftRadius = "7px";

 
    
    gameStartSectionAdvanced.style.display ="block";
    gameStartSectionAdvanced.style.width ="90%";
    gameStartSectionAdvanced.style.margin ="0 auto";

    gameStartAdvanced.style.display = 'flex';
    gameStartAdvanced.style.justifyContent = 'space-around';
    gameStartAdvanced.style.alignItems = 'center';
    gameStartAdvanced.style.alignItems = 'center';

    userSideAdvanced.style.width = '50%';
    userSideAdvanced.style.padding = '10px 0';

    cpuSideRenderAdvanced.style.width = '50%';
    cpuSideRenderAdvanced.style.padding = '10px 0';
    
    containerInputInteractions.appendChild(gameStartSectionAdvanced);



}

 advancedBtn.addEventListener("click", function() {
    gameStartsNowAdvanced(rpsContainer[Math.floor(Math.random() * 3)]);
});