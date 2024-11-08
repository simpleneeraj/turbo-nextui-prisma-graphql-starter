import NextImage from 'next/image';
import { Card, CardBody, CardFooter, Divider, Link, Image } from '@app/ui';

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? 'blur-[32px]' : 'blur-[75px]'
      } ${conic ? 'bg-glow-conic' : ''} ${className}`}
    />
  );
}

const LINKS = [
  {
    title: 'Docs',
    href: 'https://turbo.build/repo/docs',
    description: 'Find in-depth information about Turborepo features and API.',
  },
  {
    title: 'Learn',
    href: 'https://turbo.build/repo/docs/handbook',
    description: 'Learn more about monorepos with our handbook.',
  },
  {
    title: 'Template',
    href: 'https://github.com/simpleneeraj/turbo-nextui-prisma-graphql-starter',
    description: 'Select this example and deploy with a single click.',
  },
  {
    title: 'Deploy',
    href: 'https://vercel.com/new',
    description:
      'Instantly deploy your Turborepo to a shareable URL with Vercel.',
  },
];

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          Using Tailwind CSS and NextUI for styling.
        </p>
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By{' '}
            <Image
              as={NextImage}
              alt="Vercel Logo"
              className="invert"
              height={24}
              priority
              src="/vercel.svg"
              width={100}
              radius="none"
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center ">
        <div className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0">
          <div className="z-50 flex items-center justify-center w-full">
            <div className="absolute min-w-[614px] min-h-[614px]">
              <Image
                alt="Turborepo"
                height={614}
                src="circles.svg"
                width={614}
              />
            </div>
            <div className="absolute z-50 flex items-center justify-center w-64 h-64">
              <Gradient
                className="opacity-90 w-[120px] h-[120px]"
                conic
                small
              />
            </div>

            <div className="w-[120px] h-[120px] z-50">
              <Image
                // as={NextImage}
                alt="Next UI logo"
                height={120}
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={120}
              />
            </div>
          </div>
          <Gradient
            className="top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]"
            conic
          />
        </div>
      </div>
      <div className="grid mb-32 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 gap-3">
        {LINKS.map((item) => (
          <Card
            isHoverable
            isPressable
            className="bg-opacity-50 hover:bg-opacity-90 backdrop-blur saturate-100"
          >
            <CardBody>
              <p className="text-center text-default-500">{item.description}</p>
            </CardBody>
            <Divider className="opacity-30" />
            <CardFooter className="justify-center gap-3">
              <Link isExternal showAnchorIcon href={item.href}>
                {item.title}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
