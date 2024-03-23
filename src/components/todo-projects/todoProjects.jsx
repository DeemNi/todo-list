import TodoBtn from "../todo-button/todoButton";
import { IoAddOutline } from "react-icons/io5";

const TodoProjects = () => {

    return (
        <div>
            <div className="flex justify-between flex-row">
                <h3 className="text-[#9496de]">Projects</h3>
                <IoAddOutline className="size-6" />
            </div>
            <div className="flex flex-col">
                <TodoBtn name={'Default'} type={'Folder'} />
            </div>
        </div>
    )
}

export default TodoProjects;