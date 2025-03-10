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

// Shared Logout Function
async function handleLogout() {
  try {
    await auth.signOut();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loginTime");
    window.location.href = "https://login-with-agio.web.app";
  } catch (error) {
    console.error("Logout error:", error);
    Swal.fire({
      icon: 'error',
      title: 'Logout Gagal',
      text: 'Terjadi kesalahan saat logout. Silakan coba lagi.',
    });
  }
}

// Auth State Listener
function initAuthListener() {
  auth.onAuthStateChanged((user) => {
    if (!user) handleLogout();
  });
}
