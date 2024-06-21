import React from "react";
import TaskCard from "./TaskCard";

const Kanban = ({ tasks }) => {
  const todoTasks = tasks.filter(task => task.stage === "todo");
  const inProgressTasks = tasks.filter(task => task.stage === "in progress");
  const completedTasks = tasks.filter(task => task.stage === "completed");

  return (
    <div className='w-full py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 2xl:gap-10'>
      <div>
        {todoTasks.map((task, index) => (
          <div key={index} className='mb-4'>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
      <div>
        {inProgressTasks.map((task, index) => (
          <div key={index} className='mb-4'>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
      <div>
        {completedTasks.map((task, index) => (
          <div key={index} className='mb-4'>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
