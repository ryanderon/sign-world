const imageGroups = {
  clients: import.meta.glob("../assets/clients/*.{png,jpg,jpeg,tiff}", {
    eager: true,
    query: "?url",
    import: "default",
  }),

  signage: import.meta.glob("../assets/signage/*.{png,jpg,jpeg,tiff}", {
    eager: true,
    query: "?url",
    import: "default",
  }),

  printing: import.meta.glob("../assets/printing/*.{png,jpg,jpeg,tiff}", {
    eager: true,
    query: "?url",
    import: "default",
  }),

  merchandise: import.meta.glob("../assets/merchandise/*.{png,jpg,jpeg,tiff}", {
    eager: true,
    query: "?url",
    import: "default",
  }),
};

export const getImageList = (key: keyof typeof imageGroups) => {
  return Object.values(imageGroups[key]) as string[];
};

export const importImages = (path: string, filename: string) => {
  return new URL(`../assets/${path}/${filename}`, import.meta.url).href;
};
