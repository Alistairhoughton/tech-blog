const logoutEl = document.getElementById("logout-button");

logoutEl.addEventListener('click', async (event) => {

    event.preventDefault()

    
        const res = await fetch('/users/logout', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            document.location.replace('/');
            alert("Logout Successful");
        } else {
            alert("logout failed");
        }
    }
);