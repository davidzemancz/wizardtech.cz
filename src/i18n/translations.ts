export type Lang = 'cs' | 'en';

export const translations = {
  cs: {
    nav: {
      services: 'Služby',
      about: 'O nás',
      process: 'Jak pracujeme',
      contact: 'Kontakt',
    },
    hero: {
      headline: 'Umělá inteligence',
      headlineSub: 'pro veřejnou dopravu.',
      description:
        'Propojujeme optimalizační algoritmy a AI agenty s provozem dopravních firem — od plánování jízdních řádů po automatizaci procesů.',
      cta: 'Domluvit konzultaci',
    },
    problems: {
      sectionTag: 'Výzvy dopravy',
      headline: 'Propojujeme špičkový software a optimalizační algoritmy s AI agenty',
      items: [
        {
          problem: 'Optimalizace jízdních řádů',
          solution: 'Chytřejší plánování',
          description:
            'Tvorba a úpravy jízdních řádů s využitím optimalizačních algoritmů a AI. Výsledek? Lepší pokrytí poptávky, nižší náklady na provoz.',
        },
        {
          problem: 'Optimalizace oběhů vozidel a směn řidičů',
          solution: 'Efektivní nasazení zdrojů',
          description:
            'Automatická tvorba oběhů vozidel a rozpisy směn řidičů. Minimalizace prázdných kilometrů, dodržení legislativních požadavků.',
        },
        {
          problem: 'Efektivnější provoz a automatické zpracování',
          solution: 'Automatizace procesů',
          description:
            'Automatizace rutinních úkolů, zpracování dat a reportingu. AI agenti přebírají opakující se práci a uvolňují kapacity pro strategická rozhodnutí.',
        },
      ],
    },
    services: {
      sectionTag: 'Naše služby',
      headline: 'Řešení na míru dopravním firmám',
      items: [
        {
          title: 'Datová analýza a reporting',
          description:
            'Přeměňujeme surová data z vašich systémů na přehledné dashboardy a akční přehledy.',
        },
        {
          title: 'Automatizace procesů',
          description:
            'Odstraňujeme ruční práci v dispečinku, administrativě a compliance reportingu.',
        },
        {
          title: 'Optimalizace tras',
          description:
            'AI plánování tras a jízdních řádů pro nižší náklady a vyšší přesnost.',
        },
        {
          title: 'Prediktivní údržba',
          description:
            'Predikce poruch na základě senzorových dat a historie oprav vašeho vozového parku.',
        },
        {
          title: 'AI integrace',
          description:
            'Napojení AI do vašich stávajících ERP, TMS a fleet management systémů.',
        },
        {
          title: 'Vlastní AI řešení',
          description:
            'Vývoj unikátních modelů pro specifické výzvy vaší dopravní firmy.',
        },
      ],
    },
    whyUs: {
      sectionTag: 'Proč WizardTech',
      headline: 'Známe dopravu. Známe AI. Spojujeme obojí.',
      items: [
        {
          title: 'Zkušenosti z dopravy',
          description: 'Neučíme se na vašem projektu. Dopravu už známe.',
        },
        {
          title: 'Komplexní řešení',
          description: 'Ne jeden nástroj, ale celá strategie.',
        },
        {
          title: 'Měřitelné výsledky',
          description: 'Každý projekt měří, co přináší.',
        },
      ],
    },
    process: {
      sectionTag: 'Jak pracujeme',
      headline: 'Od analýzy po výsledky',
      steps: [
        {
          title: 'Analýza',
          description: 'Zmapujeme vaše procesy, data a příležitosti pro AI.',
        },
        {
          title: 'Návrh',
          description: 'Připravíme strategii a roadmapu implementace.',
        },
        {
          title: 'Implementace',
          description: 'Nasadíme řešení do vašeho prostředí s minimálním dopadem na provoz.',
        },
        {
          title: 'Optimalizace',
          description: 'Průběžně ladíme a rozšiřujeme na základě reálných výsledků.',
        },
      ],
    },
    cta: {
      headline: 'Chcete vědět, co AI změní ve vaší firmě?',
      button: 'Domluvit konzultaci zdarma',
    },
    contact: {
      sectionTag: 'Kontakt',
      headline: 'Ozvěte se nám',
      description: 'Rádi s vámi probereme, jak AI může pomoct právě vaší firmě. Konzultace je nezávazná a zdarma.',
      info: {
        companyName: 'WizardTech s.r.o.',
        addressLabel: 'Místo',
        address: 'Praha',
        ico: 'IČO: 21276722',
        emailLabel: 'E-mail',
        email: 'david.zeman@wizardtech.cz',
        phoneLabel: 'Telefon',
        phone: '+420 720 333 987',
      },
    },
    footer: {
      tagline: 'Umělá inteligence pro veřejnou dopravu',
      rights: '© 2026 WizardTech. Všechna práva vyhrazena.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      process: 'Process',
      contact: 'Contact',
    },
    hero: {
      headline: 'Artificial intelligence',
      headlineSub: 'for public transportation.',
      description:
        'We connect optimization algorithms and AI agents with transportation operations — from timetable planning to process automation.',
      cta: 'Book a consultation',
    },
    problems: {
      sectionTag: 'Transportation challenges',
      headline: 'We connect top-tier software and optimization algorithms with AI agents',
      items: [
        {
          problem: 'Timetable optimization',
          solution: 'Smarter scheduling',
          description:
            'Creating and adjusting timetables using optimization algorithms and AI. Result? Better demand coverage, lower operating costs.',
        },
        {
          problem: 'Vehicle scheduling & driver shift optimization',
          solution: 'Efficient resource deployment',
          description:
            'Automatic vehicle rotation planning and driver shift scheduling. Minimizing deadhead kilometers while meeting regulatory requirements.',
        },
        {
          problem: 'More efficient operations & automatic processing',
          solution: 'Process automation',
          description:
            'Automating routine tasks, data processing, and reporting. AI agents take over repetitive work, freeing capacity for strategic decisions.',
        },
      ],
    },
    services: {
      sectionTag: 'Our services',
      headline: 'Solutions tailored for transportation',
      items: [
        {
          title: 'Data analytics & reporting',
          description:
            'We transform raw data from your systems into clear dashboards and actionable insights.',
        },
        {
          title: 'Process automation',
          description:
            'We eliminate manual work in dispatching, administration, and compliance reporting.',
        },
        {
          title: 'Route optimization',
          description:
            'AI-driven route planning and scheduling for lower costs and higher accuracy.',
        },
        {
          title: 'Predictive maintenance',
          description:
            'Failure prediction based on sensor data and repair history of your fleet.',
        },
        {
          title: 'AI integration',
          description:
            'Connecting AI capabilities into your existing ERP, TMS, and fleet management tools.',
        },
        {
          title: 'Custom AI solutions',
          description:
            'Building unique models for the specific challenges of your transportation business.',
        },
      ],
    },
    whyUs: {
      sectionTag: 'Why WizardTech',
      headline: 'We know transportation. We know AI. We connect both.',
      items: [
        {
          title: 'Transportation expertise',
          description: "We don't learn on your project. We already know the industry.",
        },
        {
          title: 'End-to-end solutions',
          description: 'Not just one tool, but a complete strategy.',
        },
        {
          title: 'Measurable results',
          description: 'Every project tracks what it delivers.',
        },
      ],
    },
    process: {
      sectionTag: 'How we work',
      headline: 'From analysis to results',
      steps: [
        {
          title: 'Analysis',
          description: 'We map your processes, data, and AI opportunities.',
        },
        {
          title: 'Design',
          description: 'We prepare a strategy and implementation roadmap.',
        },
        {
          title: 'Implementation',
          description: 'We deploy solutions with minimal impact on operations.',
        },
        {
          title: 'Optimization',
          description: 'We continuously tune and expand based on real results.',
        },
      ],
    },
    cta: {
      headline: 'Want to know what AI can change in your company?',
      button: 'Book a free consultation',
    },
    contact: {
      sectionTag: 'Contact',
      headline: 'Get in touch',
      description: "We'd love to discuss how AI can help your company. The consultation is free and non-binding.",
      info: {
        companyName: 'WizardTech s.r.o.',
        addressLabel: 'Location',
        address: 'Prague',
        ico: 'ID: 21276722',
        emailLabel: 'Email',
        email: 'david.zeman@wizardtech.cz',
        phoneLabel: 'Phone',
        phone: '+420 720 333 987',
      },
    },
    footer: {
      tagline: 'AI for public transportation',
      rights: '© 2026 WizardTech. All rights reserved.',
    },
  },
};

export type Translations = typeof translations.cs;
