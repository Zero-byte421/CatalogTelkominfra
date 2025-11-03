import FeatureCard from "../FeatureCard";

export default function FeatureCardExample() {
  return (
    <div className="p-8 max-w-md">
      <FeatureCard
        icon="dashboard"
        title="Centralized Dashboard"
        description="Access all your applications from one unified dashboard with real-time updates and personalized widgets."
      />
    </div>
  );
}
