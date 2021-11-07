// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ToDo_List {

  //To store the number of tasks
  uint public taskCount = 0;

  //To store details of a task 
  struct Task {
    uint taskId; 
    string content;
    bool completed;
  }

  //To store all the tasks
  mapping (uint=>Task) tasks;

  //To add a new task to the list
  function addTask(string memory _content) public{
    taskCount++;
    tasks[taskCount] = Task(taskCount,_content,false);
  }

  //Event to be emitted when a task is completed
  event TaskCompleted (uint taskId,bool completed);

  //To toggle whether a task is completed or not
  function toggleCompleted(uint _taskId) public{
    Task memory task = tasks[_taskId];
    task.completed = !task.completed;
    tasks[_taskId] = task;

    emit TaskCompleted(task.taskId,task.completed);
  }
}
