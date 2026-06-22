export default function Register(){
    return(
        <>
        <h1>Register Page</h1>
        <form action="" method="post">
            <div>
             <label htmlFor="userName">Inserisci il tuo nome </label>
             <input type="text" id="userName" name="userName" />
            </div>
                <br />
            <div>
             <label htmlFor="userSurname">Inserisci il tuo cognome </label>
             <input type="text" id="userSurname" name="userSurname" />
            </div>
                 <br />
            <div>
             <label htmlFor="userEmail">Inserisci la tua email </label>
             <input type="email" id="userEmail" name="userEmail" />
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
            <button type="submit">Registrati</button>
        </form>
        </>
    )
}