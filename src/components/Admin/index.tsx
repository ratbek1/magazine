import React, { FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addTodo } from "../../store/reducers/todoSlice";
import { useAppSelector } from "../../hooks/useAppSelector";

const Admin = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("")
  const [image, setImage] = useState<any>("")
  const [price, setPrice] = useState("")
  const fileReader = new FileReader()

  fileReader.onloadend = () => {
    setImage(fileReader.result)
  }
  const handleFile =(e: any) => {
        fileReader.readAsDataURL(e.target.files[0])
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTask = {
        id: Date.now(),
        name,
        price,
        image
    };
    dispatch(addTodo(newTask))
   
  };
  return (
    <div>
      <h1 className="text-center text-2xl pt-8">Create product</h1>
      <div className="flex justify-between">
        <form onSubmit={handleSubmit} className="flex flex-col w-[400px] pt-16">
          <input  onChange={handleFile}   className="text-white font-bold rounded-xl" type="file" />
          <input  onChange={(e) => setName(e.target.value)}
            className="bg-gray-500 px-4 py-2 text-white font-bold my-4 rounded-xl"
            placeholder="food name"
            type="text"
          />
          <input onChange={(e) => setPrice(e.target.value)}
            className="bg-gray-500 px-4 py-2 text-white font-bold rounded-xl"
            placeholder="price"
            type="number"
          />
          <div className="flex justify-center mt-5">
            <button onClick={() => addTodo}
            className="bg-blue-500 px-4 py-2 rounded-md text-white">
              Create
            </button>
          </div>
        </form>
        <div>
       
        </div>
      </div>
    </div>
  );
};

export default Admin;
