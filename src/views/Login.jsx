export default function Login(){
    return(
        <>
        <h1>Login Page</h1>

        <form custom_form>
            <div>
             <label htmlFor="userEmail">Inserisci il tuo email </label>
             <input type="email" id="userEmail" name="userEmail" />
            </div>
            <br />
           <div>
             <label htmlFor="userPassword">Password </label>
             <input type="password" id="userPassword" name="password" />
           </div>
           <br />
           <button type="submit">Accedi</button>
        </form>
        </>
    )
}