// ts-check

const listItems = document.querySelectorAll("li");
const heading = document.querySelector("h1")
const myImage = document.querySelector("Img")
const btn = document.querySelector("button")
const h3 = document.querySelector("h3")

function toggleListItemToDone(e) {
  e.target.className = !e.target.className ? "done": ""
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleListItemToDone);
});

heading.textContent = "Hello world"

myImage.addEventListener("click", () => {
  console.log(myImage)
  const mySrc = myImage.getAttribute("src")
  if (mySrc === "./images/firefox.png") {
    myImage.setAttribute("src", "./images/google.png")
  } else {
    myImage.setAttribute("src", "./images/dragon.png")
  }
})

function setMessage() {
  const newName = prompt("What is yoiur message?")
  if (!newName) {
    setMessage();
  } else {
    localStorage.setItem("msg", newName)
      h3.textContent = `Kenny sabi web ooo, ${newName}`
  }
}

if (!localStorage.getItem("msg")) {
  setMessage();
} else {
  const stroredMsg = localStorage.getItem("msg")
  h3.textContent = `Welcomew back, ${stroredMsg}`
}

btn.addEventListener("click", () => {
  setMessage()
})