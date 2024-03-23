import TodoNavbar from "../todo-navbar/todoNavbar";
import { IoAddOutline } from "react-icons/io5";
import { LuToggleLeft, LuToggleRight } from "react-icons/lu";
import TodoBtn from "../todo-button/todoButton";
import TodoFilters from "../todo-filters/todoFilter";
import TodoProjects from "../todo-projects/todoProjects";
import TodoTasks from "../todo-tasks/todoTasks";


const TodoBoard = () => {

    return (
        <div className="bg-[#9190c6] h-screen">
            <div>
                <TodoNavbar />
                <div>
                    <div className="ml-[15%] mr-[15%] text-gray-600 flex  h-[80vh]">
                        <div className="bg-[#18181c] w-1/3  mr-5 rounded-xl flex flex-col">

                            <div className="m-5 ">
                                <TodoFilters />
                            </div>

                            <div className="m-5">
                                <TodoProjects />
                            </div>

                        </div>
                        <div className="bg-[#18181c] w-2/3 rounded-xl relative">
                            <TodoTasks />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoBoard;