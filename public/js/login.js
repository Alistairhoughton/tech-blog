const loginEl = document.getElementById('')


loginEl.addEventListener('click', async (event) => {


    event.preventDefault()

    const userNameEL = document.getElementById('user').value.trim()
    const passWordEl //finish this off. 


    if (userNameEL && passWordEl) {

        const res = await fetch('/api/user/create/login', {

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