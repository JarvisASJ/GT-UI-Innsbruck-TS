import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountSummaryPopup {
	accountSummaryPopupAccountSummaryPopup_UpLink = PcfButton('#AccountSummaryPopup-AccountSummaryPopup_UpLink');
	accountSummaryPopupAccountSummaryScreenAccountDetailSummary_DelinquencyAlertAlertBar = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-AccountDetailSummary_DelinquencyAlertAlertBar');
	accountSummaryPopupAccountSummaryScreenAccountDetailSummary_DelinquencyAlertAlertBarCloseBtn = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-AccountDetailSummary_DelinquencyAlertAlertBar-CloseBtn');
	accountSummaryPopupAccountSummaryScreenAccountDetailSummary_PreDueAlertBar = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-AccountDetailSummary_PreDueAlertBar');
	accountSummaryPopupAccountSummaryScreenAccountDetailSummary_PreDueAlertBarCloseBtn = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-AccountDetailSummary_PreDueAlertBar-CloseBtn');
	accountSummaryPopupAccountSummaryScreenAccountDetailSummary_TroubleTicketAlertAlertBar = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-AccountDetailSummary_TroubleTicketAlertAlertBar');
	accountSummaryPopupAccountSummaryScreenAccountDetailSummary_TroubleTicketAlertAlertBarCloseBtn = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-AccountDetailSummary_TroubleTicketAlertAlertBar-CloseBtn');
	accountSummaryPopupAccountSummaryScreenAccountInfoText = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-AccountInfoText');
	accountSummaryPopupAccountSummaryScreenAccountPolicyPeriodsLV = PcfListView('#AccountSummaryPopup-AccountSummaryScreen-AccountPolicyPeriodsLV');
	accountSummaryPopupAccountSummaryScreenAccountSinceValue = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-AccountSinceValue');
	accountSummaryPopupAccountSummaryScreenAccountUnappliedAmount = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-AccountUnappliedAmount');
	accountSummaryPopupAccountSummaryScreenActivePolicies = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-ActivePolicies');
	accountSummaryPopupAccountSummaryScreenAddress = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-Address');
	accountSummaryPopupAccountSummaryScreenBillingMethodIcon = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-BillingMethodIcon');
	accountSummaryPopupAccountSummaryScreenBillingMethodText = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-BillingMethodText');
	accountSummaryPopupAccountSummaryScreenBlankSpacer2 = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-BlankSpacer2');
	accountSummaryPopupAccountSummaryScreenCloseAccountButton = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-CloseAccountButton');
	accountSummaryPopupAccountSummaryScreenCurrency = PcfSelectInput('#AccountSummaryPopup-AccountSummaryScreen-Currency');
	accountSummaryPopupAccountSummaryScreenDelinquencyFlag = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-DelinquencyFlag');
	accountSummaryPopupAccountSummaryScreenExpectedPayment = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-ExpectedPayment');
	accountSummaryPopupAccountSummaryScreenInfoIcon = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-InfoIcon');
	accountSummaryPopupAccountSummaryScreenLastPaymentReceived = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-LastPaymentReceived');
	accountSummaryPopupAccountSummaryScreenLateFeesReverseLateFeeAction = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-LateFees-ReverseLateFeeAction');
	accountSummaryPopupAccountSummaryScreenLateFeesWriteoffLateFeeAction = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-LateFees-WriteoffLateFeeAction');
	accountSummaryPopupAccountSummaryScreenName = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-Name');
	accountSummaryPopupAccountSummaryScreenNextInvoiceDue = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-NextInvoiceDue');
	accountSummaryPopupAccountSummaryScreenNoteDate = PcfDateValueInput('#AccountSummaryPopup-AccountSummaryScreen-NoteDate');
	accountSummaryPopupAccountSummaryScreenNoteLink = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-NoteLink');
	accountSummaryPopupAccountSummaryScreenNoteSubject = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-NoteSubject');
	accountSummaryPopupAccountSummaryScreenNoteText = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-NoteText');
	accountSummaryPopupAccountSummaryScreenNoteTopic = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-NoteTopic');
	accountSummaryPopupAccountSummaryScreenNotesAddIcon = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-NotesAddIcon');
	accountSummaryPopupAccountSummaryScreenNotesEditIcon = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-NotesEditIcon');
	accountSummaryPopupAccountSummaryScreenNotesNoneDesc = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-NotesNoneDesc');
	accountSummaryPopupAccountSummaryScreenNotesNoneIcon = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-NotesNoneIcon');
	accountSummaryPopupAccountSummaryScreenNotesTitle = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-NotesTitle');
	accountSummaryPopupAccountSummaryScreenNumPlannedInvoices = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-NumPlannedInvoices');
	accountSummaryPopupAccountSummaryScreenPastDueAmount = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-PastDueAmount');
	accountSummaryPopupAccountSummaryScreenPastDueIcon = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-PastDueIcon');
	accountSummaryPopupAccountSummaryScreenPaymentMethod = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-PaymentMethod');
	accountSummaryPopupAccountSummaryScreenPayoffAmount = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-PayoffAmount');
	accountSummaryPopupAccountSummaryScreenPhone = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-Phone');
	accountSummaryPopupAccountSummaryScreenPrimaryContact = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-PrimaryContact');
	accountSummaryPopupAccountSummaryScreenSendInvoicesBy = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-SendInvoicesBy');
	accountSummaryPopupAccountSummaryScreenServiceTierIcon = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-ServiceTierIcon');
	accountSummaryPopupAccountSummaryScreenStartDelinquencyButton = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-StartDelinquencyButton');
	accountSummaryPopupAccountSummaryScreenSuspense = PcfTextInput('#AccountSummaryPopup-AccountSummaryScreen-Suspense');
	accountSummaryPopupAccountSummaryScreenTotalUnappliedAmount = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-TotalUnappliedAmount');
	accountSummaryPopupAccountSummaryScreen_msgs = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-_msgs');
	accountSummaryPopupAccountSummaryScreendescription = PcfButton('#AccountSummaryPopup-AccountSummaryScreen-description');
	accountSummaryPopup_Paging = PcfButton('#AccountSummaryPopup-_Paging');
	accountSummaryPopup__crumb__ = PcfComponent('#AccountSummaryPopup-__crumb__');
}