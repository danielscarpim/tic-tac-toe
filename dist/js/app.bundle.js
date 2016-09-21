webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	__webpack_require__(4);
	
	angular.module('game', ['board']);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _boardController = __webpack_require__(2);
	
	var _boardController2 = _interopRequireDefault(_boardController);
	
	var _board = __webpack_require__(3);
	
	var _board2 = _interopRequireDefault(_board);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('board', []).controller('boardController', _boardController2.default).component('board', {
	  controller: _boardController2.default,
	  contollerAs: 'board',
	  templateUrl: _board2.default
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function boardController($scope) {
	  var vm = this;
	  vm.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	
	  vm.players = [{ name: "Player 1" }, { name: "Player 2" }];
	
	  vm.current = 0;
	
	  vm.winner = {};
	
	  vm.play = function (index) {
	
	    if (!vm.winner.name) {
	      if (vm.board[index] === 0) {
	        vm.board[index] = vm.current + 1;
	        vm.check();
	      }
	    }
	  };
	
	  vm.switchPlayer = function () {
	    if (vm.current === 0) {
	      vm.current = 1;
	    } else {
	      vm.current = 0;
	    }
	  };
	
	  vm.check = function () {
	    var currentPlayer = vm.current + 1;
	
	    if (
	    //rows
	    vm.board[0] === currentPlayer && vm.board[1] === currentPlayer && vm.board[2] === currentPlayer || vm.board[3] === currentPlayer && vm.board[4] === currentPlayer && vm.board[5] === currentPlayer || vm.board[6] === currentPlayer && vm.board[7] === currentPlayer && vm.board[8] === currentPlayer ||
	    //columns
	    vm.board[0] === currentPlayer && vm.board[3] === currentPlayer && vm.board[6] === currentPlayer || vm.board[1] === currentPlayer && vm.board[4] === currentPlayer && vm.board[7] === currentPlayer || vm.board[3] === currentPlayer && vm.board[6] === currentPlayer && vm.board[8] === currentPlayer ||
	    //diagonal
	    vm.board[0] === currentPlayer && vm.board[4] === currentPlayer && vm.board[8] === currentPlayer || vm.board[2] === currentPlayer && vm.board[4] === currentPlayer && vm.board[6] === currentPlayer) {
	      console.log('p' + currentPlayer + ' wins');
	      vm.winner = vm.players[vm.current];
	    } else {
	      vm.switchPlayer();
	    }
	  };
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	var path = '/Users/danielscarpim/Desktop/test/tic-tac-toe/src/components/board/board.html';
	var html = "<div class=\"container\">\n    <div class=\"player\">\n        <h2 class=\"player{{$ctrl.current+1}}\">{{$ctrl.players[$ctrl.current].name}}</h2>\n    </div>\n\n    <div class=\"board player{{$ctrl.current+1}}\">\n        <div\n            ng-repeat=\"cell in $ctrl.board track by $index\"\n            class=\"cell player{{cell}}\"\n            ng-click=\"$ctrl.play($index)\">\n            <i ng-if=\"cell===1\" class=\"icon ion-ios-circle-outline\"></i>\n            <i ng-if=\"cell===2\" class=\"icon ion-android-close\"></i>\n        </div>\n    </div>\n\n    <div ng-if=\"$ctrl.winner.name\" class=\"winner\">\n        {{$ctrl.winner.name}} wins!\n    </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.bundle.js.map