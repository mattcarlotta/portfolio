/* istanbul ignore file */
/* eslint-disable */
export {};

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: any;
      navigator: any;
      React: any;
    }

    interface Document {
      documentMode?: any;
    }
  }
}
/* eslint-enable */
