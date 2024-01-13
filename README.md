# Slatelight-Website


function doRetainerThing(){
    const cards = document.querySelectorAll('.retainer-card');
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        // Increase the blur of the hovered card
        this.style.backdropFilter = 'blur(10px)';
        this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';

  
        // Reset the blur of all other cards
        cards.forEach(otherCard => {
          if (otherCard !== this) {
            otherCard.style.backdropFilter = 'blur(0px)';
            otherCard.style.opacity = '0.3';
          }
        });
      });
  
      card.addEventListener('mouseleave', function() {
        // Reset the gradient and opacity when the mouse leaves the card
        this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';
        cards.forEach(otherCard => {
          otherCard.style.opacity = '1';
        });
      });
    });
}

function doAddonThing(){
  const cards = document.querySelectorAll('.addons-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Increase the blur of the hovered card
      this.style.backdropFilter = 'blur(10px)';
      this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';


      // Reset the blur of all other cards
      cards.forEach(otherCard => {
        if (otherCard !== this) {
          otherCard.style.backdropFilter = 'blur(0px)';
          otherCard.style.opacity = '0.3';
        }
      });
    });

    card.addEventListener('mouseleave', function() {
      // Reset the gradient and opacity when the mouse leaves the card
      this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';
      cards.forEach(otherCard => {
        otherCard.style.opacity = '1';
      });
    });
  });
}