const postEl = document.getElementById("new-post-button");

postEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const titleEl = document.getElementById("blog-title-input").value.trim();
  const contentEL = document.getElementById("blog-content-area").value.trim();

  //   const title = document.querySelector('input[name="post-title"]').value;
  //   const body = document.querySelector('textarea[name="post-body"]').value;

  if (titleEl && contentEL) {
    const res = await fetch("/blogs", {
      method: "POST",
      body: JSON.stringify({
        title: titleEl,
        content: contentEL,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      document.location.replace("/dashboard");
    } else {
      res.statusText;
    }
  }
});
