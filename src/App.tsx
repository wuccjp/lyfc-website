import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 h-[64px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-800 flex items-center justify-center text-white font-serif font-bold text-[15px]">劉</div>
          <div className="leading-tight">
            <div className="font-bold text-slate-900 tracking-tight">劉永豐診所</div>
            <div className="text-[13px] tracking-[0.18em] text-teal-700 font-medium">LIU YUNG-FENG CLINIC</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-base font-medium text-slate-700">
          <a href="#services" className="hover:text-teal-700">服務與門診</a>
          <a href="#acp" className="hover:text-teal-700">預立醫療諮商</a>
          <a href="#doctor" className="hover:text-teal-700">劉永豐醫師</a>
          <a href="#access" className="hover:text-teal-700">交通與聯絡</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:077492636" className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-5 py-2.5 text-base font-bold text-white hover:bg-teal-700 transition">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" /> (07) 749-2636
          </a>
        </div>

        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3 text-base">
          <a href="#services" onClick={()=>setOpen(false)} className="block py-2">服務與門診</a>
          <a href="#acp" onClick={()=>setOpen(false)} className="block py-2">預立醫療諮商</a>
          <a href="#doctor" onClick={()=>setOpen(false)} className="block py-2">劉永豐醫師</a>
          <a href="#access" onClick={()=>setOpen(false)} className="block py-2">交通與聯絡</a>
          <a href="tel:077492636" className="block text-center rounded-full bg-teal-800 py-3 font-bold text-white">撥打 (07) 749-2636</a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-[#fdfbf7] border-b border-slate-100">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-8 sm:py-12">
        {/* announce */}
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-sm sm:text-base">
          <span className="rounded-full bg-amber-500 text-white px-2 py-0.5 text-[13px] font-bold">公告</span>
          <span className="font-medium text-amber-900">本診所於 <b>114年9月起</b> 為衛生福利部「提供預立醫療照護諮商醫療機構」</span>
          <a href="#acp" className="hidden sm:inline text-amber-700 underline underline-offset-4 ml-1">了解諮商 →</a>
        </div>

        <div className="mt-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
          <div>
            <p className="text-teal-700 font-bold tracking-[0.2em] text-xs sm:text-sm">FAMILY MEDICINE · KAOHSIUNG LINGYA</p>
            <h1 className="mt-3 font-serif text-[32px] sm:text-[48px] leading-[1.1] font-semibold text-slate-900">
              醫術承諾，<span className="text-teal-800">仁心為您</span>
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-[560px] text-[15px] sm:text-[16px]">
              劉永豐診所深耕高雄苓雅，以家庭醫學為核心，提供細緻、連續性的基層照護。<br className="hidden sm:block"/>
              同時為 <b className="text-slate-800">衛福部指定預立醫療照護諮商(ACP)</b> 合法機構，陪您與家人從容做好未來醫療選擇。
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#acp" className="rounded-full bg-teal-800 px-6 py-3 text-base font-bold text-white hover:bg-teal-700 transition shadow-sm">預約 預立醫療諮商</a>
              <a href="tel:077492636" className="rounded-full bg-white border border-slate-200 px-6 py-3 text-base font-bold text-slate-800 hover:bg-slate-50 transition">撥打電話 (07) 749-2636</a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-[15px] text-slate-500">
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"/> 802 高雄市苓雅區建國一路 15-1 號</span>
              <span>醫事機構代碼 3502082209</span>
            </div>

            <div className="mt-8 grid grid-cols-3 max-w-[520px] divide-x divide-slate-200 border-y border-slate-200 py-4 bg-white rounded-2xl">
              <div className="px-4 text-center">
                <div className="text-xl font-bold text-slate-900">20+</div><div className="text-[13px] tracking-wide text-slate-500">年在地服務</div>
              </div>
              <div className="px-4 text-center">
                <div className="text-xl font-bold text-slate-900">2018</div><div className="text-[13px] tracking-wide text-slate-500">醫療典範獎</div>
              </div>
              <div className="px-4 text-center">
                <div className="text-xl font-bold text-slate-900">ACP</div><div className="text-[13px] tracking-wide text-slate-500">合法諮商機構</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[24px] overflow-hidden bg-slate-100 aspect-[4/3] sm:aspect-[1.15/1] shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}clinic-front.jpg`}
                alt="劉永豐診所外觀 — 高雄市苓雅區建國一路15-1號"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto sm:w-[86%] bg-white/95 backdrop-blur rounded-2xl p-4 shadow-md border border-slate-100">
                <div className="text-xs font-bold tracking-widest text-teal-700">CLINIC HOURS</div>
                <div className="mt-1 flex flex-wrap gap-2 text-base">
                  <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold">門診時間</span>
                  <span className="text-slate-700 font-medium">週一至週六上午 · 週一至週五下午</span>
                </div>
                <div className="mt-2 text-[13px] text-slate-500 leading-relaxed">
                  看診前請攜帶健保卡。預立醫療諮商採預約制，約 60 分鐘/次。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCards() {
  return (
    <section id="services" className="mx-auto max-w-[1120px] px-4 sm:px-6 py-10 sm:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-teal-700">SERVICES</p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-slate-900">以人為本的基層照護</h2>
        </div>
        <p className="max-w-[420px] text-[17px] text-slate-600 leading-loose">常見疾病診療、慢性病追蹤、預防保健與健康諮詢，陪伴個人與家庭的長期健康。</p>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {[
          { t: '家庭醫學・基層診療', d: '感冒、腸胃、頭痛、過敏等常見病症，完整評估與轉介。', icon: '🩺' },
          { t: '慢性病・預防保健', d: '高血壓、糖尿病、高血脂追蹤，疫苗與成人健檢諮詢。', icon: '❤️' },
          { t: '預立醫療諮商 ACP', d: '衛福部指定機構，陪您完成病人自主權利法的諮商與註記。', icon: '📝', accent: true },
        ].map(c => (
          <div key={c.t} className={`rounded-2xl border p-6 ${c.accent ? 'bg-teal-800 text-white border-teal-700' : 'bg-white border-slate-200'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${c.accent ? 'bg-white/15' : 'bg-teal-50'}`}>{c.icon}</div>
            <h3 className={`mt-4 font-bold ${c.accent ? 'text-white' : 'text-slate-900'}`}>{c.t}</h3>
            <p className={`mt-2 text-[17px] leading-loose ${c.accent ? 'text-teal-100' : 'text-slate-600'}`}>{c.d}</p>
            {c.accent && <a href="#acp" className="mt-4 inline-flex text-base font-bold underline underline-offset-4 decoration-teal-300">了解收費與流程 →</a>}
          </div>
        ))}
      </div>

      {/* hours + contact */}
      <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
          <h3 className="font-bold text-slate-900 flex items-center gap-2"><span className="w-1.5 h-6 rounded-full bg-teal-700"/> 營業時間</h3>
          <p className="mt-2 text-[13px] text-slate-500">出門前建議來電 <a href="tel:077492636" className="font-bold text-teal-700 underline">(07) 749-2636</a> 確認。</p>
          <img
            src={`${import.meta.env.BASE_URL}clinic-hours.jpg`}
            alt="劉永豐診所營業時間公告"
            className="mt-4 w-full rounded-xl border border-slate-200"
            loading="lazy"
          />
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-base">
              <thead className="bg-slate-50 text-slate-600 text-sm">
                <tr><th className="px-4 py-2.5 text-left font-semibold"></th><th className="px-2 py-2.5 text-center">一</th><th className="px-2 py-2.5 text-center">二</th><th className="px-2 py-2.5 text-center">三</th><th className="px-2 py-2.5 text-center">四</th><th className="px-2 py-2.5 text-center">五</th><th className="px-2 py-2.5 text-center">六</th><th className="px-2 py-2.5 text-center">日</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-4 py-3 font-medium">上午 8:00-12:00</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center text-slate-300">休</td></tr>
                <tr><td className="px-4 py-3 font-medium">下午 15:30-18:30</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center text-slate-300">休</td><td className="text-center text-slate-300">休</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-400">● 看診  休診｜週日固定公休；國定假日公休（逢週六僅上午診，依診所公告為主）</p>
        </div>

        <div className="rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-7">
          <h3 className="font-bold flex items-center gap-2"><span className="w-1.5 h-6 rounded-full bg-teal-400"/> 就診資訊</h3>
          <div className="mt-4 space-y-3 text-base">
            <div className="flex gap-3"><span className="text-teal-300">▸</span><span>請攜帶健保卡，未成年請由家屬陪同</span></div>
            <div className="flex gap-3"><span className="text-teal-300">▸</span><span>慢性病連續處方箋可於本院所領藥</span></div>
            <div className="flex gap-3"><span className="text-teal-300">▸</span><span>預立醫療諮商採預約制，請先來電預約時段</span></div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href="tel:077492636" className="rounded-xl bg-white text-slate-900 py-3 text-center text-base font-bold">撥打電話</a>
            <a href="https://maps.google.com/?q=高雄市苓雅區建國一路15-1號" target="_blank" className="rounded-xl bg-teal-700 text-white py-3 text-center text-base font-bold">開啟地圖</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ACP() {
  const fees = [
    { title: '個人諮商', price: '3,050', unit: '元 / 人 / 60分鐘 / 次', note: '已含掛號費。超過1小時，每30分鐘每人加收500元' },
    { title: '2人同行', price: '1,850', unit: '元 / 人 / 60分鐘 / 次', note: '已含掛號費。超過1小時，每30分鐘每人加收500元' },
    { title: '3人同行', price: '1,250', unit: '元 / 人 / 60分鐘 / 次', note: '已含掛號費。超過1小時，每30分鐘每人加收500元' },
  ]
  return (
    <section id="acp" className="bg-[#f0fdfa] border-y border-teal-100">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-10 sm:py-14">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-800 text-white px-4 py-2 text-xs font-bold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-300"/> 114年9月起｜衛福部 指定 ACP 諮商機構
        </div>
        <div className="mt-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
          <div>
            <h2 className="font-serif text-[28px] sm:text-[36px] leading-tight font-semibold text-slate-900">預立醫療照護諮商 <br/><span className="text-teal-800">ACP</span></h2>
            <h3 className="mt-6 font-bold text-slate-900">什麼是預立醫療 (ACP)？</h3>
            <p className="mt-2 text-[17px] leading-loose text-slate-600">
              「預立醫療」指我們在身體與意識都還清醒且理智的情況下，預先表達對未來醫療處置的選擇及安排，以確保當自己將來若遇到無法自主表達時（例如昏迷、重病末期…等情形），醫療人員和家人可以根據我們事先填寫的內容來做出符合本人意願的醫療決策。
            </p>

            <h3 className="mt-6 font-bold text-slate-900">預立醫療核心概念</h3>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              {[
                { k: '法律保障', v: '台灣是亞洲第一個立法保障「預立醫療指示」的國家，依《病人自主權利法》，讓我們在法律保障下事先簽署、自我選擇未來的醫療安排。' },
                { k: '預先表達意願，自己決定醫療', v: '在身心健康時，預先表明將來若遇到生命末期情況，想接受或拒絕哪些醫療方式（如插管、心肺復甦術、維生系統…等），而非由他人代為決定。' },
                { k: '避免無效醫療與家人困擾', v: '避免在生命最後承受無效醫療；當無法自我表達意願時，家人可透過事先填寫的內容了解本人意願。' },
              ].map(i=>(
                <div key={i.k} className="rounded-xl bg-white border border-teal-100 p-4">
                  <div className="text-base font-bold text-teal-800">{i.k}</div>
                  <div className="mt-1 text-[15px] leading-loose text-slate-600">{i.v}</div>
                </div>
              ))}
            </div>

            <h3 className="mt-6 font-bold text-slate-900">什麼是病人自主權利法？</h3>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              {[
                ['病人自主','病人具有優先知情權益、選擇與決策。'],
                ['善終保障','依照法律事先表達特定情況下的醫療保障。'],
                ['病醫和諧','醫療及病人自主間取平衡，醫師協助病人善終有法律保護。'],
              ].map(([k,v])=>(
                <div key={k} className="rounded-xl bg-teal-800 text-white p-4">
                  <div className="text-base font-bold">{k}</div>
                  <div className="mt-1 text-[15px] leading-loose text-teal-100">{v}</div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 font-bold text-slate-900">何時會啟動預立醫療 (AD) 呢？</h3>
            <p className="text-[13px] text-slate-500">在五項特定臨床條件下，經醫療專業評估後啟動</p>
            <div className="mt-3 grid gap-2">
              <div className="rounded-xl bg-white border border-slate-200 px-4 py-3">
                <div className="text-base font-bold text-slate-900">末期病人</div>
                <div className="text-[15px] text-slate-600 leading-loose">病人處於不可逆的末期，且由醫師診斷及醫學上證據顯示存活時間有限者（例如：癌症、重大器官衰竭…等）。</div>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 px-4 py-3">
                <div className="text-base font-bold text-slate-900">不可逆的昏迷</div>
                <div className="text-[15px] text-slate-600 leading-loose">病人因外傷（例如：車禍）或非外傷（例如：腦部缺氧）造成腦部病變，經過兩位神經專科醫師評估後，處於重度持續性昏迷的狀態。</div>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 px-4 py-3">
                <div className="text-base font-bold text-slate-900">永久性植物人</div>
                <div className="text-[15px] text-slate-600 leading-loose">因外傷（例如：車禍）導致 6 個月以上仍無改善；因非外傷（例如：腦部缺氧）導致 3 個月以上仍無改善。</div>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 px-4 py-3">
                <div className="text-base font-bold text-slate-900">極重度失智</div>
                <div className="text-[15px] text-slate-600 leading-loose">醫師經由臨床失智評估量表（CDR）及功能性評估量表（FAST），診斷失智程度達 3 分以上、功能性評估達 7 分以上，且持續有意識障礙，生活無法自理、學習或工作等情況。</div>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 px-4 py-3">
                <div className="text-base font-bold text-slate-900">其他重症</div>
                <div className="text-[15px] text-slate-600 leading-loose">經中央主管機關公告之病人疾病狀況或痛苦難以忍受、疾病無法治癒且依當時醫療水準無其他合適解決方法之情形。目前衛福部所公告的 12 種疾病，請以衛生福利部網站公告為準。</div>
              </div>
            </div>

            <h3 className="mt-8 font-bold text-slate-900">什麼是預立醫療諮商？</h3>
            <p className="mt-2 text-[17px] leading-loose text-slate-600">
              意願人（想簽署預立醫療的人）、親屬（或其他相關者）與 ACP 諮商團隊進行預立醫療內容了解及溝通的過程，主要討論如果意願人因為重大意外或疾病…等，在特定臨床條件下，想要接受或拒絕的<b>維持生命醫療</b>與<b>人工營養及流體餵養</b>的醫療選擇，同時也能讓家屬了解意願人的想法。
            </p>

            <h3 className="mt-8 font-bold text-slate-900">參與諮商前，需先思考及準備什麼呢？</h3>
            <ul className="mt-3 space-y-2 text-[17px] leading-loose text-slate-600">
              <li className="flex gap-2"><span className="text-teal-700 font-bold">▸</span><span>思考自我生命的價值：對於發生突發事件或疾病時，您的醫療決定是？</span></li>
              <li className="flex gap-2"><span className="text-teal-700 font-bold">▸</span><span>邀請 1 至 2 位二等親家屬或委任醫療代理人，共同參與預立醫療諮商。</span></li>
              <li className="flex gap-2"><span className="text-teal-700 font-bold">▸</span><span>需不需要委任醫療代理人：思考看看身邊有什麼人適合擔任呢？</span></li>
            </ul>
            <div className="mt-3 rounded-xl border-l-4 border-teal-700 bg-white px-4 py-3 text-[15px] leading-loose text-slate-600">
              <b className="text-slate-900">委任醫療代理人：</b>意願人指定較為親近信任的親人或朋友，當意願人遇到意識昏迷或無法清楚表達意願時，代理意願人表達醫療意願；若有家庭成員在場參與，可選擇是否要簽署預立醫療決定書。
            </div>
            <img
              src={`${import.meta.env.BASE_URL}acp-family.png`}
              alt="什麼是二親等親屬圖解"
              className="mt-3 w-full rounded-xl border border-slate-200"
              loading="lazy"
            />
            <p className="mt-1 text-[13px] text-slate-400">圖片來源：病人自主研究中心（https://parc.tw/event/course/article/266）</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-bold text-amber-900">預立醫療諮商服務如何收費？</h3>
              <div className="mt-4 grid gap-3">
                {fees.map(f=>(
                  <div key={f.title} className="rounded-xl bg-white border border-amber-100 px-4 py-3 flex items-baseline justify-between gap-4">
                    <div><div className="text-base font-bold text-slate-900">{f.title}</div><div className="text-[13px] text-slate-500">{f.note}</div></div>
                    <div className="text-right shrink-0"><span className="text-xl font-extrabold text-amber-700">${f.price}</span><span className="text-[13px] text-slate-500"> {f.unit}</span></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">預立醫療啟動三步驟</h3>
              <ol className="mt-4 space-y-4">
                <li className="flex gap-3"><span className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center text-sm font-bold shrink-0">1</span><div><div className="font-bold text-base">步驟一：預立醫療諮商</div><div className="text-[15px] text-slate-600 leading-loose">至可簽署預立醫療之院所完成諮商，了解自己有哪些知情選擇及決定權、「維持生命治療、人工營養及流體餵養」之符合條件、預立醫療的更改與撤回流程、若無親友需公證人時該如何簽署等。<br/>提醒：預立醫療諮商，並「非完成」預立醫療決定書！</div></div></li>
                <li className="flex gap-3"><span className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center text-sm font-bold shrink-0">2</span><div><div className="font-bold text-base">步驟二：簽立預立醫療決定書</div><div className="text-[15px] text-slate-600 leading-loose">若諮商當下還無法清楚決定是否簽署，可以先將空白紙本帶回家，深思熟慮後再填寫，但必須完成見證人或公證人欄位資料。</div></div></li>
                <li className="flex gap-3"><span className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center text-sm font-bold shrink-0">3</span><div><div className="font-bold text-base">步驟三：攜帶健保卡及紙本至院所註記</div><div className="text-[15px] text-slate-600 leading-loose">將「健保卡」及「預立醫療決定書」帶回醫療院所，人員會協助申請健保卡預立醫療註記，並上傳資料至衛生福利部資料庫。<br/>提醒：預立醫療決定書「掃描檔案」與「正本」的法律效益相同！</div></div></li>
              </ol>
              <a href="tel:077492636" className="mt-5 block text-center rounded-xl bg-teal-800 py-3 text-base font-bold text-white">預約諮商時段：(07) 749-2636</a>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 text-[19px]">簽署預立醫療 — 參與者</h3>
              <ul className="mt-3 space-y-2 text-[15px] leading-loose text-slate-600 list-disc pl-5">
                <li>意願人本人、醫療服務提供者（醫師、護理人員）、見證人（至少要一位二等親內親屬）、醫療委任代理人（若有指定）或其他親友等。</li>
                <li>若沒有兩位「見證人」共同參與簽立預立醫療決定書，但有較信任的朋友或同居者，且對方願意成為意願者之擔保人，也可至法院或民間私人公證人處公證及簽立醫療決定書。</li>
              </ul>
              <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-[15px] leading-loose text-slate-600">
                <b className="text-slate-900">見證人：</b>年齡滿 18 歲以上具完全行為能力的家屬、親友或其他人，見證人不須了解預立醫療之項目內容，並不是幫助他人做擔保。
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <a href="https://www.judicial.gov.tw/tw/lp-152-1.html" target="_blank" className="rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-50">民間公證人一覽 →</a>
                <a href="https://www.judicial.gov.tw/tw/cp-50-16-82d30-1.html" target="_blank" className="rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-50">地方法院一覽 →</a>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 text-[19px]">如何查詢預立醫療註記呢？</h3>
              <ul className="mt-3 space-y-2 text-[15px] leading-loose text-slate-600 list-disc pl-5">
                <li>可於家中電腦使用健保卡（搭配讀卡機）至衛生福利部「預立醫療決定、安寧緩和醫療及器官捐贈意願資訊系統」網站首頁查詢。</li>
                <li>至各醫學中心、區域醫院、地區醫院掛號櫃台或自動服務機臺查詢。</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-teal-200 bg-white p-6">
              <h3 className="font-bold text-slate-900 text-[19px]">相關連結（文件下載）</h3>
              <div className="mt-3 grid gap-2 text-[15px]">
                <a href={`${import.meta.env.BASE_URL}acp-cdr.pdf`} target="_blank" className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 hover:bg-slate-50"><span className="font-medium text-slate-800">臨床失智評估量表〈CDR〉-空白</span><span className="text-teal-700 font-bold">PDF ↓</span></a>
                <a href={`${import.meta.env.BASE_URL}acp-mohw12.pdf`} target="_blank" className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 hover:bg-slate-50"><span className="font-medium text-slate-800">衛福部公告第12類疾病・擴大適用病主法之臨床條件及附件（2021.04.13）</span><span className="text-teal-700 font-bold">PDF ↓</span></a>
                <a href={`${import.meta.env.BASE_URL}acp-guide.pdf`} target="_blank" className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 hover:bg-slate-50"><span className="font-medium text-slate-800">2021預立醫療照護諮商說明工具＿意願人版（安寧照顧基金會）</span><span className="text-teal-700 font-bold">PDF ↓</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Doctor() {
  return (
    <section id="doctor" className="mx-auto max-w-[1120px] px-4 sm:px-6 py-10 sm:py-14">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
        <div>
          <div className="rounded-2xl overflow-hidden bg-slate-100 relative">
            <img src={`${import.meta.env.BASE_URL}doctor-award.jpg`} alt="劉永豐醫師榮獲2018年度台灣醫療典範獎頒獎合影" className="w-full object-cover" loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
              <div className="text-white font-serif text-xl font-semibold">劉永豐 醫師</div>
              <div className="text-teal-100 text-xs tracking-widest">LIU YUNG-FENG, M.D.</div>
            </div>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-400">2018年度【台灣醫療典範獎】頒獎典禮（左：陳時中部長　中：劉永豐醫師　右：邱泰源理事長）</p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-teal-700">ABOUT DOCTOR</p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-slate-900">以家庭為單位，守護您的健康</h2>
          <p className="mt-3 text-[17px] leading-loose text-slate-600">
            劉永豐醫師長期投入基層醫療，重視醫病溝通與連續性照護，關懷長者與家庭健康，並積極推動預立醫療與病人自主。
          </p>

          <h3 className="mt-6 font-bold text-slate-900">簡歷</h3>
          <ul className="mt-2 space-y-1.5 text-[17px] leading-loose text-slate-600">
            <li className="flex gap-2"><span className="text-teal-700 font-bold">▸</span><span>民國 51 年生於台灣高雄</span></li>
            <li className="flex gap-2"><span className="text-teal-700 font-bold">▸</span><span>民國 77 年國防醫學院醫學系畢業</span></li>
            <li className="flex gap-2"><span className="text-teal-700 font-bold">▸</span><span>民國 87 年第五屆高雄縣榮譽縣民</span></li>
          </ul>

          <blockquote className="mt-6 border-l-4 border-teal-700 pl-4 text-[17px] leading-loose text-slate-700 italic">
            「醫術是承諾，仁心是日常。把每一次看診當作與家庭的長期合作。」
          </blockquote>

          <div className="mt-6 flex gap-3">
            <a href="#acp" className="rounded-full bg-teal-800 px-5 py-2.5 text-base font-bold text-white">預約諮商</a>
            <a href="#access" className="rounded-full border border-slate-200 px-5 py-2.5 text-base font-bold text-slate-800">查看交通</a>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎬</span>
          <h3 className="font-bold text-slate-900">媒體報導：醫者仁心 — 劉永豐假日投身慈善</h3>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 aspect-video bg-slate-900">
          <iframe
            title="20160919 醫者仁心 劉永豐假日投身慈善"
            src="https://www.youtube.com/embed/J7NZzl_mRmI"
            className="w-full h-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏅</span>
          <h3 className="font-bold text-amber-900">劉永豐醫師榮獲 2018 年度【台灣醫療典範獎】</h3>
        </div>
        <h4 className="mt-5 text-base font-bold text-slate-900">推薦理由及傑出貢獻事蹟</h4>
        <ul className="mt-3 grid md:grid-cols-2 gap-2">
          {[
            '承辦國防醫學院全校愛心認養活動，認養台北真光育幼院約 50 名孤兒，協助其經費不足與陪伴孤兒，同時策畫偏鄉義診服務隊，後發展為國防醫學院海外服務隊。',
            '參加高雄佛光山雲水醫院，提供偏鄉地區的義診，同時參加慈濟國際人醫會，於山區與偏遠地區義診。',
            '創立義診團，於高雄、屏東、台南山區及全國偏遠地區，結合中醫與相關慈善團體，進行中西醫義診、義剪、慈善濟貧發放等活動。',
            '921 地震時，於埔里成立醫療站，進行義診及協助物資發放。',
            '遠赴印度南部從事義診，於印度各醫療貧乏區域，建設醫院、引進醫療設備，提升醫療環境，回國後廣邀各方力量成立醫療基金，定期提供醫療相關資源。',
            '88 水災時，於屏東成立災民收容中心，於台東縣偏鄉地區設立醫療站，進行義診及物資發放。',
            '高雄氣爆事件，協助設立醫療站及服務台，進行義診及物資發放。',
            '於中國西藏、青海等地進行義診並提供醫療相關服務。',
            '尼泊爾大地震時提供募集物資等相關協助。',
          ].map((t, i)=>(
            <li key={i} className="flex gap-2 rounded-xl bg-white border border-amber-100 px-4 py-3 text-[15px] leading-loose text-slate-700"><span className="font-extrabold text-amber-600 shrink-0">{i+1}</span><span>{t}</span></li>
          ))}
        </ul>
        <p className="mt-3 text-[13px] text-amber-800/70">資料來源：<a href="https://www.tma.tw/med_paragon/index_Info.asp?/137.html" target="_blank" className="underline underline-offset-2">中華民國醫師公會全國聯合會</a></p>
      </div>

      <div className="mt-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
        <div>
          <img src={`${import.meta.env.BASE_URL}doctor-alumni.png`} alt="劉永豐醫師榮獲2021年鳳山高中第20屆傑出校友名錄" className="w-full rounded-xl border border-slate-200" loading="lazy" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <h3 className="font-bold text-slate-900">劉永豐醫師榮獲鳳山高中第 20 屆傑出校友（2021 年）</h3>
          </div>
          <div className="mt-4 text-[17px] leading-loose text-slate-600 space-y-1.5">
            <p><b className="text-slate-900">學籍：</b>高中部 69 年畢業</p>
            <p><b className="text-slate-900">學歷：</b>國防醫學院醫學系、國立高雄師範大學生物科技系碩士班、中國醫學大學學士後中醫系</p>
            <p><b className="text-slate-900">事蹟：</b>現任劉永豐診所院長</p>
          </div>
          <ol className="mt-4 space-y-1.5 text-[15px] leading-loose text-slate-600 list-decimal pl-5">
            <li>107 年醫療典範獎</li>
            <li>中華民國 87 年高雄縣第五屆高雄縣榮譽縣民</li>
            <li>國軍高雄總醫院腸胃科主治醫師</li>
            <li>三軍總醫院腸胃科主治醫師</li>
            <li>台灣消化系醫學會基層委員</li>
            <li>高雄市醫師公會慈善醫療召集人</li>
            <li>社團法人中華民國坤志慈善會第一、二屆理事長；第三、四屆執行長</li>
            <li>社團法人中華民國基層醫師協會理事</li>
            <li>國防醫學院南區校友會常務理事</li>
            <li>財團法人鄭子太極拳發展基金會董事</li>
            <li>中華民國內科專科醫師</li>
            <li>台灣消化系內科專科醫師</li>
            <li>台灣消化系內視鏡專科醫師</li>
            <li>台灣居家醫療專科醫師</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

function Access() {
  return (
    <section id="access" className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-10 sm:py-12 grid lg:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-teal-300">ACCESS & CONTACT</p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold">交通與聯絡</h2>
          <div className="mt-6 space-y-4 text-base">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-xs tracking-widest text-teal-300 font-bold">ADDRESS</div>
              <div className="mt-1 font-medium">802 高雄市苓雅區建國一路 15-1 號</div>
              <div className="text-[13px] text-slate-400">No. 15-1, Jianguo 1st Rd., Lingya Dist., Kaohsiung 802, Taiwan</div>
              <div className="mt-2 text-[15px] text-slate-300">醫事機構代碼：3502082209</div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <a href="tel:077492636" className="rounded-xl bg-white text-slate-900 p-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-teal-800 text-white flex items-center justify-center">☎</span>
                <div><div className="text-sm text-slate-500">電話預約</div><div className="font-bold">(07) 749-2636</div></div>
              </a>
              <a href="https://maps.google.com/?q=高雄市苓雅區建國一路15-1號" target="_blank" className="rounded-xl bg-teal-700 text-white p-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">◎</span>
                <div><div className="text-sm text-teal-100">開啟地圖</div><div className="font-bold">Google Maps 導航</div></div>
              </a>
            </div>
            <div className="text-[15px] leading-loose text-slate-400">
              建議搭捷運至文化中心或技擊館站轉乘公車/步行；開車可搜尋周邊停車場。諮商採預約制，請先來電確認時段。
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-slate-800 border border-white/10 min-h-[320px]">
          <iframe
            title="劉永豐診所地圖"
            src="https://www.google.com/maps?q=高雄市苓雅區建國一路15-1號&z=16&output=embed"
            className="w-full h-[380px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-6 justify-between">
        <div>
          <div className="font-bold text-slate-900">劉永豐診所</div>
          <div className="text-[13px] text-slate-500 mt-1">醫術承諾，仁心為您 · 衛福部指定 預立醫療照護諮商機構 (114年9月起)</div>
          <div className="text-[13px] text-slate-400 mt-2">© {new Date().getFullYear()} Liu Yung-Feng Clinic. All rights reserved.</div>
        </div>
        <div className="text-[13px] text-slate-500 leading-relaxed">
          <div>地址 802高雄市苓雅區建國一路15-1號</div>
          <div>電話 (07)7492636 · 機構代碼 3502082209</div>
          <div className="mt-2"><a href="#" className="underline underline-offset-4">隱私權與醫療資訊聲明</a> · 本網站僅供資訊參考，實際醫療請依醫師評估</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <InfoCards />
      <ACP />
      <Doctor />
      <Access />
      <Footer />
      {/* floating call button mobile */}
      <a href="tel:077492636" className="md:hidden fixed bottom-4 right-4 rounded-full bg-teal-800 text-white px-5 py-3 font-bold shadow-lg border border-teal-700">
        撥打電話
      </a>
    </div>
  )
}
