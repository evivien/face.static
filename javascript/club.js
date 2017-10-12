var linkEntreprise = document.getElementById('link-entreprise');
var linkFinanceurs = document.getElementById('link-financeurs');
var linkGouvernance = document.getElementById('link-gouvernance');
var linkEquipe = document.getElementById('link-equipe');
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// partie entreprise
btn1.onclick = function() {
  if (linkEntreprise.style.opacity != 1) {
    linkEntreprise.style.display = "block";
    linkFinanceurs.style.opacity = "none";
    linkGouvernance.style.opacity = "none";
    linkEquipe.style.opacity = "none";
    linkEntreprise.style.opacity = 1;
    linkFinanceurs.style.opacity = 0;
    linkGouvernance.style.opacity = 0;
    linkEquipe.style.opacity = 0;
  } else {
    linkEntreprise.style.display = "none";
    linkEntreprise.style.opacity = 0;
  }
};

// partie financeurs
btn2.onclick = function() {
  if (linkFinanceurs.style.opacity != 1) {
    linkEntreprise.style.display = "none";
    linkFinanceurs.style.display = "block";
    linkGouvernance.style.display = "none";
    linkEquipe.style.display = "none";
    linkEntreprise.style.opacity = 0;
    linkFinanceurs.style.opacity = 1;
    linkGouvernance.style.opacity = 0;
    linkEquipe.style.opacity = 0;
  } else {
    linkFinanceurs.style.display = "none";
    linkFinanceurs.style.opacity = 0;
  }
};

// partie gouvernance
btn3.onclick = function() {
  if (linkGouvernance.style.opacity != 1) {
    linkEntreprise.style.display = "none";
    linkFinanceurs.style.display = "none";
    linkGouvernance.style.display = "block";
    linkEquipe.style.display = "none";
    linkEntreprise.style.opacity = 0;
    linkFinanceurs.style.opacity = 0;
    linkGouvernance.style.opacity = 1;
    linkEquipe.style.opacity = 0;
  } else {
    linkGouvernance.style.display = "none";
    linkGouvernance.style.opacity = 0;
  }
};

// partie équipe
btn4.onclick = function() {
  if (linkEquipe.style.opacity != 1) {
    linkEntreprise.style.display = "none";
    linkFinanceurs.style.display = "none";
    linkGouvernance.style.display = "none";
    linkEquipe.style.display = "block";
    linkEntreprise.style.opacity = 0;
    linkFinanceurs.style.opacity = 0;
    linkGouvernance.style.opacity = 0;
    linkEquipe.style.opacity = 1;
  } else {
    linkEquipe.style.display = "none";
    linkEquipe.style.opacity = 0;
  }
};
