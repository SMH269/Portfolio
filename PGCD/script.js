// Fonction pour calculer le PGCD en utilisant l'algorithme d'Euclide
function calculerPGCD() {
  // Récupérer les valeurs des champs du formulaire
  var a = parseInt(document.getElementById("nombreA").value);
  var b = parseInt(document.getElementById("nombreB").value);

  // Vérifier si les valeurs sont des nombres valides
  if (isNaN(a) || isNaN(b)) {
    alert("Veuillez saisir des nombres valides.");
    return;
  }

  // Calculer le PGCD en appelant la fonction GetEuclidGCD
  var pgcd = GetEuclidGCD(a, b);

  // Afficher le résultat dans le label
  document.getElementById("resultatLabel").textContent =
    "Le PGCD est : " + pgcd;
}

// Fonction pour le calcul du PGCD en utilisant l'algorithme d'Euclide
function GetEuclidGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const rem = a % b;
    a = b;
    b = rem;
  }
  return a;
}
