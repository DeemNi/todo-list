import { LuToggleLeft, LuToggleRight } from "react-icons/lu";
import TodoBtn from "../todo-button/todoButton";
import { useState } from "react";

const TodoFilters = () => {

    const [filtersEnabled, setfiltersEnabled] = useState(false);

    function handleFilterEnabled(boolean) {

        setfiltersEnabled(boolean);
    }

    return (
        <div>
            <div className="flex h-[50%] justify-between flex-row">
                <h3 className="text-[#9496de]">Filters</h3>
                {
                    filtersEnabled 
                    ? <LuToggleLeft onClick={() => handleFilterEnabled(filtersEnabled ? false : true)} className='size-6 cursor-pointer' /> 
                    : <LuToggleRight onClick={ () =>handleFilterEnabled(filtersEnabled ? false : true)} className='size-6 cursor-pointer' />
                }
            </div>
            <div className="flex flex-col">
                <TodoBtn name={'All'} type={'All'} disabled={filtersEnabled ? "disabled" : null}/>
                <TodoBtn name={'Starred'} type={'Starred'} disabled={filtersEnabled ? "disabled" : null} />
                <TodoBtn name={'Today'} type={'Today'} disabled={filtersEnabled ? "disabled" : null} />
                <TodoBtn name={'Week'} type={'Week'} disabled={filtersEnabled ? "disabled" : null} />
            </div>
        </div>
    )
}

export default TodoFilters;