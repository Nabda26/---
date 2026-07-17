const state = {
    currentView: 'home', // الصفحة الافتراضية
    userWallet: {
        points: 8432, // رصيد النقاط (الخطوات التراكمية)
        cashback: 192.35 // رصيد الكاش باك الفعلي
    },
    // سجل المعاملات بالصور (تطابق الصورة الثالثة)
    earningHistory: [
        { title: 'جلسة بادل — نادي النجم', date: '28 يونيو', amount: 22.50 },
        { title: 'خطوة — هدف يومي', date: '27 يونيو', amount: 12.00 },
        { title: 'اشتراك شهري — أكاديمية الرياض', date: '25 يونيو', amount: 55.00 },
        { title: 'جلسة تنس — الفيصلية', date: '23 يونيو', amount: 18.50 }
    ],
    
};
// Mock Data (المحدثة بدون بادل لنادي الترا ومع إضافة الصور لكل الملاعب الجديدة)
const VENUES = [
    {
        id: 'najm',
        name: 'نادي النجم الرياضي',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusmtOaxrB2G_gG_Rlfn_iDxsdMy5dIiOsGrvXpaOtqYlIe-VMY4KOpLE&s=10',
        location: 'حي العليا، الرياض',
        address: 'شارع الأمير تركي، حي العليا، الرياض',
        distance: '1.2 كم',
        rating: '4.9',
        ratingCount: '128',
        basePrice: 150,
        lat: 24.7136,
        lng: 46.6753,
        sports: ['بادل', 'تنس', 'سكواش'],
        workingHours: '6 ص - 11 م',
        phone: '+966 11 234 5678',
        status: 'منشأة معتمدة',
        description: 'نادي النجم الرياضي هو الوجهة الأولى للرياضة في الرياض. يضم 6 ملاعب بادل احترافية مجهزة بالكامل بالزجاج المقوى، و4 ملاعب tennis أرضي مفتوحة، وصالتين للاسكواش المكيفة. يوفر النادي مواقف سيارات واسعة وغرف تبديل ملابس ومقهى رياضي لتقديم المشروبات والوجبات الخفيفة.',
        images: [
            'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop'
        ],
        reviews: [
            { user: 'عبدالرحمن س.', rating: 5, text: 'الملاعب ممتازة جداً والإضاءة ممتازة في الليل. الطاقم متعاون والخدمات متكاملة.' },
            { user: 'خالد م.', rating: 4, text: 'من أفضل ملاعب البادل بالرياض، الحجز سهل ولكن يفضل الحجز المبكر بسبب الازدحام.' },
            { user: 'سارة أ.', rating: 5, text: 'نظيف ومرتب والمقهى عندهم يقدم قهوة رائعة بعد التمرين. أنصح به بشدة!' }
        ]
    },
    {
        id: 'padel-pro',
        name: 'ملعب بادل الاحترافي — اليمامة',
        pointsToEarn: 250,
        image: 'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Where-to-play-Padel-in-Dubai-1-AR15022023.jpg',
        location: 'حي اليمامة، الرياض',
        address: 'طريق الحائر، حي اليمامة، الرياض',
        distance: '3.5 كم',
        rating: '4.8',
        ratingCount: '84',
        basePrice: 130,
        lat: 24.7005,
        lng: 46.7200,
        sports: ['بادل'],
        workingHours: '8 ص - 12 ص',
        phone: '+966 11 987 6543',
        status: 'منشأة معتمدة',
        description: 'مجمع رياضي متخصص في رياضة البادل فقط، يحتوي على 8 ملاعب مغطاة ومكيفة بالكامل لتناسب الأجواء الصيفية. الملاعب مجهزة بأحدث التقنيات الأرضية المعتمدة دولياً لتوفير تجربة لعب احترافية وآمنة.',
        images: [
            'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Where-to-play-Padel-in-Dubai-1-AR15022023.jpg',
            'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop'
        ],
        reviews: [
            { user: 'عمر ف.', rating: 5, text: 'الملاعب المغطاة مريحة جداً في الصيف والتكييف بارد وممتاز.' },
            { user: 'فهد ن.', rating: 4, text: 'سعر مناسب وملاعب جديدة. ينقصهم فقط زيادة خيارات المأكولات بالمقهى.' }
        ]
    },
    {
        id: 'faisaliah',
        name: 'ساحة الفيصلية الرياضية',
        image: 'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Where-to-play-squash-in-Sharjah-Ajman-_-Body1-ar08122022-1024x640.jpg',
        location: 'حي الفيصلية، الرياض',
        address: 'طريق الملك فهد، حي الفيصلية، الرياض',
        distance: '4.1 كم',
        rating: '4.7',
        ratingCount: '62',
        basePrice: 140,
        lat: 24.6870,
        lng: 46.7050,
        sports: ['تنس', 'سكواش'],
        workingHours: '7 ص - 11 م',
        phone: '+966 11 555 4321',
        status: 'منشأة معتمدة',
        description: 'تقع ساحة الفيصلية في قلب الرياض وتضم مجموعة من أفضل ملاعب التنس المفتوحة ذات الأرضية الصلبة بالإضافة إلى صالات إسكواش مغلقة مجهزة بالكامل. خدمات مميزة تشمل تأجير المضارب والكرات ومدربين مقيمين لمساعدتك.',
        images: [
            'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop'
        ],
        reviews: [
            { user: 'محمد أ.', rating: 4, text: 'موقع ممتاز في وسط الرياض، ملاعب التنس نظيفة ومخططة بشكل احترافي.' },
            { user: 'يوسف ح.', rating: 5, text: 'قضيت وقتاً رائعاً مع الأصدقاء. الاسكواش هنا ممتاز والتكييف بارد.' }
        ]
    },
    {
        id: 'ultra-football',
        name: 'نادي الترا لكرة القدم',
        image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'حي النسيم، شرق الرياض',
        address: 'شارع حسان بن ثابت، حي النسيم الشرقي، الرياض',
        distance: '5.4 كم',
        rating: '4.8',
        ratingCount: '92',
        basePrice: 160,
        lat: 24.7290,
        lng: 46.8210,
        sports: ['كرة قدم'],
        workingHours: '4 م - 2 ص',
        phone: '+966 55 123 9876',
        status: 'منشأة معتمدة',
        description: 'نادي الترا الرياضي مجهز بملاعب كرة قدم عشبية من الجيل المتميز بمقاسات مختلفة مع غرف تبديل ملابس وإضاءة ليلية ممتازة لتستمتع بمباراة حماسية مع أصدقائك شرق العاصمة.',
        images: [
            'https://images.unsplash.com/photo-1517747614396-d21a78b850e8?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        reviews: [
            { user: 'خالد ع.', rating: 5, text: 'أرضية الملعب ممتازة جداً ومريحة للأقدام، وتوفر كافة الخدمات الأساسية.' }
        ]
    },
    {
        id: 'sky-space',
        name: 'ملعب سكاي سبيس الرياضي',
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop',
        location: 'حي الروضة، شرق الرياض',
        address: 'شارع حفصة بنت عمر، حي الروضة، الرياض',
        distance: '3.8 كم',
        rating: '4.9',
        ratingCount: '74',
        basePrice: 120,
        lat: 24.7350,
        lng: 46.7720,
        sports: ['كرة سلة'],
        workingHours: '8 ص - 12 ص',
        phone: '+966 50 332 1144',
        status: 'منشأة معتمدة',
        description: 'ملعب سكاي سبيس لكرة السلة هو الوجهة المثالية لعشاق اللعبة بمقاييس ملعب احترافي مغلق ومكيف مع أرضية باركيه خشبية مميزة وسلات هيدروليكية قابلة للتعديل.',
        images: [
            'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop',
            'https://www.inverness.uhi.ac.uk/t4-media/one-web/inverness/studying-at-ic/events-and-room-bookings/events_sportshall.jpg'    
           ],
        reviews: [
            { user: 'نواف م.', rating: 5, text: 'الباركيه نظيف والارتداد ممتاز، الصالة باردة ومهيأة للعب التنافسي الممتع.' }
        ]
    },
    {
        id: 'arizona-volat',
        name: 'ملعب أريزونا لكرة الطائرة',
        image: 'https://cdn.alweb.com/thumbs/reiadat/article/fit710x532/1/%D8%AA%D8%B9%D8%B1%D9%8A%D9%81-%D9%83%D8%B1%D8%A9-%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D8%B1%D8%A9.jpeg',
        location: 'حي العزيزية، جنوب الرياض',
        address: 'شارع الشباب، حي العزيزية، الرياض',
        distance: '8.2 كم',
        rating: '4.6',
        ratingCount: '45',
        basePrice: 110,
        lat: 24.5930,
        lng: 46.7580,
        sports: ['كرة طائرة'],
        workingHours: '2 م - 12 ص',
        phone: '+966 56 445 2299',
        status: 'منشأة معتمدة',
        description: 'مجمع أريزونا الرياضي بالمنطقة الجنوبية يقدم ملعباً مخصصاً ومحاطاً ومجهزاً بالكامل لكرة الطائرة مع الشباك القابلة لتعديل الارتفاع ومقاعد مميزة للجمهور.',
        images: [
            'https://cdn.alweb.com/thumbs/reiadat/article/fit710x532/1/%D8%AA%D8%B9%D8%B1%D9%8A%D9%81-%D9%83%D8%B1%D8%A9-%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D8%B1%D8%A9.jpeg',
            'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop'
        ],
        reviews: [
            { user: 'سلطان ف.', rating: 4, text: 'تنظيم ممتاز والشباب متعاونين جداً وسعره مناسب لفرق الحواري.' }
        ]
    }
];

