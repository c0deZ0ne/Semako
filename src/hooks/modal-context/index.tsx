import { createContext,ReactElement} from 'react';
import AppModal from './modal/Modal';
import AppLoading from '../appStatus-context/appStatus-context';
import AppNotification from '../notification-context/appNotification';
export const ModalContext = createContext<null>(null);

export const ModalProvider = ({
  children
}: {
  [key: string]: ReactElement;
}) => {
  return (
    <ModalContext.Provider
      value={null}
    >
      <>
      <AppNotification/>
        {children}{' '}
        <AppLoading/>
        <AppModal/>
      </>
    </ModalContext.Provider>
  );
};
