//import { colors } from "@mui/material";
import newsApi from "../../../api/newsApi";
import logo from "../../../images/logo.png";
const Head = () => {
  const news = newsApi.fetchNews();
  console.log("news", news);
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='ad'>
            <h1></h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head;