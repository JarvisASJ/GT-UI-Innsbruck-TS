const { When, Then } = require('@cucumber/cucumber')
import { AddActivityScenario } from '../../../../ui/actions/gw/cc/AddActivityScenario'
import helper from '../../../../ui/util/gw/helper'
import world from '../../../../ui/util/gw/world';

const addActivityScenario = new AddActivityScenario()

When(/^the user adds an activity/, async (): Promise<void> => {
   await addActivityScenario.addAutoPilotActionRequiredActivity()
});

Then(/^the add activity is added successfully/, async (): Promise<void> => {
   await helper.searchTableRecord(6, world.dataMap.get('Subject'))
   await addActivityScenario.activityValidation();
});