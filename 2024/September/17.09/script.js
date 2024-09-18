const content = document.getElementById(`content`);
const text = document.querySelectorAll(`.text`);
const listItem = document.querySelectorAll(`li`);
const addItem = document.getElementById(`buttonAdd`);
const removeFirstItem = document.getElementById(`buttonRemoveFirst`);
const removeLastItem = document.getElementById(`buttonRemoveLast`);
const removeSelectedItem = document.getElementById(`buttonRemoveSelected`);
const list = document.getElementById(`newText`);

content.style.backgroundColor = `lightblue`;
for (const atext of text) {
  atext.style.color = `red`;
}

for (const li of listItem) {
  console.log(li.textContent);
}

const changeBtnColor = (evt) => {
  for (li of listItem) {
    if (li.style.backgroundColor !== `yellow`) {
      li.style.backgroundColor = "yellow";
    } else {
      li.style.backgroundColor = `transparent`;
    }
  }
};
button.addEventListener("click", changeBtnColor);

const addOnPress = () => {
  const addedLi = document.createElement("li");
  addedLi.textContent = "New Text";

  list.appendChild(addedLi);

  // Add click event to toggle 'selected' class and make text bold
  addedLi.addEventListener("click", () => {
    const getAllLi = document.querySelectorAll(`li`);
    getAllLi.forEach((li) => li.classList.remove("selected"));

    addedLi.classList.toggle("selected");
  });
};

addItem.addEventListener("click", addOnPress);





const RemoveFirst = () => {
  list.removeChild(list.firstChild);
};

removeFirstItem.addEventListener("click", RemoveFirst);




const RemoveLast = () => {
  list.removeChild(list.lastChildChild);
};
removeLastItem.addEventListener("click", RemoveLast);





const removeSelected = () => {
  const selectedItems = document.querySelectorAll("li.selected");
  selectedItems.forEach((item) => list.removeChild(item));
};
removeSelectedItem.addEventListener("click", removeSelected);
