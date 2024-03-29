import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from 'react-aria-components';
import { useFocusRing } from 'react-aria';
import * as stylex from '@stylexjs/stylex';

import { colors } from '@bmcwebdev/rac-stylex-tokens/colors.stylex';
import { styleXFocusRing } from './utils';

export interface ButtonProps extends RACButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive' | 'icon';
}

export const DARK = '@media (prefers-color-scheme: dark)';
const buttonStyle = stylex.create({
  base: {
    padding: '0.5rem 1.25rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    textAlign: 'center',
    transitionProperty:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    transitionDuration: '150ms',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '0.5rem',
    borderWidth: '1px',
    borderColor: { default: 'rgba(0, 0, 0, 0.1)', [DARK]: 'rgba(255, 255, 255, 0.1)' },
    boxShadow: {
      default: 'inset 0 1px 0 0 rgba(255,255,255,0.1)',
      [DARK]: 'none',
    },
    cursor: 'default',
  },
});
const variants = stylex.create({
  primary: {
    backgroundColor: {
      default: colors.peri_500,
      ':hover': {
        default: '#1D4ED8',
        ':is([data-pressed])': '#1E40AF',
      },
    },
    color: 'white',
  },
  secondary: {
    backgroundColor: {
      default: '#F3F4F6',
      ':hover': {
        default: '#E5E7EB',
        ':is([data-pressed])': {
          default: '#D1D5DB',
        },
      },
      [DARK]: {
        default: '#4B5563',
        ':hover': {
          default: '#71717a',
          ':is([data-pressed])': {
            default: '#a1a1aa',
          },
        },
      },
    },
    color: {default: '#1F2937', [DARK]: '#F4F4F5',}
  },
  destructive: {
    backgroundColor: {
      default: '#B91C1C',
      ':hover': {
        default: '#991B1B',
        ':is([data-pressed])': '#7F1D1D',
      },
    },
    color: 'white',
  },
  icon: {
    borderWidth: '0px',
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: {default: '#4B5563', [DARK]: '#9ca3af'},
    backgroundColor: {
      default: 'transparent',
      ':hover': {
        default: 'rgba(0, 0, 0, 0.05)',
        ':is([data-pressed])': 'rgba(0, 0, 0, 0.1)',
      },
      [DARK]: {
        ':hover': {
          default: 'rgba(255, 255, 255, 0.1)',
          ':is([data-pressed])': 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
  },
});
const disabled = stylex.create({
  base: {
    backgroundColor: {
      default: '#F3F4F6',
      [DARK]: {
        default: '#27272a',
      },
    },
    color: {default: '#D1D5DB', [DARK]: '#52525B'},
    borderColor: {default: 'rgba(0, 0, 0, 0.05)', [DARK]: 'rgba(255, 255, 255, 0.05)'},
  },
});

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  const variantStyles = variant ? variants[variant] : undefined;
  const { isFocusVisible, focusProps } = useFocusRing();
  return (
    <RACButton
      {...props}
      {...(focusProps as any)}
      {...stylex.props(
        buttonStyle.base,
        variantStyles,
        isFocusVisible && styleXFocusRing.base,
        props.isDisabled && disabled.base,
      )}
    />
  );
}
