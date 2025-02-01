import React, { useRef } from 'react';
import emailjs from '@emailjs';

const toggleButton = document.getElementById('navbarToggle');
const navbarNav = document.querySelector('.navbar-nav');

toggleButton.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbarNav.classList.remove('active');
  });
});

function adjustLayout() {
  const screenWidth = window.innerWidth;
  const body = document.body;

  if (screenWidth <= 768) {
    body.classList.add('mobile');
    body.classList.remove('desktop');
  } else {
    body.classList.add('desktop');
    body.classList.remove('mobile');
  }
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);