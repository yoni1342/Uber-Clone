import {useEffect} from 'react';
import tw from "tailwind-styled-components"
import {useRouter} from 'next/router'
import {signInWithPopup, onAuthStageChanged } from 'firebase/auth'
import {auth, provider}from '../firebase'
function Login() {
    const router = useRouter();
    useEffect(()=>{
        onAuthStageChanged(auth, user=>{
            if(user){
                router.push('/')
            }
        })
    },[])
  return <Wrapper>
      <UberLogo src = 'https://i.ibb.co/n6LWQM4/Post.png'/>
      <LoginInfo>Log in to access your account</LoginInfo>
      <LoginImage src = 'https://i.ibb.co/CsV9RYZ/login-image.png'/>
      <SignInButton>Sign in with Google</SignInButton>
  </Wrapper>
}

export default Login;


const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 w-screen p-4
`
const SignInButton = tw.button`
bg-black text-white text-2xl text-center p-5 mt-8 w-full cursor-pointer
`
const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`
const LoginImage = tw.img`
object-contain w-full
`
const LoginInfo  = tw.p`
    text-5xl pt-4 text-gray-500 
`
