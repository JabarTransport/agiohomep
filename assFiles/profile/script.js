async function loadProfile() {
    try {
        const response = await fetch('https://verifi-kasi-bck.vercel.app/api/profile', {
            credentials: 'include'
        });
        const data = await response.json();
        
        let html = '';
        if (data.type === 'github') {
            html = `
                <img src="${data.data.avatar_url}" 
                     class="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
                     alt="Profile Picture">
                <h2 class="text-2xl font-bold mb-2">${data.data.name}</h2>
                <p class="text-gray-600 mb-2">@${data.data.login}</p>
                <a href="${data.data.html_url}" 
                   target="_blank" 
                   class="text-blue-600 hover:underline">
                   View GitHub Profile
                </a>
            `;
        } else {
            html = `
                <img src="${data.data.avatar_url}" 
                     class="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
                     alt="Default Avatar">
                <h2 class="text-2xl font-bold mb-2">${data.data.name}</h2>
                <p class="text-gray-600">${data.data.message}</p>
            `;
        }
        
        document.getElementById('profileContent').innerHTML = html;
        
    } catch (error) {
        document.getElementById('profileContent').innerHTML = `
            <p class="text-red-500 text-center">Failed to load profile</p>
        `;
    }
}

async function handleLogout() {
    await fetch('https://verifi-kasi-bck.vercel.app/logout', {
        method: 'POST',
        credentials: 'include'
    });
    window.location.href = 'https://login-with-agio.web.app/'; //pake link form login
}

// Load profile when page loads
loadProfile();
