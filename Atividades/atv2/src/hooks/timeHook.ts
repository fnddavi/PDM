import { useState, useContext, useEffect } from "react";
import { CaixaContext } from "../context/index";
import { sorteioResultados } from "../types";


export const ManiaHooks = () => {
  const [mania, setMania] = useState<sorteioResultados | undefined>();

  const caixaContexto = useContext(CaixaContext);
  const sorteios = caixaContexto?.sorteios?.timemania;

  useEffect(() => {
    if (sorteios) {
      setMania(sorteios);
    }
  }, [sorteios]);

  return mania;
};
//