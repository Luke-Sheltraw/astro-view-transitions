type TermDefinitionList = {
  [category: string]: {
    fullname: string,
    terms: TermDefinitionCategoryList,
  },
}

type TermDefinitionCategoryList = {
  [term: string]: TermDefinition,
}

type TermDefinition = {
  fullname: string,
  description: string,
  demo: string | null,
}