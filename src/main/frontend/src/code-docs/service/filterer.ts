import { Documentation } from "../model/model";

export const FilterDocumentations = (doc: Documentation, filter: string): boolean | undefined => {
  const filterLower = filter.toLocaleLowerCase();

  return doc.name.toLocaleLowerCase().includes(filterLower) ||
    doc.description?.toLocaleLowerCase().includes(filterLower);
}