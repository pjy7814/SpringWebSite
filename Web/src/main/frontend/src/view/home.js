import React, {  } from 'react';
import HeadMenu from './headMenu';
import Footer from './footer';
import styles from './Footer.module.css';

function Home() {
    return (

        <div>
            <HeadMenu />

            <main className={styles.main}>
                <h1>Home</h1>
            </main>

            <Footer />
        </div>
    )
}
export default Home;