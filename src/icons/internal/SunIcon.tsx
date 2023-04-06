import { nanoid } from 'nanoid';
import * as React from 'react';
import { SvgIconProps } from '../../types/svgIcon';
import { useIconSize } from '../../hooks/useIconSize';

export function SunIcon({ title, titleId = nanoid(), ...initProps }: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384" aria-labelledby={titleId} {...props}>
      {title === undefined ? <title id={titleId}>{'Sun'}</title> : title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M101.49 78.86L78.86 56.24c-6.24-6.25-16.38-6.25-22.62 0-6.25 6.25-6.25 16.38 0 22.62l22.62 22.63c3.12 3.13 7.22 4.69 11.32 4.69 4.09 0 8.19-1.56 11.31-4.69 6.25-6.25 6.25-16.38 0-22.63zM48 176H16c-8.83 0-16 7.17-16 16s7.17 16 16 16h32c8.83 0 16-7.17 16-16s-7.17-16-16-16zM101.49 282.51c-6.24-6.25-16.39-6.25-22.63 0l-22.62 22.63c-6.25 6.24-6.25 16.37 0 22.62 3.12 3.13 7.22 4.69 11.31 4.69 4.1 0 8.19-1.56 11.31-4.69l22.63-22.62c6.25-6.25 6.25-16.38 0-22.63zM192 320c-8.83 0-16 7.17-16 16v32c0 8.83 7.17 16 16 16s16-7.17 16-16v-32c0-8.83-7.17-16-16-16zM327.76 305.14l-22.62-22.63c-6.24-6.25-16.39-6.25-22.63 0-6.25 6.25-6.25 16.38 0 22.63l22.63 22.62c3.12 3.13 7.21 4.69 11.31 4.69 4.09 0 8.19-1.56 11.31-4.69 6.25-6.25 6.25-16.38 0-22.62zM368 176h-32c-8.83 0-16 7.17-16 16s7.17 16 16 16h32c8.83 0 16-7.17 16-16s-7.17-16-16-16zM327.76 56.24c-6.24-6.25-16.38-6.25-22.62 0l-22.63 22.62c-6.25 6.25-6.25 16.38 0 22.63 3.12 3.13 7.22 4.69 11.31 4.69 4.1 0 8.2-1.56 11.32-4.69l22.62-22.63c6.25-6.24 6.25-16.37 0-22.62zM192 0c-8.83 0-16 7.17-16 16v32c0 8.83 7.17 16 16 16s16-7.17 16-16V16c0-8.83-7.17-16-16-16zM296 192c0 57.34-46.66 104-104 104S88 249.34 88 192 134.66 88 192 88s104 46.66 104 104zm-32 0c0-39.7-32.3-72-72-72s-72 32.3-72 72 32.3 72 72 72 72-32.3 72-72z"
      />
    </svg>
  );
}

SunIcon.displayName = 'SunIcon';
