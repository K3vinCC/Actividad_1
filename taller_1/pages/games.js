import { Inter } from 'next/font/google';
import { useState } from 'react';
import IndexPage from '../pages/index';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] });

export default function Home({ initialAnime }) {
  const [anime, setAnime] = useState(initialAnime);
  const [visibleGames, setVisibleGames] = useState(10);

  const loadMore = () => {
    setVisibleGames(visibleGames + 10);
  };

  return (
    <div>
      <section>
        <h1>GameXperience</h1>
        <h4>"Tu biblioteca de videojuegos"</h4>
        <Link href="/">
        <button>Volver</button>
        </Link>
      </section>
      {anime.slice(0, visibleGames).map((gam) => (
        <div key={gam.id}>
          <h1>{gam.title}</h1>
          <img src={gam.thumbnail} alt=""/>
          <h3>Description</h3>
          <p>{gam.short_description}</p>
          <a href ={gam.game_url}>{gam.game_url}</a>
        </div>
      ))}
      {anime.length > visibleGames && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  ); 
}

export const getServerSideProps = async (context)=> {
  const res = await fetch('https://www.freetogame.com/api/games');
  const anime = await res.json();

  return {
    props: {initialAnime: anime}
  }
}