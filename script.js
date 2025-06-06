// 颜色组
const morandiGradients = [
    ['#a8a9ad', '#c1b2ab'],
    ['#b4ada4', '#d3c7ba'],
    ['#9ea9a4', '#bfc1b4']
];

const chineseGradients = [
    ['#d8a373', '#bb7a57'],
    ['#8c4a4a', '#b56a60'],
    ['#708090', '#a9a9a9']
];

// 当前色系
let currentSet = morandiGradients;
let index = 0;

const gradientBox = document.getElementById('gradient-box');
const nextBtn = document.getElementById('next-btn');
const morandiBtn = document.getElementById('morandi-btn');
const chineseBtn = document.getElementById('chinese-btn');

// 切换色系
morandiBtn.addEventListener('click', () => {
    currentSet = morandiGradients;
    index = 0;
    updateGradient();
});
chineseBtn.addEventListener('click', () => {
    currentSet = chineseGradients;
    index = 0;
    updateGradient();
});

// 下一组渐变
nextBtn.addEventListener('click', () => {
    index = (index + 1) % currentSet.length;
    updateGradient();
});

// 更新背景
function updateGradient() {
    const [color1, color2] = currentSet[index];
    gradientBox.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

// 页面加载时显示第一组
updateGradient();
