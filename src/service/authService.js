import { useSelector } from 'react-redux';

const LoginReducer = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  return isLoggedIn;
};

export default LoginReducer;