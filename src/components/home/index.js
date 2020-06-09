import about_image from '../../assets/home_meer_klanten.png';
import React from 'react';
import footer from './footer';
import Header from './header';
import plans from './plans';
import Hero from './hero';

export default () => {
   
    const burgerMenu = () => {
        return `<div class="burger-menu">
            <button >
                <i class="fal fa-bars"></i>
            </button>
        </div>`
    }

    /*
    • What can do you for them? 
    • How does what you have work? 
    • What pain do you solve for the person you want to meet?
    • What pain do you solve for the company?
    • What are the problems you have helped wither clients solve? 
    */

    const about = () => {
        return `<section class="about">
        <div class="about__image">
            <img src="${about_image}">
        </div> 
        <div class="about__info">
            <h2>The best and most efficient way to analyze listed companies</h2>
            <p>We have created effective dashboards to show you the <span>value</span> of the listed company, daily <span>stock price</span>, <span>assets</span>, and <span>liabilities</span>. You can add your favorite stocks and start analyzing them. We will show you the last <span>dividend</span> payout of the stock as well</p>
        </div>
          
    </section>`
    }

    /* 
        1. My customer has x, y, z problem
        2. ____ matters to my customers
        3. ____ group will pay money for my solution
        4. There are no satisfactory substitutes
    */

    /*
        It needs to ___
        I promised it would do _____
        I can do _____
    */
    const features = () => { 
        return `<section class="features">
            <h2 class="features__title">Features</h2>
            <div class="features__grid">
                <div class="features__column">
                    <h3>Quick global overview</h3>
                    <p>Perfectly designed dashboards to give you a pixel clear view of the Profit, assets and liabilities of a company</p>
                </div>
                <div class="features__column">
                    <h3>Explained financials</h3>
                    <p>In normal words explained financials so you can start analyzing companies your own way. Terms like bookvalue, current ratio and p/b ratio are simply displayed and explained</p>
                </div>
                <div class="features__column">
                    <h3>Evens and Social analytics</h3>
                    <p>The price-to-book ratio, or P/B ratio, is a financial ratio used to compare a company’s current market price to its book value</p>
                </div>
            </div>
        </section>`
    }

    /* 
         Does - 3-4 functions
         Solves - read the functions and think about what
        problem each of them solves
         Who - cover up the "does" row and ignore it
        - look at the listed problems and think about
        who has them
    */

    return (
        <>
        <Header />
        <Hero />
        // {about}
        // {features}
        // {plans}
        // {footer}
        </>
    );
    
}