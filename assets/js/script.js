let ELEMENT__audio = document.getElementById("clic")




let ELEMENT__sec = document.getElementById("secondes").childNodes[1];
                    console.log("Je récupère l'élément du 1er enfant de mon element :",ELEMENT__sec);
let ELEMENT__sec_value = ELEMENT__sec.innerText;



let ELEMENT__min = document.getElementById("minutes").childNodes[1];
                    console.log("Je récupère l'élément du 1er enfant de mon element :",ELEMENT__sec);
let ELEMENT__min_value = ELEMENT__min.innerText;



let ELEMENT__hours = document.getElementById("hours").childNodes[1];
                    console.log("Je récupère l'élément du 1er enfant de mon element :",ELEMENT__sec);
let ELEMENT__hours_value = ELEMENT__hours.innerText;



let ELEMENT__days = document.getElementById("days").childNodes[1];
                    console.log("Je récupère l'élément du 1er enfant de mon element :",ELEMENT__sec);
let ELEMENT__days_value = ELEMENT__days.innerText;


let setIntervalID = setInterval(() => {
    Countdown();
    ELEMENT__audio.play()
}, 1000);



function Countdown () {
    ELEMENT__sec_value --;

    
    if(ELEMENT__sec_value === -1){
        ELEMENT__min_value --;
            if(ELEMENT__min_value === -1) {
                ELEMENT__hours_value --;

                    if(ELEMENT__hours_value === -1) {
                        ELEMENT__days_value --;
                    
                        if(ELEMENT__days_value === -1) {
                            ELEMENT__reset_value = 0;
                            ELEMENT__sec.innerText = ELEMENT__reset_value;
                            ELEMENT__min.innerText = ELEMENT__reset_value;
                            ELEMENT__hours.innerText = ELEMENT__reset_value;
                            ELEMENT__days.innerText = ELEMENT__reset_value;
                            clearInterval(setIntervalID);
                            return;
                        }
                        ELEMENT__days.innerText = ELEMENT__days_value;
                        ELEMENT__hours_value = 24;
                        ELEMENT__hours.innerText = ELEMENT__hours_value;
                        }
                ELEMENT__hours.innerText = ELEMENT__hours_value;
                ELEMENT__min_value = 59;
                ELEMENT__min.innerText = ELEMENT__min_value;
            }
        ELEMENT__min.innerText = ELEMENT__min_value;
        ELEMENT__sec_value = 59;
        ELEMENT__sec.innerText = ELEMENT__sec_value;
    } else {
        ELEMENT__sec.innerText = ELEMENT__sec_value;
    }
}