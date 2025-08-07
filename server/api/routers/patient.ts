import z from "zod";
import { createTRPCRouter, authedProcedure } from "../trpc";

export const patientRouter = createTRPCRouter({
  find: authedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx: { db }, input: { id } }) => {
      return await db.patient.findUnique({ where: { id } });
    }),

  getAll: authedProcedure.query(async ({ ctx: { db } }) => {
    return await db.patient.findMany({
      orderBy: { dateLastVisited: "desc" },
    });
  }),

  create: authedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        age: z.number(),
        phoneNumber: z.string(),
        cnic: z.string(),
        comments: z.string(),
        dateLastVisited: z.date(),
      }),
    )
    .mutation(async ({ ctx: { db }, input }) => {
      return await db.patient.create({
        data: input,
      });
    }),

  update: authedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        age: z.number(),
        phoneNumber: z.string(),
        cnic: z.string(),
        comments: z.string(),
        dateLastVisited: z.date(),
      }),
    )
    .mutation(async ({ ctx: { db }, input }) => {
      const { id, ...data } = input;
      return await db.patient.update({
        where: { id },
        data,
      });
    }),

  delete: authedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx: { db }, input: { id } }) => {
      return await db.patient.delete({
        where: { id },
      });
    }),
});
