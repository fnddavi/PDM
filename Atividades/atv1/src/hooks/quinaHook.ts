import { useState, useContext, useEffect } from "react";
import { CaixaContext } from "../context/index";
import { sorteioResultados } from "../types";


export const QuinaHooks = () => {
  const [quina, setquina] = useState<sorteioResultados | undefined>();

  const caixaContexto = useContext(CaixaContext);
  const sorteios = caixaContexto?.sorteios?.quina;

  useEffect(() => {
    if (sorteios) {
      setquina(sorteios);
    }
  }, [sorteios]);

  return quina;
};
//