// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];
// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the poop out of the litter box');
const task2 = newTask('Do laundry', '😨');
const tasks = [task1, task2];
console.log(tasks);

task1.logState();
task1.markComplete();
task1.logState();