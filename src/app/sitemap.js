export default function sitemap() {
  const baseUrl = "https://saijagrutipatsansta.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Deposit-loans`,
      lastModified: new Date(),
    },

    // New Pages Added ↓↓↓
    {
      url: `${baseUrl}/Contact`,
      lastModified: new Date(),
    },
  ];
}
