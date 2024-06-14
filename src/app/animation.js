import { gsap } from 'gsap';

export function randomlyMove(
  gants,
  gloveWidth,
  gloveHeight,
  screenWidth,
  screenHeight
) {
  const duration = 6;

  // Fonction pour calculer et lancer une nouvelle animation aléatoire
  function startNewAnimation() {
    // Définir les dimensions hors cadre
    const offScreenWidth = screenWidth + gloveWidth;
    const offScreenHeight = screenHeight + gloveHeight;
    let startingY, startingX, endY, endX;

    // Fonction utilitaire pour générer un nombre aléatoire dans une plage
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    // Sélectionner une direction aléatoire avec des probabilités égales
    const direction = Math.floor(Math.random() * 4);
    // const direction = 0;

    switch (direction) {
      case 0: // De Nord Ouest à Sud
        startingY = -randomInRange(gloveHeight, offScreenHeight + gloveHeight);
        startingX = -randomInRange(gloveWidth, offScreenWidth);
        endY = randomInRange(screenHeight, offScreenHeight);
        endX = randomInRange(screenWidth, offScreenWidth);
        console.log('case 0');

        break;

      case 1: // De Sud-Est à Nord-Ouest
        startingY = randomInRange(screenHeight, offScreenHeight);
        startingX = randomInRange(screenWidth, offScreenWidth);
        endY = -randomInRange(gloveHeight, offScreenHeight);
        endX = -randomInRange(gloveWidth, offScreenWidth);
        console.log('case 1');

        break;

      case 2: // De Nord-Est à Sud-Ouest
        startingY = -randomInRange(
          gloveHeight,
          offScreenHeight + gloveHeight * 2
        );
        startingX = randomInRange(screenWidth, offScreenWidth);
        endY = randomInRange(screenHeight + screenHeight / 2, offScreenHeight);
        endX = -randomInRange(gloveWidth, offScreenWidth + offScreenWidth / 2);
        console.log('case 2');
        // console.log(
        //   'startingX',
        //   startingX,
        //   'startingY',
        //   startingY,
        //   'endX',
        //   endX,
        //   'endY',
        //   endY
        // );

        break;

      case 3: // De Sud-Ouest à Nord-Est
        startingY = randomInRange(screenHeight, offScreenHeight);
        startingX = -randomInRange(gloveWidth, offScreenWidth * 2);
        endY = -randomInRange(gloveHeight, offScreenHeight * 2);
        endX = randomInRange(screenWidth, offScreenWidth);
        console.log('case 3');
        break;
    }

    gsap.fromTo(
      gants,
      { y: startingY, x: startingX },
      {
        y: endY,
        x: endX,
        duration: duration,
        ease: 'linear',
        onComplete: startNewAnimation, // Lancer une nouvelle animation à la fin de celle-ci
      }
    );
  }

  // Démarrer la première animation
  startNewAnimation();
}
