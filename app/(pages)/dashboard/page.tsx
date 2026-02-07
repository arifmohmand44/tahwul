import ProjectTimeline from "@/components/dashboard/project-timeline";
import TimelineMetrics from "@/components/dashboard/timeline-metrics";
import ProgressStatus from "@/components/dashboard/progress-status";
import ActivitiesTimeline from "@/components/activities-timeline";
import ComplianceScore from "@/components/dashboard/compliance-score";
import TopLeaders from "@/components/dashboard/top-leaders";
import PerformanceChart from "@/components/dashboard/performance-chart";
import AuditReadiness from "@/components/dashboard/audit-readiness";
import dashboardData from "@/data/dashboard.json";
import activitiesData from "@/data/activities.json";

export const metadata = {
  title: "Dashboard",
};

export default function ProjectTimelinePage() {
  return (
    <>
      {/* Project Timeline */}
      <ProjectTimeline
        title={dashboardData.timeline.title}
        year={dashboardData.timeline.year}
        phases={dashboardData.timeline.phases}
      />

      {/* Metrics Grid */}
      <TimelineMetrics metrics={dashboardData.metrics} />

      {/* Progress Status Section */}
      <ProgressStatus items={dashboardData.progressStatus} />

      <div className="flex justify-between gap-6">
        {/* Compliance Score */}
        <div className="flex-1">
          <ComplianceScore
            percentage={dashboardData.complianceScore.percentage}
            label={dashboardData.complianceScore.label}
          />
        </div>
        {/* Top Leaders */}
        <div className="flex-1">
          <TopLeaders leaders={dashboardData.topLeaders} />
        </div>
        {/* Activities Timeline */}
        <div className="flex-1">
          <ActivitiesTimeline activities={activitiesData.activities} />
        </div>
      </div>

      <div className="flex gap-6">
        {/* Left Column - Performance Chart (Wider) */}
        <div className="w-[66.2%]">
          <PerformanceChart
            title={dashboardData.performanceChart.title}
            unit={dashboardData.performanceChart.unit}
            data={dashboardData.performanceChart.data}
          />
        </div>

        {/* Right Column - Audit Readiness */}
        <div className="w-[32.2%]">
          <AuditReadiness
            percentage={dashboardData.auditReadiness.percentage}
            overdueTasks={dashboardData.auditReadiness.overdueTasks}
            missingEvidence={dashboardData.auditReadiness.missingEvidence}
          />
        </div>
      </div>
    </>
  );
}
