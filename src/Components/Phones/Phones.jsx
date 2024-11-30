import axios from "axios";
import { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone') 
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1]) || Math.floor(Math.random() * 1000) + 100 
                    };
                    return obj;
                });
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
            })
            .catch(error => console.error("Error fetching phone data:", error));
    }, []);

    return (
        <div>
            <h2 className="text-4xl text-center mb-8">Phones: {phones.length}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={phones}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar name="Phone Price" dataKey="price" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Phones;
