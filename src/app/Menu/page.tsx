
import Navbar from '@/app/navbar'
import Headline from '@/componets/page 4/headline'
import Menu from '@/componets/page 4/menu'
import Popular from '@/componets/page 4/popular'
import Entree from '@/componets/page 4/entree'
import Swallow from '@/componets/page 4/swallow'




export default function Home() {
  return (
   <main >
    <Navbar/>
   <Headline/>
   <Menu/>
   <Popular/>
   <Entree/>
   <Swallow/>
   </main>
  );
}