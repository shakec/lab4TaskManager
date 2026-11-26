// Target task-form by ID, connect to HTML — stores reference to form element
const taskForm = document.getElementById("task-form")

// Create the array
const tasks = []

// Event listener on "Add Task" btn
taskForm.addEventListener('submit', (event) => {
    // prevents form from reloading the page
    event.preventDefault() 
    
    // 2. capture four input values
    // Record task information
    const taskName = document.getElementById("task-name").value
    const taskCategory = document.getElementById("task-category").value
    const taskDeadline = document.getElementById("task-deadline").value
    const taskStatus = document.getElementById("task-status").value

    const appName = "Task Manager"

    // 3. create new task object
    const newTask = {
        name: taskName,
        category: taskCategory,
        deadline:taskDeadline,
        status: taskStatus,
    }

    // 4. add object to task array
    tasks.push(newTask)
    // 5. display updated array
    console.log(tasks)

    // 6. reset form 
    taskForm.reset()
})




// Store objects (each task) with props: task name, category, deadline, and status. 
// Now that task data can be stored, replace with the variable
// Empty array to push in users tasks


// console.log(appName)
// console.log(tasks[0].name)

// console.log(tasks.length)
