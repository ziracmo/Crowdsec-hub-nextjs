import React from 'react';

import { ArrowRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import { Collection } from '../models/collections.model';
import Tag from './Tag';

type State = {};
type Props = {
  collection: Collection;
};

export default class Card extends React.Component<Props, State> {
  render() {
    const { collection } = this.props;
    return (
      <Link href={`/collection/${collection.author}`} passHref={true}>
        <div className="p-4">
          <div className="p-6 relative rounded-lg shadow bg-white hover:shadow-lg duration-200 hover:cursor-pointer grid grid-cols-12 gap-3">
            <div className="flex-1 border-r-2 border-gray-500 col-span-2 aligner">
              <img
                className="block h-8 w-auto"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt={collection.author}
              />
            </div>
            <div className="col-span-8">
              <h3 className="text-base text-gray-900 font-medium title-font mb-1">
                {collection.description}
              </h3>
              <small className="text-sm">
                v{collection.version} by
                <a
                  className="underline text-primary"
                  href={`https://github.com/${collection.author}`}
                >
                  {collection.author}
                </a>
              </small>
              <p className="text-base m-0 truncate">{collection.description}</p>
              <div>
                <Tag name="collection" />
              </div>
            </div>
            <div className="center-arrow">
              <ArrowRightIcon></ArrowRightIcon>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
