/** @jsx jsx */
import { jsx } from 'theme-ui';

import Heading from './heading';
import Icon from './icon';

export default function Card({ heading }) {
  return (
    <div
      sx={{
        position: 'relative',
        bg: 'white',
        width: '100%',
        pb: '100%',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <div
        sx={{
          position: 'absolute',
          width: 'full',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <Heading>{heading}</Heading>
          <Icon />
        </div>
      </div>
    </div>
  );
}
