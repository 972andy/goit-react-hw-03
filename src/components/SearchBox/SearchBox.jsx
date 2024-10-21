import style from './SearchBox.module.css'

const SearchBox = ({ onSearch }) => {
   const handleChange = (event) => {
    const searchQuery = event.target.value;
    onSearch(searchQuery); // Виклик функції для пошуку
  };

  return (
    <div className={style.searchContainer}>
      <label className={style.searchLabel}>
        <span className={style.searchText}>Find contacts by name:</span>
        <input
          type="text"
          name="name"
        placeholder=""
        onChange={handleChange}
        />
      </label>
      
    </div>
  )
}

export default SearchBox