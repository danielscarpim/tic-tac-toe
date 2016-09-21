module.exports = function boardController($scope){
  var vm = this;
  vm.board = [0,0,0,
              0,0,0,
              0,0,0];

  vm.players = [
                  {name:"Player 1"},
                  {name:"Player 2"}
                ];

  vm.current = 0;

  vm.winner = {};

  vm.play = function(index){

    if(!vm.winner.name){
      if(vm.board[index] === 0){
        vm.board[index] = vm.current+1;
        vm.check();
      }
    }
  }

  vm.switchPlayer = function(){
    if(vm.current===0){
      vm.current=1;
    } else {
      vm.current=0;
    }
  }

  vm.check = function(){
    var currentPlayer = vm.current+1;

    if(
      //rows
      (vm.board[0]===currentPlayer&&vm.board[1]===currentPlayer&&vm.board[2]===currentPlayer) ||
      (vm.board[3]===currentPlayer&&vm.board[4]===currentPlayer&&vm.board[5]===currentPlayer) ||
      (vm.board[6]===currentPlayer&&vm.board[7]===currentPlayer&&vm.board[8]===currentPlayer) ||
      //columns
      (vm.board[0]===currentPlayer&&vm.board[3]===currentPlayer&&vm.board[6]===currentPlayer) ||
      (vm.board[1]===currentPlayer&&vm.board[4]===currentPlayer&&vm.board[7]===currentPlayer) ||
      (vm.board[3]===currentPlayer&&vm.board[6]===currentPlayer&&vm.board[8]===currentPlayer) ||
      //diagonal
      (vm.board[0]===currentPlayer&&vm.board[4]===currentPlayer&&vm.board[8]===currentPlayer) ||
      (vm.board[2]===currentPlayer&&vm.board[4]===currentPlayer&&vm.board[6]===currentPlayer)
    ){
      console.log('p'+currentPlayer+' wins');
      vm.winner = vm.players[vm.current];
    } else {
      vm.switchPlayer();
    }
  }
}
