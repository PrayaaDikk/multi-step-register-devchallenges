document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#loginForm");
  const topicsForm = document.querySelector("#topicsForm");
  const summary = document.querySelector("#summary");
  const loginInput = document.querySelectorAll("input[name='loginInput']");
  const usernameSummary = document.querySelector("h3[name='username'] span");
  const emailSummary = document.querySelector("h3[name='email'] span");
  const stepInfo = document.querySelector("#step");
  const contBtn = document.querySelector("#contBtn");

  stepInfo.innerHTML = "Step 1 of 3";

  loginInput.forEach((loginInput) => {
    loginInput.addEventListener("focus", function () {
      document.querySelector("#inputLoginError").classList.add("hidden");
    });
  });

  contBtn.addEventListener("click", function () {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;

    if (loginForm.classList.contains("block")) {
      if (username === "" || email === "" || email.indexOf("@") === -1) {
        document.querySelector("#inputLoginError").classList.remove("hidden");
        document.querySelector("#username").value = "";
        document.querySelector("#email").value = "";
      } else {
        loginForm.classList.remove("block");
        loginForm.classList.add("hidden");
        topicsForm.classList.remove("hidden");
        topicsForm.classList.add("block");
        stepInfo.innerHTML = "Step 2 of 3";
        document
          .querySelectorAll("#steps-dot div")[0]
          .classList.remove("activated");
        document
          .querySelectorAll("#steps-dot div")[0]
          .classList.add("was-activated");
        document
          .querySelectorAll("#steps-dot div")[1]
          .classList.remove("unactivated");
        document
          .querySelectorAll("#steps-dot div")[1]
          .classList.add("activated");
      }
    } else if (topicsForm.classList.contains("block")) {
      const checkbox = document.querySelectorAll(
        "input[name='checkboxTopics']"
      );
      let topics = [];

      checkbox.forEach((checkbox) => {
        if (checkbox.checked) {
          topics.push(checkbox.value);
        }
      });
      if (topics.length === 0) {
        document.querySelector("#checkboxError").classList.remove("hidden");
      } else {
        document.querySelector("#checkboxError").classList.add("hidden");
        console.log("Topics : ", topics);
        topicsForm.classList.remove("block");
        topicsForm.classList.add("hidden");
        summary.classList.remove("hidden");
        summary.classList.add("block");
        stepInfo.innerHTML = "Step 3 of 3";
        document
          .querySelectorAll("#steps-dot div")[1]
          .classList.remove("activated");
        document
          .querySelectorAll("#steps-dot div")[1]
          .classList.add("was-activated");
        document
          .querySelectorAll("#steps-dot div")[2]
          .classList.remove("unactivated");
        document
          .querySelectorAll("#steps-dot div")[2]
          .classList.add("activated");
        contBtn.innerHTML = "Confirm";

        usernameSummary.innerHTML = username;
        emailSummary.innerHTML = email;

        let topicListItems = "";
        topics.map((topic) => {
          topicListItems += `<li class="list-disc ml-7">${topic}</li>`;
        });

        document.querySelector("#topics-list").innerHTML += topicListItems;
      }
    } else if (summary.classList.contains("block")) {
      setTimeout(() => {
        location.reload();
      }, 3000);
      alert("✅ Success!");
    }
  });
});
