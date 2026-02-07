import SemiGauge from "./semi-gauge";

interface ComplianceScoreProps {
  percentage: number;
  label: string;
}

export default function ComplianceScore({
  percentage,
  label,
}: ComplianceScoreProps) {
  return (
    <div className="bg-white rounded-xl border border-secondary shadow p-6">
      <h3 className="text-base font-bold text-primary mb-5">
        Overall Compliance Score
      </h3>
      <div className="py-6">
        <SemiGauge percentage={percentage} label={label} />
      </div>
    </div>
  );
}
