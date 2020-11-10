// window er objekt, HTML objekt,
// addEventListener er methode, ligesom getElementById er methode

window.addEventListener("load", function(){
    // DOM elementer
    let instructions = document.getElementById("instructions");
    let rollBtn = document.getElementById("roll-btn");
    let score = document.getElementById("score");
    let userSpan = document.getElementById("user-result");
    let cpuSpan = document.getElementById("cpu-result");
    let userProgress = document.getElementById("user-progress");
    let cpuProgress = document.getElementById("cpu-progress");
    let resetBtn = document.getElementById("reset-btn");

    let gameStopText = "Tryk på knappen for at kaste terningen. <b>Hvis man slår en etter mister man alle sine points.</b>";

    let userGlobalScore = 0;
    let cpuGlobalScore = 0;

    // hvis gameStart er False, så er gamet ikke i gang 
    let gameStart = false;

    resetBtn.addEventListener("click", function(){
        window.location = "index.html";
    })

    function gameStatus(){
    if(gameStart == false){
        instructions.innerHTML = gameStopText;
    }
    else{
        instructions.innerHTML = "Spillet er i gang 💃🏻"
    }
}
    gameStatus();

    rollBtn.addEventListener("click", function(event){
        gameStart = true;
        gameStatus();
        function getRandomNumber(){
            return Math.floor(1 + Math.random() * 6);
        }

        let userValue = getRandomNumber();
        let cpuValue = getRandomNumber();

        //console.log(userValue + " " + cpuValue);

        score.style.display = "block";

        if(userValue == 1){
            userGlobalScore = 0;
        }
        if(cpuValue == 1){
            cpuGlobalScore = 0;
        }

        window.setTimeout(function(){
            userSpan.innerHTML = userValue;
        }, 500);

        window.setTimeout(function(){
            cpuSpan.innerHTML = cpuValue;

            gameStart = false;
            gameStopText = "Spil igen!?";
            gameStatus();

            userGlobalScore += userValue;
            cpuGlobalScore += cpuValue;
            userProgress.style.width = (userGlobalScore * 5) + "%";
            cpuProgress.style.width = (cpuGlobalScore * 5) + "%";
            //console.log(userGlobalScore + " " + cpuGlobalScore);
            if(userGlobalScore >= 20 || cpuGlobalScore >= 20){

                instructions.innerHTML = "Spillet er slut! Din samlede score var: "+ userGlobalScore + "<br> CPU samlet score var " + cpuGlobalScore;
                
                rollBtn.setAttribute("disabled", "true");
                resetBtn.style.display = "inline-block";
            }

        }, 1000);
        
    });
});