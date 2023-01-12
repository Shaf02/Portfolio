function random()
{
  var n = Math.random();
  n = Math.floor(n*6) +1;
  return n;
}


  var player1 = random();
  var newImage = "images/dice" + player1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src",newImage);
  var player2 = random();
  newImage = "images/dice" + player2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src",newImage);
  if(player1>player2)
  document.querySelector("h1").textContent = "Player 1 Wins!";
  else
  if (player1<player2)
  document.querySelector("h1").textContent = "Player 2 Wins!";
  else
  document.querySelector("h1").textContent = "It is a Draw!";
