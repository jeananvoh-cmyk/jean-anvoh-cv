import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

interface LanguagesProps {
  languages: typeof RESUME_DATA.languages;
  personalInfo: typeof RESUME_DATA.personalInfo;
  className?: string;
}

/**
 * Langues & informations personnelles — affichées côte à côte.
 */
export function Languages({
  languages,
  personalInfo,
  className,
}: LanguagesProps) {
  return (
    <Section className={cn(className)}>
      <h2 className="text-xl font-bold" id="languages-section">
        Langues & informations
      </h2>
      <div className="flex flex-col gap-3">
        <ul
          className="flex list-none flex-wrap gap-1 p-0"
          aria-label="Langues parlées"
        >
          {languages.map((language) => (
            <li key={language.name}>
              <Badge
                className="print:text-[10px]"
                aria-label={`${language.name} : ${language.level}`}
              >
                {language.name} — {language.level}
              </Badge>
            </li>
          ))}
        </ul>
        <ul
          className="flex list-none flex-wrap gap-1 p-0"
          aria-label="Informations personnelles"
        >
          {personalInfo.map((info) => (
            <li key={info}>
              <Badge
                variant="secondary"
                className="print:text-[10px]"
                aria-label={info}
              >
                {info}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
