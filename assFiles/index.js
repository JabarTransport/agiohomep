// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.backgroundColor = window.scrollY > 50 
    ? 'rgba(255, 255, 255, 0.98)'
    : 'rgba(255, 255, 255, 0.9)';
});

// Logout Confirmation
function confirmLogout() {
  Swal.fire({
    title: 'Konfirmasi Logout',
    text: "Anda yakin ingin keluar dari sistem?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#1d4ed8',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya, Logout!'
  }).then((result) => {
    if (result.isConfirmed) handleLogout();
  });
}

// Initialize Auth
document.addEventListener('DOMContentLoaded', () => {
  initAuthListener();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const loginTime = localStorage.getItem('loginTime');
  
  if (!isLoggedIn || (loginTime && Date.now() - loginTime > 3600000)) {
    handleLogout();
  }
});
