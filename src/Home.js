import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {

    const [ user ] = useAuthState(auth);

    return (
        <div>
            {user ? (
                <>
                    <UserInfo />
                    <SignOutButton />
                </>
            ) : (
                <SignInButton />
            )}
            {/* <SignInButton /> */}
        </div>
    )
}

export default Home

//Googleボタンでサインイン
function SignInButton() {
    const signInWithGoogle = () => {
        // firebaseを使用してGoogleでログインする
        signInWithPopup(auth, provider);
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>Googleでサインイン</p>
        </button>
    )
}
//Googleボタンでサインアウト
function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    )
}

function UserInfo() {
    return (
        <div className='userInfo'>
            <img src={auth.currentUser.photoURL} alt="" />
            <p>{auth.currentUser.displayName}</p>
        </div>
    )
}