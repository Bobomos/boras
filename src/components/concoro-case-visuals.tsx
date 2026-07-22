type VisualProps = {
  copy: string[];
};

export function ConcoroIngestionVisual({ copy }: VisualProps) {
  return (
    <div className="case-visual concoro-motion concoro-motion--ingestion" aria-label={copy[0]}>
      <div className="concoro-ingestion__track" aria-hidden="true" />
      {copy.slice(1).map((step, index) => (
        <div className="concoro-ingestion__step" key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <i aria-hidden="true" />
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}
