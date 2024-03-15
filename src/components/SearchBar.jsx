import { MdSearch } from "react-icons/md";

export function SearchBar() {
  return (
    <div className="border border-2 border-gray-400 rounded-xl inline-flex bg-slate-800 focus-within:border-purple-600">
      <div className="flex gap-1 items-center">
        <span className="p-2">
          <MdSearch />
        </span>
        <input
          className="bg-transparent outline-none"
          type="search"
          placeholder="Pesquisar"
        />
      </div>
      <button className="py-2 px-4 bg-slate-900 rounded-r-lg hover:bg-purple-600 cursor-pointer">
        <MdSearch />
      </button>
    </div>
  );
}
