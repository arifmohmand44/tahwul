import ContentGrid from "./content-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tab, Section } from "@/types/perspective";
import LeadersSection from "./leaders-section";
import DocumentsTable from "@/components/perspectives/documents-table";
import CommentsSection from "@/components/perspectives/comments-section";
import ActivitiesTimeline from "@/components/activities-timeline";
import documentsData from "@/data/documents.json";
import activitiesData from "@/data/activities.json";
import commentsData from "@/data/comments.json";

interface TabsSectionProps {
  tabs: Tab[];
  sections: Section[];
}

export default function TabsSection({ tabs, sections }: TabsSectionProps) {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="px-[6] py-7 bg-secondary rounded-lg justify-start">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="text-sm font-normal rounded-lg px-10 py-3 data-[state=active]:bg-white"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="overview">
        <div className="border border-secondary bg-white shadow rounded-xl mt-4">
          <ContentGrid sections={sections} />
        </div>
        {/* Leader Section */}
        <LeadersSection />
      </TabsContent>

      <TabsContent value="evidence">
        {/* Documents Table */}
        <DocumentsTable documents={documentsData.documents} />

        {/* Comments and Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-6">
          {/* Comments Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <CommentsSection comments={commentsData.comments} />
          </div>

          {/* Activities Timeline */}
          <div className="lg:col-span-1">
            <ActivitiesTimeline activities={activitiesData.activities} />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
