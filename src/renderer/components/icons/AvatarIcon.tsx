import type { Icon } from '@primer/octicons-react';
import type { FC } from 'react';
import { Size } from '../../types';
import { cn } from '../../utils/cn';

export interface IAvatarIcon {
  title: string;
  url: string | null;
  size: Size.XSMALL | Size.SMALL | Size.MEDIUM;
  defaultIcon: Icon;
}

export const AvatarIcon: FC<IAvatarIcon> = (props: IAvatarIcon) => {
  if (props.url) {
    return (
      <img
        className={cn(
          'rounded-full object-cover',
          props.size === Size.XSMALL && 'size-4',
          props.size === Size.SMALL && 'size-5',
          props.size === Size.MEDIUM && 'size-6',
        )}
        src={props.url}
        alt={`${props.title}'s avatar`}
      />
    );
  }

  const defaultIconSize =
    props.size === Size.XSMALL ? 16 : props.size === Size.SMALL ? 20 : 24;

  return (
    <props.defaultIcon
      size={defaultIconSize}
      className="text-gray-500 dark:text-gray-300"
    />
  );
};
