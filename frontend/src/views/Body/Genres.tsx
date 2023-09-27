const Genres = () => {
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
          <th className="py-2 px-4 w-40 text-start">Name</th>
          <th className="py-2 px-4 w-48 text-start"># of Songs</th>
          <th className="py-2 px-4 w-32 text-start">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-1 px-1 ">1</td>
          <td className="py-2 px-4 ">Pop</td>
          <td className="py-2 px-4 ">-</td>
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
          <td className="py-1 px-1 ">2</td>
          <td className="py-2 px-4 ">Electronic</td>
          <td className="py-2 px-4 ">-</td>
        </tr>

        <tr>
          <td className="py-1 px-1 ">3</td>
          <td className="py-2 px-4 ">Soul</td>
          <td className="py-2 px-4 ">-</td>
        </tr>

        <tr>
          <td className="py-1 px-1 ">4</td>
          <td className="py-2 px-4 ">Jazz</td>
          <td className="py-2 px-4 ">-</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Genres;
