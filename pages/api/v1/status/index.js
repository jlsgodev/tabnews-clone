import database from "../../../database.js";

async function status(req, res) {
  const result = await database.query('SELECT 1 + 1 as sum;' )
  console.log(result.rows;
  res.status(200).json({ chave: "OK!!!" });
}
export default status;


