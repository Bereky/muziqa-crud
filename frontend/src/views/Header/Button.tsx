import React, { useState } from "react";

const Button = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-52 h-full bg-slate-00 flex justify-center items-center absolute right-0 p-5 mr-3">
      <button
        onClick={() => setShowModal(true)}
        className="w-48 h-full outline outline-sky-600 rounded-md"
      >
        Add Song
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-zinc-700 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Song</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-96 px-10">
                  <form>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm  text-sky-500 font-semibold">
                        Title
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        className="bg-zinc-800 border border-sky-500 text-zinc-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm  text-sky-500 font-semibold">
                        Artist
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        className="bg-zinc-800 border border-sky-500 text-zinc-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm  text-sky-500 font-semibold">
                        Album
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        className="bg-zinc-800 border border-sky-500 text-zinc-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm  text-sky-500 font-semibold">
                        Genre
                      </label>

                      <select className="bg-zinc-800 border border-sky-500 text-sky-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option value="jazz"> Jazz </option>
                        <option value="house">House</option>
                      </select>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 py-4 border-t border-solid border-zinc-700 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="btn w-24 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Button;
