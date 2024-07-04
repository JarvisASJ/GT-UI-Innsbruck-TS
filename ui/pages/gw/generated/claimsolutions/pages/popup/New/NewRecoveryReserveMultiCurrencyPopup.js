import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewRecoveryReserveMultiCurrencyPopup {
	newRecoveryReserveMultiCurrencyPopupScreenCancel = PcfButton('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopupScreen-Cancel');
	newRecoveryReserveMultiCurrencyPopupScreenEdit = PcfButton('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopupScreen-Edit');
	newRecoveryReserveMultiCurrencyPopupScreenEditableMultiCurrencyRecoveryReservesLV = PcfListView('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopupScreen-EditableMultiCurrencyRecoveryReservesLV');
	transactionEditWrapperExchangeRateInputSetDate = PcfDateValueInput('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopupScreen-TransactionEditWrapperExchangeRateInputSet-Date');
	transactionEditWrapperExchangeRateInputSetDescription = PcfTextInput('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopupScreen-TransactionEditWrapperExchangeRateInputSet-Description');
	transactionEditWrapperExchangeRateInputSetExchangeRate = PcfTextInput('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopupScreen-TransactionEditWrapperExchangeRateInputSet-ExchangeRate');
	transactionEditWrapperExchangeRateInputSetManualOrAutomatic = PcfComponent('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopupScreen-TransactionEditWrapperExchangeRateInputSet-ManualOrAutomatic');
	newRecoveryReserveMultiCurrencyPopupScreenUpdate = PcfButton('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopupScreen-Update');
	newRecoveryReserveMultiCurrencyPopupScreen_msgs = PcfButton('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopupScreen-_msgs');
	newRecoveryReserveMultiCurrencyPopupNewRecoveryReserveMultiCurrencyPopup_UpLink = PcfButton('#NewRecoveryReserveMultiCurrencyPopup-NewRecoveryReserveMultiCurrencyPopup_UpLink');
	newRecoveryReserveMultiCurrencyPopup_Paging = PcfButton('#NewRecoveryReserveMultiCurrencyPopup-_Paging');
	newRecoveryReserveMultiCurrencyPopup__crumb__ = PcfComponent('#NewRecoveryReserveMultiCurrencyPopup-__crumb__');
}