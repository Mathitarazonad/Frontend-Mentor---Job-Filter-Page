import Job from './Job';
import React from 'react';

function JobList({ jobs, addSelectedTag }) {
  return(
    <div className='job-list'>
      {jobs.map( job => {
        return (<Job companyLogo={job.logo}
        companyName={job.company}
        isNew={job.new}
        isFeatured={job.featured}
        companyJob={job.position}
        post={job.postedAt}
        workTime={job.contract}
        jobLocation={job.location}
        jobRole={job.role}
        jobLevel={job.level}
        jobLangs={job.languages}
        jobTools={job.tools} 
        key={job.id}
        id={job.id}
        addSelectedTag={addSelectedTag}/>)})
      } 
    </div>
  );
}

export default JobList;