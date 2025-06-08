import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HotelBookingApp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    nights: 1,
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    alert("Redirecting to payment gateway...");
    setTimeout(() => {
      alert("Payment successful!");
      setBookingConfirmed(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center">🏨 Hotel Booking</h2>

          {bookingConfirmed ? (
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-green-600">
                Booking Confirmed!
              </h3>
              <p>
                Thank you, <strong>{form.name}</strong>. A confirmation email
                has been sent to <strong>{form.email}</strong>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePayment();
              }}
              className="space-y-4"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="nights">Number of Nights</Label>
                <Input
                  id="nights"
                  type="number"
                  name="nights"
                  value={form.nights}
                  onChange={handleChange}
                  min={1}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Book Now
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HotelBookingApp;