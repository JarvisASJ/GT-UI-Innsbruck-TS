import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProfilerAnalysisPage {
	profilerAnalysisPageProfilerAnalysisPage_UpLink = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisPage_UpLink');
	pickProfilerSourceLVBatchProcessHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-BatchProcessHeader');
	pickProfilerSourceLVCompleteDateHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-CompleteDateHeader');
	pickProfilerSourceLVDescriptionHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-DescriptionHeader');
	pickProfilerSourceLVRanToCompletionHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-RanToCompletionHeader');
	pickProfilerSourceLVStartDateHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-StartDateHeader');
	pickProfilerSourceLV_ListPaging = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-_ListPaging');
	pickProfilerSourceLVbatchProcessTypeChooser = PcfSelectInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-batchProcessTypeChooser');
	pickProfilerSourceLVGosuServletHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-GosuServletHeader');
	pickProfilerSourceLVServerNameHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-ServerNameHeader');
	pickProfilerSourceLVgosuServletChooser = PcfSelectInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-gosuServletChooser');
	pickProfilerSourceLVEndTimeHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-EndTimeHeader');
	pickProfilerSourceLVMessageDestinationIDHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-MessageDestinationIDHeader');
	pickProfilerSourceLVMessageDestinationNameHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-MessageDestinationNameHeader');
	pickProfilerSourceLVStartTimeHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-StartTimeHeader');
	pickProfilerSourceLVmessageDestinationChooser = PcfSelectInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-messageDestinationChooser');
	pickProfilerSourceLVHttpOperationHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-HttpOperationHeader');
	pickProfilerSourceLVOperationNameHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-OperationNameHeader');
	pickProfilerSourceLVTraceabilityIdHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-TraceabilityIdHeader');
	pickProfilerSourceLVServiceNameHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-ServiceNameHeader');
	pickProfilerSourceLVstartablePluginChooser = PcfSelectInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-startablePluginChooser');
	pickProfilerSourceLVUpgradeDurationHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-UpgradeDurationHeader');
	pickProfilerSourceLVUpgradeEndTimeHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-UpgradeEndTimeHeader');
	pickProfilerSourceLVUpgradeStartTimeHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-UpgradeStartTimeHeader');
	pickProfilerSourceLVWebProfilerNameHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-WebProfilerNameHeader');
	pickProfilerSourceLVsoapServiceChooser = PcfSelectInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-soapServiceChooser');
	pickProfilerSourceLVAppServerNameHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-AppServerNameHeader');
	pickProfilerSourceLVDurationHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-DurationHeader');
	pickProfilerSourceLVInstanceNumberHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-InstanceNumberHeader');
	pickProfilerSourceLVWorkQueueNameHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-WorkQueueNameHeader');
	pickProfilerSourceLVworkQueueTypeChooser = PcfSelectInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV-workQueueTypeChooser');
	pickProfilerSourceLV_tbAdd = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV_tb-Add');
	pickProfilerSourceLV_tbRemove = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-PickProfilerSourceLV_tb-Remove');
	profilerResultsCVCardTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-CardTab');
	profilerResultsCVChronoLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ChronoLV');
	chronoLV_tbCollapse = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ChronoLV_tb-Collapse');
	chronoLV_tbExpand = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ChronoLV_tb-Expand');
	profilerResultsCVEmptyTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-EmptyTab');
	profilerResultsEmptyDVNotFound = PcfTextInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ProfilerResultsEmptyDV-NotFound');
	profilerResultsCVStackCardTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StackCardTab');
	profilerResultsCVStacksLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StacksLV');
	profilerResultsCVProfilerFrameGroupLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ProfilerFrameGroupLV');
	profilerResultsCVframes = PcfTextInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-frames');
	profilerResultsCVstackCardTab_2 = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-stackCardTab');
	profilerResultsCVtime = PcfTextInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-time');
	profilerResultsCVstacks = PcfTextInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-stacks');
	profilerResultsCVAgQSummaryLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-AgQSummaryLV');
	profilerResultsCVQueriesTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-QueriesTab');
	querySummaryLDVArgsTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-QuerySummaryLDV-ArgsTab');
	querySummaryLDVFilteredStackTraceTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-QuerySummaryLDV-FilteredStackTraceTab');
	querySummaryLDVFullStackTraceTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-QuerySummaryLDV-FullStackTraceTab');
	querySummaryLDVPCFStackTraceTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-QuerySummaryLDV-PCFStackTraceTab');
	querySummaryLDVQueryDetailsLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-QuerySummaryLDV-QueryDetailsLV');
	querySummaryLDVSQLTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-QuerySummaryLDV-SQLTab');
	profilerResultsCVQuerySummaryLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-QuerySummaryLV');
	profilerResultsCVSQLString = PcfTextInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-SQLString');
	profilerAnalysisPageProfilerAnalysisScreenProfilerAnalysisPanelSetProfilerResultsCVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	profilerAnalysisPageProfilerAnalysisScreenProfilerAnalysisPanelSetProfilerResultsCVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	profilerResultsCVStacksTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StacksTab');
	profilerResultsCVAggregatedQuerySummaryLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-AggregatedQuerySummaryLV');
	argsSummaryLDVArgsTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ArgsSummaryLDV-ArgsTab');
	argsSummaryLDVSQLTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ArgsSummaryLDV-SQLTab');
	argsSummaryLDVStackDetailsLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ArgsSummaryLDV-StackDetailsLV');
	profilerResultsCVArgumentsTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ArgumentsTab');
	profilerResultsCVCallStacksTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-CallStacksTab');
	stackSummaryLDVArgsLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StackSummaryLDV-ArgsLV');
	stackSummaryLDVArgsTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StackSummaryLDV-ArgsTab');
	stackSummaryLDVFilteredStackTraceTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StackSummaryLDV-FilteredStackTraceTab');
	stackSummaryLDVFullStackTraceTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StackSummaryLDV-FullStackTraceTab');
	stackSummaryLDVSQLTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StackSummaryLDV-SQLTab');
	stackSummaryLDVStackDetailsLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StackSummaryLDV-StackDetailsLV');
	profilerResultsCVResultsTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-ResultsTab');
	profilerResultsCVRuleExecutionLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-RuleExecutionLV');
	ruleExecutionLV_tbCollapse = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-RuleExecutionLV_tb-Collapse');
	ruleExecutionLV_tbExpand = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-RuleExecutionLV_tb-Expand');
	profilerResultsCVDoublyNestedCardLYGTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-DoublyNestedCardLYGTab');
	profilerResultsCVNestedCardTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-NestedCardTab');
	profilerResultsCVStackQuerySummaryLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StackQuerySummaryLV');
	profilerResultsCVStackSummaryLV = PcfListView('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-StackSummaryLV');
	profilerResultsCV_ListPaging = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-_ListPaging');
	profilerResultsCVnameHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-nameHeader');
	profilerResultsCVtimeHeader = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-timeHeader');
	profilerResultsCVMainTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV-MainTab');
	profilerResultsCV_tbDownloadButton = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV_tb-DownloadButton');
	profilerResultsCV_tbViewType = PcfSelectInput('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerAnalysisPanelSet-ProfilerResultsCV_tb-ViewType');
	profilerAnalysisScreenProfilerResultsTab = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-ProfilerResultsTab');
	profilerAnalysisScreen_msgs = PcfButton('#ProfilerAnalysisPage-ProfilerAnalysisScreen-_msgs');
	profilerAnalysisPage_Paging = PcfButton('#ProfilerAnalysisPage-_Paging');
	profilerAnalysisPage__crumb__ = PcfComponent('#ProfilerAnalysisPage-__crumb__');
}