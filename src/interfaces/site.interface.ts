import { IFlock, IPage } from "./";

export interface ISite {
  id: string;
  name: string;
  slug: string;
  pages: IPage[];
  flocks: IFlock[];
}
