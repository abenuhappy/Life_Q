/**
 * Life Quotes Static App Logic
 * Ported from Python Flask Backend
 */

const app = {
    state: {
        birthDate: null,
        today: new Date().toISOString().split('T')[0]
    },

    // --- Data Sets (Simplified for Static) ---
    quotes: [
        { text: '오늘 할 수 있는 일을 내일로 미루지 마라.', author: '벤자민 프랭클린' },
        { text: '성공은 준비된 자에게 찾아온다.', author: '루이 파스퇴르' },
        { text: '실패는 성공의 어머니다.', author: '토마스 에디슨' },
        { text: '꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.', author: '괴테' },
        { text: '인생은 스스로 선택하는 것이다.', author: '알베르 카뮈' },
        { text: '가장 큰 영광은 넘어지지 않는 것이 아니라 넘어질 때마다 일어서는 것이다.', author: '넬슨 만델라' },
        { text: '자신을 믿어라. 당신은 생각하는 것보다 훨씬 더 강하다.', author: '테오도어 루스벨트' },
        { text: '변화는 고통스럽지만, 변화하지 않으면 더 고통스럽다.', author: '존 F. 케네디' },
        { text: '당신이 할 수 있다고 믿든 할 수 없다고 믿든, 당신이 옳다.', author: '헨리 포드' },
        { text: '어제는 역사이고, 내일은 수수께끼이며, 오늘은 선물이다.', author: '엘리너 루스벨트' },
        { text: '당신의 한계는 당신이 스스로 정한 것이다.', author: '나폴레온 힐' },
        { text: '인생은 짧다. 시간을 낭비하지 말고 사랑하는 일을 하라.', author: '스티브 잡스' },
        { text: '당신이 두려워하는 것을 하면 두려움이 사라진다.', author: '랄프 왈도 에머슨' },
        { text: '성공의 비밀은 시작하는 것이다.', author: '마크 트웨인' }
        // Add more from original file if needed...
    ],

    poems: [
        { text: "봄이 오면\n꽃이 피고\n새가 노래한다\n그렇게 살아가는 것이\n인생이 아니겠는가", author: "작자 미상" },
        { text: "하루하루\n작은 기쁨을 찾아\n살아가자\n그 작은 기쁨들이\n모여 큰 행복이 된다", author: "작자 미상" },
        { text: "별이 빛나는 밤\n고요한 마음으로\n하늘을 바라보면\n모든 걱정이\n작아 보인다", author: "작자 미상" },
        { text: "바람이 불어오면\n나뭇잎이 흔들리고\n그 소리가\n마음을 위로한다", author: "작자 미상" }
    ],

    shoppingItems: {
        '패션': ['니트', '코트', '가디건', '스웨터', '후드티', '청바지', '슬랙스', '운동화', '목도리'],
        '뷰티': ['립스틱', '파운데이션', '마스크팩', '핸드크림', '향수', '선크림'],
        '라이프': ['소이캔들', '디퓨저', '무드등', '화분', '블루투스 스피커', '텀블러', '머그컵'],
        '푸드': ['초콜릿', '마카롱', '허브티', '드립커피', '비타민', '견과류'],
        '힐링': ['입욕제', '수면안대', '요가매트', '컬러링북', '필사노트']
    },

    flowerData: ['장미', '튤립', '해바라기', '수국', '백합', '프리지아', '안개꽃', '라벤더', '데이지'],
    drinkData: ['아메리카노', '카페라떼', '카푸치노', '얼그레이 티', '캐모마일 티', '자몽에이드', '레몬티', '유자차', '핫초코'],
    colorData: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Navy', 'Purple', 'Pink', 'White', 'Black', 'Gold', 'Silver', 'Beige', 'Mint'],

    // --- Initialization ---
    init: function () {
        this.loadBirthday();
        this.updateDateDisplay();

        if (this.state.birthDate) {
            this.showResults();
        } else {
            document.getElementById('setup-section').classList.remove('hidden');
        }
    },

    updateDateDisplay: function () {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        document.getElementById('current-date').innerText = now.toLocaleDateString('ko-KR', options);
    },

    // --- Birthday Handling ---
    saveBirthday: function () {
        const input = document.getElementById('birth-date').value;
        if (!input) {
            alert('생년월일을 입력해주세요.');
            return;
        }

        this.state.birthDate = input;
        localStorage.setItem('user_birthday', input);

        document.getElementById('setup-section').classList.add('hidden');
        this.showResults();
    },

    loadBirthday: function () {
        const saved = localStorage.getItem('user_birthday');
        if (saved) {
            this.state.birthDate = saved;
            // Set input value for easier editing later
            document.getElementById('birth-date').value = saved;
        }
    },

    resetData: function () {
        if (confirm('저장된 정보를 초기화하시겠습니까?')) {
            localStorage.removeItem('user_birthday');
            this.state.birthDate = null;
            location.reload();
        }
    },

    // --- Main Logic ---
    showResults: function () {
        document.getElementById('result-section').classList.remove('hidden');

        const birthDateObj = new Date(this.state.birthDate);
        this.analyzeBirthday(birthDateObj);
        this.generateQuote(birthDateObj);
        this.generateRecommendations(birthDateObj);
    },

    // 1. Birthday Analyzer (Ported)
    analyzeBirthday: function (date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        // Zodiac
        const zodiac = this.getZodiac(month, day);
        document.getElementById('zodiac-sign').innerText = zodiac.kr;

        // Tarot (Using Life Path Number logic roughly)
        const tarot = this.getTarot(month, day);
        document.getElementById('tarot-card').innerText = tarot.name;
        document.getElementById('tarot-meaning').innerText = tarot.meaning;

        // Life Path Number
        const lifePath = this.calculateLifePath(year, month, day);
        document.getElementById('life-path').innerText = lifePath;

        // Season
        let season = '겨울';
        if (month >= 3 && month <= 5) season = '봄';
        else if (month >= 6 && month <= 8) season = '여름';
        else if (month >= 9 && month <= 11) season = '가을';
        document.getElementById('season').innerText = season;
    },

    getZodiac: function (m, d) {
        const zodiacs = [
            { bound: 20, kr: '물병자리' }, // 1
            { bound: 19, kr: '물고기자리' }, // 2
            { bound: 21, kr: '양자리' }, // 3
            { bound: 20, kr: '황소자리' }, // 4
            { bound: 21, kr: '쌍둥이자리' }, // 5
            { bound: 22, kr: '게자리' }, // 6
            { bound: 23, kr: '사자자리' }, // 7
            { bound: 23, kr: '처녀자리' }, // 8
            { bound: 24, kr: '천칭자리' }, // 9
            { bound: 23, kr: '전갈자리' }, // 10
            { bound: 23, kr: '사수자리' }, // 11
            { bound: 22, kr: '염소자리' }  // 12
        ];

        // Month is 1-based, array is 0-based.
        // Logic: if day < bound of this month, it's prev sign (stored in prev index)
        // Check special case for Jan (index 0) looking back to Dec

        const idx = m - 1;
        const signData = zodiacs[idx];

        if (d < signData.bound) {
            // It's the previous sign
            if (idx === 0) return zodiacs[11]; // Jan -> Dec (Capricorn)
            return zodiacs[idx - 1];
        }
        return signData;
    },

    getTarot: function (m, d) {
        // Simple logic: (m + d) % 22
        const num = (m + d) % 22 || 22;
        const cards = {
            1: { name: '마법사', meaning: '창조, 수완, 의지' },
            2: { name: '여사제', meaning: '지혜, 직관, 신비' },
            3: { name: '여황제', meaning: '풍요, 여성성, 자연' },
            4: { name: '황제', meaning: '권위, 구조, 아버지' },
            5: { name: '교황', meaning: '전통, 가르침, 신념' },
            6: { name: '연인', meaning: '사랑, 조화, 선택' },
            7: { name: '전차', meaning: '승리, 진행, 자기통제' },
            8: { name: '힘', meaning: '용기, 인내, 내면의 힘' },
            9: { name: '은둔자', meaning: '성찰, 고독, 지혜' },
            10: { name: '운명의 수레바퀴', meaning: '변화, 운명, 주기' },
            11: { name: '정의', meaning: '공정, 균형, 진실' },
            12: { name: '매달린 사람', meaning: '희생, 새로운 시각, 정지' },
            13: { name: '죽음', meaning: '종결, 변화, 새로운 시작' },
            14: { name: '절제', meaning: '조화, 균형, 치유' },
            15: { name: '악마', meaning: '속박, 중독, 물질주의' },
            16: { name: '탑', meaning: '파괴, 갑작스런 변화, 계시' },
            17: { name: '별', meaning: '희망, 영감, 평온' },
            18: { name: '달', meaning: '불안, 환상, 잠재의식' },
            19: { name: '태양', meaning: '성공, 활력, 행복' },
            20: { name: '심판', meaning: '부활, 보상, 각성' },
            21: { name: '세계', meaning: '완성, 성취, 통합' },
            22: { name: '광대', meaning: '자유, 모험, 순수함 (0)' }
        };
        return cards[num] || cards[22];
    },

    calculateLifePath: function (y, m, d) {
        // Reduce number until single digit
        const sumDigits = (n) => n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        let sum = sumDigits(y) + sumDigits(m) + sumDigits(d);
        while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
            sum = sumDigits(sum);
        }
        return sum;
    },

    // 2. Generate Random/Seeded Data
    getPseudoRandom: function (seedStr) {
        // Simple hash function for consistent daily results per user
        let hash = 0;
        for (let i = 0; i < seedStr.length; i++) {
            const char = seedStr.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    },

    generateQuote: function (birthDateObj) {
        // Seed based on Birth + Today
        const seedStr = this.state.today + birthDateObj.getDate();
        const rand = this.getPseudoRandom(seedStr);

        // 70% Quote, 30% Poem via Modulo
        const isPoem = (rand % 10) < 3;

        let content;
        if (isPoem) {
            const idx = rand % this.poems.length;
            content = this.poems[idx];
            document.getElementById('quote-text').innerText = content.text; // Keeps newlines? CSS whitespace pre-wrap needed?
            // Let's ensure CSS handles newlines.
            document.getElementById('quote-text').style.whiteSpace = 'pre-line';
        } else {
            const idx = rand % this.quotes.length;
            content = this.quotes[idx];
            document.getElementById('quote-text').innerText = `"${content.text}"`;
            document.getElementById('quote-text').style.whiteSpace = 'normal';
        }
        document.getElementById('quote-author').innerText = `- ${content.author} -`;
    },

    generateRecommendations: function (birthDateObj) {
        const seedStr = this.state.today + birthDateObj.getMonth(); // Different seed aspect
        let rand = this.getPseudoRandom(seedStr);

        // Color
        const cIdx = rand % this.colorData.length;
        document.getElementById('rec-color').innerText = this.colorData[cIdx];

        // Drink
        const dIdx = (rand >> 2) % this.drinkData.length;
        document.getElementById('rec-drink').innerText = this.drinkData[dIdx];

        // Flower
        const fIdx = (rand >> 4) % this.flowerData.length; // Shift bits for variety
        document.getElementById('rec-flower').innerText = this.flowerData[fIdx];

        // Shopping
        this.generateShopping(rand);
    },

    generateShopping: function (rand) {
        const categories = Object.keys(this.shoppingItems);
        const catIdx = (rand >> 3) % categories.length;
        const category = categories[catIdx];

        const items = this.shoppingItems[category];
        const itemIdx = (rand >> 5) % items.length;
        const item = items[itemIdx];

        document.getElementById('shop-item-name').innerText = item;

        // Generate Naver Search Link
        const query = encodeURIComponent(item);
        const link = `https://search.shopping.naver.com/search/all?query=${query}`;
        document.getElementById('shop-link').href = link;
    }
};

// Start
window.onload = function () {
    app.init();
};
