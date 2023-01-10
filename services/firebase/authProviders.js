import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
export const facebookProvider = new FacebookAuthProvider().addScope("email");
export const googleProvider = new GoogleAuthProvider().addScope("email");
export const githubProvider = new GithubAuthProvider().addScope("email");
