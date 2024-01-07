import { AuthCredentialsValidator } from "../lib/validators/account-credentails-validator";
import { publicProcedure, router } from "./trpc";
import { getPayLoadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

    export const authRouter = router({
        createPayloadUser: publicProcedure
            .input(AuthCredentialsValidator)
            .mutation(async ({ input }) => {    
                const { email, password } = input;
                const payload = await getPayLoadClient();

                //check if user aldready exists
                const {docs: users} = await payload.find({
                    collection: "users",
                    where: {
                        email: {
                            equals: email,
                        }
                    }
                });

                if (users.length !== 0) throw new TRPCError({ code: 'CONFLICT' })

                await payload.create({
                    collection: "users",
                    data: {
                        email,
                        password,
                        role: "user",
                    },
                });

                return { success: true, sendToEmail: email };
            }),
        verifyEmail: publicProcedure
            .input(z.object({ token: z.string() }))
            .query(async ({input}) => {
                const { token } = input;

                const payload = await getPayLoadClient();

                const isVerified = await payload.verifyEmail({
                    collection: 'users',
                    token
                });

                if (!isVerified) {
                    throw new TRPCError({ code: 'UNAUTHORIZED' });
                }

                return { success: true }
            }),
        signIn: publicProcedure
            .input(AuthCredentialsValidator)
            .mutation(async ({ input, ctx }) => {
                const { email, password } = input;
                const { res } = ctx;

                const payload = await getPayLoadClient();

                try {
                    await payload.login({
                        collection: 'users',
                        data: {
                            email,
                            password,
                        },
                        res,
                    })

                    return { success: true }
                } catch (err) {
                    throw new TRPCError({ code: 'UNAUTHORIZED' });
                }   
            }),
    });