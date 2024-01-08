const add_btn = document.getElementById("btn");
const input_btn_text = document.getElementById("text-holder");
const task_holder = document.getElementById("task-holder");

const add_new_task = () => {
  console.log(input_btn_text.value);
  if (input_btn_text.value !== "") {
    const checkboxId = `checkbox_${Date.now()}`;

    const newTask = document.createElement("li");
    newTask.innerHTML = `<label><input id="${checkboxId}" class="task-checkbox" type="checkbox"><span>${input_btn_text.value}</span></label>`;
    task_holder.appendChild(newTask);
    input_btn_text.value = "";

    const checkbox = document.getElementById(checkboxId);

    // Add event listener to the newly created checkbox
    checkbox.addEventListener("change", function () {
      const associatedSpan = this.nextElementSibling; // Get the span element
      if (this.checked) {
        associatedSpan.style.textDecoration = "line-through";
      } else {
        associatedSpan.style.textDecoration = "none";
      }
    });
  }
};

add_btn.addEventListener("click", add_new_task);
