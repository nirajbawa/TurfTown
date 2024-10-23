import Razorpay from "razorpay"

const RAZORPAY_API_KEY = process.env.RAZORPAY_KEY_ID || "";
const RAZORPAY_APT_SECRET = process.env.RAZORPAY_SECRET_KEY || "";

const razorpay = new Razorpay({
  key_id: RAZORPAY_API_KEY,
  key_secret: RAZORPAY_APT_SECRET,
});

export default razorpay;