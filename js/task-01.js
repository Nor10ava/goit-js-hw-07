const categoriesListRef = document.querySelector('#categories')
const categoriesChildren = categoriesListRef.childElementCount;
console.log(`В списке ${categoriesChildren} категории.`);
[...categoriesListRef.children].forEach(item => {
    console.log(`Категория:${item.firstElementChild.textContent}`);
    console.log(`Количество элементов:${item.lastElementChild.children.length}`);
})