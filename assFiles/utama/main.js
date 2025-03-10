// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  }
});


// Konfigurasi Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyB62dgVC2BMKm7d-UjNms93SNN38BFUb4I",
      authDomain: "login-agio.firebaseapp.com",
      projectId: "login-agio",
      storageBucket: "login-agio.firebasestorage.app",
      messagingSenderId: "1089500143018",
      appId: "1:1089500143018:web:7b3bbaa11a0c86af989fd3",
      measurementId: "G-WQT0VC0EBE"
    };
    // Inisialisasi Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    const validateSession = async () => {
      const urlParams = new URLSearchParams(location.search);
      const token = urlParams.get('token');
      const method = urlParams.get('method');

      if (!token || !method) {
        window.location.href = 'https://login-with-agio.web.app';
        return;
      }

      try {
        if (method === 'github') {
          await auth.signInWithCustomToken(token);
          const user = auth.currentUser;
          document.getElementById('userName').textContent = user.displayName || 'AGIO User';
          document.getElementById('userEmail').textContent = user.email;
          if(user.photoURL) document.getElementById('userAvatar').src = user.photoURL;
        } else if (method === 'keyword') {
          const tokenData = JSON.parse(atob(token));
          if(Date.now() > tokenData.exp) throw new Error('Session expired');
          
          document.getElementById('userName').textContent = 'Premium Member';
          document.getElementById('userEmail').textContent = 'Key-based Access';
        }
        
        window.history.replaceState({}, '', '/');
      } catch (error) {
        console.error(error);
        window.location.href = 'https://login-with-agio.web.app';
      }
    };

    const logout = () => {
      auth.signOut();
      window.location.href = 'https://login-agio.firebaseapp.com';
    };

    validateSession();
