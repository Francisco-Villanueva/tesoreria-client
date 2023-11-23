import { Route, Routes } from "react-router-dom";
import { RamaInfo } from "../views/RamaInfo";

export function Content() {
  return (
    <section className="border rounded-md p-4 flex   flex-grow bg-white ">
      <Routes>
        <Route path="/:id" element={<RamaInfo />} />
      </Routes>
    </section>
  );
}
