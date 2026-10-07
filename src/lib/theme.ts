export interface SiteTheme {
  colorPrimary: string;
  colorSecondary: string;
  colorBg: string;
  colorBgCard: string;
  colorHeading: string;
  colorText: string;
  colorTextMuted: string;
  colorTextOnPrimary: string;
}

export const DEFAULT_THEME: SiteTheme = {
  colorPrimary: "#256B3A",
  colorSecondary: "#17AA5C",

  colorBg: "#f8fafc",
  colorBgCard: "#ffffff",

  colorHeading: "#111827",
  colorText: "#374151",
  colorTextMuted: "#6b7280",

  colorTextOnPrimary: "#ffffff",
};

const CSS_VAR_MAP: Record<keyof SiteTheme, string> = {
  colorPrimary: "--theme-primary",
  colorSecondary: "--theme-secondary",
  colorBg: "--theme-bg",
  colorBgCard: "--theme-bg-card",
  colorHeading: "--theme-heading",
  colorText: "--theme-text",
  colorTextMuted: "--theme-text-muted",
  colorTextOnPrimary: "--theme-text-on-primary",
};

export function themeToStyleVars(theme: SiteTheme): Record<string, string> {
  return Object.fromEntries(
    (Object.keys(theme) as (keyof SiteTheme)[]).map((key) => [
      CSS_VAR_MAP[key],
      theme[key],
    ])
  );
}

export async function fetchSiteTheme(): Promise<SiteTheme> {
  try {
    const res = await fetch(
      process.env.THEME_API_URL ?? "https://your-dashboard.com/api/theme",
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) throw new Error(`Theme API returned ${res.status}`);

    const data = await res.json();

    return { ...DEFAULT_THEME, ...data };
  } catch (err) {
    console.warn("[theme] Could not fetch theme, using defaults.", err);
    return DEFAULT_THEME;
  }
}
