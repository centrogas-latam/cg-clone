"use client";

import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const ButtonSubmmit = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => {
        toast({
          title: "Formulario enviado",
          description: "Se te contactará a la brevedad",
        });
      }}
      type="submit"
      className="bg-[#2245e3] hover:bg-[#00ad10] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Enviar
    </Button>
  );
};

export default ButtonSubmmit;
