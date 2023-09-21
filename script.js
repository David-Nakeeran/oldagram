'use strict';

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

// 1) create element

// 2) textContent element

// 3) append element 

// 4) add class to element

const subContainer = document.querySelector('.sub-container');




for(let i = 0; i < posts.length; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    subContainer.append(row);
    
    const column = document.createElement('div');
    column.className = 'column';
    row.append(column);

    const img = document.createElement('img');
    img.className = 'small-img';
    img.src = posts[i].avatar;
    img.alt = posts[i].name;
    row.append(img);

    let boldPara = document.createElement('p');
    boldPara.className = 'bold-para';
    const smallPara = document.createElement('p');
    smallPara.className = 'small-para';
    boldPara.textContent = posts[i].name;
    smallPara.textContent = posts[i].location;
    column.append(boldPara);
    column.append(smallPara);

    const mainImg = document.createElement('img');
    mainImg.className = 'main-img';
    mainImg.src = posts[i].post;
    mainImg.alt = posts[i].name;
    subContainer.append(mainImg);

    // const icons = document.createElement('img');
    // icons.className = 'img-icons';
    // icons.src = 'images/icon-heart.png';
    // icons.alt = 'heart-icon';
    // subContainer.append(icons)



}

const iconImgs = ['images/icon-heart.png', 'images/icon-heart.png', 'images/icon-heart.png']

function renderIconImgs() {
    const icons = document.createElement('img');
    icons.className = 'img-icons';
    icons.src = 'images/icon-heart.png';
    icons.alt = 'heart-icon';
    subContainer.append(icons)
}