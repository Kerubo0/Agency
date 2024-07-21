const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

toggleBtnIcon.classList  = isOpen 
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars'
}

const sLink = document.querySelector(".s_link")

sLink.addEventListener ("click", () => {
  if (sLink.style.display === "none" || sLink.style.display === "") {
    sLink.style.display = "block";
} else {
  //sLink.style.display = "none";
}
})

//Join waitlist button start 

const btn = document.getElementById('action_btn');
const overlay = document.getElementById('overlay');

btn.addEventListener("click", () => {
  overlay.style.display = 'flex';
  document.body.classList.add('no-scroll');
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
});


//Join waitlist button end

const root = document.documentElement;

const setDropdownProps = (button, list, deg, ht, opacity) => {
    //button.querySelector('.dropdown-arrow').style.transform = `rotate(${deg}deg)`;
    button.querySelector('.angle').style.transform = `rotate(${deg}deg)`;
    list.style.maxHeight = ht;
    list.querySelectorAll('.dropdown-list-item').forEach(item => {
        item.style.opacity = opacity;
    });
};

document.querySelectorAll('.dropdown-button').forEach(button => {
    const list = button.nextElementSibling;
    
    const listWrapperSizes = 3.5; // margins, paddings & borders (3.5rem)

    button.addEventListener('mouseenter', () => {
        const dropdownOpenHeight = `${100 * list.children[0].children.length + listWrapperSizes}rem`;
        setDropdownProps(button, list, 180, dropdownOpenHeight, 1);
    });

    button.addEventListener('mouseleave', () => {
        setDropdownProps(button, list, 0, '0', 0);
    });

    list.addEventListener('mouseenter', () => {
        const dropdownOpenHeight = `${100 * list.children[0].children.length + listWrapperSizes}rem`;
        setDropdownProps(button, list, 180, dropdownOpenHeight, 1);
    });

    list.addEventListener('mouseleave', () => {
        setDropdownProps(button, list, 0, '0', 0);
    });
});



// Testimonial section slider...owl carousel
jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});
// End testimonial section slider





