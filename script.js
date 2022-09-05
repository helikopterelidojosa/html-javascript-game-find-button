function startGameFunction() {
  document.getElementById("btn-start").style.display = "none";

  let howManyButtons = 600;

  let theRealOneButton = Math.floor(Math.random() * howManyButtons);

  for (let i = 0; i < howManyButtons; i++) {
    if (i == theRealOneButton) {
      document.getElementById("demo").innerHTML +=
        '<button id="real-btn">Find me</button>';
    } else {
      document.getElementById("demo").innerHTML +=
        '<button>Find me</button>';
    }
  }

  var x = document.getElementById("real-btn");
  x.addEventListener("mouseover", youAreWinner);

  function youAreWinner() {
    document.getElementById("real-btn").style.backgroundColor = "blue";
    document.getElementById("winner-image").style.display = "flex";
  }
}
