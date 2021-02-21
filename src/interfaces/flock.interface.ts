export interface IFlock {
  id: string;
  name: string;
  slug: string;
  data: {
    [key: string]: any;
  }[];
}