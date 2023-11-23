let botonesDle = document.querySelectorAll(".btnDle");
let dleImages = document.querySelectorAll("img.btnDle");
let botonRemove = document.querySelector(".btnRemove");
let botonConfirm = document.querySelector(".btnConfirm");
let dle = document.querySelectorAll(".dle");
let src = 0;
let urlSinDominio =0;
let contClicks = 0;
let contWin = 0;

let arregloFood = [5];
let arregloFoodWin = [5];
let arregloBloquearFood = [10];

let paso1 = true;
let paso2 = false;
let paso3 = false;
let paso4 = false;
let paso5 = false;
let paso6 = false;
let winner = false;

let modeContraReloj = false;
let winContraReloj = false;
/*function result(){
    if(winner){
        document.querySelector(".spanResult").style.display = "flex";
        document.querySelector(".txtResult").innerHTML = "Ganaste";
        document.querySelector(".txtResult").style.color = "lime";  
        
        setTimeout(() => {
            document.querySelector(".spanResult").style.display = "none";
        }, 1500);
    }else{
        document.querySelector(".spanResult").style.display = "flex";
        document.querySelector(".txtResult").innerHTML = "Ganaste";
        document.querySelector(".txtResult").style.color = "lime";        
    
        setTimeout(() => {
            document.querySelector(".spanResult").style.display = "none";
        }, 1500);
    }
}*/

function foodIncorrect(){

        if(paso1){
            for(let i = 0; i < 5; i++){
                if(dle.item(i).style.backgroundColor == "yellow"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "yellow";
                }else if(dle.item(i).style.backgroundColor == "lime"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "lime";
                }else{
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "gray";
                    console.log(botonesDle.item(arregloFood[i]+1));
                }
            }
        }else if(paso2){
            for(let i = 0; i < 5; i++){
                if(dle.item(i+5).style.backgroundColor == "yellow"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "yellow";
                }else if(dle.item(i+5).style.backgroundColor == "lime"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "lime";
                }else{
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "gray";
                    console.log(botonesDle.item(arregloFood[i]+1));
                }
            }
        }else if(paso3){
            for(let i = 0; i < 5; i++){
                if(dle.item(i+10).style.backgroundColor == "yellow"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "yellow";
                }else if(dle.item(i+10).style.backgroundColor == "lime"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "lime";
                }else{
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "gray";
                    console.log(botonesDle.item(arregloFood[i]+1));
                }
            }
        }else if(paso4){
            for(let i = 0; i < 5; i++){
                if(dle.item(i+15).style.backgroundColor == "yellow"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "yellow";
                }else if(dle.item(i+15).style.backgroundColor == "lime"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "lime";
                }else{
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "gray";
                    console.log(botonesDle.item(arregloFood[i]+1));
                }
            }
        }else if(paso5){
            for(let i = 0; i < 5; i++){
                if(dle.item(i+20).style.backgroundColor == "yellow"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "yellow";
                }else if(dle.item(i+20).style.backgroundColor == "lime"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "lime";
                }else{
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "gray";
                    console.log(botonesDle.item(arregloFood[i]+1));
                }
            }
        }else if(paso6){
            for(let i = 0; i < 5; i++){
                if(dle.item(i+25).style.backgroundColor == "yellow"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "yellow";
                }else if(dle.item(i+25).style.backgroundColor == "lime"){
                    console.log(botonesDle.item(arregloFood[i]+1));
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "lime";
                }else{
                    botonesDle.item(arregloFood[i]+1).style.backgroundColor = "gray";
                    console.log(botonesDle.item(arregloFood[i]+1));
                }
            }
        }
}

function restartWin(){
    src = 0;
    urlSinDominio =0;
    contClicks = 0;
    contBotonesMode = 0;
    contWin = 0;

    paso1 = false;
    paso2 = false;
    paso3 = false;
    paso4 = false;
    paso5 = false;
    paso6 = false;

    setTimeout(() => {

    
        for(let i = 0; i < 5; i++){
            arregloFoodWin[i] = undefined;
            arregloFood[i] = undefined;
            arregloBloquearFood[i] = undefined;
            arregloFoodMode[i] = undefined;
        }
    
        for(let i = 0; i < dle.length; i++){
            dle.item(i).src = "./img/nada2.png";
        }

        for(let i = 0; i < 30; i++){
            dle.item(i).style.backgroundColor = "transparent";
        }

        for(let i = 0; i < botonesDle.length; i++){
            botonesDle.item(i).style.backgroundColor = "rgb(211, 255, 255)";
        }

        for(let i = 0; i < botonesDleMode.length; i++){
            botonesDleMode.item(i).style.backgroundColor = "rgb(211, 255, 255)";
        }
        
    for(let i = 0; i < 5; i++){
        arregloFoodWin[i] = Math.floor(Math.random()*10);
        console.log(arregloFoodWin[i]);
    }

    paso1 = true;
    paso2 = false;
    paso3 = false;
    paso4 = false;
    paso5 = false;
    paso6 = false;

    }, 2000);


}

function restartLose(){
    src = 0;
    urlSinDominio =0;
    contWin = 0;

    for(let i = 0; i < 5; i++){
        arregloFood[i] = undefined;
    }

}

