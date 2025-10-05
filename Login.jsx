import "../Sites/Login.css"

function Login(){
    return(
        <div>
            <LoginWindow />
        </div>         
    );
}

function LoginWindow(){
    return(
        <div className="loginDiv">
            <h2 style={{position: "absolute", left: "50%", marginRight: "-50%", transform: "translate(-50%, -50%)"}}>Login</h2>

            <UsernameInput />
            <PasswordInput />
        </div>
    );
}

function UsernameInput(){
    return(
        <div>
            <h4 style={{position: "absolute", left: "50%", marginRight: "-50%", transform: "translate(-50%, -50%)", top: "15%"}}>Email Address</h4>
            <input type="text" style={{position: "absolute", left: "50%", marginRight: "-50%", transform: "translate(-50%, -50%)", top: "25%"}}>
            </input>
        </div>
    );
}

function PasswordInput(){
    return(
        <div>
            <h4 style={{position: "absolute", left: "50%", marginRight: "-50%", transform: "translate(-50%, -50%)", top: "30%"}}>Password</h4>
            <input type="text" style={{position: "absolute", left: "50%", marginRight: "-50%", transform: "translate(-50%, -50%)", top: "40%"}}>
            </input>
        </div>
    );
}

export default Login;