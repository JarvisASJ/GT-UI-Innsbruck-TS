import { When, Then } from "@cucumber/cucumber";
import { t } from "testcafe";
import { FnolScenario } from "../../../../ui/actions/gw/cc/FNOLScenario";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import helper from "../../../../ui/util/gw/helper";
import { ClaimSummaryScenario } from "../../../../ui/actions/gw/cc/ClaimSummaryScenario";

const fnolScenario: FnolScenario = new FnolScenario();
const searchScenario: SearchScenario = new SearchScenario();
const navigationScenario: NavigationScenario = new NavigationScenario();
const claimSummaryScenario: ClaimSummaryScenario = new ClaimSummaryScenario();

When(/^the user creates new FNOL/, async function (): Promise<void> {
    await navigationScenario.navigateToNewClaimWizard();
    await fnolScenario.newFnolCreation();
    await fnolScenario.readClaimNumber();
});

When(/^the user search with claim number/, async function (): Promise<void> {
    await navigationScenario.openClaim(t.ctx.claimNo);
});

Then(/^the FNOL is added successfully/, async function (): Promise<void> {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo);
    await helper.searchTableRecord(3, t.ctx.claimNo);
    await claimSummaryScenario.verifySummaryHeader();
});