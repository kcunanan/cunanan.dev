export interface IPage {
  id: string;
  name: string;
  slug: string;
  data: {
    [key: string]: any;
  }
}