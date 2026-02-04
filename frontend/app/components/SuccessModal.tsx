"use client";

type Props = {
  open: boolean;
  message: string;
  onClose: () => void;
};

export default function SuccessModal({ open, message, onClose }: Props) {
  if (!open) return null;

  return (
  <div className="success-modal-overlay">
    <div className="success-modal-card">
      <div className="success-modal-icon">
        <span className="success-modal-icon-text">OK</span>
      </div>

      <h2 className="success-modal-title">Success</h2>

      <p className="success-modal-message">{message}</p>

      <button onClick={onClose} className="success-modal-btn">
        Done
      </button>
    </div>
  </div>
);

}
