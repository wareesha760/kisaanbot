// ShopRow.jsx
import React from "react";
import Shop from "./shop"; // Make sure path is correct

const cardData = [
    {
    title: "اے آئی ماہر سے فوری مشورہ",
    image: "/mic.png",
    description:"فصل لگانے کا وقت، کھاد کی مقدار  ہر سوال کا فوری اور قابلِ بھروسا جواب- اپنا سوال بھیجیں اور جدید زرعی رہنمائی حاصل کریں۔"
    },
    {
    title: "موسم کا حال",
    image: "/weather.webp",
    description:"بارش، دھوپ یا ہوا , اپنے کھیت کے موسم کی تازہ ترین معلومات حاصل کریں اور فصل کی منصوبہ بندی میں آگے رہیں "
    },
  {
    title: "کرایہ مشینری",
    image: "/tractor.png",
    description: "-زرعی مشینری کا کرایہ پر لینا یا دینا اب آسان! ٹریکٹر، ہارویسٹر، اور دیگر آلات صرف ایک کلک کی دوری پر",
  },
  {
    title: "فصل کے مطابق مشورہ",
    image: "/crop specific.png",
    description: "آپ کی زمین، موسم اور فصل کے حساب سے ذاتی رہنمائی۔ صحیح وقت، صحیح کھاد اور بہتر پیداوار کا مکمل پلان۔"
  },
  {
    title: "سمارٹ کسان پلانر",
    image: "/calender.jpg",
    description: "ایک ذہین زراعتی فیچر ہے جو کسانوں کو ان کی زمین، موسم، پانی، اور علاقے کے لحاظ سے بہترین فصل کی منصوبہ بندی میں مدد فراہم کرتا ہے۔"},
  {
    title: " کھاد کیلکولیٹر",
    image: "/calcu.jpeg",
    description: "-زمین کے رقبے، فصل کی قسم، اور مٹی کی ضرورت کے مطابق درست مقدار میں کھاد تجویز کریں",
  },
   {
    title: "  ماہرِ زراعت سے مشورہ",
    image: "/expert.png",
    description: "-فصل، بیماری یا کھاد سے متعلق سوال ہے؟ ابھی کال یا میسج پر ماہرین سے رہنمائی حاصل کریں",
  }
];

function ShopRow() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 min-h-screen">
      {cardData.map((card, index) => (
        <Shop
          key={index}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default ShopRow;
