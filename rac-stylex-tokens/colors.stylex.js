import { defineVars } from '@stylexjs/stylex';

export const colors = defineVars({
  peri_50: "#dce0ff",
  peri_100: "#b9c1ff",
  peri_200: "#97a3fe",
  peri_300: "#7484fe",
  peri_400: "#6274fe",
  peri_500: "#5165fe",
  peri_600: "#495be5",
  peri_700: "#3947b2",
  peri_800: "#29337f",
  peri_900: "#181e4c",
  indigo_50: "#d7d0df",
  indigo_100: "#afa1bf",
  indigo_200: "#8871a0",
  indigo_300: "#604280",
  indigo_400: "#4c2b70",
  indigo_500: "#381360",
  indigo_600: "#321156",
  indigo_700: "#270d43",
  indigo_800: "#1c0a30",
  indigo_900: "#11061d",
  blue_50: "#d0eeff",
  blue_100: "#a2ddff",
  blue_200: "#73cdff",
  blue_300: "#45bcff",
  blue_400: "#2db3ff",
  blue_500: "#16abff",
  blue_600: "#149ae6",
  blue_700: "#0f78b3",
  blue_800: "#0b5680",
  blue_900: "#07334d",
  teal_50: "#ccf1f5",
  teal_100: "#99e3eb",
  teal_200: "#66d6e0",
  teal_300: "#33c8d6",
  teal_400: "#1ac1d1",
  teal_500: "#00bacc",
  teal_600: "#00a7b8",
  teal_700: "#00828f",
  teal_800: "#005d66",
  teal_900: "#00383d",
  green_50: "#e3f5db",
  green_100: "#c7ebb7",
  green_200: "#abe092",
  green_300: "#8fd66e",
  green_400: "#81d15c",
  green_500: "#73cc4a",
  green_600: "#68b843",
  green_700: "#518f34",
  green_800: "#3a6625",
  green_900: "#233d16",
  yellow_50: "#fef2cc",
  yellow_100: "#fde699",
  yellow_200: "#fdd966",
  yellow_300: "#fccd33",
  yellow_400: "#fbc61a",
  yellow_500: "#fbc000",
  yellow_600: "#e2ad00",
  yellow_700: "#b08600",
  yellow_800: "#7e6000",
  yellow_900: "#4b3a00",
  orange_50: "#ffebce",
  orange_100: "#ffd89d",
  orange_200: "#ffc46b",
  orange_300: "#ffb13a",
  orange_400: "#ffa722",
  orange_500: "#ff9d09",
  orange_600: "#e68d08",
  orange_700: "#b36e06",
  orange_800: "#804f05",
  orange_900: "#4d2f03",
  red_50: "#fbcfd2",
  red_100: "#f79fa5",
  red_200: "#f27079",
  red_300: "#ee404c",
  red_400: "#ec2835",
  red_500: "#ea101f",
  red_600: "#d30e1c",
  red_700: "#a40b16",
  red_800: "#750810",
  red_900: "#460509",
  pink_50: "#f9d8ed",
  pink_100: "#f3b2db",
  pink_200: "#ed8bca",
  pink_300: "#e765b8",
  pink_400: "#e451af",
  pink_500: "#e13ea6",
  pink_600: "#cb3895",
  pink_700: "#9e2b74",
  pink_800: "#711f53",
  pink_900: "#441332",
  neutral_0: "#ffffff",
  neutral_100: "#f8f8f9",
  neutral_200: "#f3f2f4",
  neutral_300: "#e6e3e8",
  neutral_400: "#dad7de",
  neutral_500: "#cec9d3",
  neutral_600: "#c2bcc8",
  neutral_700: "#aba5b1",
  neutral_800: "#89848e",
  neutral_900: "#67636a",
  neutral_1000: "#444247",
  neutral_1100: "#1a191b",
});

export const colorsAlpha = defineVars({
  neutral_100: "rgba(22, 22, 55, 0.03)",
  neutral_200: "rgba(56, 39, 73, 0.06)",
  neutral_300: "rgba(28, 0, 46, 0.11)",
  neutral_400: "rgba(25, 5, 51, 0.16)",
  neutral_500: "rgba(32, 10, 56, 0.22)",
  neutral_600: "rgba(28, 7, 49, 0.27)"
});

export const colorsFeedback = defineVars({
  success: colors.green_500,
  warning: colors.yellow_500,
  critical: colors.red_500,
  info: colors.teal_500
});

export const colorsSymantic = defineVars({
  brand: colors.indigo_500,
  primary: colors.peri_500,
});

export const colorsDecorative = defineVars({
  pink: colors.pink_500,
  orange: colors.orange_500,
  yellow: colors.yellow_500,
  green: colors.green_500,
  teal: colors.teal_500,
  blue: colors.blue_500
});

export const colorsText = defineVars({
  default: colors.neutral_1100,
  inverse: colors.neutral_0,
  secondary: colors.neutral_900,
  disabled: colorsAlpha.neutral_600,
  link: colors.peri_600,
  link_pressed: colors.peri_700
});

export const colorsTextOn = defineVars({
  primary: colorsText.inverse,
  critical: colorsText.inverse,
  warning: colorsText.text,
  info: colorsText.text,
  success: colorsText.text,
  brand: colorsText.inverse
});

export const colorsIcon = defineVars({
  default: colors.neutral_1100,
  inverse: colors.neutral_0,
  secondary: colors.neutral_900,
  disabled: colorsAlpha.neutral_600,
  success: colorsFeedback.success,
  warning: colorsFeedback.warning,
  critical: colorsFeedback.critical,
  info: colorsFeedback.info
});

export const colorsBackground = defineVars({
  neutral: colors.neutral_0,
  neutral_hovered: colors.neutral_200,
  neutral_pressed: colors.neutral_300,
  disabled: colorsAlpha.neutral_200,
  input: colors.neutral_0,
  brand: colors.indigo_500,
  primary: colors.primary,
  primary_hovered: colors.peri_600,
  primary_pressed: colors.peri_700,
  critical: colorsFeedback.critical,
  critical_hovered: colors.red_600,
  critical_pressed: colors.red_700
});

export const colorsBorder = defineVars({
  input: colors.neutral_800,
  disabled: colorsAlpha.neutral_400,
  primary: colors.peri_500,
  critical: colorsFeedback.critical
});

export const colorsElevation = defineVars({
  surface: colors.neutral_0,
  background: colors.neutral_100,
  raised_low: colors.neutral_0,
  raised_medium: colors.neutral_0,
  raised_high: colors.neutral_0
});