import React, { useContext, useEffect, useState } from "react";
import '../firebase';
import {getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

function AuthProvider({children}){
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
      const unsubscribe =  onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, [])

   async function signup(email, password, username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: username,
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
    }

    function login(email, password){
       const auth = getAuth();
       return signInWithEmailAndPassword(auth, email, password)

    }

    function logout(){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
    <AuthContext.Provider value={value} >
        {!loading && children}
    </AuthContext.Provider>
    );
}
export default AuthProvider;