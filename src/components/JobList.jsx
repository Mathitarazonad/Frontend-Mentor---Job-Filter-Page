import Job from './Job';
import data from '../data.json';
import React from 'react';

function JobList({ filterActive }) {
  return(
    <div className={filterActive ? 'job-list add-padding' : 'job-list'}>
      {data.map( job => {
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
        id={job.id} />)})
      } 
    </div>
  );
}

export default JobList;