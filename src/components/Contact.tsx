import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// Provide typings for Vite's import.meta.env so TypeScript knows about our keys
declare global {
  interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
    // add other VITE_... vars here if needed
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    serviceType: "",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    additionalDetails: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: "Babinatauenterprise@gmail.com",
      from_name: formData.fullName,
      from_email: formData.email,
      mobile: formData.mobile,
      service_type: formData.serviceType,
      pickup_date: formData.pickupDate,
      pickup_time: formData.pickupTime,
      pickup_location: formData.pickupLocation,
      dropoff_location: formData.dropoffLocation,
      additional_details: formData.additionalDetails,
    };

    // Send email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(
        (response) => {
          toast.success("Booking request sent! We'll be in touch soon.");
          // Reset form
          setFormData({
            fullName: "",
            email: "",
            mobile: "",
            serviceType: "",
            pickupDate: "",
            pickupTime: "",
            pickupLocation: "",
            dropoffLocation: "",
            additionalDetails: "",
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send booking request. Please try again.");
          setIsLoading(false);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-[#111111]">Contact & Booking</h2>
          <p className="text-lg text-[#666666]">
            Send us your details and we'll confirm your trip as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-xl border border-[#E0E0E0] p-8">
            <h3 className="text-xl mb-6 text-[#111111]">Talk to our team</h3>
            <p className="text-[#666666] mb-8">
              We're available every day from 06:00 to 22:00.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#2E7D32]" />
                </div>
                <div>
                  <p className="text-[#111111] mb-1">+27 79 419 4789</p>
                  <p className="text-xs text-[#777777]">Call or WhatsApp</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#1565C0]" />
                </div>
                <div>
                  <p className="text-[#111111] mb-1">Babinatauenterprise@gmail.com</p>
                  <p className="text-xs text-[#777777]">We respond within a few hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF3E0] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#EF6C00]" />
                </div>
                <div>
                  <p className="text-[#111111] mb-1">Cape Town, Western Cape</p>
                  <p className="text-xs text-[#777777]">Shuttles across Cape Town & surrounds</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button
              className="w-full mt-8 bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#2E7D32]"
              variant="outline"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with us on WhatsApp
            </Button>

            {/* Map Placeholder */}
            {/* <div className="mt-8 aspect-video bg-[#E0E0E0] rounded-lg flex items-center justify-center">
              <p className="text-[#888888]">Map View</p>
            </div> */}
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl border border-[#E0E0E0] p-8">
            <h3 className="text-xl mb-6 text-[#111111]">Request a booking</h3>
            <p className="text-[#666666] mb-8">
              Share your trip details and we'll send a confirmation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="text-[#555555]">
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Mokoena"
                    className="mt-2 bg-[#FAFAFA] border-[#DDDDDD]"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-[#555555]">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 bg-[#FAFAFA] border-[#DDDDDD]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mobile */}
                <div>
                  <Label htmlFor="mobile" className="text-[#555555]">
                    Mobile number
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="e.g. +27 82 000 0000"
                    className="mt-2 bg-[#FAFAFA] border-[#DDDDDD]"
                    required
                  />
                </div>

                {/* Service Type */}
                <div>
                  <Label htmlFor="serviceType" className="text-[#555555]">
                    Service type
                  </Label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    aria-label="Service type"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="mt-2 w-full h-10 px-3 rounded-md border border-[#DDDDDD] bg-[#FAFAFA] text-sm"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="airport">Airport transfer</option>
                    <option value="tour">Private tour</option>
                    <option value="shuttle">Point-to-point shuttle</option>
                    <option value="corporate">Corporate travel</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pickup Date */}
                <div>
                  <Label htmlFor="pickupDate" className="text-[#555555]">
                    Pickup date
                  </Label>
                  <Input
                    id="pickupDate"
                    name="pickupDate"
                    type="date"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    className="mt-2 bg-[#FAFAFA] border-[#DDDDDD]"
                    required
                  />
                </div>

                {/* Pickup Time */}
                <div>
                  <Label htmlFor="pickupTime" className="text-[#555555]">
                    Pickup time
                  </Label>
                  <Input
                    id="pickupTime"
                    name="pickupTime"
                    type="time"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="mt-2 bg-[#FAFAFA] border-[#DDDDDD]"
                    required
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <Label htmlFor="pickupLocation" className="text-[#555555]">
                  Pickup location
                </Label>
                <Input
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="Hotel, address or airport terminal"
                  className="mt-2 bg-[#FAFAFA] border-[#DDDDDD]"
                  required
                />
              </div>

              {/* Drop-off Location */}
              <div>
                <Label htmlFor="dropoffLocation" className="text-[#555555]">
                  Drop-off location
                </Label>
                <Input
                  id="dropoffLocation"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  placeholder="Destination address or area"
                  className="mt-2 bg-[#FAFAFA] border-[#DDDDDD]"
                  required
                />
              </div>

              {/* Additional Details */}
              <div>
                <Label htmlFor="additionalDetails" className="text-[#555555]">
                  Additional details
                </Label>
                <Textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  placeholder="Number of passengers, luggage, child seats, special requests..."
                  className="mt-2 bg-[#FAFAFA] border-[#DDDDDD] min-h-[100px]"
                />
              </div>

              <p className="text-xs text-[#777777]">
                By sending this form you agree to be contacted with a quote and availability.
              </p>

              <Button
                type="submit"
                className="w-full bg-[#C62828] hover:bg-[#C62828]/90 py-6"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send booking request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
