import { useState, useEffect } from "react";
import { addons } from "../utils/constants"

const AddonsComp = () => {
const [compMounted, setCompMounted] = useState(false)

useEffect(() => {
    if(!compMounted){
        setCompMounted(true)
        doAddonThing()
    }
}, [compMounted])

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

return <>
<div className="row d-flex justify-content-center">
    <h4 className="text-white text-center" id="addons">Addons</h4>
    {addons.map((_x, _index) => 
        <div className="col-lg-3 col-md-6 col-sm-12 p-2" key={_index}>
            <div className="addons-card">
                <h4>{_x['title']}</h4>
                <h6><span className="opacity-75">{_x['sub_title']}</span> | <span>{_x['amount']}</span></h6>
                <small className="opacity-50">{_x['description']}</small>
            </div>
        </div>
    )}
</div>
</>
}

export default AddonsComp