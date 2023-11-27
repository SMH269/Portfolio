const ImageSlide = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image51",
  "image52",
  "image53",
  "image54",
];
const DescSlide = [
  "« C’EST AU PIED DU MUR QU’ON VOIT LE MAÇON. »",
  "« QUAND LE CHAT N'EST PAS LÀ, LES SOURIS DANSENT. »",
  "« ON NE FAIT PAS D'OMELETTE SANS CASSER DES ŒUFS. »",
  "image4",
  "image5",
  "image51",
  "image52",
  "image53",
  "image54",
];
let Nb = 0;

function ChangerImage(sens) {
  Nb = sens + Nb;
  if (Nb > ImageSlide.length - 1) {
    Nb = 0;
  }
  if (Nb < 0) {
    Nb = ImageSlide.length - 1;
  }

  // Faire disparaître l'image en réglant l'opacité à 0
  document.getElementById("slide").style.opacity = 0;
  document.getElementById("desc").style.opacity = 0;
  // Charger l'image de fond
  const backgroundImage = new Image();
  backgroundImage.src = `image/${ImageSlide[Nb]}.jpg`;
  backgroundImage.onload = () => {
    // Une fois que l'image de fond est chargée, déclencher la transition
    document.body.style.backgroundImage = `url(${backgroundImage.src})`;
    setTimeout(() => {
      document.getElementById("slide").src = backgroundImage.src;
      // Changer l'image et les informations associées
      document.getElementById("desc").textContent = `${DescSlide[Nb]}`;

      // Faire réapparaître l'image en réglant l'opacité à 1
      document.getElementById("desc").style.opacity = 1;
      document.getElementById("slide").style.opacity = 1;
    }, 300); // Délai en millisecondes pour la transition
  };
}
//dff
