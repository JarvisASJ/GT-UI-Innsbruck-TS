import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewPolicyWizard {
	newPolicyWizardBasicsStep = PcfButton('#NewPolicyWizard-BasicsStep');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVAssignedRisk = PcfComponent('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-AssignedRisk');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVBillingMethod = PcfSelectInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-BillingMethod');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVDBA = PcfTextInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-DBA');
	newPolicyDVDelinquencyPlan = PcfSelectInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-DelinquencyPlan');
	newPolicyDVEligibleForFullPayDiscount = PcfComponent('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-EligibleForFullPayDiscount');
	newPolicyDVNewPolicyContactsLV = PcfListView('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-NewPolicyContactsLV');
	newPolicyContactsLV_tbAdd = PcfButton('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-NewPolicyContactsLV_tb-Add');
	newPolicyContactsLV_tbRemove = PcfButton('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-NewPolicyContactsLV_tb-Remove');
	newPolicyContactsLV_tbaddExistingContact = PcfButton('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-NewPolicyContactsLV_tb-addExistingContact');
	newPolicyContactsLV_tbaddNewContact = PcfButton('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-NewPolicyContactsLV_tb-addNewContact');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVNewPolicyContactsLV_tbaddNewContactaddNewCompany = PcfButton('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-NewPolicyContactsLV_tb-addNewContact-addNewCompany');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVNewPolicyContactsLV_tbaddNewContactaddNewPerson = PcfButton('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-NewPolicyContactsLV_tb-addNewContact-addNewPerson');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVOverridingInvoiceStream = PcfSelectInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-OverridingInvoiceStream');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVOverridingPayerAccountSelectOverridingPayerAccount = PcfButton('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-OverridingPayerAccount-SelectOverridingPayerAccount');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVPaymentPlan = PcfSelectInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-PaymentPlan');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVPolicyLOB = PcfSelectInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-PolicyLOB');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVPolicyNumber = PcfTextInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-PolicyNumber');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVPolicyPerEffDate = PcfDateValueInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-PolicyPerEffDate');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVPolicyPerExpirDate = PcfDateValueInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-PolicyPerExpirDate');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVRequireFinalAudit = PcfComponent('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-RequireFinalAudit');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVRiskJurisdiction = PcfSelectInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-RiskJurisdiction');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVSecurityZone = PcfSelectInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-SecurityZone');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVUWCompany = PcfSelectInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-UWCompany');
	newPolicyWizardNewPolicyWizardSummaryStepScreenNewPolicyDVUnderwriter = PcfTextInput('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-NewPolicyDV-Underwriter');
	newPolicyWizardSummaryStepScreen_msgs = PcfButton('#NewPolicyWizard-NewPolicyWizardSummaryStepScreen-_msgs');
	newPolicyWizardCancel = PcfButton('#NewPolicyWizard-Cancel');
	newPolicyWizardChargeStep = PcfButton('#NewPolicyWizard-ChargeStep');
	fullPayDiscountDVDiscountedPayment = PcfTextInput('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-FullPayDiscountDV-DiscountedPayment');
	fullPayDiscountDVFullPayDate = PcfDateValueInput('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-FullPayDiscountDV-FullPayDate');
	policyAddChargesListDetailPanelChargeBreakdownCardTab = PcfButton('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-PolicyAddChargesListDetailPanel-ChargeBreakdownCardTab');
	policyAddChargesListDetailPanelChargeBreakdownItemsLV = PcfListView('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-PolicyAddChargesListDetailPanel-ChargeBreakdownItemsLV');
	chargeBreakdownItemsLV_tbAdd = PcfButton('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-PolicyAddChargesListDetailPanel-ChargeBreakdownItemsLV_tb-Add');
	chargeBreakdownItemsLV_tbRemove = PcfButton('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-PolicyAddChargesListDetailPanel-ChargeBreakdownItemsLV_tb-Remove');
	policyAddChargesListDetailPanelPolicyAddChargesLV = PcfListView('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-PolicyAddChargesListDetailPanel-PolicyAddChargesLV');
	policyAddChargesLV_tbAdd = PcfButton('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-PolicyAddChargesListDetailPanel-PolicyAddChargesLV_tb-Add');
	policyAddChargesLV_tbRemove = PcfButton('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-PolicyAddChargesListDetailPanel-PolicyAddChargesLV_tb-Remove');
	newPolicyWizardChargeStepScreen_msgs = PcfButton('#NewPolicyWizard-NewPolicyWizardChargeStepScreen-_msgs');
	newPolicyWizardFinish = PcfButton('#NewPolicyWizard-Finish');
	newPolicyWizardNewPolicyWizard_UpLink = PcfButton('#NewPolicyWizard-NewPolicyWizard_UpLink');
	newPolicyWizardNext = PcfButton('#NewPolicyWizard-Next');
	newPolicyWizardPrev = PcfButton('#NewPolicyWizard-Prev');
	newPolicyWizard_Paging = PcfButton('#NewPolicyWizard-_Paging');
	newPolicyWizard__crumb__ = PcfComponent('#NewPolicyWizard-__crumb__');
}
