









function startGameFunction(){
   
    document.getElementById("btn-start").style.display = "none"

    let cikBusPogas = 600;

    let kuraBusIstaPoga = Math.floor(Math.random()*cikBusPogas);


    for (let i = 0; i < cikBusPogas; i++) {
        if(i == kuraBusIstaPoga){
            document.getElementById("demo").innerHTML += '<button id="ista-poga">Find me</button>';
        } else {
            
            document.getElementById("demo").innerHTML += '<button id="go">Find me</button>';
        }
    }


var x = document.getElementById("ista-poga");
x.addEventListener("mouseover", youAreWinner);

function youAreWinner() {
    document.getElementById("ista-poga").style.backgroundColor = "blue";
    document.getElementById("winner-image").style.display = "flex";
    // document.getElementById("demo").style.display = "none";
}


}



