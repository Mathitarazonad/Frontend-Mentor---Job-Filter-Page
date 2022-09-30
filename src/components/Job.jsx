import React from 'react';

function Job (props) {
  return(
    <div className='job'>
      <div className='job-info-container'>
        <img src={props.companyLogo}></img>
        <div className='job-info'>
          <div className='job-header'>
            <h3>{props.companyName}</h3>
            <h4 className={isNew ? 'other-tags new-job' : 'other-tags'.trim()}>NEW!</h4>
            <h4 className={isFeatured ? 'other-tags featured-job' : 'other-tags'}>FEATURED</h4>
          </div>
          <h2 className='company-job'>{props.companyJob}</h2>
          <div className='job-details'>
            <h5>{props.post}</h5>
            <h5>{props.workTime}</h5>
            <h5>{props.jobLocation}</h5>
          </div>
        </div>
      </div>
      <div className='job-tags'>
        {props.jobLangs.map(lang => {
          <h3 className='tag'>{lang}</h3>
        })}
        {props.jobTools.map(tool => {
          <h3 className='tag'>{tool}</h3>
        })}
      </div>
    </div>
  );
}

export default Job;