const COACHES = [
    {
        id: 'coach-ahmed',
        name: 'كابتن أحمد الشمري',
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop',
        specialty: 'مدرب بادل وتنس محترف',
        rating: '4.9',
        reviewsCount: '47',
        rate: 120,
        bio: 'خبرة 5 سنوات في تدريب البادل والتنس. متخصص في تدريب المبتدئين وتطوير المهارات المتقدمة للمحترفين، حاصل على رخصة التدريب المعتمدة من الاتحاد السعودي للتنس والبادل.',
        reviews: [
            { user: 'فيصل د.', rating: 5, text: 'أسلوب التدريب واضح جداً وحريص على تحسين التكنيك للمبتدئين.' },
            { user: 'صالح و.', rating: 5, text: 'ممتاز في شرح أساسيات التمركز واستخدام المضرب بشكل سليم.' }
        ]
    },
    {
        id: 'coach-yasser',
        name: 'كابتن ياسر القحطاني',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
        specialty: 'مدرب بادل وإسكواش معتمد',
        rating: '4.8',
        reviewsCount: '32',
        rate: 140,
        bio: 'خبرة 7 سنوات في تدريب رياضة الإسكواش والبادل. متخصص في الإعداد البدني والخططي للاعبين للمشاركة في البطولات المحلية الدولية.',
        reviews: [
            { user: 'ماجد ع.', rating: 5, text: 'التمارين قوية ومكثفة وترفع اللياقة بشكل كبير. مدرب محترف وخلوق.' },
            { user: 'عبدالله ن.', rating: 4, text: 'استفدت منه كثيراً في تصحيح حركة اليد عند ضرب الكرة بالإسكواش.' }
        ]
    }
];

