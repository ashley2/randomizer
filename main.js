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

      //statement for if a name repeats
      //statement for if list gets to 10 than make a new list next to it
    });
    var resetInput = document.getElementById("names")
    resetInput.value = '';


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

    document.getElementById("namePicked").innerHTML = nameArr[0];

  }

  // clearButton.onclick = function clearPage () {
  //   var listContainer = document.getElementById('listContainer');
  //   var page = document.getElementById('inputContiner');


  //   listContainer.page.removeChild(listContainer);
  //   listContainer.page.appendChild(listContainer);
  }
// }










