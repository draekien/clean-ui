import { useState, useEffect } from 'react';

export const useDynamicIcon = (icon?: string) => {
  const [state, setState] = useState(icon);

  useEffect(() => {
    setState(icon);
  }, [icon]);

  return { icon: state };
};
