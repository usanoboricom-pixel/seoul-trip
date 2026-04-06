"use client";

const days = [
  {
    day: "Day 1",
    date: "2025年6月12日（金）",
    events: [
      {
        time: "14:55",
        title: "金浦空港 着",
        note: "タクシーで梨泰院へ約40分",
        address: "Gimpo International Airport, Seoul",
      },
      {
        time: "16:00",
        title: "Airbnb チェックイン",
        note: "セルフチェックイン・キーパッド\n確認コード：HM534C9AFH",
        address: "11-7 Hoenamu-ro 6-gil, Yongsan, Seoul",
      },
      {
        time: "16:30",
        title: "H559",
        note: "漢南洞",
        address: "Itaewon-ro 55ga-gil, Yongsan, Seoul",
      },
      {
        time: "17:45",
        title: "NOT4NERD Hannam",
        note: "漢南洞",
        address: "26-1 Itaewon-ro 55ga-gil, Yongsan, Seoul",
      },
      {
        time: "19:00",
        title: "WARPED.",
        note: "梨泰院",
        address: "26 Itaewon-ro 42-gil, Yongsan, Seoul",
      },
      {
        time: "20:00",
        title: "CONVERSE ITAEWON",
        note: "梨泰院 ／ 22時まで営業",
        address: "56-1 Itaewon-dong, Yongsan, Seoul",
      },
      {
        time: "21:00",
        title: "友人と合流・夕食",
        note: "",
        address: "",
      },
    ],
  },
  {
    day: "Day 2",
    date: "2025年6月13日（土）",
    events: [
      {
        time: "09:30",
        title: "景福宮",
        note: "ハンボク着用で入場無料",
        address: "161 Sajik-ro, Jongno-gu, Seoul",
      },
      {
        time: "11:00",
        title: "結婚式会場へ移動",
        note: "",
        address: "262 Itaewon-dong, Yongsan, Seoul",
      },
      {
        time: "11:30",
        title: "結婚式",
        note: "",
        address: "262 Itaewon-dong, Yongsan, Seoul",
      },
      {
        time: "14:00",
        title: "梨泰院フリータイム",
        note: "",
        address: "Itaewon-dong, Yongsan, Seoul",
      },
      {
        time: "夜",
        title: "友人たちと祝杯",
        note: "",
        address: "",
      },
    ],
  },
  {
    day: "Day 3",
    date: "2025年6月14日（日）",
    events: [
      {
        time: "11:00",
        title: "Airbnb チェックアウト",
        note: "⚠️ 11時厳守",
        address: "11-7 Hoenamu-ro 6-gil, Yongsan, Seoul",
      },
      {
        time: "12:00",
        title: "Worksout Store",
        note: "麻浦",
        address: "130 Yanghwa-ro, Mapo-gu, Seoul",
      },
      {
        time: "13:30",
        title: "ROOT HONGDAE",
        note: "麻浦 B1F",
        address: "140 Yanghwa-ro B1F, Mapo-gu, Seoul",
      },
      {
        time: "15:00",
        title: "Nerdy Flagship Store",
        note: "麻浦",
        address: "27 Hongik-ro 6-gil, Mapo-gu, Seoul",
      },
      {
        time: "16:00",
        title: "カフェ休憩",
        note: "",
        address: "",
      },
      {
        time: "17:00",
        title: "タクシーで金浦空港へ出発",
        note: "",
        address: "Gimpo International Airport, Seoul",
      },
      {
        time: "18:40",
        title: "金浦発 GMP → HND",
        note: "",
        address: "Gimpo International Airport, Seoul",
      },
      {
        time: "21:00",
        title: "羽田着",
        note: "",
        address: "",
      },
    ],
  },
];

function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pb-16">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/90 backdrop-blur border-b border-yellow-600/30 px-4 py-4">
        <h1 className="text-xl font-bold text-yellow-400 tracking-widest text-center">
          🇰🇷 ソウル旅行 2025
        </h1>
        <p className="text-center text-xs text-zinc-400 mt-0.5">
          6月12日〜14日 ／ 6人
        </p>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-6 space-y-10">
        {days.map((day) => (
          <section key={day.day}>
            {/* Day header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">
                {day.day}
              </span>
              <span className="text-zinc-300 text-sm font-medium">{day.date}</span>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[52px] top-0 bottom-0 w-px bg-yellow-600/30" />

              <div className="space-y-1">
                {day.events.map((event, i) => (
                  <div key={i} className="flex gap-4 group">
                    {/* Time */}
                    <div className="w-[52px] shrink-0 pt-3 text-right">
                      <span className="text-yellow-500 text-xs font-mono leading-none">
                        {event.time}
                      </span>
                    </div>

                    {/* Dot */}
                    <div className="relative flex flex-col items-center">
                      <div className="mt-3.5 w-2.5 h-2.5 rounded-full bg-yellow-400 border-2 border-black z-10 shrink-0" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 group-hover:border-yellow-600/50 transition-colors">
                        <p className="font-semibold text-white text-sm leading-snug">
                          {event.title}
                        </p>
                        {event.note && (
                          <p className="text-zinc-400 text-xs mt-1 whitespace-pre-line leading-relaxed">
                            {event.note}
                          </p>
                        )}
                        {event.address && (
                          <a
                            href={mapsUrl(event.address)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-xs text-yellow-500 hover:text-yellow-300 transition-colors"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                            </svg>
                            Google Maps
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <p className="text-center text-zinc-600 text-xs pt-4">楽しい旅を！ 🍻</p>
      </div>
    </main>
  );
}
