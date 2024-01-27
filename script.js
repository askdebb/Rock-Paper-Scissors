const btnAgreeYes = document.getElementById('btn-yes');
const btnAgreeNo = document.getElementById('btn-no');
const yesInfo = document.querySelector('.yes-info');
console.log(btnAgreeYes.id);

const containerInputInteractions = document.querySelector('.container-input-interactions');

const btnClicked = $('.btn').click(function (e){
    let btnID = e.target.id;
    if(btnID === btnAgreeYes.id) {
        document.querySelector('.container-input-interactions').innerHTML = " ";
        const newDiv = document.createElement('div')
        yesInfo.style.display = "flex";
        yesInfo.style.flexDirection = "column"; 
        yesInfo.style.justifyContent = "space-between"; 
        containerInputInteractions.style.backgroundColor = '#E5E5E5';
        newDiv.appendChild(yesInfo);
        containerInputInteractions.appendChild(newDiv);
        console.log("yes pressed");
    }
    else {
        document.querySelector('.container-input-interactions').innerHTML = " ";
        btnAgreeYes.style.visibility = "hidden";
        noBtnDetails();
        setTimeout(function(){
            btnAgreeYes.style.visibility = "visible";
        },9000);
        
    }
});


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
            emElement.innerText = "Scared of me? Hahahaa!!   RUN!!!!!.......      🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿";
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