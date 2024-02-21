import {userInfoChallenge,
        

    } from "./declarations.js";
import { gameIntestineBeginner} from "./beginnerLevel.js";


export function gameStartSectionRender(){
    userInfoChallenge.forEach((itemOFUserInfo) => {
        if(itemOFUserInfo.Level === "Beginner"){
            gameIntestineBeginner();
        }
        else if(itemOFUserInfo.Level === "Intermediate"){
            gameIntestineIntermediate(); 
            
        }
        else if(itemOFUserInfo.Level === "Advanced"){
            const labelInstruction = document.getElementById('user-label-description');
            labelInstruction.innerHTML = "Click to choose element: "
            gameIntestineBeginner();
        }
    
       })
  
}