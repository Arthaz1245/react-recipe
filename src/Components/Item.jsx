import React, { useState } from "react";

const Item = ({ id, task, tasks, setTasks }) => {
  const [isFinish, setIsFinish] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [value, setValue] = useState("");
  const handleDelete = (id) => {
    const temp = tasks.filter((t) => t.id !== id);
    setTasks(temp);
  };

  // const [isClicked, setIsClicked] = useState(false);
  const updateTask = (id, task) => {
    const temp = [...tasks];
    const item = temp.find((t) => t.id === id);
    item.task = task;
    setTasks(temp);
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateTask(id, value);
    setUpdating(false);
  };

  const updateTaskActivated = () => {
    return (
      <>
        <input
          type="text"
          placeholder="add task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          className="bg-[#108023] text-white rounded-lg p-2 mt-2"
          onClick={handleClick}
        >
          Save
        </button>
        <button
          className="bg-[#efc2c2] text-white rounded-lg p-2 mt-2"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </>
    );
  };
  const updateTaskDisable = () => {
    return (
      <div className="flex flex-row p-4 m-3 space-x-3 rounded-lg bg-[#1dd7c482]">
        {isFinish ? (
          <p className="underline">{task}</p>
        ) : (
          <p className="">{task}</p>
        )}

        <button
          className="bg-[#f44821] text-white rounded-lg p-2 mt-2"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
        <button
          onClick={() => setUpdating(true)}
          className="bg-[#3063ab] text-white rounded-lg p-2 mt-2"
        >
          Update
        </button>
        <input
          type="checkbox"
          value={isFinish}
          onChange={(e) => setIsFinish(e.target.checked)}
        />
      </div>
    );
  };
  return <>{updating ? updateTaskActivated() : updateTaskDisable()}</>;
};

export default Item;
