let openIndex = 0; // Keeps track of the open item

// Notification bell and dropdown
const bellContainer = document.getElementById("notification-bell-container");
const dropdown = document.getElementById("notification-dropdown");
const userDropMenu = document.querySelector(".user-info");
const userDropDown = document.querySelector(".user-dropdown");

bellContainer.addEventListener("click", function (event) {
	toggleDropdown(dropdown);
	event.stopPropagation();
	closeUserDropdown(userDropDown);
});

userDropMenu.addEventListener("click", function (event) {
	toggleDropdown(userDropDown);
	event.stopPropagation();
	closeNotificationDropdown(dropdown);
});

document.addEventListener("click", function () {
	closeNotificationDropdown(dropdown);
	closeUserDropdown(userDropDown);
});

// Close trial container
const trialContainer = document.querySelector(".trial-container");
const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function () {
	trialContainer.style.display = "none";
});

// Toggle startup guide container height
const startupGuide = document.querySelector(".startup-content-container");
const arrowUpBtn = document.querySelector(".drop-down-button");
const arrowIcon = arrowUpBtn.querySelector("img");

arrowUpBtn.addEventListener("click", function () {
	toggleStartupGuideHeight(startupGuide, arrowIcon);

	const elementsUnderStartupGuide = document.querySelectorAll(
		".startup-guide-container"
	);

	elementsUnderStartupGuide.forEach((element) => {
		if (startupGuide.style.height === "436px") {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	});
});

// Populate startup guide container with detailed items
const startUpTextContainer = [
	{
		title: "Customize your online store",
		description:
			"Choose a theme and add your logo, colors, and images to reflect your brand.",
		link: "https://help.shopify.com/",
		theme: "Customize theme",
		imgSrc: "https://crushingit.tech/hackathon-assets/customise-store.png",
		imgAlt: "customize store img1",
		id: "card1",
	},
	{
		title: "Add your first product",
		description:
			"Write a description, add photos, and set pricing for the products you plan to sell.",
		link: "https://help.shopify.com/",
		theme: "Add product",
		imgSrc: "https://crushingit.tech/hackathon-assets/product.png",
		imgAlt: "customize store img2",
		id: "card2",
	},
	{
		title: "Add a custom domain",
		description:
			"Your current domain is 222219.myshopify.com but you can add a custom <br> domain to help customers find your online store.",
		link: "https://help.shopify.com/",
		theme: "Name store",
		imgSrc: "https://crushingit.tech/hackathon-assets/website.png",
		imgAlt: "customize store img3",
		id: "card3",
	},
	{
		title: "Name your store",
		description:
			"Your temporary store name is currently Davii collections. The store name <br>  appears in your admin and your online store.",
		link: "https://help.shopify.com/",
		theme: "Customize theme",
		imgSrc: "https://crushingit.tech/hackathon-assets/name-store.png",
		imgAlt: "customize store img2",
		id: "card4",
	},
	{
		title: "Set up a payment provider",
		description:
			"Choose a payment provider to start accepting payments. You’ll need to create <br>  an account with the payment provider and set it up with your Shopify store. ",
		link: "https://help.shopify.com/",
		theme: "Set up payment",
		imgSrc: "https://crushingit.tech/hackathon-assets/payment.png",
		imgAlt: "customize store img5",
		id: "card5",
	},
];

startUpTextContainer.forEach(createGuideItem);

// Functions
function toggleDropdown(element) {
	element.style.display = element.style.display === "block" ? "none" : "block";
}

function closeNotificationDropdown(element) {
	if (element.style.display === "block") {
		element.style.display = "none";
	}
}

function closeUserDropdown(element) {
	if (element.style.display === "block") {
		element.style.display = "none";
	}
}

function toggleStartupGuideHeight(element, icon) {
	if (element.style.height === "106px") {
		element.style.height = "436px";
		icon.src = "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
	} else {
		element.style.height = "106px";
		icon.src = "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
	}
}

function createGuideItem(item, index) {
	const newItem = document.createElement("div");
	newItem.className = "startup-guide-container";
	newItem.innerHTML = `
        <div class="startup-guide-icon" role="button" aria-expanded="${
					index === openIndex
				}" onclick="toggleAccordion(${index})">
            <div class="svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none" class="svg1" role="presentation">
                    <circle cx="16" cy="16" r="12" stroke="#414141" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none" class="svg2" role="presentation">
                    <path
                        d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
                        stroke="#414141"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg> 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg3" role="presentation">
                    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
                    <path
                        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                        fill="#fff"
                    ></path>
                </svg>
            </div>
            <div class="startup-guide-collapse">
                <p class="main-title">${item.title}</p>
            </div>
        </div>
        <div class="startup-guide-text-container" id="${item.id}" style="${
		index === openIndex ? "display: block;" : "display: none;"
	}" aria-hidden="${index !== openIndex}">
            <div class="guide-section">
                <strong>
                    ${item.description}
                    <br />
                    <a href="${item.link}">Learn more</a>
                </strong>
            </div>
            <div class="guide-section">
                <p>${item.theme}</p>
            </div>
        </div>
        <img src="${item.imgSrc}" alt="${
		item.imgAlt
	}" class="startup-guide-img" style="${
		index === openIndex ? "display: block;" : "display: none;"
	}" aria-hidden="${index !== openIndex}" />
    `;

	if (index === openIndex) {
		newItem.classList.add("open");
	}

	document.querySelector(".startup-guide-containers").appendChild(newItem);
}

function toggleAccordion(index) {
	if (index !== openIndex) {
		const containers = document.querySelectorAll(".startup-guide-container");
		containers.forEach((container, i) => {
			const textContainer = container.querySelector(
				".startup-guide-text-container"
			);
			const img = container.querySelector(".startup-guide-img");

			if (i === index) {
				textContainer.style.display = "block";
				img.style.display = "block";
				container.classList.add("open");
			} else {
				textContainer.style.display = "none";
				img.style.display = "none";
				container.classList.remove("open");
			}
		});

		openIndex = index; // Update the open item index
	}
}

let progressValue = 0;

// Your existing JavaScript code...

const startupIcons = document.querySelectorAll(".svg-container");
const defaultIcons = document.querySelectorAll(".svg1");
const hoverIcons = document.querySelectorAll(".svg2");
const clickedIcons = document.querySelectorAll(".svg3");
let isClicked = false;

startupIcons.forEach((startupIcon, index) => {
	let isClicked = false;

	startupIcon.addEventListener("mouseover", () => {
		if (!isClicked) {
			defaultIcons[index].style.display = "none";
			hoverIcons[index].style.display = "block";
		}
	});

	startupIcon.addEventListener("mouseout", () => {
		if (!isClicked) {
			defaultIcons[index].style.display = "block";
			hoverIcons[index].style.display = "none";
		}
	});

	startupIcon.addEventListener("click", () => {
		isClicked = !isClicked; // Toggle the click state

		if (isClicked) {
			clickedIcons[index].style.display = "block";
			defaultIcons[index].style.display = "none";
			hoverIcons[index].style.display = "none";

			// Update progress when an icon is clicked
			updateProgress(index);
		} else {
			clickedIcons[index].style.display = "none";
			defaultIcons[index].style.display = "block";
			hoverIcons[index].style.display = "none";

			// Update progress when an icon is clicked
			updateProgress(index);
		}
	});
});

function updateProgress(index) {
	const clickedIcons = document.querySelectorAll(".svg3");

	// Check if the clicked icon is set to display block
	if (clickedIcons[index].style.display === "block") {
		// Check if the progress is less than 100 and the progress text is less than 5
		if (progressValue < 100 && progressValue / 20 < 5) {
			progressValue += 20; // Increment progress by 20%
			updateProgressText(1); // Increment progress text by 1
			updateProgressBar(progressValue);
		}
	} else {
		// Check if the progress is greater than 0 and the progress text is greater than 0
		if (progressValue > 0 && progressValue / 20 > 0) {
			progressValue -= 20; // Decrement progress by 20%
			updateProgressText(-1); // Decrement progress text by 1
			updateProgressBar(progressValue);
		}
	}
}

function updateProgressText(value) {
	const progressText = document.getElementById("progress-text");
	const completedSteps = Math.floor(progressValue / 20); // Each click increments by 20%
	progressText.textContent = `${completedSteps}/5 completed`;
}

function updateProgressBar(value) {
	const progressBar = document.getElementById("progress");
	progressBar.style.width = value + "%";
}
