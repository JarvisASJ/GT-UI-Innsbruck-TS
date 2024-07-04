import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class EditAccountPopup {
	editAccountPopupEditAccountPopup_UpLink = PcfButton('#EditAccountPopup-EditAccountPopup_UpLink');
	accountCurrencyInputSetPreferredCoverageCurrency = PcfSelectInput('#EditAccountPopup-EditAccountScreen-AccountCurrency-AccountCurrencyInputSet-PreferredCoverageCurrency');
	accountCurrencyInputSetPreferredSettlementCurrency = PcfSelectInput('#EditAccountPopup-EditAccountScreen-AccountCurrency-AccountCurrencyInputSet-PreferredSettlementCurrency');
	editAccountScreenAddressDescription = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressDescription');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1 = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1Kanji = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1Kanji');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2 = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2Kanji = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2Kanji');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressSummary = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressSummary');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetCity = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetCityKanji = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CityKanji');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetCountry = PcfSelectInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-Country');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCode = PcfButton('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCodeAutoFillIcon = PcfButton('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode-AutoFillIcon');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetState = PcfSelectInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine3 = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine3');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEX = PcfCheckBox('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEX');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEXBureau = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEXBureau');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetCityAutoFillIcon = PcfButton('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City-AutoFillIcon');
	editAccountPopupEditAccountScreenAddressInputSetglobalAddressContainerGlobalAddressInputSetCounty = PcfTextInput('#EditAccountPopup-EditAccountScreen-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-County');
	editAccountScreenAddressType = PcfSelectInput('#EditAccountPopup-EditAccountScreen-AddressType');
	editAccountScreenCancel = PcfButton('#EditAccountPopup-EditAccountScreen-Cancel');
	editAccountPopupEditAccountScreenContactNameInputSetEmailAddress1 = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-EmailAddress1');
	editAccountPopupEditAccountScreenContactNameInputSetEmailAddress2 = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-EmailAddress2');
	editAccountPopupEditAccountScreenContactNameInputSetFaxPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-CountryCode');
	editAccountPopupEditAccountScreenContactNameInputSetFaxPhoneGlobalPhoneInputSetExtension = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-Extension');
	editAccountPopupEditAccountScreenContactNameInputSetFaxPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	editAccountPopupEditAccountScreenContactNameInputSetFaxPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-PhoneDisplay');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalContactNameInputSetName = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalContactNameInputSet-Name');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalContactNameInputSetNameKanji = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalContactNameInputSet-NameKanji');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalContactNameInputSetNameSummary = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalContactNameInputSet-NameSummary');
	editAccountPopupEditAccountScreenContactNameInputSetWorkPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-CountryCode');
	editAccountPopupEditAccountScreenContactNameInputSetWorkPhoneGlobalPhoneInputSetExtension = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-Extension');
	editAccountPopupEditAccountScreenContactNameInputSetWorkPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	editAccountPopupEditAccountScreenContactNameInputSetWorkPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-PhoneDisplay');
	editAccountPopupEditAccountScreenContactNameInputSetCellPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-CountryCode');
	editAccountPopupEditAccountScreenContactNameInputSetCellPhoneGlobalPhoneInputSetExtension = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-Extension');
	editAccountPopupEditAccountScreenContactNameInputSetCellPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	editAccountPopupEditAccountScreenContactNameInputSetCellPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-PhoneDisplay');
	editAccountPopupEditAccountScreenContactNameInputSetDateOfBirth = PcfDateValueInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-DateOfBirth');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalPersonNameInputSetFirstName = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalPersonNameInputSet-FirstName');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalPersonNameInputSetFirstNameKanji = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalPersonNameInputSet-FirstNameKanji');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalPersonNameInputSetLastName = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalPersonNameInputSet-LastName');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalPersonNameInputSetLastNameKanji = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalPersonNameInputSet-LastNameKanji');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalPersonNameInputSetNameSummary = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalPersonNameInputSet-NameSummary');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalPersonNameInputSetMiddleName = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalPersonNameInputSet-MiddleName');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalPersonNameInputSetParticle = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalPersonNameInputSet-Particle');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalPersonNameInputSetPrefix = PcfSelectInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalPersonNameInputSet-Prefix');
	editAccountPopupEditAccountScreenContactNameInputSetGlobalPersonNameInputSetSuffix = PcfSelectInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-GlobalPersonNameInputSet-Suffix');
	editAccountPopupEditAccountScreenContactNameInputSetHomePhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-CountryCode');
	editAccountPopupEditAccountScreenContactNameInputSetHomePhoneGlobalPhoneInputSetExtension = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-Extension');
	editAccountPopupEditAccountScreenContactNameInputSetHomePhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	editAccountPopupEditAccountScreenContactNameInputSetHomePhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-PhoneDisplay');
	editAccountPopupEditAccountScreenContactNameInputSetMaritalStatus = PcfSelectInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-MaritalStatus');
	editAccountPopupEditAccountScreenContactNameInputSetPrimaryPhone = PcfSelectInput('#EditAccountPopup-EditAccountScreen-ContactNameInputSet-PrimaryPhone');
	editAccountScreenDescriptionOfBusiness = PcfTextInput('#EditAccountPopup-EditAccountScreen-DescriptionOfBusiness');
	editAccountScreenEdit = PcfButton('#EditAccountPopup-EditAccountScreen-Edit');
	editAccountPopupEditAccountScreenIndustryCodeSelectIndustryCode = PcfButton('#EditAccountPopup-EditAccountScreen-IndustryCode-SelectIndustryCode');
	editAccountPopupEditAccountScreenLinkedAddressInputSetLinkAddressMenuEditAddress = PcfButton('#EditAccountPopup-EditAccountScreen-LinkedAddressInputSet-LinkAddressMenu-EditAddress');
	editAccountScreenNickname = PcfTextInput('#EditAccountPopup-EditAccountScreen-Nickname');
	editAccountPopupEditAccountScreenOfficialIDInputSetOfficialIDDV_Input = PcfTextInput('#EditAccountPopup-EditAccountScreen-OfficialIDInputSet-OfficialIDDV_Input');
	editAccountScreenOrgType = PcfSelectInput('#EditAccountPopup-EditAccountScreen-OrgType');
	editAccountScreenPrimaryLanguage = PcfSelectInput('#EditAccountPopup-EditAccountScreen-PrimaryLanguage');
	editAccountScreenServiceTier = PcfSelectInput('#EditAccountPopup-EditAccountScreen-ServiceTier');
	editAccountScreenUpdate = PcfButton('#EditAccountPopup-EditAccountScreen-Update');
	editAccountScreen_msgs = PcfButton('#EditAccountPopup-EditAccountScreen-_msgs');
	editAccountPopup_Paging = PcfButton('#EditAccountPopup-_Paging');
	editAccountPopup__crumb__ = PcfComponent('#EditAccountPopup-__crumb__');
}