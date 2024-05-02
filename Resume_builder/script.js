const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");
const btnGenerate = document.querySelector("button");
const form = inputField.querySelectorAll("input, textarea");

const values = {};
let isHidden = true;

function get() {
  main.style.display = "none";
  form.forEach((el) => {
    const name = el.getAttribute("name");
    const value = el.value.trim();
    values[name] = value;
  });
}

function generateResume() {
  if (isHidden) {
    get();
    outputContainer.style.display = "block";
    outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                    <h1>${values.name}</h1>
                    <h4>${values.title}</h4>
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${values.objective}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>${values.skills}</p>
                        </div>
                        <div class="box">
                            <h2>Academic Details</h2>
                            <p>${values.academic_details}</p>
                        </div>
                        <div class="box">
                            <h2>Contact</h2>
                            <p>${values.contact}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <h2>Work Experience</h2>
                            <p>${values.work_experience}</p>
                        </div>
                        <div class="box">
                            <h2>Achievements</h2>
                            <p>${values.achievements}</p>
                        </div>
                        <div class="box">
                            <h2>Projects</h2>
                            <p>${values.projects}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onclick="print()">Print Resume</button>
        `;
    isHidden = false;
  } else {
    main.style.display = "block";
    outputContainer.style.display = "none";
    outputContainer.innerHTML = "";
    isHidden = true;
  }
}

btnGenerate.addEventListener("click", function () {
  generateResume();
});
