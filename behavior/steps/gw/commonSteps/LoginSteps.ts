const { Given } = require("@cucumber/cucumber")
import { onApplication } from '@gtui/gt-ui-framework/bin/Utilities/OOTBSteps/CommonSteps/ISBaseStep';
import { onApp } from '../../../../ui/pages/gw/registry/onApp'

let onCCApp = new onApp("CC")
let role: any

Given(/^the user logs into the claims center as (.*)/, async (t, stepArguments: any[]) => {
    role = stepArguments[0].replace(/["]/g, "")
    await t.navigateTo(process.env["CC_URL"])
    await (onCCApp as onApplication).loginWithRole(role)
    t.wait(100)
});