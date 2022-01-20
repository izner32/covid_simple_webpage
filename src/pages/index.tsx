import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Infographic from '../components/Homepage/Infographic';
import Main from '../components/Homepage/Main';


export default function Home() {
  return (
    <>
      <Head>
        <title>Covid-19</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav></Nav>
      <Main></Main>
      <Infographic></Infographic>
      <Footer></Footer>
    </>
  )
}