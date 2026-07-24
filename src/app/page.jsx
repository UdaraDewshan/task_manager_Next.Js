"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  
  const handleDelete = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
    localStorage.setItem("tasks", JSON.stringify(deleteTask));
  };

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "in-progress");
  const doneTasks = tasks.filter((t) => t.status === "done");

  const TaskCard = ({ task }) => (
    <div className="bg-white p-3 rounded border border-gray-200 mb-3 flex justify-between items-center shadow-sm">
      <h3 className="font-semibold">{task.title}</h3>
      
      
    <div className="flex gap-3">
        <Link 
          href={`/addTask?id=${task.id}`} 
          className="text-blue-500 text-sm hover:font-bold"
        >
          Edit
        </Link>
        
        <button 
          onClick={() => handleDelete(task.id)} 
          className="text-red-500 text-sm hover:font-bold"
        >
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-900">
      
      <div className="flex justify-between mb-8">
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <Link href="/addTask" className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add Task
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-4 border-b border-gray-300 pb-2">To Do</h2>
          {todoTasks.map(t => <TaskCard key={t.id} task={t} />)}
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-4 border-b border-gray-300 pb-2">In Progress</h2>
          {inProgressTasks.map(t => <TaskCard key={t.id} task={t} />)}
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-4 border-b border-gray-300 pb-2">Done</h2>
          {doneTasks.map(t => <TaskCard key={t.id} task={t} />)}
        </div>

      </div>

    </div>
  );
}