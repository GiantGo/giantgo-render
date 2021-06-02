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
      result = query(fields[i].fields, uuid)
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
  formDesign: (state) => state.design.formDesign,
  formOptions: (state) => state.design.formOptions,
  formItemOptions: (state) => {
    return query(state.design.formDesign.fields, state.design.selected).options || {}
  }
}
export default getters
