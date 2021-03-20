/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections=document.querySelectorAll('section');           // all sections
let fragment=document.createDocumentFragment();             //the virsiual (temp) element
let menueList=document.getElementById('navbar__list');     //the <ul> element

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i=0; i<sections.length; i++)
{
    let li=document.createElement('li');                 //creating list item <li>
    let anchor=document.createElement('a');             //creating link element <a>
    let secName=sections[i].getAttribute('data-nav');
    let secId=sections[i].getAttribute('id');
    anchor.textContent=(secName);
    anchor.href=`#${secId}`;
    anchor.className='menu__link'
    li.appendChild(anchor);
    fragment.appendChild(li);
}
menueList.appendChild(fragment);



// Add class 'active' to section when near top of viewport
function toggleActiveClass()
{
    for(let section of sections)
        {
            let sectionBorder=section.getBoundingClientRect()
            if(sectionBorder.top >=-300 && sectionBorder.top <=100)
                {
                    section.classList.add('your-active-class');
                }
            else
                {
                    section.classList.remove('your-active-class');
                }
        }
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('scroll',toggleActiveClass);
// Build menu 

// Scroll to section on link click

// Set sections as active