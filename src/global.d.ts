declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }

  
  interface Window {
  gtag?: (...args: unknown[]) => void;
}