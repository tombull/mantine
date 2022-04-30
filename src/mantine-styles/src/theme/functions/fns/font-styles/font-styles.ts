import type { MantineThemeBase } from '../../../types';
import type { CSSObject } from '../../../../tss';

export function fontStyles(theme: MantineThemeBase) {
  if (theme.fontSmoothing == 'custom') {
    return (): CSSObject => ({
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: theme.fontFamily || 'sans-serif',
    });
  }
  return (): CSSObject => ({
    fontFamily: theme.fontFamily || 'sans-serif',
  });
}
