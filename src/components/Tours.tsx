import { TourCard } from "./TourCard";

export function Tours() {
  const tours = [
    {
      title: "Cape Point & Peninsula",
      description: "Chapman's Peak, Cape Point, Boulders Beach and coastal towns.",
      duration: "Full-day tour",
      highlights: "Scenic • Coastal",
      badge: { text: "Full-day tour", color: "text-[#C62828]", bgColor: "bg-[#FFEBEE]" },
      image: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdG93biUyMGJlYWNofGVufDF8fHx8MTc2MzQwODUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Cape Winelands Tour",
      description: "Stellenbosch, Paarl and Franschhoek estates.",
      duration: "Half-day / Full-day",
      highlights: "Wine tasting",
      badge: { text: "Wine tasting", color: "text-[#2E7D32]", bgColor: "bg-[#E8F5E9]" },
      image: "https://images.unsplash.com/photo-1633338001234-63ede6a2c0e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwdGFzdGluZyUyMHZpbmV5YXJkfGVufDF8fHx8MTc2MzM0NTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Cape Town City Tour",
      description: "Table Mountain (weather), Bo-Kaap, Company's Garden and more.",
      duration: "Half-day",
      highlights: "Highlights",
      badge: { text: "Highlights", color: "text-[#1565C0]", bgColor: "bg-[#E3F2FD]" },
      image: "https://images.unsplash.com/photo-1548766255-344f0e8085c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdG93biUyMG1vdW50YWlufGVufDF8fHx8MTc2MzQwODUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Whale Watching",
      description: "Hermanus and Overberg whale watching viewpoints.",
      duration: "Full-day",
      highlights: "Seasonal",
      badge: { text: "Seasonal (Jun–Nov)", color: "text-[#EF6C00]", bgColor: "bg-[#FFF3E0]" },
      image: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdG93biUyMGJlYWNofGVufDF8fHx8MTc2MzQwODUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Safari Day Trip",
      description: "Private game reserve within driving distance of Cape Town.",
      duration: "Full-day",
      highlights: "Big 5 safari",
      badge: { text: "Big 5 safari", color: "text-[#2E7D32]", bgColor: "bg-[#E8F5E9]" },
      image: "https://images.unsplash.com/photo-1664270734194-256bbb732959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZXxlbnwxfHx8fDE3NjMzOTY3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Custom & Private Tours",
      description: "Design your own route and timing with our team.",
      duration: "Flexible",
      highlights: "Custom itineraries",
      badge: { text: "Flexible itineraries", color: "text-[#1565C0]", bgColor: "bg-[#E3F2FD]" },
      image: "https://images.unsplash.com/photo-1548766255-344f0e8085c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdG93biUyMG1vdW50YWlufGVufDF8fHx8MTc2MzQwODUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="tours" className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-[#111111]">Tours We Offer</h2>
          <p className="text-lg text-[#666666]">
            Curated Cape Town and Western Cape experiences for every traveler.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
