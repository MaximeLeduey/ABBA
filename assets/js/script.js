// gestion du slider d'albums



fetch('../assets/data/data.json')
.then(response => response.json())
.then(data => {
    const slider = document.querySelector('.albums-slider');
    data.albums.map(album => {
        const html = ` <div class="album">
        <img class='album-image' alt="${album.label}" aria-label="${album.label}" src="/assets/img/${album.img}">
        <p class="album-name">${album.name}</p>
    </div>`;
        slider.innerHTML += html;
    })
});


fetch('../assets/data/data.json')
.then(response => response.json())
.then(data => {
    const carousel = document.querySelector('.carousel-inner');
    counter = 0;
    data.clips.map(clip => {
        let className = "";
        if(counter == 0) {
            className = "carousel-item active";
        }
        else {
            className = "carousel-item";
        }
        counter++;
        const html = `<div class="${className}">
        <img src="/assets/img/${clip.img}" class="d-block w-100" alt="${clip.label}" aria-label="${clip.label}">
      </div>`;
      carousel.innerHTML += html;
    })
})



// gestion du scroll smooth 

const links = [...document.querySelectorAll('nav li')];

const sections = [...document.querySelectorAll('section')];

let sectionsPosition;

function calcPosition() {
    sectionsPosition = sections.map(section => (section.offsetTop));
}

calcPosition();

links.forEach(link => link.addEventListener('click', addSmoothScroll));

function addSmoothScroll(e) {
    const linkIndex = links.indexOf(e.target);
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth"
    })
}

window.addEventListener('resize', calcPosition);