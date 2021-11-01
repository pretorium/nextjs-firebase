import { initializeApp } from "firebase/app";
import { GithubAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE0GS1ssFQzml75HZttJLowekx0nweWqU",
  authDomain: "devempire-8b63b.firebaseapp.com",
  projectId: "devempire-8b63b",
  storageBucket: "devempire-8b63b.appspot.com",
  messagingSenderId: "323852648673",
  appId: "1:323852648673:web:46f1073fd818d4431df7a0"
};

initializeApp(firebaseConfig);

export const authStateChanged = (setState) => {
  return new Promise((resolve, reject) => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        resolve(setState(user.reloadUserInfo));
      } else {
        reject(setState(null));
      }
    });
  })
};

export const loginWithGithub = async () => {
  const providerGithub = new GithubAuthProvider();
  const auth = getAuth();
  return await signInWithPopup(auth, providerGithub)
};
