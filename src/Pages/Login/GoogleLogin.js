import React, { useContext } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';

const GoogleLogin = () => {
    const { googleLogin } = useContext(UserContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email,
                }
                fetch(' https://car-servar-side.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)

                    })

            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <p className='text-center'>

                <button onClick={handleGoogleLogin} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default GoogleLogin;