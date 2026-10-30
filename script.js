// 1. Data Budaya Nusantara Terstruktur (Lokal / Online Hybrid)
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
        fact: "Tari Kecak diciptakan pada tahun 1930-an oleh penari Bali Wayan Limbak bersama pelukis asal Jerman berwarna Walter Spies berdasarkan ritual adat Sanghyang."
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

// 2. Manajemen Modals Detail Kebudayaan (DIJAMIN RESPONSIVE)
const modal = document.getElementById("detailsModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function() {
        const region = this.getAttribute("data-region");
        const data = dataNusantara[region];

        if (data) {
            // Isi Konten Modal secara Dinamis
            document.getElementById("modalTitle").innerText = data.title;
            document.getElementById("modalTag").innerText = data.tag;
            document.getElementById("modalImg").style.backgroundImage = `url('${data.image}')`;
            document.getElementById("modalDescription").innerText = data.desc;
            document.getElementById("modalFact").innerText = data.fact;

            // Munculkan Modal Utama
            modal.style.display = "flex";

            // Efek Animasi GSAP Pop-up (Jika GSAP gagal muat, modal tetap muncul aman)
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(".modal-wrapper", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
            }
        }
    });
});

// Fungsi Tutup Modal
const closeModal = () => {
    if (typeof gsap !== 'undefined') {
        gsap.to(".modal-wrapper", { scale: 0.8, opacity: 0, duration: 0.2, ease: "power2.in", onComplete: () => {
            modal.style.display = "none";
        }});
    } else {
        modal.style.display = "none";
    }
};

if(closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);


// 3. Sistem Animasi GSAP & ScrollTrigger (Visual Ciamik)
document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap !== 'undefined') {
        // Mendaftarkan plugin jika ScrollTrigger tersedia
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Animasi Scroll Trigger Untuk Card Eksplorasi
            gsap.from(".animated-card", {
                scrollTrigger: {
                    trigger: "#eksplorasi",
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }

        // Animasi Pembuka Halaman Utama
        gsap.from(".navbar", { y: -100, opacity: 0, duration: 0.8, ease: "power3.out" });
        gsap.from(".animated-element", { 
            y: 30, 
            opacity: 0, 
            duration: 1, 
            stagger: 0.15, 
            ease: "power3.out",
            delay: 0.2 
        });
    }
});

// 4. Logika Navigasi Aktif Otomatis saat Scroll (Perbaikan Bug standard Browser)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPos >= sectionTop - 160) {
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

// 5. Fitur Audio Latar Kontrol Interaktif
const audio = document.getElementById("bgMusic");
const audioBtn = document.getElementById("audioBtn");
let isPlaying = false;

if(audioBtn) {
    audioBtn.addEventListener("click", () => {
        if (!isPlaying) {
            audio.play().catch(e => console.log("Perlu klik user untuk play musik."));
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
}

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
