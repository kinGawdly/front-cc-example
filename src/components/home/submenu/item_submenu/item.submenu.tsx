import { Link } from 'react-router-dom';
import './item.submenu.css';

interface SubMenuItemProps {
  to: string;
  src: string;
  alt: string;
  text: string;
}

export const SubMenuItemComponent = ({ to, src, alt, text }: SubMenuItemProps) => {
  return (
    <>
      <Link to={to}>
        <div className='flex flex-col items-center justify-center gap-2'>
          <img src={src} alt={alt} width={200} height={200} />
          <p className="text-3xl font-montserrat-alternates text-[#20338B] font-bold">{text}</p>
        </div>
      </Link>
    </>
  );
};
