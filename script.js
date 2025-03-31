document.addEventListener("DOMContentLoaded", function () {
  const skillData = {
    courses: [
      "👨‍🏫 資訊教育",
      "💻 C++程式競賽",
      "🔰 資訊安全"
    ],
    skills: [
      { name: "領導力", level: 85 },
      { name: "表達力", level: 90 },
      { name: "創意", level: 75 }
    ]
  };
  // 定義原始的圖片 URL
  let imageUrls = [
    "https://static.wixstatic.com/media/6592d5_98b12e07b369433fa30995f2404646f4~mv2.jpg",
    "https://www.gravatar.com/avatar/444fd32acd03853c88f4bf8558b8699b914e69709c26f33e04ec9e5b1b2e533c?s=512",
    "https://cdn.discordapp.com/attachments/1129301151939047545/1350886864004976712/71398.jpg?ex=67e1996e&is=67e047ee&hm=32d378b711a38bf4da0400b71459795d1021ecdc3ac82c8d1d510bba54bbb79f&"
  ];
  // 取得 #courses 和 #skills
  const coursesSection = document.getElementById("courses");
  const skillsSection = document.getElementById("skills");

  // 生成「授課內容」HTML
  coursesSection.innerHTML = `
      <h4>專長興趣</h4>
      <ul>
        ${skillData.courses.map((course) => `<li>${course}</li>`).join("")}
      </ul>
    `;

  // 生成「技能條」HTML
  skillsSection.innerHTML = `
      <h4>技能條</h4>
      ${skillData.skills
        .map(
          (skill) => `
        <div class="skill-bar">
          <label>${skill.name}</label>
          <div class="bar">
            <div class="level" style="width: ${skill.level}%;"></div>
          </div>
        </div>
      `
        )
        .join("")}
    `;
  
  // 取得 .square-image
  const squareImages = document.querySelectorAll(".square-image");
  // 初始化圖片背景
  function initializeImages() {
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${imageUrls[index]}')`;
    });
  }
  // 初始化圖片
  initializeImages();
  
  // 隨機排列圖片背景
  function shuffleImages() {
    let shuffledUrls = [...imageUrls].sort(() => Math.random() - 0.5);
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${shuffledUrls[index]}')`;
    });
  }
  // 綁定點擊事件
  document.querySelector(".square-images").addEventListener("click", shuffleImages);
});