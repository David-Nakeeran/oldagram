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

const iconsArr = [
['images/icon-heart.png', 'heart-icon'],
['images/icon-comment.png', 'comment-icon'],
['images/icon-dm.png', 'dm-icon'],
];

const container = document.querySelector('.container');
let subContainer;


for(let i = 0; i < posts.length; i++) {
    renderPosts(posts, [i])
};

// Renders oldagram posts
function renderPosts([index], [i]) {
    renderSubContainer();

    const row = createContainerDiv('row', subContainer);

    const column = createContainerDiv('column', row);
    
    const img = createImgElement('small-img', row, posts, [i], ['avatar']);

    const boldPara = createTextElement('p','bold-para', posts, [i], ['name'], column);

    const smallPara = createTextElement('p','small-para', posts, [i], ['location'], column );

    const mainImg = createImgElement('main-img', subContainer, posts, [i], ['post']);

    renderIconImgs();
    
    const likes = document.createElement('p');
    likes.className = 'bold-para';
    likes.textContent = `${posts[i].likes} likes`;
    subContainer.append(likes)

    const bottomContainer = createContainerDiv('bottom-container', subContainer);

    const userName = createTextElement('p','bold-para', posts, [i], ['username'], bottomContainer );
    
    const comments = createTextElement('span', 'small-para', posts, [i], ['comment'], userName);
};

// Renders a sub container and appends to container
function renderSubContainer() {
    subContainer = document.createElement('div');
    subContainer.className = 'sub-container';
    container.append(subContainer);
};

// Renders Div container
function createContainerDiv(elementclass, parent) {
    const element = document.createElement('div');
    element.className = elementclass;
    parent.append(element);
    return element;
};

// Renders Text Elements
function createTextElement(tagname, elementclass, arr, index, key, parent) {
    const element = document.createElement(tagname);
    element.className = elementclass;
    element.textContent = arr[index][key];
    parent.append(element);
    return element;
};

// Renders Post Images
function createImgElement(elementclass, parent, arr,index, key) {
    const element = document.createElement('img');
    element.className = elementclass;
    element.src = arr[index][key];
    element.alt = arr[index].name;
    parent.append(element);
    return element;
};


// Loops through iconsArr and appends to container
function renderIconImgs() {
        const iconsContainer = document.createElement('div');
        iconsContainer.className = 'icons';
        subContainer.append(iconsContainer)

        for(let i = 0; i < iconsArr.length; i++) {
            const icons = document.createElement('img');
            icons.className = 'img-icons';
            icons.src = iconsArr[i][0];
            icons.alt = iconsArr[i][1];
            iconsContainer.append(icons)
     };
};
