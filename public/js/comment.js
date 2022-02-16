const commentButton = document.getElementById("add-comment-btn-id");

commentButton.addEventListener("click", async (event) => {
  event.preventDefault();

  console.log("button pressed");

  const commentContent = document.getElementById("comment-form-input").value.trim();
  const blog_id = window.location.toString().split("/").pop();

    const newComment = await fetch ("/comment",{
      method: "POST",
      body: JSON.stringify({
        comment_text: commentContent,
        blog_id: blog_id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (newComment.ok) {
      // alert("comment successful");
      document.location.replace(`/main/${blog_id}`);
    } else {
      alert("comment failed");
  }
});



