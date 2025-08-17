/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: unknown;
  }
}

declare module "vite-plugin-eslint" {
  import {Plugin} from "vite";
  interface EslintOptions {
    exclude?: string[];
    failOnError?: boolean;
  }
  function eslint(options?: EslintOptions): Plugin;
  // eslint-disable-next-line no-restricted-exports
  export default eslint;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    // eslint-disable-next-line no-restricted-exports
    export default classes;
  }

declare module "*.scss";
declare module "*.css";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
