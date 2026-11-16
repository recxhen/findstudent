import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '首頁',
};

export default function Home() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          font-family: "Microsoft JhengHei", "微軟正黑體", "PingFang TC", sans-serif;
          font-size: 13px;
          color: #000000;
        }
        #page {
          position: relative;
          width: 1007px;
          box-sizing: border-box;
          margin: 0 auto;
          border: 1px solid #777777;
          background: #ffffff;
        }
        #page a { color: #003399; }
        #page ul { margin: 0; padding: 0; list-style: none; }
        #page li { position: relative; padding-left: 14px; }
        #page li::before { content: "・"; position: absolute; left: 0; color: #333; }

        /* 頁首 */
        .header { position: relative; height: 72px; }
        .logo {
          position: absolute; left: 9px; top: 0;
          width: 200px; height: 60px;
          background: #d9d9d9; border: 1px solid #aaaaaa;
          box-sizing: border-box;
          text-align: center; line-height: 58px;
          font-weight: bold; font-size: 15px; color: #444;
        }
        .search-input {
          position: absolute; left: 221px; top: 17px;
          width: 420px; height: 26px; box-sizing: border-box;
          border: 1px solid #999; padding: 0 7px; font-size: 13px;
          font-family: inherit;
        }
        .search-btn {
          position: absolute; left: 645px; top: 17px;
          height: 26px; padding: 0 10px; box-sizing: border-box;
          border: 1px solid #888; background: #f0f0f0;
          font-size: 13px; font-family: inherit; cursor: pointer;
        }
        .top-links { position: absolute; right: 9px; top: 24px; font-size: 12px; }
        .top-links a { text-decoration: none; }
        .top-links span { margin: 0 4px; color: #333; }

        /* 導覽列 */
        .nav {
          height: 24px; line-height: 24px;
          background: #dce8f8;
          border: 1px solid #7f9cc4;
          border-left: 0; border-right: 0;
          padding-left: 9px; white-space: nowrap;
        }
        .nav a {
          font-weight: bold; color: #0a2a7a !important;
          text-decoration: none; margin-right: 14px;
        }

        /* 跑馬燈列（依圖為靜態） */
        .ticker {
          margin: 22px 14px 0 10px;
          height: 30px; line-height: 30px;
          padding-left: 62px;
          background: #d9d9d9;
          font-weight: bold; color: #000;
        }

        /* 三欄 */
        .columns {
          display: flex; align-items: flex-start;
          padding: 22px 13px 14px 14px;
        }
        .col-left { width: 170px; }
        .col-center { flex: 1; margin: 0 8px; }
        .col-right { width: 190px; }

        .box {
          border: 1px solid #9aa9bd; background: #fff;
          margin-bottom: 8px;
        }
        .box-title {
          background: #dce8f8; border-bottom: 1px solid #9aa9bd;
          font-weight: bold; color: #1a3a8a;
          padding: 3px 7px; line-height: 16px;
          display: flex; justify-content: space-between;
        }
        .box-title .more { font-weight: normal; font-size: 12px; }
        .box-title .more a { text-decoration: underline; }
        .box-body { padding: 8px 10px; }

        .ph {
          background: #d9d9d9; border: 1px solid #b5b5b5;
          box-sizing: border-box; color: #555;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; flex-shrink: 0;
        }

        /* 左欄 */
        .side-list li { line-height: 20px; }
        .side-list a { text-decoration: underline; }

        /* 焦點新聞 */
        .focus { display: flex; padding: 8px 6px 8px 6px; }
        .focus .ph { width: 150px; height: 100px; margin-right: 12px; }
        .focus ul li { line-height: 20px; margin-bottom: 0; }
        .focus ul li a { font-weight: bold; }
        .focus-note { color: #cc0000; font-weight: bold; margin-top: 0; line-height: 20px; }

        /* 最新消息 */
        .news li { line-height: 18px; margin-bottom: 0; padding-left: 14px; }
        .news .date { color: #666; margin-right: 6px; }
        .news a { text-decoration: underline; }
        .new-tag { color: #cc0000; font-weight: bold; font-size: 11px; margin-left: 8px; }
        .news-count { color: #444; font-size: 12px; margin-top: 3px; }

        /* 中下兩欄 */
        .two-col { display: flex; gap: 8px; }
        .two-col .box { flex: 1; margin-bottom: 8px; }
        .photo-item { display: flex; margin-bottom: 6px; }
        .photo-item .ph { width: 48px; height: 48px; margin-right: 8px; }
        .photo-item a { text-decoration: underline; font-weight: normal; }
        .photo-item .meta { color: #444; font-size: 12px; margin-top: 2px; }
        .link-more { display: block; margin-top: 6px; text-decoration: underline; font-size: 12px; }

        .sub-title { font-weight: bold; margin: 0 0 4px 0; }
        .kids-list li { line-height: 20px; }
        .kids-list a { text-decoration: underline; }
        .kids-sep { border: 0; border-top: 1px solid #ccc; margin: 6px 0 8px 0; }
        .works { display: flex; gap: 6px; margin-bottom: 8px; }
        .works .ph { width: 52px; height: 52px; }

        /* 星光同樂會 */
        .fun-bar {
          display: flex; align-items: center; justify-content: space-between;
          border: 1px solid #9aa9bd; padding: 10px 8px; height: 42px;
          box-sizing: border-box; margin-bottom: 0;
        }
        .fun-bar b { margin-right: 6px; }
        .fun-btn {
          height: 24px; padding: 0 10px; box-sizing: border-box;
          border: 1px solid #888; background: #f0f0f0;
          font-size: 13px; font-family: inherit; cursor: pointer;
          margin-right: 3px;
        }

        /* 右欄 */
        .field-label { display: block; margin: 0 0 3px 0; }
        .field-input {
          width: 100%; height: 25px; box-sizing: border-box;
          border: 1px solid #999; margin-bottom: 8px; padding: 0 4px;
          font-family: inherit;
        }
        .login-btn {
          height: 24px; padding: 0 9px; box-sizing: border-box;
          border: 1px solid #888; background: #f0f0f0;
          font-size: 13px; font-family: inherit; cursor: pointer;
        }
        .story { display: flex; margin-bottom: 8px; }
        .story .ph { width: 52px; height: 52px; margin-right: 6px; }
        .story .txt { font-size: 12px; line-height: 15px; }
        .story .txt a { text-decoration: underline; }
        .donate-banner { width: 100%; height: 50px; margin-bottom: 8px; }
        .partners { display: flex; gap: 6px; }
        .partners .ph { width: 52px; height: 30px; flex: 1; }
        .counter {
          border: 1px solid #9aa9bd; text-align: center;
          padding: 7px 0; font-size: 12px; color: #333;
        }

        /* 頁尾 */
        .footer {
          border-top: 1px solid #777; text-align: center;
          padding: 6px 0 8px 0; line-height: 17px;
        }
        .footer a { text-decoration: underline; }
        .footer .sep { margin: 0 6px; color: #333; }
        .footer .addr { color: #555; font-size: 12px; }
      `}</style>

      <div id="page">
        {/* 頁首 */}
        <div className="header">
          <div className="logo">LOGO</div>
          <input className="search-input" type="text" placeholder="找找過去的消息" />
          <button className="search-btn" type="button">搜尋</button>
          <div className="top-links">
            <a href="#">登入</a><span>|</span><a href="#">加入會員</a><span>|</span><a href="#">說明</a>
          </div>
        </div>

        {/* 導覽列 */}
        <div className="nav">
          <a href="#">首頁</a>
          <a href="#">關於我們</a>
          <a href="#">最新消息</a>
          <a href="#">學童園地</a>
          <a href="#">星光同樂會</a>
          <a href="#">探視須知</a>
          <a href="#">評鑑成果</a>
          <a href="#">聯絡我們</a>
        </div>

        {/* 跑馬燈 */}
        <div className="ticker">跑馬燈 跑馬燈 跑馬燈 [協尋小凱之類的公告]</div>

        <div className="columns">
          {/* 左欄 */}
          <div className="col-left">
            <div className="box">
              <div className="box-title">服務目錄</div>
              <div className="box-body">
                <ul className="side-list">
                  <li><a href="#">機構簡介</a></li>
                  <li><a href="#">工作人員介紹</a></li>
                  <li><a href="#">生活作息公告</a></li>
                  <li><a href="#">探視及通話須知</a></li>
                  <li><a href="#">申訴管道</a></li>
                  <li><a href="#">電子報</a></li>
                  <li><a href="#">歷史消息</a></li>
                  <li><a href="#">榮譽事蹟</a></li>
                  <li><a href="#">志工招募</a></li>
                </ul>
              </div>
            </div>

            <div className="box">
              <div className="box-title">友善連結</div>
              <div className="box-body">
                <ul className="side-list">
                  <li><a href="#">主管機關</a></li>
                  <li><a href="#">兒少福利相關單位</a></li>
                  <li><a href="#">[連結]</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* 中欄 */}
          <div className="col-center">
            <div className="box">
              <div className="box-title">焦點新聞</div>
              <div className="focus">
                <div className="ph">圖片</div>
                <div>
                  <ul>
                    <li><a href="#">本院學生考取第一志願,成功自立的典範</a></li>
                    <li><a href="#" style={{ fontWeight: 'normal' }}>本院榮獲評鑑「零重大事件」</a></li>
                    <li><a href="#" style={{ fontWeight: 'normal' }}>春季團康圓滿落幕</a></li>
                  </ul>
                  <div className="focus-note">(這邊可能就放假新聞網址，可以點進去的那種</div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="box-title">
                <span>最新消息</span>
                <span className="more"><a href="#">更多</a> | <a href="#">歷史消息</a></span>
              </div>
              <div className="box-body" style={{ paddingTop: 6, paddingBottom: 6 }}>
                <ul className="news">
                  <li><span className="date">[MM/DD]</span><a href="#">重要聲明:住民 K 離開現場之聲明</a><span className="new-tag">NEW</span></li>
                  <li><span className="date">[MM/DD]</span><a href="#">探視及通話須知</a><span className="new-tag">NEW</span></li>
                  <li><span className="date">[MM/DD]</span><a href="#">主管機關訪視順利</a><span className="new-tag">NEW</span></li>
                  <li><span className="date">[MM/DD]</span><a href="#">本院榮獲評鑑零重大事件</a></li>
                  <li><span className="date">[MM/DD]</span><a href="#">第一志願!本院學生放榜</a></li>
                  <li><span className="date">[MM/DD]</span><a href="#">春季團康圓滿落幕</a></li>
                  <li><span className="date">[MM/DD]</span><a href="#">星光同樂會數位學習專區上線</a></li>
                </ul>
                <div className="news-count">共 40 則消息,目前顯示 23 則</div>
              </div>
            </div>

            <div className="two-col">
              <div className="box">
                <div className="box-title">活動花絮</div>
                <div className="box-body">
                  <div className="photo-item">
                    <div className="ph">封面</div>
                    <div><a href="#">春季團康</a><div className="meta">[MM/DD] 共 [N] 張</div></div>
                  </div>
                  <div className="photo-item">
                    <div className="ph">封面</div>
                    <div><a href="#">畢業學長分享會</a><div className="meta">[MM/DD] 共 [N] 張</div></div>
                  </div>
                  <div className="photo-item">
                    <div className="ph">封面</div>
                    <div><a href="#">主管機關訪視</a><div className="meta">[MM/DD] 共 [N] 張</div></div>
                  </div>
                  <a href="#" className="link-more">更多花絮</a>
                </div>
              </div>

              <div className="box">
                <div className="box-title">學童園地</div>
                <div className="box-body">
                  <div className="sub-title">學童週記</div>
                  <ul className="kids-list">
                    <li><a href="#">《真善美》排練心得</a></li>
                    <li><a href="#">我的第一次上台</a></li>
                    <li><a href="#">春季團康心得</a></li>
                  </ul>
                  <hr className="kids-sep" />
                  <div className="sub-title">學童作品</div>
                  <div className="works">
                    <div className="ph">畫1</div>
                    <div className="ph">畫2</div>
                    <div className="ph">畫3</div>
                    <div className="ph">照片1</div>
                    <div className="ph">照片2</div>
                  </div>
                  <a href="#" className="link-more" style={{ marginTop: 0 }}>進入學童園地 »</a>
                </div>
              </div>
            </div>

            <div className="fun-bar">
              <div><b>星光同樂會</b> 益智遊戲、學習任務與獎勵專區</div>
              <button className="fun-btn" type="button">進入遊戲專區</button>
            </div>
          </div>

          {/* 右欄 */}
          <div className="col-right">
            <div className="box">
              <div className="box-title">會員登入</div>
              <div className="box-body">
                <label className="field-label">帳號</label>
                <input className="field-input" type="text" />
                <label className="field-label">密碼</label>
                <input className="field-input" type="password" />
                <button className="login-btn" type="button">登入</button>
              </div>
            </div>

            <div className="box">
              <div className="box-title">公告</div>
              <div className="box-body">
                <ul className="side-list">
                  <li><a href="#">探視及通話須知</a></li>
                  <li><a href="#">生活作息公告</a></li>
                  <li><a href="#">志工招募中</a></li>
                </ul>
              </div>
            </div>

            <div className="box">
              <div className="box-title">院友故事</div>
              <div className="box-body" style={{ paddingBottom: 2 }}>
                <div className="story">
                  <div className="ph">照片</div>
                  <div className="txt"><a href="#">[姓名]:從這裡出發</a><br />離院兩年,回來分享經驗</div>
                </div>
                <div className="story">
                  <div className="ph">照片</div>
                  <div className="txt"><a href="#">[姓名]:第一志願</a><br />感謝院內的陪伴</div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="box-title">愛心捐款</div>
              <div className="box-body">
                <div className="ph donate-banner">捐款 BANNER</div>
                <div className="sub-title">贊助夥伴</div>
                <div className="partners">
                  <div className="ph">LOGO</div>
                  <div className="ph">LOGO</div>
                  <div className="ph">LOGO</div>
                </div>
              </div>
            </div>

            <div className="counter">您是第 03703 位訪客</div>
          </div>
        </div>

        {/* 頁尾 */}
        <div className="footer">
          <div>
            <a href="#">關於本院</a><span className="sep">|</span>
            <a href="#">隱私權政策</a><span className="sep">|</span>
            <a href="#">捐款</a><span className="sep">|</span>
            <a href="#">聯絡我們</a>
          </div>
          <div className="addr">[地址] [電話] [電子信箱]</div>
        </div>
      </div>
    </>
  );
}
