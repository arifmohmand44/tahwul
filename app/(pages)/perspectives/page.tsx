import BreadcrumbSection from "@/components/breadcrumb-section";
import PageTitle from "@/components/perspectives/page-title";
import MetricsGrid from "@/components/perspectives/metrics-grid";
import TabsSection from "@/components/perspectives/tabs-section";
import perspectiveData from "@/data/perspective.json";

export const metadata = {
  title: "Perspectives",
};

export default function PerspectivesPage() {
  return (
    <>
      <BreadcrumbSection breadcrumb={perspectiveData.page.breadcrumb} />
      <PageTitle
        heading={perspectiveData.page.heading}
        title={perspectiveData.page.title}
        subtitle={perspectiveData.page.subtitle}
        progress={perspectiveData.page.progress}
      />
      <MetricsGrid metrics={perspectiveData.metrics} />
      <TabsSection
        tabs={perspectiveData.tabs}
        sections={perspectiveData.sections}
      />
    </>
  );
}
