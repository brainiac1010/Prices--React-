import PriceOption from "../PriceOption/PriceOption";

const PriceOption = () => {

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
        }
      ];
      


    return (
        <div>
          <h2 className="text-4xl">Best Prices in the town</h2>
            {
priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOption;