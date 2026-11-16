import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '重要聲明',
};

export default function Announcement() {
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
          width: 980px;
          box-sizing: border-box;
          margin: 0 auto;
          border: 1px solid #777777;
          background: #ffffff;
          padding: 0 8px 8px 8px;
        }
        #page a { color: #003399; }
        #page ul { margin: 0; padding: 0; list-style: none; }

        /* 頁首 */
        .header { position: relative; height: 76px; }
        .logo {
          position: absolute; left: 0; top: 8px;
          width: 200px; height: 60px;
          background: #d9d9d9; border: 1px solid #aaaaaa;
          box-sizing: border-box;
          text-align: center; line-height: 62px;
          font-weight: bold; font-size: 15px; color: #444;
        }
        .search-input {
          position: absolute; left: 212px; top: 25px;
          width: 420px; height: 26px; box-sizing: border-box;
          border: 1px solid #999; padding: 0 7px; font-size: 13px;
          font-family: inherit;
        }
        .search-btn {
          position: absolute; left: 636px; top: 25px;
          height: 26px; padding: 0 10px; box-sizing: border-box;
          border: 1px solid #888; background: #f0f0f0;
          font-size: 13px; font-family: inherit; cursor: pointer;
        }
        .top-links { position: absolute; right: 0; top: 32px; font-size: 12px; }
        .top-links a { text-decoration: none; }
        .top-links span { margin: 0 3px; color: #333; }

        /* 導覽列 */
        .nav {
          height: 24px; line-height: 24px;
          background: #dce8f8;
          border: 1px solid #7f9cc4;
          padding-left: 8px; white-space: nowrap;
        }
        .nav a {
          font-weight: bold; color: #0a2a7a !important;
          text-decoration: none; margin-right: 14px;
        }

        /* 麵包屑 */
        .breadcrumb { margin: 7px 0 7px 0; font-size: 12px; line-height: 16px; }
        .breadcrumb a { text-decoration: none; }
        .breadcrumb .gt { margin: 0 5px; color: #555; }
        .breadcrumb b { color: #222; }

        /* 內容區 */
        .columns { display: flex; align-items: flex-start; gap: 8px; }
        .col-left { width: 170px; flex-shrink: 0; }
        .col-main { flex: 1; }

        .box { border: 1px solid #9aa9bd; background: #fff; margin-bottom: 8px; }
        .box-title {
          background: #dce8f8; border-bottom: 1px solid #9aa9bd;
          font-weight: bold; color: #1a3a8a;
          padding: 2px 6px; line-height: 16px;
        }
        .box-body { padding: 6px 8px; }
        .side-list li { position: relative; padding-left: 14px; line-height: 18px; }
        .side-list li::before { content: "・"; position: absolute; left: 0; color: #333; }
        .side-list a { text-decoration: underline; }

        /* 公告內文 */
        .article { padding: 14px 12px 14px 12px; }
        .article h2 {
          font-size: 17px; margin: 0 0 8px 0; line-height: 24px; color: #111;
        }
        .article .date {
          color: #666; font-size: 12px;
          padding-bottom: 6px; border-bottom: 1px solid #ccc; margin-bottom: 8px;
        }
        .article h3 { font-size: 13px; font-weight: bold; margin: 8px 0 3px 0; color: #111; }
        .article p { margin: 0; line-height: 22px; }
        .article .sign { text-align: right; margin-top: 4px; }
        .btn-row { margin-top: 10px; }
        .btn {
          height: 24px; padding: 0 10px; box-sizing: border-box;
          border: 1px solid #888; background: #f0f0f0;
          font-size: 13px; font-family: inherit; cursor: pointer;
          margin-right: 3px;
        }
        .pager { margin-top: 12px; font-size: 12px; }
        .pager a { text-decoration: none; margin-right: 8px; }

        /* 頁尾 */
        .footer {
          border-top: 1px solid #777; text-align: center;
          margin-top: 0; padding: 6px 0 4px 0; line-height: 17px;
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
          <a href="#">住民園地</a>
          <a href="#">星光同樂會</a>
          <a href="#">探視須知</a>
          <a href="#">評鑑成果</a>
          <a href="#">聯絡我們</a>
        </div>

        {/* 麵包屑 */}
        <div className="breadcrumb">
          <a href="#">首頁</a><span className="gt">&gt;</span>
          <a href="#">最新消息</a><span className="gt">&gt;</span>
          <b>重要聲明</b>
        </div>

        <div className="columns">
          {/* 左欄 */}
          <div className="col-left">
            <div className="box">
              <div className="box-title">服務目錄</div>
              <div className="box-body">
                <ul className="side-list">
                  <li><a href="#">機構簡介</a></li>
                  <li><a href="#">機構組成</a></li>
                  <li><a href="#">環境設施</a></li>
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
              <div className="box-title">相關連結</div>
              <div className="box-body">
                <ul className="side-list">
                  <li><a href="#">協尋公告</a></li>
                  <li><a href="#">住民心得專區</a></li>
                  <li><a href="#">聯絡窗口</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* 主內容 */}
          <div className="col-main">
            <div className="box" style={{ marginBottom: 8 }}>
              <div className="box-title">重要聲明</div>
              <div className="article">
                <h2>關於本院住民於《真善美》募款晚會期間離開現場之聲明</h2>
                <div className="date">發布日期:[YYYY/MM/DD]</div>

                <h3>一、事件說明</h3>
                <p>
                  本院一名 13 歲住民(以下簡稱住民 K),於本院舉辦之《真善美》募款晚會期間離開活動現場,目前下落不明。本院於發現後已立即通報警方協尋,並通知主管機關,全力配合後續處理。
                </p>

                <h3>二、住民狀況</h3>
                <p>
                  住民 K 近期情緒與精神狀況較不穩定,本院原已安排生活輔導與關懷協助。本院對於此事深感憂心與遺憾,也衷心盼望他能平安返回。
                </p>

                <h3>三、配合調查</h3>
                <p>
                  本院已協助警方訪談與住民 K 互動較為密切之住民 B、住民 Y,並提供其近期於院內撰寫之心得文章,供警方釐清住民 K 可能的去向。截至目前尚無明確結果,本院將持續配合警方調查。
                </p>

                <h3>四、呼籲</h3>
                <p>
                  為保護住民隱私,請外界勿揣測、轉傳未經證實之消息。若您有相關線索,請洽警方或本院聯絡窗口:[電話]。
                </p>

                <p className="sign">星橋兒少之家 主任 郭〇〇 謹啟</p>

                <div className="btn-row">
                  <button className="btn" type="button">列印本頁</button>
                  <button className="btn" type="button">回上一頁</button>
                </div>

                <div className="pager">
                  <a href="#">« 上一則:[標題]</a>
                  <a href="#">下一則:[標題] »</a>
                </div>
              </div>
            </div>
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