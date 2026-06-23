import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";

export default function Register(){

    const {register} = useContext(UserContext);

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const navigate = useNavigate();

    const handleChange = (e)=>{
        if (e.target.id === 'name') {
            setUserName(e.target.value);
        }else if(e.target.id === 'email'){
            setUserEmail(e.target.value);
        }
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        if (userName, userEmail){
            register({name: userName, email: userEmail});
        }
        navigate('/');
    }


    return(
        <section className="form_section">
       
        <form id="custom_form"  onSubmit={handlesubmit}>
             <h1>Register Page</h1>
            <div>
             <label htmlFor="name">Inserisci il tuo nome </label>
             <input type="text" id="name" name="name" onChange={handleChange} />
            </div>
                <br />
            <div>
             <label htmlFor="userSurname">Inserisci il tuo cognome </label>
             <input type="text" id="userSurname" name="userSurname" />
            </div>
                 <br />
            <div>
             <label htmlFor="email">Inserisci la tua email </label>
             <input type="email" id="email" name="email" onChange={handleChange}/>
            </div>
                 <br />
            <div>
             <label htmlFor="userPassword">Password </label>
             <input type="password" id="userPassword" name="userPassword" />
            </div>
                 <br />
             <div>
             <label htmlFor="confirmPassword">Conferma Password </label>
             <input type="password" id="confirmPassword" name="confirmPassword" />
            </div>
                 <br />
            <button>Registrati</button>
        </form>
        </section>
    )
}