import { Shield, Clock, Car, Edit } from "lucide-react";

export function WhyUs() {
  const stats = [
    { number: "10+", label: "Years experience" },
    { number: "4.9", label: "Average rating" },
    { number: "25k+", label: "Trips completed" },
    { number: "24/7", label: "Support & service" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Professional drivers",
      description: "Fully licensed, well-trained drivers with local knowledge of Cape Town and surrounds.",
      badge: "Background checked",
      color: "bg-[#E8F5E9] text-[#2E7D32]",
    },
    {
      icon: Clock,
      title: "Reliable & on time",
      description: "Live tracking, clear communication and on-time pickups for every booking.",
      badge: "Flight delays monitored",
      color: "bg-[#E3F2FD] text-[#1565C0]",
    },
    {
      icon: Car,
      title: "Comfortable vehicles",
      description: "Air conditioned, clean and regularly serviced vehicles for short and long trips.",
      badge: "Sedan, SUV & minibus",
      color: "bg-[#FFF3E0] text-[#EF6C00]",
    },
    {
      icon: Edit,
      title: "Flexible & custom",
      description: "Mix transfers and tours, build multi-day itineraries and add stops that suit your plans.",
      badge: "Tailored quotes on request",
      color: "bg-[#F3E5F5] text-[#6A1B9A]",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-[#111111]">Why Travel with Babina Tau?</h2>
          <p className="text-lg text-[#666666]">
            Trusted, professional and comfortable transport for locals and visitors alike.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl border border-[#E0E0E0] p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl mb-2 text-[#111111]">{stat.number}</div>
                <div className="text-sm text-[#777777]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E0E0E0] p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-3 text-[#111111]">{feature.title}</h3>
                <p className="text-[#666666] mb-4">{feature.description}</p>
                <div className="inline-block px-4 py-2 bg-[#F5F5F5] rounded-full">
                  <span className="text-xs text-[#555555]">{feature.badge}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
