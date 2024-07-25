const { Given } = require('@cucumber/cucumber')
import { onApplication } from '@gtui/gt-ui-framework/bin/Utilities/OOTBSteps/CommonSteps/ISBaseStep'
import { onApp } from '../../../../ui/pages/gw/registry/onApp'

const onBCApp = new onApp("BC")
const onPCApp = new onApp('PC')
const onCCApp = new onApp("CC")
let role: string

Given(/^the user logs into the billing center as (.*)/, async (t, stepArguments: string[]): Promise<void> => {
    role = stepArguments[0].replace(/["]/g, "")
    await (onBCApp as onApplication).navigateToApp()
    await (onBCApp as onApplication).loginWithRole(role)
    await t.wait(100)
});

Given(/^the user logs into the policy center as (.*)/, async (t, stepArguments: string[]): Promise<void> => {
    role = stepArguments[0].replace(/["]/g, "")
    await (onPCApp as onApplication).navigateToApp()
    await (onPCApp as onApplication).loginWithRole(role)
    await t.wait(100);
});

Given(/^the user logs into the claims center as (.*)/, async (t, stepArguments: string[]): Promise<void> => {
    role = stepArguments[0].replace(/["]/g, "")
    await (onCCApp as onApplication).navigateToApp()
    await (onCCApp as onApplication).loginWithRole(role)
    await t.wait(100)
});