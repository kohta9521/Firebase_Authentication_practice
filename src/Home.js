import React from 'react'

function Home() {
    return (
        <div>
            <SignInButton />
        </div>
    )
}

export default Home

//Googleボタンでサインイン
function SignInButton() {
    const signInWithGoogle = () => {
        // firebaseを使用してGoogleでログインする
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>Googleでサインイン</p>
        </button>
    )
}