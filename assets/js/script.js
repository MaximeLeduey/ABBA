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