export default async function handler(req, res) {
  try {
    const response = await fetch('https://market.isagha.com/prices');
    const text = await response.text();
    
    // هذا سيطبع لنا في سجلات Vercel ما الذي يأتي فعلياً من الموقع
    console.log("Response length:", text.length);
    
    // إرجاع رد تجريبي للتطبيق حتى لا ينهار
    res.status(200).json({ buy: "100", sell: "100", message: "تم الاتصال" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
