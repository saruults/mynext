import Head from 'next/head';
import SideNavbar from './SideNavbar';
import TopNavbar from './TopNavbar';
import Footer from './Footer';
const Layout = (props) => (
  <div>
    <Head>
      <title>GG.mn Мэдээ мэдээлэл, тоглоом, програм хангамж</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" rel="stylesheet"></link>
    </Head>
    <SideNavbar/>
    <TopNavbar/>
    <div className="container">
      {props.children}
      
      <Footer/>
    </div>
    
    <style jsx>
      {`
      .container{
        margin-left: 4rem;
        padding: 1rem;
      }
      @media only screen and (max-width: 600px) {
        .container{
          margin:0;
        }
      }
      `}
    </style>
  </div>
);

export default Layout;