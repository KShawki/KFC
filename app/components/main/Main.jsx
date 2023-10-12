'use client';
import './main.css';

const Heading = (props) => {
  return (
    <div className='flex  title-container items-center justify-between'>
      <div className='title flex items-center jusitfy-between'>
        <h3>{props.title}</h3>
        <img src={props.img} alt='' />
      </div>
      {/*  */}
      <div className='view-all'>
        <h4>View All</h4>
        <img src='/icons/left-arrow.svg' alt='view all' color='#007aff' />
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <main className='container '>
      <Heading title='EXPLORE MENU' img='/icons/explore-menu.png' />
      <div className="media-grid border">
        <div className="mediaContainer">

        </div>
        <div className="pagination"></div>
      </div>
    </main>
  );
};

export default Main;
