


// pages/_app.js
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-animated">
      <Component {...pageProps} />
    </div>
  );
}
