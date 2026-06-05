import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

type MainLayoutProps = {
  clinicName: string;
  tagline: string;
  children: React.ReactNode;
};

// Page shell composed of three subcomponents: Header / Main / Footer.
// Presentational only — callers pass the ClinicInfo banner values and the
// main content (e.g. the home-page hero) as children.
export function MainLayout({ clinicName, tagline, children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header clinicName={clinicName} />
      <Main>{children}</Main>
      <Footer clinicName={clinicName} tagline={tagline} />
    </div>
  );
}
