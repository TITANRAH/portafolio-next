import { SendEmailData } from "@/interfaces/send.email.interface";

export async function handleSendEmail(
  values: SendEmailData
): Promise<Response | { ok: boolean; message: string }> {
  // console.log("values desde action ->", values);

  try {
    const resp = await fetch("/api/emails", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    // console.log("resp desde actiojn ->", resp);

    return resp;
  } catch (error: any) {
    console.log(error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
}
