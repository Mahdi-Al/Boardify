import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-h-screen-2xl mx-auto flex items-center w-full justify-between">
        {" "}
        <Logo />
        <section className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href="/sign-in">sign-in</Link>
          </Button>

          <Button size={"sm"} asChild>
            <Link href={"/sign-up"}>Get Boardify for free</Link>
          </Button>
        </section>
      </div>
    </div>
  );
};
export default Navbar;
