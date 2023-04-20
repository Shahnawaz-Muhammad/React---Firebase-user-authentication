import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  const createUser = async (email, password, username, role) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username,
        email,
        role,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const referPatient =async () => {
    await setDoc(doc(db, "users", user.uid), where("role",  "==", "doctor" )),{
      referedPatient:[]
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const q = query(
          collection(db, "users"),
          where("email", "==", userAuth.email)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setCurrentUser(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
        setLoading(false);
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        loginUser,
        logout,
        currentUser,
        referPatient
        // isAuthenticated,
        // userRole,
        // allowedRoutes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
