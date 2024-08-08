// Function to validate user email address
function criteria() { 
    const form = document.getElementById('contactForm');
    const validChars = ['.', '@', '_','-'];
    let email = document.getElementById('email').value;    
    let msg = document.getElementById('msg');
    let firstAt = email.indexOf('@');
    let lastAt = email.lastIndexOf('@');
    let lastDot = email.lastIndexOf('.');
    let firstChar = email.charAt(0);
    
    let state = true;
    
    email = email.trim().toLowerCase();
    msg.innerHTML = '';

    if(firstChar == '@' || firstChar == '.' || firstChar == '_' || firstChar == '-' || !isNaN(firstChar)){
        msg.innerHTML = "Invalid first character for Email address";
        state = false;
    } else if(email.length < 8){
        msg.innerHTML = "Your email is too short!";
        state = false;
    } else if((firstAt < 2) || (firstAt != lastAt)){
        msg.innerHTML = "Error in @";
        state = false;
    } else if(lastDot - lastAt < 3){
        msg.innerHTML = "Error in domain name";
        state = false;
    } else if(email.length - lastDot < 3){
        msg.innerHTML = "Error in .com";
        state = false;
    } else {
        for(let i = 0; i < email.length && state == true; i++){
            if((email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122)){
                continue;
            } else if ((email.charCodeAt(i) >= 48 && email.charCodeAt(i) <= 57)) {
                continue;
            } else if (validChars.indexOf(email.charAt(i)) != -1){
                continue;
            } else {
                msg.innerHTML = "Please use valid email characters";
                state = false;
            }
        }
    }

    if (state == true) {
        msg.innerHTML = 'Thank You :) Your Message has been submitted successfully. <br> You shall hear from us very soon!';
        document.getElementById('email').classList.remove("invalid");

        // Form submission using FormSubmit.co
        form.action = 'https://formsubmit.co/erick.manrique112@gmail.com';
        form.method = 'POST';
        form.submit();
    } else {
        document.getElementById('email').classList.add("invalid");
    }
}    

// Attach the criteria function to form submission
document.getElementById('contactForm').addEventListener("submit", (e) => {
    e.preventDefault();
    criteria();
});

// SEARCH functionality
const searchElement = document.getElementById('search');
const searchBar = document.getElementById('searchBar');
// Click on the Magnifier icon to toggle the search bar
searchElement.addEventListener('click', function (){
    searchBar.classList.toggle('show');
    searchBar.classList.toggle('hide');
});
// Press escape to close the search bar
document.addEventListener('keydown', (event) => {
    var keyName = event.key;
    if ((keyName == 'Escape' && searchBar.classList.contains('show') == true)) {
        searchBar.classList.toggle('show');
        searchBar.classList.toggle('hide');    
    }
});
