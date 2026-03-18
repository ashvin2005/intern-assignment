let clickCount = 0;

async function fetchDogImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const imageUrl = data.message;
    const breedName = imageUrl.split('/')[4];

    document.getElementById("dogImage").src = imageUrl;
    document.querySelector(".box h3").textContent = breedName;

    clickCount++;
    document.getElementById("clickCount").textContent = clickCount;
}

document.getElementById("fetchImageBtn").addEventListener("click", fetchDogImage);
