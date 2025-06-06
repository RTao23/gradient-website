const gradientBox = document.getElementById('gradient-box');
const morandiBtn = document.getElementById('morandi-btn');
const chineseBtn = document.getElementById('chinese-btn');

const morandiGradients = [
  ['#a8a9ad', '#c1b2ab'],
  ['#b4ada4', '#d3c7ba'],
  ['#9ea9a4', '#bfc1b4'],
  ['#b9aaa3', '#d3c0ad']
];

const chineseGradients = [
  ['#d8a373', '#bb7a57'],
  ['#8c4a4a', '#b56a60'],
  ['#708090', '#a9a9a9'],
  ['#ffb400', '#f5deb3']
];

let currentSet = morandiGradients;

morandiBtn.addEventListener('click', () => {
  currentSet = morandiGradients;
  updateAnimation();
});

chineseBtn.addEventListener('click', () => {
  currentSet = chineseGradients;
  updateAnimation();
});

// 动态生成 keyframes
function updateAnimation() {
  const keyframes = currentSet.map((pair, index) => {
    const percent = (index / (currentSet.length - 1)) * 100;
    return `${percent}% { background: linear-gradient(45deg, ${pair[0]}, ${pair[1]}); }`;
  }).join('\n');

  const styleTag = document.getElementById('dynamic-gradients');
  if (styleTag) {
    styleTag.innerHTML = `@keyframes gradientAnimation {\n${keyframes}\n}`;
  } else {
    const style = document.createElement('style');
    style.id = 'dynamic-gradients';
    style.innerHTML = `@keyframes gradientAnimation {\n${keyframes}\n}`;
    document.head.appendChild(style);
  }

  gradientBox.style.animation = 'none';
  void gradientBox.offsetWidth; // 强制重绘
  gradientBox.style.animation = 'gradientAnimation 20s infinite alternate';
}

// 初始化
updateAnimation();
