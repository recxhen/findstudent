import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '★☆ 歡迎光臨財團法人真善美之家 ☆★ - 用愛守護每一個希望',
};

export default function MainSitePage() {
  return (
    <>
      <style>{`
        /* 全域牛皮紙／再生紙質紋理背景與新細明體 */
        body {
          margin: 0;
          padding: 20px 0;
          background-color: #d8c3a5;
          /* 純 CSS 模擬紙張纖維雜訊與微細橫紋 */
          background-image: 
            radial-gradient(rgba(110, 82, 54, 0.12) 1px, transparent 0),
            radial-gradient(rgba(166, 134, 98, 0.15) 1px, transparent 0),
            repeating-linear-gradient(
              0deg,
              rgba(120, 90, 60, 0.04) 0px,
              rgba(120, 90, 60, 0.04) 1px,
              transparent 1px,
              transparent 4px
            );
          background-size: 16px 16px, 24px 24px, 100% 4px;
          background-position: 0 0, 8px 8px, 0 0;
          font-family: "PMingLiU", "新細明體", "MingLiU", sans-serif;
          font-size: 12px;
          color: #3e2b1c;
          text-align: center;
        }

        /* 主容器：淺米色再生紙卡片質感 */
        #main-container {
          width: 780px;
          margin: 0 auto;
          text-align: left;
          border: 2px solid #7c5838;
          background-color: #f4eadc;
          background-image: radial-gradient(rgba(139, 104, 70, 0.08) 1px, transparent 0);
          background-size: 12px 12px;
          box-shadow: 3px 4px 12px rgba(62, 43, 28, 0.35);
        }

        /* 頂部跑馬燈容器（深咖啡紙條） */
        .marquee-wrapper {
          background-color: #4a3320;
          border-bottom: 1px solid #7c5838;
          overflow: hidden;
          white-space: nowrap;
          padding: 4px 0;
        }

        /* 跑馬燈內容文字與動畫 */
        .marquee-content {
          display: inline-block;
          padding-left: 100%;
          color: #faedcd;
          font-size: 11px;
          animation: marquee 18s linear infinite;
        }

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

        /* 橫幅主體（溫潤牛皮紙板質感，無金屬強反光） */
        .classic-banner {
          height: 150px;
          background-color: #c29e75;
          background-image: 
            radial-gradient(rgba(92, 64, 38, 0.1) 1px, transparent 0),
            linear-gradient(180deg, #cbb08c 0%, #ba966c 100%);
          background-size: 10px 10px, 100% 100%;
          border-bottom: 3px double #6b4728;
          position: relative;
          padding: 25px 22px 0 22px;
          box-sizing: border-box;
        }

        .banner-title {
          font-size: 30px;
          font-weight: bold;
          color: #3a2210;
          letter-spacing: 3px;
          margin: 0;
          /* 凹版壓印紙張的文字陰影效果 */
          text-shadow: 1px 1px 0px rgba(255, 248, 235, 0.75);
        }

        .banner-subtitle {
          margin-top: 8px;
          font-size: 12px;
          color: #54351b;
          font-weight: bold;
          letter-spacing: 1px;
          text-shadow: 0 1px 0 rgba(255, 248, 235, 0.6);
        }

        .banner-info {
          position: absolute;
          right: 15px;
          bottom: 8px;
          font-size: 11px;
          color: #5c3d22;
        }

        /* 導覽列（深卡其紙帶） */
        .nav-bar {
          background-color: #a6825c;
          border-bottom: 1px solid #6b4728;
          padding: 6px 10px;
          text-align: center;
          white-space: nowrap;
        }

        /* 復古紙質標籤按鈕（保留立體凹凸邊框，去除塑膠高光） */
        .aqua-btn {
          display: inline-block;
          text-decoration: none;
          font-size: 12px;
          font-weight: bold;
          color: #3a2210;
          padding: 5px 12px;
          margin: 0 3px;
          background-color: #ebd9c1;
          border-top: 1px solid #fff8ee;
          border-left: 1px solid #fff8ee;
          border-right: 1px solid #6b4728;
          border-bottom: 1px solid #6b4728;
          border-radius: 2px;
          box-shadow: 1px 1px 2px rgba(62, 43, 28, 0.25);
          cursor: pointer;
        }

        .aqua-btn:hover {
          background-color: #d96b27;
          color: #fffaf0;
          border-top-color: #f4a261;
          border-left-color: #f4a261;
          border-right-color: #59260b;
          border-bottom-color: #59260b;
        }

        .aqua-btn.active {
          background-color: #6b4728;
          color: #faedcd;
          border-top: 1px solid #3d2511;
          border-left: 1px solid #3d2511;
          border-right: 1px solid #c29e75;
          border-bottom: 1px solid #c29e75;
          box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.4);
        }

        /* 內容雙欄區塊 */
        .content-area {
          display: flex;
          padding: 12px;
          gap: 12px;
          background-color: transparent;
        }

        .left-sidebar {
          width: 210px;
          flex-shrink: 0;
        }

        .right-main {
          flex-grow: 1;
        }

        /* 內文卡片：米白信紙質感 */
        .retro-box {
          border: 1px solid #9c7651;
          background-color: #fbf5ec;
          margin-bottom: 12px;
          box-shadow: 1px 1px 0px #e3d0b8;
        }

        .retro-box-header {
          background-color: #d6ba96;
          border-bottom: 1px solid #9c7651;
          padding: 4px 8px;
          font-weight: bold;
          color: #3a2210;
          letter-spacing: 1px;
        }

        .retro-box-body {
          padding: 10px;
          line-height: 1.75;
          color: #422e1d;
        }

        .news-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .news-list li {
          border-bottom: 1px dashed #b5926e;
          padding: 5px 0;
        }

        .news-list li:last-child {
          border-bottom: none;
        }

        .news-tag {
          display: inline-block;
          background-color: #8c4a27;
          color: #fbf5ec;
          padding: 0 4px;
          margin-right: 6px;
          font-size: 11px;
          border: 1px solid #592c14;
        }

        .new-blink {
          color: #b83b14;
          font-weight: bold;
          margin-left: 4px;
        }

        .counter-box {
          background-color: #efe2cf;
          border: 1px inset #9c7651;
          padding: 4px 8px;
          text-align: center;
          font-family: "Courier New", monospace;
          font-weight: bold;
          color: #5c3312;
          letter-spacing: 2px;
          margin-top: 6px;
        }

        /* 頁尾資訊 */
        .classic-footer {
          background-color: #e3d0b8;
          border-top: 2px solid #9c7651;
          padding: 10px;
          text-align: center;
          font-size: 11px;
          color: #593d25;
          line-height: 1.6;
        }
      `}</style>

      <div id="main-container">
        {/* 頂部純 CSS 跑馬燈 */}
        <div className="marquee-wrapper">
          <div className="marquee-content">
            【愛心公告】歡迎光臨「真善美之家」安置機構全球資訊網！本季急需生活物資與課輔志工夥伴，誠摯邀請您一同傳遞溫暖與希望～劃撥帳號：12345678（戶名：財團法人真善美之家）
          </div>
        </div>

        {/* Banner 橫幅主體 */}
        <div className="classic-banner">
          <h1 className="banner-title">◆ 財團法人真善美之家 ◆</h1>
          <div className="banner-subtitle">～ 以真誠相待、以良善守護、成就生命之美 ～ 創立於 2005 年</div>
          <div className="banner-info">建議瀏覽環境: IE 6.0+ | 1024*768</div>
        </div>

        {/* 導覽列按鈕 */}
        <div className="nav-bar">
          <a href="/mainsite" className="aqua-btn active">首頁</a>
          <a href="/mainsite/about" className="aqua-btn">關於我們</a>
          <a href="/mainsite/breakingnews" className="aqua-btn">最新消息</a>
          <a href="/mainsite/student" className="aqua-btn">學童園地</a>
          <a href="/mainsite/visit" className="aqua-btn">探視須知</a>
          <a href="/mainsite/evaluation" className="aqua-btn">評鑑成果</a>
          <a href="/mainsite/contacts" className="aqua-btn">聯絡我們</a>

        </div>

        {/* 雙欄主要內容區 */}
        <div className="content-area">
          {/* 左側欄：機構聯絡與訪客計數器 */}
          <div className="left-sidebar">
            <div className="retro-box">
              <div className="retro-box-header">■ 服務時間與專線</div>
              <div className="retro-box-body">
                服務時間：週一至週六<br />
                08:30 ～ 17:30<br />
                愛心專線：(02) 2345-6789<br />
                傳真電話：(02) 2345-6780<br />
                機構信箱：love@zhenshanmei.org.tw
              </div>
            </div>

            <div className="retro-box">
              <div className="retro-box-header">■ 愛心劃撥資訊</div>
              <div className="retro-box-body">
                郵政劃撥：12345678<br />
                戶名：財團法人真善美之家<br />
                <span style={{ color: '#8c4a27', fontWeight: 'bold' }}>
                  ※ 捐款收據可依法申報綜合所得稅列舉扣除。
                </span>
              </div>
            </div>

            <div className="retro-box">
              <div className="retro-box-header">■ 網站參訪人次</div>
              <div className="retro-box-body" style={{ textAlign: 'center' }}>
                您是第
                <div className="counter-box">0048921</div>
                位守護天使
              </div>
            </div>
          </div>

          {/* 右側主欄：機構宗旨與最新消息 */}
          <div className="right-main">
            <div className="retro-box">
              <div className="retro-box-header">★ 關於我們．守護每一個需要依靠的靈魂</div>
              <div className="retro-box-body">
                「真善美之家」成立於民國 94 年（2005 年），致力於提供失依兒少、弱勢家庭及需要緊急庇護之個案一個安全、溫暖且具尊嚴的生活家園。我們相信，透過專業社工輔導、生活照顧與教育陪伴，能讓每一顆受傷的心重新找回生命的「真」、人性的「善」與未來的「美」。
              </div>
            </div>

            <div className="retro-box">
              <div className="retro-box-header">★ 最新消息與活動公告 (NEWS)</div>
              <div className="retro-box-body">
                <ul className="news-list">
                  <li>
                    <span className="news-tag">公告</span>
                    [2005/11/15] 冬季保暖衣物與日常民生物資募集開跑！<span className="new-blink">NEW!</span>
                  </li>
                  <li>
                    <span className="news-tag">活動</span>
                    [2005/11/02] 歲末感恩茶會暨院生才藝成果發表會報名中
                  </li>
                  <li>
                    <span className="news-tag">徵信</span>
                    [2005/10/25] 10月份社會大眾愛心捐款與物資徵信芳名錄已更新
                  </li>
                  <li>
                    <span className="news-tag">招募</span>
                    [2005/10/10] 誠徵週末課後伴讀與團康活動志工夥伴
                  </li>
                  <li>
                    <span className="news-tag">站務</span>
                    [2005/09/28] 真善美之家官方網站正式上線，歡迎各界留言指教！
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 經典古早味頁尾 */}
        <div className="classic-footer">
          財團法人真善美之家 版權所有 Copyright &copy; 2005 Zhen-Shan-Mei Home. All Rights Reserved.<br />
          地址：台北市文山區木柵路一段 100 號 ｜ 立案字號：社團字第 0940012345 號
        </div>
      </div>
    </>
  );
}