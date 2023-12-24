import React, { useRef } from "react";
import { useAppDispatch } from "../store/store";
import { addPerson, savePerson } from "../store/features/personSlice";


const Add = () => {
    const name = useRef<string>('');
    const dispatch = useAppDispatch();

    const handleChange = (e) => {
        name.current = e.target.value
    }

    const handleSubmit = () => {    
        dispatch(savePerson(name.current));
    }

    return (
        <div className="border rounded-md p-2 shadow-md m-2">
            <label htmlFor="">Person Name:</label>
            <input className="border rounded-md p-2 mx-1" 
                onChange={(e) => handleChange(e)}
            />
            <button 
                className="bg-violet-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
                onClick={() => handleSubmit() }>
                Add
            </button>
        </div>
    )
}

export default Add;