import '../App.css';

function Login() {
    return (
        <div>
            <form method="post" action="localhost:3000/src/server/login.php">
                <span>Username</span><br/>
                <input type="text" name="username" /><br/>
                <span>Password</span><br/>
                <input type="password" name="psw" /><br/>
                <input type="submit" value="Send" />
            </form>
        </div>
    );

}

export default Login;
