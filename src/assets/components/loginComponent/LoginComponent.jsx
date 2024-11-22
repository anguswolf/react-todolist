const LoginComponent = () => {
    return (
        <form >
            <label htmlFor="eamil">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
        </form>
    )
}

export default LoginComponent;