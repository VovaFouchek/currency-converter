import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { getCurrencies } from '@/redux/currencies/selectors';

const Header = () => {
  const { currencies } = useSelector(getCurrencies);

  const currentRateEuro = currencies.UAH?.toFixed(2) || '0.00';
  const valueUSD = currencies.UAH * currencies.USD || 0;
  const currentRateUSD = valueUSD?.toFixed(2);

  return (
    <AppBar position="static" sx={{ background: 'rgb(8, 157, 39)' }}>
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          color="inherit"
          component="p"
          sx={{ marginRight: '10px' }}
        >
          Current exchange rate:
        </Typography>
        <Typography variant="h6" color="inherit" component="strong">
          €{currentRateEuro} ${currentRateUSD}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
