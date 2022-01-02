// moduled
import Wappalyzer from 'wappalyzer'

export default async function handler(req, res) {
  // start
  const wappalyzer = await new Wappalyzer;
  
  const { url } = req.query
  
  try {
    await wappalyzer.init();
    
    const { technologies } = await wappalyzer.open(url).analyze();
    
    res.status(200).json(technologies)
  } catch(err) {
    res.status(500).json({ msg: err.message })
  }
  
  // finish
  await wappalyzer.destroy();
}

