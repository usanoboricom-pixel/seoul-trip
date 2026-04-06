const sharp = require("sharp");
const path = require("path");

// 黒背景に白抜き「SEOUL」のシンプルなアイコン
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <!-- 黒背景・角丸 -->
  <rect width="512" height="512" rx="110" fill="#111111"/>
  <!-- SEOUL テキスト（モダンサンセリフ、中央配置） -->
  <text
    x="256"
    y="290"
    text-anchor="middle"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="110"
    font-weight="700"
    letter-spacing="8"
    fill="#ffffff"
  >SEOUL</text>
  <!-- 細いゴールドのアンダーライン -->
  <rect x="96" y="318" width="320" height="5" rx="2.5" fill="#D4A017"/>
</svg>`;

const svgBuffer = Buffer.from(svg);
const publicDir = path.join(__dirname, "../public");

async function generate() {
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, "icon-192.png"));
  console.log("✓ icon-192.png");

  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, "icon-512.png"));
  console.log("✓ icon-512.png");

  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("✓ apple-touch-icon.png");

  console.log("Done!");
}

generate().catch(console.error);
