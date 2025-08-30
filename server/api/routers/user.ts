import z from "zod";
import { createTRPCRouter, adminProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getUnverified: adminProcedure.query(async ({ ctx: { db } }) => {
    return await db.user.findMany({
      where: { verified: false },
      orderBy: { id: "desc" },
    });
  }),

  getAll: adminProcedure.query(async ({ ctx: { db } }) => {
    return await db.user.findMany({
      orderBy: { id: "desc" },
    });
  }),

  verify: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx: { db }, input: { id } }) => {
      return await db.user.update({
        where: { id },
        data: { verified: true },
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx: { db }, input: { id } }) => {
      return await db.user.delete({
        where: { id },
      });
    }),
});
