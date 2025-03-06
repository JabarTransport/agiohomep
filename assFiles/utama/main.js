// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB62dgVC2BMKm7d-UjNms93SNN38BFUb4I",
  authDomain: "login-agio.firebaseapp.com",
  projectId: "login-agio",
  storageBucket: "login-agio.firebasestorage.app",
  messagingSenderId: "1089500143018",
  appId: "1:1089500143018:web:7b3bbaa11a0c86af989fd3",
  measurementId: "G-WQT0VC0EBE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Auth Check
        document.addEventListener('DOMContentLoaded', () => {
            const authMethod = localStorage.getItem('agio-auth');
            if(!authMethod) window.location.href = "https://login-with-agio.web.app/";
            
            if(authMethod === 'firebase') {
                auth.onAuthStateChanged(user => {
                    if(!user) window.location.href = "https://login-with-agio.web.app/";
                });
            }
        });

        async function handleLogout() {
            try {
                if(localStorage.getItem('agio-auth') === 'firebase') {
                    await auth.signOut();
                }
                localStorage.removeItem('agio-auth');
                window.location.href = "https://login-with-agio.web.app/";
            } catch (error) {
                console.error('Logout error:', error);
            }
        }
