//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const { array } = require("yargs")

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }]
    ,
    getTasksToDo () {
        let t1=this.tasks.filter(e=>e.completed==false)
        //de curiozitate, cum sa gasesc indexurile pentru cele cu false
        //  let t2=[]
        //  t1.forEach(e=>t2.push(this.tasks.indexOf(e)))
        //  return t2
        let t2=[]
        t1.forEach(e=>{t2.push(e.text)})
        return t2
    }
}

console.log(tasks.getTasksToDo())

