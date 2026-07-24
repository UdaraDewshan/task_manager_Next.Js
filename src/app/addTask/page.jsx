"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  
  const router = useRouter();
  
  const editId = useSearchParams().get("id"); 

  useEffect(() => {
    if (editId) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const task = tasks.find((t) => t.id == editId);
      
      if (task) {
        setTitle(task.title);
        setStatus(task.status);
      }
    }
  }, [editId]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (editId) {
      tasks = tasks.map((t) => (t.id == editId ? { ...t, title, status } : t));
    } else {
      tasks.push({ id: Date.now(), title, status });
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        
        <h1 className="text-2xl font-bold mb-6">
          {editId ? "Edit Task" : "Add New Task"}
        </h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Task Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded p-2" 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <Link href="/" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
              Cancel
            </Link>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}