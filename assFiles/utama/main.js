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

        // Auth State Listener
        auth.onAuthStateChanged((user) => {
            if (!user) {
                // Redirect ke Firebase Hosting jika belum login
                window.location.href = "https://login-with-agio.web.app/";
            }
        });

        // Logout Handler
        function handleLogout() {
            auth.signOut().then(() => {
                window.location.href = "https://login-with-agio.web.app/";
            });
        }
