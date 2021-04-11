import { ThemeUIStyleObject } from 'theme-ui';

export const textVariants: Record<string, ThemeUIStyleObject> = {
  hero: {
    fontSize: 'hero',
    fontWeight: 'bold',
    lineHeight: 'heading',
  },
  h1: {
    fontSize: 'h1',
    fontWeight: 'bold',
    lineHeight: 'heading',
  },
  h2: {
    fontSize: 'h2',
    fontWeight: 'bold',
    lineHeight: 'heading',
  },
  h3: {
    fontSize: 'h3',
    fontWeight: 'bold',
    lineHeight: 'heading',
  },
  h4: {
    fontSize: 'h4',
    fontWeight: 'bold',
    lineHeight: 'heading',
  },
  subtitle: {
    fontSize: 'subtitle',
    fontWeight: 'semibold',
    lineHeight: 'heading',
  },
  body: {
    fontSize: 'body',
    fontWeight: 'regular',
    lineHeight: 'body',
  },
  eyebrow: {
    fontSize: 'eyebrow',
    fontWeight: 'medium',
    lineHeight: 'body',
    textTransform: 'uppercase',
  },
  small: {
    fontSize: 'small',
    fontWeight: 'regular',
    lineHeight: 'body',
  },
  mono: {
    fontFamily: 'mono',
  },
};

export const variants = {
  text: textVariants,
};
