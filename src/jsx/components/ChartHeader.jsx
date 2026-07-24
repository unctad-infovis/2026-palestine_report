import './ChartHeader.css';

export default function ChartHeader({ title, subtitle, description, large = false, children }) {
  return (
    <>
      <div className="palestine_report_header">
        <h3 className={`palestine_report_header_title${large ? ' palestine_report_header_title--lg' : ''}`}>{title}</h3>
        {subtitle && <p className="palestine_report_header_subtitle">{subtitle}</p>}
      </div>
      {(description || children) && (
        <p className="palestine_report_insight">
          {description}
          {description && children && (
            <>
              <br />
              <br />
            </>
          )}
          {children}
        </p>
      )}
    </>
  );
}