function confirmWinner(){
    
    if(paso1){
        for(let i = 0; i < 5; i++){
            if(arregloFoodWin[i] == arregloFood[i]){
                dle.item(i).style.backgroundColor = "lime";
            }
            
        }
    }else if(paso2){
        for(let i = 5; i < 10; i++){
            if(arregloFoodWin[i-5] == arregloFood[i-5]){
                dle.item(i).style.backgroundColor = "lime";
            }
        }
    }else if(paso3){
        for(let i = 10; i < 15; i++){
            if(arregloFoodWin[i-10] == arregloFood[i-10]){
                dle.item(i).style.backgroundColor = "lime";
            }
        }
    }else if(paso4){
        for(let i = 15; i < 20; i++){
            if(arregloFoodWin[i-15] == arregloFood[i-15]){
                dle.item(i).style.backgroundColor = "lime";
            }
        }
    }else if(paso5){
        for(let i = 20; i < 25; i++){
            if(arregloFoodWin[i-20] == arregloFood[i-20]){
                dle.item(i).style.backgroundColor = "lime";
            }
        }
    }else if(paso6){
        for(let i = 25; i < 30; i++){
            if(arregloFoodWin[i-25] == arregloFood[i-25]){
                dle.item(i).style.backgroundColor = "lime";
            }
        }
    }
    
    foodIncorrect();
}


function confirmPositions(){
   if(paso1){
    for(let i = 0; i < 5; i++){
        for (let j= 0; j < 5; j++) {
                if(arregloFood[i] == arregloFoodWin[j]){
                    dle.item(i).style.backgroundColor = "yellow";
                }
        }
    }
   }else if(paso2){
    for(let i = 5; i < 10; i++){
        for (let j= 5; j < 10; j++) {
            if(arregloFood[i-5] == arregloFoodWin[j-5]){
                dle.item(i).style.backgroundColor = "yellow";
            }
        }
    }
   }else if(paso3){
    for(let i = 10; i < 15; i++){
        for (let j= 10; j < 15; j++) {
            if(arregloFood[i-10] == arregloFoodWin[j-10]){
                dle.item(i).style.backgroundColor = "yellow";
            }
        }
    }
   }else if(paso4){
    for(let i = 15; i < 20; i++){
        for (let j= 15; j < 20; j++) {
            if(arregloFood[i-15] == arregloFoodWin[j-15]){
                dle.item(i).style.backgroundColor = "yellow";
            }
        }
    }
   }else if(paso5){
    for(let i = 20; i < 25; i++){
        for (let j= 20; j < 25; j++) {
            if(arregloFood[i-20] == arregloFoodWin[j-20]){
                dle.item(i).style.backgroundColor = "yellow";
            }
        }
    }
   }else if(paso6){
    for(let i = 25; i < 30; i++){
        for (let j= 25; j < 30; j++) {
            if(arregloFood[i-25] == arregloFoodWin[j-25]){
                dle.item(i).style.backgroundColor = "yellow";
            }
        }
    }
   }
}

let contar1 = 0;
let contar2 = 0;
let contar3 = 0;
let contar4 = 0;
let contar5 = 0;
let contar6 = 0;
let contar7 = 0;
let contar8 = 0;
let contar9 = 0;

for(let i = 0; i < 5; i++){
    arregloFoodWin[i] = Math.floor(Math.random()*10);
    console.log(arregloFoodWin[i]);
}

for(let i = 0; i < 5; i++){
if(arregloFoodWin[i] == 1){
    contar1++;
}
}

for(let i = 0; i < 5; i++){
if(arregloFoodWin[i] == 2){
    contar2++;
}
}

for(let i = 0; i < 5; i++){
if(arregloFoodWin[i] == 3){
    contar3++;
}
}

for(let i = 0; i < 5; i++){
if(arregloFoodWin[i] == 4){
    contar4++;
}
}

for(let i = 0; i < 5; i++){
if(arregloFoodWin[i] == 5){
    contar5++;
}
}

for(let i = 0; i < 5; i++){
if(arregloFoodWin[i] == 6){
    contar6++;
}
}

for(let i = 0; i < 5; i++){
if(arregloFoodWin[i] == 7){
    contar7++;
}
}

for(let i = 0; i < 5; i++){
if(arregloFoodWin[i] == 8){
    contar8++;
}
}

for(let i = 0; i < 5; i++){
if(arregloFoodWin[i] == 9){
    contar9++;
}
}

console.log(arregloFoodWin.find(item => item == 1)+":"+contar1);
console.log(arregloFoodWin.find(item => item == 2)+":"+contar2);
console.log(arregloFoodWin.find(item => item == 3)+":"+contar3);
console.log(arregloFoodWin.find(item => item == 4)+":"+contar4);
console.log(arregloFoodWin.find(item => item == 5)+":"+contar5);
console.log(arregloFoodWin.find(item => item == 6)+":"+contar6);
console.log(arregloFoodWin.find(item => item == 7)+":"+contar7);
console.log(arregloFoodWin.find(item => item == 8)+":"+contar8);
console.log(arregloFoodWin.find(item => item == 9)+":"+contar9);
//console.log(arregloFoodWin.find(item => item == 2)+":"+((arregloFoodWin.findIndex(item => item === 2))+1));

