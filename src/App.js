import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Journey from "./Journey";
import Contact from "./Contact";
import Blog from "./Blog";
import Portfolios from "./Portfolios";
import Home from "./Home";
import Main from "./Main";


function App() {
  const headerx = ["Home", "About", "Contact","Portfolios","Journey","Blog"];
  const [pageSelector, setPageSelector]=useState("Home")


  

  return (

     <>
      <Header setPageSelector={setPageSelector} head={headerx}></Header>
      {pageSelector=='Home'?<Home  image = {
      <img src="https://s3-alpha-sig.figma.com/img/2527/1f89/b420648cc0ce460437a0da116c04e1a5?Expires=1681084800&Signature=W1smiJ0iY2XAXAt9lfp7q3TwXHfQ7PFJcDx8QHZiS1uMc9hWXY5bhp5evFerIODFmlwdgCs5nzfr9yn3572oTttW5fJItq-cuW2hkQczd0Po0hr7B1tcPQ34jcyt-uo8J9Ohw5KLVY-CvKwHm0gihFTHf0l3bLD2YQz6qqnC8rTAxrxY9pHYjuRudMcE4QBFZacEcfaJaHHs8tWQarS481xrhxfM4aPn-AvvGXeQvCeVrzAsTPZ5dqer536nZKhx1XnbVr7MqqHp74vbx6y6-xvAlvgFYU38LI1jpxJP~LABs8mUJayl8JUGWnrNwk9h-VFvM~AesGZP438DRP58tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>}
      logo = {'Hey there 👋 I am Amirhossein'}
      text = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      about = {'About me'}
      protfolious = {'😮 Let’s see portfolios'}
      images = {<img src="https://s3-alpha-sig.figma.com/img/18b4/78a6/892cc9624eaf05dc1e8b043691ba93fe?Expires=1681084800&Signature=deigt8nEDYLcVVz1HoZxiOSO9-Pev1~8RePRm5XI8Dg17ocV7LTIhGBKsrX-9ZzVWhk9km1XEX2Oo~OFKg9xH4MsZD1N1j9eua6p3DnddQOmsvkW-AXnAtJs12c~2jmzzL23h9Y0N1qmeOlbHSGMc1h4cccZta1IXgdPpjkiUuSlHUNKp6LYgyLmTrVP0dQmjaQ96XI3zqlSLWA2y11RBgC-7LyXn3o0e7480bqOGUogdL62TDSThgsJnnHb5ytvWE7XRSmhZUM8aiXDL5GK5yjuNXrSEwbuunykxD8Xr6clItUUJ7Xkw4h0m4EUamDPJooSPh9WIx1bJcZ4EbSZiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>}
    />:''}
      {pageSelector=='About'?<Main/>:''}
      {pageSelector=='Portfolios'?<Portfolios/>:''}
      {pageSelector=='Contact'?<Contact/>:''}
      {pageSelector=='Blog'?<Blog/>:''}
      {pageSelector=='Journey'?<Journey/>:''}
      <Footer></Footer>
 
      </>
      

    
  );
}

export default App;
