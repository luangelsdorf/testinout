export default function handler(req, res) {
  console.log(req.session);
  res.status(200).send('ok')
}
