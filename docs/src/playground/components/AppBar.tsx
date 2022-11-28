import { Box, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Logo, LogoFull, LogoText } from '@ui-kit-2022/components';

const AppBar = () => {
  const theme = useTheme();
  const logoContainerStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    margin: `${theme.spacing(6)} 0`,
  };

  const appBarStyling = {
    display: 'flex',
    justifyContent: 'center',
    background:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
    width: '129px',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'min-content',
      padding: `${theme.spacing(5)} 0`,
    },
  };

  return (
    <Box sx={{ ...appBarStyling }}>
      {useMediaQuery(theme.breakpoints.up('md')) ? (
        <Box sx={{ ...logoContainerStyling }}>
          <Logo variant="large" />
          <LogoText width={63} height={23} />
        </Box>
      ) : (
        <LogoFull height={53} width={153} />
      )}
    </Box>
  );
};

export default AppBar;
