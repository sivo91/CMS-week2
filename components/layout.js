import Head from 'next/head';


export default function Layout( { children } ) {
  return (
    <div>
      <Head>
        <title>Week4 Basic-Full-Stack-App</title>
      </Head>
      <header>
        <nav>
           <h3 className="text-center mt-5">WordPress REST API</h3>
        </nav>
      </header>
      <main>{children}</main>
     
      {
        // style 
      }
        <style jsx>{`

        .footer p {
          position:absolute;
          bottom:0;
          width:200px;
          left:40%;
         } 
          
        `}</style>
    </div>
  );
}