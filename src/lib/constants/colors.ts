export const COLOR_PRIMARY = "#dc2626";

export const COLOR_BLACK = "#000000";
export const COLOR_BLACK_SOFT = "#0f0f0f";
export const COLOR_BLACK_MUTED = "#1a1a1a";
export const COLOR_BLACK_LIGHT = "#2a2a2a";

export const COLOR_GRAY_600 = "#6b7280";

export const COLOR_WHITE = "#ffffff";
export const COLOR_WHITE_SOFT = "#f9fafb";
export const COLOR_WHITE_MUTED = "#f3f4f6";
export const COLOR_WHITE_LIGHT = "#e5e7eb";

export const COLOR_THEME_GREEN = "#17AA5C";

export const DASHBOARD_THEME = {

  bg: {
    primary: COLOR_PRIMARY,
    primarySoft: COLOR_PRIMARY + "1a",
    page: COLOR_WHITE_SOFT,
    card: COLOR_WHITE,
    cardAlt: COLOR_WHITE_MUTED,
    muted: COLOR_WHITE_LIGHT,
    dark: COLOR_BLACK_MUTED,
    success: COLOR_THEME_GREEN + "1a",
    successSolid: COLOR_THEME_GREEN,
  },

  text: {
    onPrimary: COLOR_WHITE,
    primary: COLOR_PRIMARY,
    default: COLOR_BLACK_MUTED,
    heading: COLOR_BLACK,
    muted: COLOR_GRAY_600,
    subtle: COLOR_WHITE_LIGHT,
    onDark: COLOR_WHITE,
    success: COLOR_THEME_GREEN,
  },

  ui: {
    border: COLOR_WHITE_LIGHT,
    borderDark: COLOR_GRAY_600,
    focusRing: COLOR_PRIMARY,
    divider: COLOR_WHITE_MUTED,
  },

} as const;

export type DashboardTheme = typeof DASHBOARD_THEME;

export const COLORS = {
  primary: COLOR_PRIMARY,
  black: COLOR_BLACK,
  blackSoft: COLOR_BLACK_SOFT,
  blackMuted: COLOR_BLACK_MUTED,
  blackLight: COLOR_BLACK_LIGHT,
  gray600: COLOR_GRAY_600,
  white: COLOR_WHITE,
  whiteSoft: COLOR_WHITE_SOFT,
  whiteMuted: COLOR_WHITE_MUTED,
  whiteLight: COLOR_WHITE_LIGHT,
  themeGreen: COLOR_THEME_GREEN,
} as const;

export type ColorKey = keyof typeof COLORS;
export type ColorValue = (typeof COLORS)[ColorKey];

