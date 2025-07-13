// Get references to the form, input, and list elements
const form = document.getElementById('form');
const input = document.getElementById('item-input');
const list = document.getElementById('list');

// Listen for the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the value the user typed
  const itemText = input.value;

  // Create a new list item element
  const li = document.createElement('li');
  li.textContent = itemText;

  // Create a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  // Add a trash can icon inside the button
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  // Add the delete button to the list item
  li.appendChild(deleteBtn);

  // Add the new item to the list
  list.appendChild(li);

  // Clear the input box for the next item
  input.value = '';
});

// Listen for clicks on the list (event delegation)
list.addEventListener('click', function(event) {
  // Check if the clicked element is a delete button or inside one
  if (event.target.closest('.delete-btn')) {
    // Remove the list item (li) that contains the button
    const li = event.target.closest('li');
    if (li) {
      list.removeChild(li);
    }
  }
});
