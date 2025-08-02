let currentIndex = 1;

let myImages = [
    { "src": "bandera_cuba.jpg", "name": "Cuban Flag" },
    { "src": "puros.jpg", "name": "A cigar factory" }, 
    { "src": "bici_ajo.jpg", "name": "Garlic seller on a bicycle" }, 
    { "src": "casa.jpg", "name": "a pink house" }, 
    { "src": "cascada.jpg", "name": "Beautiful waterfall" },
    { "src": "ccp_2.jpg", "name": "Ice-cold terere on the beach" }, 
    { "src": "comida.jpg", "name": "The typical food" }, 
    { "src": "kittys.jpg", "name": "Pink vehicles" }, 
    { "src": "paisaje.jpg", "name": "A landscape of Cuba" }, 
    { "src": "pescador.jpg", "name": "Fisherman on the beach" }, 
    { "src": "playa_4.jpg", "name": "Cuban beaches" }, 
    { "src": "playa.jpg", "name": "A restaurant on the beach" }
];

function galleryInit(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML ="";
    for (let index = 0; index < myImages.length; index++) {
        contentRef.innerHTML += addImage2Gallery(myImages[index], index);
    }
}

function addImage2Gallery(element, index) {
    let imgSrc = myImages[index];

    return `<div onclick="toggleOverlay(${index})" class="gallery-item">
                <img class="gallery-picture" src="./assets/img/${imgSrc.src}">  
            </div>`;
}

function toggleOverlay(index) {
    let imgSrc = myImages[index];
    let overlayRef = document.getElementById('overlay');
    let imageName = document.getElementById("image-box-name");
    let imageNumber = document.getElementById("image-number-box");
    let singleImage = document.getElementById("image-box");

    if (index !== undefined) {
        singleImage.src = "./assets/img/" + imgSrc.src;
        singleImage.alt = myImages[index].name;
        singleImage.className = "gallery-picture-big";  
        imageName.innerHTML = imgSrc.name;
        imageNumber.innerHTML = index + 1 + "/" + myImages.length;
    }
    currentIndex = index;
    overlayRef.showModal();
}

function closeOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.close();
}


function changePrev() {
    totalImages = myImages.length;
    currentIndex += -1;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    }
    updateLightboxImage();
}

function changeNext() {
    totalImages = myImages.length;
    currentIndex += +1;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    }
    updateLightboxImage();
}

function updateLightboxImage() {
    let lightboxImg = document.getElementById("image-box");
    let imageName = document.getElementById("image-box-name");
    let imageNumber = document.getElementById("image-number-box");
    let imgSrc = myImages[currentIndex];  
    lightboxImg.src = "./assets/img/" + imgSrc.src;
    imageName.innerHTML = imgSrc.name;
    imageNumber.innerHTML = currentIndex + 1 + "/" + myImages.length;
}

document.addEventListener('DOMContentLoaded', () => {
  const overlayRef = document.getElementById('overlay');

  if (overlayRef) {
    overlayRef.addEventListener('click', (event) => {
      
      if (event.target === overlayRef) {
        overlayRef.close();
      }
    });
  }
});