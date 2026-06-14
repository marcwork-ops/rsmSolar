/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Apps Script Web App URL that receives quotation submissions. */
  readonly VITE_QUOTATION_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