for(let i = 0; i < botonesDle.length; i++){
    botonesDle.item(i).addEventListener("click", () =>{
    if(contClicks >= 0 && contClicks <= 4 & paso1){
    src = dleImages[i-1].src;
    urlSinDominio = src.replace("http://127.0.0.1:5500", "");    

        dle.item(contClicks).src = urlSinDominio//"./img/food/soap.svg";
        
        arregloFood[contClicks] = i-1;
        arregloBloquearFood[contClicks] = i-1;
        contClicks++;
        //console.log(arregloFood[contClicks-1]);

    }else if(contClicks >= 5 && contClicks <= 9 && paso2){
        src = dleImages[i-1].src;
        urlSinDominio = src.replace("http://127.0.0.1:5500", "");    
    
            dle.item(contClicks).src = urlSinDominio//"./img/food/soap.svg";
            
            arregloFood[contClicks - 5] = i-1;
            //console.log(contClicks);
        arregloBloquearFood[contClicks - 5] = i-1;
            contClicks++;
            //console.log(arregloFood[contClicks - 5]);
    }else if(contClicks >= 10 && contClicks <= 14 && paso3){
        src = dleImages[i-1].src;
        urlSinDominio = src.replace("http://127.0.0.1:5500", "");    
    
            dle.item(contClicks).src = urlSinDominio//"./img/food/soap.svg";
            
            arregloFood[contClicks - 10] = i-1;
            //console.log(contClicks);
        arregloBloquearFood[contClicks - 10] = i-1;
            contClicks++;
            //console.log(arregloFood[contClicks - 10]);
    }else if(contClicks >= 15 && contClicks <= 19 && paso4){
        src = dleImages[i-1].src;
        urlSinDominio = src.replace("http://127.0.0.1:5500", "");    
    
            dle.item(contClicks).src = urlSinDominio//"./img/food/soap.svg";
            
            arregloFood[contClicks - 15] = i-1;
            //console.log(contClicks);
        arregloBloquearFood[contClicks - 15] = i-1;
            contClicks++;
            //console.log(arregloFood[contClicks - 15]);
    }else if(contClicks >= 20 && contClicks <= 24 && paso5){
        src = dleImages[i-1].src;
        urlSinDominio = src.replace("http://127.0.0.1:5500", "");    
    
            dle.item(contClicks).src = urlSinDominio//"./img/food/soap.svg";
            
            arregloFood[contClicks - 20] = i-1;
            //console.log(contClicks);
        arregloBloquearFood[contClicks - 20] = i-1;
            contClicks++;
            //console.log(arregloFood[contClicks - 20]);
    }else if(contClicks >= 25 && contClicks <= 34 && paso6){
        src = dleImages[i-1].src;
        urlSinDominio = src.replace("http://127.0.0.1:5500", "");    
    
            dle.item(contClicks).src = urlSinDominio//"./img/food/soap.svg";
            
            arregloFood[contClicks - 25] = i-1;
            //console.log(contClicks);
        arregloBloquearFood[contClicks - 25] = i-1;
            contClicks++;
            //console.log(arregloFood[contClicks - 25]);
    }
    });

}

botonRemove.addEventListener("click", () =>{
    if(contClicks > 0 && contClicks <= 5 && paso1){
        dle.item(contClicks-1).src = "./img/nada2.png"
        arregloBloquearFood.pop();
        arregloFood.pop();
    for(let i = 0; i < 5; i++){
    //console.log("Quedo así:"+arregloFood[i]);

    }
        contClicks--;
    }else if(contClicks > 5 && contClicks <= 10 && paso2 ){
        dle.item(contClicks-1).src = "./img/nada2.png"
        arregloBloquearFood.pop();
        arregloFood.pop();
    for(let i = 0; i < 5; i++){
    //console.log("Quedo así:"+arregloFood[i]);

    }
    contClicks--;
    //console.log(contClicks);
    }else if(contClicks > 10 && contClicks <= 15 && paso3 ){
        dle.item(contClicks-1).src = "./img/nada2.png"
        arregloBloquearFood.pop();
        arregloFood.pop();
    for(let i = 0; i < 5; i++){
    //console.log("Quedo así:"+arregloFood[i]);

    }
    contClicks--;
    //console.log(contClicks);
    }else if(contClicks > 15 && contClicks <= 20 && paso4 ){
        dle.item(contClicks-1).src = "./img/nada2.png"
        arregloBloquearFood.pop();
        arregloFood.pop();
    for(let i = 0; i < 5; i++){
    //console.log("Quedo así:"+arregloFood[i]);

    }
    contClicks--;
    //console.log(contClicks);
    }else if(contClicks > 20 && contClicks <= 25 && paso5 ){
        dle.item(contClicks-1).src = "./img/nada2.png"
        arregloBloquearFood.pop();
        arregloFood.pop();
    for(let i = 0; i < 5; i++){
    //console.log("Quedo así:"+arregloFood[i]);

    }
    contClicks--;
    //console.log(contClicks);
    }else if(contClicks > 25 && contClicks <= 30 && paso6 ){
        dle.item(contClicks-1).src = "./img/nada2.png"
        arregloBloquearFood.pop();
        arregloFood.pop();
    for(let i = 0; i < 5; i++){
    //console.log("Quedo así:"+arregloFood[i]);

    }
    contClicks--;
    //console.log(contClicks);
    }
});



