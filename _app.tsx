// pages/_app.tsx
import { AppProps } from 'next/app';  // Importing AppProps from Next.js
import '../styles/globals.css';        // Importing global CSS file

// Function to render each page component
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />; // Rendering the page component with its props
}

export default MyApp;
