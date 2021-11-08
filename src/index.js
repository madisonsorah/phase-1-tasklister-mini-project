document.addEventListener("DOMContentLoaded", () => {
let form = document.getElementById("create-task-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const textBox = document.getElementById("new-task-description")
    buildToDo(textBox.value);
    form.reset();
  });
});

function buildToDo(todo) {
  let li = document.createElement('li')
  let btn = document.createElement("button");
  btn.addEventListener('click',handleDelete);
  btn.textContent = 'x';
  li.textContent = `${todo} `;
  li.appendChild(btn);
  document.getElementById("tasks").appendChild(li);

}

function handleDelete(e) {
  e.target.parentNode.remove();
}
