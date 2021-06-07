const getters = {
  mode: (state) => state.design.mode,
  draggable: (state) => state.design.mode === 'design',
  basics: (state) => state.design.basics,
  layouts: (state) => state.design.layouts,
  formDesign: (state) => state.design.formDesign,
  formOptions: (state) => state.design.formOptions,
  selected: (state) => state.design.selected,
  formData: (state) => state.design.formData
}
export default getters
