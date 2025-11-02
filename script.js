const addButton = document.getElementById('addButton');

const itemInput = document.getElementById('nameInput'); 

const itemList = document.getElementById('nameList');   

const choosebtn = document.getElementById('chooseButton');

const names = [];

addButton.addEventListener("click", () => {
    const itemName = itemInput.value.trim();
    if (itemName !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = itemName;
        itemList.appendChild(listItem);
        names.push(itemName);
        itemInput.value = "";
    }
});

choosebtn.addEventListener("click", () => {
    if (names.length === 0) {
        return showPopup("there is no name ");
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    const chosenName = names[randomIndex];

    showPopup("Chosen name : " + chosenName);
    names.splice(randomIndex, 1);
    itemList.removeChild(itemList.children[randomIndex]);
});

function showPopup(name) {
  const popup = document.getElementById('popup');
  const popupName = document.getElementById('popupName');
  popupName.textContent = name;
  popup.style.display = 'block';
}

document.getElementById('nextButton').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});
