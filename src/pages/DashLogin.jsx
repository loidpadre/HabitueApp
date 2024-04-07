import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; 

function DashLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    function goDash(){
        if(email === "" || password === ""){
            alert("Preencha os campos");
        }else if(email === "loidpadre@gmail.com" && password === "flutter321"){
            navigate('/dash'); 
        } else {
            alert("Email ou senha inválidos!");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        goDash();
    }

    return (
        <div className='mx-auto my-20 px-4 sm:mx-6 md:mx-20 lg:mx-56'>
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-center text-red-600'>Aqui é um lugar para pessoas autorizadas</h1>
                <p className='text-zinc-600 my-4 text-center'>Se você não está autorizado, por favor volte para a página inicial <Link to="/" className='text-blue-600 underline'>Voltar para home</Link></p>
                <form className='flex flex-col gap-5 max-w-md mx-auto' onSubmit={handleSubmit}>
                    <input type="email" placeholder='Insira o seu email' className='border rounded-md p-2' onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Insira a senha' className='border rounded-md p-2' onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className='w-full bg-orange-700 rounded-md text-white p-2'>Logar</button>
                </form>
            </div>
        </div>
    );
}

export default DashLogin;
