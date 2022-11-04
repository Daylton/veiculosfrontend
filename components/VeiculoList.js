import { React, useState, useEffect } from "react";
import Veiculo from "./Veiculo";
import EditVeiculo from "./EditVeiculo";

const VeiculoList = ({ veiculo }) => {
  const USER_API_BASE_URL = "http://localhost:8080/veiculos";
  const [veiculos, setVeiculos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [veiculoId, setVeiculoId] = useState(null);
  const [responseVeiculo, setResponseVeiculo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const veiculos = await response.json();
        setVeiculos(veiculos);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [veiculo, responseVeiculo]);

  const deleteVeiculo = (e, id) => {
    e.preventDefault();
    fetch(USER_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (veiculos) {
        setVeiculos((prevElement) => {
          return prevElement.filter((veiculo) => veiculo.id !== id);
        });
      }
    });
  };

  const editVeiculo = (e, id) => {
    e.preventDefault();
    setVeiculoId(id);
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Veiculo
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Marca
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Ano
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Descrição
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Created
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Updated
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody className="bg-white">
                {veiculos?.map((veiculo) => (
                  <Veiculo
                    veiculo={veiculo}
                    key={veiculo.id}
                    deleteVeiculo={deleteVeiculo}
                    editVeiculo={editVeiculo}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <EditVeiculo
        veiculoId={veiculoId}
        setResponseVeiculo={setResponseVeiculo}
      />
    </>
  );
};

export default VeiculoList;
