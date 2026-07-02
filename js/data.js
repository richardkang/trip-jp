/* ── Trip Data ── */
const TRIP = {
  title: '🚗 福岡行2026：九州夏日自駕慢活之旅',
  subtitle: '2026年7月5日（日）— 7月10日（五）· 6天5夜 · 北九州',
  badges: [
    '✈️ 星宇航空 JX840/JX841',
    '🚙 NISSAN SERENA e-POWER',
    '♨️ 別府 × 由布院',
    '🏯 小倉 × 門司港',
    '⛩️ 太宰府 × 糸島',
  ],

  flights: [
    {
      label: '去程',
      flight: 'JX840 · 2026/07/05 (日)',
      route: '台北 TPE 09:35 → 福岡 FUK 13:05',
      airline: '星宇航空',
    },
    {
      label: '回程',
      flight: 'JX841 · 2026/07/10 (五)',
      route: '福岡 FUK 14:15 → 台北 TPE 15:45',
      airline: '星宇航空',
    },
  ],

  car: [
    {
      label: '租車公司',
      value: 'NISSAN RENT A CAR',
      detail: 'SERENA e-POWER（7人座休旅車）',
      meta: '大空間，長輩上下車極為友善',
    },
    {
      label: '取 / 還車',
      value: '福岡機場國際航廈',
      detail: '取車：07/05（日）13:00',
      detail2: '還車：07/10（五）13:00',
    },
  ],

  accommodation: [
    {
      period: '前半段 · 7/5 – 7/7（2晚）· 別府',
      name: 'ゆけむりの宿 小町荘',
      addr: '54-6 Tsurumi, Beppu, Oita 874-0840',
      note: '🅿️ 免費停車 · 🔑 16:00後密碼鑰匙盒自助入住',
      style: 'first',
    },
    {
      period: '後半段 · 7/7 – 7/10（3晚）· 福岡',
      name: 'IONSTAY Tenjin Minami',
      addr: '1-chōme-12-10 Kiyokawa, Chuo Ward, Fukuoka',
      note: '🅿️ 免費停車 · 🔑 16:00後智慧鎖自助入住 · 📍 福岡市中心',
      style: 'second',
    },
  ],

  summary: {
    text: '本次行程為 <strong>6天5夜</strong> 北九州自駕遊，同行有 <strong>85歲及多位55歲以上長輩</strong>，路線涵蓋別府、由布院、小倉、門司港、太宰府與糸島。',
    principles: ['少走路', '不爬坡', '車程短', '好停車'],
  },

  days: [
    {
      badge: 'Day 1 · 7/5',
      title: '福岡 ➡️ 別府（抵達與溫泉之夜）',
      spots: [
        { name: '沿途休息站巡禮', note: '高速公路依序：山田 SA → 玖珠 PA → 由布院 PA → 別府灣 SA（海景）' },
        { name: 'Marushoku Yamanami 超市', note: '下別府交流道後補給今晚水果零食' },
        { name: '葫蘆溫泉（晚上）', note: '20:30 後前往，避開人潮，體驗溫泉砂浴與露天風呂' },
      ],
      foods: ['山田SA 米粉麵包', '玖珠PA 進擊巨肉包', '玖珠PA 豐後牛可樂餅', '別府灣SA B-speak蛋糕捲', '水天旋轉壽司（在地鮮魚）', 'ひでさん 大分雞肉天婦羅'],
    },
    {
      badge: 'Day 2 · 7/6',
      title: '由布院 ＋ 別府地獄',
      spots: [
        { name: '湯之坪街道 · 金鱗湖', note: '上午漫步由布院，停於中央停車場' },
        { name: '海地獄 · 竈地獄', note: '下午參觀別府知名地獄溫泉' },
      ],
      foods: ['Milch 起司蛋糕', '由布院布丁', '岡本屋 地獄蒸布丁', '溫泉蛋'],
    },
    {
      badge: 'Day 3 · 7/7',
      title: '北九州古蹟與異國海港（別府 ➡️ 小倉 ➡️ 門司港 ➡️ 福岡）',
      spots: [
        { name: '魚町銀天街', note: '室內冷氣拱廊，午餐前散步避暑' },
        { name: '小倉城護城河', note: '飯後拍照留念' },
        { name: '舊門司稅關 · 藍翼橋', note: '車停舊門司稅關正後方停車場' },
        { name: '九州鐵道紀念館', note: '全室內 · 輪椅友善 · 夏日避暑首選' },
      ],
      foods: ['辻利茶舖 抹茶茶泡飯', '旦過烏龍麵', '釜飯玄', 'SHIROYA 爆漿煉乳麵包', 'Mooon 復古烤布丁', '梅園 河豚人形燒', '門司港燒咖哩（必吃）'],
    },
    {
      badge: 'Day 4 · 7/8',
      title: '太宰府慢活禪意日',
      spots: [
        { name: '觀世音寺 · 大宰府政廳跡', note: '上午 · 全平坦 · 無觀光客的千年古剎與大草皮' },
        { name: '太宰府表參道 · 太宰府天滿宮', note: '停於太宰府駐車中心 · 中午至下午' },
        { name: '寶滿宮 竈門神社', note: '傍晚開車10分鐘上山，購買精美御守' },
        { name: 'LaLaport 福岡', note: '晚上購物（注意：不去需爬山的天開稻荷神社）' },
      ],
      foods: ['現烤梅枝餅', '鰻魚蒸籠飯'],
    },
    {
      badge: 'Day 5 · 7/9',
      title: '糸島海景 ＋ 福岡市區購物',
      spots: [
        { name: '櫻井二見浦 夫婦岩鳥居', note: '上午 · 停於二見浦停車場' },
        { name: 'LaLaport 福岡 · 博多運河城', note: '下午回市區免稅採購' },
      ],
      foods: ['糸島海景咖啡廳 海鹽冰淇淋', '博多拉麵', '明太子名物'],
    },
    {
      badge: 'Day 6 · 7/10',
      title: '福岡市區 ➡️ 賦歸',
      spots: [
        { name: '悠閒早餐 · 整理行李', note: '早上在福岡市區從容享用' },
        { name: '出發前往福岡機場', note: '11:00 準時出發' },
        { name: 'NISSAN 還車', note: '13:00 福岡機場國際航廈完成還車手續' },
        { name: 'JX841 起飛', note: '14:15 福岡 FUK → 台北 TPE 15:45 抵達' },
      ],
      foods: [],
    },
  ],
};
