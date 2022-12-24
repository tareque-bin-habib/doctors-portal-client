import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const handleSignUp = data => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('user created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error)
                setSignUpError('Email Already Exist')
            })
    }

    const handleWithGoogle = data => {
        const provider = new GoogleAuthProvider()
        signInWithGoogle(provider, data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => console.error(error))

    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "password must be 6 charecters long" },
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "password must be strong"
                            }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}



                    </div>
                    <input className='btn btn-accent w-full mt-5' value='Sign Up' type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600 mt-3'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already have an account<Link className='text-center text-secondary' to='/login'> please login</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleWithGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;