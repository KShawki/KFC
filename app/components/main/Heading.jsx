'use client';
import './main.css';

const Heading = (props) => {
  return (
    <div className='flex  title-container items-center justify-between' style={{marginBottom: "12px"}}>
      <div className='title flex items-center jusitfy-between'>
        <h3>{props.title}</h3>
        <img src={props.img} alt='' />
      </div>
      {props.viewAll != 'false' && (
        <div className='view-all'>
          <h4>View All</h4>
          <img src='/icons/left-arrow.svg' alt='view all' color='#007aff' />
        </div>
      )}
    </div>
  );
};

export default Heading;
