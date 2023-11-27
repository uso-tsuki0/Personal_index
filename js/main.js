//global variable for keeping track of the frame
let frame = 0;
let urls = [
    "retailer.html",
    "houseprice.html",
    "finegpr.html",
    "https://www.instagram.com/"
]
let texts = [
    '○●●',
    '●○●',
    '●●○',
    '●●●○●●',
    '●●●●○●',
    '●●●●●○'
]

function change_frame() {
    let imgs = document.querySelectorAll('.rolling img');
    let len = imgs.length;
    let background = document.querySelector('.background')
    imgs[frame].style.opacity = 0;
    frame = (frame + 1) % len;
    imgs[frame].style.opacity = 1;
    document.querySelector('.rolling p').textContent = texts[frame];
    background.style.background = "url("+imgs[frame].src+")";
}

document.querySelector('.button_right').addEventListener('click', change_frame);

document.querySelector('.button_left').addEventListener('click', function() {
    let imgs = document.querySelectorAll('.rolling img');
    let len = imgs.length;
    let background = document.querySelector('.background')
    imgs[frame].style.opacity = 0;
    frame = (frame + len - 1) % len;
    imgs[frame].style.opacity = 1;
    document.querySelector('.rolling p').textContent = texts[frame];
    background.style.background = "url("+imgs[frame].src+")";
});

auto_frame = setInterval(change_frame, 2000);

document.querySelector('.rolling').addEventListener('mouseover', function() {
    console.log('mouseover');
    clearInterval(auto_frame);
});

document.querySelector('.rolling').addEventListener('mouseout', function() {
    console.log('mouseout');
    auto_frame = setInterval(change_frame, 2000);
});

document.querySelector('.rolling .content').addEventListener('click', function() {
    console.log('click');
    window.open(urls[frame]);
});
