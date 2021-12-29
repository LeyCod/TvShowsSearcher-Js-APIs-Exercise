const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchInfo = form.elements.searchBar.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInfo}`)
    displayImages(res.data)

    form.elements.searchBar.value = '';
})

const displayImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
        
    }
}