// Active State Management
let appState = {
    isLoggedIn: false,
    user: {
        name: 'فيصل أحمد',
        email: 'faisal.ahmed@example.com'
    },
    currentView: 'home', // الصفحة الافتراضية بعد الضغط
    searchQuery: '',
    selectedSportFilter: 'الكل',
    selectedVenue: null,
    selectedSport: 'بادل',
    isCoachSectionOpen: false,
    selectedCoach: null,
    selectedDate: null, 
    selectedTimeSlot: null, 
    activeDetailTab: 'معلومات'
};

const TIME_SLOTS = [
    { time: '8:00 ص', booked: false },
    { time: '10:00 ص', booked: true },
    { time: '12:00 م', booked: false },
    { time: '2:00 م', booked: false },
    { time: '5:00 م', booked: false },
    { time: '7:00 م', booked: true },
    { time: '9:00 م', booked: false },
    { time: '11:00 م', booked: false }
];

let mapInstance = null; // متغير لحفظ كائن الخريطة لمنع تكرار الإنشاء

document.addEventListener('DOMContentLoaded', () => {
    const savedAuth = localStorage.getItem('booking_app_auth');
    if (savedAuth) {
        const authData = JSON.parse(savedAuth);
        appState.isLoggedIn = true;
        appState.user = authData.user;
        appState.currentView = 'home';
    } else {
        // إذا لم يكن مسجلاً، نبدأ بواجهة الهبوط
        appState.isLoggedIn = false;
        appState.currentView = 'landing';
    }

    renderApp();
    setupEventListeners();
});

function renderApp() {
    // إخفاء جميع الحاويات أولاً
    document.getElementById("landing-view").classList.add("hidden");
    document.getElementById("auth-view").classList.add("hidden");
    document.getElementById("main-app-layout").classList.add("hidden");
    document.getElementById("earn-view").classList.add("hidden");
    
    // إدارة عرض واجهة الهبوط (Landing)
    if (appState.currentView === 'landing' && !appState.isLoggedIn) {
        document.getElementById("landing-view").classList.remove("hidden");
        return;
    }

    // إدارة عرض واجهة تسجيل الدخول (Auth)
    if (!appState.isLoggedIn) {
        document.getElementById("auth-view").classList.remove("hidden");
        return;
    }

    // إظهار تخطيط التطبيق الرئيسي
    document.getElementById('main-app-layout').classList.remove('hidden');

    // إخفاء جميع الصفحات الفرعية داخل التخطيط الرئيسي (تمت إضافة team-view هنا)
   [
"home-view",
"venue-details-view",
"confirmation-view",
"account-view",
"explore-view",
"team-view",
"earn-view"
].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.classList.add("hidden");
});
    
    const teamView = document.getElementById("team-view");
    if (teamView) teamView.classList.add("hidden");
    
    const exploreView = document.getElementById("explore-view");
    if (exploreView) exploreView.classList.add("hidden");

    updateNavigationStates();

    // عرض الصفحة المطلوبة بناءً على الـ State
    switch (appState.currentView) {
        case 'home':
            document.getElementById('home-view').classList.remove('hidden');
            renderHome();
            break;
        case 'explore':
            if (exploreView) {
                exploreView.classList.remove('hidden');
                initExploreMap();
            }
            break;
        case 'team': // 👈 هذا هو الجزء الجديد لإظهار شاشة فريقي
            if (teamView) {
                teamView.classList.remove('hidden');
                // إذا كان لديكِ دالة خاصة ببناء شاشة الفريق (مثل renderTeam) استدعيها هنا
            }
            break;
        case 'details':
            document.getElementById('venue-details-view').classList.remove('hidden');
            renderVenueDetails();
            break;
        case 'confirmation':
            document.getElementById('confirmation-view').classList.remove('hidden');
            renderConfirmation();
            break;
        case 'account':
            document.getElementById('account-view').classList.remove('hidden');
            renderAccount();
            break;
       case "earn":

document.getElementById("earn-view").classList.remove("hidden");

renderEarnPage();

return;
        default:
            document.getElementById('home-view').classList.remove('hidden');
            renderHome();
            break;
    }
}

function updateNavigationStates() {
    const navButtons = document.querySelectorAll('.nav-item-btn, .mobile-nav-btn');
    navButtons.forEach(btn => {
        const viewAttr = btn.getAttribute('data-view');
        if (appState.currentView === viewAttr || (appState.currentView === 'details' && viewAttr === 'home')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const greetingEl = document.getElementById('greeting-user-name');
    if (greetingEl) greetingEl.textContent = appState.user.name;

    const desktopUserEl = document.getElementById('desktop-user-display-name');
    if (desktopUserEl) desktopUserEl.textContent = appState.user.name;
}

function setupEventListeners() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleLogin();
        });
    }

    const usernameInput = document.getElementById('bank-username');
    const passwordInput = document.getElementById('bank-password');

    if (usernameInput) {
        usernameInput.addEventListener('input', () => {
            usernameInput.classList.remove('is-invalid');
            usernameInput.style.borderColor = ''; 
            const usernameError = document.getElementById('username-error');
            if (usernameError) usernameError.style.display = 'none';
        });
    }
    if (passwordInput) {
        passwordInput.addEventListener('input', () => {
            passwordInput.classList.remove('is-invalid');
            passwordInput.style.borderColor = ''; 
            const passwordError = document.getElementById('password-error');
            if (passwordError) passwordError.style.display = 'none';
        });
    }

    // ربط تنقل القوائم
    const navButtons = document.querySelectorAll('.nav-item-btn, .mobile-nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetView = btn.getAttribute('data-view');
            if (targetView === 'logout') {
                handleLogout();
            } else if (targetView) {
                appState.currentView = targetView;
                renderApp();
            }
        });
    });

    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            appState.searchQuery = e.target.value;
            renderVenueList();
        });
    }

    const sportChips = document.querySelectorAll('.sport-chip');
    sportChips.forEach(chip => {
        chip.addEventListener('click', () => {
            sportChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            appState.selectedSportFilter = chip.getAttribute('data-sport');
            renderVenueList();
        });
    });

    // معالجة زر ابدأ الآن بدقة للانتقال السلس
    const startNowBtn = document.getElementById("start-now-btn");
    if (startNowBtn) {
        startNowBtn.addEventListener("click", () => {
            // نقل المستخدم لواجهة تسجيل الدخول إذا لم يكن مسجلاً
            appState.currentView = 'login'; 
            renderApp();
        });
    }

    const partnerBtn = document.getElementById("partner-btn");
    if (partnerBtn) {
        partnerBtn.addEventListener("click", () => {
            alert("سيتم تحويلك إلى صفحة تسجيل الشركاء والتواصل.");
        });
    }
}

