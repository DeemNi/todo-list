import { useState } from "react";
import TodoTask from "../todo-task/todoTask";


const TodoTasks = () => {

    return (
        <div>
            <div>
                <h3 className="text-[#9496de] m-5 -mb-3">Tasks</h3>
            </div>

            <div>
                <TodoTask taskName={'Test01'}/>
            </div>

            <div className="absolute bottom-0 right-0 m-6 text-white font-bold py-2 px-4 rounded-3xl w-[150px] text-center
            bg-gradient-to-r from-violet-500 to-violet-700 hover:to-teal-500 hover:from-violet-700 cursor-pointer">
                <button>Add Task</button>
            </div>
        </div>
    )
}

export default TodoTasks;