const { Then } = require("@cucumber/cucumber");
import { ClaimSummaryScenario } from '../../../../ui/actions/gw/cc/ClaimSummaryScenario'

const claimSummaryScenario = new ClaimSummaryScenario()

Then(/^the claim summary details are loaded/, async function (): Promise<void> {
    await claimSummaryScenario.verifyClaimStatus()
});