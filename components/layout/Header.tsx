type HeaderProps = {
  clinicName: string;
};

// Top site bar — shows the clinic logo mark and name (the ClinicInfo banner).
export function Header({ clinicName }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-lg font-semibold text-white shadow-sm">
          A
        </span>
        <span className="text-lg font-semibold tracking-tight text-slate-900">
          {clinicName}
        </span>
      </div>
    </header>
  );
}
