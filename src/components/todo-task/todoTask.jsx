import { MdRadioButtonUnchecked, MdRadioButtonChecked, MdOutlineStarPurple500 } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import TodoFullyTask from "../todo-fullyTask/todoFullyTask";


const TodoTask = ({ taskName }) => {

    const [fullyTaskIsOpen, setFullyTaskIsOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isDone, setIsDone] = useState(false);

    function handleFavorite(isFavorite) {
        setIsFavorite(isFavorite);
    }

    function handleDone(isDone) {
        setIsDone(isDone);
    }

    function handleFullyTask(fullyTaskIsOpen) {
        setFullyTaskIsOpen(fullyTaskIsOpen);
    }

    //========================

    function handleFullyTaskOpen() {
        setFullyTaskIsOpen(true);
    }

    function handleFullyTaskClose() {
        setFullyTaskIsOpen(false);
    }

    //========================



    return (
        <div className="flex flex-col m-5">
            <div className="pl-3 bg-[#2f2d36] rounded-lg  text-white">

                {fullyTaskIsOpen ? <TodoFullyTask /> : null}

                <div className="flex content-center items-center h-8">
                    <div className="flex-none cursor-pointer w-14 ">
                        {
                            isDone
                                ? <MdRadioButtonChecked className="cursor-pointer" onClick={() => handleDone(isDone ? false : true)} />
                                : <MdRadioButtonUnchecked className="cursor-pointer" onClick={() => handleDone(isDone ? false : true)} />
                        }

                    </div>
                    <div className="grow">
                        <button onClick={handleFullyTaskOpen}>
                            {taskName}
                        </button>
                    </div>
                    <div className=" flex-none cursor-pointer w-14">
                        {
                            isFavorite
                                ? <MdOutlineStarPurple500 className="cursor-pointer" onClick={() => handleFavorite(isFavorite ? false : true)} />
                                : <FaRegStar className="cursor-pointer" onClick={() => handleFavorite(isFavorite ? false : true)} />
                        }
                    </div>
                </div>
            </div>
            <TodoFullyTask isOpen={fullyTaskIsOpen} onClose={handleFullyTaskClose} />

        </div>
    )
}

export default TodoTask;