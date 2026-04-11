import { createNeonAuth } from "@neondatabase/auth/next/server";
export const auth = createNeonAuth({
  baseUrl:
    "https://ep-bitter-heart-a1ixuf1s.neonauth.ap-southeast-1.aws.neon.tech/neondb/auth", // Your actual URL
  cookies: {
    secret: "T9ooa9nF+Ynnkzj5iSv9kkGmMTA3BvLkMImrGHdHdU=", // Your actual secret
  },
});
