import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Jean ANVOH",
  initials: "JA",
  location: "Abidjan, Côte d'Ivoire",
  locationLink: "https://www.google.com/maps/place/Abidjan",
  about:
    "Gestionnaire d'incidents télécom orienté Digital & AI Operations — supervision réseau, automatisation, reporting.",
  summary:
    "Gestionnaire d'incidents Core & RAN (Huawei GNOC Africa) avec 5 ans d'expérience en supervision réseau, reporting opérationnel et gestion documentaire ITIL. Passionné d'automatisation et d'IA : j'utilise Claude et Claude Code au quotidien pour concevoir des outils de reporting, automatiser des workflows et déployer des applications web et mobiles. 7 produits digitaux construits et déployés en autonomie. Disponible immédiatement.",
  avatarUrl: "https://github.com/jeananvoh-cmyk.png",
  personalWebsiteUrl: "https://jean-anvoh-portfolio.vercel.app",
  contact: {
    email: "jeananvoh.pro@gmail.com",
    tel: "+225 07 08 19 65 64",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jeananvoh-cmyk",
        icon: "github",
      },
    ],
  },
  education: [
    {
      school: "LBS — Lomé Business School (Togo)",
      degree:
        "Master Système d'Information — option Réseaux & Télécommunications",
      start: "2018",
      end: "2020",
    },
    {
      school: "ITA — Institut Ivoirien des Technologies (Abidjan)",
      degree: "Licence Sciences Informatiques",
      start: "2016",
      end: "2017",
    },
    {
      school: "CELIA (Abidjan)",
      degree: "BTS Systèmes Électroniques et Informatiques",
      start: "2013",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Huawei — GNOC Africa",
      link: "https://www.huawei.com",
      badges: ["Télécom", "Reporting", "ITIL", "SLA"],
      title: "RAN Front Incident Handler (OSL)",
      start: "2024",
      end: null,
      description:
        "Gestion des activités de rétablissement de service dans le respect des SLA, pour le client Orange Sierra Leone.",
      highlights: [
        "Production des rapports et indicateurs pour les réunions client (résilience réseau 2G/3G/4G/5G)",
        "Coordination des opérations de rétablissement de service multi-équipes",
      ],
    },
    {
      company: "Huawei — GNOC Africa",
      link: "https://www.huawei.com",
      badges: ["Supervision", "NCE", "CACTI"],
      title: "FO RAN / Core Engineer",
      start: "2023",
      end: "2024",
      description:
        "Supervision et monitoring du réseau de la filiale Orange Sierra Leone.",
      highlights: [
        "Monitoring temps réel via NCE, Weather Map et CACTI",
        "Structuration et mise à jour de la base de tickets incidents (documentation opérationnelle)",
      ],
    },
    {
      company: "Huawei — GNOC Africa",
      link: "https://www.huawei.com",
      badges: ["Supervision", "ITIL", "24/7", "Multi-pays"],
      title: "FO IP Engineer",
      start: "2021",
      end: "2023",
      description:
        "Supervision et monitoring lors des rotations d'astreinte programmées.",
      highlights: [
        "Respect des SLA et application des bonnes pratiques ITIL",
        "Support aux filiales de Côte d'Ivoire, Guinée, Cameroun et Congo",
      ],
    },
    {
      company: "IACCESS Academy (PNCCD)",
      link: "",
      badges: ["Formation", "ICDL", "Digital"],
      title: "Formateur informatique certifié ICDL",
      start: "2020",
      end: "2021",
      description:
        "Formateur certifié ICDL dans le cadre du Programme National de Certification des Compétences Digitales (PNCCD), pour entreprises et ONG.",
    },
    {
      company: "Gardians Assistance — Abidjan",
      link: "",
      badges: ["Support IT", "Active Directory", "M365"],
      title: "Assistant Technicien Informatique",
      start: "2017",
      end: "2017",
      description:
        "Gestion des comptes utilisateurs (Active Directory) et de la messagerie Outlook ; administration de la sauvegarde et de l'antivirus.",
    },
    {
      company: "Min. de l'Éducation Nationale — DRH",
      link: "",
      badges: ["Support IT", "Maintenance"],
      title: "Assistant Informatique",
      start: "2016",
      end: "2017",
      description:
        "Maintenance et dépannage des équipements utilisateurs : ordinateurs, imprimantes, téléphones.",
    },
  ],
  skills: [
    "Reporting & Tableaux de bord",
    "Automatisation / No-code",
    "Excel / Google Sheets",
    "Claude / Claude Code (IA)",
    "Microsoft 365 / Google Workspace",
    "Power BI",
    "ITIL — Gestion d'incidents",
    "Supervision (NCE, CACTI)",
    "TCP/IP · IS-IS / MPLS",
    "React / TypeScript",
    "Supabase / Vercel",
    "Linux / Windows Server",
    "Gestion de projet",
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "B2 — professionnel" },
  ],
  personalInfo: ["Permis BCDE", "Marié, 1 enfant", "Disponible immédiatement"],
  projects: [
    {
      title: "SIGNA.ci",
      techStack: ["React", "TypeScript", "Supabase", "PWA"],
      description:
        "Plateforme civique de signalement des infrastructures publiques à Abidjan — géolocalisation, mode hors-ligne, dashboard analytics par commune.",
      link: {
        label: "signa.ci",
        href: "https://signa.ci",
      },
    },
    {
      title: "AK-Construction · CRM",
      techStack: ["Next.js", "Prisma", "WhatsApp API"],
      description:
        "CRM avec intégration WhatsApp pour le suivi des clients et prospects. Relances automatiques et reporting commercial.",
      link: {
        label: "live",
        href: "https://ak-construction-five.vercel.app/",
      },
    },
    {
      title: "Reporting NOC automatisé",
      techStack: ["Web", "Automatisation", "Excel"],
      description:
        "Génération automatique de rapports et d'exports Excel à partir de données d'alarmes télécom multi-formats.",
    },
    {
      title: "ONSECOTA",
      techStack: ["Flutter", "Wave", "Orange Money"],
      description:
        "Application de gestion d'argent collectif — collecte solidaire, split bill, tontine digitale, prêt entre amis (en développement).",
    },
  ],
};
