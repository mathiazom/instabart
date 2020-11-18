/** @jsx jsx */
import { jsx } from 'theme-ui';

import Head from 'next/head';
import Card from '../components/card';

export default function IndexPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div sx={{ mt: 20, mx: 'auto', p: 3, maxWidth: '1410px' }}>
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
            gap: 3,
          }}
        >
          <Card heading="Blackboard" />
          <Card heading="Epost" />
          <Card heading="Timeplan" />
          <Card heading="Office 365" />
          <Card heading="Studweb" />
          <Card heading="Middag" />
          <Card heading="Mazemap" />
          <Card heading="Book rom" />
          <Card heading="Programvare" />
          <Card heading="Farm" />
          <Card heading="Karakterstat." />
          <Card heading="Trening" />
        </div>
      </div>
    </>
  );
}
