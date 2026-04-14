interface SectionHeaderProps {
  etiket: string;
  baslik: string;
}

export default function SectionHeader({ etiket, baslik }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-label">{etiket}</span>
      <h2 className="section-title">{baslik}</h2>
    </div>
  );
}
