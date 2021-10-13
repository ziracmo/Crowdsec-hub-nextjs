import { Disclosure } from '@headlessui/react';
import { ArchiveIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Collections', href: '#', current: true },
  { name: 'Configurations', href: '#', current: true },
  { name: 'Bouncers', href: '#', current: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="shadow bg-white">
      {() => (
        <>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
            <div className="h-16 aligner">
              <h1 className="text-center text-primary text-lg uppercase font-bold">
                Crowdsec - HUB
              </h1>
            </div>
            {router.pathname === '' || router.pathname === '#' ? (
              <div className="relative items-center">
                <div className="grid grid-cols-3 h-full w-full">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`aligner relative column direct font-bold uppercarse text-center ${classNames(
                        item.current
                          ? 'text-indigo-700'
                          : 'hover:text-indigo-500',
                        'px-3 py-2 text-sm font-medium'
                      )}`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <ArchiveIcon className="text-yellow-400 h-6" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
