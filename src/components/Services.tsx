import { ServiceCard } from "./ServiceCard";

export function Services() {
  const services = [
    {
      title: "Private Tours",
      description: "Custom routes and schedules for families, couples, and small groups.",
      badge: { text: "Popular", color: "text-[#C62828]", bgColor: "bg-[#FFEBEE]" },
      image: "https://images.unsplash.com/photo-1760895794582-925d6f1d5762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHRvdXIlMjB0cmF2ZWxlcnN8ZW58MXx8fHwxNzYzNDA4NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Group Tours",
      description: "Share the experience with larger groups, clubs, or colleagues.",
      badge: { text: "Great for teams", color: "text-[#1565C0]", bgColor: "bg-[#E3F2FD]" },
      image: "https://images.unsplash.com/photo-1760895794582-925d6f1d5762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHRvdXIlMjB0cmF2ZWxlcnN8ZW58MXx8fHwxNzYzNDA4NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Chauffeur Hire",
      description: "Professional drivers for VIP and business travel.",
      badge: { text: "Executive", color: "text-[#2E7D32]", bgColor: "bg-[#E8F5E9]" },
      image: "https://images.unsplash.com/photo-1706117759117-11c1ac198190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGNhcnxlbnwxfHx8fDE3NjMzODYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Point-to-Point",
      description: "Fast, direct transfers between your destinations.",
      badge: { text: "Everyday travel", color: "text-[#F57F17]", bgColor: "bg-[#FFFDE7]" },
      image: "https://images.unsplash.com/photo-1745516755240-31c7aa6e7bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaHV0dGxlJTIwdmFuJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc2MzQwODUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Corporate Travel",
      description: "Dependable transport for your teams and clients.",
      badge: { text: "Conferences & Events", color: "text-[#1565C0]", bgColor: "bg-[#E3F2FD]" },
      image: "https://images.unsplash.com/photo-1760895794582-925d6f1d5762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHRvdXIlMjB0cmF2ZWxlcnN8ZW58MXx8fHwxNzYzNDA4NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Airport Transfers",
      description: "On-time pickups and drop-offs for every flight.",
      badge: { text: "24/7 Available", color: "text-[#2E7D32]", bgColor: "bg-[#E8F5E9]" },
      image: "https://images.unsplash.com/photo-1733222012917-e9e74636080c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdHJhbnNmZXIlMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzMwNjYxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-[#111111]">Our Services</h2>
          <p className="text-lg text-[#666666]">
            Comfortable, reliable transport solutions for every type of traveler.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
