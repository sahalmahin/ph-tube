const loadVideos = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const videos = data.data
    showVideos(videos);
}

const showVideos = videos => {
    const videoContainer = document.getElementById('video-container');
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList = `card card-compact shadow-xl mx-auto w-[350px]`;
        videoCard.innerHTML = `
        <figure><img class="w-[380px] h-52" src="${video.thumbnail}" alt=""/></figure>
            <div class="card-body">
                <div class="">
                    <div class="flex">
                        <img class="w-10 h-10 rounded-full" src="${video.authors[0].profile_picture}" alt="">
                        <div class="ml-3">
                            <h3 class="font-bold text-lg">${video.title}</h3>
                            <p class="font-medium text-sm my-2"><span class="text-gray-500">${video.authors[0].profile_name}</span> <--${video.authors[0].verified}--></p>
                            <p class="font-medium text-sm"><span class="text-gray-500">${video?.others?.views || '<h3>&#10003; JavaScript</h3>'}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        videoContainer.appendChild(videoCard);
    })
}

const groupButton = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const button = data.data;
    showBtn(button);
}

const showBtn = buttons => {
    console.log(buttons);
    const btnGroup = document.getElementById('btn-group');
    btnGroup.innerHTML = `
    <div class="flex justify-center items-center gap-4">
            <button class="btn">${buttons[0].category}</button>
            <button class="btn">${buttons[1].category}</button>
            <button class="btn">${buttons[2].category}</button>
            <button class="btn">${buttons[3].category}</button>
        </div>
    `;
}

function blogBtn() {
    const url = 'http://127.0.0.1:5500/blog.html';
    window.open(url);
}

loadVideos();
groupButton();