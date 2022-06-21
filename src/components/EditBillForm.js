import React, { useState, useEffect } from "react";
import lucroRural from "../api/lucroRural";
import Box from "@mui/material/Box";
import "../stylesCSS/NewBillForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarEvent } from "react-bootstrap-icons";
import { toast } from "react-toastify";

// Import for Checkmarks of Notas Fiscais
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";




const NewBillForm = ({ setShowModal, id }) => {
  const [fornecedor, setFornecedor] = useState("");
  const [fornecedores, setFornecedores] = useState([]);

  const [notaFiscal, setNotaFiscal] = useState([]);
  const [notasFiscais, setNotasFiscais] = useState([]);

  const [pago, setPago] = useState(false);

  const [startDate, setStartDate] = useState(new Date());


  //useEffect to get data from API

  useEffect(() => {
    const receiveFornecedor = async () => {
      const response = await lucroRural.get("/fornecedores");
      setFornecedores(JSON.parse(response.data.data));
    };

    const receiveNotasFiscais = async () => {
      const response = await lucroRural.get("/notas-fiscais");
      setNotasFiscais(JSON.parse(response.data.data));
    };

    receiveFornecedor();
    receiveNotasFiscais();
  }, []);

  // Configuration for Checkmarks of Notas Fiscais
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setNotaFiscal(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fornecedor: fornecedor,
      dataVencimento: startDate,
      pago: pago,
      notasFiscais: [notaFiscal],
      id: id
    };

    lucroRural
      .post("/contas-a-pagar-edit", {
        data,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Conta a pagar editada com sucesso!", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            setShowModal(false);
          }, 1000);
          setTimeout(() => {
            window.location.reload();
          }, 2000)
        }
      })
      .catch((error) => {
        toast.error(
          "Uma ou mais Notas Fiscais não pertencem ao mesmo fornecedor",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
  };


  return (
    <form action="/contas-a-pagar" onSubmit={onHandleSubmit}>
      <div className="Container_billForm">
        <h2>Editar Nova Conta a Pagar</h2>
        <div className="Fornecedor_input">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="fornecedor-label">Fornecedor</InputLabel>
              <Select
                labelId="fornecedor-label"
                id="fornecedor"
                value={fornecedor}
                label="fornecedor"
                onChange={(e) => setFornecedor(e.target.value)}
              >
                {fornecedores.map((fornecedor) => {
                  return (
                    <MenuItem key={fornecedor.id} value={fornecedor.id}>
                      {fornecedor.nome}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="DatePicker_input">
          <div className="DataDeVencimento">
            <div className="vencimento">
              <p>Data de Vencimento</p>
              <CalendarEvent />
            </div>
            <DatePicker
              selected={startDate}
              value={startDate}
              onChange={(date) => setStartDate(date)}
            ></DatePicker>
          </div>
        </div>
        <div className="pago">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="pago-label">Pago</InputLabel>
              <Select
                labelId="pago-label"
                id="pago"
                value={pago}
                label="pago"
                onChange={(e) => setPago(e.target.value)}
              >
                <MenuItem value={true}>Sim</MenuItem>
                <MenuItem value={false}>Não</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="nota-fiscal">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Notas Fiscais
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={notaFiscal}
              onChange={handleChange}
              input={<OutlinedInput label="NotasFiscais" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {notasFiscais
                .filter((nota) => {
                  return nota.fornecedor === fornecedor;
                })
                .map((nota) => (
                  <MenuItem key={nota.id} value={nota.id}>
                    <Checkbox checked={notaFiscal.indexOf(notaFiscal) > -1} />
                    <ListItemText primary={nota.numero_nota} />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <Button type="submit">Editar Conta a Pagar</Button>
      </div>
    </form>
  );
};

export default NewBillForm;
