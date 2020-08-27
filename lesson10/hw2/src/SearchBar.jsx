import React from 'react';

const SearchBar = ({filterText, inStockOnly, handleChange}) => 
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          name="filterText"
          onChange={handleChange}
        />
        <p>
          <input
            type="checkbox"
            // checked={inStockOnly}
            name="inStockOnly"
            onChange={handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>;

export default SearchBar