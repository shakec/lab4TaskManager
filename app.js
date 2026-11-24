// Target task-form by ID, connect to HTML — stores reference to form element
const taskForm = document.getElementById("task-form")

// Record task information
const taskName = document.getElementById("task-name").value
const taskCategory = document.getElementById("category").value
const taskDeadline = document.getElementById("deadline").value
const taskStatus = document.getElementById("task-status").value



// Event listener on "Add Task" btn
taskForm.addEventListener('submit', (event) => {
    event.preventDefault() // prevents form from reloading the page
})

// Store objects (each task) with props: task name, category, deadline, and status. 
// Now that task data can be stored, replace with the variable
const appName = "Task Manager"
const newTask = {
    name: taskName,
    category: taskCategory,
    deadline:taskDeadline,
    status: taskStatus,
}
// Empty array to push in users tasks
const tasks = []
tasks.push(newTask)


// console.log(appName)
// console.log(tasks[0].name)

tasks.push({
    name: "Sketch out idea",
    category: "Design",
    deadline: "November 25, 2026",
    status: "Not Started"
})
// console.log(tasks.length)