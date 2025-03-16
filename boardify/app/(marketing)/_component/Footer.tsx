import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-slate-100  p-4 border-t  ">
      <div className="md:max-h-screen-2xl mx-auto flex items-center w-full justify-between">
        {" "}
        <Logo />
        <section className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant={"ghost"} size={"sm"}>
            Privacy Policy
          </Button>

          <Button size={"sm"} variant={"ghost"}>
            Terms of Service
          </Button>
        </section>
      </div>
    </div>
  );
};
export default Footer;
