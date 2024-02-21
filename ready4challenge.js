import {btnAgreeYes,
        userInfoChallenge,
        emElement
    } from "./declarations.js";

import { btnReturnToFillForm } from './script.js';



export const btnClicked = $('.btn').click(function (e){
    let btnID = e.target.id;
    if(btnID === btnAgreeYes.id) {
        // userInfoChallenge = [];
        emElement.style.display = "none";
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
        }, 1000);
    }
    else {
            waitingForChallenger.style.display = "none";
            noName.style.display = "none";
            yesInfo.style.display = "none";
            // document.querySelector('.container-input-interactions').innerHTML = " ";
            btnAgreeYes.style.visibility = "hidden";
            emElement.style.display = "block";

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
