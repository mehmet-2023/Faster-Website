var pageTitle = document.title;
var attentionMessage = 'Hey, Come Back!👋';
var isPageActive = true;

document.addEventListener('visibilitychange', function(e) {
    isPageActive = !document.hidden;

    if (!isPageActive) {
        document.title = attentionMessage;
    } else {
        document.title = pageTitle;
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const list = document.getElementById("feedbackList");

  const loadFeedbacks = async () => {
    const res = await fetch("/scripts/get-comments.php");
    const feedbacks = await res.json();
    list.innerHTML = "";
    feedbacks.forEach(({ name, comment }) => {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `<p>"${comment}"</p><span>— ${name}</span>`;
      list.appendChild(item);
    });
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (name && comment) {
      await fetch("/scripts/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, comment }),
      });
      form.reset();
      loadFeedbacks();
    }
  });

  loadFeedbacks();
});
