/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function Heading({ children }) {
  return (
    <h2
      sx={{
        color: 'gray.800',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '2vw',
        marginTop: '1vw',

        ':hover': {
          color: 'red.500',
        },
      }}
    >
      {children}
    </h2>
  );
}
