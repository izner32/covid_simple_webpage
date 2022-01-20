import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


export default function Home() {
  return (
    <>
      <Nav></Nav>
      <section className="">
        <div className="w-[75%] p-8 pl-20">
          <h1 className="font-bold mb-8">What is covid-19?</h1>
          <p className="font-light mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat! Quod molestiae consequatur harum ad ex facilis unde officiis nam!</p>
          <button className="bg-blue-500 text-white py-1 w-[9rem] rounded-full hover:bg-blue-500">View full details</button>
        </div>
        <div
					className="w-full"
					style={{  
							backgroundImage: "url(" + "https://i.ibb.co/fYhvrfk/Group-1000001766.png" + ")",
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
					}}
				></div>
      </section>
      <section>
        <div>
          <h1>How did coronavirus started?</h1>
          <div>
            {/* <Image></Image> */}
            <p>Name</p>
            <p>subtitle</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat necessitatibus harum veniam doloremque maiores distinctio voluptatibus deleniti animi molestias. Distinctio non porro laboriosam voluptatem eos quia dicta aliquid, libero accusantium ad dolores iste alias rerum deserunt quidem eaque doloremque tempora? Numquam architecto facilis nesciunt at, unde aliquid animi. Id.</p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}