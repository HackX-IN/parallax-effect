export interface DataItem {
  id: number;
  image: any; // You might want to replace 'any' with a more specific type based on the actual type of the 'image' property
}

export const Data: DataItem[] = [
  {
    id: 1,
    image: require('../assets/images/val.webp')
  },
  {
    id: 2,
    image: require('../assets/images/2.jpeg')
  },
  {
    id: 3,
    image: require('../assets/images/4.jpeg')
  },
  {
    id: 4,
    image: require('../assets/images/3.jpeg')
  },
 
 
];
