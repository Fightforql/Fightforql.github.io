(function() {
  var starfield = document.createElement('div');
  starfield.style.position = 'fixed';
  starfield.style.top = '0';
  starfield.style.left = '0';
  starfield.style.width = '100%'; // 确保宽度
  starfield.style.height = '100%'; // 确保高度
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

  // 生成星星SVG效果（鼠标移动时）
  function createStar(e) {
    var size = Math.random() * 10 + 5; // 星星大小
    var x = e.clientX + (Math.random() - 0.5) * 10;
    var y = e.clientY + (Math.random() - 0.5) * 10;

    var star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var starPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // 正确的五角星路径数据
    var pathData = 'M2.5,0 L3.09,1.64 L5,1.64 L3.64,2.5 L4.09,4.36 L2.5,3.18 L0.91,4.36 L1.36,2.5 L0,1.64 L1.91,1.64 Z';

    star.setAttribute('width', size);
    star.setAttribute('height', size);
    star.setAttribute('viewBox', '0 0 5 5'); // 设置视口大小
    star.style.position = 'absolute';
    star.style.top = `${y}px`;
    star.style.left = `${x}px`;
    star.style.opacity = '0.8';
    star.style.animation = 'twinkle 1s ease-out forwards';

    starPath.setAttribute('d', pathData);
    starPath.setAttribute('fill', getRandomColor()); // 使用随机颜色
    star.appendChild(starPath);

    starfield.appendChild(star);

    setTimeout(function() {
      star.remove();
    }, 1000); // 星星存在1秒钟后消失
  }

  // 创建“功德+1”字样并显示
  function createText(x, y) {
    var text = document.createElement('div');
    var messages = ['功德+1', '运气+1', '快乐+1','健康+1','生气-1','烦恼-1','财富+1'];
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    text.textContent = randomMessage;
    text.classList.add('text'); // 使用CSS类
    text.style.position = 'absolute'; // 使用绝对定位
    text.style.top = `${y}px`;
    text.style.left = `${x}px`;
    text.style.color = getRandomColor(); // 使用随机颜色
    text.style.fontSize = '20px';
    text.style.fontWeight = 'bold';
    text.style.opacity = '1';
    text.style.transition = 'opacity 1s ease-out, transform 1s ease-out'; // 渐变和移动效果

    document.body.appendChild(text);

    // 文字显示后渐变消失
    setTimeout(function() {
      text.style.opacity = '0';
      text.style.transform = 'translateY(-40px)'; // 向上移动更远
    }, 10); // 延迟一下才开始动画

    // 1秒后移除文字
    setTimeout(function() {
      text.remove();
    }, 1000); // 确保文字1秒后消失
  }

  // 鼠标点击时生成“功德+1”
  document.addEventListener('click', function(e) {
    var x = e.clientX + window.scrollX; // 加上滚动偏移量
    var y = e.clientY + window.scrollY; // 加上滚动偏移量
    createText(x, y); // 在鼠标点击位置显示功德+1
  });

  // 鼠标移动时生成星星
  document.addEventListener('mousemove', function(e) {
    createStar(e);
  });
})();
