import { ThemeUIStyleObject } from 'theme-ui';

export const textVariants: Record<string, ThemeUIStyleObject> = {
  hero: {
    fontSize: 'hero',
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontFamily: 'body',
  },
  h1: {
    fontSize: 'h1',
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontFamily: 'body',
  },
  h2: {
    fontSize: 'h2',
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontFamily: 'body',
  },
  h3: {
    fontSize: 'h3',
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontFamily: 'body',
  },
  h4: {
    fontSize: 'h4',
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontFamily: 'body',
  },
  subtitle: {
    fontSize: 'subtitle',
    fontWeight: 'semibold',
    lineHeight: 'heading',
    fontFamily: 'body',
  },
  body: {
    fontSize: 'body',
    fontWeight: 'regular',
    lineHeight: 'body',
    fontFamily: 'body',
  },
  eyebrow: {
    fontSize: 'eyebrow',
    fontWeight: 'medium',
    lineHeight: 'body',
    textTransform: 'uppercase',
    fontFamily: 'body',
  },
  small: {
    fontSize: 'small',
    fontWeight: 'regular',
    lineHeight: 'body',
    fontFamily: 'body',
  },
  mono: {
    fontFamily: 'mono',
  },
};

export const variants = {
  text: textVariants,
};
