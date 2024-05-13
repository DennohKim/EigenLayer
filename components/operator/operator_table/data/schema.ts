import { z } from 'zod';

const Share = z.object({
  strategyAddress: z.string(),
  shares: z.string(),
});

const tvl = z.object({
  tvl: z.number(),
  tvlRestaking: z.number(),
  tvlWETH: z.number(),
  tvlBeacon: z.number(),

});


const SharesArray = z.array(Share);

export const OperatorMetadata = z.object({
  address: z.string(),
  metadataName: z.string(),
  metadataDescription: z.string(),
  metadataDiscord: z.null().optional(),
  metadataLogo: z.string(),
  metadataTelegram: z.null().optional(),
  metadataWebsite: z.string(),
  metadataX: z.string(),
  shares: SharesArray,
  totalStakers: z.number(),
  tvl: tvl,
});

export const OperatorMetadataArray = z.array(OperatorMetadata);