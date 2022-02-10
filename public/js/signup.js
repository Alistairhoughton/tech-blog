const signupEL = document.getElementById('sign-up-id');

signupEL.addEventListener('click', async (event) => {

    event.preventDefault()

    const userNameEL = document.getElementById('username-sign-up').value.trim()
    const passWordEl = document.getElementById('username-sign-up').value.trim()

    if (userNameEL && passWordEl) {
        const res = await fetch("/users", {
            method: "POST",
            body: JSON.stringify({
                username: userNameEL,
                password: passWordEl
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            document.location.replace('/dashboard')
        } else {
            
        }
    }
});
