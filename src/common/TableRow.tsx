import { TableLayout } from ".";
import useModal from "../hooks/useModal";
import { ShortArrowIcon } from "./Icons";

interface Props {
  children: any;
  index: number;
  collapseRow?: boolean;
}

export function TableRow({ children, index, collapseRow = false }: Props) {
  const { isModalOpen, toggleModal } = useModal();
  return (
    <TableLayout
      className={`flex items-center text-blue  relative border-b border-ligth-black ${
        index % 2 === 0 ? "bg-white" : "bg-ligth-black"
      } `}
    >
      {children}

      {collapseRow && (
        <button onClick={toggleModal} className="absolute right-4 top-4 ">
          <ShortArrowIcon
            className={`w-3 rotate-[180deg] transition-all duration-150 ${
              isModalOpen ? "rotate-[270deg]" : ""
            }`}
          />
        </button>
      )}
      {isModalOpen ? <div>data</div> : null}
    </TableLayout>
  );
}