// دالة تهيئة واستدعاء الخريطة التفاعلية
function initExploreMap() {
    let defaultLat = 24.7136;
    let defaultLng = 46.6753;

    if (!mapInstance) {
        mapInstance = L.map('map').setView([defaultLat, defaultLng], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mapInstance);
    } else {
        setTimeout(() => {
            mapInstance.invalidateSize();
        }, 100);
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            mapInstance.setView([userLat, userLng], 13);

            const userIcon = L.divIcon({
                html: '<i class="fa-solid fa-circle-user" style="font-size: 24px; color: #10B981;"></i>',
                className: 'user-location-marker',
                iconSize: [24, 24]
            });
            L.marker([userLat, userLng], { icon: userIcon }).addTo(mapInstance)
                .bindPopup("<b>أنت هنا حالياً 📍</b>").openPopup();
        }, () => {
            console.log("تعذر تحديد موقعك الحالي الجغرافي. تم استخدام مركز الرياض افتراضياً.");
        });
    }

    VENUES.forEach(venue => {
        const clubIcon = L.divIcon({
            html: '<i class="fa-solid fa-location-dot" style="font-size: 28px; color: #1E293B;"></i>',
            className: 'club-map-marker',
            iconSize: [28, 28]
        });

        const marker = L.marker([venue.lat, venue.lng], { icon: clubIcon }).addTo(mapInstance);

        marker.on('click', () => {
            showClubMapCard(venue);
        });
    });
}

