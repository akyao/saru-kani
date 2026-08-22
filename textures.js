"use strict";

// ゲーム本体（index.html）とアセットビューア（assets.html）で共有する。
// ============================================================
// テクスチャ生成（画像素材を使わず Graphics で描く）
// ============================================================
function buildTextures(scene) {
  var g = scene.make.graphics({ x: 0, y: 0, add: false });

  // --- カニ（自機） 56x40 ---
  g.clear();
  g.fillStyle(0xd83a3a, 1);
  g.fillEllipse(28, 24, 40, 24);            // 甲羅
  g.fillStyle(0xb02020, 1);
  g.fillEllipse(28, 30, 34, 12);            // 甲羅の影
  g.fillStyle(0xd83a3a, 1);
  g.fillEllipse(6, 14, 16, 12);             // 左ハサミ
  g.fillEllipse(50, 14, 16, 12);            // 右ハサミ
  g.fillStyle(0x101018, 1);
  g.fillRect(2, 12, 9, 3);                  // ハサミの切れ込み
  g.fillRect(45, 12, 9, 3);
  g.fillStyle(0xd83a3a, 1);
  g.fillRect(12, 34, 4, 6);                 // 脚
  g.fillRect(20, 36, 4, 4);
  g.fillRect(32, 36, 4, 4);
  g.fillRect(40, 34, 4, 6);
  g.fillStyle(0xffffff, 1);
  g.fillCircle(21, 18, 5);                  // 目
  g.fillCircle(35, 18, 5);
  g.fillStyle(0x000000, 1);
  g.fillCircle(21, 18, 2.5);
  g.fillCircle(35, 18, 2.5);
  g.generateTexture("crab", 56, 40);

  // --- サル（敵） 110x92 ---
  g.clear();
  g.fillStyle(0x8a5a30, 1);
  g.fillCircle(16, 44, 14);                 // 左耳
  g.fillCircle(94, 44, 14);                 // 右耳
  g.fillStyle(0xc79a68, 1);
  g.fillCircle(16, 44, 8);
  g.fillCircle(94, 44, 8);
  g.fillStyle(0x8a5a30, 1);
  g.fillEllipse(55, 46, 76, 72);            // 顔の輪郭
  g.fillStyle(0xf2d3a8, 1);
  g.fillEllipse(55, 54, 56, 48);            // 顔の中（肌色）
  g.fillStyle(0xffffff, 1);
  g.fillCircle(42, 42, 10);                 // 目
  g.fillCircle(68, 42, 10);
  g.fillStyle(0x000000, 1);
  g.fillCircle(43, 44, 5);
  g.fillCircle(67, 44, 5);
  g.fillStyle(0xb5764a, 1);
  g.fillEllipse(55, 66, 30, 18);            // 口元
  g.fillStyle(0x000000, 1);
  g.fillRect(45, 64, 20, 3);                // 口
  g.fillCircle(50, 58, 2);                  // 鼻
  g.fillCircle(60, 58, 2);
  g.generateTexture("monkey", 110, 92);

  // --- Lv1 牛の糞（茶色の単発弾） 14x14 ---
  g.clear();
  g.fillStyle(0x6b4224, 1);
  g.fillCircle(7, 7, 7);
  g.fillStyle(0x8f5c33, 1);
  g.fillCircle(5, 5, 3);
  g.generateTexture("b_dung", 14, 14);

  // --- Lv2 ハチ（黄と黒のホーミング弾） 14x18 ---
  g.clear();
  g.fillStyle(0xffe14d, 1);
  g.fillEllipse(7, 9, 12, 18);
  g.fillStyle(0x111111, 1);
  g.fillRect(1, 5, 12, 3);
  g.fillRect(1, 11, 12, 3);
  g.fillStyle(0xffffff, 0.7);
  g.fillEllipse(1, 8, 6, 8);                // 羽
  g.fillEllipse(13, 8, 6, 8);
  g.generateTexture("b_bee", 14, 18);

  // --- Lv3 栗（炸裂弾） 20x20 ---
  g.clear();
  g.fillStyle(0x5a3316, 1);
  g.fillEllipse(10, 12, 18, 15);            // 実
  g.fillStyle(0x8a5228, 1);
  g.fillEllipse(10, 13, 12, 9);
  g.fillStyle(0xefe0c0, 1);
  g.fillEllipse(10, 18, 12, 4);             // 底の白い部分
  g.fillStyle(0x3a2010, 1);
  g.fillTriangle(10, 0, 5, 7, 15, 7);       // とんがり
  g.generateTexture("b_kuri", 20, 20);

  // --- Lv3 栗の破片 10x10 ---
  g.clear();
  g.fillStyle(0x5a3316, 1);
  g.fillCircle(5, 5, 5);
  g.fillStyle(0xefe0c0, 1);
  g.fillCircle(5, 6, 2);
  g.generateTexture("b_kuri_s", 10, 10);

  // --- Lv4 ウス（巨大な灰色弾） 96x64 ---
  g.clear();
  g.fillStyle(0x9aa0a6, 1);
  g.fillEllipse(48, 32, 88, 56);
  g.fillStyle(0x777d83, 1);
  g.fillEllipse(48, 32, 88, 20);            // 胴のくびれ
  g.fillStyle(0xbfc5cb, 1);
  g.fillEllipse(48, 12, 76, 18);            // 上面
  g.fillStyle(0x5c6166, 1);
  g.fillEllipse(48, 12, 52, 10);            // 臼の穴
  g.generateTexture("b_usu", 96, 64);

  // --- 青柿（敵弾） 16x16 ---
  g.clear();
  g.fillStyle(0x2f8f3a, 1);
  g.fillCircle(8, 8, 7);
  g.fillStyle(0x7fd18a, 1);
  g.fillCircle(6, 6, 2.5);
  g.fillStyle(0x1d5c26, 1);
  g.fillRect(6, 0, 4, 3);                   // ヘタ
  g.generateTexture("kaki_blue", 16, 16);

  // --- 熟柿（パワーアップアイテム） 24x24 ---
  g.clear();
  g.fillStyle(0xff8a1e, 1);
  g.fillCircle(12, 13, 10);
  g.fillStyle(0xffc266, 1);
  g.fillCircle(9, 10, 3.5);
  g.fillStyle(0x2f6b2a, 1);
  g.fillRect(6, 1, 12, 4);                  // ヘタ
  g.fillRect(10, 0, 4, 4);
  g.generateTexture("kaki_ripe", 24, 24);

  // --- 1x1 の白ドット（爆発パーティクル用） ---
  g.clear();
  g.fillStyle(0xffffff, 1);
  g.fillRect(0, 0, 4, 4);
  g.generateTexture("dot", 4, 4);

  g.destroy();
}
