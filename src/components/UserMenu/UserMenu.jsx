import { useSelector } from 'react-redux';
export const UserMenu = () => {
  const { email } = useSelector(state => state.auth.user.email);
  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
};
