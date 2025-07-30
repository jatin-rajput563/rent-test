import sliderImg1 from "../assets/images/png/slider-img-1.png";
import sliderImg2 from "../assets/images/png/slider-img-2.png";
import sliderImg3 from "../assets/images/png/slider-img-3.png";
import sliderImg4 from "../assets/images/png/slider-img-4.png";
import userGear from "../assets/images/svg/user-gear.svg";
import corporate from "../assets/images/svg/corporate.svg";
import portfolio from "../assets/images/svg/portfolio.svg";
import trash from "../assets/images/svg/trash-can.svg";
import Joe from "../assets/images/svg/joe.svg";

import {
    ComozemyIcon1,
    ComozemyIcon2,
    ComozemyIcon3,
    ComozemyIcon4,
    ComozemyIcon5,
    ComozemyIcon6,
    DlaczegoLogoFive,
    DlaczegoLogoFour,
    DlaczegoLogoOne,
    DlaczegoLogoThree,
    DlaczegoLogoTwo,
    sliderIcon1, sliderIcon2, sliderIcon3, sliderIcon4, tabsIcon1, tabsIcon2, tabsIcon3, tabsIcon4,
} from "./icon";

export const HeroSlider_Data = [
    {
        Image: sliderImg1,
        sliderIcon: sliderIcon1,
        description: "Twoje automatyczne faktury, obliczenia depozytów, dochody i obsługa zadłużenia",
    },
    {
        Image: sliderImg2,
        sliderIcon: sliderIcon2,
        description: "Wszystkie informacje o Twoich mieszkaniach, domach, pokojach i kawalerkach",
    },
    {
        Image: sliderImg3,
        sliderIcon: sliderIcon3,
        description: "Wszystko, czego potrzebujesz, aby zapewnić najlepszą obsługę swoim partnerom.",
    },
    {
        Image: sliderImg4,
        sliderIcon: sliderIcon4,
        description: "Wszystko, czego potrzebujesz, aby zarządzać wszystkimi najemcami i zapewnić im bardziej komfortowy pobyt.",
    },
    {
        Image: sliderImg2,
        sliderIcon: sliderIcon2,
        description: "Wszystkie informacje o Twoich mieszkaniach, domach, pokojach i kawalerkach",
    },
    {
        Image: sliderImg3,
        sliderIcon: sliderIcon3,
        description: "Wszystko, czego potrzebujesz, aby zapewnić najlepszą obsługę swoim partnerom.",
    },
    {
        Image: sliderImg1,
        sliderIcon: sliderIcon1,
        description: "Twoje automatyczne faktury, obliczenia depozytów, dochody i obsługa zadłużenia",
    },
    {
        Image: sliderImg2,
        sliderIcon: sliderIcon2,
        description: "Wszystkie informacje o Twoich mieszkaniach, domach, pokojach i kawalerkach",
    },
    {
        Image: sliderImg3,
        sliderIcon: sliderIcon3,
        description: "Wszystko, czego potrzebujesz, aby zapewnić najlepszą obsługę swoim partnerom.",
    },
    {
        Image: sliderImg4,
        sliderIcon: sliderIcon4,
        description: "Wszystko, czego potrzebujesz, aby zarządzać wszystkimi najemcami i zapewnić im bardziej komfortowy pobyt.",
    },
    {
        Image: sliderImg2,
        sliderIcon: sliderIcon2,
        description: "Wszystkie informacje o Twoich mieszkaniach, domach, pokojach i kawalerkach",
    },
    {
        Image: sliderImg3,
        sliderIcon: sliderIcon3,
        description: "Wszystko, czego potrzebujesz, aby zapewnić najlepszą obsługę swoim partnerom.",
    },
];

