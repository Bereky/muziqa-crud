const Songs = () => {
  return (
    <>
      <Table />
    </>
  );
};

const Table = () => {
  return (
    <table className="min-w-full bg-zin-800 border-none text-zinc-200">
      <thead>
        <tr>
          <th className="py-1 px-1 w-5 text-start">#</th>
          <th className="py-2 px-4 w-40 text-start">Title</th>
          <th className="py-2 px-4 w-48 text-start">Artist</th>
          <th className="py-2 px-4 w-36 text-start">Album</th>
          <th className="py-2 px-4 w-24 text-start">Genre</th>
          <th className="py-2 px-4 w-32 text-start">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-1 px-1 ">1</td>
          <td className="py-2 px-4 ">Earth Song</td>
          <td className="py-2 px-4 ">Michael Jackson</td>
          <td className="py-2 px-4 ">-</td>
          <td className="py-2 px-4 ">Pop</td>
          <td className="py-2 px-4 ">
            <div className="flex justify-start items-center flex-row space-x-4">
              <button className="w-8 h-8 outline outline-slate-500 rounded-md hover:bg-slate-500">
                <i className="fas fa-pen-to-square text-sm text-sky-400"></i>
              </button>
              <button className="w-8 h-8 outline outline-slate-500 rounded-md text-center hover:bg-slate-500">
                <i className="fas fa-trash text-sm text-red-500"></i>
              </button>
            </div>
          </td>
        </tr>

        <tr>
          <td className="py-1 px-1 ">1</td>
          <td className="py-2 px-4 ">Earth Song</td>
          <td className="py-2 px-4 ">Michael Jackson</td>
          <td className="py-2 px-4 ">-</td>
          <td className="py-2 px-4 ">Pop</td>
        </tr>

        <tr>
          <td className="py-1 px-1 ">1</td>
          <td className="py-2 px-4 ">Earth Song</td>
          <td className="py-2 px-4 ">Michael Jackson</td>
          <td className="py-2 px-4 ">-</td>
          <td className="py-2 px-4 ">Pop</td>
        </tr>

        <tr>
          <td className="py-1 px-1 ">1</td>
          <td className="py-2 px-4 ">Earth Song</td>
          <td className="py-2 px-4 ">Michael Jackson</td>
          <td className="py-2 px-4 ">-</td>
          <td className="py-2 px-4 ">Pop</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Songs;
