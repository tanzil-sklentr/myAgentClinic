type FooterProps = {
  clinicName: string;
  tagline: string;
};

// Site footer — repeats the ClinicInfo banner (name + tagline).
export function Footer({ clinicName, tagline }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 py-6">
      <div className="mx-auto max-w-5xl px-4 text-sm text-slate-400 sm:px-6">
        {clinicName} · {tagline}
      </div>
    </footer>
  );
}
