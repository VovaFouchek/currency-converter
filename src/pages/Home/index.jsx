import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ErrorMessage from '@/components/ErrorMessage';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { fetchCurrencies } from '@/redux/currencies/action';
import { getCurrencies } from '@/redux/currencies/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getCurrencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      {!isLoading && error ? <ErrorMessage message={error} /> : null}
    </>
  );
};

export default Home;
