import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import type React from "react";
import { Avatar } from "@/components/avatar";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { XIcon } from "@/components/icons/x-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import type { IconType } from "@/lib/types";

// Type-safe icon mapping
const ICON_MAP: Record<
  IconType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
} as const;

interface LocationLinkProps {
  location: typeof RESUME_DATA.location;
  locationLink: typeof RESUME_DATA.locationLink;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  iconType: IconType;
  label: string;
}

function SocialButton({ href, iconType, label }: SocialButtonProps) {
  const IconComponent = ICON_MAP[iconType];

  return (
    <Button className="size-8" variant="outline" size="icon" asChild={true}>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconComponent className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

interface PrimaryContactProps {
  email: string;
  tel: string;
}

/**
 * Prominent, easy-to-tap email and phone CTAs for recruiters.
 */
function PrimaryContact({ email, tel }: PrimaryContactProps) {
  return (
    <div className="flex flex-wrap gap-2 pt-1 print:hidden">
      {email && (
        <Button
          variant="default"
          size="sm"
          className="h-9 gap-1.5 px-3 text-sm font-medium"
          asChild={true}
        >
          <a href={`mailto:${email}`} aria-label={`Envoyer un email à ${email}`}>
            <MailIcon className="size-4" aria-hidden="true" />
            {email}
          </a>
        </Button>
      )}
      {tel && (
        <Button
          variant="outline"
          size="sm"
          className="h-9 gap-1.5 px-3 text-sm font-medium"
          asChild={true}
        >
          <a href={`tel:${tel.replace(/\s/g, "")}`} aria-label={`Appeler le ${tel}`}>
            <PhoneIcon className="size-4" aria-hidden="true" />
            {tel}
          </a>
        </Button>
      )}
    </div>
  );
}

interface PersonalInfoBadgesProps {
  personalInfo: typeof RESUME_DATA.personalInfo;
}

/**
 * Infos personnelles condensées, visibles en haut, sans titre de section.
 */
function PersonalInfoBadges({ personalInfo }: PersonalInfoBadgesProps) {
  if (personalInfo.length === 0) return null;

  return (
    <ul
      className="flex list-none flex-wrap gap-1 pt-1"
      aria-label="Informations personnelles"
    >
      {personalInfo.map((info) => (
        <li key={info}>
          <Badge
            variant="secondary"
            className="font-normal print:text-[10px]"
            aria-label={info}
          >
            {info}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ContactButtonsProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
  return (
    <ul
      className="flex list-none gap-x-1 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      aria-label="Liens externes"
    >
      {personalWebsiteUrl && (
        <li>
          <SocialButton
            href={personalWebsiteUrl}
            iconType="globe"
            label="Portfolio"
          />
        </li>
      )}
      {contact.social.map((social) => (
        <li key={social.name}>
          <SocialButton
            href={social.url}
            iconType={social.icon}
            label={social.name}
          />
        </li>
      ))}
    </ul>
  );
}

interface PrintContactProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
  return (
    <div className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px]">
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.tel && (
        <a
          className="underline hover:text-foreground/70"
          href={`tel:${contact.tel}`}
        >
          {contact.tel}
        </a>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-3xl font-bold tracking-tight" id="resume-name">
          {RESUME_DATA.name}
        </h1>
        <p className="max-w-md text-pretty font-mono text-sm text-foreground/80 print:text-[12px]">
          {RESUME_DATA.about}
        </p>

        <LocationLink
          location={RESUME_DATA.location}
          locationLink={RESUME_DATA.locationLink}
        />

        <PrimaryContact
          email={RESUME_DATA.contact.email}
          tel={RESUME_DATA.contact.tel}
        />

        <ContactButtons
          contact={RESUME_DATA.contact}
          personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
        />

        <PersonalInfoBadges personalInfo={RESUME_DATA.personalInfo} />

        <PrintContact
          contact={RESUME_DATA.contact}
          personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
        />
      </div>

      <Avatar
        className="size-28 ring-1 ring-muted"
        src={RESUME_DATA.avatarUrl}
        alt={`${RESUME_DATA.name}'s profile picture`}
        fallback={RESUME_DATA.initials}
      />
    </header>
  );
}
