import { TbAlignBoxCenterStretch } from "react-icons/tb";
import { FaRegStar, FaFolder } from "react-icons/fa";
import { BsCalendar4Event, BsCalendar4Week } from "react-icons/bs";

const TodoBtn = ({ name, type, disabled }) => {

    function handleTest(){
        console.log('work');
    }

    return (
        <button disabled={disabled} onClick={handleTest} className={`pl-3 mt-2 hover:bg-[#2f2d36] rounded-lg flex content-center items-center h-8 ${disabled === 'disabled' ? 'line-through' : ''}`}>
            {
                type === 'All' 
                    ? <TbAlignBoxCenterStretch style={{ marginRight: '10px' }} />
                    : type === 'Starred' ? <FaRegStar style={{ marginRight: '10px' }} />
                        : type === 'Today' ? <BsCalendar4Event style={{ marginRight: '10px' }} />
                            : type === 'Week' ? <BsCalendar4Week style={{ marginRight: '10px' }} />
                                : type === 'Folder' ? <FaFolder style={{ marginRight: '10px' }} />
                                    : null
            }

            {name}
            
        </button>
    )
}

export default TodoBtn;