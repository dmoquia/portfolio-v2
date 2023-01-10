import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
// login
const login = (loginButton, authMethod) => {
  return loginButton.addEventListener("click", () => loginMethod(authMethod));
};

// persist user
const persist = () => {
  const res = onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.reload();
      localStorage.setItem("user", JSON.stringify(user));
      document.querySelector("#myModal").style.display = "none";
      return;
    }
  });
  return res;
};

// login method
const loginMethod = async (provider) => {
  try {
    const res = await signInWithPopup(auth, provider);
    let user = res.user;
    const newUser = await addDoc(collection(db, "users"), {
      name: user.displayName,
      email: user.email !== null ? user.email : "test@gmail.com",
    });

    persist(newUser);
  } catch (error) {
    console.log(error);
  }
};

// logout
const logout = (button) => {
  return button.addEventListener("click", () => {
    auth
      .signOut()
      .then(() => {
        window.location.reload();
        localStorage.clear();
        document.querySelector("#myModal").style.display = "auto";
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export { logout, login };
