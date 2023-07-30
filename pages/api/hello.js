// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  await new Promise(r => setTimeout(r, 2000));
  //res.status(200).json({ name: 'John Doe' })
}
