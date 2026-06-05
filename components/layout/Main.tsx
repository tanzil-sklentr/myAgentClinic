type MainProps = {
  children: React.ReactNode;
};

// Primary content region. Grows to fill the space between header and footer
// and centers a max-width container that pages render their content into.
export function Main({ children }: MainProps) {
  return (
    <main className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-5xl px-6 py-20">{children}</div>
    </main>
  );
}
