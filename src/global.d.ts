// Allow TypeScript to recognise CSS, SCSS etc module imports
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
