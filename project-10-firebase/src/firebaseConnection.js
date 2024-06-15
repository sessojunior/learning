import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBnBRACbdSftud3Dm6ABtKmf8m6s_ps3Rk",
	authDomain: "cursoreact-sessojunior.firebaseapp.com",
	projectId: "cursoreact-sessojunior",
	storageBucket: "cursoreact-sessojunior.appspot.com",
	messagingSenderId: "1006504453096",
	appId: "1:1006504453096:web:a04a849a176e231fa07a5d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
