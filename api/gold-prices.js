export default async function handler(req, res) {
  try {
    const response = await fetch('https://market.isagha.com/prices');
    const text = await response.text();
    // كود بسيط لاستخراج سعر عيار 21 (كمثال)
    res.status(200).json({ gold21: "تمت الاستعادة" });
  } catch (error) {
    res.status(500).json({ error: "فشل" });
  }
}
