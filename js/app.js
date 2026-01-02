/**
 * Life Quotes Logic
 * Adapted from React implementation to Vanilla JS
 */

const app = {
    state: {
        birthDate: null
    },

    // --- Data Sources ---
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
            { name: "물병자리", dates: "1.20~2.18", element: "Air" },
            { name: "물고기자리", dates: "2.19~3.20", element: "Water" },
            { name: "양자리", dates: "3.21~4.19", element: "Fire" },
            { name: "황소자리", dates: "4.20~5.20", element: "Earth" },
            { name: "쌍둥이자리", dates: "5.21~6.21", element: "Air" },
            { name: "게자리", dates: "6.22~7.22", element: "Water" },
            { name: "사자자리", dates: "7.23~8.22", element: "Fire" },
            { name: "처녀자리", dates: "8.23~9.22", element: "Earth" },
            { name: "천칭자리", dates: "9.23~10.22", element: "Air" },
            { name: "전갈자리", dates: "10.23~11.22", element: "Water" },
            { name: "사수자리", dates: "11.23~12.21", element: "Fire" },
            { name: "염소자리", dates: "12.22~1.19", element: "Earth" }
        ],
        tarotCards: [
            { name: "광대", description: "자유, 모험, 새로운 시작 (0)", type: "dynamic" },
            { name: "마법사", description: "창조, 수완, 의지 (I)", type: "active" },
            { name: "여사제", description: "지혜, 직관, 신비 (II)", type: "static" },
            { name: "여황제", description: "풍요, 여성성, 자연 (III)", type: "nurturing" },
            { name: "황제", description: "권위, 안정, 리더십 (IV)", type: "stable" },
            { name: "교황", description: "전통, 가르침, 신념 (V)", type: "mental" },
            { name: "연인", description: "사랑, 조화, 선택 (VI)", type: "social" },
            { name: "전차", description: "승리, 진행, 자기통제 (VII)", type: "dynamic" },
            { name: "힘", description: "용기, 인내, 내면의 힘 (VIII)", type: "active" },
            { name: "별", description: "희망, 영감, 평온 (XVII)", type: "mental" },
            { name: "달", description: "불안, 환상, 잠재의식 (XVIII)", type: "static" },
            { name: "태양", description: "성공, 기쁨, 활력 (XIX)", type: "active" },
            { name: "심판", description: "부활, 보상, 각성 (XX)", type: "transform" },
            { name: "세계", description: "완성, 성취, 통합 (XXI)", type: "stable" }
        ],
        flowers: [
            { name: "해바라기", meaning: "행복, 열정", image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800" },
            { name: "장미", meaning: "사랑, 아름다움", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800" },
            { name: "튤립", meaning: "완벽한 사랑", image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800" },
            { name: "라벤더", meaning: "평온, 치유", image: "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=800" },
            { name: "수국", meaning: "진심, 변덕", image: "https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?w=800" },
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
        beverages: [
            { name: "아메리카노", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800" },
            { name: "카페라떼", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800" },
            { name: "얼그레이 티", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800" },
            { name: "녹차", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800" },
            { name: "캐모마일 티", image: "https://images.unsplash.com/photo-1606189912808-410a71944810?w=800" },
            { name: "에스프레소", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800" },
            { name: "자몽에이드", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800" },
            { name: "바닐라라떼", image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=800" }
        ],
        lifePathNumbers: [1, 3, 5, 6, 7, 9, 11, 22],
        birthElements: ["가을", "겨울", "봄", "여름"],

        // --- New Data Sets ---
        luckyItems: [
            "거울", "텀블러", "모자", "안경", "다이어리", "이어폰", "손수건", "향수", "시계",
            "반지", "목걸이", "책", "펜", "우산", "운동화", "백팩", "지갑", "립밤",
            "마스크", "스카프", "장갑", "양말", "카메라", "노트북", "달력", "화분", "쿠션",
            "초콜릿", "사탕", "껌", "비타민", "물티슈", "보조배터리", "충전기", "키링", "썬글라스"
        ],
        fashionItems: [
            "깔끔한 화이트 셔츠", "편안한 오버핏 맨투맨", "시크한 블랙 자켓", "캐주얼한 데님 팬츠",
            "따뜻한 니트 조끼", "활동적인 트레이닝 셋업", "포근한 가디건", "세련된 트렌치 코트",
            "미니멀한 슬랙스", "귀여운 체크 셔츠", "강렬한 레드 포인트", "차분한 베이지 톤온톤"
        ],
        actionVerbs: {
            dynamic: ["걷기", "달리기", "여행 계획하기", "새로운 곳 방문하기"],
            active: ["운동하기", "청소하기", "큰 소리로 웃기", "친구 만나기"],
            static: ["명상하기", "일기 쓰기", "독서하기", "음악 감상하기"],
            nurturing: ["화분 물주기", "요리하기", "선물하기", "반신욕하기"],
            stable: ["가계부 정리하기", "계획 세우기", "저축하기", "일찍 잠들기"],
            mental: ["공부하기", "다큐멘터리 보기", "글쓰기", "전시회 관람하기"],
            social: ["연락하기", "칭찬하기", "경청하기", "모임 참석하기"],
            transform: ["짐 정리하기", "오래된 물건 버리기", "머리 스타일 바꾸기", "새로운 시도하기"]
        },
        avoidList: [
            "늦잠", "과식", "충동구매", "말다툼", "성급한 결론", "무리한 운동", "음주",
            "뒷담화", "약속 지각", "밤샘", "차가운 음료", "불필요한 논쟁", "미루기", "부정적인 생각"
        ]
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

        // Default Images (Fallback)
        const defaultImages = {
            beverage: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800",
            flower: "https://images.unsplash.com/photo-1507646227500-4d3899666d85?w=800"
        };

        const setBgWithFallback = (elementId, imgUrl, defaultUrl) => {
            const el = document.getElementById(elementId);
            const img = new Image();
            img.onload = () => { el.style.backgroundImage = `url('${imgUrl}')`; };
            img.onerror = () => { el.style.backgroundImage = `url('${defaultUrl}')`; };
            el.style.backgroundImage = `url('${defaultUrl}')`;
            if (imgUrl && imgUrl !== defaultUrl) { img.src = imgUrl; }
        };

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

        // 3. Colors (3 Recommendations)
        const cLen = data.colors.length;
        const color1 = data.colors[hash % cLen];
        const color2 = data.colors[(hash + 1) % cLen];
        const color3 = data.colors[(hash + 2) % cLen];

        const renderColor = (idx, colorObj) => {
            document.getElementById(`color-box-${idx}`).style.backgroundColor = colorObj.hex;
            document.getElementById(`color-name-${idx}`).innerText = colorObj.name;
            document.getElementById(`color-hex-${idx}`).innerText = colorObj.hex;
        };

        renderColor(1, color1);
        renderColor(2, color2);
        renderColor(3, color3);

        // 4. Beverage
        const beverage = this.getSelection(data.beverages, hash);
        document.getElementById('beverage-name').innerText = beverage.name;
        setBgWithFallback('beverage-img', beverage.image, defaultImages.beverage);

        // 5. Flower
        const flower = this.getSelection(data.flowers, hash);
        document.getElementById('flower-name').innerText = flower.name;
        document.getElementById('flower-meaning').innerText = flower.meaning;
        setBgWithFallback('flower-img', flower.image, defaultImages.flower);

        // --- NEW FEATURES ---

        // 6. Lucky Number (1-45)
        const birthDateObj = new Date(dateStr);
        const todayFn = new Date();
        const luckyNum = (hash + todayFn.getDate()) % 45 + 1;
        document.getElementById('res-lucky-num').innerText = luckyNum;

        // 7. Golden Time
        const isEventLifePath = lifePath % 2 === 0;
        const goldenTime = isEventLifePath ? "오후 2시" : "오전 10시";
        document.getElementById('res-golden-time').innerText = goldenTime;

        // 8. Lucky Direction
        let direction = "동쪽";
        if (zodiac.element === "Fire") direction = "남쪽";
        else if (zodiac.element === "Water") direction = "서쪽";
        else if (zodiac.element === "Earth") direction = "북쪽";
        else direction = "동쪽"; // Air
        document.getElementById('res-direction').innerText = direction;
        document.getElementById('res-direction-desc').innerText = `${direction}에서 행운이 찾아옵니다`;

        // 9. Lucky Item
        const luckyItem = this.getSelection(data.luckyItems, hash);
        document.getElementById('res-item').innerText = luckyItem;
        document.getElementById('res-item-desc').innerText = `${luckyItem}을(를) 챙기세요`;

        // 10. Fashion Point
        const fashion = this.getSelection(data.fashionItems, hash);
        document.getElementById('res-fashion').innerText = fashion;

        // 11. Action Verb (Based on Tarot Type)
        const tarotType = tarot.type || "static";
        const actionList = data.actionVerbs[tarotType] || data.actionVerbs["static"];
        const action = actionList[hash % actionList.length];
        document.getElementById('res-action').innerText = action;

        // 12. Best Partner (Simple Logic: Next Zodiac index)
        const zIdx = data.zodiacSigns.findIndex(z => z.name === zodiac.name);
        const partnerIdx = (zIdx + 4) % 12; // Triplicity logic roughly (Same element usually +4)
        const partner = data.zodiacSigns[partnerIdx];
        document.getElementById('res-partner').innerText = partner ? partner.name : "염소자리";

        // 13. Avoid (Based on Hash + Day to be consistent for the day)
        const avoid = this.getSelection(data.avoidList, hash + todayFn.getDate());
        document.getElementById('res-avoid').innerText = avoid;
    }
};

window.onload = function () {
    app.init();
};
