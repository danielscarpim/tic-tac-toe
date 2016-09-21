"use strict";

import boardController from './boardController.js';
import template from 'ngtemplate!html!./board.html';

angular
  .module('board',[])
  .controller('boardController',boardController)
  .component('board',{
    controller: boardController,
    contollerAs: 'board',
    templateUrl: template
  })
