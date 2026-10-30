// 1. Data Budaya Nusantara Terstruktur (Komplit)
const dataNusantara = {
    sumatra: {
        title: "Kebudayaan Sumatra",
        tag: "Sumatra Barat & Sekitarnya",
        image: "https://unsplash.com",
        desc: "Sumatra menghadirkan pesona arsitektur Rumah Gadang dengan atap bagonjong yang menyerupai tanduk kerbau, merepresentasikan kemenangan. Budayanya dilengkapi oleh Tari Piring yang dibawakan dengan memegang piring di telapak tangan tanpa terjatuh, merefleksikan rasa syukur mendalam masyarakat agraris atas hasil panen melimpah.",
        fact: "Piring yang digunakan dalam Tari Piring aslinya akan dilemparkan ke lantai di akhir tari dan para penari akan menari di atas pecahan kaca tajam tanpa terluka!"
    },
    jawa: {
        title: "Kebudayaan Jawa",
        tag: "D.I. Yogyakarta & Jawa Tengah",
        image: "https://unsplash.com",
        desc: "Kebudayaan Jawa berakar kuat pada nilai filosofi, keselarasan hidup, dan ketenangan jiwa. Mahakarya ini termanifestasi melalui kesenian Wayang Kulit yang diakui UNESCO sebagai warisan dunia, alunan gamelan tradisional yang magis, serta kemegahan struktural Candi Borobudur sebagai salah satu monumen Buddha terbesar di dunia.",
        fact: "Wayang Kulit bukan sekadar hiburan, melainkan media dakwah dan penyebaran tuntunan hidup yang setiap karakternya memiliki bayangan watak tersendiri."
    },
    bali: {
        title: "Kebudayaan Bali & Nusa Tenggara",
        tag: "Bali, Lombok, NTT",
        image: "https://unsplash.com",
        desc: "Bali memikat dunia internasional dengan integrasi harmonis antara adat istiadat, ritual spiritualitas Hindu, dan ekspresi seni murni. Fenomena ikonik seperti Tari Kecak mengeksplorasi harmoni suara puluhan pria tanpa instrumen musik konvensional, menceritakan kisah epos Ramayana berlatar eksotisme alam nusantara.",
        fact: "Tari Kecak diciptakan pada tahun 1930-an oleh penari Bali Wayan Limbak bersama pelukis asal Jerman bernama Walter Spies berdasarkan ritual adat Sanghyang."
    },
    kalimantan: {
        title: "Kebudayaan Kalimantan",
        tag: "Masyarakat Suku Dayak",
        image: "https://unsplash.com",
        desc: "Kalimantan menyimpan pesona peradaban komunal agung Suku Dayak di dalam Rumah Betang—sebuah rumah panggung panjang yang menampung puluhan keluarga dalam satu atap untuk merekatkan tali persaudaraan. Ditambah dengan keindahan Tari Burung Enggang yang meniru keanggunan burung sakral Enggang.",
        fact: "Rumah Betang sengaja dibuat tinggi hingga mencapai 3-5 meter untuk menghindari banjir bandang dan serangan dari hewan buas di pedalaman hutan."
    },
    sulawesi: {
        title: "Kebudayaan Sulawesi",
        tag: "Tana Toraja, Sulawesi Selatan",
        image: "https://unsplash.com",
        desc: "Sulawesi menyuguhkan keunikan adat dari Tana Toraja melalui rumah adat Tongkonan dengan atap berbentuk perahu berlapis tanduk kerbau sebagai simbol status sosial. Kehidupan kultural di sini sangat berfokus pada penghormatan leluhur, yang puncaknya diwujudkan dalam upacara pemakaman akbar Rambu Solo'.",
        fact: "Upacara Rambu Solo' membutuhkan waktu persiapan berbulan-bulan bahkan bertahun-tahun, sehingga jenazah disimpan terlebih dahulu di rumah adat sebelum dimakamkan."
    },
    papua: {
        title: "Kebudayaan Maluku & Papua",
        tag: "Indonesia Bagian Timur",
        image: "https://unsplash.com",
        desc: "Wilayah Indonesia Timur dikenal dengan keteguhan tradisi dan kedekatannya yang murni dengan alam liar. Rumah Honai yang melingkar tanpa jendela dirancang kokoh menahan dinginnya pegunungan Papua, dipadukan harmonis dengan Tari Tifa yang enerjik diiringi tabuhan perkusi tradisional berbahan kayu pilihan.",
        fact: "Atap jerami tebal pada Rumah Honai dirancang khusus guna meredam hawa dingin ekstrem dan mengalirkan asap perapian di bagian dalam rumah secara alami."
    }
};

// 2. Sistem Animasi Kinerja Tinggi GSAP (Faktor Utama Penilaian Juri)
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animasi Intro Load Beranda
    gsap.from(".navbar", { y: -100, opacity: 0, duration: 1, ease: "power4.out" });
    gsap.from(".animated-element", { 
        y: 40, 
        opacity: 0, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: "power3.out",
        delay: 0.3 
    });

    // Animasi Scroll Trigger Untuk Card Eksplorasi (Efek Muncul Bertahap)
    gsap.from(".animated-card", {
        scrollTrigger: {
            trigger: "#eksplorasi",
            start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });
});

// 3. Logika Navigasi Aktif Otomatis saat Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// 4. Manajemen Modals Detail Kebudayaan
const modal = document.getElementById("detailsModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const region = card.getAttribute("data-region");
        const data = dataNusantara[region];

        if (data) {
            document.getElementById("modalTitle").innerText = data.title;
            document.getElementById("modalTag").innerText = data.tag;
            document.getElementById("modalImg").style.backgroundImage = `url('${data.image}')`;
            document.getElementById("modalDescription").innerText = data.desc;
            document.getElementById("modalFact").innerText = data.fact;

            modal.style.display = "flex";
            gsap.fromTo(".modal-wrapper", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)" });
        }
    });
});

const closeModal = () => {
    gsap.to(".modal-wrapper", { scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
        modal.style.display = "none";
    }});
};

closeModalBtn.addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);

// 5. Fitur Audio Latar Kontrol Interaktif
const audio = document.getElementById("bgMusic");
const audioBtn = document.getElementById("audioBtn");
let isPlaying = false;

audioBtn.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play().catch(e => console.log("Interaksi user diperlukan untuk memulai musik sesuai regulasi browser modern."));
        audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        audioBtn.style.backgroundColor = "#2ecc71";
        isPlaying = true;
    } else {
        audio.pause();
        audioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        audioBtn.style.backgroundColor = "var(--primary)";
        isPlaying = false;
    }
});

// 6. Sistem Kuis Budaya (Gamifikasi Edukatif)
const quizData = [
    {
        q: "Alat musik petik khas dari Pulau Rote, NTT yang terbuat dari daun lontar bernama...",
        a: ["Sasando", "Angklung", "Kolintang", "Tifa"],
        correct: 0
    },
    {
        q: "Upacara adat pembakaran jenazah di Bali dikenal luas dengan sebutan...",
        a: ["Rambu Solo'", "Ngaben", "Sekaten", "Tedak Siten"],
        correct: 1
    },
    {
        q: "Rumah adat Honai merupakan tempat tinggal ikonik bagi masyarakat asli di daerah...",
        a: ["Toraja", "Minangkabau", "Dayak", "Papua"],
        correct: 3
    }
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
    if (idx === quizData[currentQuestion].correct) {
        score++;
    }
    
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
