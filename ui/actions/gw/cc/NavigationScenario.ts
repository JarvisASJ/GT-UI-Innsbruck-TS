import { ClaimTabBar_Ext } from "./scenarioPages/navigation/tabBar/ClaimTabBar_Ext"
import { SearchTabBar_Ext } from "./scenarioPages/search/claimSearchesGroup/SearchTabBar_Ext"

const claimTabBar_Ext = new ClaimTabBar_Ext()
const searchTabBar_Ext = new SearchTabBar_Ext()

export class NavigationScenario {

  async navigateToNewClaimWizard(): Promise<void> {
    await claimTabBar_Ext.tabBarClaimChevron.click()
    await claimTabBar_Ext.claimTabClaimTab_FNOLWizard.click()
  }

  async openClaim(claimNumber: string): Promise<void> {
    await claimTabBar_Ext.tabBarClaimChevron.click();
    await claimTabBar_Ext.claimTabClaimTab_FindClaim.setValue(claimNumber);
    await claimTabBar_Ext.claimTabSearch.click();
  }

  async navigateSearchPolicyScreen(): Promise<void> {
    await searchTabBar_Ext.tabBarSearchTab.click()
    console.log('On Search Claims Screen')
  }
}