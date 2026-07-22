import Image from "next/image";

type ConcoroRadarVisualProps = {
  label: string;
};

const partnerRows = [
  [
    { src: "/partners/roma.svg", alt: "Roma Capitale" },
    { src: "/partners/milano.svg", alt: "Comune di Milano" },
    { src: "/partners/inps.svg", alt: "INPS" },
  ],
  [
    { src: "/partners/inpa.svg", alt: "inPA" },
    { src: "/partners/ferrovie.svg", alt: "Ferrovie dello Stato Italiane" },
  ],
  [{ src: "/partners/agenzia.svg", alt: "Agenzia delle Entrate" }],
] as const;

export function ConcoroRadarVisual({ label }: ConcoroRadarVisualProps) {
  return (
    <div className="case-visual case-visual--radar" aria-label={label}>
      <div className="concoro-radar__partners">
        {partnerRows.map((row, rowIndex) => (
          <div className="concoro-radar__row" key={rowIndex}>
            {row.map((partner) => (
              <div className="concoro-radar__card" key={partner.src}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={96}
                  height={48}
                  className="concoro-radar__logo"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="concoro-radar" aria-hidden="true">
        <div className="concoro-radar__beam" />
        <div className="concoro-radar__rings">
          {Array.from({ length: 8 }, (_, index) => <i key={index} />)}
        </div>
        <span className="concoro-radar__origin" />
      </div>
    </div>
  );
}
