//Question 1:

// Answer

const cat = {
    complain: function() {
        console.log("Meow!")
    }
}
cat.complain();


// Question 2:

// Answer

const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";


// Question 3:

// Answer

heading.style.fontSize = "2em";


// Question 4:

// Answer


heading.classList.add(".subheading");

// Question 5:

// Answer

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color =  "red";
}

// Question 6:



// Answer

const resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML += "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";



// Question 7:

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Answer

function catList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

catList(cats);

// Question 8:

// Answer


function createCats(cats) {

let catHtml = "";

    for(let i = 0; i < cats.length; i++) {

        let catAge = "Age unknown";

        if(cats[i].age) {
            catAge = cats[i].age;
        }

        catHtml += `<div class="cats">
        <h5>${cats[i].name}</h5> 
        <p>Age: ${catAge}</p>
        </div>`;
    }
    
    return catHtml;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;