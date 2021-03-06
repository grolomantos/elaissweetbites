const dropdown = document.getElementById("dropDownNav")

// put condition inside () parenthesis
function displayDropdown() {
  if (dropdown.classList.contains("active")) {
    dropdown.style.height = "auto"
    dropdown.style.visibility = "visible"
    dropdown.style.opacity = "1"
    dropdown.style.zIndex = "1"
    dropdown.classList.remove('active')
  } else {
    dropdown.style.height = "0"
    dropdown.style.visibility = "none"
    dropdown.style.opacity = "0"
    dropdown.style.zIndex = "-1"
    dropdown.classList.add('active')
  }
}



const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener('click', () => {
    removeActiveClasses()
    card.classList.add('active')
  })
})

function removeActiveClasses() {
  cards.forEach(card => {
    card.classList.remove('active')
  })
}


const faqs = document.querySelectorAll('.faq')


function faq1() {
  if (document.getElementById('faq1').classList.contains('active')){
    document.getElementById('faq1').classList.remove('active')
  } else {
    removeFaqClasses()
    document.getElementById('faq1').classList.add('active')
  }
}
function faq2() {
  if (document.getElementById('faq2').classList.contains('active')){
    document.getElementById('faq2').classList.remove('active')
  } else {
    removeFaqClasses()
    document.getElementById('faq2').classList.add('active')
  }
}
function faq3() {
  if (document.getElementById('faq3').classList.contains('active')){
    document.getElementById('faq3').classList.remove('active')
  } else {
    removeFaqClasses()
    document.getElementById('faq3').classList.add('active')
  }
}
function faq4() {
  if (document.getElementById('faq4').classList.contains('active')){
    document.getElementById('faq4').classList.remove('active')
  } else {
    removeFaqClasses()
    document.getElementById('faq4').classList.add('active')
  }
}

function removeFaqClasses() {
  faqs.forEach(faq => {
    faq.classList.remove('active')
  })
}


var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "634799127168009");
chatbox.setAttribute("attribution", "biz_inbox");


//Your SDK code

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v12.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
