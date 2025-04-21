import type { APIRoute } from "astro"; // harmless for typing

export const onRequestPost: APIRoute = async ({ request, env }) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic spam check
  if (!email?.includes("@") || message.length < 5) {
    return new Response("Invalid submission", { status: 400 });
  }

  /* ---- build MailChannels payload ---- */
  const payload = {
    personalizations: [{ to: [{ email: env.TO_EMAIL }] }],
    from: { email: env.FROM_EMAIL, name: "Pachamama Studios site" },
    subject: `Website contact from ${name}`,
    content: [
      {
        type: "text/plain",
        value: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      },
    ],
  };

  const resp = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) return new Response("Mail send failed", { status: 500 });

  /* Return a thank‑you page or JSON */
  return Response.redirect("/contact?sent=1", 303);
};
