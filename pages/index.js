import { NextSeo } from 'next-seo';

import { About, Portfolio } from '../components';

export default function Home() {
  const about = {
    job: 'Frontend Developer',
    name: 'Sarah Parker',
    photo: '/images/sarah-parker.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo amet scelerisque venenatis nunc placerat gravida. Eleifend natoque massa integer nam senectus at. Egestas dis feugiat viverra non eget aliquam a augue pretium.',
    techStack: ['TypeScript', 'React', 'Vue', 'Tailwind CSS'],
    quickLinks: [
      {
        text: 'GitHub',
        url: 'https://github.com',
      },
      {
        text: 'Dribbble',
        url: 'https://dribbble.com',
      },
      {
        text: 'LinkedIn',
        url: 'https://linkedin.com',
      },
      {
        text: 'Twitter',
        url: 'https://twitter.com',
      },
    ],
  };

  const portfolioItems = [
    {
      title: 'Doree',
      color: 'bg-blue-one',
      logo: '/logos/doree.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nulla nisl accumsan quis quis tortor. Cursus amet et, quis ipsum pulvinar a, iaculis proin. Consequat, felis arcu mi urna, mauris, tempor est ultrices tempor. Erat id nunc sit varius.',
      techStack: ['TypeScript', 'React', 'Tailwind CSS'],
      quickLinks: [
        {
          text: 'GitHub',
          url: 'https://github.com',
          color: 'text-blue-one',
          hoverColor: 'hover:text-blue-two',
        },
        {
          text: 'Live site',
          url: 'https://skillthrive.com',
          color: 'text-blue-one',
          hoverColor: 'hover:text-blue-two',
        },
      ],
    },
    {
      title: 'PortFlex',
      color: 'bg-purple-one',
      logo: '/logos/portflex.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nulla nisl accumsan quis quis tortor. Cursus amet et, quis ipsum pulvinar a, iaculis proin. Consequat, felis arcu mi urna, mauris, tempor est ultrices tempor. Erat id nunc sit varius.',
      techStack: ['TypeScript', 'Next.js', 'Styled Components'],
      quickLinks: [
        {
          text: 'GitHub',
          url: 'https://github.com',
          color: 'text-purple-one',
          hoverColor: 'hover:text-purple-two',
        },
        {
          text: 'Live site',
          url: 'https://skillthrive.com',
          color: 'text-purple-one',
          hoverColor: 'hover:text-purple-two',
        },
      ],
    },
    {
      title: 'SharpEye',
      color: 'bg-rose-one',
      logo: '/logos/sharpeye.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nulla nisl accumsan quis quis tortor. Cursus amet et, quis ipsum pulvinar a, iaculis proin. Consequat, felis arcu mi urna, mauris, tempor est ultrices tempor. Erat id nunc sit varius.',
      techStack: ['TypeScript', 'Vue', 'Sass'],
      quickLinks: [
        {
          text: 'GitHub',
          url: 'https://github.com',
          color: 'text-rose-one',
          hoverColor: 'hover:text-rose-two',
        },
        {
          text: 'Live site',
          url: 'https://skillthrive.com',
          color: 'text-rose-one',
          hoverColor: 'hover:text-rose-two',
        },
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title='Sarah Parker | Frontend Developer'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud.'
      />
      <main className='p-0 lg:px-20 lg:py-32'>
        <About about={about} />
        {portfolioItems.map((portfolioItem) => (
          <Portfolio key={portfolioItem.title} portfolioItem={portfolioItem} />
        ))}
      </main>
    </>
  );
}
