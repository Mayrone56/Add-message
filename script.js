function updateCountMessage() {
  const messagesCount = document.querySelectorAll("p").length;
  document.querySelector("#count").textContent = messagesCount;
}

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector("#footer").innerHTML += `<span id="date">${date}</span>`;

//DELETE MESSAGE
function deleteMessage() {
  // console.log(deleteButton)
  for (let i = 0; i < document.querySelectorAll(".delete").length; i++) {
    document.querySelectorAll(".delete")[i].addEventListener("click",
      function () {
        // console.log(this);
        this.parentNode.remove();
        updateCountMessage();
      });
  }
}

//ADD MESSAG$E
const addMessageBt = document
  .querySelector("#btn-add")
  .addEventListener("click", function addMessage() {
    // console.log("click add bt detected");
    const message = document.getElementById("add-message").value;
    // console.log("MESSAGE", message);
    document.querySelector("#msg-container").innerHTML += `
      <div class="row new-row">
      <img class="avatar" src="images/avatar-1.jpg" />
      <div class="text-container">
        <h6>Elise Rone</h6>
        <p>${message}</p>
      </div>
      <span class="delete">✖</span>
      </div>
    `;
    //Resets placeholder
    document.querySelector('#add-message').value = "";
    document.querySelector('#add-message').placeholder = "📩 New message...";
    updateCountMessage();
    deleteMessage();
  });

//SEARCH
document.querySelector('#btn-search').addEventListener('click', function () {
  // console.log("Click search bt detected")
  //Value of search
  const textToCompare = document.querySelector("#search-message").value.toLowerCase();
  // console.log("textToCompare", textToCompare);

  //Text content of h6
  const titles = document.querySelectorAll('h6');

  for (let i = 0; i < titles.length; i++) {
    const eachTitle = titles[i].textContent.toLocaleLowerCase();
    console.log("eachTitle", eachTitle);
    if (eachTitle.includes(textToCompare)) {
      const rowToShow = titles[i].parentNode.parentNode;
      rowToShow.style.display = "flex";
    } else {
      const rowToHide = titles[i].parentNode.parentNode;
      rowToHide.style.display = "none";
    }
  }
  // Resets placeholder search
  document.querySelector('#search-message').value = "";
})
deleteMessage();
updateCountMessage();

