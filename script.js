// Select the form and the list elements
const form = document.querySelector('#form');
const list = document.querySelector('#list');

// Add an event listener to the form to handle form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const input = document.querySelector('#item-input');
  const newItemText = input.value;

  // Create a new list item element
  const newItem = document.createElement('li');
  newItem.textContent = newItemText;

  // Create a delete button element
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

  // Add an event listener to the delete button to remove the list item
  deleteButton.addEventListener('click', function() {
    list.removeChild(newItem);
  });

  // Append the delete button to the new list item
  newItem.appendChild(deleteButton);

  // Append the new list item to the list
  list.appendChild(newItem);

  // Clear the input field
  input.value = '';
});
