const generateBtn = document.getElementById("generate");
const textArea = document.querySelector(".output");
const paragraphRange = document.getElementById("paragraphs");
const paragraphValue = document.getElementById("paragraphsValue");
const wordsRange = document.getElementById("words");
const wordsValue = document.getElementById("wordsValue");
const elTags = document.getElementById("tags");
const tags = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];

//Functionality for increasing paragraph range value;
function increasePara() {
  paragraphValue.innerHTML = this.value;
}

//Functionality for increasing words range value;
function increaseWord() {
  wordsValue.innerHTML = this.value;
}

//Function for creating tags and also generatebtn listener
function createTag() {
  tags.forEach((el) => {
    const option = document.createElement("option");
    option.value = el;
    option.textContent = `<${el}>`;
    elTags.appendChild(option);
  });

  paragraphRange.addEventListener("input", increasePara);
  wordsRange.addEventListener("input", increaseWord);

  generateBtn.addEventListener("click", finalLorem);
}

//Function for creating words
function createWords(words) {
  const para = `Lorem ipsum dolor sit amet, consectetur 
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

  const loremValue = para.split(" ").filter((el) => el !== " ");
  return loremValue.slice(0, words).join(" ");
}

//Function for creating paragraph;
function createParagraph(words, paragraphs, tag) {
  const existingText = textArea.innerHTML;
  const paragraph = [];

  for (let i = 0; i < paragraphs; i++) {
    let finalWords = createWords(words);
    let paragraphVal = finalWords;
    paragraph.push(`<${tag}>${paragraphVal}</${tag}>`);
  }
  console.log(paragraph.join("<br>"));
  const newText = existingText + paragraph.join("<br>");
  textArea.innerHTML = newText;
}

// Function for generating final lorem
function finalLorem() {
  const para = Number(paragraphRange.value);
  const word = Number(wordsRange.value);
  const tag = document.getElementById("tags").value;
  createParagraph(word, para, tag);
}
createTag();
