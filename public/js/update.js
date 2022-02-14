const updateEl = document.getElementById("update-blog-button");

updateEl.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("button pressed");

  const titleEl = document
    .getElementById("blog-title-update-input")
    .value.trim();
  const contentEL = document
    .getElementById("blog-content-update-input")
    .value.trim();
  const id = window.location.toString().split("/").pop();

  if (titleEl && contentEL) {
    const res = await fetch(`/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: titleEl,
        content: contentEL,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      // alert("post successful");
      document.location.replace("/dashboard");
    } else {
      alert("post failed");
      res.statusText;
    }
  }
});
