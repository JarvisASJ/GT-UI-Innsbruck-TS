const { When, Then } = require("@cucumber/cucumber")
import world from '../../../../ui/util/gw/world'
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario"
import { ClaimSummaryScenario } from "../../../../ui/actions/gw/cc/ClaimSummaryScenario";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import helper from "../../../../ui/util/gw/helper"

const navigationScenario = new NavigationScenario()
const searchScenario = new SearchScenario()
const claimSummaryScenario = new ClaimSummaryScenario()

When(/^the user searches for the policy in Search Claims/, async function () {
    await navigationScenario.navigateSearchPolicyScreen()
    await searchScenario.searchWithPolicy(world.dataMap.get('PolicyNumber'))
});

Then(/^the claim details are loaded successfully/, async function () {
    await helper.searchTableRecord("Claim", world.dataMap.get('ClaimNo'))
    await claimSummaryScenario.verifySummaryHeader()
});
