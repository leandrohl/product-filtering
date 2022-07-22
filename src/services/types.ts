export interface IProduct {
  id: string;
  category: ICategory;
  images: IImage[];
  name: string;
  shortDescription: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IImage {
  alt: string;
  src: string;
}