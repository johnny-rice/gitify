import { Stack } from '@primer/react';
import type { FC, ReactNode } from 'react';

interface ICentered {
  children: ReactNode;
  fullHeight?: boolean;
}

export const Centered: FC<ICentered> = ({
  fullHeight = true,
  ...props
}: ICentered) => {
  return (
    <Stack
      direction="vertical"
      align="center"
      justify="center"
      padding="spacious"
      className={fullHeight && 'h-screen'}
    >
      {props.children}
    </Stack>
  );
};
