"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Send } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/schemas/FormSchema";
import { Textarea } from "@/components/ui/textarea";
import { handleSendEmail } from "@/app/actions/handleSendEmail";
import Image from "next/image";
import SectionHeader from "@/components/helper/SectionHeader";

export default function CreateUserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      mensaje: "",
    },
  });

  const onSubmitCreate = async (values: z.infer<typeof formSchema>) => {
    // console.log('click');

    console.log(values);
    const resp = await handleSendEmail(values);

    if (!resp.ok) {
      toast.error("No se envió el correo");
      form.reset();
    } else {
      toast.success("Correo enviado");
      form.reset();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center" id="contacto">
      <SectionHeader>Contacto</SectionHeader>

      <div className="flex flex-col md:flex-row items-center justify-center  mt-16 ">
        <Image
          src={"/img/titan-dev.png"}
          alt="titandev"
          width={550}
          height={550}
          className="hidden md:block"
        />

        <div className="">
          <Form {...form}>
            <form
              className="flex flex-col gap-4 w-80"
              onSubmit={form.handleSubmit(onSubmitCreate)}
            >
              <div>
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem className="px-2 mb-3 text-white">
                      <FormLabel>
                        Nombre <span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Nombre"
                          type="text"
                          className="border border-lime-500 rounded-md p-2 focus-within:outline-green-400 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="px-2 mb-3 text-white">
                      <FormLabel>
                        Email <span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          placeholder="ejemplo@ejemplo.cl"
                          className="border border-lime-500 rounded-md p-2 focus-within:outline-green-400 text-white"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem className="px-2">
                      <FormLabel className="text-white">
                        Déjame tu mensaje{" "}
                        <span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-white border-lime-500 border-[0.81px] min-h-[126px] focus-visible:ring-0 focus-visible:ring-offset-0 md:h-[331px] text-black"
                          placeholder="Envíame un mensaje"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                className=" bg-lime-600  hover:bg-lime-700 p-2 mt-4 text-white rounded"
                type="submit"
              >
                <Send type="submit" className="mr-2" size={20} />
                ENVIAR MENSAJE
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
