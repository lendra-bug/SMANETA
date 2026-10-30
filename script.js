// ==========================================================================
// 1. DATA MASTER KEBUDAYAAN NUSANTARA (VALID & LENGKAP)
// ==========================================================================
const dataNusantara = {
    sumatra: {
        title: "Kebudayaan Sumatra",
        tag: "Sumatra Barat & Sekitarnya",
        desc: "Sumatra menghadirkan pesona arsitektur Rumah Gadang dengan atap bagonjong yang menyerupai tanduk kerbau, merepresentasikan kemenangan. Budayanya dilengkapi oleh Tari Piring yang dibawakan dengan memegang piring di telapak tangan tanpa terjatuh, merefleksikan rasa syukur mendalam masyarakat agraris atas hasil panen melimpah.",
        fact: "Piring yang digunakan dalam Tari Piring aslinya akan dilemparkan ke lantai di akhir tari dan para penari akan menari di atas pecahan kaca tajam tanpa terluka!"
    },
    jawa: {
        title: "Kebudayaan Jawa",
        tag: "D.I. Yogyakarta & Jawa Tengah",
        desc: "Kebudayaan Jawa berakar kuat pada nilai filosofi, keselarasan hidup, dan ketenangan jiwa. Mahakarya ini termanifestasi melalui kesenian Wayang Kulit yang diakui UNESCO sebagai warisan dunia, alunan gamelan tradisional yang magis, serta kemegahan struktural Candi Borobudur sebagai salah satu monumen Buddha terbesar di dunia.",
        fact: "Wayang Kulit bukan sekadar hiburan, melainkan media dakwah dan penyebaran tuntunan hidup yang setiap karakternya memiliki bayangan watak tersendiri."
    },
    bali: {
        title: "Kebudayaan Bali & Nusa Tenggara",
        tag: "Bali, Lombok, NTT",
        desc: "Bali memikat dunia internasional dengan integrasi harmonis antara adat istiadat, ritual spiritualitas Hindu, dan ekspresi seni murni. Fenomena ikonik seperti Tari Kecak mengeksplorasi harmoni suara puluhan pria tanpa instrumen musik konvensional, menceritakan kisah epos Ramayana berlatar eksotisme alam nusantara.",
        fact: "Tari Kecak diciptakan pada tahun 1930-an oleh penari Bali Wayan Limbak bersama pelukis asal Jerman berwarna Walter Spies berdasarkan ritual adat Sanghyang."
    },
    kalimantan: {
        title: "Kebudayaan Kalimantan",
        tag: "Masyarakat Suku Dayak",
        desc: "Kalimantan menyimpan pesona peradaban komunal agung Suku Dayak di dalam Rumah Betang—sebuah rumah panggung panjang yang menampung puluhan keluarga dalam satu atap untuk merekatkan tali persaudaraan. Ditambah dengan keindahan Tari Burung Enggang yang meniru keanggunan burung sakral Enggang.",
        fact: "Rumah Betang sengaja dibuat tinggi hingga mencapai 3-5 meter untuk menghindari banjir bandang dan serangan dari hewan buas di pedalaman hutan."
    },
    sulawesi: {
        title: "Kebudayaan Sulawesi",
        tag: "Tana Toraja, Sulawesi Selatan",
        desc: "Sulawesi menyuguhkan keunikan adat dari Tana Toraja melalui rumah adat Tongkonan dengan atap berbentuk perahu berlapis tanduk kerbau sebagai simbol status sosial. Kehidupan kultural di sini sangat berfokus pada penghormatan leluhur, yang puncaknya diwujudkan dalam upacara pemakaman akbar Rambu Solo'.",
        fact: "Upacara Rambu Solo' membutuhkan waktu persiapan berbulan-bulan bahkan bertahun-tahun, sehingga jenazah disimpan terlebih dahulu di rumah adat sebelum dimakamkan."
    },
    papua: {
        title: "Kebudayaan Maluku & Papua",
        tag: "Indonesia Bagian Timur",
        desc: "Wilayah Indonesia Timur dikenal dengan keteguhan tradisi dan kedekatannya yang murni dengan alam liar. Rumah Honai yang melingkar tanpa jendela dirancang kokoh menahan dinginnya pegunungan Papua, dipadukan harmonis dengan Tari Tifa yang enerjik diiringi tabuhan perkusi tradisional berbahan kayu pilihan.",
        fact: "Atap jerami tebal pada Rumah Honai dirancang khusus guna meredam hawa dingin ekstrem dan mengalirkan asap perapian di bagian dalam rumah secara alami."
    }
};

// ==========================================================================
// 2. SISTEM MANAJEMEN MODAL POP-UP (ANTI-MACET)
// ==========================================================================
const modal = document.getElementById("detailsModal");

// Fungsi Global Membuka Jendela Pop-up Modal
function openModal(region) {
    const data = dataNusantara[region];
    if (data) {
        document.getElementById("modalTitle").innerText = data.title;
        document.getElementById("modalTag").innerText = data.tag;
        document.getElementById("modalDescription").innerText = data.desc;
        document.getElementById("modalFact").innerText = data.fact;
        
        // Memunculkan Display Modal
        modal.style.display = "flex";
    }
}

// Fungsi Global Menutup Jendela Pop-up Modal
function closeModal() {
    if (modal) {
        modal.style.display = "none";
    }
}

// ==========================================================================
// 3. GAMEFIKASI KUIS INTERAKTIF WIDGET
// ==========================================================================
const quizData = [
    { q: "Alat musik petik khas dari Pulau Rote, NTT yang terbuat dari daun lontar bernama...", a: ["Sasando", "Angklung", "Kolintang", "Tifa"], correct: 0 },
    { q: "Upacara adat pembakaran jenazah di Bali dikenal luas dengan sebutan...", a: ["Rambu Solo'", "Ngaben", "Sekaten", "Tedak Siten"], correct: 1 },
    { q: "Rumah adat Honai merupakan tempat tinggal ikonik bagi masyarakat asli di daerah...", a: ["Toraja", "Minangkabau", "Dayak", "Papua"], correct: 3 }
];

let currentQuestion = 0; 
let score = 0;

function startQuiz() {
    document.getElementById("quiz-intro").style.display = "none";
    document.getElementById("quiz-content").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("q-num").innerText = currentQuestion + 1;
    document.getElementById("q-text").innerText = q.q;
    const optionsContainer = document.getElementById("q-options");
    optionsContainer.innerHTML = "";
    
    q.a.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt-btn";
        btn.innerText = opt;
        btn.onclick = () => selectAnswer(idx);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(idx) {
    if (idx === quizData[currentQuestion].correct) score++;
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-content").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    document.getElementById("result-text").innerText = `Hebat! Kamu berhasil menjawab ${score} dari ${quizData.length} pertanyaan dengan benar.`;
}

function resetQuiz() {
    currentQuestion = 0; 
    score = 0;
    document.getElementById("quiz-result").style.display = "none";
    document.getElementById("quiz-intro").style.display = "block";
}
