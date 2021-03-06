const deleteElTwo = document.getElementById("delete-button-two");


deleteElTwo.addEventListener("click", async (event) => {
  event.preventDefault();
  const id = document.querySelector(".id-select-span").textContent;

  const res = await fetch(`/blogs/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ blog_id: id }),
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    document.location.replace("/dashboard");
    // alert("Logout Successful");
  } else {
    alert("delete failed");
  }
});
