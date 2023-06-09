import { nanoid } from 'nanoid';
import * as React from 'react';
import { SvgIconProps } from '../../types/svgIcon';
import { useIconSize } from '../../hooks/useIconSize';

export function HeartIcon({ title, titleId = nanoid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 512" aria-labelledby={titleId} {...props}>
      {title === undefined ? <title id={titleId}>{'Heart'}</title> : title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M236.21 476.08C215.52 457.99 195.58 441 177.99 426l-.09-.07c-51.58-43.96-96.13-81.92-127.12-119.32C16.14 264.81 0 225.17 0 181.87c0-42.07 14.43-80.88 40.62-109.29C67.12 43.83 103.49 28 143.03 28c29.56 0 56.62 9.34 80.45 27.77 12.02 9.3 22.92 20.68 32.52 33.96 9.61-13.28 20.5-24.66 32.53-33.96C312.35 37.34 339.42 28 368.97 28c39.54 0 75.91 15.83 102.42 44.58C497.58 100.99 512 139.8 512 181.87c0 43.3-16.13 82.94-50.78 124.74-30.99 37.4-75.53 75.35-127.1 119.31-17.63 15.01-37.6 32.04-58.33 50.17a30.08 30.08 0 01-19.79 7.43c-7.29 0-14.32-2.64-19.79-7.44zM62.66 92.91c-21.07 22.85-32.67 54.45-32.67 88.96 0 36.42 13.53 68.99 43.88 105.61 29.33 35.39 72.96 72.57 123.48 115.62l.09.08c17.66 15.05 37.68 32.11 58.52 50.33 20.96-18.25 41.01-35.34 58.7-50.42 50.52-43.05 94.14-80.22 123.47-115.61 30.35-36.62 43.88-69.19 43.88-105.61 0-34.51-11.6-66.11-32.67-88.96-20.76-22.52-49.3-34.92-80.37-34.92-22.76 0-43.65 7.24-62.1 21.5-16.44 12.72-27.89 28.8-34.61 40.05-3.45 5.78-9.53 9.24-16.26 9.24-6.73 0-12.81-3.46-16.26-9.24-6.71-11.25-18.17-27.33-34.61-40.05-18.45-14.26-39.34-21.5-62.1-21.5-31.07 0-59.6 12.4-80.37 34.92z"
      />
    </svg>
  );
}

HeartIcon.displayName = 'HeartIcon';
