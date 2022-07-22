import { ICategory } from "../../services/types";

export class IFilter{
   category: string[] = [];
}

export interface Category extends ICategory{
  selected: boolean
}