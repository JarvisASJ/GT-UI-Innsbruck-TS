const { When } = require('@cucumber/cucumber')
import world from '../../../../ui/util/gw/world'
import { ReadTestDataFiles } from '../../../../ui/util/gw/ReadTestDataFiles';

const readTestDataFiles = new ReadTestDataFiles()

When(/^the user loads (.*) data (.*) from json (.*)/, async (t, stepArguments: string[]): Promise<void> => {
    const module: string = stepArguments[0].replace(/["]/g, "")
    const identifier: string = stepArguments[1].replace(/["]/g, "")
    const jsonFileName: string = stepArguments[2].replace(/["]/g, "")
    world.dataMap.clear()
    world.dataMap = await readTestDataFiles.loadTestData(identifier, module, jsonFileName)
    world.coverageDataMap = world.dataMap.get('Coverage')
    world.vehicleDataMap = world.dataMap.get('Vehicles')
});