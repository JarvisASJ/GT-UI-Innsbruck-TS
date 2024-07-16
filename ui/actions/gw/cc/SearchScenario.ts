import { SearchTabBar_Ext } from './scenarioPages/navigation/tabBar/SearchTabBar_Ext'
import { SimpleClaimSearch } from '../../../pages/gw/generated/claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch'
import { PaymentSearch } from '../../../pages/gw/generated/claimsolutions/pages/search/PaymentSearch'
import { ClaimFinancialsChecksDetail_New } from './scenarioPages/claim/claimFinancialsGroup/ClaimFinancialsChecksDetail_New'
import { AddressBookSearch } from '../../../pages/gw/generated/claimsolutions/pages/addressBook/AddressBookSearch'
import { AddressBookTabBar_Ext } from './scenarioPages/navigation/tabBar/AddressBookTabBar_Ext'
import { RecoverySearch } from '../../../pages/gw/generated/claimsolutions/pages/search/RecoverySearch'
import { NewRecoverySet_Ext } from './scenarioPages/claim/recovery/NewRecoverySet_Ext'
import { ClaimMenuActions_Ext } from './scenarioPages/navigation/menuActions/ClaimMenuActions_Ext'
import { NewContactPopup } from '../../../pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup'
import helper from '../../../util/gw/helper'
import { t } from 'testcafe'
import world from '../../../util/gw/world'

const searchTabBar_Ext = new SearchTabBar_Ext()
const simpleClaimSearch: SimpleClaimSearch = new SimpleClaimSearch()
const paymentSearch: PaymentSearch = new PaymentSearch();
const claimFinancialsChecksDetail_New: ClaimFinancialsChecksDetail_New = new ClaimFinancialsChecksDetail_New();
const addressBookSearch: AddressBookSearch = new AddressBookSearch();
const addressBookTabBar_Ext: AddressBookTabBar_Ext = new AddressBookTabBar_Ext()
const recoverySearch: RecoverySearch = new RecoverySearch();
const newContactPopup: NewContactPopup = new NewContactPopup()
const claimMenuActions_Ext: ClaimMenuActions_Ext = new ClaimMenuActions_Ext();
const newRecoverySet_Ext: NewRecoverySet_Ext = new NewRecoverySet_Ext();

export class SearchScenario {
    async claimSimpleSearch(claimNumber: string): Promise<void> {
        console.log("On Search Claims screen")
        await searchTabBar_Ext.tabBarSearchTab.click()
        await simpleClaimSearch.simpleClaimSearchDVClaimNumber.setValue(claimNumber)
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click()
    }

    async searchWithPolicy(policyNumber: string): Promise<void> {
        await simpleClaimSearch.simpleClaimSearchDVPolicyNumber.setValue(policyNumber)
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click()
    }

    async searchCheck(): Promise<void> {
        await searchTabBar_Ext.tabBarSearchChevron.click()
        await searchTabBar_Ext.searchTabSearch_PaymentSearch.click()
        await paymentSearch.paymentSearchRequiredInputSetClaimNumber.setValue(world.dataMap.get('ClaimNumber'))
        await paymentSearch.paymentSearchPaymentSearchScreenPaymentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async validateCheckDetailsHeader(): Promise<void> {
        await helper.searchTableRecord(1, world.dataMap.get('Name'))
        await t.expect((claimFinancialsChecksDetail_New.checkDetailsHeader).component.exists).ok();
    }

    async searchContact(): Promise<void> {
        await addressBookTabBar_Ext.tabBarAddressBookTab.click()
        await addressBookSearch.addressBookSearchDVContactSubtype.selectOptionByLabel(world.dataMap.get('Type'));
        await addressBookSearch.addressBookSearchAddressBookSearchScreenAddressBookSearchDVNameInputSetGlobalContactNameInputSetName.setValue(world.dataMap.get('LastName'));
        await addressBookSearch.addressBookSearchAddressBookSearchScreenAddressBookSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async searchValidation(): Promise<void> {
        await t.expect(addressBookTabBar_Ext.addressBookTabNameSearch.component.textContent).eql(world.dataMap.get('Name'))
    }

    async searchRecovery(claimNumber: string): Promise<void> {
        await searchTabBar_Ext.tabBarSearchChevron.click()
        await searchTabBar_Ext.searchTabSearch_RecoverySearch.click()
        await recoverySearch.recoverySearchRequiredInputSetClaimNumber.setValue(claimNumber);
        await recoverySearch.recoverySearchRecoverySearchScreenRecoverySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
    }

    async validateRecovery(): Promise<void> {
        await helper.searchTableRecord(7, world.dataMap.get('RecoveryCategory'))
    }

    async recoveryCreation(): Promise<void> {
        await claimMenuActions_Ext.claimClaimMenuActions.click()
        await claimMenuActions_Ext.claimMenuActions_NewTransactionClaimMenuActions_NewOtherTrans.click()
        await claimMenuActions_Ext.claimMenuActions_NewTransactionClaimMenuActions_NewOtherTrans.click()
        await t.wait(1000)
        await claimMenuActions_Ext.claimMenuActions_NewOtherTransClaimMenuActions_NewTransaction_RecoverySet.click()
        await newRecoverySet_Ext.payerMenuIcon.click()
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVPayerClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewPerson.click();
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(world.dataMap.get('Payer'));
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click()
        await t.wait(1000)
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetReserveLine.selectOptionByLabel(world.dataMap.get('ReserveLine'))
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostType.selectOptionByLabel(world.dataMap.get('CostType'))
        await newRecoverySet_Ext.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostCategory.selectOptionByLabel(world.dataMap.get('CostCategory'))
        await newRecoverySet_Ext.recoveryDetailDVRecoveryCategory.selectOptionByLabel(world.dataMap.get('RecoveryCategory'))
        await newRecoverySet_Ext.recoveryAmount.setValue(world.dataMap.get('Amount'))
        await newRecoverySet_Ext.newRecoveryScreenUpdate.click()
        await t.setNativeDialogHandler(() => true);
    }
}