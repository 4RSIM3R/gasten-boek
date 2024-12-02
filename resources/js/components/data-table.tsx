import React from 'react';

export type Column<T> = {
    header: string;
    accessor: keyof T;
    isRowHeader?: boolean;
    render?: (item: T) => React.ReactNode;
};

export type TableProps<T extends Record<string, any>> = {
    columns: Column<T>[];
    data: T[];
    className?: string;
    emptyMessage?: string;
};

export function Table<T extends Record<string, any>>({
    columns,
    data,
    className,
    emptyMessage = 'No data available',
}: TableProps<T>) {
    return (
        <div className={className}>
            {data.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {columns.map((col, idx) => (
                                <th
                                    key={idx}
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((col, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-6 py-4 whitespace-nowrap ${col.isRowHeader ? 'font-medium text-gray-900' : 'text-gray-600'
                                            }`}
                                    >
                                        {col.render ? col.render(row) : String(row[col.accessor])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="flex justify-center py-4 text-gray-500">{emptyMessage}</div>
            )}
        </div>
    );
}
