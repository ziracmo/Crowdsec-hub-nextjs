import axios from 'axios';

import {
  Collection,
  CollectionResponse,
  CollectionsData,
} from '../models/collections.model';
import { environnement } from '../utils/environnement';

const base64ToObject = (value: string): any => {
  const base64ToString = Buffer.from(value, 'base64').toString();
  return JSON.parse(base64ToString);
};

const base64ToString = (value: string): string => {
  return Buffer.from(value, 'base64').toString();
};

const CollectionsService = {
  async getProducts(): Promise<Collection[]> {
    // Get the collections data from github
    const { data } = await axios.get<CollectionResponse>(
      `${environnement.url}repos/crowdsecurity/hub/contents/.index.json?ref=master`
    );

    // Get data from response content
    const collectionsData: CollectionsData = base64ToObject(data.content);

    const collections: Collection[] = [];

    Object.keys(collectionsData.collections).forEach((key) => {
      const collection: Collection = (collectionsData.collections as any)[key];
      // Extract base 64 long description
      collection.long_description = collection.long_description
        ? base64ToString(collection.long_description)
        : '';
      // Extract base 64 content
      collection.content = collection.content
        ? base64ToString(collection.content)
        : collection.content;
      // Add collection to our list
      collections.push(collection);
    });

    return collections;
  },
};

export default CollectionsService;
