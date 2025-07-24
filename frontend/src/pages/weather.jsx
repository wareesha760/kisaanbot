import React from "react";
import { WiDayRain, WiCloudy, WiDaySunny } from "react-icons/wi";
import { FaCloudShowersHeavy } from "react-icons/fa";

// Utility to get Urdu date
const getCurrentDate = (offset = 0) => {
  const days = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعه", "ہفته"];
  const months = [
    "جنوری",
    "فروری",
    "مارچ",
    "اپریل",
    "مئی",
    "جون",
    "جولائی",
    "اگست",
    "ستمبر",
    "اکتوبر",
    "نومبر",
    "دسمبر",
  ];
  const today = new Date();
  today.setDate(today.getDate() + offset);
  return `${days[today.getDay()]}، ${today.getDate()} ${months[today.getMonth()]}`;
};

// Generate hourly forecast
const currentHour = new Date().getHours();
const generateHourly = () => {
  const icons = [<FaCloudShowersHeavy color="black" />, <WiCloudy color="black" />];
  return Array.from({ length: 5 }, (_, i) => {
    const hour = (currentHour + i) % 24;
    const label = i === 0 ? "ابھی" : `${hour}:00`;
    return {
      time: label,
      icon: icons[i % icons.length],
      temp: `${19 + i}°`,
      active: i === 0,
    };
  });
};

// Weather data object
const weatherData = {
  location: "کسان بوٹ",
  temperature: 29.7,
  condition: "ہلکی ہوا",
  range: "31° / 27°",
  hourly: generateHourly(),
  forecast: [
    {
      period: "دوپہر تا شام",
      time: "12 PM - 6 PM",
      icon: "sunny",
      temp: "High: 31°, Low: 28°",
      note: "ان گھنٹوں میں بارش کا امکان ہے",
    },
    {
      period: "شام تا رات",
      time: "6 PM - 12 AM",
      icon: "cloudy",
      temp: "High: 30°, Low: 27°",
      note: "موسم جزوی طور پر ابر آلود",
    },
    {
      period: "رات تا صبح",
      time: "12 AM - 6 AM",
      icon: "sunny",
      temp: "High: 27°, Low: 26°",
      note: "موسم صاف رہنے کا امکان ہے",
    },
  ],
};

// Weather Component
export default function Weather() {
  return (
    <div> 
    <div className="min-h-screen  p-30">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm">{getCurrentDate()}، 02:15 PM</p>
        </div>

        {/* Temperature */}
        <div className="text-center my-6">
          <div className="text-6xl font-bold">{weatherData.temperature}°C</div>
          <div className="mt-2 text-lg">{weatherData.condition}</div>
          <div className="text-sm text-black">{weatherData.range}</div>
        </div>

        {/* Hourly Forecast */}
        <div className="mt-8">
          <h2 className="text-center text-xl font-semibold mb-4">
            موجودہ درجۂ حرارت
          </h2>
          <div className="flex justify-center gap-6 overflow-x-auto scrollbar-hide">
            {weatherData.hourly.map((hour, i) => (
              <div
                key={i}
                className={`rounded-xl min-w-[110px] py-6 px-5 text-center text-lg ${
                  hour.active
                    ? "bg-white text-green-900 font-bold"
                    : "bg-white text-black"
                }`}
              >
                <div className="text-base mb-1">{hour.time}</div>
                <div className="text-4xl mb-2">{hour.icon}</div>
                <div>{hour.temp}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Forecast Cards */}
        <div className="mt-10 w-full max-w-6xl">
          <h2 className="text-lg font-bold text-center mb-4">
            24 گھنٹے کی پیشن گوئی
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weatherData.forecast.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6 shadow-md text-center flex flex-col justify-between min-h-[220px]"
              >
                <div className="text-lg font-semibold mb-2">{item.period}</div>
                <div className="text-sm mb-1">{item.time}</div>
                <div className="text-4xl mb-2">
                  {item.icon === "rain" && <WiDayRain />}
                  {item.icon === "cloudy" && <WiCloudy />}
                  {item.icon === "sunny" && <WiDaySunny />}
                </div>
                <div className="text-base mb-2">{item.temp}</div>
                <div className="text-xs text-grey-500">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
