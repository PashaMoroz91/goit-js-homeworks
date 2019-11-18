const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsItem = document.querySelector('#ingredients');

const list = document.querySelector("#ingredients");

function createList() {
  return ingredients.map(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    return li;
  });
}

list.append(...createList());
// function createList(){
//     return ingredients.map(ing)
// }
// ingredients.map(item => {
//   const itemLi = document.createElement('li');
//   itemLi.insertAdjacentHTML('afterbegin', item);
//   ingredientsItem.appendChild(itemLi);
// });

console.log(ingredientsItem);
