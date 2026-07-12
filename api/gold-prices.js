export default async function handler(req, res) {
  try {
    const response = await fetch('https://market.isagha.com/prices');
    const data = await response.text(); 
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
}
