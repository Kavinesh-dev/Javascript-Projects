const generateBtn = document.getElementById("generate");
const textArea = document.querySelector(".output");
const paragraphRange = document.getElementById("paragraphs");
const paragraphValue = document.getElementById("paragraphsValue");
const wordsRange = document.getElementById("words");
const wordsValue = document.getElementById("wordsValue");
const elSelect = document.getElementById("tags");
console.log(elSelect);

//Functionality for displaying text in the output class container
function addText() {
  textArea.innerHTML = `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna
        aliqua. Diam in arcu cursus euismod
        quis viverra nibh. Nunc aliquet bibendum
        enim facilisis gravida neque convallis
        a cras. Sagittis purus sit amet volutpat
        Consequat mauris. Duis ultricies lacus
        sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed
        faucibus turpis in eu. Ridiculus mus mauris
        vitae ultricies leo integer malesuada nunc vel.
        Nulla pharetra diam sit amet nisl suscipit.
        Lobortis elementum nibh tellus molestie nunc
        non blandit massa enim. Dis parturient montes
        nascetur ridiculus mus. Justo nec ultrices dui
        sapien eget. Enim tortor at auctor urna nunc.
        Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris nunc.`;
}

generateBtn.addEventListener("click", () => {
  addText();
});

//Functionality for adding range value dynamically.
paragraphRange.oninput = function () {
  console.log(this);
  paragraphValue.innerHTML = this.value;
};

//Functionality for adding words value dynamically.
wordsRange.oninput = function () {
  wordsValue.innerHTML = this.value;
};

//Functionality for adding tags to the Tag element;
const tags = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];
function addSelectElement() {
  tags.forEach((el, index) => {
    const option = document.createElement("option");
    option.textContent = `<${el}>`;
    option.value = el;
    elSelect.appendChild(option);
  });
}
addSelectElement();
