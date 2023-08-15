import React, { useState } from 'react';
import { Image, Icon, Container, Card } from 'semantic-ui-react';

export const ImageSliderComponent = ({ images }) => {
    const containsImages = (images && images.length>0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleSwipeLeft = () => { 
        if (images.length > 1) { 
            setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1 ); 
        }
    };

    const handleSwipeRight = () => { 
        if (images.length > 1) { 
            setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1 ); 
        }
    };
return (
    <>{(containsImages)? (
         <div class="ui horizontal segments" style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="angle left" onClick={handleSwipeLeft} disabled={(images.length === 1)? true : false} style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}/> 
                <Card style={{height:'230px', width:'170px', alignItems: 'center', justifyContent: 'center'}}>            
                    <img src={`${images[currentImageIndex].uri}`} style={{maxHeight:'230px', maxWidth:'170px', alignItems: 'center', justifyContent: 'center'}}/> 
                </Card>
            <Icon name="angle right" onClick={handleSwipeRight} disabled={(images.length === 1)? true : false}/>     
        </div>) 
        : ( 
            <div class="ui horizontal segments" style={{alignItems: 'center', justifyContent: 'center'}}>
                <Card style={{height:'258px', width:'170px', alignItems: 'center', justifyContent: 'center'}}>No photos available</Card>
            </div>
         )} </>
    );
};