// Firebase Configuration (sama dengan di login page)
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

        // Load Profile Data
        auth.onAuthStateChanged((user) => {
            const profileContent = document.getElementById('profileContent');
            
            if(user) {
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
                window.location.href = "https://login-with-agio.web.app/";
            }
        });

        // Logout Handler
        function handleLogout() {
            auth.signOut().then(() => {
                window.location.href = "https://login-with-agio.web.app/";
            });
        }
