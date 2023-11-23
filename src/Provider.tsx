import { RootStore, RootStoreContext } from "./models/root.store";
import { ReactNode, useCallback, useEffect } from "react";
import { RamasServices } from "./services/ramas.services";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const store = RootStore.create({
    members: {},
    ramas: {},
  });

  const setData = useCallback(async () => {
    RamasServices.getAllRamas().then((res) => {
      store.ramas.setRamas(res);
    });
  }, [store]);
  /* ACA AGREGAR EL FETCHING DE DATOS A  LA DB DE LA COMUNIDAD. */

  useEffect(() => {
    setData();
  }, [store]);

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
}
