import React from 'react';
import Popsec from '@/componets/page 3/popsec'
import Specials from '@/componets/page 3/specials'
import Hero from '@/componets/page 3/herosec'
import Headline from '@/componets/page 3/headline'
import Navbar from '@/app/navbar'

const Page = () => {
    return (
        <main>
            <Navbar/>
        <Headline/>
        <Popsec/>
        <Specials/>
        <Hero/>

        </main>
    );
}

export default Page;
