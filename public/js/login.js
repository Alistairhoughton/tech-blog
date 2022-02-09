const loginEl = document.getElementById('');

loginEl.addEventListener('click', async (event) => {

    event.preventDefault()

    const userNameEL = document.getElementById('username-input').value.trim()
    const passWordEl = document.getElementById('password-input').value.trim()

    if (userNameEL && passWordEl) {
        const res = await fetch('/api/user/login', {
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
            alert(res.statusText)
        }
    }
});