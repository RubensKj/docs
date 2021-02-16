import { Documentation } from "../model/model";

export const resolveInitial = (): Documentation[] => {
  return [
    { id: '601f11008a9c9e63ed1d8e04', name: 'Docs Documentation', description: 'Documentation to Docs, from Get Starting to Advanced.' },
    { id: '546f1178af1cf67ae9108eef', name: 'Discord Documentation', description: 'Discord docs, learn how to built a server.' },
    { id: '873f119fc5613643dbcc1974', name: 'Whatsapp Docs', description: 'How to build a bot to whatsapp.' },
  ];
};

export const resolveInitialDocumentation = (id: string): Documentation => {
  return {
    id: '602b28a063bdc4ed90b4da9e',
    name: 'Getting Started',
    description: 'Get started using docs to documentate all your projects',
    pages: [
      {
        id: '602b2951de08466fce3aa453',
        title: 'Overview',
        content: 'Testing content',
      },
      {
        id: '602b298f9f2ea3521762eeb8',
        title: 'Starting',
        content: 'Starting with Docs',
      },
      {
        id: '602b29a4fd7d21b2bcfee199',
        title: 'Begin',
        content: 'Beginning createing a docs',
      }
    ]
  }
}