<template>
  <div class="code-editor-wrap"></div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/src-min-noconflict/theme-chrome'
import 'ace-builds/src-min-noconflict/mode-javascript'
import 'ace-builds/src-min-noconflict/mode-json' //
import 'ace-builds/src-min-noconflict/mode-css' //
import { capitalize, defineComponent, markRaw } from 'vue'
const Events = ['blur', 'input', 'change', 'changeSelectionStyle', 'changeSession', 'copy', 'focus', 'paste']

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: 'text'
    },
    theme: {
      type: String,
      default: 'chrome'
    },
    options: Object,
    placeholder: String,
    readonly: Boolean,
    wrap: Boolean,
    printMargin: {
      type: [Boolean, Number],
      default: true
    },
    minLines: Number,
    maxLines: Number
  },
  emits: ['update:modelValue', 'init', ...Events],
  mounted() {
    const editor = (this._editor = markRaw(
      ace.edit(this.$el, {
        placeholder: this.placeholder,
        readOnly: this.readonly,
        value: this.modelValue,
        mode: 'ace/mode/' + this.lang,
        theme: 'ace/theme/' + this.theme,
        wrap: this.wrap,
        printMargin: this.printMargin,
        useWorker: false,
        minLines: this.minLines,
        maxLines: this.maxLines,
        ...this.options
      })
    ))
    this._contentBackup = this.modelValue
    this._isSettingContent = false
    editor.on('change', () => {
      if (this._isSettingContent) return
      const content = editor.getValue()
      this._contentBackup = content
      this.$emit('update:modelValue', content)
    })
    Events.forEach((x) => {
      const eventName = 'on' + capitalize(x)
      if (typeof this.$.vnode.props[eventName] === 'function') {
        editor.on(x, this.$emit.bind(this, x))
      }
    })
    this.$emit('init', editor)
  },
  beforeUnmount() {
    var _b
    ;(_b = this._editor) === null || _b === void 0 ? void 0 : _b.destroy()
  },
  methods: {
    focus() {
      this._editor.focus()
    },
    blur() {
      this._editor.blur()
    },
    selectAll() {
      this._editor.selectAll()
    }
  },
  watch: {
    modelValue(val) {
      if (this._contentBackup !== val) {
        try {
          this._isSettingContent = true
          this._editor.setValue(val, 1)
        } finally {
          this._isSettingContent = false
        }
        this._contentBackup = val
      }
    },
    theme(val) {
      this._editor.setTheme('ace/theme/' + val)
    },
    options(val) {
      this._editor.setOptions(val)
    },
    readonly(val) {
      this._editor.setReadOnly(val)
    },
    placeholder(val) {
      this._editor.setOption('placeholder', val)
    },
    wrap(val) {
      this._editor.setWrapBehavioursEnabled(val)
    },
    printMargin(val) {
      this._editor.setOption('printMargin', val)
    },
    lang(val) {
      this._editor.setOption('mode', 'ace/mode/' + val)
    },
    minLines(val) {
      this._editor.setOption('minLines', val)
    },
    maxLines(val) {
      this._editor.setOption('maxLines', val)
    }
  }
})
</script>

<style lang="scss"></style>
