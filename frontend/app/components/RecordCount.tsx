"use client";

type Props = {
  total: number;
};

export default function RecordCount({ total }: Props) {
  return (
    <div className="text-sm text-slate-600">
      Total Records: <span className="font-semibold text-slate-900">{total}</span>
    </div>
  );
}
