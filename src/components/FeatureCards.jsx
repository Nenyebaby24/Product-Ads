export default function FeatureCards() {
  const features = [
    {
      title: "AI Powered",
      desc:
        "Advanced intelligence for everyday performance.",
    },
    {
      title: "Titanium Build",
      desc:
        "Precision-crafted luxury materials.",
    },
    {
      title: "All-Day Battery",
      desc:
        "Power that keeps up with your lifestyle.",
    },
  ];

  return (
    <div className="features">
      {features.map((feature) => (
        <div
          className="feature-card"
          key={feature.title}
        >
          <span className="feature-label">
            FEATURE
          </span>

          <h3>
            {feature.title}
          </h3>

          <p>
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  );
}