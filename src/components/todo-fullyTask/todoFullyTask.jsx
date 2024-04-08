

const TodoFullyTask = ({isOpen, onClose}) => {

    if(!isOpen) return null;
    return (
        <>
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-700 opacity-50"></div>
          <div className="relative bg-white w-96 rounded-lg shadow-lg">
            <button onClick={onClose} className="absolute top-0 right-0 m-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="p-4">
                <p>Task name</p>
                <input type="text" className="border-solid border-2 violet-sky-500 rounded-lg" />
                <p>Task description</p>
                <textarea name="" id="" cols="45" rows="5" className="border-solid border-2 violet-sky-500 rounded-lg"></textarea>
            </div>
            
          </div>
        </div>
      </>
    )
}

export default TodoFullyTask;