import { FNOLWizard_Ext } from "./scenarioPages/claim/FNOLWizard_Ext";
import helper from "../../../util/gw/helper";
import { NewContactPopup } from "../../../pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup";
import { NewClaimSaved_Ext } from "./scenarioPages/other/NewClaimSaved_Ext";
import world from "../../../util/gw/world";
import { t } from "testcafe";

const fNOLWizard_Ext: FNOLWizard_Ext = new FNOLWizard_Ext();
const newContactPopup: NewContactPopup = new NewContactPopup();
const newClaimSaved_Ext: NewClaimSaved_Ext = new NewClaimSaved_Ext();

export class FnolScenario {
    async newFnolCreation(): Promise<void> {
        console.log("On Step 1: Search or Create Policy screen");
        await fNOLWizard_Ext.fnolWizardCreateUnverifiedPolicy.click();
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetPolicyNumber.setValue(world.dataMap.get('PolicyNumber'));
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetType.click();
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetType.selectOptionByLabel(world.dataMap.get('Type'));
        await fNOLWizard_Ext.fNOLWizardFindPolicyPanelSetClaim_LossDate.setValue(helper.dateFunction(world.dataMap.get('LossDate')));
        await fNOLWizard_Ext.newClaimPolicyGeneralDVEffectiveDate.setValue(helper.dateFunction(world.dataMap.get('EffectiveDate')));
        await fNOLWizard_Ext.newClaimPolicyGeneralDVExpirationDate.setValue(helper.dateFunction(world.dataMap.get('ExpirationDate')));
        await fNOLWizard_Ext.fNOLWizardNameMenuIcon.click();
        await fNOLWizard_Ext.fnolWizardNameMenuSelection.click();
        console.log("On New Person screen");
        t.ctx.insuredName = helper.generateRandomStringFunction(4);
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(t.ctx.insuredName);
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click();
        console.log("On Step 1: Search or Create Policy screen");
        await fNOLWizard_Ext.fNOLWizardNext.click();
        console.log("On Step 2 of 5: Basic information screen");
        await fNOLWizard_Ext.fnolWizardNameDropdown.selectOptionByLabel(t.ctx.insuredName);
        await fNOLWizard_Ext.fNOLWizardNext.click();
        console.log("On Step 3 of 5: Add claim information screen");
        await fNOLWizard_Ext.fNOLWizard_NewLossDetailsPanelSetClaim_LossCause.selectOptionByLabel(world.dataMap.get('LossCause'));
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCity.setValue(world.dataMap.get('City'));
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.click();
        await fNOLWizard_Ext.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsPanelFNOLWizard_NewLossDetailsPanelSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.selectOptionByLabel(world.dataMap.get('State'));
        await fNOLWizard_Ext.fNOLWizardNext.click();
        console.log("On Step 4 of 5: Services screen");
        await fNOLWizard_Ext.fNOLWizardNext.click();
        console.log("On Step 5 of 5: Save and Assign Claim screen");
        await fNOLWizard_Ext.fNOLWizardFinish.click();
    }

    async readClaimNumber(): Promise<void> {
        t.ctx.claimNo = helper.splitFunction(await newClaimSaved_Ext.newClaimDVAssignedHeader.component.innerText, " ", 1);
        console.log("The claim number is: " + t.ctx.claimNo);
    }
}