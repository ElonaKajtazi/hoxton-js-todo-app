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
    let todoLiEl = document.createElement("li");
    todoLiEl.className = "todo";
    let todoInput = document.createElement("input");
    todoInput.type = "checkbox";
    let todoText = document.createElement("p");
    todoText.textContent = "";
/* 
//     <section class="todo-section">
//       <h2 class="section-title">Todo</h2>
//       <ul>
//         <li class="todo">
//           <input type="checkbox">
//           <p>Go shopping</p>
//           <button>Delete</button>
//         </li>
//         <li class="todo">
//           <input type="checkbox">
//           <p>Work out</p>
//           <button>Delete</button>
//         </li>
//       </ul>
//     </section> */
}

function render() {
  document.body.textContent = "";
  renderApp();

  renderOptionsSection();
  renderAddItemSection();
}
/* 
//     <section class="todo-section">
//       <h2 class="section-title">Todo</h2>
//       <ul>
//         <li class="todo">
//           <input type="checkbox">
//           <p>Go shopping</p>
//           <button>Delete</button>
//         </li>
//         <li class="todo">
//           <input type="checkbox">
//           <p>Work out</p>
//           <button>Delete</button>
//         </li>
//       </ul>
//     </section>
//     <section class="completed">
//       <h2 class="section-title">Completed</h2>
//       <ul>
//         <li class="todo completed">
//           <input type="checkbox" checked>
//           <p>See the doctor</p>
//           <button>Delete</button>
//         </li>
//       </ul>
//     </section>
//   </div> */
render();
