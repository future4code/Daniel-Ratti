import { Request, Response } from "express";
import { transporter } from "../services/mailer";

export const envMail = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { email } = req.body;

    await transporter.sendMail({
      from: `Daniel<${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "Desafio aula52 - daniel-ratti-epps",
      text: "Este é um texto de exemplo",
      html: "<p>teste</p>",
    });

    res.status(200).send({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
