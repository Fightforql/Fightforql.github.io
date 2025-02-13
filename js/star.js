(function() {
  var starfield = document.createElement('div');
  starfield.style.position = 'fixed';
  starfield.style.top = '0';
  starfield.style.left = '0';
  starfield.style.pointerEvents = 'none';
  starfield.style.zIndex = '9999';
  document.body.appendChild(starfield);

  // 生成随机颜色
  function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`; // RGB颜色格式
  }

  // 生成星星效果（鼠标移动时）
  function createStar(e) {
    var star = document.createElement('div');
    var size = Math.random() * 10 + 5; // 星星大小
    var x = e.clientX + (Math.random() - 0.5) * 10;
    var y = e.clientY + (Math.random() - 0.5) * 10;

    star.style.position = 'absolute';
    star.style.top = `${y}px`;
    star.style.left = `${x}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.borderRadius = '50%';
    star.style.backgroundColor = getRandomColor(); // 使用随机颜色
    star.style.opacity = '0.8';
    star.style.animation = 'twinkle 1s ease-out forwards';

    starfield.appendChild(star);

    setTimeout(function() {
      star.remove();
    }, 1000); // 星星存在1秒钟后消失
  }

  // 创建一个泡泡效果（鼠标点击时）
  function createBubble(e) {
    var bubble = document.createElement('div');
    var size = Math.random() * 20 + 30; // 泡泡的大小，范围从30px到50px

    // 设置泡泡的位置，使其中心与点击位置一致
    var x = e.clientX - size / 2; // 减去泡泡的一半宽度，使得中心点与点击位置一致
    var y = e.clientY - size / 2; // 减去泡泡的一半高度，使得中心点与点击位置一致

    bubble.style.position = 'absolute';
    bubble.style.top = `${y}px`;
    bubble.style.left = `${x}px`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.borderRadius = '50%';
    bubble.style.backgroundColor = 'rgba(0, 123, 255, 0.6)'; // 蓝色，透明度0.6
    bubble.style.opacity = '1';
    bubble.style.animation = `bubbleAnimation 2s ease-out forwards`; // 应用泡泡动画

    starfield.appendChild(bubble);

    setTimeout(function() {
      bubble.remove();
    }, 2000); // 泡泡2秒后移除
  }

  // 鼠标移动时生成星星
  document.addEventListener('mousemove', function(e) {
    createStar(e);
  });

  // 鼠标点击时生成一个泡泡
  document.addEventListener('click', function(e) {
    createBubble(e);  // 生成单个泡泡效果
  });
})();