export const DlaKogo_data = [
    {
        icon: tabsIcon1,
        title: "Zarządzają wynajmem",
        subtitle: "Długoterminowym Lub Krótkoterminowym.",
    },
    {
        icon: tabsIcon2,
        title: "Obsługują apartotele",
        subtitle: "Lub Kwatery Pracownicze.",
    },
    {
        icon: tabsIcon3,
        title: "Mają własne mieszkania",
        subtitle: "I Chcą Je Prowadzić Profesjonalnie.",
    },
    {
        icon: tabsIcon4,
        title: "Walczą z chaosem",
        subtitle:
            "Przestań Ogarniać Wszystko W Excelu, Mailu I Na Telefonie.",
    },
];

export const Comozemy_Data = [
    {
        title: "Zautomatyzuj windykację i rozliczenia",
        text: "Pozwól systemowi automatycznie obsługiwać przypomnienia, zawiadomienia prawne i eskalacje do partnerów prawnych.",
        image: ComozemyIcon1,
        bgColor: "#5E13F6",
    },
    {
        title: "Zminimalizuj błędy ludzkie",
        text: "Zoe, Twój inteligentny asystent, śledzi terminy, dokumenty, płatności i interakcje z najemcami.",
        image: ComozemyIcon2,
        bgColor: "#FF3B61",
    },
    {
        title: "Usprawnij swoje działania",
        text: "Od wystawiania ofert i rejestracji nowych klientów po realizację zamówień i fakturowanie — zarządzaj wszystkim z jednej platformy.",
        image: ComozemyIcon3,
        bgColor: "#FF4DF5",
    },
    {
        title: "Oszczędzaj swój czas",
        text: "Wbudowany menedżer zadań + panel samoobsługi najemcy = mniej połączeń, większa przejrzystość.",
        image: ComozemyIcon4,
        bgColor: "#00F0FF",
    },
    {
        title: "Zyskaj przewagę konkurencyjną",
        text: "Ocena najemców, rezerwacje online, integracja inteligentnych zamków, faktury, e-sąd — wszystko w jednym miejscu.",
        image: ComozemyIcon5,
        bgColor: "#D5C7FF",
    },
    {
        title: "Łatwa skalowalność",
        text: "Dodaj więcej nieruchomości bez zatrudniania dodatkowych pracowników i bez wprowadzania chaosu. RentEasy.AI rozwija się razem z Tobą.",
        image: ComozemyIcon6,
        bgColor: "#1B1E3C",
    },
];

