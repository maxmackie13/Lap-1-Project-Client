// L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3 this is our giphy API key

const search = document.querySelector('#formGifSearch');
search.addEventListener('change', async (event) => {
    const searchTerm = event.srcElement.value;
    console.log(searchTerm);
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3&limit=3&q=${searchTerm}`);
    const iframes = document.querySelectorAll('.formGif');
    for (let [index, frame] of iframes.entries()) {
        frame.src = res.data.data[index].embed_url;
    } 
    const gifs = document.querySelector('#formGifSection')
    const selectors = document.querySelector('#gifSelectorSection')
    gifs.classList.remove('noDisplay');
    selectors.classList.remove('noDisplay');
});

//we are going to have issues getting this working on new posts 
//need to find way of getting this to work on each comment section
const commentsSection = document.querySelector('.commentsSection');
const commentsButton = document.querySelector('.commentSectionButton')
commentsButton.addEventListener('click', () => {
    commentsSection.classList.toggle("noDisplay");
})

const postsSection = document.querySelector('main')
postsSection.addEventListener('click', (event)=>{
    console.dir(event);
    if (event.target.nodeName === 'BUTTON'){
        if (event.target.classList.contains('commentsSectionButton')){
            const commentsSection = document.querySelector('.commentsSection');
            commentsSection.classList.toggle("noDisplay");
        }
    }
})