import React, { useState } from "react";
import Item from "./Item";

const Todolist = () => {
  const [task, setTask] = useState("");
  const [id, setId] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [isFinish, setIsFinish] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: id, task: task, isFinish: isFinish };
    setTasks([...tasks, newTask]);
    setTask("");
    setIsFinish(false);
    setId(id + 1);
  };

  return (
    <div className="p-8">
      <h1 className="text-[#5b9ba9] text-xl text-center p-5">To-DoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="block w-[80%
          ] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="bg-[#24f421] text-white rounded-lg p-2 mt-2"
        >
          +
        </button>
      </form>
      <div>
        {tasks.length ? (
          tasks.map((t) => (
            <div key={t.id}>
              <Item id={t.id} task={t.task} tasks={tasks} setTasks={setTasks} />
            </div>
          ))
        ) : (
          <div>
            <p>There is no activity in the list yet </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todolist;
