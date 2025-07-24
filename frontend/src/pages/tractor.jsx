import React, { useState } from 'react';
import {
  Truck,
  Package,
  CheckCircle,
  XCircle,
  ChevronLeft,
  Search,
  SlidersHorizontal,
  PlusCircle
} from 'lucide-react';

const Tractor = () => {
  const [currentView, setCurrentView] = useState('login');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "ٹریکٹر MF-385",
      description: "ماڈل: 2024، قیمت: 1,800,000 روپے، ہارس پاور: 85، فیول ٹائپ: ڈیزل، ٹرانسمیشن: 8 فارورڈ، 2 ریورس، ٹائر: 18.4-30 (ریئر)، 11.2-24 (فرنٹ)، وزن: 2,700 کلوگرام",
      price: "1,800,000",
      imageUrl: "https://placehold.co/150x100/A0E7A0/000000?text=Tractor",
      details: [
        { label: "قیمت", value: "Rs. 1,800,000" },
        { label: "ماڈل", value: "2024" },
        { label: "ہارس پاور", value: "85" },
        { label: "فیول ٹائپ", value: "ڈیزل" },
        { label: "ٹرانسمیشن", value: "8 فارورڈ، 2 ریورس" },
        { label: "ٹائر", value: "18.4-30 (ریئر)، 11.2-24 (فرنٹ)" },
        { label: "وزن", value: "2,700 کلوگرام" }
      ]
    },
    {
      id: 2,
      name: "ٹریکٹر اٹالین",
      description: "ماڈل: 2023، قیمت: 980,000 روپے، ہارس پاور: 60، فیول ٹائپ: ڈیزل، ٹرانسمیشن: 6 فارورڈ، 1 ریورس، ٹائر: 16.9-28 (ریئر)، 9.5-20 (فرنٹ)، وزن: 2,100 کلوگرام",
      price: "980,000",
      imageUrl: "",
      details: [
        { label: "قیمت", value: "Rs. 980,000" },
        { label: "ماڈل", value: "2023" },
        { label: "ہارس پاور", value: "60" },
        { label: "فیول ٹائپ", value: "ڈیزل" },
        { label: "ٹرانسمیشن", value: "6 فارورڈ، 1 ریورس" },
        { label: "ٹائر", value: "16.9-28 (ریئر)، 9.5-20 (فرنٹ)" },
        { label: "وزن", value: "2,100 کلوگرام" }
      ]
    }
  ];

  const handleRegister = () => setCurrentView('userType');
  const handleLoginAsGuest = () => setCurrentView('productList');
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentView('productDetail');
  };
  const handleAddToCart = () => {
    if (!selectedProduct) return;
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setCurrentView('productList');
  };

  const renderView = () => {
    switch (currentView) {
      case 'login': return <LoginScreen onRegister={handleRegister} />;
      case 'userType': return <UserTypeSelection onLoginAsGuest={handleLoginAsGuest} />;
      case 'productList': return <ProductListing products={products} onSelectProduct={handleSelectProduct} />;
      case 'productDetail': return <ProductDetail product={selectedProduct} onAddToCart={handleAddToCart} onBack={() => setCurrentView('productList')} />;
      default: return <LoginScreen onRegister={handleRegister} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      {renderView()}
      {showModal && <OrderConfirmationModal show={showModal} onClose={closeModal} />}
    </div>
  );
};

const LoginScreen = ({ onRegister }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">نیا اکاؤنٹ بنائیں</h2>
    {/* Form Inputs omitted for brevity */}
    <button
      type="button"
      onClick={onRegister}
      className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md shadow-md"
    >
      رجسٹر کریں
    </button>
  </div>
);

const UserTypeSelection = ({ onLoginAsGuest }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg w-full max-w-2xl mx-auto overflow-hidden">
    <div className="w-full md:w-1/3 bg-green-700 p-6 text-white text-center rounded-l-xl">
      <h3 className="text-xl font-semibold mb-6">آپ کون ہیں؟</h3>
      {/* User Avatars */}
      <button
        type="button"
        onClick={onLoginAsGuest}
        className="mt-6 bg-white text-green-700 font-bold py-2 px-6 rounded-md shadow-md"
      >
        مہمان کے طور پر لاگ ان کریں
      </button>
    </div>
    <div className="w-full md:w-2/3 p-6 text-right">
      {/* User Details Preview */}
    </div>
  </div>
);

const ProductListing = ({ products, onSelectProduct }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl mx-auto">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">میری مصنوعات</h2>
      <div className="flex items-center space-x-2">
        <Search size={20} className="text-gray-600" />
        <SlidersHorizontal size={20} className="text-gray-600" />
      </div>
    </div>
    <div className="space-y-4">
      {products.map(product => (
        <div key={product.id} onClick={() => onSelectProduct(product)}
          className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100">
          <img src="TRACTOR1.webp" alt={product.name} className="w-full md:w-32 h-24 object-cover rounded-md mb-4 md:mb-0 md:mr-4" />
          <div className="flex-1 text-right">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600" style={{ direction: 'rtl' }}>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
    <button type="button" className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md shadow-md flex items-center justify-center">
      <PlusCircle className="mr-2" size={20} /> نئی مصنوعات شامل کریں
    </button>
  </div>
);

const ProductDetail = ({ product, onAddToCart, onBack }) => (
  product ? (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button type="button" onClick={onBack} className="text-gray-600 hover:text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold text-gray-800">مصنوعات کی تفصیلات</h2>
        <div></div>
      </div>
      <img src="TRACTOR1.webp"alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold text-gray-800 text-right mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm text-right mb-4" style={{ direction: 'rtl' }}>{product.description}</p>
      <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
        {product.details.map((detail, index) => (
          <div key={index} className="flex justify-between items-center text-gray-700 text-sm">
            <span className="font-semibold">{detail.value}</span>
            <span>{detail.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
        <span className="text-2xl font-bold text-green-600">Rs. {product.price}</span>
        <span className="text-gray-600">کل قیمت</span>
      </div>
      <button
        type="button"
        onClick={onAddToCart}
        className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md shadow-md"
      >
        کارٹ میں شامل کریں
      </button>
    </div>
  ) : null
);

const OrderConfirmationModal = ({ show, onClose }) => (
  show ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center w-full max-w-sm mx-auto">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">آپ کا آرڈر موصول ہو چکا ہے</h3>
        <p className="text-gray-600 mb-6">ہم جلد ہی آپ سے رابطہ کریں گے۔</p>
        <button
          type="button"
          onClick={onClose}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md shadow-md"
        >
          ٹھیک ہے
        </button>
      </div>
    </div>
  ) : null
);

export default Tractor;
