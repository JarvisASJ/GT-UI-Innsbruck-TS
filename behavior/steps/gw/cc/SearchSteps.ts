import { When, Then } from '@cucumber/cucumber';
import { SearchScenario } from '../../../../ui/actions/gw/cc/SearchScenario'
import { NavigationScenario } from '../../../../ui/actions/gw/cc/NavigationScenario';
import { ClaimSummaryScenario } from '../../../../ui/actions/gw/cc/ClaimSummaryScenario';
import helper from '../../../../ui/util/gw/helper';
import world from '../../../../ui/util/gw/world';
import { t } from 'testcafe';

const searchScenario: SearchScenario = new SearchScenario();
const navigationScenario: NavigationScenario = new NavigationScenario();
const claimSummaryScenario: ClaimSummaryScenario = new ClaimSummaryScenario();

When(/^the user searches for the policy in Search Claims/, async (): Promise<void> => {
    await navigationScenario.navigateSearchPolicyScreen();
    await searchScenario.searchWithPolicy(world.dataMap.get('PolicyNumber'));
});

Then(/^the claim details are loaded successfully/, async (): Promise<void> => {
    await helper.searchTableRecord("Claim", world.dataMap.get('ClaimNo'));
    await claimSummaryScenario.verifySummaryHeader();
});

When(/^the user searches the contact/, async (): Promise<void> => {
    await searchScenario.searchContact();
});

When(/^the user creates the recovery/, async (): Promise<void> => {
    await searchScenario.recoveryCreation();
});

Then(/^the user searches for the recovery details/, async (): Promise<void> => {
    await searchScenario.searchRecovery(t.ctx.claimNo);
});

When(/^the recovery details are loaded/, async (): Promise<void> => {
    await searchScenario.validateRecovery();
});

Then(/^the search contact details are loaded/, async (): Promise<void> => {
    await searchScenario.searchValidation();
});

Then(/^the user search the check/, async (): Promise<void> => {
    await searchScenario.searchCheck();
});

Then(/^the check details are loaded/, async (): Promise<void> => {
    await searchScenario.validateCheckDetailsHeader();
});