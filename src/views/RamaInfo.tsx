import { observer } from "mobx-react-lite";
import { useStore } from "../models/root.store";
import { MemberStatus, TableHead, TableHeadItem, TableRow } from "../common";
import { RamaInfoHeader } from "../components";

export default observer(function RamaInfo() {
  const {
    ramas: { selectedRama },
  } = useStore();

  return (
    <div className="w-full   flex flex-col gap-4 ">
      <div className="">
        <RamaInfoHeader />
      </div>

      <div className="border  h-full rounded-md shadow-md">
        <TableHead>
          <TableHeadItem>
            <p className="font-normal text-md">Estado</p>
          </TableHeadItem>
          <TableHeadItem>Nombre </TableHeadItem>
          <TableHeadItem>Fecha de nacimiento</TableHeadItem>
          <TableHeadItem>Deuda</TableHeadItem>
        </TableHead>
        <div className=" overflow-auto ">
          {selectedRama?.members.map((member, index) => (
            <TableRow index={index} collapseRow={true}>
              <MemberStatus status={member.status} />
              <p>
                {member.name} {member.lastName}
              </p>
              <p>{member.dateOfBirth}</p>
              <strong>${member.balance}</strong>
            </TableRow>
          ))}
        </div>
      </div>
    </div>
  );
});
