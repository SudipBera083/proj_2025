// Poem text
const kiplingPoem = `<p>If you can <span>smile</span> when life gets tough,    
And <span>hold</span> my hand when the world is rough; 
If you can <span>believe</span> in us when doubts arise,    
And <span>never</span> let go of our shared dreams and skies; 
If you can <span>support</span> me when the road is steep,    
And <span>love</span> me deeply, even when we weep; 
If you can <span>trust</span> my heart with all your own,    
And know in every moment you’re never alone;
If you can <span>wait</span> as we grow and learn,    
And <span>celebrate</span> every little turn; 
If you can <span>cherish</span> the past, and all we’ve been through,    
And <span>believe</span> in our future, together, me and you; 
If you can <span>dream</span> of our love, and see it shine,    
And know that forever, <span>you</span> will always be mine; 
If you can <span>hold</span> my heart with tenderness and grace,    
And <span>love</span> me deeply, in every embrace; 
If you can <span>walk</span> with me through joy and sorrow,    
And look forward to each bright tomorrow; 
If you can <span>celebrate</span> our journey, our start,    
And know that you’ll always have my heart;
If you can <span>remember</span> the day we met,    
On <span>April 2nd, 2020</span>, when our love was set; 
Then ours is a <span>love</span> that will forever stay,    
And with every moment, it’ll never fade away.    
Yours is my <span>heart</span>, now and always,    
Sudip ❤️ Srijita</p>
`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
