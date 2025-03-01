document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  // State
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  // Add todo
  function addTodo(e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
      const newTodo = {
        id: Date.now(),
        text: todoText
      };

      todos.push(newTodo);
      saveTodos();
      renderTodos();
      todoInput.value = '';
    }
  }

  // Delete todo
  function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
  }

  // Save todos to localStorage
  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // Render todos
  function renderTodos() {
    todoList.innerHTML = '';

    if (todos.length === 0) {
      const emptyMessage = document.createElement('li');
      emptyMessage.textContent = 'No items yet. Add a task above!';
      emptyMessage.classList.add('todo-item', 'empty-message');
      todoList.appendChild(emptyMessage);
      return;
    }

    todos.forEach(todo => {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');

      todoItem.innerHTML = `
        <span class="todo-text">${todo.text}</span>
        <button class="delete-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      `;

      const deleteBtn = todoItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

      todoList.appendChild(todoItem);
    });
  }

  // Event listeners
  todoForm.addEventListener('submit', addTodo);

  // Initialize
  renderTodos();
});