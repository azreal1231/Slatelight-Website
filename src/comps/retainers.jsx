import { useState, useEffect } from "react";
import { retainers } from "../utils/constants"

const RetainersComp = () => {
const [compMounted, setCompMounted] = useState(false)

useEffect(() => {
    if(!compMounted){
        setCompMounted(true)
        doRetainerThing()
    }
}, [compMounted])

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

return <>
<div className="row mb-4">
<h2 className="text-white text-center">Packages</h2>
    {retainers.map((_x, _index) => 
        <div className="col-12 col-md-6 col-lg-6 p-4" key={_index}>
            <div className="retainer-card">
                <h3>{_x['title']}</h3>
                <h5>{_x['sub_title']} | <span>{_x['amount']}</span></h5>
                <p>{_x['description']}</p>
            </div>
        </div>
    )}
</div>
</>
}

export default RetainersComp