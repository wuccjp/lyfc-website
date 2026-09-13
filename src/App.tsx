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
            <div className="text-[11px] tracking-[0.18em] text-teal-700 font-medium">LIU YUNG-FENG CLINIC</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a href="#services" className="hover:text-teal-700">服務與門診</a>
          <a href="#acp" className="hover:text-teal-700">預立醫療諮商</a>
          <a href="#doctor" className="hover:text-teal-700">劉永豐醫師</a>
          <a href="#access" className="hover:text-teal-700">交通與聯絡</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:077492636" className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-teal-700 transition">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" /> (07) 749-2636
          </a>
        </div>

        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3 text-sm">
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
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs sm:text-sm">
          <span className="rounded-full bg-amber-500 text-white px-2 py-0.5 text-[11px] font-bold">公告</span>
          <span className="font-medium text-amber-900">本診所於 <b>114年9月起</b> 為衛生福利部「提供預立醫療照護諮商醫療機構」</span>
          <a href="#acp" className="hidden sm:inline text-amber-700 underline underline-offset-4 ml-1">了解諮商 →</a>
        </div>

        <div className="mt-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
          <div>
            <p className="text-teal-700 font-bold tracking-[0.2em] text-xs sm:text-sm">FAMILY MEDICINE · KAOHSIUNG LINGYA</p>
            <h1 className="mt-3 font-serif text-[32px] sm:text-[48px] leading-[1.1] font-semibold text-slate-900">
              醫術承諾，<br/><span className="text-teal-800">仁心為您</span>
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-[560px] text-[15px] sm:text-[16px]">
              劉永豐診所深耕高雄苓雅，以家庭醫學為核心，提供細緻、連續性的基層照護。<br className="hidden sm:block"/>
              同時為 <b className="text-slate-800">衛福部指定預立醫療照護諮商(ACP)</b> 合法機構，陪您與家人從容做好未來醫療選擇。
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#acp" className="rounded-full bg-teal-800 px-6 py-3 text-sm font-bold text-white hover:bg-teal-700 transition shadow-sm">預約 預立醫療諮商</a>
              <a href="tel:077492636" className="rounded-full bg-white border border-slate-200 px-6 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">撥打電話 (07) 749-2636</a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"/> 802 高雄市苓雅區建國一路 15-1 號</span>
              <span>醫事機構代碼 3502082209</span>
            </div>

            <div className="mt-8 grid grid-cols-3 max-w-[520px] divide-x divide-slate-200 border-y border-slate-200 py-4 bg-white rounded-2xl">
              <div className="px-4 text-center">
                <div className="text-lg font-bold text-slate-900">20+</div><div className="text-[11px] tracking-wide text-slate-500">年在地服務</div>
              </div>
              <div className="px-4 text-center">
                <div className="text-lg font-bold text-slate-900">2018</div><div className="text-[11px] tracking-wide text-slate-500">醫療典範獎</div>
              </div>
              <div className="px-4 text-center">
                <div className="text-lg font-bold text-slate-900">ACP</div><div className="text-[11px] tracking-wide text-slate-500">合法諮商機構</div>
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
                <div className="mt-1 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold">門診時間</span>
                  <span className="text-slate-700 font-medium">週一至週六上午 · 週一至週五下午</span>
                </div>
                <div className="mt-2 text-xs text-slate-500 leading-relaxed">
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
        <p className="max-w-[420px] text-sm text-slate-600 leading-relaxed">常見疾病診療、慢性病追蹤、預防保健與健康諮詢，陪伴個人與家庭的長期健康。</p>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {[
          { t: '家庭醫學・基層診療', d: '感冒、腸胃、頭痛、過敏等常見病症，完整評估與轉介。', icon: '🩺' },
          { t: '慢性病・預防保健', d: '高血壓、糖尿病、高血脂追蹤，疫苗與成人健檢諮詢。', icon: '❤️' },
          { t: '預立醫療諮商 ACP', d: '衛福部指定機構，陪您完成病人自主權利法的諮商與註記。', icon: '📝', accent: true },
        ].map(c => (
          <div key={c.t} className={`rounded-2xl border p-6 ${c.accent ? 'bg-teal-800 text-white border-teal-700' : 'bg-white border-slate-200'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${c.accent ? 'bg-white/15' : 'bg-teal-50'}`}>{c.icon}</div>
            <h3 className={`mt-4 font-bold ${c.accent ? 'text-white' : 'text-slate-900'}`}>{c.t}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${c.accent ? 'text-teal-100' : 'text-slate-600'}`}>{c.d}</p>
            {c.accent && <a href="#acp" className="mt-4 inline-flex text-sm font-bold underline underline-offset-4 decoration-teal-300">了解收費與流程 →</a>}
          </div>
        ))}
      </div>

      {/* hours + contact */}
      <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
          <h3 className="font-bold text-slate-900 flex items-center gap-2"><span className="w-1.5 h-6 rounded-full bg-teal-700"/> 營業時間</h3>
          <p className="mt-2 text-xs text-slate-500">出門前建議來電 <a href="tel:077492636" className="font-bold text-teal-700 underline">(07) 749-2636</a> 確認。</p>
          <img
            src={`${import.meta.env.BASE_URL}clinic-hours.jpg`}
            alt="劉永豐診所營業時間公告"
            className="mt-4 w-full rounded-xl border border-slate-200"
            loading="lazy"
          />
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600 text-xs">
                <tr><th className="px-4 py-2.5 text-left font-semibold"></th><th className="px-2 py-2.5 text-center">一</th><th className="px-2 py-2.5 text-center">二</th><th className="px-2 py-2.5 text-center">三</th><th className="px-2 py-2.5 text-center">四</th><th className="px-2 py-2.5 text-center">五</th><th className="px-2 py-2.5 text-center">六</th><th className="px-2 py-2.5 text-center">日</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-4 py-3 font-medium">上午 8:00-12:00</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center text-slate-300">休</td></tr>
                <tr><td className="px-4 py-3 font-medium">下午 15:30-18:30</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center">●</td><td className="text-center text-slate-300">休</td><td className="text-center text-slate-300">休</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-slate-400">● 看診  休診｜週日固定公休；國定假日公休（逢週六僅上午診，依診所公告為主）</p>
        </div>

        <div className="rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-7">
          <h3 className="font-bold flex items-center gap-2"><span className="w-1.5 h-6 rounded-full bg-teal-400"/> 就診資訊</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex gap-3"><span className="text-teal-300">▸</span><span>請攜帶健保卡，未成年請由家屬陪同</span></div>
            <div className="flex gap-3"><span className="text-teal-300">▸</span><span>慢性病連續處方箋可於本院所領藥</span></div>
            <div className="flex gap-3"><span className="text-teal-300">▸</span><span>預立醫療諮商採預約制，請先來電預約時段</span></div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href="tel:077492636" className="rounded-xl bg-white text-slate-900 py-3 text-center text-sm font-bold">撥打電話</a>
            <a href="https://maps.google.com/?q=高雄市苓雅區建國一路15-1號" target="_blank" className="rounded-xl bg-teal-700 text-white py-3 text-center text-sm font-bold">開啟地圖</a>
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
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              在意識清醒時，預先表達對未來醫療的選擇。當未來遇到特定臨床條件而無法自主表達時，醫療團隊與家人能依您的意願做出符合本意的決策。
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[
                { k: '法律保障', v: '依《病人自主權利法》具法律效力，亞洲首例。' },
                { k: '自己決定', v: '預先選擇是否接受維持生命治療與人工營養。' },
                { k: '減少遺憾', v: '避免無效醫療，減輕家人代為抉擇的壓力。' },
              ].map(i=>(
                <div key={i.k} className="rounded-xl bg-white border border-teal-100 p-4">
                  <div className="text-sm font-bold text-teal-800">{i.k}</div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-600">{i.v}</div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 font-bold text-slate-900">什麼時候會啟動預立醫療決定(AD)？</h3>
            <p className="text-xs text-slate-500">須符合以下五項特定臨床條件之一，並經醫療專業評估</p>
            <div className="mt-3 grid gap-2">
              {[
                ['末期病人','疾病不可逆，醫學證據顯示存活有限(如癌末、重大器官衰竭)'],
                ['不可逆昏迷','外傷或腦病變經兩位神經專科評估為重度持續昏迷'],
                ['永久植物人','外傷6個月 / 非外傷3個月以上無改善'],
                ['極重度失智','CDR≧3 且 FAST≧7，持續意識障礙、無法自理'],
                ['其他重症','衛福部公告之12類疾病，重症難治、痛苦難忍、無合適解方'],
              ].map(([t,d])=>(
                <div key={t} className="flex gap-3 rounded-xl bg-white border border-slate-200 px-4 py-3">
                  <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs font-bold">•</span>
                  <div><div className="text-sm font-bold text-slate-900">{t}</div><div className="text-xs text-slate-600 leading-relaxed">{d}</div></div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">諮商流程 3 步驟</h3>
              <ol className="mt-4 space-y-4">
                <li className="flex gap-3"><span className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center text-sm font-bold shrink-0">1</span><div><div className="font-bold text-sm">預立醫療諮商</div><div className="text-xs text-slate-600 leading-relaxed">與醫師、護理師團隊了解權利、選項、撤回/變更方式與公證需求。諮商 ≠ 完成簽署。</div></div></li>
                <li className="flex gap-3"><span className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center text-sm font-bold shrink-0">2</span><div><div className="font-bold text-sm">簽立預立醫療決定書</div><div className="text-xs text-slate-600 leading-relaxed">可先將空白文件帶回深思，再完成見證人/公證人欄位簽署。</div></div></li>
                <li className="flex gap-3"><span className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center text-sm font-bold shrink-0">3</span><div><div className="font-bold text-sm">健保卡註記與上傳</div><div className="text-xs text-slate-600 leading-relaxed">攜健保卡與正本/掃描檔回院所，辦理註記並上傳衛福部資料庫。</div></div></li>
              </ol>
              <a href="#access" className="mt-5 block text-center rounded-xl bg-teal-800 py-3 text-sm font-bold text-white">預約諮商時段</a>
              <p className="mt-2 text-center text-[11px] text-slate-500">諮商前請思考生命價值觀、是否委任醫療代理人，並邀請1-2位二等親家屬陪同</p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-bold text-amber-900">收費方式</h3>
              <div className="mt-4 grid gap-3">
                {fees.map(f=>(
                  <div key={f.title} className="rounded-xl bg-white border border-amber-100 px-4 py-3 flex items-baseline justify-between gap-4">
                    <div><div className="text-sm font-bold text-slate-900">{f.title}</div><div className="text-[11px] text-slate-500">{f.note}</div></div>
                    <div className="text-right shrink-0"><span className="text-lg font-extrabold text-amber-700">${f.price}</span><span className="text-[11px] text-slate-500"> {f.unit}</span></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 text-sm">誰要參與、怎麼簽才有效？</h3>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600 list-disc pl-5">
                <li>意願人本人、醫療團隊(醫師/護理師)、至少一位二等親見證人；可指定醫療委任代理人。</li>
                <li>見證人須年滿18歲具完全行為能力，無須了解內容、非擔保人。</li>
                <li>若無法有兩位見證人，可經法院或民間公證人公證後簽立。</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <a href="https://www.judicial.gov.tw/tw/lp-152-1.html" target="_blank" className="rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-50">民間公證人一覽 →</a>
                <a href="https://www.judicial.gov.tw/tw/cp-50-16-82d30-1.html" target="_blank" className="rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-50">地方法院一覽 →</a>
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
        <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/4.8] relative">
          <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80&auto=format&fit=crop" alt="劉永豐醫師" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
            <div className="text-white font-serif text-xl font-semibold">劉永豐 醫師</div>
            <div className="text-teal-100 text-xs tracking-widest">LIU YUNG-FENG, M.D.</div>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-teal-700">ABOUT DOCTOR</p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-slate-900">以家庭為單位，守護您的健康</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            劉永豐醫師長期投入基層醫療，重視醫病溝通與連續性照護，關懷長者與家庭健康，並積極推動預立醫療與病人自主。
          </p>

          <div className="mt-6 grid gap-3">
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 flex gap-3">
              <span className="text-lg">🏅</span>
              <div><div className="text-sm font-bold text-amber-900">2018 台灣醫療典範獎</div><div className="text-xs text-amber-800/80">肯定長期在基層醫療與社區貢獻</div></div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 flex gap-3">
              <span className="text-lg">🎓</span>
              <div><div className="text-sm font-bold text-slate-900">2021 鳳山高中第20屆傑出校友</div><div className="text-xs text-slate-600">回饋母校、服務鄉里之肯定</div></div>
            </div>
          </div>

          <blockquote className="mt-6 border-l-4 border-teal-700 pl-4 text-sm leading-relaxed text-slate-700 italic">
            「醫術是承諾，仁心是日常。把每一次看診當作與家庭的長期合作。」
          </blockquote>

          <div className="mt-6 flex gap-3">
            <a href="#acp" className="rounded-full bg-teal-800 px-5 py-2.5 text-sm font-bold text-white">預約諮商</a>
            <a href="#access" className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-800">查看交通</a>
          </div>
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
          <div className="mt-6 space-y-4 text-sm">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-xs tracking-widest text-teal-300 font-bold">ADDRESS</div>
              <div className="mt-1 font-medium">802 高雄市苓雅區建國一路 15-1 號</div>
              <div className="text-xs text-slate-400">No. 15-1, Jianguo 1st Rd., Lingya Dist., Kaohsiung 802, Taiwan</div>
              <div className="mt-2 text-xs text-slate-300">醫事機構代碼：3502082209</div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <a href="tel:077492636" className="rounded-xl bg-white text-slate-900 p-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-teal-800 text-white flex items-center justify-center">☎</span>
                <div><div className="text-xs text-slate-500">電話預約</div><div className="font-bold">(07) 749-2636</div></div>
              </a>
              <a href="https://maps.google.com/?q=高雄市苓雅區建國一路15-1號" target="_blank" className="rounded-xl bg-teal-700 text-white p-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">◎</span>
                <div><div className="text-xs text-teal-100">開啟地圖</div><div className="font-bold">Google Maps 導航</div></div>
              </a>
            </div>
            <div className="text-xs leading-relaxed text-slate-400">
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
          <div className="text-xs text-slate-500 mt-1">醫術承諾，仁心為您 · 衛福部指定 預立醫療照護諮商機構 (114年9月起)</div>
          <div className="text-xs text-slate-400 mt-2">© {new Date().getFullYear()} Liu Yung-Feng Clinic. All rights reserved.</div>
        </div>
        <div className="text-xs text-slate-500 leading-relaxed">
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
