import { useNavigate } from 'react-router-dom';
import { goBack } from '../assets/icon';

export function handleGoBack() {
  const navigate = useNavigate();

  navigate(-1);
  return (
    <span className=" flex flex-flex-row" onClick={() => handleGoBack()}>
      {goBack()}
    </span>
  );
}
