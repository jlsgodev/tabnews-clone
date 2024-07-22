import database from "../../../../infra/database.js"; // Importando a conexão com o banco de dados

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  res.status(200).json({ chave: "OK!!!" });
}
export default status;
