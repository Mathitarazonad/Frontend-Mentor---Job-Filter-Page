import React from 'react'; 
import Job from './Job';
import data from '../data.json';

function JobList() {
  return(
    <div className='job-list'>
      {data.map( job => {
        return (<Job companyLogo={job.logo}
        companyName={job.company}
        isNew={job.new}
        isFeatured={job.featured}
        companyJob={job.role}
        post={job.postedAt}
        workTime={job.contract}
        jobLocation={job.location}
        jobLangs={job.languages}
        jobTools={job.tools} 
        key={job.id}
        id={job.id}/>)
        })
      } 
    </div>
  );
}

export default JobList;