import React from 'react';

import { Button } from '@mui/material';
import type { NextPage } from 'next';

//import { sleep } from '~/util/sleep';

const PageComponent: NextPage = () => {
  return <Button variant="contained">Go to the main page</Button>;
};

export default PageComponent;

export async function getServerSideProps() {
  //await sleep(1000);
  return {
    props: {},
  };
}
