import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

export default function Home() {
  return (
    <div className='site'>
      <Head>
        <title>Sentius Digital Styleguide</title>
        <meta name="description" content="Sentius Digital Styleguide" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className='main'>
        <div className='container'>
          <h1>
            Welcome to Sentius Styleguide
          </h1>
        </div>
      </main>
    </div>
  )
}
