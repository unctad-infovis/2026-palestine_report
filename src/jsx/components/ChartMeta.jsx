import './ChartMeta.css';

export default function ChartMeta({ source, note }) {
  if (!source && !note) return null;
  return (
    <div className="palestine_report_meta">
      {source && (
        <div className="palestine_report_meta_row">
          <em>Source:</em> {source}
        </div>
      )}
      {note && (
        <div className="palestine_report_meta_row">
          <em>Note:</em> {note}
        </div>
      )}
    </div>
  );
}
