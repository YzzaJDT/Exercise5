import { useRouter } from "next/router";
import { useState } from "react";
import { useLoginData } from "@/stores/loginData";

export default function Login(){
    const Router = useRouter();
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const { data } = useLoginData();

    const handleOnChangeEmail = (e) =>[
        setState({...state, email: e.target.value})
    ]
    const handleOnChangepass = (e) =>{
        setState({...state, password: e.target.value})
    }
    
    const handleSignInClicked = ()=>{

        if(state.username === " " || state.password === ""){
            alert("Username and Password is empty")
        } else if(state.email === data.email && state.password === data.password){
            Router.push('/ScrumBoard');
          
        } else {
            alert("failed to login")     
        }
    }

    return(
        <div className="p-20">
            <div className="max-w-[510px] flex flex-col gap-4 border border-gray-400 p-4 rounded-md">
                <h1 className="uppercase font-bold">Login</h1>
                <label>username</label>
                <input 
                    className="mt-[-10px] w-[475px] input" 
                    name="username"
                    value={state.username}
                    onChange={handleOnChangeEmail}
                />
                <label>password</label>
                 <input 
                    className="mt-[-10px] w-[475px] input" 
                    name="password"
                    type={"password"}
                    value={state.password}
                    onChange={handleOnChangepass}
                />
                  <button 
                    onClick={handleSignInClicked} 
                    className="button w-full bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none">
                    Sign In
                </button>

            </div>
        </div>
    )
}