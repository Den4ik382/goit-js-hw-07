console.log("Number of categoties:", categories.children.length);
const titleEl = document.querySelectorAll(`li > h2`);
const listEl = document.querySelectorAll(`.item > ul`);
titleEl.forEach((element, index) => {
  console.log("Category:", element.innerHTML);
  console.log("Elements:", listEl[index].children.length);
});
