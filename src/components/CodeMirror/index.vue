<template>
  <div class="vue-codemirror-wrap">
    <textarea></textarea>
  </div>
</template>

<script>
import CodeMirror from 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/vue/vue'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/javascript-hint.js'

export default {
  name: 'code-mirror',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: function () {
        return {
          mode: 'text/javascript',
          tabSize: 2,
          lineNumbers: true,
          lineWrapping: true
        }
      }
    }
  },
  data: function () {
    return {
      skipNextChangeEvent: false
    }
  },
  ready: function () {
    var _this = this
    this.editor = CodeMirror.fromTextArea(this.$el.querySelector('textarea'), this.options)
    this.editor.setValue(this.modelValue)
    this.editor.on('change', function (cm) {
      if (_this.skipNextChangeEvent) {
        _this.skipNextChangeEvent = false
        return
      }
      _this.modelValue = cm.getValue()
      if (!!_this.$emit) {
        _this.$emit('update:modelValue', cm.getValue())
      }
    })
  },
  mounted: function () {
    var _this = this
    this.editor = CodeMirror.fromTextArea(this.$el.querySelector('textarea'), this.options)
    this.editor.setValue(this.modelValue)
    this.editor.on('change', function (cm) {
      if (_this.skipNextChangeEvent) {
        _this.skipNextChangeEvent = false
        return
      }
      if (!!_this.$emit) {
        _this.$emit('update:modelValue', cm.getValue())
        _this.$emit('input', cm.getValue())
      }
    })
  },
  watch: {
    modelValue: function (newVal, oldVal) {
      var editorValue = this.editor.getValue()
      if (newVal !== editorValue) {
        this.skipNextChangeEvent = true
        var scrollInfo = this.editor.getScrollInfo()
        this.editor.setValue(newVal)
        this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
      }
    },
    options: function (newOptions, oldVal) {
      if (typeof newOptions === 'object') {
        for (var optionName in newOptions) {
          if (newOptions.hasOwnProperty(optionName)) {
            this.editor.setOption(optionName, newOptions[optionName])
          }
        }
      }
    }
  },
  beforeUnmount: function () {
    if (this.editor) {
      this.editor.toTextArea()
    }
  }
}
</script>

<style lang="scss">
.CodeMirror-code {
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
}

.form-setting {
  .CodeMirror {
    height: 100px;
  }
}
</style>
