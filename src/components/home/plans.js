var model = [
    {
       functions:[
           "Good to get started, analyze up tp 5 stocks at a time and create profit",
         ],
       options:{
           "name":"Free",
           "price":"",
           "frq":"",
           "button_text":"Start now",
           "button_url":"/signup",
           "css_class":"zpbutton-wrapper zpbutton zpbutton-type-secondary zpbutton-size-md zpbutton-style-none zpbutton-full-width ",
           "element_id":""
         }
     },
    {
       "functions":[
            "Analyze unlimited stocks, get access to advanced calculations like the graham formula and get your max potential profit",            
         ],
         "options":{
           "name":"Pro",
           "price":"$ 8",
           "frq":"/month",
           "button_text":"14-day free trial",
           "button_url":"/signup",
           "css_class":"zpbutton-wrapper zpbutton zpbutton-type-secondary zpbutton-size-md zpbutton-style-none zpbutton-full-width ",
           "element_id":""
         }
       },
    {
         "functions":[
           "Analyze unlimited stocks, get access to financials and advanced calculations. Follow CEO's and brands with our automated API of the company and get access to insider transactions"
         ],
         "options":{
           "name": "Advanced",
           "price":"$ 14,95",
           "frq":"/month",
           "button_text":"14-day free trial",
           "button_url":"/signup",
           "css_class":"zpbutton-wrapper zpbutton zpbutton-type-secondary zpbutton-size-md zpbutton-style-none zpbutton-full-width ",
           "element_id":""
         }
     }   
];

function menuTemplate(menus) {
 return `
     <ul class="plans__plan__items" id="${menus.options["element_id"]}"> 
       <li class="plans__plan__items__name">
         ${menus.options["name"]}
       </li>
       <li class="plans__plan__items__price">
         ${menus.options["price"]} <span class="frq">${menus.options["frq"]} </span>
       </li>
       <li>
         ${menus.functions.map(food => `<li>${food}</li>`).join("")}
       </li>
       <li class="plans__plan__items__button">
         <a class="${menus.options["css_class"]}" href="${menus.options["button_url"]}">${menus.options["button_text"]}</a>
       </li>
     </ul>`;
}

export default () => {
    return `<section id="plans" class="plans">
        <h2 class="plans__title">Plans and Pricing</h2>
        <div class="plans__plan"> 
            ${model.map(menuTemplate).join("")}
        </div>
    </section>`;
}