import React from 'react';

function Rating({ratingValue,value}) {
    const ratingStars = [1,2,3,4,5];
    const ratingJokes = ["😒","😐","🤨","😁","🤣"]
    return (  
        <div>
        
        {ratingValue === "smiley" ?
            <div>{ratingJokes.map((joke,index) =>(
                index+1 === value ? <span key={joke.toString()}>{joke}</span> : null
            ))}
            </div>
        :
            <div>{ratingStars.map(star =>(
                star<=value ? <span key={star.toString()}>★</span> : null
            ))} / 5
                </div>
        }
    </div>

    );
}
export default Rating;