botonConfirm.addEventListener("click", () =>{
    if(contClicks == 5){
        for(let i = 0; i < 5; i++){
            if(arregloFood[i] == arregloFoodWin[i]){
                contWin++;
            }
        }

        if(contWin == 5){
            //console.log(contWin);
            //console.log("Ganaste");
            confirmWinner();
            if(modeContraReloj && contWin == 5){
                document.querySelector(".minutos").style.display = "none";
                document.querySelector(".segundos").style.display = "none";
                console.log(document.querySelector(".puntos").innerHTML = "Ganaste");
                winContraReloj = true;
                console.log(contWin);
            }

            if(modoAmigos){
                modoAmigos = false;
            }
            restartWin();
            setTimeout(() => {
                document.querySelector(".time").classList.remove("showTime");    
            }, 2000);
        }else{
            //console.log(contWin);
            //console.log("Perdiste");
            confirmPositions();
            confirmWinner();
            restartLose();
            paso1 = false;
            paso2 = true;
            contWin = 0;
        }
    }else if(contClicks == 10 && paso2){
        //console.log("paso2");
        for(let i = 0; i < 5; i++){
            if(arregloFood[i] == arregloFoodWin[i]){
                contWin++;
            }
        }

        if(contWin == 5){
            //console.log(contWin);
            //console.log("Ganaste");
            confirmWinner();
            if(modeContraReloj && contWin == 5){
                document.querySelector(".minutos").style.display = "none";
                document.querySelector(".segundos").style.display = "none";
                document.querySelector(".puntos").innerHTML = "Ganaste";
                winContraReloj = true;
                clearInterval(intervalo);
            }

            if(modoAmigos){
                modoAmigos = false;
            }
            restartWin();
                        setTimeout(() => {
                document.querySelector(".time").classList.remove("showTime");    
            }, 2000);
        }else{
            //console.log(contWin);
            //console.log("Perdiste");
            confirmPositions();
            confirmWinner();
            restartLose();
            paso1 = false;
            paso2 = false;
            paso3 = true;
            contWin = 0;
        }
    }else if(contClicks == 15 && paso3){
        //console.log("paso3");
        for(let i = 0; i < 5; i++){
            if(arregloFood[i] == arregloFoodWin[i]){
                contWin++;
            }
        }

        if(contWin == 5){
            //console.log(contWin);
            //console.log("Ganaste");
            confirmWinner();
            if(modeContraReloj && contWin == 5){
                document.querySelector(".minutos").style.display = "none";
                document.querySelector(".segundos").style.display = "none";
                document.querySelector(".puntos").innerHTML = "Ganaste";
                winContraReloj = true;
            }
            restartWin();

            if(modoAmigos){
                modoAmigos = false;
            }
            setTimeout(() => {
                document.querySelector(".time").classList.remove("showTime");    
            }, 2000);
        }else{
            //console.log(contWin);
            //console.log("Perdiste");
            confirmPositions();
            confirmWinner();
            restartLose();
            paso1 = false;
            paso2 = false;
            paso3 = false;
            paso4 = true;
            contWin = 0;
        }
    }else if(contClicks == 20 && paso4){
        //console.log("paso4");
        for(let i = 0; i < 5; i++){
            if(arregloFood[i] == arregloFoodWin[i]){
                contWin++;
            }
        }

        if(contWin == 5){
            //console.log(contWin);
            //console.log("Ganaste");
            confirmWinner();
            if(modeContraReloj && contWin == 5){
                document.querySelector(".minutos").style.display = "none";
                document.querySelector(".segundos").style.display = "none";
                document.querySelector(".puntos").innerHTML = "Ganaste";
                winContraReloj = true;
            }
            restartWin();

            if(modoAmigos){
                modoAmigos = false;
            }
            setTimeout(() => {
                document.querySelector(".time").classList.remove("showTime");    
            }, 2000);
        }else{
            //console.log(contWin);
            //console.log("Perdiste");
            confirmPositions();
            confirmWinner();
            restartLose();
            paso1 = false;
            paso2 = false;
            paso3 = false;
            paso4 = false;
            paso5 = true;
            contWin = 0;
        }
    }else if(contClicks == 25 && paso5){
        //console.log("paso5");
        for(let i = 0; i < 5; i++){
            if(arregloFood[i] == arregloFoodWin[i]){
                contWin++;
            }
        }

        if(contWin == 5){
            //console.log(contWin);
            //console.log("Ganaste");
            confirmWinner();
            if(modeContraReloj && contWin == 5){
                document.querySelector(".minutos").style.display = "none";
                document.querySelector(".segundos").style.display = "none";
                document.querySelector(".puntos").innerHTML = "Ganaste";
                winContraReloj = true;
            }
            restartWin();

            if(modoAmigos){
                modoAmigos = false;
            }
            setTimeout(() => {
                document.querySelector(".time").classList.remove("showTime");    
            }, 2000);
        }else{
            //console.log(contWin);
            //console.log("Perdiste");
            confirmPositions();
            confirmWinner();
            restartLose();
            paso1 = false;
            paso2 = false;
            paso3 = false;
            paso4 = false;
            paso5 = false;
            paso6 = true;
            contWin = 0;
        }
    }else if(contClicks == 30 && paso6){
        //console.log("paso6");
        for(let i = 0; i < 5; i++){
            if(arregloFood[i] == arregloFoodWin[i]){
                contWin++;
            }
        }

        if(contWin == 5){
            //console.log(contWin);
            //console.log("Ganaste");
            confirmWinner();
            if(modeContraReloj && contWin == 5){
                document.querySelector(".minutos").style.display = "none";
                document.querySelector(".segundos").style.display = "none";
                document.querySelector(".puntos").innerHTML = "Ganaste";
                winContraReloj = true;
            }
            restartWin();

            if(modoAmigos){
                modoAmigos = false;
            }
            setTimeout(() => {
                document.querySelector(".time").classList.remove("showTime");    
            }, 2000);
        }else{
            //console.log(contWin);
            //console.log("Perdiste");
            confirmPositions();
            confirmWinner();
            restartLose();
            paso1 = false;
            paso2 = false;
            paso3 = false;
            paso4 = false;
            paso5 = false;
            paso6 = false;
            contWin = 0;

            for(let i = 25; i < 30; i++){
                dle.item(i).style.backgroundColor = "tomato";
            }
            if(modeContraReloj && contWin < 5 && segundo == 0){
                document.querySelector(".minutos").style.display = "none";
                document.querySelector(".segundos").style.display = "none";
                document.querySelector(".puntos").innerHTML = "Perdiste";
                document.querySelector(".time").classList.remove("showTime");
            }
            restartWin();
        }
    }
});

/*Eventos settings */
let cont = 0;

document.querySelector(".settings").addEventListener("click", () =>{
    console.log("1");
    document.querySelector(".containerSettings").classList.toggle("showContainerSettings");
    document.querySelector(".containerModes").classList.remove("showContainerModes");
    /*if(document.querySelector(".containerModes").style.display == "flex"){
        document.querySelector(".containerModes").style.display = "none";
    }*/
    cont++;
});

document.querySelector(".backSettings").addEventListener("click", () =>{
    if(cont % 2 != 0){
        document.querySelector(".containerSettings").classList.remove("showContainerSettings");
        cont++;
    }
});


