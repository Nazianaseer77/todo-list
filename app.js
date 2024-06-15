import inquirer from 'inquirer';
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'Eid ki shopping kia kia ki hai?'
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'do you want to add more todo?',
            default: 'false',
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
