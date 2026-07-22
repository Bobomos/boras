import Image from "next/image";

const logos = [
  ["Frame 768.png", "Ludwig.guru", 82], ["Frame 769.png", "Chanel", 116], ["Frame 770.png", "MEC", 116], ["Frame 771.png", "Red Bull", 116],
  ["Frame 773.png", "Burberry", 114], ["Frame 774.png", "Louis Vuitton", 116], ["Frame 775.png", "Max Mara", 116], ["Frame 776.png", "ZOE", 116],
  ["Frame 777.png", "Acheval", 116], ["Frame 778.png", "Bang & Prix", 116], ["Frame 779.png", "ArtBizTech", 116],
] as const;

function LogoSet() {
  return <>{logos.map(([file, name, width]) => <div className="client-logo" key={file} aria-label={name}><Image src={`/logos/clients/${file}`} alt="" width={width} height={40} sizes="116px" /></div>)}</>;
}

export function LogoMarquee() {
  return <div className="marquee" aria-label="Selected clients"><div className="marquee__track"><LogoSet /><LogoSet /></div></div>;
}
