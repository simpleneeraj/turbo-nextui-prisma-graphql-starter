'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

type Props = {
  theme?: string;
} & React.ComponentProps<typeof NextUIProvider>;

const NextUI = ({
  children,
  theme: t,
  ...rest
}: React.PropsWithChildren<Props>) => {
  const { theme = t } = useTheme();

  return (
    <NextUIProvider {...rest}>
      <NextThemesProvider attribute="class" defaultTheme={theme}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};
export default NextUI;
