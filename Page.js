
import Head from 'next/head';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Chat App</title>
      </Head>
      <main>
        <h1>Chat App</h1>
        <Chat />
      </main>
    </div>
  );
};

export default Home;
