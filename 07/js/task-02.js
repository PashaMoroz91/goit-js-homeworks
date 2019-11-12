const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsItem = document.querySelector('#ingredients');

ingredients.map(item => {
  const itemLi = document.createElement('li');
  itemLi.insertAdjacentHTML('afterbegin', item);
  ingredientsItem.appendChild(itemLi);
});

console.log(ingredientsItem);
