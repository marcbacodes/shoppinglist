// Add an item to the list
function addItem() {
    var itemInput = document.getElementById("item-input");
    var itemText = itemInput.value.trim();

    if (itemText !== "") {
        var newItem = createListItem(itemText);
        var itemList = document.getElementById("item-list");
        itemList.appendChild(newItem);
        itemInput.value = "";
    }
}

// Create a new list item
function createListItem(itemText) {
    var listItem = document.createElement("li");

    var itemWrapper = document.createElement("div");
    itemWrapper.classList.add("item-wrapper");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", function () {
        toggleCompletedState(listItem, checkbox.checked);
    });
    itemWrapper.appendChild(checkbox);

    var itemSpan = document.createElement("span");
    itemSpan.textContent = itemText;
    itemWrapper.appendChild(itemSpan);

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", function () {
        editItem(itemSpan);
    });
    itemWrapper.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteItem(listItem);
    });
    listItem.appendChild(itemWrapper);
    listItem.appendChild(deleteButton);

    return listItem;
}

// Edit an item
function editItem(itemSpan) {
    var newText = prompt("Enter the new item text:", itemSpan.textContent);
    if (newText !== null) {
        itemSpan.textContent = newText.trim();
    }
}

// Delete an item
function deleteItem(listItem) {
    listItem.parentNode.removeChild(listItem);
}

// Toggle completed state (strikethrough)
function toggleCompletedState(listItem, checked) {
    if (checked) {
        listItem.classList.add("completed");
    } else {
        listItem.classList.remove("completed");
    }
}

// Add item button click event
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addItem);

// Enter key press event for item input
var itemInput = document.getElementById("item-input");
itemInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});
