import z from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const patientRouter = createTRPCRouter({
  find: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx: { db }, input: { id } }) => {
      return await db.patient.findUnique({ where: { id } });
    }),
});
