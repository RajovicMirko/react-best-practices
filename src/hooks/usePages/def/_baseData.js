export const baseMetaData = {
  title: "RJS best practices",
  description: "Some html description",
  meta: {
    charSet: "utf-8",
    name: {
      keywords:
        "react,example,react presentation, context, composition, hooks, best practice",
    },
  },
};

export const generateMetaTitle = (title) => `${baseMetaData.title} - ${title}`;
