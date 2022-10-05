import React from 'react';

function Job (props) {
  return(
    <div className={props.isFeatured ? 'job featured-job' : 'job'} id={props.id}>
      <img src={props.companyLogo} alt='company-logo' className='company-logo'></img>
      <div className='job-info'>
        <div className='job-header'>
          <h3 className='company-name'>{props.companyName}</h3>
          <div className=
          'other-tags' style={{display: props.isNew || props.isFeatured ? 'flex' : 'none'}}>
            <h4 
            className='new-job' 
            style={{display: props.isNew ? 'initial' : 'none'}}>
              NEW!
            </h4>
            <h4
              className='featured-job' 
              style={{display: props.isFeatured ? 'flex' : 'none'}}>
                FEATURED
            </h4>
          </div>
        </div>
        <h2 className='company-job'>{props.companyJob}</h2>
        <div className='job-details'>
          <h5>{props.post}</h5>
          <h5>{props.workTime}</h5>
          <h5>{props.jobLocation}</h5>
        </div>
      </div>
      <hr></hr>
      <div className='job-tags'>
        {props.jobLangs.map(lang => {
          return (<h3 className='tag'>{lang}</h3>)
        })}
        {props.jobTools.map(tool => {
          return (<h3 className='tag'>{tool}</h3>)
        })}
      </div>
    </div>
  );
}

export default Job;