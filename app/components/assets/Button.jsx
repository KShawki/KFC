'use client';
import Link from 'next/link';

const Button = ({ href, title, alt, img, index }) => {
  return (
    <div key={index}>
      <Link href={href}>
        <button className='flex items-center justify-center border-[2.5px] rounded-xl px-[6px] py-1.5'>
          {img !== 'none' && (
            <img src={img} alt={alt} width={30} className='mr-[1px]' />
          )}
          <div className='font-medium text-[1.2rem] text-gray-500'>{title}</div>
        </button>
      </Link>
    </div>
  );
};

export default Button;
