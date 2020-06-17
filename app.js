// ********* SET VARIABLES: gather all squares into array
let cells = document.querySelectorAll('.row div'),
    clickCount = 0;

// ********* MAIN EVENT: listen to all squares for clicks. will check state of game to determine what to do next
cells.forEach(cell => {
  cell.addEventListener('click', clickedCell);
});

// ******* FUNCTION: to check squares
function clickedCell(e) {
    // console.log('clickCount: ' + clickCount);  
    let x = "X",
        o = 'O';

    // if message has content, reset the board.
    if( elSelector('.message').length > 0 ){ 
      resetToStart();
    } else if(clickCount >= 9){ // if it's 9th click, clear board, or else carry on
      resetToStart();
    } else {
      if( e.target.classList.contains('clicked') == false){// if cell is empty, add X or O
        clickCount++; // increase click count
        e.target.classList.add('clicked');

        // check if even or odd click, add X or O
        if(clickCount % 2 == true){ // oddNumber % 2 will return true for odd, so it is odd number
          e.target.innerHTML = "X";
        } else if(clickCount % 2 == false){ // evenNumber % 2 will return false for odd, so it is an even number
          e.target.innerHTML = "O";
        }
        // check if we have a winner
        checkWinningCombo(x);
        checkWinningCombo(o);
      }
    }
}

// ******** FUNCTION: check cells for a winner
function checkWinningCombo(content){

  let checkBoardClass = [
    ['.one', '.two', '.three'],
    ['.four', '.five', '.six'],
    ['.seven', '.eight', '.nine'],
    ['.one', '.four', '.seven'],
    ['.two', '.five', '.eight'],
    ['.three', '.six', '.nine'],
    ['.one', '.five', '.nine'],
    ['.three', '.five', '.seven']
  ];

  for (let i = 0; i < checkBoardClass.length; i++) 
    [k,l,m] = [checkBoardClass[i][0],checkBoardClass[i][1],checkBoardClass[i][2]];
    
    // if winner!
    if( elSelector(k) == content  && elSelector(l) == content && elSelector(m) == content ){
      let msg = "We have a winner";
      document.querySelector('.message').innerHTML = msg;
      };
  }
  


// ******* FUNCTION: reset / zero-set the game
function resetToStart(){
  cells.forEach(cell => {
    cell.innerHTML = "";
  });
  clickCount = 0;
  document.querySelector('.message').innerHTML = "";
  document.querySelector('#board');
  document.querySelector('.inner-board');
  let allDiv = document.querySelectorAll('.row div');
  allDiv.forEach(element => {
    element.classList.remove('clicked');
  });
  console.log('Game has been reset!');
}

// select element and check innerHTML
function elSelector(e){
  return document.querySelector(e).innerHTML;
}