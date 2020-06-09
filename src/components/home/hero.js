import React from 'react';
import hero_image from '../../assets/home_meer_klanten.png';

export default function hero() {
     /*
        "I believe ______ (who? potential customer group)
        will ______ (do what? action)
        because ______ (why they're going to use it)"
    */

    /* 
    Headline Template
     The end result = the benefit
     Time period = give them a timeframe
     Objections = give them some sort of assurance
    • Example: “Better reviews with 10 minutes of work
    or your money back”
    */

    /* Description
     Write a description of the product that explains why they should click the call to action
     Break up your text as much as possible
     Never write more than 1-2 sentences at a time
     Try to separate them
    */
    return (
       
    <div className="hero"> 
        <div className="hero__info">
            <div className="hero__title">
                Meer <span>potentiële</span> klanten! 
            </div>
            <div className="hero__desc">
                Wij zullen meer potentiële klanten in 2 maanden werven voor uw bedrijf of wij betalen uw complete investering in ons terug              </div>
            <div className="hero__buttons">
                <a className="home__link home__link--fill" href="/signup" >Direct contact</a>
                <a className="home__link" href="/about">Vertel mij meer</a>
            </div>
        </div>
        <div className="hero__image">
            <img src={hero_image} alt="hero_image" />
        </div>
    </div>
    )
}