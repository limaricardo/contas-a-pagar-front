import React, { useEffect, useState } from "react";
import lucroRural from "../api/lucroRural";
import "../stylesCSS/ListBills.css";
import DeleteBill from "./DeleteBill";
import EditBill from "./EditBill";

const ListBills = () => {
  
  const [contasAPagar, setContasAPagar] = useState([]);



  useEffect(() => {
    const receiveContasAPagar = async () => {
      const response = await lucroRural.get("/contas-a-pagar-list");
      setContasAPagar(JSON.parse(response.data.data));
    };
    receiveContasAPagar();
  }, []);


  const listReceived = contasAPagar.data && contasAPagar.data.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row["nome"]}</td>
        <td>{row["cnpj"]}</td>
        <td>{row["telefone"]}</td>
        <td>{row["data_vencimento"]}</td>
        <td>{(row["pago"]) ? "Sim" : "Não"}</td>
        <td>{row["valor_total"] ? row["valor_total"] : "Nota não vinculada"}</td>
        <td><EditBill id={row["id"]} /></td>
        <td><DeleteBill id={row["id"]} /></td>
      </tr>
    );
  });
  
  return <tbody>{listReceived}</tbody>;
};

export default ListBills;
