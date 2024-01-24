const btnAgreeYes = document.getElementById('btn-yes');
const btnAgreeNo = document.getElementById('btn-no');

const containerInputInteractions = document.querySelector('.container-input-interactions');


console.log(btnAgreeYes);
console.log(btnAgreeNo);
btnAgreeYes.addEventListener('click', function() {
console.log(this.innerText);
});
btnAgreeNo.addEventListener('click', function(e) {
document.querySelector('.container-input-interactions').innerHTML = " ";

console.log(e);

noBtnDetails();
});


function noBtnDetails (){
    const emElement = document.createElement('em');
    emElement.innerText = "Loading....";
    emElement.style.color = '#fff';
    containerInputInteractions.style.backgroundColor = '#F72201';

    setTimeout(function (){
        emElement.innerText = "Scared of me? Hahahaa!!   RUN!!!!!.......      🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿🏃🏿";
        let lafter = new Audio("./sounds/laughter.mp3");
        lafter.play();
    }, 2000);
    setTimeout(function (){
        emElement.innerText = "Don't you wanna compete with Sir Chris?";
        let lafter = new Audio("./sounds/laughter.mp3");
        lafter.play();
    }, 4000);
    containerInputInteractions.appendChild(emElement);
}