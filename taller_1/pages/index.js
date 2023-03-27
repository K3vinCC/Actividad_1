
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home({ animeData }) {
//   console.log(animeData)
//     return (
//       <div>
//         <p>hola</p>
//         <h1>{animeData.mal_id}</h1>
//         <img src={animeData.image_url} alt={animeData.title} />
//       </div>
//     );
// }
// export async function getStaticProps() {
//   const res = await fetch('https://api.jikan.moe/v4/anime/');
//   const animeData = await res.json();

//   return {
//     props: {
//       animeData
//     }
    
//   }
// }





import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ animeData }) {
  console.log(animeData)
    return (
      <div>
        {
          animeData.data.map(gam => (
            <div key={gam.mal_id}>

              <h1>{gam.title}</h1>
              <img src={gam.images.web} alt=""/>
              <h3>Synopsis</h3>
              <p>{gam.synopsis}</p>
            </div>


          ))
        }
      </div>
    );
}
export async function getStaticProps() {
  const res = await fetch('https://api.jikan.moe/v4/anime');
  const animeData = await res.json();

  return {
    props: {
      animeData
    }
    
  }
}
