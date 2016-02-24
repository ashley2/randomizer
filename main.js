'use strict';


document.addEventListener('DOMContentLoaded', init);
function init() {


  var nameButton = document.getElementById('addName');
  var inputValue = document.getElementById('names');
  var list = document.getElementById('list');


  var nameArr = [];

  nameButton.onclick = function addName(){

    var inputVal = inputValue.value;

    var names = inputVal.split(',');
    
    names.forEach(function(name){

      var listItem = document.createElement('li');
      listItem.textContent = name;
      list.appendChild(listItem);

      nameArr.push(name);
      console.log(name);
      console.log(nameArr);

    });

  };

  var randomButton = document.getElementById('randomize');

  randomButton.onclick = function getRandom() {

    console.log('click');


    function shuffle(nameArr) {
      var j, x, i;
      for (i = nameArr.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = nameArr[i - 1];
        nameArr[i - 1] = nameArr[j];
        nameArr[j] = x;
      }
      return nameArr;
    }
    shuffle(nameArr);
    console.log(nameArr);
    document.getElementById("namePicked").innerHTML = nameArr[0];

  }
}










