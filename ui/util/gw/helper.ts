const moment = require('moment')
import { t, Selector } from 'testcafe';

//To generate date from current date in MMDDYYYY format
function dateFunction(noOfDays: number, dateFormat: string = 'MMDDYYYY'): string {
    const modifiedDate: string = moment().add(noOfDays, 'days').format(dateFormat).toString();
    return modifiedDate;
}

//Splits the string and returns value based on index
function splitFunction(value: string, delimiter: string, index: number): string {
    const stringValue: string[] = value.split(delimiter);
    const splitValue: string = stringValue[index];
    return splitValue;
}

//Generates and returns random string with length provided
function generateRandomStringFunction(length: number): string {
    let randomString: string = '';
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    for (let i: number = 0; i < length; i++) {
        const randonIndex: number = Math.floor(Math.random() * alphabet.length);
        randomString += alphabet[randonIndex];
    }
    return randomString;
}

//To click on a specific record in a table.
//This function by default considers first table in a page
async function searchTableRecord(headerNameOrIndex: string | number, stringValue: string): Promise<void> {
    await t.wait(1000);
    const tableRows: Selector = Selector('table').nth(0).find('tr');
    const tablecols: Selector = tableRows.nth(0).find('td');
    const rowCount: number = await tableRows.count;
    if (typeof headerNameOrIndex === 'string') {
        const colsCount: number = await tablecols.count;
        for (let i: number = 0; i < colsCount; i++) {
            let cellText: string;
            try {
                cellText = await tablecols.nth(i).find('div.gw-label').textContent;
            }
            catch (e) {
                continue;
            }
            if (headerNameOrIndex.includes(cellText) && cellText.trim() !== '' && cellText.trim() !== null) {
                headerNameOrIndex = i;
                break;
            }
        }
    }
    for (let i: number = 1; i < rowCount; i++) {
        const cellText: string = await tableRows.nth(i).find('td').nth(+headerNameOrIndex).textContent;
        if (cellText.includes(stringValue)) {
            await t.click(tableRows.nth(i).find('td').nth(+headerNameOrIndex).find('div.gw-value-readonly-wrapper, div.gw-ActionValueWidget'));
            await t.wait(1000);
            break;
        }
    }
}

export default {
    dateFunction, splitFunction, generateRandomStringFunction, searchTableRecord
}