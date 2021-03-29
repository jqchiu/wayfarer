
const LoginPage = () => {
  return (
    <div className="container">
      <h2>Log in</h2>
      <form id="login">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" /> <br/>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" /> <br/>
        <button type="submit" >Login</button>
      </form>
      <h2>Sign up</h2>
      <form id="login">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" /> <br/>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" /> <br/>
        <label htmlFor="password">Confirm Password</label>
        <input type="text" id="password" name="password" /><br/>
        <button type="submit" >Sign up</button>
      </form>
    </div>
  )
}

export default LoginPage;
