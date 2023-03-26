import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";


function App() {
  const headerx = ["Home", "About", "Contact","Portfolios","Journey","Blog"];

  return (

     <>
      <Header head={headerx}></Header>
      <Main></Main>
      <Footer></Footer>
 
      </>
      

    
  );
}

export default App;