/*Mode Dark */

let darkModeOn = false;

function darkMode(){
    document.querySelector(".containerAll").style.backgroundColor = "#13141c";
    document.querySelector(".container").style.backgroundColor = "#13141c";
    document.querySelector(".settings").style.color = "#fff";
    document.querySelector(".mode").style.color = "#fff";
    document.querySelector(".foodle").style.color = "#fff";
    document.querySelector(".body").style.backgroundColor = "#13141c";
    document.querySelector(".backSettings").style.backgroundColor = "#313448";
    document.querySelector(".containerSettings").style.backgroundColor = "#13141c";
    document.querySelector(".backSettings").style.color = "#fff";
    document.querySelector(".back").style.color = "#fff";
    document.querySelector(".txtModeDark").style.color = "#fff";
    document.querySelector(".containerModes").style.backgroundColor = "#13141c";
    document.querySelector(".backModes").style.backgroundColor = "#313448";
    document.querySelector(".backModes").style.color = "#fff";
    document.querySelector(".backmode").style.color = "#fff";
    for(let i = 0; i < document.querySelectorAll(".lblPlayGame").length;i++){
        document.querySelectorAll(".lblPlayGame")[i].style.color = "#fff";
    }
    for(let i = 0; i < document.querySelectorAll(".playGame").length;i++){
        document.querySelectorAll(".playGame")[i].style.color = "#fff";
    }
    document.querySelector(".txtSpanMode").style.color = "#fff";
    document.querySelector(".spanModeGame").style.borderColor = "#fff";
    document.querySelector(".segundos").style.color = "#fff";
    document.querySelector(".minutos").style.color = "#fff";
    document.querySelector(".puntos").style.color = "#fff";

    /*if(darkModeOn){
        document.querySelector(".back").addEventListener("mouseover", () =>{
            document.querySelector(".back").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".back").addEventListener("mouseout", () =>{
            document.querySelector(".back").style.color = "#fff";
        });
    }*/
  

    for(let i = 0; i < dle.length; i++){
        dle.item(i).style.borderColor = "#414458";
    }


}

function darkModeOff(){
    document.querySelector(".containerAll").style.backgroundColor = "#fff";
    document.querySelector(".container").style.backgroundColor = "#fff";
    document.querySelector(".settings").style.color = "#0c0c0c";
    document.querySelector(".mode").style.color = "#0c0c0c";
    document.querySelector(".foodle").style.color = "#0c0c0c";
    document.querySelector(".body").style.backgroundColor = "#fff";
    document.querySelector(".backSettings").style.backgroundColor = "#fff";
    document.querySelector(".containerSettings").style.backgroundColor = "#fff";
    document.querySelector(".backSettings").style.color = "#0c0c0c";
    document.querySelector(".back").style.color = "#0c0c0c";
    document.querySelector(".txtModeDark").style.color = "#0c0c0c";
    document.querySelector(".containerModes").style.backgroundColor = "#fff";
    document.querySelector(".backModes").style.backgroundColor = "#fff";
    document.querySelector(".backModes").style.color = "#0c0c0c";
    document.querySelector(".backmode").style.color = "#0c0c0c";
    for(let i = 0; i < document.querySelectorAll(".lblPlayGame").length;i++){
        document.querySelectorAll(".lblPlayGame")[i].style.color = "#0c0c0c";
    }
    for(let i = 0; i < document.querySelectorAll(".playGame").length;i++){
        document.querySelectorAll(".playGame")[i].style.color = "#0c0c0c";
    }
    document.querySelector(".txtSpanMode").style.color = "#fff";
    document.querySelector(".spanModeGame").style.borderColor = "#0c0c0c";
    document.querySelector(".segundos").style.color = "#0c0c0c";
    document.querySelector(".minutos").style.color = "#0c0c0c";
    document.querySelector(".puntos").style.color = "#0c0c0c";

    /*if(!darkModeOn){
        document.querySelector(".back").addEventListener("mouseover", () =>{
            document.querySelector(".back").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".back").addEventListener("mouseout", () =>{
            document.querySelector(".back").style.color = "#0c0c0c";
        });

    }*/

    for(let i = 0; i < dle.length; i++){
        dle.item(i).style.borderColor = "#dee1e9";
    }
}


