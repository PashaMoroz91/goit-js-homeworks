'use strict';

const categories = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log(`В списке ${categoriesItems.length} категории`);

categoriesItems.forEach(item =>
  console.log(`Категория: ${item.children[0].textContent}
    Количество элементов: ${item.children[1].children.length}`),
);
