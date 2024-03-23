import { z } from 'zod';

export const cardType = z.enum(['visa', 'mastercard']);
export const cardSchema = z.object({
  type: cardType,
  bank: z.string(),
});

export type CardType = z.infer<typeof cardSchema>;
