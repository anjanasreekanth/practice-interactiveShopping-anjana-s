const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shoppingList");

// button to add item
addBtn.addEventListener("click", function () {
	const item = itemInput.value.trim();
	if (item) {
		addItem(item);
		itemInput.value = "";
	}
});

function addItem(item) {
	const listItem = document.createElement("li");

	const itemText = document.createElement("span");
	itemText.textContent = item;

	const removeBtn = document.createElement("button");
	removeBtn.textContent = "Remove";
	removeBtn.addEventListener("click", function () {
		shoppingList.removeChild(listItem);
		console.log("Item removed!");
	});

	const editInput = document.createElement("input");
	editInput.type = "text";
	editInput.value = item;

	const editBtn = document.createElement("button");
	editBtn.textContent = "Edit";
	editBtn.addEventListener("click", function () {
		if (editBtn.textContent === "Edit") {
			listItem.replaceChild(editInput, itemText);
			editBtn.textContent = "Save";
		} else {
			itemText.textContent = editInput.value; // update old text with new
			listItem.replaceChild(itemText, editInput);
			editBtn.textContent = "Edit";
		}
	});

	// item > add text and buttons
	listItem.appendChild(itemText);
	listItem.appendChild(removeBtn);
	listItem.appendChild(editBtn);

	// add item to shopping list
	shoppingList.appendChild(listItem);
}