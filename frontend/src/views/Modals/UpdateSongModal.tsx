import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface ChildProps {
  message: boolean;
  onClickCB: () => void;
}

const UpdateSongModal = ({ message, onClickCB }: ChildProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { songForAction } = useSelector((state: RootState) => state.song);

  const dispatch = useDispatch();

  const onSubmit = (data: object) => {
    const updatedSong = {
      ...data,
      _id: songForAction[0]._id,
    };

    dispatch({ type: "song/updateSongPending", payload: updatedSong });
    onClickCB();
    reset();
  };

  const cancelUpdateHandler = () => {
    onClickCB();
    reset();
  };

  return (
    <>
      {message && songForAction && songForAction[0] ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-zinc-700 rounded-t">
                  <h3 className="text-3xl text-sky-500 font-semibold">
                    Update Song{" "}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-96 px-10">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm  text-sky-500 font-semibold">
                        Title
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        className="bg-zinc-800 border border-sky-500 text-zinc-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        defaultValue={songForAction[0].title}
                        {...register("title", { required: true })}
                      />
                      {errors.title && (
                        <p className="text-red-400 text-sm">
                          * This field is required.
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm  text-sky-500 font-semibold">
                        Artist
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        className="bg-zinc-800 border border-sky-500 text-zinc-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        defaultValue={songForAction[0].artist}
                        {...register("artist", { required: true })}
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
                        defaultValue={songForAction[0].album}
                        {...register("album", { required: true })}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm  text-sky-500 font-semibold">
                        Genre
                      </label>

                      <select
                        defaultValue={songForAction[0].genre}
                        {...register("genre")}
                        className="bg-zinc-800 border border-sky-500 text-sky-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option value="jazz"> Jazz </option>
                        <option value="pop"> Pop</option>
                        <option value="blues"> Blues</option>
                        <option value="reggae"> Reggae</option>
                        <option value="indie"> Indie</option>
                        <option value="soul"> Soul </option>
                        <option value="country"> Country</option>
                        <option value="rock"> Rock </option>
                        <option value="house">House</option>
                      </select>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end pt-3 border-t border-solid border-zinc-700 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={cancelUpdateHandler}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn w-24 text-white bg-sky-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
                        type="submit"
                        //onClick={onClickCB}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default UpdateSongModal;
