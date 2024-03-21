import { VarGroup } from '@stylexjs/stylex';

type TColors = Readonly<{
  peri_50: string;
  peri_100: string;
  peri_200: string;
  peri_300: string;
  peri_400: string;
  peri_500: string;
  peri_600: string;
  peri_700: string;
  peri_800: string;
  peri_900: string;
  indigo_50: string;
  indigo_100: string;
  indigo_200: string;
  indigo_300: string;
  indigo_400: string;
  indigo_500: string;
  indigo_600: string;
  indigo_700: string;
  indigo_800: string;
  indigo_900: string;
  blue_50: string;
  blue_100: string;
  blue_200: string;
  blue_300: string;
  blue_400: string;
  blue_500: string;
  blue_600: string;
  blue_700: string;
  blue_800: string;
  blue_900: string;
  teal_50: string;
  teal_100: string;
  teal_200: string;
  teal_300: string;
  teal_400: string;
  teal_500: string;
  teal_600: string;
  teal_700: string;
  teal_800: string;
  teal_900: string;
  green_50: string;
  green_100: string;
  green_200: string;
  green_300: string;
  green_400: string;
  green_500: string;
  green_600: string;
  green_700: string;
  green_800: string;
  green_900: string;
  yellow_50: string;
  yellow_100: string;
  yellow_200: string;
  yellow_300: string;
  yellow_400: string;
  yellow_500: string;
  yellow_600: string;
  yellow_700: string;
  yellow_800: string;
  yellow_900: string;
  orange_50: string;
  orange_100: string;
  orange_200: string;
  orange_300: string;
  orange_400: string;
  orange_500: string;
  orange_600: string;
  orange_700: string;
  orange_800: string;
  orange_900: string;
  red_50: string;
  red_100: string;
  red_200: string;
  red_300: string;
  red_400: string;
  red_500: string;
  red_600: string;
  red_700: string;
  red_800: string;
  red_900: string;
  pink_50: string;
  pink_100: string;
  pink_200: string;
  pink_300: string;
  pink_400: string;
  pink_500: string;
  pink_600: string;
  pink_700: string;
  pink_800: string;
  pink_900: string;
  neutral_0: string;
  neutral_100: string;
  neutral_200: string;
  neutral_300: string;
  neutral_400: string;
  neutral_500: string;
  neutral_600: string;
  neutral_700: string;
  neutral_800: string;
  neutral_900: string;
  neutral_1000: string;
  neutral_1100: string;
}>;

type TColorsAlpha = Readonly<{
  neutral_100: string;
  neutral_200: string;
  neutral_300: string;
  neutral_400: string;
  neutral_500: string;
  neutral_600: string;
}>;

type TColorsFeedback = Readonly<{
  success: string;
  warning: string;
  critical: string;
  info: string;
}>;

type TColorsSymantic = Readonly<{
  brand: string;
  primary: string;
}>;

type TColorsDecorative = Readonly<{
  pink: string;
  orange: string;
  yellow: string;
  green: string;
  teal: string;
  blue: string;
}>;

type TColorsText = Readonly<{
  default: string;
  inverse: string;
  secondary: string;
  disabled: string;
  link: string;
  link_pressed: string;
}>;

type TColorsTextOn = Readonly<{
  primary: string;
  critical: string;
  warning: string;
  info: string;
  success: string;
  brand: string;
}>;

type TColorsIcon = Readonly<{
  default: string;
  inverse: string;
  secondary: string;
  disabled: string;
  success: string;
  warning: string;
  critical: string;
  info: string;
}>;

type TColorsBackground = Readonly<{
  neutral: string;
  neutral_hovered: string;
  neutral_pressed: string;
  disabled: string;
  input: string;
  brand: string;
  primary: string;
  primary_hovered: string;
  primary_pressed: string;
  critical: string;
  critical_hovered: string;
  critical_pressed: string;
}>;

type TColorsBorder = Readonly<{
  input: string;
  disabled: string;
  primary: string;
  critical: string;
}>;

type TColorsElevation = Readonly<{
  surface: string;
  background: string;
  raised_low: string;
  raised_medium: string;
  raised_high: string;
}>;

export declare const colors: VarGroup<TColors>;
export declare const colorsAlpha: VarGroup<TColorsAlpha>;
export declare const colorsFeedback: VarGroup<TColorsFeedback>;
export declare const colorsSymantic: VarGroup<TColorsSymantic>;
export declare const colorsDecorative: VarGroup<TColorsDecorative>;
export declare const colorsText: VarGroup<TColorsText>;
export declare const colorsTextOn: VarGroup<TColorsTextOn>;
export declare const colorsIcon: VarGroup<TColorsIcon>;
export declare const colorsBackground: VarGroup<TColorsBackground>;
export declare const colorsBorder: VarGroup<TColorsBorder>;
export declare const colorsElevation: VarGroup<TColorsElevation>;
