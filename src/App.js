import './App.css';
import React, { useState } from 'react';
import JobList from './components/JobList';
import TagFilter from './components/TagFilter';
import data from './data.json'
import { TbMoodSad } from 'react-icons/tb'

function App() {

  const [filterActive, setFilterActive] = useState(false);
  const [availableJobs, setAvailableJobs] = useState(data);
  const [selectedTags, setSelectedTags] = useState([]);

  function handleClearBtn () {
    setFilterActive(false);
    setSelectedTags([]);
  }

  function handleDeleteTag (tag) {
    let updatedSelectedTags = selectedTags.filter(selectedTag => selectedTag != tag);
    if (!updatedSelectedTags.length >= 1) {
      setSelectedTags(updatedSelectedTags);
      setFilterActive(false);
    } else {
      setSelectedTags(updatedSelectedTags)
    }
    
  }

  function addSelectedTag(tag) {
    if (!selectedTags.includes(tag)) {
      let updatedSelectedTags = [...selectedTags, tag];
      setSelectedTags(updatedSelectedTags);
      setFilterActive(true);
    }
  }

  return (
    <div className='App'>
      <div id='bg-header'>
        <img src='./images/bg-header-mobile.svg' alt='bg-img' className='mobile-bg'/>
        <img src='./images/bg-header-desktop.svg' alt='bg-img' className='desktop-bg'/>
      </div>
      {availableJobs.length >= 1 ? 
      <div className='main-container'>
        <TagFilter 
        selectedTags={selectedTags} filterActive={filterActive} 
        handleClearBtn={handleClearBtn}
        handleDeleteTag={handleDeleteTag} />
        <JobList filterActive={filterActive} 
        jobs={availableJobs}
        addSelectedTag={addSelectedTag} />
      </div> 
      :<div className='empty-jobs'>
        <h2>No Jobs Available!</h2>
        <TagFilter 
          selectedTags={['Frontend', 'CSS', 'JavaScript']} filterActive={filterActive}
          handleClearBtn={handleClearBtn} />
        <TbMoodSad className='empty-mood'/>
      </div>}
    </div>
  );
}

export default App;

//KeepCoding