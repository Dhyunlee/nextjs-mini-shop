
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/components/Footer";
import Top from "../src/components/Top";

function MyApp({ Component, pageProps }) {
  console.log('모든 페이지는 여기 _app 페이지로 접속됨')
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;