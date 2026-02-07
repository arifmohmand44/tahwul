"use client";

interface Document {
  id: number;
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: string;
}

interface DocumentsTableProps {
  documents: Document[];
}

const StatusBadge = ({ status }: { status: string }) => {
  const statusStyles = {
    Approved: "text-green-600 bg-green-50",
    "Pending Review": "text-yellow-400 bg-yellow-50",
  };

  const style =
    statusStyles[status as keyof typeof statusStyles] ||
    "text-gray-600 bg-gray-50";

  return (
    <span
      className={`inline-block px-3 py-2 rounded-3xl text-sm font-medium ${style}`}
    >
      {status}
    </span>
  );
};

const TableHeader = ({ label }: { label: string }) => (
  <th className="px-6 py-4 text-left text-xs font-normal bg-[#F5F8FB] first:rounded-tl-xl first:rounded-bl-xl last:rounded-tr-xl last:rounded-br-xl text-primary">
    <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
      <span>{label}</span>
      <svg
        className="w-4 h-4"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.00098 7H4.21148C4.67648 7 4.90898 7 4.97148 7.14C5.03298 7.28 4.87498 7.448 4.55848 7.784L2.73948 9.716C2.42298 10.052 2.26448 10.22 2.32648 10.36C2.38848 10.5 2.62148 10.5 3.08648 10.5H5.00098M2.00098 4.5L3.05398 2.1525C3.24898 1.7175 3.34598 1.5 3.50098 1.5C3.65598 1.5 3.75298 1.7175 3.94798 2.1525L5.00098 4.5M8.75098 10V2M8.75098 10C8.40098 10 7.74698 9.003 7.50098 8.75M8.75098 10C9.10098 10 9.75548 9.003 10.001 8.75"
          stroke="#8597A8"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </th>
);

export default function DocumentsTable({ documents }: DocumentsTableProps) {
  return (
    <div className="border border-secondary bg-white shadow rounded-xl p-4 mt-4 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <TableHeader label="Document Number" />
              <TableHeader label="Document Name" />
              <TableHeader label="Document Lead" />
              <TableHeader label="Document Preparer" />
              <TableHeader label="Date" />
              <TableHeader label="Due Date" />
              <TableHeader label="Status" />
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr
                key={doc.id}
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  index === documents.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="px-6 py-4 text-sm font-normal text-primary">
                  {doc.documentNumber}
                </td>
                <td className="px-6 py-4 text-sm font-normal text-primary hover:underline cursor-pointer">
                  {doc.documentName}
                </td>
                <td className="px-6 py-4 text-sm font-normal text-primary">
                  {doc.documentLead}
                </td>
                <td className="px-6 py-4 text-sm font-normal text-primary">
                  {doc.documentPreparer}
                </td>
                <td className="px-6 py-4 text-sm font-normal text-primary">{doc.date}</td>
                <td className="px-6 py-4 text-sm font-normal text-primary">
                  {doc.dueDate}
                </td>
                <td className="px-6 py-4 text-sm font-normal">
                  <StatusBadge status={doc.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
