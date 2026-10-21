import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '★☆ 歡迎光臨真善美之家 ☆★',
};

export default function MainSitePage() {
  return (
    <>
      <style>{`
        /* 全域復古深色掃描線背景與新細明體 */
        body {
          margin: 0;
          padding: 20px 0;
          background-color: #0b1326;
          background-image: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4) 1px,
            transparent 1px,
            transparent 2px
          );
          font-family: "PMingLiU", "新細明體", "MingLiU", sans-serif;
          font-size: 12px;
          color: #ffffff;
          text-align: center;
        }

        #main-container {
          width: 780px;
          margin: 0 auto;
          text-align: left;
          border: 2px solid #336699;
          background-color: #101c38;
          box-shadow: 0 0 15px #000000;
        }

        /* 頂部跑馬燈容器（隱藏溢出內容） */
        .marquee-wrapper {
          background-color: #000000;
          border-bottom: 1px solid #1e3f66;
          overflow: hidden;
          white-space: nowrap;
          padding: 4px 0;
        }

        /* 跑馬燈內容文字與動畫 */
        .marquee-content {
          display: inline-block;
          padding-left: 100%;
          color: #00ffcc;
          font-size: 11px;
          animation: marquee 16s linear infinite;
        }

        /* 滑鼠懸停時暫停跑馬燈（比照早期 marquee 特性） */
        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }

        /* 橫幅主體 */
        .classic-banner {
          height: 150px;
          background: linear-gradient(180deg, #1f4f8b 0%, #0d2342 60%, #081426 100%);
          border-bottom: 3px double #5294e2;
          position: relative;
          padding: 25px 20px 0 20px;
          box-sizing: border-box;
        }

        .banner-title {
          font-size: 32px;
          font-weight: bold;
          color: #ffffff;
          letter-spacing: 2px;
          margin: 0;
          text-shadow: 
            2px 2px 0px #002244,
            -1px -1px 0px #70a9ff,
            0 0 10px rgba(0, 153, 255, 0.8);
        }

        .banner-subtitle {
          margin-top: 8px;
          font-size: 12px;
          color: #ffd700;
          text-shadow: 1px 1px 2px #000000;
        }

        .banner-info {
          position: absolute;
          right: 15px;
          bottom: 8px;
          font-size: 11px;
          color: #7fa4cf;
        }

        /* 導覽列 */
        .nav-bar {
          background: linear-gradient(180deg, #2b3b52 0%, #17212e 100%);
          border-bottom: 1px solid #0a0f16;
          padding: 6px 10px;
          text-align: center;
          white-space: nowrap;
        }

        /* 水晶果凍按鈕 */
        .aqua-btn {
          display: inline-block;
          text-decoration: none;
          font-size: 12px;
          font-weight: bold;
          color: #ffffff;
          padding: 5px 14px;
          margin: 0 3px;
          background: linear-gradient(180deg, #5992cf 0%, #29609f 48%, #174275 52%, #1a4f8c 100%);
          border: 1px solid #0f2c4f;
          border-radius: 4px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.4);
          text-shadow: 0 -1px 0 #0f2c4f;
          cursor: pointer;
        }

        .aqua-btn:hover {
          background: linear-gradient(180deg, #ffb347 0%, #ff8800 48%, #cc6600 52%, #e67300 100%);
          border-color: #803300;
          color: #ffffff;
          text-shadow: 0 -1px 0 #4d1f00;
        }

        .aqua-btn.active {
          background: linear-gradient(180deg, #174275 0%, #1a4f8c 48%, #29609f 52%, #5992cf 100%);
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
          border-color: #0b1a2d;
          color: #ffff99;
        }
      `}</style>

      <div id="main-container">
        {/* 使用純 CSS 動畫跑馬燈，替代廢棄的 marquee 標籤 */}
        <div className="marquee-wrapper">
          <div className="marquee-content">
            [公告] 歡迎光臨本站！建議使用 Internet Explorer 6.0 與 1024x768 解析度瀏覽以獲得最佳效果！最新改版完成～
          </div>
        </div>

        {/* Banner 橫幅主體 */}
        <div className="classic-banner">
          <h1 className="banner-title">◆ 幻夜の秘密花園 ◆</h1>
          <div className="banner-subtitle">～ 永遠的友誼與回憶之殿堂 ～ Since 2005.07.07</div>
          <div className="banner-info">Best View: IE 6.0+ | 1024*768</div>
        </div>

        {/* 按鈕分頁區塊 */}
        <div className="nav-bar">
          <a href="/mainsite" className="aqua-btn active">【 站長首頁 】</a>
          <a href="/mainsite/diary" className="aqua-btn">心情日記</a>
          <a href="/mainsite/gallery" className="aqua-btn">貼圖相簿</a>
          <a href="/mainsite/games" className="aqua-btn">Flash遊戲</a>
          <a href="/mainsite/guestbook" className="aqua-btn">訪客留言板</a>
          <a href="/mainsite/links" className="aqua-btn">友情連結</a>
        </div>
      </div>
    </>
  );
}