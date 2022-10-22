const hobby1Img = document.getElementById("hobby-1-img");
const hobby2Img = document.getElementById("hobby-2-img");
const description1 = document.getElementById("description-1");
const description2 = document.getElementById("description-2");
let i = 0;
let j = 0;

const homeMenu = document.getElementById("menu-home");
const profileMenu = document.getElementById("menu-profile");
const hobbiesMenu = document.getElementById("menu-hobbies");

homeMenu.onclick = function () {
  window.scrollTo(0, 0);
};

profileMenu.onclick = function () {
  window.scrollTo(0, 120);
};

hobbiesMenu.onclick = function () {
  window.scrollTo(0, 550);
};

//hobbiesの写真を入れ替える関数
function switchKpop() {
  ++i;
  if (i > 2) {
    i = 0;
  }
  switch (i) {
    case 0:
      hobby1Img.src = "./images/blackpink.jpeg";
      description1.textContent = "↑BLACKPINK↑";
      break;
    case 1:
      hobby1Img.src = "./images/twice.webp";
      description1.textContent = "↑TWICE↑";
      break;
    case 2:
      hobby1Img.src = "./images/ive.jpeg";
      description1.textContent = "↑IVE↑";
      break;
  }
}

// hobbiesの写真を切り替える関数
function switchSushi() {
  ++j;
  if (j > 2) {
    j = 0;
  }
  switch (j) {
    case 0:
      hobby2Img.src = "./images/hamachi.jpg";
      description2.textContent = "↑くら寿司↑";
      break;
    case 1:
      hobby2Img.src = "./images/IMG_8596.jpg";
      description2.textContent = "↑スシロー↑";
      break;
    case 2:
      hobby2Img.src = "./images/IMG_9518.jpg";
      description2.textContent = "↑はま寿司↑";
      break;
  }
}

// 一定間隔で関数を実行
setInterval(switchKpop, 2000);
setInterval(switchSushi, 2000);
