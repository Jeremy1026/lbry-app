import { connect } from 'react-redux';
import {
  doSendDraftTransaction,
  doSetDraftTransactionAmount,
  doSetDraftTransactionAddress,
  selectDraftTransactionAmount,
  selectDraftTransactionAddress,
  selectDraftTransactionError,
} from 'lbry-redux';

import WalletSend from './view';

const select = state => ({
  address: selectDraftTransactionAddress(state),
  amount: selectDraftTransactionAmount(state),
  error: selectDraftTransactionError(state),
});

const perform = dispatch => ({
  sendToAddress: () => dispatch(doSendDraftTransaction()),
  setAmount: event => dispatch(doSetDraftTransactionAmount(event.target.value)),
  setAddress: event => dispatch(doSetDraftTransactionAddress(event.target.value)),
});

export default connect(select, perform)(WalletSend);
