import { RootStore, RootStoreContext } from "./models/root.store";
import { ReactNode, useEffect } from "react";
import { RamasServices } from "./services/ramas.services";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const store = RootStore.create({
    members: {},
    ramas: {},
  });

  useEffect(() => {
    RamasServices.getAllRamas().then((res) => {
      store.ramas.setRamas(res);
    });
  }, [store]);

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
}
