import { t } from "testcafe";
import { ActivityDetailWorksheet_New } from "./scenarioPages/other/ActivityDetailWorksheet_New";
import { NewActivity } from "../../../pages/gw/generated/claimsolutions/pages/other/NewActivity";
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext";
import world from "../../../util/gw/world";

const activityDetailWorksheet_New: ActivityDetailWorksheet_New = new ActivityDetailWorksheet_New();
const newActivity: NewActivity = new NewActivity();
const claimMenuActions_Ext: ClaimMenuActions_Ext = new ClaimMenuActions_Ext();

export class AddActivityScenario {

    async activityValidation(): Promise<void> {
        await t.expect(activityDetailWorksheet_New.activityDetailWorksheetSubject.component.textContent).eql(world.dataMap.get('Subject'));
    }

    async addAutoPilotActionRequiredActivity(): Promise<void> {
        await claimMenuActions_Ext.claimMenuActions.click();
        await claimMenuActions_Ext.activityAutoPilot.click();
        await claimMenuActions_Ext.activityAutoPilot.click();
        await claimMenuActions_Ext.autopilotActionRequired.click();
        await newActivity.newActivityDVActivity_Subject.setValue(world.dataMap.get('Subject'));
        await newActivity.newActivityScreenNewActivity_UpdateButton.click();
    }
}