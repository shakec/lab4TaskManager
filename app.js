// Store objects (each task) with props: task name, category, deadline, and status.
const appName = "Task Manager"
const firstTask = {
    name:"Make an app",
    category:"Software Engineering",
    deadline:"November 30, 2026",
    status:"Not Started",
}

const secondTask = {
    name:"Order coffee",
    category:"Personal",
    deadline:"Immediately",
    status:"In Progress"
}

const tasks = [firstTask, secondTask]

// console.log(appName)
// console.log(tasks[0].name)

tasks.push({
    name: "Sketch out idea",
    category: "Design",
    deadline: "November 25, 2026",
    status: "Not Started"
})
// console.log(tasks.length)