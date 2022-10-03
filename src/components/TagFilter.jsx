import React from 'react';
import { useState } from 'react';

function TagFilter ( {selectedTags} ) {

  const [active, setActive] = useState(false);

  return (
    <div className={active ? 'filter-container filter-active' : 'filter-container'}>
      { selectedTags.map( tag => {
        return (<div className={'selected-tag-container'} id={tag} key={tag}> 
          <h4>{tag}</h4>
          <img src='./images/icon-remove.svg' alt='remove'/>
        </div>)
      }) }
    </div>
  );
}

export default TagFilter;