/**
 * Life Quotes Logic
 * Adapted from React implementation to Vanilla JS
 */

const app = {
    state: {
        birthDate: null
    },

    // --- Data Sources (From provided React code) ---
    data: {
        poems: [
            {
                title: "봄이 오면",
                content: "꽃이 피고\n새가 노래한다\n그렇게 살아간다\n인생이 아름답구나",
                author: "작자 미상",
            },
            {
                title: "오늘을 살다",
                content: "어제는 지나갔고\n내일은 오지 않았다\n오늘을 살아가자\n지금 이 순간이 영원하다",
                author: "오늘의 영감",
            },
            {
                title: "행복의 순간",
                content: "작은 것에 감사하며\n큰 꿈을 꾸고\n매일을 축복으로\n살아가는 것",
                author: "행복론",
            },
            {
                title: "별 헤는 밤",
                content: "계절이 지나가는 하늘에는\n가을로 가득 차 있습니다\n나는 아무 걱정도 없이\n가을 속의 별들을 다 헤일 듯합니다",
                author: "윤동주"
            }
        ],
        zodiacSigns: [
            { name: "물병자리", dates: "1.20~2.18" },
            { name: "물고기자리", dates: "2.19~3.20" },
            { name: "양자리", dates: "3.21~4.19" },
            { name: "황소자리", dates: "4.20~5.20" },
            { name: "쌍둥이자리", dates: "5.21~6.21" },
            { name: "게자리", dates: "6.22~7.22" },
            { name: "사자자리", dates: "7.23~8.22" },
            { name: "처녀자리", dates: "8.23~9.22" },
            { name: "천칭자리", dates: "9.23~10.22" },
            { name: "전갈자리", dates: "10.23~11.22" },
            { name: "사수자리", dates: "11.23~12.21" },
            { name: "염소자리", dates: "12.22~1.19" }
        ],
        tarotCards: [
            { name: "광대", description: "자유, 모험, 새로운 시작 (0)" },
            { name: "마법사", description: "창조, 수완, 의지 (I)" },
            { name: "여사제", description: "지혜, 직관, 신비 (II)" },
            { name: "여황제", description: "풍요, 여성성, 자연 (III)" },
            { name: "황제", description: "권위, 안정, 리더십 (IV)" },
            { name: "교황", description: "전통, 가르침, 신념 (V)" },
            { name: "연인", description: "사랑, 조화, 선택 (VI)" },
            { name: "전차", description: "승리, 진행, 자기통제 (VII)" },
            { name: "힘", description: "용기, 인내, 내면의 힘 (VIII)" },
            { name: "별", description: "희망, 영감, 평온 (XVII)" },
            { name: "달", description: "불안, 환상, 잠재의식 (XVIII)" },
            { name: "태양", description: "성공, 기쁨, 활력 (XIX)" },
            { name: "심판", description: "부활, 보상, 각성 (XX)" },
            { name: "세계", description: "완성, 성취, 통합 (XXI)" }
        ],
        // Updated with images
        flowers: [
            { name: "해바라기", meaning: "행복, 열정", image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800" },
            { name: "장미", meaning: "사랑, 아름다움", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800" },
            { name: "튤립", meaning: "완벽한 사랑", image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800" },
            { name: "라벤더", meaning: "평온, 치유", image: "https://images.unsplash.com/photo-1493612276216-9c7827e997df?w=800" },
            { name: "수국", meaning: "진심, 변덕", image: "https://images.unsplash.com/photo-1507746560936-3a5c2d169d54?w=800" },
            { name: "프리지아", meaning: "천진난만, 시작", image: "https://images.unsplash.com/photo-1634547307613-2d1ae2c14fc5?w=800" }
        ],
        colors: [
            { name: "Gold", hex: "#FFD700" },
            { name: "Coral", hex: "#FF7F50" },
            { name: "Mint", hex: "#98FF98" },
            { name: "Lavender", hex: "#E6E6FA" },
            { name: "Sky Blue", hex: "#87CEEB" },
            { name: "Rose Pink", hex: "#FFB7C5" }
        ],
        // Updated with images
        beverages: [
            { name: "아메리카노", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800" },
            { name: "카페라떼", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800" },
            { name: "얼그레이 티", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800" },
            { name: "녹차", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800" },
            { name: "캐모마일 티", image: "https://images.unsplash.com/photo-1597816760676-43d941864cc2?w=800" },
            { name: "에스프레소", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800" },
            { name: "자몽에이드", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800" },
            { name: "바닐라라떼", image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=800" }
        ],
        shoppingItems: [
            { name: "헌터", category: "부츠" },
            { name: "에르메스", category: "스카프" },
            { name: "나이키", category: "스니커즈" },
            { name: "유니클로", category: "기본 티셔츠" },
            { name: "양키캔들", category: "향초" },
            { name: "라미", category: "만년필" },
            { name: "몰스킨", category: "노트" }
        ],
        lifePathNumbers: [1, 3, 5, 6, 7, 9, 11, 22],
        birthElements: ["가을", "겨울", "봄", "여름"]
    },

    // --- Initialization ---
    init: function () {
        this.loadBirthday();
        this.updateDateDisplay();

        if (this.state.birthDate) {
            this.renderRecommendations(this.state.birthDate);
        } else {
            document.getElementById('result-container').classList.add('hidden');
        }
    },

    updateDateDisplay: function () {
        const today = new Date();
        const days = ["일", "월", "화", "수", "목", "금", "토"];
        const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${days[today.getDay()]}요일`;
        document.getElementById('current-date').innerText = formattedDate;
    },

    // --- Logic ---
    saveBirthday: function () {
        const input = document.getElementById('birth-date').value;
        if (!input) {
            alert('생년월일을 입력해주세요.');
            return;
        }
        this.state.birthDate = input;
        localStorage.setItem('user_birthday', input);
        this.renderRecommendations(input);
    },

    loadBirthday: function () {
        const saved = localStorage.getItem('user_birthday');
        if (saved) {
            this.state.birthDate = saved;
            document.getElementById('birth-date').value = saved;
        }
    },

    resetData: function () {
        if (confirm('설정을 초기화하시겠습니까?')) {
            localStorage.removeItem('user_birthday');
            location.reload();
        }
    },

    generateHash: function (dateStr) {
        return dateStr
            .split("-")
            .join("")
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    },

    getSelection: function (array, hash) {
        return array[hash % array.length];
    },

    // --- Rendering ---
    renderRecommendations: function (dateStr) {
        const hash = this.generateHash(dateStr);
        const { data } = this;

        // Show result container
        document.getElementById('setup-section').classList.add('hidden');
        document.getElementById('result-container').classList.remove('hidden');
        document.getElementById('result-container').style.display = 'flex';

        // 1. Analysis
        const zodiac = this.getSelection(data.zodiacSigns, hash);
        const tarot = this.getSelection(data.tarotCards, hash);
        const lifePath = this.getSelection(data.lifePathNumbers, hash);
        const element = this.getSelection(data.birthElements, hash);

        document.getElementById('res-zodiac').innerText = zodiac.name;
        document.getElementById('res-zodiac-date').innerText = zodiac.dates;

        document.getElementById('res-tarot').innerText = tarot.name;
        document.getElementById('res-tarot-desc').innerText = tarot.description;

        document.getElementById('res-lifepath').innerText = lifePath;
        document.getElementById('res-element').innerText = element;

        // 2. Quote (Poem)
        const poem = this.getSelection(data.poems, hash);
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerHTML = '';

        const lines = poem.content.split('\n');
        lines.forEach(line => {
            const p = document.createElement('p');
            p.className = 'quote-line';
            p.innerText = line;
            quoteContainer.appendChild(p);
        });

        const authorP = document.createElement('p');
        authorP.className = 'quote-author';
        authorP.innerText = `- ${poem.author} -`;
        quoteContainer.appendChild(authorP);

        // 3. Color
        const color = this.getSelection(data.colors, hash);
        document.getElementById('color-box').style.backgroundColor = color.hex;
        document.getElementById('color-name').innerText = color.name;
        document.getElementById('color-hex').innerText = color.hex;

        // 4. Beverage (Dynamic Image)
        const beverage = this.getSelection(data.beverages, hash);
        document.getElementById('beverage-name').innerText = beverage.name;
        document.getElementById('beverage-img').style.backgroundImage = `url('${beverage.image}')`;

        // 5. Flower (Dynamic Image)
        const flower = this.getSelection(data.flowers, hash);
        document.getElementById('flower-name').innerText = flower.name;
        document.getElementById('flower-meaning').innerText = flower.meaning;
        document.getElementById('flower-img').style.backgroundImage = `url('${flower.image}')`;

        // 6. Shopping
        const shopping = this.getSelection(data.shoppingItems, hash);
        document.getElementById('shop-category').innerText = shopping.category;
        document.getElementById('shop-name').innerText = shopping.name;

        const query = encodeURIComponent(shopping.name + ' ' + shopping.category);
        document.getElementById('shop-link').href = `https://search.shopping.naver.com/search/all?query=${query}`;
    }
};

window.onload = function () {
    app.init();
};
