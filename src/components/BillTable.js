import React, { useState, useEffect } from "react";
import lucroRural from "../api/lucroRural";
import "../stylesCSS/BillTable.css";
import ListBills from "./ListBills";



const BillTable = () => {

  const [total, setTotal] = useState('')

  useEffect(() => {
    const receiveTotal = async () => {
      const response = await lucroRural.get("/total-das-notas");
      setTotal(response.data.data[0]['sum'])
    };
    
    receiveTotal();
  }, []);

  return (
    <>
      <div className="BillTable">
        <h1>Contas a pagar</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome do Fornecedor</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Telefone</th>
              <th scope="col">Data de Vencimento</th>
              <th scope="col">Pago</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <ListBills />
          <tfoot>
            <tr className="total">
              <td className="valor-total">Valor Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="">{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default BillTable;
