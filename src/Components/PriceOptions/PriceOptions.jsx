import PriceCard from "../PriceCard/PriceCard";

const PriceOptionList = () => {

  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 20,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 fitness class per week",
        "Access to basic cardio machines",
        "Free Wi-Fi in the gym area"
      ]
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 40,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "3 fitness classes per week",
        "Free consultation with personal trainer",
        "Access to free weights area",
        "Discounts on merchandise and supplements"
      ]
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 60,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Free personal training sessions (2 per month)",
        "Access to premium facilities (sauna, pool)",
        "Priority booking for classes",
        "Exclusive access to VIP workout zones",
        "Free guest passes (2 per month)"
      ]
    },
    {
      id: 4,
      name: "Family Membership",
      price: 100,
      features: [
        "Access to gym equipment for up to 4 members",
        "Locker room access",
        "Unlimited fitness classes",
        "Family fitness consultations",
        "Discounts on additional services",
        "Access to kids fitness programs",
        "Special family workout sessions"
      ]
    },
    {
      id: 5,
      name: "Student Membership",
      price: 15,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "2 fitness classes per week",
        "Student discount on supplements",
        "Access to student-only events and workshops",
        "Flexible workout hours"
      ]
    },

    {
      id: 6,
      name: "Couples Membership",
      price: 75,
      features: [
        "Access to gym equipment for 2 people",
        "Locker room access",
        "5 fitness classes per week (shared)",
        "Free couples’ fitness consultation",
        "Access to wellness programs",
        "Discounts on partner services (spa, massage)"
      ]
    }
  ];

  return (
    <div className="m-12">
      <h2 className="text-4xl mb-4">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {
          priceOptions.map(option => <PriceCard key={option.id} option={option} />)  // Updated to PriceCard
        }
      </div>
    </div>
  );
};

export default PriceOptionList;
