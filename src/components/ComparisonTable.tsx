import React from 'react';
import { Check, X } from 'lucide-react';

interface TableRow {
  feature: string;
  [key: string]: string | boolean;
}

interface ComparisonTableProps {
  rows: TableRow[];
  columns: string[];
}

export function ComparisonTable({ rows, columns }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left py-4 px-4 md:px-6 font-semibold text-text">Feature</th>
            {columns.map((col) => (
              <th key={col} className="text-center py-4 px-4 md:px-6 font-semibold text-text">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-border hover:bg-primary-light/10 transition-colors duration-350 ${
                idx % 2 === 0 ? '' : 'bg-white/50'
              }`}
            >
              <td className="py-4 px-4 md:px-6 font-medium text-text-secondary">
                {row.feature}
              </td>
              {columns.map((col) => {
                const value = row[col];
                return (
                  <td key={`${idx}-${col}`} className="text-center py-4 px-4 md:px-6">
                    {typeof value === 'boolean' ? (
                      value ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-text-muted mx-auto" />
                      )
                    ) : (
                      <span className="text-text-secondary text-sm">{value}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
