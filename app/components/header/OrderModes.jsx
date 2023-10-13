import './orderMenu.css';

const OrderMode = () => {
  const headerIcons = [
    {
      title: 'Delivery',
      img: '/icons/delivery_grey.png',
    },
    {
      title: 'Self-Pickup',
      img: '/icons/self_pickup_grey.png',
    },
    {
      title: 'Dine-in',
      img: '/icons/dine_in_grey.png',
    },
  ];

  return (
    <div className='orderModes flex'>
      {headerIcons.map((item, index) => (
        <button key={index} className='flex items-center'>
          <img src={item.img} alt={item.title} label={item.title} width={24} />
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  );
};

export default OrderMode;
