"use client";

type Props = {
  total: number;
};

export default function Pagination({ total }: Props) {
  return (
    <div className="pagination-wrapper">
      <p className="pagination-info">
        Total Records: <span className="pagination-count">{total}</span>
      </p>

      <div className="pagination-buttons">
        <button className="page-btn-disabled">Prev</button>
        <button className="page-btn-active">1</button>
        <button className="page-btn cursor-not-allowed">2</button>
        <span className="page-dots">...</span>
        <button className="page-btn cursor-not-allowed">10</button>
        <button className="page-btn-disabled">Next</button>
      </div>
    </div>
  );
}
