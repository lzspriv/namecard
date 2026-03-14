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
    "./images/small-1.jpg",
    "./images/small-2.jpg",
    "./images/small-3.jpg"
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
