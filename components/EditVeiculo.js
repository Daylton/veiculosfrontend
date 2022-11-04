import { React, useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const EditVeiculo = ({ veiculoId, setResponseVeiculo }) => {
  const USER_API_BASE_URL = "http://localhost:8080/veiculos";
  const [isOpen, setIsOpen] = useState(false);
  const [veiculo, setVeiculo] = useState({
    id: "",
    veiculo: "",
    marca: "",
    ano: "",
    descricao: "",
    created: "",
    updated: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USER_API_BASE_URL + "/" + veiculoId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const _veiculo = await response.json();
        setVeiculo(_veiculo);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (veiculoId) {
      fetchData();
    }
  }, [veiculoId]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setVeiculo({ ...veiculo, [event.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const updateVeiculo = async (e) => {
    e.preventDefault();
    const response = await fetch(USER_API_BASE_URL + "/" + veiculoId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(veiculo),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _veiculo = await response.json();
    setResponseVeiculo(_veiculo);
    reset(e);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all bg-white shadow-xl rounded-md">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 ">
                Editar Veiculo
              </Dialog.Title>
              <div className="flex max-w-md max-h-max">
                <div className="py-2">
                  <div className="h-14 my-4">
                    <label className="block text-gray-600 text-sm font-normal ">
                      Veículo
                    </label>
                    <input
                      type="text"
                      name="veiculo"
                      value={veiculo.veiculo}
                      onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    />
                  </div>
                  <div className="h-14 my-4">
                    <label className="block text-gray-600 text-sm font-normal ">
                      Marca
                    </label>
                    <input
                      type="text"
                      name="marca"
                      value={veiculo.marca}
                      onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    />
                  </div>
                  <div className="h-14 my-4">
                    <label className="block text-gray-600 text-sm font-normal ">
                      Ano
                    </label>
                    <input
                      type="text"
                      name="ano"
                      value={veiculo.ano}
                      onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    />
                  </div>
                  <div className="h-14 my-4">
                    <label className="block text-gray-600 text-sm font-normal ">
                      Descrição
                    </label>
                    <input
                      type="text"
                      name="descricao"
                      value={veiculo.descricao}
                      onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    />
                  </div>
                  <div className="h-14 my-4 space-x-4 pt-4 ">
                    <button
                      onClick={updateVeiculo}
                      className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 "
                    >
                      Update
                    </button>
                    <button
                      onClick={reset}
                      className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 "
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditVeiculo;
