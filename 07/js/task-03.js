const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector("#gallery");
function createGalery() {
  return images.map(image => {
    const createLi = document.createElement("li");
    const createImg = document.createElement("img");
    createImg.setAttribute("src", image.url);
    createImg.setAttribute("alt", image.alt);
    createLi.appendChild(createImg);
    return createLi;
  });
}
list.append(...createGalery());

// const gallery = document.querySelector('#gallery');
// images.map(item => {
//   const itemLi = document.createElement('li');
//   itemLi.insertAdjacentHTML(
//     'afterbegin',
//     `<img src='${item.url}' alt='${item.alt}'>`,
//   );
//   gallery.appendChild(itemLi);
// });

console.log(gallery);
