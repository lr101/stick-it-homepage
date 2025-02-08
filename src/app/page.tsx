import CallToAction from '~/components/CallToActionSection';
import FeatureSection from '~/components/FeatureSection';
import HeroSection from "~/components/HeroSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <div className="container mt-24 mx-auto px-12 py-4">
        <FeatureSection />
        <CallToAction />
      </div>
    </main>
  );
}