import restaurantLight from '@assets/images/restaurantLight.png';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-screen p-24'>
      <h3 className='flex items-center gap-2'>
        Food & Beverage
        <span>
          <Image src={restaurantLight} alt='restaurant icon' />
        </span>
        Analysis
      </h3>
      <section className='h-full w-full bg-gray-700 rounded-t-half relative'>
        <video muted loop autoPlay={true} preload='preload' className='w-full rounded-t-half'>
          <source type='video/mp4' src='restaurantFootage.mp4' />
        </video>
      </section>
    </main>
  );
}
