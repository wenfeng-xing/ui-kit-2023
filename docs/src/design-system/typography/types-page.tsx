import { Divider, Grid, Typography, useTheme } from '@mui/material';
import { MERRIWEATHER, ROBOTO } from '@ui-kit-2022/theme';
import * as React from 'react';

import TopBar from '../building-blocks/common/top-bar';
import { FontExamples, TextSample, TypeCard } from '../building-blocks/typography';

const TYPE_CARD_REGULAR_PROPS = {
  title: 'REGULAR',
  letter: 'Aa',
  fontFamily: ROBOTO,
  fontWeight: '400',
  fontStyle: 'normal',
};

const TYPE_CARD_MEDIUM_PROPS = {
  ...TYPE_CARD_REGULAR_PROPS,
  title: 'MEDIUM',
  fontWeight: '500',
};

const TYPE_CARD_LIGHT_ITALIC_PROPS = {
  ...TYPE_CARD_REGULAR_PROPS,
  title: 'LIGHT ITALIC',
  fontWeight: '300',
  fontStyle: 'italic',
};

const TYPE_CARD_REGULAR_MERRIWEATHER_PROPS = {
  ...TYPE_CARD_REGULAR_PROPS,
  fontFamily: MERRIWEATHER,
};

const TypesPage: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Grid container>
      <Grid item xs={12}>
        <TopBar title={'TYPES'} />
      </Grid>
      <Grid
        container
        sx={{ marginLeft: '1rem', marginTop: '2rem', marginBottom: '5rem' }}
        rowGap={1}
      >
        <Grid item md={5} xs={12}>
          <TextSample fontName={ROBOTO} />
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TypeCard {...TYPE_CARD_REGULAR_PROPS} />
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TypeCard {...TYPE_CARD_MEDIUM_PROPS} />
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TypeCard {...TYPE_CARD_LIGHT_ITALIC_PROPS} />
        </Grid>
        <Grid item md={12} xs={12}>
          <Typography>Examples</Typography>
        </Grid>
        <Grid item xs={12}>
          <FontExamples fontName={ROBOTO} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider color={palette.common.white} variant="middle" />
      </Grid>
      <Grid
        container
        sx={{ marginLeft: '1rem', marginTop: '2rem', marginBottom: '3rem' }}
        rowGap={1}
      >
        <Grid item md={5} xs={12}>
          <TextSample fontName={MERRIWEATHER} />
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TypeCard {...TYPE_CARD_REGULAR_MERRIWEATHER_PROPS} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Examples</Typography>
        </Grid>
        <Grid item xs={12}>
          <FontExamples fontName={MERRIWEATHER} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TypesPage;
