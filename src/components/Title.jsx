import { Logo } from "@/components/Logo";

export function Title(props) {
  return (
    <div className="mx-1 flex flex-row items-center">
      <Logo />
      <div className="flex h-4 w-4"></div>
    </div>
  );
}
