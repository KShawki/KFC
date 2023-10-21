import Heading from './Heading';
import './bestseller.css';

const items = [
  { img: '/bs/KanttokCombo.jpeg', title: 'Kantook Combo' },
  { img: '/bs/ClassicBucket9Pcs.jpg', title: 'Classic Bucket (9 pcs)' },
  { img: '/bs/8PcFestive.jpg', title: '8 Pc Festive Bucket' },
  { img: '/bs/MightyZinger.jpeg', title: 'Mighty Zinger Sandwich' },
];

const Bestsellers = () => {
  return (
    <section>
      <Heading
        title='Bestsellers'
        img='/icons/best-sellers.png'
        viewAll='false'
      />
      <div className='productList'>
        {items.map((item, index) => (
          <a href='#' key={index}>
            <div>
              <img src={item.img} alt={item.title} />
              <div className='productListTitle'>{item.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Bestsellers;
