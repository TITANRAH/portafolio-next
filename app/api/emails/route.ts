import { sendEmail } from "../../../lib/nodemailer";

export async function POST(req: Request): Promise<Response> {
  const body = await req.json();

  // console.log("entro a post ruta", body);

  const { nombre, email, mensaje } = body;

  const sender = {
    name: "portafolio",
    address: "no-reply@example-com",
  };

  const receipients = [
    {
      name: nombre,
      address: "granrah1@gmail.com",
    },
  ];

  try {
    const result = await sendEmail({
      sender,
      receipients,
      subject: "Mensaje nuevo desde el Portafolio",
      message: `Hola soy ${nombre} y mi correo es <h4><b>${email}</b></h4>  y mi mensaje es: <br/><br/> ${mensaje}`,
    });

    // console.log('result desde ruta', result);

    return Response.json({
      status: result.response,
      body: {
        message: "Email sent",
      },
    });
  } catch (error: any) {
    console.log("error desde ruta->", error.message);
    return Response.json({
      status: error.response,
      body: {
        message: "Email no enviado",
      },
    });
  }
}
