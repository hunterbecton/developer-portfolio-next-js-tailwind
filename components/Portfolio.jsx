import Image from 'next/image';

import { classNames } from '../utils';

export const Portfolio = ({ portfolioItem }) => {
  return (
    <section className='max-w-7xl mx-auto bg-neutral-nine'>
      <header
        className={classNames(
          portfolioItem.color ? portfolioItem.color : 'bg-blue-one',
          'flex justify-between items-end p-6 md:px-16 md:pt-16 md:pb-8 lg:px-20 lg:pt-20 lg:pb-10'
        )}
      >
        <h3 className='text-neutral-one font-mono text-headline-base md:text-headline-xl lg:text-headline-2xl'>
          {portfolioItem.title}
        </h3>
        <div className='bg-neutral-ten p-6 md:p-10'>
          <div className='relative w-12 h-12 md:h-16 md:w-16'>
            <Image
              src={portfolioItem.logo}
              alt={portfolioItem.title}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </header>
      <div className='py-8 px-6 md:p-16 lg:p-20'>
        <div className='flex flex-wrap gap-8'>
          <div className='basis-full lg:basis-[32rem]'>
            <h3 className='mb-2 md:mb-4 text-neutral-one text-subtitle-sm md:text-subtitle-base uppercase'>
              Description
            </h3>
            <p className='text-neutral-four text-paragraph-sm md:text-paragraph-base'>
              {portfolioItem.description}
            </p>
          </div>
          <div className='basis-full lg:flex-auto'>
            <h3 className='mb-2 md:mb-4 text-neutral-one text-subtitle-sm md:text-subtitle-base uppercase'>
              Tech Stack
            </h3>
            <ul className='text-neutral-four flex flex-col gap-1 list-none text-paragraph-sm md:text-paragraph-base'>
              {portfolioItem.techStack.map((techStackItem) => (
                <li key={techStackItem}>{techStackItem}</li>
              ))}
            </ul>
          </div>
          <div className='basis-full lg:flex-auto'>
            <h3 className='mb-2 md:mb-4 text-neutral-one text-subtitle-sm md:text-subtitle-base uppercase'>
              Quick Links
            </h3>
            <ul className='flex flex-col gap-1 list-none text-paragraph-sm md:text-paragraph-base'>
              {portfolioItem.quickLinks.map((quickLink) => (
                <li key={quickLink.text}>
                  <a
                    href={quickLink.url}
                    className={classNames(
                      quickLink.color ? quickLink.color : 'text-blue-one',
                      quickLink.hoverColor
                        ? quickLink.hoverColor
                        : 'hover:text-blue-two',
                      'no-underline hover:underline'
                    )}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {quickLink.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
