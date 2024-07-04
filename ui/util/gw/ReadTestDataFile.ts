export class ReadTestDataFiles {

    async loadTestData(testCaseID: string, module: string, jsonFileName: string): Promise<Map<string, any>> {
        //reading and storing the data in a jsonData
        let jsonData: any;
        jsonData = require(`../../testdata/${module}/${jsonFileName}.json`);

        //If testCaseID doesnt match in json file then takes defaultDataSet
        let testCaseDataMap = new Map<string, any>();
        if (!jsonData.hasOwnProperty(testCaseID)) {
            testCaseID = "defaultDataSet";
        }
        //Loading test case data
        for (const [defaultDataKey, defaultDataValue] of Object.entries(jsonData[testCaseID])) {
            //To check if json data has sub array(like coverage, driver or any iterative data)
            if (typeof defaultDataValue === 'object' && !Array.isArray(defaultDataValue) && defaultDataValue !== null) {
                const subData = new Map<string, any>(Object.entries(defaultDataValue));
                testCaseDataMap.set(defaultDataKey, subData);
            } else {
                testCaseDataMap.set(defaultDataKey, defaultDataValue);
            }
        }
        console.log(`Loaded ${testCaseID} data`);
        return testCaseDataMap;
    }
}