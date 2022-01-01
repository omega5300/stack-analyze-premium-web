import Wappalyzer from 'wappalyzer'

export default async function handler(req, res) {
  const wappalyzer = await new Wappalyzer;
  
  try {
    await wappalyzer.init();
    
    const { technologies } = await wappalyzer.open('https://example.com').analyze();
    
    res.status(200).json(technologies)
  } catch(err) {
    res.status(500).json({ msg: err.message })
  }
  
  await wappalyzer.destroy();
}

