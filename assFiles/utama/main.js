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

// Periksa status login saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // Jika belum login, redirect ke halaman login
        window.location.href = "https://login-with-agio.web.app/";
    }
});

// Fungsi untuk logout
function handleLogout() {
    auth.signOut()
        .then(() => {
            // Hapus status login dari localStorage
            localStorage.removeItem('isLoggedIn');
            // Redirect ke halaman login
            window.location.href = "https://login-with-agio.web.app/";
        })
        .catch((error) => {
            console.error("Logout error:", error);
        });
}

// Periksa status auth saat halaman dimuat
auth.onAuthStateChanged((user) => {
    if (!user) {
        // Jika pengguna belum login, redirect ke halaman login
        window.location.href = "https://login-with-agio.web.app/";
    }
});
