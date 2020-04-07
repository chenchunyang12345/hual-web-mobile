import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Layout = ({ children, title = '华来知识' }) => {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
