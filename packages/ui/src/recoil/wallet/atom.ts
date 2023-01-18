import { atom } from 'recoil';

export interface AtomState {
  openAuthorizeConnectionDialog: boolean;
  openInstallKeplrExtensionDialog: boolean;
  openLoginDialog: boolean;
  openLoginSuccessDialog: boolean;
  openPairConnectWalletDialog: boolean;
  openPairKeplrExtensionDialog: boolean;
  openSelectNetworkDialog: boolean;
  showWalletDetails: boolean;
  tabValue: number;
  walletConnectURI: string;
  walletSelection: string;
}

const initialState: AtomState = {
  openAuthorizeConnectionDialog: false,
  openInstallKeplrExtensionDialog: false,
  openLoginDialog: false,
  openLoginSuccessDialog: false,
  openPairConnectWalletDialog: false,
  openPairKeplrExtensionDialog: false,
  openSelectNetworkDialog: false,
  showWalletDetails: false,
  tabValue: 1,
  walletConnectURI: '',
  walletSelection: '',
};

export const atomState = atom<AtomState>({
  key: 'wallet',
  default: initialState,
});
