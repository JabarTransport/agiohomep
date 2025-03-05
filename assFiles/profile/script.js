async function loadProfile() {
    const sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
        window.location.href = 'https://login-with-agio.web.app/';
        return;
    }

    const response = await fetch(`https://verifi-kasi-bck.vercel.app/api/profile?sessionId=${sessionId}`);
    const data = await response.json();

    let html = '';
    if (data.type === 'github') {
        html = `
            <img src="${data.data.avatar_url}" class="w-24 h-24 rounded-full">
            <h2>${data.data.name}</h2>
            <p>@${data.data.login}</p>
        `;
    } else {
        html = `
            <img src="${data.data.avatar_url}" class="w-24 h-24 rounded-full">
            <h2>${data.data.name}</h2>
            <p>${data.data.message}</p>
        `;
    }

    document.getElementById('profileContent').innerHTML = html;
}

function logout() {
    const sessionId = localStorage.getItem('sessionId');
    fetch(`https://verifi-kasi-bck.vercel.app/api/logout?sessionId=${sessionId}`).then(() => {
        localStorage.removeItem('sessionId');
        window.location.href = 'https://login-with-agio.web.app/';
    });
}
