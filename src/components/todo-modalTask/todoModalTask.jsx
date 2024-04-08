

const TodoModalTask = () => {

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center  bg-gray-400">

                <div class="bg-white p-8 rounded shadow-lg">
                    Add a new task
                    <div >
                        <input type="text" className="border-solid border-2 mb-1"/><br /> 
                        <textarea name="" id="" cols="30" rows="10" className="border-solid border-2"></textarea>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default TodoModalTask;