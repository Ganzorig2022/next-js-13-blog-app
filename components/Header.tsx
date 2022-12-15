import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-2'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-full'
            src='https://scontent.fuln8-1.fna.fbcdn.net/v/t58.21685-6/99514553_831205887935821_7157786806899401604_n.png?stp=dst-png_p360x360&_nc_cat=108&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=sXpulZCwOloAX_y0cTo&_nc_ht=scontent.fuln8-1.fna&oh=00_AfDW3q5eENgf_CmYhW19l9dNrcVZ_o_aum87LieFnHuCSg&oe=639CC111'
            width={50}
            height={50}
            alt=''
          />
        </Link>
        <h1>The Ganzo</h1>
      </div>

      <div className='flex items-center space-x-2'>
        <Link
          href='/'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center'
        >
          Sign up to the Ganzo
        </Link>
      </div>
      <div></div>
    </header>
  );
};

export default Header;

//https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/271211165_4919949491389181_1775896725006190608_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lSXL20sDQyYAX8EpSi6&_nc_ht=scontent.fuln8-1.fna&oh=00_AfB8Er817NAUMphDyQqlWEiL41nkN7F06cGIryayJXIjSQ&oe=63A0CAF2
