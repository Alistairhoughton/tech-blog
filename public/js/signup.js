const signupEL = document.getElementById('sign-up-id');

signupEL.addEventListener('click', async (event) => {

    event.preventDefault()

    const userNameEL = document.getElementById('username-sign-up').value.trim()
    const passWordEl = document.getElementById('username-sign-up').value.trim()

const newUser = await fetch("/users/", {
            method: "POST",
            body: JSON.stringify({
    
                username: userNameEL,
                password: passWordEl
            }),
            headers: { 'Content-Type': 'application/json' }
        })
    
        if(newUser.ok){
            document.location.replace('/dashboard')
    
        } else {
            alert('sign up failed')
        }

});