export const FooterIcons = [
    {
        name: "facebook",
        href: "https://www.facebook.com",
        svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.4" y="0.4" width="39.2" height="39.2" rx="19.6" stroke="white" stroke-width="0.8"/>
<path d="M24.9996 10H21.9996C20.6735 10 19.4018 10.5268 18.4641 11.4645C17.5264 12.4021 16.9996 13.6739 16.9996 15V18H13.9996V22H16.9996V30H20.9996V22H23.9996L24.9996 18H20.9996V15C20.9996 14.7348 21.105 14.4804 21.2925 14.2929C21.48 14.1054 21.7344 14 21.9996 14H24.9996V10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    },
    {
        name: "insta",
        href: "https://www.instagram.com",
        svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.4" y="0.4" width="39.2" height="39.2" rx="19.6" stroke="white" stroke-width="0.8"/>
<path d="M20 11.474C22.7769 11.474 23.1059 11.4846 24.2025 11.5346C25.3357 11.5863 26.5037 11.8449 27.3294 12.6706C28.1629 13.5041 28.4136 14.6606 28.4655 15.7976C28.5155 16.8942 28.5261 17.2231 28.5261 20.0001C28.5261 22.777 28.5155 23.1059 28.4655 24.2026C28.4141 25.33 28.1503 26.5086 27.3295 27.3294C26.4955 28.1634 25.3404 28.4136 24.2025 28.4656C23.1059 28.5156 22.7771 28.5262 20 28.5262C17.2228 28.5262 16.894 28.5156 15.7974 28.4656C14.6787 28.4145 13.4847 28.1436 12.6706 27.3296C11.8414 26.5004 11.586 25.3331 11.5344 24.2026C11.4844 23.1059 11.4738 22.777 11.4738 20.0001C11.4738 17.2231 11.4844 16.8942 11.5344 15.7975C11.5857 14.6742 11.8528 13.4884 12.6704 12.6707C13.5024 11.8387 14.6627 11.5863 15.7974 11.5345C16.8941 11.4846 17.2231 11.474 20 11.474ZM20 9.6001C17.1756 9.6001 16.8214 9.61204 15.7121 9.66266C14.1038 9.73607 12.508 10.1832 11.3455 11.3456C10.1787 12.5124 9.7359 14.1051 9.66257 15.7122C9.61195 16.8215 9.60001 17.1756 9.60001 20.0001C9.60001 22.8246 9.61195 23.1787 9.66257 24.288C9.73586 25.8937 10.1854 27.4944 11.3455 28.6545C12.5109 29.82 14.1069 30.2642 15.7121 30.3375C16.8214 30.3882 17.1756 30.4001 20 30.4001C22.8245 30.4001 23.1786 30.3882 24.2879 30.3375C25.8944 30.2642 27.4933 29.8157 28.6545 28.6546C29.8217 27.4874 30.2641 25.8954 30.3374 24.288C30.3881 23.1787 30.4 22.8246 30.4 20.0001C30.4 17.1756 30.3881 16.8215 30.3374 15.7122C30.2641 14.1048 29.8161 12.5073 28.6545 11.3457C27.4908 10.1819 25.8903 9.73579 24.2879 9.66266C23.1786 9.61204 22.8245 9.6001 20 9.6001Z" fill="white"/>
<path d="M20 14.6592C17.0505 14.6592 14.6594 17.0502 14.6594 19.9997C14.6594 22.9492 17.0505 25.3403 20 25.3403C22.9495 25.3403 25.3406 22.9492 25.3406 19.9997C25.3406 17.0502 22.9495 14.6592 20 14.6592ZM20 23.4664C18.0854 23.4664 16.5333 21.9143 16.5333 19.9997C16.5333 18.0852 18.0854 16.5331 20 16.5331C21.9146 16.5331 23.4667 18.0852 23.4667 19.9997C23.4667 21.9143 21.9146 23.4664 20 23.4664Z" fill="white"/>
<path d="M25.5516 15.6962C26.2408 15.6962 26.7996 15.1374 26.7996 14.4482C26.7996 13.7589 26.2408 13.2002 25.5516 13.2002C24.8623 13.2002 24.3036 13.7589 24.3036 14.4482C24.3036 15.1374 24.8623 15.6962 25.5516 15.6962Z" fill="white"/>
</svg>
`,
    },
    {
        name: "linkedin",
        href: "https://www.linkedin.com",
        svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.4" y="0.4" width="39.2" height="39.2" rx="19.6" stroke="white" stroke-width="0.8"/>
<path d="M25.9514 30.7998C26.0441 30.7998 30.2371 30.7989 30.1453 30.7989C30.5179 30.7989 30.8203 30.4965 30.8203 30.1239C30.5053 23.0527 32.4781 15.5908 25.1162 15.5908C23.7005 15.5908 22.5728 16.0741 21.7601 16.7131C21.7601 15.3982 20.339 16.1254 17.0585 15.9301C16.6859 15.9301 16.3835 16.2325 16.3835 16.6051C16.6553 29.3544 15.7769 30.7989 17.0585 30.7989H21.2525C22.4702 30.7989 21.6953 29.0817 21.9275 23.4298C21.9275 21.0952 22.6025 20.638 23.7689 20.638C25.0595 20.638 25.2764 21.5344 25.2764 23.5432C25.5077 29.0934 24.7382 30.7998 25.9514 30.7998ZM23.7689 19.288C19.727 19.288 20.5775 23.7322 20.5775 29.4489H17.7335V17.2801H20.4101V18.4483C20.4101 19.0963 21.3974 19.4149 21.7412 18.7633C22.184 17.9227 23.3342 16.9408 25.1162 16.9408C28.2905 16.9408 29.4703 18.5005 29.4703 22.6972V29.4498H26.6264C26.6264 23.0203 27.3068 19.288 23.7689 19.288Z" fill="white"/>
<path d="M10.2303 15.9309C8.95227 15.9309 9.82707 17.3574 9.55527 30.1247C9.55527 30.4973 9.85767 30.7997 10.2303 30.7997H14.4287C15.7067 30.7997 14.8319 29.3732 15.1037 16.6059C15.1037 15.4404 13.4108 16.128 10.2303 15.9309ZM13.7537 29.4497H10.9053V17.2809H13.7537V29.4497Z" fill="white"/>
<path d="M12.3273 9.2002C8.20889 9.2002 8.23409 15.4362 12.3273 15.4362C16.4177 15.4362 16.4501 9.2002 12.3273 9.2002ZM12.3273 14.0863C10.0161 14.0863 9.99448 10.5502 12.3273 10.5502C14.6645 10.5502 14.6348 14.0863 12.3273 14.0863Z" fill="white"/>
</svg>
`,
    },
    {
        name: "youtube",
        href: "https://www.youtube.com",
        svg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.4" y="0.4" width="39.2" height="39.2" rx="19.6" stroke="white" stroke-width="0.8"/>
<path d="M30.54 14.42C30.4151 13.9523 30.1698 13.5255 29.8285 13.1821C29.4872 12.8387 29.0619 12.5908 28.595 12.463C26.88 12 20 12 20 12C20 12 13.12 12 11.405 12.463C10.9381 12.5908 10.5128 12.8387 10.1715 13.1821C9.83023 13.5255 9.58492 13.9523 9.46 14.42C9 16.148 9 19.75 9 19.75C9 19.75 9 23.352 9.46 25.08C9.58476 25.5479 9.83001 25.9749 10.1713 26.3185C10.5126 26.662 10.9379 26.9101 11.405 27.038C13.121 27.5 20 27.5 20 27.5C20 27.5 26.88 27.5 28.595 27.038C29.0621 26.9101 29.4874 26.662 29.8287 26.3185C30.17 25.9749 30.4152 25.5479 30.54 25.08C31 23.354 31 19.75 31 19.75C31 19.75 31 16.148 30.54 14.42ZM17.75 23.021V16.48L23.5 19.751L17.75 23.021Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
</svg>
`,
    },
];

export const HeaderLinks_Data = [
    { link: "/dlaczego", label: "Strona Główna" },
    { link: "/dlakogo", label: "Dla kogo?" },
    { link: "/działa", label: "Jak to działa?" },
    { link: "/moduly", label: "Moduły" },
    { link: "/", withImage: true, image: Joe },
];

export const DLACZEGO_DATA = [
    {
        icon: DlaczegoLogoOne,
        title: "Przewaga Konkurencyjna",
        descrition: "Ponieważ nie jesteśmy tylko oprogramowaniem — jesteśmy Twoją przewagą konkurencyjną."
    },
    {
        icon: DlaczegoLogoTwo,
        title: "Efektywność Kosztowa",
        descrition: "Zamiast zatrudniać trzech nowych pracowników, uruchamiasz RentEasy.AI. I to działa."
    },
    {
        icon: DlaczegoLogoThree,
        title: "Wgląd W Branżę",
        descrition: "Stworzyliśmy ten system we współpracy z prawdziwymi zarządcami nieruchomości — rozumiemy Twoją branżę, tempo pracy i formalności, z którymi się zmagasz."
    },
    {
        icon: DlaczegoLogoFour,
        title: "Aktywna Automatyzacja",
        descrition: "RentEasy.AI nie tylko przechowuje informacje — wykonuje pracę za Ciebie."
    },
    {
        icon: DlaczegoLogoFive,
        title: "Łatwe Wdrożenie",
        descrition: "Brak skomplikowanego procesu wdrażania — jest intuicyjny, nie wymaga szkolenia, a my pomagamy w migracji z innych narzędzi, takich jak SON."
    },
];

export const ACCORDION_DATA = [
    {
        question: "Czym jest RentEasy.AI?",
        answer:
            "RentEasy.AI to pierwszy w Polsce CRM stworzony od podstaw z myślą o firmach zarządzających najmem. To nie tylko system – to Twój cyfrowy zespół operacyjny, który działa 24/7. Automatyzuje windykację, rozliczenia, komunikację, meldunki, zarządzanie zadaniami i wiele więcej. Dzięki wirtualnej asystentce Zoe oraz modułowej strukturze, RentEasy.AI zastępuje nawet 2–3 etaty, upraszcza codzienną pracę i pozwala skalować biznes bez chaosu.",
    },
    {
        question: "Dla kogo przeznaczone jest RentEasy.AI?",
        answer:
            "RentEasy.AI to pierwszy w Polsce CRM stworzony od podstaw z myślą o firmach zarządzających najmem. To nie tylko system – to Twój cyfrowy zespół operacyjny, który działa 24/7. Automatyzuje windykację, rozliczenia, komunikację, meldunki, zarządzanie zadaniami i wiele więcej. Dzięki wirtualnej asystentce Zoe oraz modułowej strukturze, RentEasy.AI zastępuje nawet 2–3 etaty, upraszcza codzienną pracę i pozwala skalować biznes bez chaosu.",
    },
    {
        question: "Czy potrzebuję szkolenia, aby korzystać z RentEasy.AI?",
        answer:
            "RentEasy.AI to pierwszy w Polsce CRM stworzony od podstaw z myślą o firmach zarządzających najmem. To nie tylko system – to Twój cyfrowy zespół operacyjny, który działa 24/7. Automatyzuje windykację, rozliczenia, komunikację, meldunki, zarządzanie zadaniami i wiele więcej. Dzięki wirtualnej asystentce Zoe oraz modułowej strukturze, RentEasy.AI zastępuje nawet 2–3 etaty, upraszcza codzienną pracę i pozwala skalować biznes bez chaosu.",
    },
    {
        question: "Czy RentEasy.AI może zastąpić moje obecne narzędzia?",
        answer:
            "RentEasy.AI to pierwszy w Polsce CRM stworzony od podstaw z myślą o firmach zarządzających najmem. To nie tylko system – to Twój cyfrowy zespół operacyjny, który działa 24/7. Automatyzuje windykację, rozliczenia, komunikację, meldunki, zarządzanie zadaniami i wiele więcej. Dzięki wirtualnej asystentce Zoe oraz modułowej strukturze, RentEasy.AI zastępuje nawet 2–3 etaty, upraszcza codzienną pracę i pozwala skalować biznes bez chaosu.",
    },
    {
        question: "Czym RentEasy.AI różni się od innych narzędzi związanych z nieruchomościami?",
        answer:
            "RentEasy.AI to pierwszy w Polsce CRM stworzony od podstaw z myślą o firmach zarządzających najmem. To nie tylko system – to Twój cyfrowy zespół operacyjny, który działa 24/7. Automatyzuje windykację, rozliczenia, komunikację, meldunki, zarządzanie zadaniami i wiele więcej. Dzięki wirtualnej asystentce Zoe oraz modułowej strukturze, RentEasy.AI zastępuje nawet 2–3 etaty, upraszcza codzienną pracę i pozwala skalować biznes bez chaosu.",
    },
    {
        question: "Czy dostępna jest bezpłatna wersja próbna lub demo?",
        answer:
            "RentEasy.AI to pierwszy w Polsce CRM stworzony od podstaw z myślą o firmach zarządzających najmem. To nie tylko system – to Twój cyfrowy zespół operacyjny, który działa 24/7. Automatyzuje windykację, rozliczenia, komunikację, meldunki, zarządzanie zadaniami i wiele więcej. Dzięki wirtualnej asystentce Zoe oraz modułowej strukturze, RentEasy.AI zastępuje nawet 2–3 etaty, upraszcza codzienną pracę i pozwala skalować biznes bez chaosu.",
    },
];

export const tabData = [
    {
        id: 0,
        label: "Moduł ofert z integracjami",
        heading: "Moduł ofert z integracjami",
        subheading: "Do czego służy?",
        description:
            "Ten moduł pozwala publikować oferty najmu bez pośredników i prowizji bezpośrednio z systemu RentEasy.AI. Dzięki integracjom z zewnętrznymi portalami i własną podstroną ofertową możesz prowadzić cały lejek rezerwacyjny samodzielnie.",
        features: [
            {
                title: "Możliwość Tworzenia i Publikowania Ogłoszeń Z Poziomu Systemu.",
                color: "#5E13F6",
            },
            {
                title: "Własna Podstrona Ofertowa Z Brandingiem Klienta.",
                color: "#FF3B61",
            },
            {
                title: "Zbieranie Rezerwacji I Danych Kontaktowych Online.",
                color: "#FF4DF5",
            },
            {
                title: "Integracja Z Popularnymi Portalami Ogłoszeniowymi (Planowana).",
                color: "#1B1E3C",
            },
        ],
        benefitsTitle: "Dla kogo?",
        benefitsSub: "Dla firm, które chcą:",
        benefits: [
            {
                text: "Zwiększyć Kontrolę Nad Procesem Wynajmu",
                iconSrc: userGear,
                bgColor: "bg-[#5E13F6]",
            },
            {
                text: "Zminimalizować Czas Od Publikacji Do Podpisania Umowy",
                iconSrc: corporate,
                bgColor: "bg-[#FF3B61]",
            },
            {
                text: "Pozyskać Najemców Bez Pośredników",
                iconSrc: portfolio,
                bgColor: "bg-[#FF4DF5]",
            },
            {
                text: "Budować Markę Własną W Ramach Strony Ofertowej",
                iconSrc: trash,
                bgColor: "bg-[#00F0FF]",
            },
        ],
    },
    {
        id: 1,
        label: "Moduł podstawowy",
        heading: "Moduł podstawowy",
        subheading: "Do czego służy?",
        description:
            "To fundament całego systemu. Dzięki niemu masz w jednym miejscu pełny przegląd swojej działalności: mieszkania, właściciele, najemcy, umowy, płatności i dokumenty",
        features: [
            {
                title: "Możliwość Tworzenia i Publikowania Ogłoszeń Z Poziomu Systemu.",
                color: "#5E13F6",
            },
            {
                title: "Własna Podstrona Ofertowa Z Brandingiem Klienta.",
                color: "#FF3B61",
            },
            {
                title: "Zbieranie Rezerwacji I Danych Kontaktowych Online.",
                color: "#FF4DF5",
            },
            {
                title: "Integracja Z Popularnymi Portalami Ogłoszeniowymi (Planowana).",
                color: "#1B1E3C",
            },
        ],
        benefitsTitle: "Co rozwiązuje?",
        benefits: [
            {
                text: "Zwiększyć Kontrolę Nad Procesem Wynajmu",
                iconSrc: userGear,
                bgColor: "bg-[#5E13F6]",
            },
            {
                text: "Zminimalizować Czas Od Publikacji Do Podpisania Umowy",
                iconSrc: corporate,
                bgColor: "bg-[#FF3B61]",
            },
            {
                text: "Pozyskać Najemców Bez Pośredników",
                iconSrc: portfolio,
                bgColor: "bg-[#FF4DF5]",
            },
            {
                text: "Budować Markę Własną W Ramach Strony Ofertowej",
                iconSrc: trash,
                bgColor: "bg-[#00F0FF]",
            },
        ],
    },
    {
        id: 2,
        label: "Moduł Integracji z Google Workspace",
        heading: "Moduł ofert z integracjami",
        subheading: "Do czego służy?",
        description:
            "Ten moduł pozwala publikować oferty najmu bez pośredników i prowizji bezpośrednio z systemu RentEasy.Al. Dzięki integracjom z zewnętrznymi portalami i własną podstroną ofertową możesz prowadzić cały lejek rezerwacyjny samodzielnie.",
        features: [
            {
                title: "Możliwość Tworzenia i Publikowania Ogłoszeń Z Poziomu Systemu.",
                color: "#5E13F6",
            },
            {
                title: "Własna Podstrona Ofertowa Z Brandingiem Klienta.",
                color: "#FF3B61",
            },
            {
                title: "Zbieranie Rezerwacji I Danych Kontaktowych Online.",
                color: "#FF4DF5",
            },
            {
                title: "Integracja Z Popularnymi Portalami Ogłoszeniowymi (Planowana).",
                color: "#1B1E3C",
            },
        ],
        benefitsTitle: "Dla kogo?",
        benefitsSub: "Dla firm, które chcą:",
        benefits: [
            {
                text: "Zarządzaj Wynajmem Długoterminowym Lub Krótkoterminowym.",
                iconSrc: userGear,
                bgColor: "bg-[#5E13F6]",
            },
            {
                text: "Prowadzenie Aparthoteli Lub Zakwaterowania Dla Pracowników.",
                iconSrc: corporate,
                bgColor: "bg-[#FF3B61]",
            },
            {
                text: "Posiadasz Portfel Nieruchomości Na Wynajem I Chcesz Nim Zarządzać W Profesjonalny Sposób.",
                iconSrc: portfolio,
                bgColor: "bg-[#FF4DF5]",
            },
            {
                text: "Jesteś Przytłoczony Arkuszami Excel, Telefonami I Ciągłymi E-Mailami.",
                iconSrc: trash,
                bgColor: "bg-[#00F0FF]",
            },
        ],
    },
    {
        id: 2,
        label: "Moduł Bramki SMS",
        heading: "Moduł ofert z integracjami",
        subheading: "Do czego służy?",
        description:
            "Ten moduł pozwala publikować oferty najmu bez pośredników i prowizji bezpośrednio z systemu RentEasy.Al. Dzięki integracjom z zewnętrznymi portalami i własną podstroną ofertową możesz prowadzić cały lejek rezerwacyjny samodzielnie.",
        features: [
            {
                title: "Możliwość Tworzenia i Publikowania Ogłoszeń Z Poziomu Systemu.",
                color: "#5E13F6",
            },
            {
                title: "Własna Podstrona Ofertowa Z Brandingiem Klienta.",
                color: "#FF3B61",
            },
            {
                title: "Zbieranie Rezerwacji I Danych Kontaktowych Online.",
                color: "#FF4DF5",
            },
            {
                title: "Integracja Z Popularnymi Portalami Ogłoszeniowymi (Planowana).",
                color: "#1B1E3C",
            },
        ],
        benefitsTitle: "Dla kogo?",
        benefitsSub: "Dla firm, które chcą:",
        benefits: [
            {
                text: "Zarządzaj Wynajmem Długoterminowym Lub Krótkoterminowym.",
                iconSrc: userGear,
                bgColor: "bg-[#5E13F6]",
            },
            {
                text: "Prowadzenie Aparthoteli Lub Zakwaterowania Dla Pracowników.",
                iconSrc: corporate,
                bgColor: "bg-[#FF3B61]",
            },
            {
                text: "Posiadasz Portfel Nieruchomości Na Wynajem I Chcesz Nim Zarządzać W Profesjonalny Sposób.",
                iconSrc: portfolio,
                bgColor: "bg-[#FF4DF5]",
            },
            {
                text: "Jesteś Przytłoczony Arkuszami Excel, Telefonami I Ciągłymi E-Mailami.",
                iconSrc: trash,
                bgColor: "bg-[#00F0FF]",
            },
        ],
    },
    {
        id: 2,
        label: "Moduł płatności + umowy + klamki",
        heading: "Moduł ofert z integracjami",
        subheading: "Do czego służy?",
        description:
            "Ten moduł pozwala publikować oferty najmu bez pośredników i prowizji bezpośrednio z systemu RentEasy.Al. Dzięki integracjom z zewnętrznymi portalami i własną podstroną ofertową możesz prowadzić cały lejek rezerwacyjny samodzielnie.",
        features: [
            {
                title: "Możliwość Tworzenia i Publikowania Ogłoszeń Z Poziomu Systemu.",
                color: "#5E13F6",
            },
            {
                title: "Własna Podstrona Ofertowa Z Brandingiem Klienta.",
                color: "#FF3B61",
            },
            {
                title: "Zbieranie Rezerwacji I Danych Kontaktowych Online.",
                color: "#FF4DF5",
            },
            {
                title: "Integracja Z Popularnymi Portalami Ogłoszeniowymi (Planowana).",
                color: "#1B1E3C",
            },
        ],
        benefitsTitle: "Dla kogo?",
        benefitsSub: "Dla firm, które chcą:",
        benefits: [
            {
                text: "Zarządzaj Wynajmem Długoterminowym Lub Krótkoterminowym.",
                iconSrc: userGear,
                bgColor: "bg-[#5E13F6]",
            },
            {
                text: "Prowadzenie Aparthoteli Lub Zakwaterowania Dla Pracowników.",
                iconSrc: corporate,
                bgColor: "bg-[#FF3B61]",
            },
            {
                text: "Posiadasz Portfel Nieruchomości Na Wynajem I Chcesz Nim Zarządzać W Profesjonalny Sposób.",
                iconSrc: portfolio,
                bgColor: "bg-[#FF4DF5]",
            },
            {
                text: "Jesteś Przytłoczony Arkuszami Excel, Telefonami I Ciągłymi E-Mailami.",
                iconSrc: trash,
                bgColor: "bg-[#00F0FF]",
            },
        ],
    },
    {
        id: 2,
        label: "Moduł Task Manager",
        heading: "Moduł ofert z integracjami",
        subheading: "Do czego służy?",
        description:
            "Ten moduł pozwala publikować oferty najmu bez pośredników i prowizji bezpośrednio z systemu RentEasy.Al. Dzięki integracjom z zewnętrznymi portalami i własną podstroną ofertową możesz prowadzić cały lejek rezerwacyjny samodzielnie.",
        features: [
            {
                title: "Możliwość Tworzenia i Publikowania Ogłoszeń Z Poziomu Systemu.",
                color: "#5E13F6",
            },
            {
                title: "Własna Podstrona Ofertowa Z Brandingiem Klienta.",
                color: "#FF3B61",
            },
            {
                title: "Zbieranie Rezerwacji I Danych Kontaktowych Online.",
                color: "#FF4DF5",
            },
            {
                title: "Integracja Z Popularnymi Portalami Ogłoszeniowymi (Planowana).",
                color: "#1B1E3C",
            },
        ],
        benefitsTitle: "Dla kogo?",
        benefitsSub: "Dla firm, które chcą:",
        benefits: [
            {
                text: "Zarządzaj Wynajmem Długoterminowym Lub Krótkoterminowym.",
                iconSrc: userGear,
                bgColor: "bg-[#5E13F6]",
            },
            {
                text: "Prowadzenie Aparthoteli Lub Zakwaterowania Dla Pracowników.",
                iconSrc: corporate,
                bgColor: "bg-[#FF3B61]",
            },
            {
                text: "Posiadasz Portfel Nieruchomości Na Wynajem I Chcesz Nim Zarządzać W Profesjonalny Sposób.",
                iconSrc: portfolio,
                bgColor: "bg-[#FF4DF5]",
            },
            {
                text: "Jesteś Przytłoczony Arkuszami Excel, Telefonami I Ciągłymi E-Mailami.",
                iconSrc: trash,
                bgColor: "bg-[#00F0FF]",
            },
        ],
    },
];

export const navLinks = [
    { label: "Strona Główna", href: "/" },
    { label: "Dla kogo?", href: "/dla-kogo" },
    { label: "Jak to działa?", href: "/jak-to-dziala" },
    { label: "Moduły", href: "/moduly" },
    { label: "Zoe", href: "/zoe" },
];
