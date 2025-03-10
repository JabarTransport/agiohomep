// Fungsi untuk menampilkan profil
function loadProfile() {
    const profileContent = document.getElementById('profileContent');
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    const loginMethod = localStorage.getItem('loginMethod');

    // Jika tidak ada data profil, redirect ke halaman login
    if (!userProfile) {
        window.location.href = 'https://login-with-agio.web.app';
        return;
    }

    let profileHTML = `
        <div class="text-center">
            <img src="${userProfile.photoURL}" 
                 alt="Profile Picture" 
                 class="w-32 h-32 rounded-full mx-auto mb-6">
            <h2 class="text-3xl font-bold text-gray-800">${userProfile.displayName}</h2>
            <p class="text-gray-600 mt-2">
                <i class="fas fa-envelope mr-2"></i>${userProfile.email}
            </p>
            <p class="text-gray-600 mt-2">
                <i class="fas fa-sign-in-alt mr-2"></i>Logged in with ${loginMethod === 'github' ? 'GitHub' : 'Keyword'}
            </p>
        </div>
    `;

    profileContent.innerHTML = profileHTML;
}

// Fungsi Logout
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginTime');
    localStorage.removeItem('loginMethod');
    localStorage.removeItem('userProfile');
    window.location.href = 'https://login-with-agio.web.app';
}

// Cek session saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginTime = localStorage.getItem('loginTime');
    
    // Jika tidak ada session atau session sudah kadaluarsa, redirect ke login
    if (!isLoggedIn || (loginTime && Date.now() - loginTime > 3600000)) {
        handleLogout();
    } else {
        loadProfile();
    }
});
