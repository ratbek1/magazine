import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const Menu = () => {
  const { todo } = useAppSelector((s) => s.todoSlice);
  return (
    <div className="mt-[40px] flex items-center flex-wrap">
      {todo.map((el) => (
        <div className="max-w-sm py-[20px] rounded-[20px] mx-[40px] px-[40px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-[100%]" src={el.image} alt="" />
          <div className="">
              <h5 className="mb-2 mt-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {el.name}
              </h5>
            <p className="mb-3  flex items-center justify-between font-normal text-gray-700 dark:text-gray-400">
              {el.price}
              <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                to order
                </button>
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
