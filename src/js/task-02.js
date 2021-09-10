const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainer = document.querySelector('#ingredients')

const elements = ingredients.map(option => {
  const listEl = document.createElement('li');
  listEl.textContent = option;
  
  return listEl;
})

ingredientsContainer.append(...elements);
