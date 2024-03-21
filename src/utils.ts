import * as stylex from '@stylexjs/stylex';

export const DARK = '@media (prefers-color-scheme: dark)';

export const focusRing = stylex.create({
  base: {
    outline: {
      ':is([data-focused])': {
        default: '2px solid #2563EB',
        [DARK]: '2px solid #3B82F6',
      },
    },
    outlineOffset: '0.5rem',
  },
})
