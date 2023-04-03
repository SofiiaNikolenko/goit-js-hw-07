import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGalleryList = galleryItems.map(
    ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    ).join("");

gallery.innerHTML = createGalleryList;

const instance = basicLightbox.create(
    `<img src="" width="800" height="600">`, {
        onShow: (instance) => {
            gallery.addEventListener("keydown", onEscKeyPress);
            console.log("open");
        },
        onClose: (instance) => {
            gallery.removeEventListener("keydown", onEscKeyPress);
            console.log("close");
        },
    });

    const clickOnImage = (evt) => {
        evt.preventDefault();
        const sorceEvent = evt.target.dataset.source;
        if (sorceEvent) {
            instance.element().querySelector("img").src = sorceEvent;
            instance.show();
        }
        return;
    };

    const onEscKeyPress = (evt) => {
        console.log(evt);
        const ESC_KEY_CODE = "Escape";
        const IsEscKeY = evt.code === ESC_KEY_CODE;

        if (IsEscKeY) {
            instance.close();
        }
    };

gallery.addEventListener("click", clickOnImage);
