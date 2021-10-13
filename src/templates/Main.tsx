import { ReactNode } from 'react';

import Header from '../components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <Header />

    <div className="py-5 text-xl content">{props.children}</div>
  </div>
);

export { Main };
