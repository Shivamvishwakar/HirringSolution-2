

var company = [
 {
  name: "Microsoft",
  description : "microsoft team"
 },
 {
  name: "Amazon",
 },
 {
  name: "Google",
 },

 {
  name: "TCS",
 
 },
 {
  name: "Infosys ",
 },
 {
  name: "Cisco",
  
 },
 {
  name: "Twitter",
  
 },
 {
  name: "Zomato",
 
 },
 {
  name: "Oracle",
 
 },
 {
  name: "Ola",

 },
 {
  name: "AWS",
 
 },
 {
  name: "Adobe",
 
 }
 ]
 
 

 

// Get the HTML element by ID
const myElement = document.getElementById('search');

// Define the event listener function
// function myEventListener() {
//   console.log('The element was clicked!');

  function getData(){
 
   console.log('The element was clicked!');
   var userSearch = document.getElementById('user-search').value.toLowerCase();
    for(var i =0; i < company.length;i++){
     if(userSearch === company[i].name.toLowerCase()){
         document.getElementById('name').innerHTML = company[i].name;
         
        document.getElementById('text-result').innerHTML=company[i].description;
     }
    }
   // }
   
}

// Attach the event listener to the element
myElement.addEventListener('click', getData);


const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // send the form data to your server or API
    console.log(name, email, message);

    // display a success message to the user
    alert('Thanks for contacting us! We will get back to you soon.');
});
