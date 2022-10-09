import Image from 'next/image';

export const About = ({ about }) => {
  return (
    <section className='max-w-7xl mx-auto bg-neutral-nine py-8 px-6 md:p-16 lg:p-20'>
      <header className='mb-8 md:mb-16 flex md:flex-row flex-col md:items-end gap-4 md:gap-8'>
        <div className='relative w-24 h-24 md:h-32 md:w-32'>
          <Image
            src={about.photo}
            alt={about.name}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='mb-1 md:mb-2 text-subtitle-sm md:text-subtitle-base text-neutral-five uppercase'>
            {about.job}
          </h1>
          <h2 className='font-mono text-headline-xl md:text-headline-2xl lg:text-headline-3xl text-neutral-one'>
            {about.name}
          </h2>
        </div>
      </header>
      <div className='flex flex-wrap gap-8'>
        <div className='basis-full lg:basis-[32rem]'>
          <h3 className='mb-2 md:mb-4 text-neutral-one text-subtitle-sm md:text-subtitle-base uppercase'>
            About
          </h3>
          <p className='text-neutral-four text-paragraph-sm md:text-paragraph-base'>
            {about.description}
          </p>
        </div>
        <div className='basis-full lg:flex-auto'>
          <h3 className='mb-2 md:mb-4 text-neutral-one text-subtitle-sm md:text-subtitle-base uppercase'>
            Tech Stack
          </h3>
          <ul className='text-neutral-four flex flex-col gap-1 list-none text-paragraph-sm md:text-paragraph-base'>
            {about.techStack.map((techStackItem) => (
              <li key={techStackItem}>{techStackItem}</li>
            ))}
          </ul>
        </div>
        <div className='basis-full lg:flex-auto'>
          <h3 className='mb-2 md:mb-4 text-neutral-one text-subtitle-sm md:text-subtitle-base uppercase'>
            Quick Links
          </h3>
          <ul className='text-yellow-one flex flex-col gap-1 list-none text-paragraph-sm md:text-paragraph-base'>
            {about.quickLinks.map((quickLink) => (
              <li key={quickLink.text}>
                <a
                  href={quickLink.url}
                  className='no-underline hover:text-yellow-two hover:underline'
                  target='_blank'
                >
                  {quickLink.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
