'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { randomlyMove } from './animation.js';

export default function Home() {
  const gant1 = useRef(null);
  const gant2 = useRef(null);
  const gant3 = useRef(null);
  const gant4 = useRef(null);
  const gant5 = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    setTimeout(() => {
      randomlyMove(gant1.current, 372, 480, screenWidth, screenHeight);
    }, 500); // Commence après 1 seconde

    setTimeout(() => {
      randomlyMove(gant2.current, 372, 480, screenWidth, screenHeight);
    }, 1000); // Commence après 2 secondes

    setTimeout(() => {
      randomlyMove(gant3.current, 372, 480, screenWidth, screenHeight);
    }, 1500); // Commence après 3 secondes

    setTimeout(() => {
      randomlyMove(gant4.current, 372, 480, screenWidth, screenHeight);
    }, 2000); // Commence après 4 secondes

    setTimeout(() => {
      randomlyMove(gant5.current, 372, 480, screenWidth, screenHeight);
    });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.textWrapper}>
        <div className={styles.description}>ok</div>
        <div className={styles.baseline}>d'accord</div>
        {/* <div ref={gant}> */}
        <Image
          className={styles.gants}
          src='/gants.png'
          alt='gants de Xavier'
          width={372}
          height={480}
          priority
          ref={gant1}
        />
        <Image
          className={styles.gants}
          src='/gants.png'
          alt='gants de Xavier'
          width={372}
          height={480}
          priority
          ref={gant2}
        />
        <Image
          className={styles.gants}
          src='/gants.png'
          alt='gants de Xavier'
          width={372}
          height={480}
          priority
          ref={gant3}
        />
        <Image
          className={styles.gants}
          src='/gants.png'
          alt='gants de Xavier'
          width={372}
          height={480}
          priority
          ref={gant4}
        />
        <Image
          className={styles.gants}
          src='/gants.png'
          alt='gants de Xavier'
          width={372}
          height={480}
          priority
          ref={gant5}
        />
        {/* </div> */}
      </div>
    </main>
  );
}
