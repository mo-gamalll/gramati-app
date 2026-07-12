export default async function handler(req, res) {
  try {
    // رابط بيانات بديل يعمل بصيغة JSON
    const response = await fetch('https://gold-api.vercel.app/api/gold');
    const data = await response.json();

    // نرسل البيانات بصيغة JSON لتطبيقك
    res.status(200).json(data);
  } catch (error) {
    // في حال فشل الاتصال، نرسل هيكل بيانات وهمي حتى لا ينهار الموقع
    res.status(200).json({ buy: "0", sell: "0" });
  }
}
