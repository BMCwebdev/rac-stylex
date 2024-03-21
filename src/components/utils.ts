import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import * as stylex from '@stylexjs/stylex';

export const focusRing = tv({
  base: 'outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2',
    },
  },
});

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}

const DARK = '@media (prefers-color-scheme: dark)';

export const styleXFocusRing = stylex.create({
  base: {
    outline: {
      ':is([data-focused])': '2px solid #2563EB',
      [DARK]: {
        ':is([data-focused])': '2px solid #3B82F6',
      },
    },
    outlineOffset: '0.5rem',
  },
})