document.getElementById("toggle").addEventListener("change", () =>{
    if(document.getElementById("toggle").checked){
        darkMode();
        document.querySelector(".back").addEventListener("mouseover", () =>{
            document.querySelector(".back").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".back").addEventListener("mouseout", () =>{
            document.querySelector(".back").style.color = "#fff";
        });

        document.querySelector(".backmode").addEventListener("mouseover", () =>{
            document.querySelector(".backmode").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".backmode").addEventListener("mouseout", () =>{
            document.querySelector(".backmode").style.color = "#fff";
        });

        document.querySelector(".settings").addEventListener("mouseover", () =>{
            document.querySelector(".settings").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".settings").addEventListener("mouseout", () =>{
            document.querySelector(".settings").style.color = "#fff";
        });

        document.querySelector(".mode").addEventListener("mouseover", () =>{
            document.querySelector(".mode").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".mode").addEventListener("mouseout", () =>{
            document.querySelector(".mode").style.color = "#fff";
        });
    }else{
        darkModeOff();
        document.querySelector(".back").addEventListener("mouseover", () =>{
            document.querySelector(".back").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".back").addEventListener("mouseout", () =>{
            document.querySelector(".back").style.color = "#0c0c0c";
        });

        document.querySelector(".backmode").addEventListener("mouseover", () =>{
            document.querySelector(".backmode").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".backmode").addEventListener("mouseout", () =>{
            document.querySelector(".backmode").style.color = "#0c0c0c";
        });

        document.querySelector(".settings").addEventListener("mouseover", () =>{
            document.querySelector(".settings").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".settings").addEventListener("mouseout", () =>{
            document.querySelector(".settings").style.color = "#0c0c0c";
        });

        document.querySelector(".mode").addEventListener("mouseover", () =>{
            document.querySelector(".mode").style.color = "rgb(124, 255, 124)";
        });
    
        document.querySelector(".mode").addEventListener("mouseout", () =>{
            document.querySelector(".mode").style.color = "#0c0c0c";
        });

    }
});


/*Eventos mode*/
let contMode = 0;
let btnPlayGameMode = document.querySelectorAll(".playGame");

document.querySelector(".mode").addEventListener("click", () =>{
    document.querySelector(".containerModes").classList.toggle("showContainerModes");
    document.querySelector(".containerSettings").classList.remove("showContainerSettings");

    contMode++;
});

btnPlayGameMode.item(0).addEventListener("click", () =>{
    document.querySelector(".spanModeGame").classList.remove("showSpanModeGame2");
    document.querySelector(".spanModeGame").classList.toggle("showSpanModeGame");
});

document.querySelector(".exitGame").addEventListener("click", () =>{
    document.querySelector(".spanModeGame").classList.remove("showSpanModeGame");
});


document.querySelector(".backModes").addEventListener("click", () =>{
    if(contMode % 2 != 0){
        document.querySelector(".containerModes").classList.toggle("showContainerModes");
        contMode++;
    }
});


let botonesDleMode = document.querySelectorAll(".btnDleMode");
let botonRemoveMode = document.querySelector(".btnDleModeRemove");
let botonConfirmMode = document.querySelector(".btnDleModeConfirm");
let contBotonesMode = 0;

let arregloFoodMode = [5];

for(let i = 0; i < botonesDleMode.length; i++){
        botonesDleMode.item(i).addEventListener("click", () =>{
            if(contBotonesMode < 5){
            botonesDleMode.item(i).style.backgroundColor = "lime";
            //arregloFoodMode.push(i);
            arregloFoodMode[contBotonesMode] = i;
            contBotonesMode++;
            console.log(arregloFoodMode);
            }
        });
}


botonRemoveMode.addEventListener("click", () =>{
        if(contBotonesMode > 0){
            arregloFoodMode.splice(0,arregloFoodMode.length);
            contBotonesMode = 0;
            console.log(arregloFoodMode);
            for(let i = 0; i < botonesDleMode.length; i++){
                botonesDleMode.item(i).style.backgroundColor = "rgb(211, 255, 255)";
            }
        }
});

let modoAmigos = false;

botonConfirmMode.addEventListener("click", () =>{
    if(contBotonesMode == 5 && !modeContraReloj){
       
        modoAmigos = true;
        src = 0;
        urlSinDominio =0;
        contClicks = 0;
        contWin = 0;
    
        paso1 = false;
        paso2 = false;
        paso3 = false;
        paso4 = false;
        paso5 = false;
        paso6 = false;

        if(document.querySelector(".spanModeGame").style.display != "block"){
            document.querySelector(".spanModeGame").classList.remove("showSpanModeGame");
        }

        for(let i = 0; i < 5; i++){
            arregloFoodWin[i] = undefined;
            arregloFood[i] = undefined;
        }
    
        for(let i = 0; i < dle.length; i++){
            dle.item(i).src = "./img/nada2.png";
        }

        for(let i = 0; i < 30; i++){
            dle.item(i).style.backgroundColor = "transparent";
        }

        for(let i = 0; i < botonesDle.length; i++){
            botonesDle.item(i).style.backgroundColor = "rgb(211, 255, 255)";
        }

    paso1 = true;
    paso2 = false;
    paso3 = false;
    paso4 = false;
    paso5 = false;
    paso6 = false;

        for(let i = 0; i < arregloFoodWin.length;i++){
            arregloFoodWin.splice(0,arregloFoodWin.length);
        }
        for(let i = 0; i < arregloFoodMode.length; i++){
            arregloFoodWin[i] = arregloFoodMode[i];
        }
        document.querySelector(".containerModes").classList.remove("showContainerModes");
    }
    contMode--;
    console.log(arregloFoodMode);
    console.log(arregloFoodWin);

});



/*Mode Contra reloj */
let btnDificultad = document.querySelectorAll(".btnDificultad");

btnPlayGameMode.item(1).addEventListener("click", () =>{
        document.querySelector(".spanModeGame").classList.remove("showSpanModeGame");
        document.querySelector(".spanModeGame2").classList.toggle("showSpanModeGame2");
});

document.querySelector(".exitGame2").addEventListener("click", () =>{
    document.querySelector(".spanModeGame2").classList.remove("showSpanModeGame2");
});
btnDificultad.item(0).addEventListener("mouseover", () =>{
    btnDificultad.item(0).style.backgroundColor = "rgb(66, 255, 66)";
});
btnDificultad.item(0).addEventListener("mouseout", () =>{
    btnDificultad.item(0).style.backgroundColor = "rgb(211, 255, 255)";
});

btnDificultad.item(1).addEventListener("mouseover", () =>{
    btnDificultad.item(1).style.backgroundColor = "rgb(255, 255, 62)";
});
btnDificultad.item(1).addEventListener("mouseout", () =>{
    btnDificultad.item(1).style.backgroundColor = "rgb(211, 255, 255)";
});

btnDificultad.item(2).addEventListener("mouseover", () =>{
    btnDificultad.item(2).style.backgroundColor = "tomato";
});

btnDificultad.item(2).addEventListener("mouseout", () =>{
    btnDificultad.item(2).style.backgroundColor = "rgb(211, 255, 255)";
});

btnDificultad.item(3).addEventListener("mouseover", () =>{
    btnDificultad.item(3).style.backgroundColor = "#0c0c0c";
    btnDificultad.item(3).style.color = "#fff";
});

btnDificultad.item(3).addEventListener("mouseout", () =>{
    btnDificultad.item(3).style.backgroundColor = "rgb(211, 255, 255)";
    btnDificultad.item(3).style.color = "#0c0c0c";
});

let minutos = 0;
let segundos = 0;
let modeImposible = false;
function dificultadFacil(){
    document.querySelector(".time").classList.add("showTime");
    minutos = 3;
    segundos = 0;
    
    function contador() {
    
        if(minutos == 0 && segundos == 0){
            clearInterval(intervalo);
            if(!winContraReloj){
                document.querySelector(".minutos").style.display = "none";
                document.querySelector(".segundos").style.display = "none";
                document.querySelector(".puntos").innerHTML = "Perdiste";
                if(paso1){
                    for(let i = 0; i < 5; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso2){
                    for(let i = 0; i < 10; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso3){
                    for(let i = 0; i < 15; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso4){
                    for(let i = 0; i < 20; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso5){
                    for(let i = 0; i < 25; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso6){
                    for(let i = 0; i < 30; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
            }
                restartWin();
                setTimeout(() => {
                    document.querySelector(".time").classList.remove("showTime");
                }, 2000);
                modeContraReloj = false;
        }else{
            segundos--;
    
            if(segundos < 0){
                segundos = 59;
                minutos--;
            }
            
              // Mostrar el contador en la consola
            if(segundos > 9){
                document.querySelector(".minutos").innerHTML = minutos;
                document.querySelector(".segundos").innerHTML = segundos;    
            }else{
                document.querySelector(".minutos").innerHTML = minutos;
                document.querySelector(".segundos").innerHTML = "0"+segundos;    
            }
            }
        }
    
        
        // Iniciar el contador
        let intervalo = setInterval(contador, 1000); // La función 'contador' se ejecutará cada segundo (1000 milisegundos)
        
}

function dificultadNormal(){
    document.querySelector(".time").classList.add("showTime");
    minutos = 1;
    segundos = 30;
    
    function contador() {
    
        if(winContraReloj){
            clearInterval(intervalo);
        }
        if(minutos == 0 && segundos == 0){
            clearInterval(intervalo);
            if(!winContraReloj){
                document.querySelector(".minutos").style.display = "none";
                document.querySelector(".segundos").style.display = "none";
                document.querySelector(".puntos").innerHTML = "Perdiste";
                if(paso1){
                    for(let i = 0; i < 5; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso2){
                    for(let i = 0; i < 10; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso3){
                    for(let i = 0; i < 15; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso4){
                    for(let i = 0; i < 20; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso5){
                    for(let i = 0; i < 25; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
                if(paso6){
                    for(let i = 0; i < 30; i++){
                        dle.item(i).style.backgroundColor = "tomato";
                    }
                }
            }
                restartWin();
                setTimeout(() => {
                    document.querySelector(".time").classList.remove("showTime");
                }, 2000);
                modeContraReloj = false;
        }else{
            segundos--;
    
            if(segundos < 0){
                segundos = 59;
                minutos--;
            }
            
              // Mostrar el contador en la consola
            if(segundos > 9){
                document.querySelector(".minutos").innerHTML = minutos;
                document.querySelector(".segundos").innerHTML = segundos;    
            }else{
                document.querySelector(".minutos").innerHTML = minutos;
                document.querySelector(".segundos").innerHTML = "0"+segundos;    
            }
            }
            console.log("1");
        }
            
        // Iniciar el contador
        let intervalo = setInterval(contador, 1000); // La función 'contador' se ejecutará cada segundo (1000 milisegundos)
        
}

function dificultadDificil(){
    document.querySelector(".time").classList.add("showTime");
    minutos = 0;
    segundos = 30;
    
    function contador() {
    
        if(winContraReloj){
            clearInterval(intervalo);
        }

    if(minutos == 0 && segundos == 0){
        clearInterval(intervalo);
        if(!winContraReloj){
            document.querySelector(".minutos").style.display = "none";
            document.querySelector(".segundos").style.display = "none";
            document.querySelector(".puntos").innerHTML = "Perdiste";
            if(paso1){
                for(let i = 0; i < 5; i++){
                    dle.item(i).style.backgroundColor = "tomato";
                }
            }
            if(paso2){
                for(let i = 0; i < 10; i++){
                    dle.item(i).style.backgroundColor = "tomato";
                }
            }
            if(paso3){
                for(let i = 0; i < 15; i++){
                    dle.item(i).style.backgroundColor = "tomato";
                }
            }
            if(paso4){
                for(let i = 0; i < 20; i++){
                    dle.item(i).style.backgroundColor = "tomato";
                }
            }
            if(paso5){
                for(let i = 0; i < 25; i++){
                    dle.item(i).style.backgroundColor = "tomato";
                }
            }
            if(paso6){
                for(let i = 0; i < 30; i++){
                    dle.item(i).style.backgroundColor = "tomato";
                }
            }
        }
            restartWin();
            setTimeout(() => {
                document.querySelector(".time").classList.remove("showTime");
            }, 2000);
            modeContraReloj = false;
    }else{
        segundos--;

        if(segundos < 0){
            segundos = 59;
            minutos--;
        }
        
          // Mostrar el contador en la consola
        if(segundos > 9){
            document.querySelector(".minutos").innerHTML = minutos;
            document.querySelector(".segundos").innerHTML = segundos;    
        }else{
            document.querySelector(".minutos").innerHTML = minutos;
            document.querySelector(".segundos").innerHTML = "0"+segundos;    
        }
        }
        console.log("2");
    }

    winContraReloj = false;

    let intervalo = setInterval(contador, 1000); // La función 'contador' se ejecutará cada segundo (1000 milisegundos)
    
}

function dificultadImposible(){
    document.querySelector(".time").classList.add("showTime");
    minutos = 0;
    segundos = 15;
    modeImposible = true;

    function contador() {
    
        if(winContraReloj){
            clearInterval(intervalo);
        }

    if(minutos < 1 && segundos < 1){
        clearInterval(intervalo);
        if(!winContraReloj){
            document.querySelector(".minutos").style.display = "none";
            document.querySelector(".segundos").style.display = "none";
            document.querySelector(".puntos").innerHTML = "Perdiste";
            if(paso1){
                for(let i = 0; i < 5; i++){
                    dle.item(i).style.backgroundColor = "#0c0c0c";
                    for(let i = 0; i < dle.length;i++){
                    dle.item(i).src = "./img/nada2.png";
                    }
                }
            }
            if(paso2){
                for(let i = 0; i < 10; i++){
                    dle.item(i).style.backgroundColor = "#0c0c0c";
                    for(let i = 0; i < dle.length;i++){
                    dle.item(i).src = "./img/nada2.png";
                    }
                }
            }
            if(paso3){
                for(let i = 0; i < 15; i++){
                    dle.item(i).style.backgroundColor = "#0c0c0c";
                    for(let i = 0; i < dle.length;i++){
                    dle.item(i).src = "./img/nada2.png";
                    }
                }
            }
            if(paso4){
                for(let i = 0; i < 20; i++){
                    dle.item(i).style.backgroundColor = "#0c0c0c";
                    for(let i = 0; i < dle.length;i++){
                    dle.item(i).src = "./img/nada2.png";
                    }
                }
            }
            if(paso5){
                for(let i = 0; i < 25; i++){
                    dle.item(i).style.backgroundColor = "#0c0c0c";
                    for(let i = 0; i < dle.length;i++){
                    dle.item(i).src = "./img/nada2.png";
                    }
                }
            }
            if(paso6){
                for(let i = 0; i < 30; i++){
                    dle.item(i).style.backgroundColor = "#0c0c0c";
                    for(let i = 0; i < dle.length;i++){
                    dle.item(i).src = "./img/nada2.png";
                    }
                }
            }
        }
            restartWin();
            setTimeout(() => {
                document.querySelector(".time").classList.remove("showTime");
            }, 2000);
            modeContraReloj = false;
    }else{
        segundos--;


        if(segundos < 0){
            segundos = 59;
            minutos--;
        }
        
          // Mostrar el contador en la consola
        if(segundos > 9){
            document.querySelector(".minutos").innerHTML = minutos;
            document.querySelector(".segundos").innerHTML = segundos;    
        }else{
            document.querySelector(".minutos").innerHTML = minutos;
            document.querySelector(".segundos").innerHTML = "0"+segundos;    
        }
        }
        console.log("2");
    }

    winContraReloj = false;

    let intervalo = setInterval(contador, 500); // La función 'contador' se ejecutará cada segundo (1000 milisegundos)
    
}


function restartMode(){
            
    src = 0;
    urlSinDominio =0;
    contClicks = 0;
    contWin = 0;

    paso1 = false;
    paso2 = false;
    paso3 = false;
    paso4 = false;
    paso5 = false;
    paso6 = false;

    if(document.querySelector(".spanModeGame").style.display != "block"){
        document.querySelector(".spanModeGame").classList.remove("showSpanModeGame");
    }

    for(let i = 0; i < 5; i++){
        arregloFoodWin[i] = undefined;
        arregloFood[i] = undefined;
    }

    for(let i = 0; i < dle.length; i++){
        dle.item(i).src = "./img/nada2.png";
    }

    for(let i = 0; i < 30; i++){
        dle.item(i).style.backgroundColor = "transparent";
    }

    for(let i = 0; i < botonesDle.length; i++){
        botonesDle.item(i).style.backgroundColor = "rgb(211, 255, 255)";
    }

    paso1 = true;
    paso2 = false;
    paso3 = false;
    paso4 = false;
    paso5 = false;
    paso6 = false;

    for(let i = 0; i < arregloFoodWin.length;i++){
        arregloFoodWin.splice(0,arregloFoodWin.length);
    }

    for(let i = 0; i < 5; i++){
        arregloFoodWin[i] = Math.floor(Math.random()*10);
        console.log(arregloFoodWin[i]);
    }

    document.querySelector(".minutos").style.display = "block";
    document.querySelector(".segundos").style.display = "block";
    document.querySelector(".puntos").innerHTML = ":";
}


for(let i = 0; i < btnDificultad.length;i++){

    btnDificultad.item(i).addEventListener("click", () =>{
        document.querySelector(".containerModes").classList.remove("showContainerModes");
        if(i == 0 && !modoAmigos){
        document.querySelector(".minutos").innerHTML ="3";
        document.querySelector(".segundos").innerHTML ="00";
            restartMode();
            dificultadFacil();
            modeContraReloj = true;
        }else if(i == 1 && !modoAmigos){
        document.querySelector(".minutos").innerHTML ="1";
        document.querySelector(".segundos").innerHTML ="30";
            restartMode();
            dificultadNormal();
            modeContraReloj = true;
        }else if(i == 2 && !modoAmigos){
        document.querySelector(".minutos").innerHTML ="0";
        document.querySelector(".segundos").innerHTML ="30";
            restartMode();
            dificultadDificil();
            modeContraReloj = true;
        }
        else if(i == 3 && !modoAmigos){
        document.querySelector(".minutos").innerHTML ="0";
        document.querySelector(".segundos").innerHTML ="15";
            restartMode();
            dificultadImposible();
            modeContraReloj = true;
        }else if(!modoAmigos){

        }
    });
}