function showClubMapCard(venue) {
    const cardContainer = document.getElementById('map-selected-club-panel');
    if (!cardContainer) return;

    cardContainer.classList.remove('hidden');
    cardContainer.innerHTML = `
        <div class="map-club-card-content" style="display: flex; flex-direction: column; padding: 15px;">
            <div class="map-club-info">
                <h3 style="margin-top: 0; margin-bottom: 8px; color: var(--navy-dark);">${venue.name}</h3>
                <p style="font-size: 0.85rem; color: var(--navy-muted); margin-bottom: 5px;">📍 ${venue.location}</p>
                <p style="font-size: 0.85rem; font-weight: 700; color: var(--primary); margin-bottom: 10px;">يبدأ من: ${venue.basePrice} ريال/ساعة</p>
                
                <div class="map-card-buttons" style="display: flex; gap: 10px; margin-top: 15px;">
                    <button class="btn btn-primary" id="map-book-now-btn" style="flex: 1; padding: 0.6rem 1rem; font-size: 0.9rem;">
                        ⚡ احجز الآن
                    </button>
                    <button class="btn btn-secondary" id="map-view-details-btn" style="flex: 1; padding: 0.6rem 1rem; font-size: 0.9rem;">
                        ℹ️ التفاصيل
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('map-book-now-btn').addEventListener('click', () => {
        appState.selectedVenue = venue;
        appState.currentView = 'details';
        appState.activeDetailTab = 'معلومات';
        appState.isCoachSectionOpen = true; 
        appState.selectedCoach = null;
        appState.selectedDate = null;
        appState.selectedTimeSlot = null;
        renderApp();
        
        setTimeout(() => {
            const coachesSec = document.getElementById('coaches-section');
            if (coachesSec) coachesSec.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });

    document.getElementById('map-view-details-btn').addEventListener('click', () => {
        appState.selectedVenue = venue;
        appState.currentView = 'details';
        appState.activeDetailTab = 'معلومات';
        appState.isCoachSectionOpen = false;
        appState.selectedCoach = null;
        appState.selectedDate = null;
        appState.selectedTimeSlot = null;
        renderApp();
    });
}

function handleLogin() {
    const usernameInput = document.getElementById("bank-username");
    const passwordInput = document.getElementById("bank-password");
    let isValid = true;

    if (!usernameInput.checkValidity()) {
        document.getElementById("username-error").style.display = "block";
        usernameInput.classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("username-error").style.display = "none";
        usernameInput.classList.remove("is-invalid");
    }

    if (!passwordInput.checkValidity()) {
        document.getElementById("password-error").style.display = "block";
        passwordInput.classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("password-error").style.display = "none";
        passwordInput.classList.remove("is-invalid");
    }

    if (!isValid) return;

    appState.isLoggedIn = true;
    appState.user.name = usernameInput.value;
    appState.user.email = usernameInput.value + "@example.com";

    localStorage.setItem(
        "booking_app_auth",
        JSON.stringify({ user: appState.user })
    );

    document.getElementById("auth-view").classList.add("hidden");
    document.getElementById("main-app-layout").classList.remove("hidden");
    appState.currentView = "home";
    renderApp();
}

function handleLogout() {
    appState.isLoggedIn = false;
    localStorage.removeItem('booking_app_auth');
    appState.currentView = 'landing'; // يعود لواجهة الهبوط عند تسجيل الخروج
    renderApp();
}

function renderHome() {

    renderVenueList();

    const btn = document.getElementById("startEarnBtn");

    if(btn){

        btn.onclick = function(){

            appState.currentView = "earn";

            renderApp();

        }

    }

}

function renderVenueList() {
    const venueGrid = document.getElementById('venue-grid');
    if (!venueGrid) return;

    venueGrid.innerHTML = '';

    const filteredVenues = VENUES.filter(venue => {
        const matchesSearch = venue.name.includes(appState.searchQuery) || 
                              venue.location.includes(appState.searchQuery) ||
                              venue.sports.some(s => s.includes(appState.searchQuery));
        
        const matchesSport = appState.selectedSportFilter === 'الكل' || 
                             venue.sports.includes(appState.selectedSportFilter);

        return matchesSearch && matchesSport;
    });

    if (filteredVenues.length === 0) {
        venueGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1;">
                <i class="lucide-frown"></i>
                <p style="margin-top: 0.5rem; font-weight: 600;">لا توجد ملاعب أو أندية تطابق بحثك حالياً.</p>
                <span style="font-size: 0.8rem; color: var(--navy-muted);">جرّب كتابة كلمات مختلفة أو تغيير فلتر الرياضة</span>
            </div>
        `;
        return;
    }

    filteredVenues.forEach(venue => {
        const card = document.createElement('div');
        card.className = 'venue-card';
        card.innerHTML = `
            <div class="venue-image-wrapper">
                <img src="${venue.image}" alt="${venue.name}" class="venue-image" onerror="this.src='https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop'">
                <div class="venue-badge-overlay">${venue.status}</div>
                <div class="venue-sport-tags">
                    ${venue.sports.map(s => `<span class="venue-tag">${s}</span>`).join('')}
                </div>
            </div>
            <div class="venue-content">
                <div class="venue-title-row">
                    <h3 class="venue-name">${venue.name}</h3>
                    <div class="venue-rating">
                        <span style="color: var(--warning);">&#9733;</span> ${venue.rating} <span>(${venue.ratingCount})</span>
                    </div>
                </div>
                <div class="venue-location">
                    <span style="font-size: 0.9rem;">📍</span>
                    <span>${venue.location}</span>
                </div>
                <div class="venue-footer">
                    <div class="venue-price-label">
                        يبدأ من
                        <div class="venue-price">SAR ${venue.basePrice}<span>/ساعة</span></div>
                    </div>
                    <div class="venue-distance">
                        <span>⚡</span>
                        <span>${venue.distance}</span>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            appState.selectedVenue = venue;
            appState.currentView = 'details';
            appState.activeDetailTab = 'معلومات';
            appState.isCoachSectionOpen = false;
            appState.selectedCoach = null;
            appState.selectedDate = null;
            appState.selectedTimeSlot = null;
            renderApp();
        });

        venueGrid.appendChild(card);
    });
}

function renderVenueDetails() {
    const venue = appState.selectedVenue;
    if (!venue) return;

    const detailContainer = document.getElementById('venue-details-view');
    if (!detailContainer) return;

    detailContainer.innerHTML = `
        <div class="back-btn-container">
            <button class="back-btn" id="venue-details-back-btn">
                <span>&rarr;</span> العودة للرئيسية
            </button>
        </div>

        <div class="detail-hero">
            <img src="${venue.image}" alt="${venue.name}" class="detail-hero-image" onerror="this.src='https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop'">
            <div class="detail-hero-overlay">
                <h1 class="detail-title">${venue.name}</h1>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
                    <span style="color: var(--warning); font-size: 1.1rem;">&#9733;</span>
                    <span style="font-weight: 700; font-size: 0.95rem;">${venue.rating}</span>
                    <span style="color: var(--gray-300); font-size: 0.85rem;">(${venue.ratingCount} تقييم)</span>
                </div>
                <div class="detail-sport-badges">
                    ${venue.sports.map(s => `<span class="detail-sport-badge">${s}</span>`).join('')}
                </div>
            </div>
        </div>

        <div style="margin-bottom: 1.5rem;">
            <p style="font-weight: 700; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--navy-dark);">اختر الرياضة المراد حجزها:</p>
            <div class="sport-selector" id="detail-booking-sport-selector">
                ${venue.sports.map(sport => `
                    <span class="sport-chip ${appState.selectedSport === sport ? 'active' : ''}" data-booking-sport="${sport}">
                        ${sport}
                    </span>
                `).join('')}
            </div>
        </div>

        <div class="tabs-selector">
            <button class="tab-btn ${appState.activeDetailTab === 'معلومات' ? 'active' : ''}" data-tab="info">معلومات</button>
            <button class="tab-btn ${appState.activeDetailTab === 'صور' ? 'active' : ''}" data-tab="photos">صور (${venue.images.length})</button>
            <button class="tab-btn ${appState.activeDetailTab === 'تقييمات' ? 'active' : ''}" data-tab="reviews">تقييمات (${venue.reviews.length})</button>
        </div>

        <div class="tab-pane ${appState.activeDetailTab === 'معلومات' ? 'active' : ''}" id="tab-info">
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-item-label">أوقات العمل</span>
                    <span class="info-item-value">${venue.workingHours}</span>
                </div>
                <div class="info-item">
                    <span class="info-item-label">المسافة</span>
                    <span class="info-item-value">${venue.distance}</span>
                </div>
                <div class="info-item">
                    <span class="info-item-label">الهاتف</span>
                    <span class="info-item-value" style="direction: ltr; text-align: right;">${venue.phone}</span>
                </div>
                <div class="info-item">
                    <span class="info-item-label">الحالة</span>
                    <span class="info-item-value" style="color: var(--success);">${venue.status}</span>
                </div>
            </div>
            <p class="venue-desc">${venue.description}</p>
        </div>

        <div class="tab-pane ${appState.activeDetailTab === 'صور' ? 'active' : ''}" id="tab-photos">
            <div class="photo-gallery">
                ${venue.images.map(img => `
                    <img src="${img}" alt="Venue photo" class="gallery-img" onclick="window.open('${img}', '_blank')" onerror="this.src='https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop'">
                `).join('')}
            </div>
        </div>

        <div class="tab-pane ${appState.activeDetailTab === 'تقييمات' ? 'active' : ''}" id="tab-reviews">
            <div class="reviews-list">
                ${venue.reviews.map(rev => `
                    <div class="review-card">
                        <div class="review-header">
                            <span class="review-user">${rev.user}</span>
                            <span class="review-stars">${'&#9733;'.repeat(rev.rating)}</span>
                        </div>
                        <p class="review-text">${rev.text}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="booking-actions">
            <button class="btn btn-primary" id="direct-venue-book-btn">
                <span>📅</span> احجز ملعباً (SAR ${venue.basePrice}/ساعة)
            </button>
            <button class="btn btn-secondary" id="toggle-coaches-btn">
                <span>👤</span> عرض المدربين المتاحين بالنادي
            </button>
        </div>

        <div class="coaches-section ${appState.isCoachSectionOpen ? '' : 'hidden'}" id="coaches-section">
            <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: var(--navy-dark);">المدربين المتوفرين في المنشأة</h3>
            <div class="coaches-list">
                ${COACHES.map(coach => `
                    <div class="coach-card ${appState.selectedCoach && appState.selectedCoach.id === coach.id ? 'active' : ''}" data-coach-id="${coach.id}">
                        <img src="${coach.avatar}" alt="${coach.name}" class="coach-avatar" onerror="this.src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop'">
                        <div class="coach-info">
                            <h4 class="coach-name">${coach.name}</h4>
                            <p class="coach-specialty">${coach.specialty}</p>
                            <div class="coach-rating-row">
                                <span>&#9733;</span> ${coach.rating} <span>(${coach.reviewsCount} تقييم)</span>
                            </div>
                        </div>
                        <div class="coach-rate-label">
                            <span style="font-size: 0.7rem; color: var(--navy-muted); display: block;">سعر التدريب</span>
                            <div class="coach-rate-val">${coach.rate} <span>ريال/س</span></div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="coach-details-panel ${appState.selectedCoach || appState.isCoachSectionOpen ? '' : 'hidden'}" id="coach-details-panel">
                ${renderCoachPanel(appState.selectedCoach || { bio: 'حجز الملعب مباشرة دون مدرب خاص لتوفير اللعب التنافسي الحر مع أصدقائك.', reviews: [] })}
            </div>
        </div>

        <div class="booking-summary-bar ${appState.selectedTimeSlot && appState.selectedDate ? '' : 'hidden'}" id="booking-summary-bar">
            ${renderBookingSummaryBar()}
        </div>
    `;

    document.getElementById('venue-details-back-btn').addEventListener('click', () => {
        appState.currentView = 'home';
        renderApp();
    });

    const bookingSportSelector = document.getElementById('detail-booking-sport-selector');
    if (bookingSportSelector) {
        bookingSportSelector.querySelectorAll('.sport-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                appState.selectedSport = chip.getAttribute('data-booking-sport');
                renderVenueDetails();
            });
        });
    }

    const tabBtns = detailContainer.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const activeTabName = btn.textContent.split(' ')[0];
            appState.activeDetailTab = activeTabName;
            renderVenueDetails();
        });
    });

    document.getElementById('direct-venue-book-btn').addEventListener('click', () => {
        appState.isCoachSectionOpen = true;
        appState.selectedCoach = null; 
        renderVenueDetails();
        
        const coachesSec = document.getElementById('coaches-section');
        if (coachesSec) {
            coachesSec.scrollIntoView({ behavior: 'smooth' });
        }
    });

    document.getElementById('toggle-coaches-btn').addEventListener('click', () => {
        appState.isCoachSectionOpen = !appState.isCoachSectionOpen;
        renderVenueDetails();
        
        if (appState.isCoachSectionOpen) {
            const coachesSec = document.getElementById('coaches-section');
            if (coachesSec) {
                coachesSec.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    const coachCards = detailContainer.querySelectorAll('.coach-card');
    coachCards.forEach(card => {
        card.addEventListener('click', () => {
            const coachId = card.getAttribute('data-coach-id');
            const coach = COACHES.find(c => c.id === coachId);
            
            if (appState.selectedCoach && appState.selectedCoach.id === coachId) {
                appState.selectedCoach = null;
            } else {
                appState.selectedCoach = coach;
            }
            appState.selectedDate = null;
            appState.selectedTimeSlot = null;
            renderVenueDetails();

            setTimeout(() => {
                const panel = document.getElementById('coach-details-panel');
                if (panel && !panel.classList.contains('hidden')) {
                    panel.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        });
    });

    bindBookingPanelEvents();
}

function renderCoachPanel(coach) {
    const dateCardsHtml = generateDateCards();

    return `
        <div class="coach-bio-box">
            <h4 class="coach-bio-title">${coach.id ? 'نبذة عن المدرب:' : 'تفاصيل الحجز المباشر:'}</h4>
            <p class="coach-bio-text">${coach.bio}</p>
        </div>

        ${coach.reviews && coach.reviews.length > 0 ? `
        <div class="coach-bio-box">
            <h4 class="coach-bio-title">تقييمات المتدربين:</h4>
            <div class="reviews-list" style="margin-top: 0.5rem;">
                ${coach.reviews.map(r => `
                    <div style="font-size: 0.8rem; border-bottom: 1px solid var(--gray-200); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                        <div style="display: flex; justify-content: space-between; font-weight: 700; color: var(--navy-light);">
                            <span>${r.user}</span>
                            <span style="color: var(--warning);">${'&#9733;'.repeat(r.rating)}</span>
                        </div>
                        <p style="font-size: 0.75rem; color: var(--navy-muted); margin-top: 0.2rem;">${r.text}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}

        <div class="date-picker-container">
            <h4 class="coach-bio-title" style="margin-bottom: 0.5rem;">اختر تاريخ الحجز:</h4>
            <div class="date-picker-carousel" id="booking-date-picker-carousel">
                ${dateCardsHtml}
            </div>
        </div>

        <div class="time-picker-container">
            <h4 class="coach-bio-title" style="margin-bottom: 0.5rem;">الأوقات المتاحة:</h4>
            <div class="time-slots-grid" id="booking-time-slots-grid">
                ${TIME_SLOTS.map(slot => `
                    <div class="time-slot ${slot.booked ? 'disabled' : ''} ${appState.selectedTimeSlot === slot.time ? 'active' : ''}" 
                         data-time="${slot.time}">
                        ${slot.time}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateDateCards() {
    const today = new Date('2026-07-13T00:00:00');
    const dayNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    let html = '';

    for (let i = 0; i < 7; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);

        const dayName = dayNames[nextDate.getDay()];
        const dateNum = nextDate.getDate();
        const dateStr = nextDate.toISOString().split('T')[0];
        const isActive = appState.selectedDate === dateStr;

        html += `
            <div class="date-card ${isActive ? 'active' : ''}" data-date-str="${dateStr}">
                <span class="date-day">${dayName}</span>
                <span class="date-num">${dateNum}</span>
            </div>
        `;
    }

    return html;
}

function bindBookingPanelEvents() {
    const dateCarousel = document.getElementById('booking-date-picker-carousel');
    if (dateCarousel) {
        dateCarousel.querySelectorAll('.date-card').forEach(card => {
            card.addEventListener('click', () => {
                appState.selectedDate = card.getAttribute('data-date-str');
                renderVenueDetails();
                document.getElementById('coaches-section').scrollIntoView({ behavior: 'auto' });
            });
        });
    }

    const timeSlotsGrid = document.getElementById('booking-time-slots-grid');
    if (timeSlotsGrid) {
        timeSlotsGrid.querySelectorAll('.time-slot').forEach(slot => {
            if (slot.classList.contains('disabled')) return;

            slot.addEventListener('click', () => {
                const clickedTime = slot.getAttribute('data-time');
                appState.selectedTimeSlot = appState.selectedTimeSlot === clickedTime ? null : clickedTime;
                renderVenueDetails();
                document.getElementById('coaches-section').scrollIntoView({ behavior: 'auto' });
            });
        });
    }
}

function renderBookingSummaryBar() {
    if (!appState.selectedDate || !appState.selectedTimeSlot) return '';

    const venue = appState.selectedVenue;
    const coach = appState.selectedCoach;

    const courtRate = venue.basePrice;
    const coachRate = coach ? coach.rate : 0;
    
    const hours = 1;
    const subtotal = (courtRate + coachRate) * hours;
    const bookingFee = 5;
    const total = subtotal + bookingFee;

    appState.lastBookingSubtotal = subtotal;
    appState.lastBookingTotal = total;
    appState.lastBookingFee = bookingFee;

    const formattedDate = formatArabicDate(appState.selectedDate);

    return `
        <div class="summary-details">
            <div class="summary-row">
                <span>تفاصيل الحجز:</span>
                <span style="font-weight: 700; color: var(--navy-dark);">${venue.name} (${appState.selectedSport})</span>
            </div>
            <div class="summary-row">
                <span>التاريخ والوقت:</span>
                <span>${formattedDate} — الساعة ${appState.selectedTimeSlot}</span>
            </div>
            ${coach ? `
            <div class="summary-row">
                <span>التدريب مع:</span>
                <span>${coach.name}</span>
            </div>
            ` : ''}
            <div class="summary-row">
                <span>سعر الملعب:</span>
                <span>SAR ${courtRate}</span>
            </div>
            ${coach ? `
            <div class="summary-row">
                <span>سعر المدرب:</span>
                <span>SAR ${coachRate}</span>
            </div>
            ` : ''}
            <div class="summary-row">
                <span>رسوم الحجز:</span>
                <span>SAR ${bookingFee}</span>
            </div>
            <div class="summary-row total">
                <span>الإجمالي:</span>
                <span class="price">SAR ${total}</span>
            </div>
        </div>
        <button class="btn btn-primary" id="confirm-booking-action-btn">
            تأكيد الحجز — ${hours} ساعة
        </button>
    `;
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'confirm-booking-action-btn') {
        appState.currentView = 'confirmation';
        renderApp();
    }
});

function formatArabicDate(dateStr) {
    if (!dateStr) return '';
    const dateObj = new Date(dateStr);
    const months = [
        'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
        'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    const dayNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    
    return `${dayNames[dateObj.getDay()]}، ${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
}

function renderConfirmation() {
    const venue = appState.selectedVenue;
    const total = appState.lastBookingTotal || 0;
    const formattedDate = formatArabicDate(appState.selectedDate);
    const time = appState.selectedTimeSlot;
    const randomBookingId = `BK-${Math.floor(10000 + Math.random() * 90000)}`;

    const confirmationContainer = document.getElementById('confirmation-view');
    if (!confirmationContainer) return;

    confirmationContainer.innerHTML = `
        <div class="success-icon-wrapper flex-center">
            <span style="font-size: 3rem;">&#10004;</span>
        </div>
        <h1 class="confirm-title">تم تأكيد الحجز بنجاح!</h1>
        <p class="confirm-subtitle">
            سيتم إرسال تفاصيل الحجز وتأكيده إلى بريدك الإلكتروني المستجّل
            (${appState.user.email})
        </p>

        <div class="confirm-card">
            <div class="confirm-item">
                <span class="confirm-label">اسم النادي:</span>
                <span class="confirm-value">${venue ? venue.name : ''}</span>
            </div>
            <div class="confirm-item">
                <span class="confirm-label">الرياضة:</span>
                <span class="confirm-value">${appState.selectedSport}</span>
            </div>
            ${appState.selectedCoach ? `
            <div class="confirm-item">
                <span class="confirm-label">المدرب:</span>
                <span class="confirm-value">${appState.selectedCoach.name}</span>
            </div>
            ` : ''}
            <div class="confirm-item">
                <span class="confirm-label">التاريخ والوقت:</span>
                <span class="confirm-value">${formattedDate} الساعة ${time}</span>
            </div>
            <div class="confirm-item">
                <span class="confirm-label">رقم الحجز:</span>
                <span class="confirm-value" style="font-family: monospace; font-size: 1rem; color: var(--navy-light);">${randomBookingId}</span>
            </div>
            <div class="confirm-item">
                <span class="confirm-label">المبلغ المدفوع:</span>
                <span class="confirm-value highlight">${total} SAR</span>
            </div>
        </div>

        <button class="btn btn-primary" id="return-home-btn" style="max-width: 250px;">
            الرجوع للرئيسية
        </button>
    `;

    document.getElementById('return-home-btn').addEventListener('click', () => {
        appState.currentView = 'home';
        appState.selectedVenue = null;
        appState.selectedCoach = null;
        appState.selectedDate = null;
        appState.selectedTimeSlot = null;
        appState.isCoachSectionOpen = false;
        renderApp();
    });
}

function renderAccount() {
    const accountContainer = document.getElementById('account-view');
    if (!accountContainer) return;

    accountContainer.innerHTML = `
        <div class="account-header">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" class="account-avatar-large" alt="Avatar">
            <div>
                <h2 style="font-size: 1.3rem;">${appState.user.name}</h2>
                <p style="font-size: 0.85rem; color: var(--navy-muted);">${appState.user.email}</p>
            </div>
        </div>

        <div class="account-details-list">
            <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">معلومات الحساب</h3>
            <div class="account-detail-row">
                <span class="confirm-label">الاسم بالكامل:</span>
                <span class="confirm-value">${appState.user.name}</span>
            </div>
            <div class="account-detail-row">
                <span class="confirm-label">البريد الإلكتروني:</span>
                <span class="confirm-value" style="direction: ltr;">${appState.user.email}</span>
            </div>
            <div class="account-detail-row">
                <span class="confirm-label">نوع العضوية:</span>
                <span class="confirm-value" style="color: var(--primary);">رياضي بلاتيني</span>
            </div>
            
            <button class="btn btn-outline" id="account-logout-btn" style="margin-top: 1.5rem; border-color: var(--danger); color: var(--danger);">
                تسجيل الخروج
            </button>
        </div>
    `;

    const logoutBtn = document.getElementById('account-logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            handleLogout();
        });
    }
}

// أزرار التنقل السفلية للهاتف المحمول
document.querySelectorAll('.mobile-nav-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (index === 0) { // Home
            appState.currentView = 'home';
            renderApp();
        } else if (index === 1) { // Explore
            appState.currentView = 'explore';
            renderApp();
        } else if (index === 2) { // My Team (تم التعديل لعرض شاشة فريقي مباشرة بدلاً من الـ alert)
            appState.currentView = 'team';
            renderApp();
        } else if (index === 3) { // Search
            appState.currentView = 'home';
            renderApp();
            setTimeout(() => {
                const input = document.getElementById('global-search');
                if (input) {
                    input.focus();
                    input.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    });
});
// أزرار القائمة الجانبية للشاشات الكبيرة
document.querySelectorAll('.nav-item-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        if (view === 'explore') {
            appState.currentView = 'explore';
            renderApp();
        } else if (view === 'team') { // تم التعديل هنا لعرض صفحة فريقك مباشرة
            appState.currentView = 'team';
            renderApp();
        } else if (view === 'search') {
            appState.currentView = 'home';
            renderApp();
            setTimeout(() => {
                const input = document.getElementById('global-search');
                if (input) input.focus();
            }, 100);
        }
    });
});







const page=document.getElementById("earn-view");
page.style.display="block";
page.classList.remove("hidden");

page.classList.remove("hidden");

page.innerHTML=`

<div class="earn-details-container">

<button class="back-btn" id="backEarn">
← العودة
</button>

<div class="earn-cashback-hero">

<h2>رصيد الكاش باك</h2>

<h1>SAR ${state.userWallet.cashback}</h1>

<p style="color:#4ADE80">
+SAR 18.50 هذا الأسبوع
</p>

</div>

<div class="earn-stats-row">

<div class="earn-circle-progress">
84%
</div>

<div class="earn-circle-progress">
142 bpm
</div>

<div class="earn-circle-progress">
74 دقيقة
</div>

</div>

<div class="history-list">

${state.earningHistory.map(item=>`

<div class="history-item">

<div>

<b>${item.title}</b>

<br>

<small>${item.date}</small>

</div>

<b style="color:#4ADE80">

+SAR ${item.amount}

</b>

</div>

`).join("")}

</div>

<button class="btn-transfer">

تحويل

SAR ${state.userWallet.cashback}

</button>

</div>

`;

document.getElementById("backEarn").onclick=()=>{

appState.currentView="home";

renderApp();

}

