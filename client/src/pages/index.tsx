import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Infographic from '../components/Homepage/Infographic';
import Main from '../components/Homepage/Main';


export default function Home() {
  return (
    <>
      <Nav></Nav>
      <Main></Main>
      <Infographic></Infographic>
      <Footer></Footer>
    </>
  )
}