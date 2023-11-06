export interface Item {
  id: number;
  title: string;
  text: string;
}

export const Menu: Item[] = [
  {
    id: 1,
    title: 'Home',
    text: 'Home',
  },
  {
    id: 2,
    title: 'About',
    text: 'About',
  },
  {
    id: 3,
    title: 'Contact',
    text: 'Contact',
  },
];
