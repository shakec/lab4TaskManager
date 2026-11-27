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

    // 3. create new task object
    const newTask = {
        name: taskName,
        category: taskCategory,
        deadline:taskDeadline,
        status: taskStatus,
    }

    // 4. add object to task array
    tasks.push(newTask)
    // refresh the list
    displayList()
    // 5. display updated array
    console.log(tasks)

    // 6. reset form 
    taskForm.reset()
})

// Display List
function displayList () {
    const taskList = document.getElementById("task-list")

    taskList.innerHTML = ""

    // callback method for each element in the array
    tasks.forEach((item, index) => {
        // have the DOM create the 'li' element
        const li = document.createElement('li')
        li.textContent = JSON.stringify(item) // get and set text inside the element

        // create delete button + logic
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete Task'

        // add click event to the delete button
        deleteBtn.addEventListener('click', () => {
            // remove single item from the list
            tasks.splice(index, 1)
        })

        li.appendChild(deleteBtn) // add delete to every item
        taskList.appendChild(li) // add item to the list
    })
}

