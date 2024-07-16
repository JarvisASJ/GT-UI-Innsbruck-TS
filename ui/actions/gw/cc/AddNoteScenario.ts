import { ClaimNotes } from '../../../pages/gw/generated/claimsolutions/pages/claim/ClaimNotes';
import { ClaimMenuLinks } from '../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks';
import { NewNoteWorkSheet_Ext } from './scenarioPages/notes/NewNoteWorkSheet_Ext';
import world from '../../../util/gw/world'
import { t } from 'testcafe'

const claimNotes: ClaimNotes = new ClaimNotes();
const claimMenuNotes: ClaimMenuLinks = new ClaimMenuLinks();
const newNoteWorkSheet_Ext: NewNoteWorkSheet_Ext = new NewNoteWorkSheet_Ext();

export class AddNoteScenario {
    async noteScenario(): Promise<void> {
        await claimMenuNotes.menuLinksClaim_ClaimNotes.click();
        await claimNotes.notesSearchScreenNotesSearchScreen_NewNote.click();
        await newNoteWorkSheet_Ext.newNoteWorksheetNewNoteScreenNoteDetailDVTopic.selectOptionByLabel(world.dataMap.get('Topic'));
        await newNoteWorkSheet_Ext.newNoteWorksheetNewNoteScreenNoteDetailDVRelatedTo.selectOptionByLabel(world.dataMap.get('RelatedTO'));
        await t.typeText(newNoteWorkSheet_Ext.newNoteTextArea.component, world.dataMap.get('Text'));
        await newNoteWorkSheet_Ext.newNoteScreenUpdate.click()
    }

    async validateAddedNote(): Promise<void> {
        await t.expect(newNoteWorkSheet_Ext.addedNoteText.component.textContent).eql(world.dataMap.get('Text'));
    }
}