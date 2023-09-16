import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ lng }) => ({
  messages: (await import(`./messages/${lng}.json`)).default,
}));