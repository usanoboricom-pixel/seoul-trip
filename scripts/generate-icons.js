const sharp = require("sharp");
const path = require("path");

// 韓国国旗をベースにしたアイコンSVG（圧縮・シンプル版）
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <!-- 背景：黒（アプリのダークテーマに合わせる） -->
  <rect width="512" height="512" rx="100" fill="#111111"/>

  <!-- 白い円形背景（国旗エリア） -->
  <circle cx="256" cy="256" r="200" fill="#ffffff"/>

  <!-- 太極（taeguk）上半分：赤 -->
  <path d="M256 256
    m0,-120
    a120,120 0 0,1 0,240
    a60,60 0 0,0 0,-120
    a60,60 0 0,1 0,-120z"
    fill="#C60C30"/>

  <!-- 太極（taeguk）下半分：青 -->
  <path d="M256 256
    m0,120
    a120,120 0 0,1 0,-240
    a60,60 0 0,0 0,120
    a60,60 0 0,1 0,120z"
    fill="#003478"/>

  <!-- 左上の卦（乾）: 3本実線 -->
  <g transform="translate(128,128) rotate(-45,0,0)" fill="#000000">
    <rect x="-32" y="-6" width="64" height="10" rx="3"/>
    <rect x="-32" y="6" width="64" height="10" rx="3"/>
    <rect x="-32" y="18" width="64" height="10" rx="3"/>
  </g>

  <!-- 右上の卦（離）: 実/空/実 -->
  <g transform="translate(384,128) rotate(45,0,0)" fill="#000000">
    <rect x="-32" y="-18" width="64" height="10" rx="3"/>
    <rect x="-32" y="-6" width="28" height="10" rx="3"/>
    <rect x="4" y="-6" width="28" height="10" rx="3"/>
    <rect x="-32" y="6" width="64" height="10" rx="3"/>
  </g>

  <!-- 左下の卦（坎）: 空/実/空 -->
  <g transform="translate(128,384) rotate(45,0,0)" fill="#000000">
    <rect x="-32" y="-18" width="28" height="10" rx="3"/>
    <rect x="4" y="-18" width="28" height="10" rx="3"/>
    <rect x="-32" y="-6" width="64" height="10" rx="3"/>
    <rect x="-32" y="6" width="28" height="10" rx="3"/>
    <rect x="4" y="6" width="28" height="10" rx="3"/>
  </g>

  <!-- 右下の卦（坤）: 3本空線 -->
  <g transform="translate(384,384) rotate(-45,0,0)" fill="#000000">
    <rect x="-32" y="-18" width="28" height="10" rx="3"/>
    <rect x="4" y="-18" width="28" height="10" rx="3"/>
    <rect x="-32" y="-6" width="28" height="10" rx="3"/>
    <rect x="4" y="-6" width="28" height="10" rx="3"/>
    <rect x="-32" y="6" width="28" height="10" rx="3"/>
    <rect x="4" y="6" width="28" height="10" rx="3"/>
  </g>
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
