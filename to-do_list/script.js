// Select elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Event listener for Add button
addButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Get input value and trim spaces
  
  if (taskText === '') {
    alert('Please enter a task.');
    return; // Stop if empty
  }

  // Create a new list item
  const li = document.createElement('li');
  li.className = 'task-item';
  // Add task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Create Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  // Add event to Remove button
  removeBtn.addEventListener('click', function () {
    li.classList.add('removed'); // Add removed class for animation
    setTimeout(() => li.remove(), 300); // Wait for animation before removal
  });

  // Append elements to list item
  li.appendChild(taskSpan);
  li.appendChild(removeBtn);

  // Add list item to task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = '';
}
