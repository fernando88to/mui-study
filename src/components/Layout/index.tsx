import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { NextPage } from 'next';

const THEME = createMuiTheme();
const userStyle = makeStyles((theme: any) => ({
  root: {
    background: THEME.palette.primary.dark,
    display: 'flex',
  },
}));

type Props = {
  // JSX.Element not permit string
  // or React.ReactChild permit string ;
  // or ReactNode permit all
  children: React.ReactChild;
};
export const IndexPage: NextPage<Props> = ({ children }: Props) => {
  const classes = userStyle();
  return (
    <div id="pai" className={classes.root}>
      {children}
    </div>
  );
};

export default IndexPage;
