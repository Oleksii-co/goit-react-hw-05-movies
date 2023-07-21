import PropTypes from 'prop-types';

import searchBarStyle from './SearchBar.module.css'

const SearchBar = ({ onSubmit, value, onChange }) => {
  return (
    <form onSubmit={onSubmit} className={searchBarStyle.form}>
      <input
        type="text"
        name="search"
        required
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
