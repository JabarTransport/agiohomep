// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyABCDEFGHIJKL1234567890_1234567890",
    authDomain: "login-agio.web.app",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456abc789def"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Periksa status login saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // Jika belum login, redirect ke halaman login
        window.location.href = "https://login-with-agio.web.app";
    }
});

// Fungsi untuk menampilkan profil pengguna
auth.onAuthStateChanged((user) => {
    if (user) {
        // Jika pengguna login, tampilkan data profil
        const profileContent = document.getElementById('profileContent');
        profileContent.innerHTML = `
            <div class="text-center">
                <img src="${user.photoURL || 'default-avatar.png'}" 
                    class="w-32 h-32 rounded-full mx-auto mb-4"
                    alt="Profile">
                <h2 class="text-2xl font-bold mb-2">${user.displayName || 'User'}</h2>
                <p class="text-gray-600">${user.email || ''}</p>
            </div>
        `;
    } else {
        // Jika pengguna belum login, redirect ke halaman login
        window.location.href = "https://login-with-agio.web.app";
    }
});

// Fungsi untuk logout
function handleLogout() {
    auth.signOut()
        .then(() => {
            // Hapus status login dari localStorage
            localStorage.removeItem('isLoggedIn');
            // Redirect ke halaman login
            window.location.href = "https://login-with-agio.web.app";
        })
        .catch((error) => {
            console.error("Logout error:", error);
        });
}
