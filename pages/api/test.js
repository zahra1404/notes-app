import dbConnect from "../../utilis/dbConnect";

dbConnect();

export default async (req , res) => {
  res.json({ test:'test'});
}