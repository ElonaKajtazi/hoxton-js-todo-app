// Deliverables
// A user can:
// - View incomplete todos
// - When the "Show completed todos" box is checked, view completed todos as well
// - Enter a new todo, which will initially show as incomplete
// - Click a todo to toggle its completion

// Instructions
// - Start this project from scratch, write whatever HTML, CSS & JS you need
// - Create a state object
// - Create action functions that update state
// - Create render functions that read from state

// Tips
// - Try starting with state. Create the state for the todos, then a function to toggle a todo's completed state, a function to add a new todo, etc.
// - You can test these functions before you even render anything on the page, just by calling the functions in your js file.

let state = {
  todos: [
    {
      text: "Go shopping",
      completed: false,
    },
    {
      text: "See the doctor",
      completed: true,
    },
    {
      text: "Work out",
      completed: false,
    },
    // {
    //     text: "Go to the gym",
    //     completed: true,
    // }
  ],
  showCompleted: false,
};

function toggleShowCompleted() {
  state.showCompleted = !state.showCompleted;
  render();
}
function addTodo(text) {
  if (text.length === 0) return;

  let todo = {
    text: text,
    completed: false,
  };

  state.todos.push(todo);
  render();
}
// Q: What are my todos? state.todos
// Q: Can I add a todo? state.todos.push()
// Q: Should I be showing completed todos? state.showCompleted
// Q: What are my incomplete todos? state.todos.filter(todo => todo.completed===false)
// Q: What are my completed todos? state.todos.filter(todo => todo.completed===true)

// For a single todo can I check if it si completed? todo.completed
// For a single todo what is the text? todo.text

function renderApp() {
  let appEl = document.createElement("div");
  appEl.className = "app";
  document.body.append(appEl);
}

function renderOptionsSection() {
  let optionsSection = document.createElement("section");
  optionsSection.className = "options";

  let optionsTitle = document.createElement("h2");
  optionsTitle.className = "section-title";
  optionsTitle.textContent = "Options";

  let showCompletedLabel = document.createElement("label");
  showCompletedLabel.className = "show-completed";

  let showCompletedInput = document.createElement("input");
  showCompletedInput.type = "checkbox";

  optionsSection.append(optionsTitle, showCompletedLabel);
  showCompletedLabel.append("Show completed", showCompletedInput);

  let appEl = document.querySelector(".app");
  appEl.append(optionsSection);
}
function renderAddItemSection() {
  let addItemSection = document.createElement("section");
  addItemSection.className = "add-item";

  let addItemTitle = document.createElement("h2");
  addItemTitle.className = "section-title";
  addItemTitle.textContent = "Add Item";

  let addItemForm = document.createElement("form");
  addItemForm.className = "add-todo-item__form";

  let addItemInput = document.createElement("input");
  addItemInput.type = "text";
  addItemInput.className = "add-todo";

  let addItemButton = document.createElement("button");
  addItemButton.textContent = "Add";

  addItemSection.append(addItemTitle, addItemForm);
  addItemForm.append(addItemInput, addItemButton);

  let appEl = document.querySelector(".app");
  appEl.append(addItemSection);
}
function renderTodoSection() {
  let todoSection = document.createElement("section");
  todoSection.className = "todo-section";

  let todoTitle = document.createElement("h2");
  todoTitle.className = "section-title";
  todoTitle.textContent = "Todo";

  let todoList = document.createElement("ul");

  let incompleteTodos = state.todos.filter((todo) => todo.completed === false);

  for (let todo of incompleteTodos) {
    let todoLiEl = document.createElement("li");
    todoLiEl.className = "todo";

    let todoInput = document.createElement("input");
    todoInput.type = "checkbox";

    let todoText = document.createElement("p");
    todoText.textContent = todo.text;

    let todoButton = document.createElement("button");
    todoButton.textContent = "Delete";

    todoList.append(todoLiEl);
    todoLiEl.append(todoInput, todoText, todoButton);
  }

  todoSection.append(todoTitle, todoList);

  let appEl = document.querySelector(".app");
  appEl.append(todoSection);
}
function renderCompletedSection() {
  let completedSection = document.createElement("section");
  completedSection.className = "completed";

  let completedTitle = document.createElement("h2");
  completedTitle.className = "section-title";
  completedTitle.textContent = "Completed";

  let completedList = document.createElement("ul");

  let completedTodos = state.todos.filter((todo) => todo.completed === true);

  for (let todo of completedTodos) {
    let completedLiEl = document.createElement("li");
    completedLiEl.className = "todo completed";

    let completedInput = document.createElement("input");
    completedInput.type = "checkbox";

    let completedText = document.createElement("p");
    completedText.textContent = todo.text;

    let completedButton = document.createElement("button");
    completedButton.textContent = "Delete";

    completedList.append(completedLiEl);
    completedLiEl.append(completedInput, completedText, completedButton);
  }
  completedSection.append(completedTitle, completedList);

  let appEl = document.querySelector(".app");
  appEl.append(completedSection);
}
function render() {
  document.body.textContent = "";

  renderApp();

  renderOptionsSection();
  renderAddItemSection();
  renderTodoSection();
  renderCompletedSection();
}

render();
