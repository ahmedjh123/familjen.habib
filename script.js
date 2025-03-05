// Funktion för att sätta rätt år i footern
document.addEventListener('DOMContentLoaded', function() {
  // Uppdatera årtal i footern
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Hantera bildladdning med fade-in effekt
  const mainImage = document.getElementById('main-image');
  if (mainImage) {
    // Skapa ett Image-objekt för att förladda bilden
    const img = new Image();
    img.src = mainImage.src;
    
    // När bilden har laddats, visa den med fade-in
    img.onload = function() {
      mainImage.style.opacity = '1';
    };
    
    // Fallback om bilden inte laddar inom 2 sekunder
    setTimeout(function() {
      mainImage.style.opacity = '1';
    }, 2000);
  }
});
