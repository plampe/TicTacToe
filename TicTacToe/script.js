let board=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //initial board
let win=[
  [0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14],[15,16,17],
  [0,3,6],[1,4,7],[2,5,8],[9,12,15],[10,13,16],[11,14,17],[3,6,9],[4,7,10],[5,8,11],[6,9,12],[7,10,13],[8,11,14],
  [0,4,8],[3,7,11],[6,10,14],[9,13,17],[2,4,6],[5,7,9],[8,10,12],[11,13,15]
]; //winning positions

while (!player1) {
  var player1 = prompt('Player 1: Write your color: ');
}

while (!player2) {
  var player2= prompt('Player 2: Write your color: ');
}
setTimeout(function(){ colorCheck(player1,player2); },500);



let turn=0;
function checkWin(val)
{
  for(let rwin of win)
  {
    if(board[rwin[0]]==val&&board[rwin[1]]==val&&board[rwin[2]]==val)
    return true;
  }
  return false;
}

let divCells=document.getElementsByClassName('Cell');
for(let cell of divCells)
{
  cell.onclick=puttSymbol;
}



function puttSymbol()
{
  //alert(board);
  if(turn%2==0&&board[Number(this.title)]==0)
  {
    board[Number(this.title)]=1;

    if(checkWin(1))
    {
      //alert("Winner X");
      //restartGame(1);
      setTimeout(function(){ restartGame(1); },500);
    }
    //alert("X Clicked...");
    //alert();

    //this.style.backgroundImage="url('X.jpg')";
    var x =document.getElementById(this.title);
    x.classList.add('classX');
    this.style.backgroundColor=player1;
    turn++;
  }
  else if(board[Number(this.title)]==0){
    board[Number(this.title)]=2;

    if(checkWin(2))
    {
      //alert("Winner 0");
      setTimeout(function(){ restartGame(2); },500);
      //restartGame(2);
    }
    //alert("O Clicked...");
    
    var x =document.getElementById(this.title);
    x.classList.add('classO');
    this.style.backgroundColor=player2;
    turn++;
  }
  if(turn==18&&checkWin(1)==false&&checkWin(2)==false)
  {
    //alert("its a draw...");
    setTimeout(function(){ restartGame(0); },500);
    //restartGame(0);
  }
}


document.getElementById('restart').onclick=reloadGame;

function reloadGame()
{
  location.reload();
}

function restartGame(winner)
{
  //alert(winner);
  document.getElementById('Board').style.display="none";
  document.getElementById('GameOver').style.display="block";
  if(winner==1)
  {
    document.getElementById('txtGameOver').innerHTML="Congratulations! Player 1 (X) Wins!";
  }
  else if(winner==2)
  {
    document.getElementById('txtGameOver').innerHTML="Congratulations! Player 2 (O) Wins!";
  }
  else{
    document.getElementById('txtGameOver').innerHTML="It was a draw!";
  }
}

function colorCheck(player1,player2)
{
  if(player1==player2)
  {
    document.getElementById('Board').style.display="none";
    document.getElementById('GameOver').style.display="block";
    document.getElementById('txtGameOver').innerHTML="Cannot be the same color";
  }else{
    document.getElementById('player1').innerText="Player 1: "+player1;
    document.getElementById('player2').innerText="Player 2: "+player2;
    document.getElementById('player1').style.color=player1;
    document.getElementById('player2').style.color=player2;
  }
}
