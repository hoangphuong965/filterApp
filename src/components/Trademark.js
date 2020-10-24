import React from 'react';

const Trademark = ({ allTrademark, filterItems }) => {
  return (
    <div>
      {allTrademark.map((item, index) => {
        return (
          <button
            key={index}
            className='ui secondary basic button'
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Trademark;
