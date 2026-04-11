// Type declaration for Vite path aliases that map figma:asset/* to static images
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

// Augment React.CSSProperties with experimental/non-standard CSS properties used in this project
declare module 'react' {
  interface CSSProperties {
    viewTransitionName?: string;
    contain?: string;
  }
}
