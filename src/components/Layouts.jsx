import Head from 'next/head';
import React from 'react';
import Header from './Header';
import GlobalState from '@/context';
import Hero from './Hero';

export default function Layouts() {
    return (
        <>
            <Head>
                <title>Giovenzana-Shop</title>
                <meta name="description" content="Продукция Giovenzana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GlobalState>
                <div className="flex min-h-screen flex-col justify-between">
                    <Header />
                    <Hero />
                    <main>Контент</main>
                    <footer>Футер</footer>
                </div>
            </GlobalState>
        </>
    );
}
