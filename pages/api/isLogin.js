export default function handler(req, res) {
  res.status(200).json({ isLoginStatus: req.cookies.a_name })
}
