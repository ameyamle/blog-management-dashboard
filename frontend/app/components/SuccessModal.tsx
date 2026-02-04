"use client";

type Props = {
  open: boolean;
  message: string;
  onClose: () => void;
};

export default function SuccessModal({ open, message, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
      <div className="card w-full max-w-sm p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <span className="text-lg font-semibold">OK</span>
        </div>
        <h2 className="text-xl font-semibold text-slate-900">Success</h2>
        <p className="mt-2 text-sm text-slate-600">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Done
        </button>
      </div>
    </div>
  );
}
