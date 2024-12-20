function SearchBar({ query, setQuery, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };
  return (
    <div className="flex items-center w-full md:w-1/2 bg-gray-100 rounded-md shadow-sm">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
