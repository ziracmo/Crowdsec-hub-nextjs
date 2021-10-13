import React from 'react';

import { ArrowLeftIcon } from '@heroicons/react/outline';
import { NextRouter, useRouter } from 'next/router';

import Skeletons from '../../components/Skeletons';
import { Meta } from '../../layout/Meta';
import { Collection } from '../../models/collections.model';
import CollectionsService from '../../services/collections';
import { Main } from '../../templates/Main';

type Props = {
  router: NextRouter;
};

type State = {
  collection?: Collection;
  loading: boolean;
};

class CollectionPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.getCollection();
  }

  private async getCollection() {
    const collection = (await CollectionsService.getProducts())[0];

    this.setState({
      ...this.state,
      collection,
      loading: false,
    });
  }

  render() {
    const { loading, collection } = this.state;
    const { router } = this.props;

    return (
      <Main
        meta={
          <Meta
            title="Collection - Detail"
            description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
          />
        }
      >
        <section className="container m-auto">
          {loading ? (
            <Skeletons />
          ) : (
            <div className="grid-cols-12 grid">
              <div className="col-span-2 aligner">
                <ArrowLeftIcon
                  className="h-6"
                  onClick={() => router.back()}
                ></ArrowLeftIcon>
              </div>
              <div className="col-span-10">
                <h1 className="text-primary uppercase text-lg font-bold truncate">
                  {collection?.description}
                </h1>
                <div className="text-sm m-0 truncate">
                  {collection?.description}
                </div>
              </div>
            </div>
          )}
        </section>
      </Main>
    );
  }
}

const Index = () => {
  const router = useRouter();
  return <CollectionPage router={router} />;
};

export default Index;
