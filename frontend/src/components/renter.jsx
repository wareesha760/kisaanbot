export default function RenterForm(){
  return (
    <form className="max-w-xl mx-auto space-y-4  bg-gray-50 p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold text-green-700 mb-4">تفصیلات کرایہ دار</h3>

      <input className="w-full border p-2 rounded" placeholder="کسان کا نام" />
      <input className="w-full border p-2 rounded" placeholder="موبائل نمبر" />
      <input className="w-full border p-2 rounded" placeholder="بیٹ کوڈ" />

      {/* علاقہ کی معلومات */}
      <div className="grid grid-cols-2 gap-2">
        <input className="border p-2 rounded" placeholder="ضلع" />
        <input className="border p-2 rounded" placeholder="تحصیل" />
        <input className="border p-2 rounded" placeholder="یونین کونسل" />
        <input className="border p-2 rounded" placeholder="گاؤں" />
        <input className="border p-2 rounded col-span-2" placeholder="شہر" />
        <input className="border p-2 rounded col-span-2" placeholder="زمین رقبہ (ایکڑ میں)" />
      </div>

      {/* ضرورت مشینری کی */}
      <div className="mt-4">
        <label className="block font-medium text-gray-600 mb-2">مشینری کی ضرورت:</label>
        <div className="flex flex-wrap gap-4">
          {['روٹاویٹر', 'ٹریکٹر', 'تریلی', 'تھریشر', 'ٹوپ ویل', 'ڈسک پلاؤ'].map((tool) => (
            <label key={tool} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-green-600" />
              <span>{tool}</span>
            </label>
          ))}
        </div>
      </div>

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded mt-4 hover:bg-green-700">
        اب رجسٹر کریں
      </button>
    </form>
  );
};
