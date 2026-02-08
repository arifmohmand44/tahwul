"use client";

import SemiGauge from "./semi-gauge";

interface AuditReadinessProps {
  percentage: number;
  overdueTasks: number;
  missingEvidence: number;
}

export default function AuditReadiness({
  percentage,
  overdueTasks,
  missingEvidence,
}: AuditReadinessProps) {
  return (
    <div className="bg-white rounded-xl border border-secondary shadow p-6">
      <h3 className="text-base font-semibold lg:font-bold text-primary mb-5">Audit Readiness</h3>

      <div className="py-4 lg:py-6">
        <SemiGauge
          percentage={percentage}
          label="Readiness Level"
          color="#1EA54E"
        />
      </div>

      <div className="mt-0 lg:mt-3 text-center border-t-2 border-secondary">
        <div className="grid grid-cols-2 gap-4 mt-2 lg:mt-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">{overdueTasks}</p>
            <p className="text-sm font-normal text-gray-600 mt-0.5">
              Overdue Tasks
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">{missingEvidence}</p>
            <p className="text-sm font-normal text-gray-600 mt-0.5">
              Missing Evidence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
