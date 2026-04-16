window.onload = function() {
  // 电脑端背景
  const pcImages = [
    "https://cdn.jsdelivr.net/gh/IArvinServer/Theme@main/2.png",
    "https://cdn.jsdelivr.net/gh/IArvinServer/Theme@main/2.png"
  ];
  // 手机端背景
  const mobileImages = [
    "https://picsum.photos/1080/1920?random=1",
    "https://picsum.photos/1080/1920?random=2"
  ];

  // 判断设备
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let imgUrl;

  if (isMobile) {
    imgUrl = mobileImages[Math.floor(Math.random() * mobileImages.length)];
  } else {
    imgUrl = pcImages[Math.floor(Math.random() * pcImages.length)];
  }

  // 统一背景样式（固定不动）
  let body = document.body;
  body.style.backgroundImage = "url(" + imgUrl + ")";
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundAttachment = "fixed";

  // 卡片半透
  let cards = document.querySelectorAll(".ui.card, .ui.cards>.card");
  cards.forEach(function(card) {
    card.style.background = "rgba(255,255,255,0.85)";
  });
};
