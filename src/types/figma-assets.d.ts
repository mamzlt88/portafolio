// Type declaration for Vite path aliases that map figma:asset/* to static images
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}
