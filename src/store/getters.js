const query = (fields, uuid) => {
  let result = {}

  if (!uuid) {
    return result
  }

  for (let i = 0; i < fields.length; i++) {
    if (fields[i].uuid === uuid) {
      return fields[i]
    }

    if (fields[i].fields && fields[i].fields.length) {
      result = this.query(fields[i].fields, uuid)
      if (result.uuid) {
        return result
      }
    }
  }

  return result
}

const getters = {
  basics: (state) => state.design.basics,
  layouts: (state) => state.design.layouts,
  formItems: (state) => state.design.formItems,
  formOptions: (state) => state.design.formOptions,
  formItemOptions: (state) => {
    return query(state.design.formItems, state.design.selected)
  }
}
export default getters
