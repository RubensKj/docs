import { DocPage } from "../model/model";
import { resolveInitialDocumentation } from "./documentation-api";

export const getPageName = () => {
  return 'overview';
};

export const resolveCurrentPageByDocumentation = (documentationId: string, pageId: string): DocPage | undefined => {
  const documentation = resolveInitialDocumentation(documentationId);

  return documentation && (documentation.pages?.find(page => page.id === pageId));
}