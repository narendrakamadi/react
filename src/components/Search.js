
const Search = ({ searchText, onSearchChange, onTopRatedClick }) => {
    return (
        <section className="search-section">
            <input
                type="text"
                placeholder="Search restaurants..."
                value={searchText}
                onChange={onSearchChange}
            />
            <button className="filter-btn" onClick={onTopRatedClick}> ⭐ Top Rated </button>
        </section>
    );
}

export default Search;