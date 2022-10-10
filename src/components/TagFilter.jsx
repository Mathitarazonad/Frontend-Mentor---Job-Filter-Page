import React from 'react';

function TagFilter ({ selectedTags, filterActive, handleClearBtn, handleDeleteTag }) {

  return (
    <div className={filterActive ? 'filter-container filter-active' : 'filter-container'}>
      <div className='selected-tags'>
        { selectedTags.map( tag => {
        return (<div className={'tag-container'} id={tag} key={tag}> 
          <h4>{tag}</h4>
          <div className='tag-close' onClick={() => handleDeleteTag(tag)}>
            <img src='./images/icon-remove.svg' alt='remove'/>
          </div>
        </div>)
        }) }
      </div>
      <h4 id='clear-btn' onClick={() => handleClearBtn()}>Clear</h4>
    </div>
  );
}

export default TagFilter;