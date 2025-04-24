import WrapperContext from "@/GlobalContext";

export default function App({ Component, pageProps }) {
  return (
    <WrapperContext>
      <Component {...pageProps} />
    </WrapperContext>
  );
}
