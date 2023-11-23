import { MemberStatus } from "../types/member";

interface MemberStatusProps {
  status: MemberStatus;
}
export function MemberStatus({ status }: MemberStatusProps) {
  return (
    <div className="flex items-center border gap-1 w-full  p-1 rounded-md bg-white ">
      <div
        className={`h-1.5 w-1.5 rounded-full ${
          status === "active"
            ? "bg-green-500 text-green-500"
            : "bg-red text-red"
        }`}
      ></div>

      <p
        className={`text-[8px] font-bold ${
          status === "active" ? " text-green-500" : " text-red"
        }  `}
      >
        {status.toUpperCase()}
      </p>
    </div>
  );
}
