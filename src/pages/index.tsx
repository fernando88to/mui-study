import React from 'react';
import type { NextPage } from 'next';
import { sleep } from '~/util/sleep';

const PageComponent: NextPage = () => {
  return <p>oi</p>;
};

export default PageComponent;

export async function getServerSideProps() {
  await sleep(1000);
  return {
    props: {},
  };
}
