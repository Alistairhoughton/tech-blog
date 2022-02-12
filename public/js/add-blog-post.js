const postEl = document.getElementById("new-blog-form");

postEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("button pressed");

  const titleEl = document.getElementById("blog-title-input").value.trim();
  const contentEL = document.getElementById("blog-content-area").value.trim();

    if (titleEl && contentEL) {
    const res = await fetch("/blogs/", {
      method: "POST",
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
