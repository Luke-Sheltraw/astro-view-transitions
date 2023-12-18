type TermDefinitionList = {
  [category: string]: {
    fullname: string,
    description: string,
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