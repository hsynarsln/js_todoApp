var input = document.querySelector('#input');
var addBtn = document.querySelector('#addBtn');
var todoList = document.querySelector('ul');

// console.log(input);
// console.log(addBtn);
// console.log(todoList);

var addTodo = function (todoEntered) {
  var listItem = document.createElement('li');
  var checkBox = document.createElement('input');
  var span = document.createElement('span');
  var removeButton = document.createElement('button');

  span.innerText = todoEntered;
  checkBox.type = 'checkbox';

  checkBox.addEventListener('change', function () {
    span.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
  });

  removeButton.className = 'removeMe';
  removeButton.innerHTML = ' DONE!';
  removeButton.setAttribute('onclick', 'removeMe(this);');

  listItem.appendChild(checkBox);
  listItem.appendChild(span);
  listItem.appendChild(removeButton);

  return listItem;
};

addBtn.addEventListener('click', function () {
  var todoItem = addTodo(input.value);

  todoList.appendChild(todoItem);

  input.value = '';
});

function removeMe(item) {
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}
