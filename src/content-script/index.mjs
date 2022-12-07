import MarkdownIt from "markdown-it";
import Browser from "webextension-polyfill";

async function run(question) {
  const markdown = new MarkdownIt();
  console.debug("Search Question:", question)
  const container = document.createElement("div");
  const button = document.createElement("button");
  button.type="button";
  button.className="collapsible";
  button.textContent="Hide/Unhide ChatGPT response";

  container.className = "chat-gpt-container";
  container.innerHTML = '<p class="loading">Waiting for ChatGPT response...</p>';
  container.hidden = true;
  button.addEventListener("click", function (){
    if(container.hidden){
      container.hidden = false;
    } else {
      container.hidden = true;
    }
  })

  //div for best place to put solution
  const siderbarContainer = document.getElementById("qd-content").parentElement.parentElement;
  if (siderbarContainer) {
    siderbarContainer.prepend(button);
    siderbarContainer.prepend(container);
  } else {
    container.classList.add("sidebar-free");
    document.getElementById("editor").appendChild(container);
  }

  const port = Browser.runtime.connect();
  port.onMessage.addListener(function (msg) {
    if (msg.answer) {
      container.innerHTML =
        '<p class="prefix">ChatGPT:</p><div id="answer" class="markdown-body" dir="auto"></div>';
      container.querySelector("#answer").innerHTML = markdown.render(msg.answer);
    } else if (msg.error === "UNAUTHORIZED") {
      container.innerHTML =
        '<p>Please login at <a href="https://chat.openai.com" target="_blank">chat.openai.com</a> first</p>';
    } else {
      container.innerHTML = "<p>Failed to load response from ChatGPT</p>";
    }
  });
  port.postMessage({ question });
}

const content = document.getElementById("qd-content");
console.debug("Content found for problem:", content)
if (content) {
    const searchInput = document.getElementsByClassName('_1l1MA')[0]
    run(searchInput.children[0].textContent);
}
