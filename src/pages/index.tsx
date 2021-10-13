import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Skeletons from '../components/Skeletons';
import { Meta } from '../layout/Meta';
import { Collection } from '../models/collections.model';
import CollectionsService from '../services/collections';
import { Main } from '../templates/Main';

import 'swiper/css';

type Props = {};

type State = {
  collections: Collection[];
  filteredCollections: Collection[];
  loading: boolean;
};

export default class HomeSection extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      collections: [],
      filteredCollections: [],
      loading: true,
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.getCollections();
  }

  private async getCollections() {
    const collections = await CollectionsService.getProducts();

    this.setState({
      ...this.state,
      filteredCollections: collections,
      collections,
      loading: false,
    });
  }

  async search(value: string) {
    // Check if city is already existing before doing an API call
    const { collections } = this.state;
    if (value) {
      const filteredCollections = collections.filter(
        (collection) =>
          collection.description && collection.description.includes(value)
      );
      this.setState({
        ...this.state,
        filteredCollections,
      });
    } else {
      this.setState({
        ...this.state,
        filteredCollections: collections,
      });
    }
  }

  render() {
    const { filteredCollections, loading } = this.state;
    return (
      <Main
        meta={
          <Meta
            title="Collections"
            description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
          />
        }
      >
        <section className="container m-auto">
          <SearchBar searchQuery="" setSearchQuery={this.search} />
          {loading ? (
            <Skeletons></Skeletons>
          ) : (
            <Swiper spaceBetween={0} slidesPerView={1}>
              <SwiperSlide>
                <section>
                  {filteredCollections.map((collection, index) => (
                    <Card collection={collection} key={index} />
                  ))}
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section>
                  {filteredCollections.map((collection, index) => (
                    <Card collection={collection} key={index} />
                  ))}
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section>
                  {filteredCollections.map((collection, index) => (
                    <Card collection={collection} key={index} />
                  ))}
                </section>
              </SwiperSlide>
            </Swiper>
          )}
        </section>
      </Main>
    );
  }
}
