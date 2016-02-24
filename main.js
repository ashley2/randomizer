'use strict';


document.addEventListener('DOMContentLoaded', init);
function init() {


  var nameButton = document.getElementById('addName');
  var inputValue = document.getElementById('names');
  var list = document.getElementById('listContainer');

  var nameArr = [];

  nameButton.onclick = function addName(){

    var listItem = document.createElement('li');
    var inputVal = inputValue.value;
    var list = document.getElementById('list');

    var names = inputVal.split(',');
    
    names.forEach(function(name){

      listItem.textContent = names;
      list.appendChild(listItem);
      
      console.log(name);
      console.log(nameArr);

      nameArr.push(inputVal);
    });



  };

}










