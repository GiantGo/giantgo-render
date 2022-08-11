import fl from "ace-builds";
import { defineComponent as Ct, markRaw as _l, capitalize as hl, openBlock as g, createElementBlock as D, h as Xt, reactive as ie, resolveComponent as u, createBlock as y, withCtx as f, createVNode as p, defineAsyncComponent as Uo, Fragment as U, renderList as Q, normalizeStyle as Ye, createElementVNode as $, toDisplayString as te, ref as B, watch as ye, inject as z, createTextVNode as j, shallowRef as No, onMounted as Oe, watchEffect as gl, toRaw as Qn, onBeforeUnmount as er, nextTick as Ge, createSlots as ro, resolveDynamicComponent as Ho, createCommentVNode as G, provide as le, computed as ve, TransitionGroup as bl, normalizeClass as Kt, withModifiers as bo, resolveDirective as vl, withDirectives as yl } from "vue";
import { ElFormItem as I, ElCascader as lo, ElCard as tr, ElCheckboxGroup as or, ElCheckbox as oe, ElColorPicker as it, ElDatePicker as ao, ElDivider as Wo, ElInput as W, ElSelect as Ke, ElOption as jt, ElInputNumber as ze, ElRadioGroup as Fe, ElRadio as nr, ElRate as rr, ElButton as xe, ElSlider as Be, ElSwitch as lr, ElTable as xl, ElTableColumn as wl, ElDialog as Le, ElIcon as Et, ElTabs as ar, ElTabPane as ir, ElTimePicker as io, ElUpload as so, ElMessage as me, ElForm as uo, ElTooltip as Sl, ElEmpty as kl, ElRadioButton as st, ElRow as co, ElCol as mo, ElAutocomplete as Ol } from "element-plus";
import Vl from "axios";
import { createEditor as Tl, DomEditor as $l, createToolbar as Cl } from "@wangeditor/editor";
function jl(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var El = { exports: {} };
(function(o, t) {
  ace.define("ace/theme/chrome.css", ["require", "exports", "module"], function(e, n, a) {
    a.exports = `.ace-chrome .ace_gutter {
  background: #ebebeb;
  color: #333;
  overflow : hidden;
}

.ace-chrome .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-chrome {
  background-color: #FFFFFF;
  color: black;
}

.ace-chrome .ace_cursor {
  color: black;
}

.ace-chrome .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-chrome .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-chrome .ace_constant.ace_language {
  color: rgb(88, 92, 246);
}

.ace-chrome .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-chrome .ace_invalid {
  background-color: rgb(153, 0, 0);
  color: white;
}

.ace-chrome .ace_fold {
}

.ace-chrome .ace_support.ace_function {
  color: rgb(60, 76, 114);
}

.ace-chrome .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-chrome .ace_support.ace_type,
.ace-chrome .ace_support.ace_class
.ace-chrome .ace_support.ace_other {
  color: rgb(109, 121, 222);
}

.ace-chrome .ace_variable.ace_parameter {
  font-style:italic;
  color:#FD971F;
}
.ace-chrome .ace_keyword.ace_operator {
  color: rgb(104, 118, 135);
}

.ace-chrome .ace_comment {
  color: #236e24;
}

.ace-chrome .ace_comment.ace_doc {
  color: #236e24;
}

.ace-chrome .ace_comment.ace_doc.ace_tag {
  color: #236e24;
}

.ace-chrome .ace_constant.ace_numeric {
  color: rgb(0, 0, 205);
}

.ace-chrome .ace_variable {
  color: rgb(49, 132, 149);
}

.ace-chrome .ace_xml-pe {
  color: rgb(104, 104, 91);
}

.ace-chrome .ace_entity.ace_name.ace_function {
  color: #0000A2;
}


.ace-chrome .ace_heading {
  color: rgb(12, 7, 255);
}

.ace-chrome .ace_list {
  color:rgb(185, 6, 144);
}

.ace-chrome .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}

.ace-chrome .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-chrome .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-chrome .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-chrome .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.07);
}

.ace-chrome .ace_gutter-active-line {
    background-color : #dcdcdc;
}

.ace-chrome .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-chrome .ace_storage,
.ace-chrome .ace_keyword,
.ace-chrome .ace_meta.ace_tag {
  color: rgb(147, 15, 128);
}

.ace-chrome .ace_string.ace_regex {
  color: rgb(255, 0, 0)
}

.ace-chrome .ace_string {
  color: #1A1AA6;
}

.ace-chrome .ace_entity.ace_other.ace_attribute-name {
  color: #994409;
}

.ace-chrome .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}`;
  }), ace.define("ace/theme/chrome", ["require", "exports", "module", "ace/theme/chrome.css", "ace/lib/dom"], function(e, n, a) {
    n.isDark = !1, n.cssClass = "ace-chrome", n.cssText = e("./chrome.css");
    var i = e("../lib/dom");
    i.importCssString(n.cssText, n.cssClass, !1);
  }), function() {
    ace.require(["ace/theme/chrome"], function(e) {
      o && (o.exports = e);
    });
  }();
})(El);
var Dl = { exports: {} };
(function(o, t) {
  ace.define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(e, n, a) {
    var i = e("../lib/oop"), l = e("./text_highlight_rules").TextHighlightRules, r = function() {
      this.$rules = { start: [{ token: "comment.doc.tag", regex: "@[\\w\\d_]+" }, r.getTagRule(), { defaultToken: "comment.doc", caseInsensitive: !0 }] };
    };
    i.inherits(r, l), r.getTagRule = function(s) {
      return { token: "comment.doc.tag.storage.type", regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b" };
    }, r.getStartRule = function(s) {
      return { token: "comment.doc", regex: "\\/\\*(?=\\*)", next: s };
    }, r.getEndRule = function(s) {
      return { token: "comment.doc", regex: "\\*\\/", next: s };
    }, n.DocCommentHighlightRules = r;
  }), ace.define("ace/mode/javascript_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(e, n, a) {
    function i() {
      var h = m.replace("\\d", "\\d\\-"), _ = { onMatch: function(v, x, S) {
        var k = v.charAt(1) == "/" ? 2 : 1;
        return k == 1 ? (x != this.nextState ? S.unshift(this.next, this.nextState, 0) : S.unshift(this.next), S[2]++) : k == 2 && x == this.nextState && (S[1]--, (!S[1] || S[1] < 0) && (S.shift(), S.shift())), [{ type: "meta.tag.punctuation." + (k == 1 ? "" : "end-") + "tag-open.xml", value: v.slice(0, k) }, { type: "meta.tag.tag-name.xml", value: v.substr(k) }];
      }, regex: "</?" + h, next: "jsxAttributes", nextState: "jsx" };
      this.$rules.start.unshift(_);
      var b = { regex: "{", token: "paren.quasi.start", push: "start" };
      this.$rules.jsx = [b, _, { include: "reference" }, { defaultToken: "string" }], this.$rules.jsxAttributes = [{ token: "meta.tag.punctuation.tag-close.xml", regex: "/?>", onMatch: function(v, x, S) {
        return x == S[0] && S.shift(), v.length == 2 && (S[0] == this.nextState && S[1]--, (!S[1] || S[1] < 0) && S.splice(0, 2)), this.next = S[0] || "start", [{ type: this.token, value: v }];
      }, nextState: "jsx" }, b, l("jsxAttributes"), { token: "entity.other.attribute-name.xml", regex: h }, { token: "keyword.operator.attribute-equals.xml", regex: "=" }, { token: "text.tag-whitespace.xml", regex: "\\s+" }, { token: "string.attribute-value.xml", regex: "'", stateName: "jsx_attr_q", push: [{ token: "string.attribute-value.xml", regex: "'", next: "pop" }, { include: "reference" }, { defaultToken: "string.attribute-value.xml" }] }, { token: "string.attribute-value.xml", regex: '"', stateName: "jsx_attr_qq", push: [{ token: "string.attribute-value.xml", regex: '"', next: "pop" }, { include: "reference" }, { defaultToken: "string.attribute-value.xml" }] }, _], this.$rules.reference = [{ token: "constant.language.escape.reference.xml", regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)" }];
    }
    function l(h) {
      return [{ token: "comment", regex: /\/\*/, next: [s.getTagRule(), { token: "comment", regex: "\\*\\/", next: h || "pop" }, { defaultToken: "comment", caseInsensitive: !0 }] }, { token: "comment", regex: "\\/\\/", next: [s.getTagRule(), { token: "comment", regex: "$|^", next: h || "pop" }, { defaultToken: "comment", caseInsensitive: !0 }] }];
    }
    var r = e("../lib/oop"), s = e("./doc_comment_highlight_rules").DocCommentHighlightRules, d = e("./text_highlight_rules").TextHighlightRules, m = "[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*", c = function(h) {
      var _ = this.createKeywordMapper({ "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document", keyword: "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static", "storage.type": "const|let|var|function", "constant.language": "null|Infinity|NaN|undefined", "support.function": "alert", "constant.language.boolean": "true|false" }, "identifier"), b = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void", v = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";
      this.$rules = { no_regex: [s.getStartRule("doc-start"), l("no_regex"), { token: "string", regex: "'(?=.)", next: "qstring" }, { token: "string", regex: '"(?=.)', next: "qqstring" }, { token: "constant.numeric", regex: /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/ }, { token: "constant.numeric", regex: /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/ }, { token: ["storage.type", "punctuation.operator", "support.function", "punctuation.operator", "entity.name.function", "text", "keyword.operator"], regex: "(" + m + ")(\\.)(prototype)(\\.)(" + m + ")(\\s*)(=)", next: "function_arguments" }, { token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"], regex: "(" + m + ")(\\.)(" + m + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()", next: "function_arguments" }, { token: ["entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"], regex: "(" + m + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()", next: "function_arguments" }, { token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"], regex: "(" + m + ")(\\.)(" + m + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()", next: "function_arguments" }, { token: ["storage.type", "text", "entity.name.function", "text", "paren.lparen"], regex: "(function)(\\s+)(" + m + ")(\\s*)(\\()", next: "function_arguments" }, { token: ["entity.name.function", "text", "punctuation.operator", "text", "storage.type", "text", "paren.lparen"], regex: "(" + m + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()", next: "function_arguments" }, { token: ["text", "text", "storage.type", "text", "paren.lparen"], regex: "(:)(\\s*)(function)(\\s*)(\\()", next: "function_arguments" }, { token: "keyword", regex: `from(?=\\s*('|"))` }, { token: "keyword", regex: "(?:" + b + ")\\b", next: "start" }, { token: ["support.constant"], regex: /that\b/ }, { token: ["storage.type", "punctuation.operator", "support.function.firebug"], regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/ }, { token: _, regex: m }, { token: "punctuation.operator", regex: /[.](?![.])/, next: "property" }, { token: "storage.type", regex: /=>/, next: "start" }, { token: "keyword.operator", regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/, next: "start" }, { token: "punctuation.operator", regex: /[?:,;.]/, next: "start" }, { token: "paren.lparen", regex: /[\[({]/, next: "start" }, { token: "paren.rparen", regex: /[\])}]/ }, { token: "comment", regex: /^#!.*$/ }], property: [{ token: "text", regex: "\\s+" }, { token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"], regex: "(" + m + ")(\\.)(" + m + ")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()", next: "function_arguments" }, { token: "punctuation.operator", regex: /[.](?![.])/ }, { token: "support.function", regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/ }, { token: "support.function.dom", regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/ }, { token: "support.constant", regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/ }, { token: "identifier", regex: m }, { regex: "", token: "empty", next: "no_regex" }], start: [s.getStartRule("doc-start"), l("start"), { token: "string.regexp", regex: "\\/", next: "regex" }, { token: "text", regex: "\\s+|^$", next: "start" }, { token: "empty", regex: "", next: "no_regex" }], regex: [{ token: "regexp.keyword.operator", regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)" }, { token: "string.regexp", regex: "/[sxngimy]*", next: "no_regex" }, { token: "invalid", regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/ }, { token: "constant.language.escape", regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/ }, { token: "constant.language.delimiter", regex: /\|/ }, { token: "constant.language.escape", regex: /\[\^?/, next: "regex_character_class" }, { token: "empty", regex: "$", next: "no_regex" }, { defaultToken: "string.regexp" }], regex_character_class: [{ token: "regexp.charclass.keyword.operator", regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)" }, { token: "constant.language.escape", regex: "]", next: "regex" }, { token: "constant.language.escape", regex: "-" }, { token: "empty", regex: "$", next: "no_regex" }, { defaultToken: "string.regexp.charachterclass" }], function_arguments: [{ token: "variable.parameter", regex: m }, { token: "punctuation.operator", regex: "[, ]+" }, { token: "punctuation.operator", regex: "$" }, { token: "empty", regex: "", next: "no_regex" }], qqstring: [{ token: "constant.language.escape", regex: v }, { token: "string", regex: "\\\\$", consumeLineEnd: !0 }, { token: "string", regex: '"|$', next: "no_regex" }, { defaultToken: "string" }], qstring: [{ token: "constant.language.escape", regex: v }, { token: "string", regex: "\\\\$", consumeLineEnd: !0 }, { token: "string", regex: "'|$", next: "no_regex" }, { defaultToken: "string" }] }, (!h || !h.noES6) && (this.$rules.no_regex.unshift({ regex: "[{}]", onMatch: function(x, S, k) {
        if (this.next = x == "{" ? this.nextState : "", x == "{" && k.length)
          k.unshift("start", S);
        else if (x == "}" && k.length && (k.shift(), this.next = k.shift(), this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1))
          return "paren.quasi.end";
        return x == "{" ? "paren.lparen" : "paren.rparen";
      }, nextState: "start" }, { token: "string.quasi.start", regex: /`/, push: [{ token: "constant.language.escape", regex: v }, { token: "paren.quasi.start", regex: /\${/, push: "start" }, { token: "string.quasi.end", regex: /`/, next: "pop" }, { defaultToken: "string.quasi" }] }), (!h || h.jsx != 0) && i.call(this)), this.embedRules(s, "doc-", [s.getEndRule("no_regex")]), this.normalizeRules();
    };
    r.inherits(c, d), n.JavaScriptHighlightRules = c;
  }), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(e, n, a) {
    var i = e("../range").Range, l = function() {
    };
    (function() {
      this.checkOutdent = function(r, s) {
        return /^\s+$/.test(r) ? /^\s*\}/.test(s) : !1;
      }, this.autoOutdent = function(r, s) {
        var d = r.getLine(s), m = d.match(/^(\s*\})/);
        if (!m)
          return 0;
        var c = m[1].length, h = r.findMatchingBracket({ row: s, column: c });
        if (!h || h.row == s)
          return 0;
        var _ = this.$getIndent(r.getLine(h.row));
        r.replace(new i(s, 0, s, c - 1), _);
      }, this.$getIndent = function(r) {
        return r.match(/^\s*/)[0];
      };
    }).call(l.prototype), n.MatchingBraceOutdent = l;
  }), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(e, n, a) {
    var i = e("../../lib/oop"), l = e("../../range").Range, r = e("./fold_mode").FoldMode, s = n.FoldMode = function(d) {
      d && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + d.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + d.end)));
    };
    i.inherits(s, r), function() {
      this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(d, m, c) {
        var h = d.getLine(c);
        if (this.singleLineBlockCommentRe.test(h) && !this.startRegionRe.test(h) && !this.tripleStarBlockCommentRe.test(h))
          return "";
        var _ = this._getFoldWidgetBase(d, m, c);
        return !_ && this.startRegionRe.test(h) ? "start" : _;
      }, this.getFoldWidgetRange = function(d, m, c, h) {
        var _ = d.getLine(c);
        if (this.startRegionRe.test(_))
          return this.getCommentRegionBlock(d, _, c);
        var x = _.match(this.foldingStartMarker);
        if (x) {
          var b = x.index;
          if (x[1])
            return this.openingBracketBlock(d, x[1], c, b);
          var v = d.getCommentFoldRange(c, b + x[0].length, 1);
          return v && !v.isMultiLine() && (h ? v = this.getSectionRange(d, c) : m != "all" && (v = null)), v;
        }
        if (m !== "markbegin") {
          var x = _.match(this.foldingStopMarker);
          if (x) {
            var b = x.index + x[0].length;
            return x[1] ? this.closingBracketBlock(d, x[1], c, b) : d.getCommentFoldRange(c, b, -1);
          }
        }
      }, this.getSectionRange = function(d, m) {
        var c = d.getLine(m), h = c.search(/\S/), _ = m, b = c.length;
        m += 1;
        for (var v = m, x = d.getLength(); ++m < x; ) {
          c = d.getLine(m);
          var S = c.search(/\S/);
          if (S !== -1) {
            if (h > S)
              break;
            var k = this.getFoldWidgetRange(d, "all", m);
            if (k) {
              if (k.start.row <= _)
                break;
              if (k.isMultiLine())
                m = k.end.row;
              else if (h == S)
                break;
            }
            v = m;
          }
        }
        return new l(_, b, v, d.getLine(v).length);
      }, this.getCommentRegionBlock = function(d, m, c) {
        for (var h = m.search(/\s*$/), _ = d.getLength(), b = c, v = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, x = 1; ++c < _; ) {
          m = d.getLine(c);
          var S = v.exec(m);
          if (!!S && (S[1] ? x-- : x++, !x))
            break;
        }
        var k = c;
        if (k > b)
          return new l(b, h, k, m.length);
      };
    }.call(s.prototype);
  }), ace.define("ace/mode/javascript", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/javascript_highlight_rules", "ace/mode/matching_brace_outdent", "ace/worker/worker_client", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function(e, n, a) {
    var i = e("../lib/oop"), l = e("./text").Mode, r = e("./javascript_highlight_rules").JavaScriptHighlightRules, s = e("./matching_brace_outdent").MatchingBraceOutdent, d = e("../worker/worker_client").WorkerClient, m = e("./behaviour/cstyle").CstyleBehaviour, c = e("./folding/cstyle").FoldMode, h = function() {
      this.HighlightRules = r, this.$outdent = new s(), this.$behaviour = new m(), this.foldingRules = new c();
    };
    i.inherits(h, l), function() {
      this.lineCommentStart = "//", this.blockComment = { start: "/*", end: "*/" }, this.$quotes = { '"': '"', "'": "'", "`": "`" }, this.getNextLineIndent = function(_, b, v) {
        var x = this.$getIndent(b), S = this.getTokenizer().getLineTokens(b, _), k = S.tokens, R = S.state;
        if (k.length && k[k.length - 1].type == "comment")
          return x;
        if (_ == "start" || _ == "no_regex") {
          var q = b.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
          q && (x += v);
        } else if (_ == "doc-start") {
          if (R == "start" || R == "no_regex")
            return "";
          var q = b.match(/^\s*(\/?)\*/);
          q && (q[1] && (x += " "), x += "* ");
        }
        return x;
      }, this.checkOutdent = function(_, b, v) {
        return this.$outdent.checkOutdent(b, v);
      }, this.autoOutdent = function(_, b, v) {
        this.$outdent.autoOutdent(b, v);
      }, this.createWorker = function(_) {
        var b = new d(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
        return b.attachToDocument(_.getDocument()), b.on("annotate", function(v) {
          _.setAnnotations(v.data);
        }), b.on("terminate", function() {
          _.clearAnnotations();
        }), b;
      }, this.$id = "ace/mode/javascript", this.snippetFileId = "ace/snippets/javascript";
    }.call(h.prototype), n.Mode = h;
  }), function() {
    ace.require(["ace/mode/javascript"], function(e) {
      o && (o.exports = e);
    });
  }();
})(Dl);
var Pl = { exports: {} };
(function(o, t) {
  ace.define("ace/mode/json_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(e, n, a) {
    var i = e("../lib/oop"), l = e("./text_highlight_rules").TextHighlightRules, r = function() {
      this.$rules = { start: [{ token: "variable", regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)' }, { token: "string", regex: '"', next: "string" }, { token: "constant.numeric", regex: "0[xX][0-9a-fA-F]+\\b" }, { token: "constant.numeric", regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b" }, { token: "constant.language.boolean", regex: "(?:true|false)\\b" }, { token: "text", regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']" }, { token: "comment", regex: "\\/\\/.*$" }, { token: "comment.start", regex: "\\/\\*", next: "comment" }, { token: "paren.lparen", regex: "[[({]" }, { token: "paren.rparen", regex: "[\\])}]" }, { token: "punctuation.operator", regex: /[,]/ }, { token: "text", regex: "\\s+" }], string: [{ token: "constant.language.escape", regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/ }, { token: "string", regex: '"|$', next: "start" }, { defaultToken: "string" }], comment: [{ token: "comment.end", regex: "\\*\\/", next: "start" }, { defaultToken: "comment" }] };
    };
    i.inherits(r, l), n.JsonHighlightRules = r;
  }), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(e, n, a) {
    var i = e("../range").Range, l = function() {
    };
    (function() {
      this.checkOutdent = function(r, s) {
        return /^\s+$/.test(r) ? /^\s*\}/.test(s) : !1;
      }, this.autoOutdent = function(r, s) {
        var d = r.getLine(s), m = d.match(/^(\s*\})/);
        if (!m)
          return 0;
        var c = m[1].length, h = r.findMatchingBracket({ row: s, column: c });
        if (!h || h.row == s)
          return 0;
        var _ = this.$getIndent(r.getLine(h.row));
        r.replace(new i(s, 0, s, c - 1), _);
      }, this.$getIndent = function(r) {
        return r.match(/^\s*/)[0];
      };
    }).call(l.prototype), n.MatchingBraceOutdent = l;
  }), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(e, n, a) {
    var i = e("../../lib/oop"), l = e("../../range").Range, r = e("./fold_mode").FoldMode, s = n.FoldMode = function(d) {
      d && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + d.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + d.end)));
    };
    i.inherits(s, r), function() {
      this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(d, m, c) {
        var h = d.getLine(c);
        if (this.singleLineBlockCommentRe.test(h) && !this.startRegionRe.test(h) && !this.tripleStarBlockCommentRe.test(h))
          return "";
        var _ = this._getFoldWidgetBase(d, m, c);
        return !_ && this.startRegionRe.test(h) ? "start" : _;
      }, this.getFoldWidgetRange = function(d, m, c, h) {
        var _ = d.getLine(c);
        if (this.startRegionRe.test(_))
          return this.getCommentRegionBlock(d, _, c);
        var x = _.match(this.foldingStartMarker);
        if (x) {
          var b = x.index;
          if (x[1])
            return this.openingBracketBlock(d, x[1], c, b);
          var v = d.getCommentFoldRange(c, b + x[0].length, 1);
          return v && !v.isMultiLine() && (h ? v = this.getSectionRange(d, c) : m != "all" && (v = null)), v;
        }
        if (m !== "markbegin") {
          var x = _.match(this.foldingStopMarker);
          if (x) {
            var b = x.index + x[0].length;
            return x[1] ? this.closingBracketBlock(d, x[1], c, b) : d.getCommentFoldRange(c, b, -1);
          }
        }
      }, this.getSectionRange = function(d, m) {
        var c = d.getLine(m), h = c.search(/\S/), _ = m, b = c.length;
        m += 1;
        for (var v = m, x = d.getLength(); ++m < x; ) {
          c = d.getLine(m);
          var S = c.search(/\S/);
          if (S !== -1) {
            if (h > S)
              break;
            var k = this.getFoldWidgetRange(d, "all", m);
            if (k) {
              if (k.start.row <= _)
                break;
              if (k.isMultiLine())
                m = k.end.row;
              else if (h == S)
                break;
            }
            v = m;
          }
        }
        return new l(_, b, v, d.getLine(v).length);
      }, this.getCommentRegionBlock = function(d, m, c) {
        for (var h = m.search(/\s*$/), _ = d.getLength(), b = c, v = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, x = 1; ++c < _; ) {
          m = d.getLine(c);
          var S = v.exec(m);
          if (!!S && (S[1] ? x-- : x++, !x))
            break;
        }
        var k = c;
        if (k > b)
          return new l(b, h, k, m.length);
      };
    }.call(s.prototype);
  }), ace.define("ace/mode/json", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/json_highlight_rules", "ace/mode/matching_brace_outdent", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle", "ace/worker/worker_client"], function(e, n, a) {
    var i = e("../lib/oop"), l = e("./text").Mode, r = e("./json_highlight_rules").JsonHighlightRules, s = e("./matching_brace_outdent").MatchingBraceOutdent, d = e("./behaviour/cstyle").CstyleBehaviour, m = e("./folding/cstyle").FoldMode, c = e("../worker/worker_client").WorkerClient, h = function() {
      this.HighlightRules = r, this.$outdent = new s(), this.$behaviour = new d(), this.foldingRules = new m();
    };
    i.inherits(h, l), function() {
      this.lineCommentStart = "//", this.blockComment = { start: "/*", end: "*/" }, this.getNextLineIndent = function(_, b, v) {
        var x = this.$getIndent(b);
        if (_ == "start") {
          var S = b.match(/^.*[\{\(\[]\s*$/);
          S && (x += v);
        }
        return x;
      }, this.checkOutdent = function(_, b, v) {
        return this.$outdent.checkOutdent(b, v);
      }, this.autoOutdent = function(_, b, v) {
        this.$outdent.autoOutdent(b, v);
      }, this.createWorker = function(_) {
        var b = new c(["ace"], "ace/mode/json_worker", "JsonWorker");
        return b.attachToDocument(_.getDocument()), b.on("annotate", function(v) {
          _.setAnnotations(v.data);
        }), b.on("terminate", function() {
          _.clearAnnotations();
        }), b;
      }, this.$id = "ace/mode/json";
    }.call(h.prototype), n.Mode = h;
  }), function() {
    ace.require(["ace/mode/json"], function(e) {
      o && (o.exports = e);
    });
  }();
})(Pl);
var Ml = { exports: {} };
(function(o, t) {
  ace.define("ace/mode/css_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function(e, n, a) {
    var i = e("../lib/oop");
    e("../lib/lang");
    var l = e("./text_highlight_rules").TextHighlightRules, r = n.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index", s = n.supportFunction = "rgb|rgba|url|attr|counter|counters", d = n.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom", m = n.supportConstantColor = "aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen", c = n.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace", h = n.numRe = "\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))", _ = n.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b", b = n.pseudoClasses = "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b", v = function() {
      var x = this.createKeywordMapper({ "support.function": s, "support.constant": d, "support.type": r, "support.constant.color": m, "support.constant.fonts": c }, "text", !0);
      this.$rules = { start: [{ include: ["strings", "url", "comments"] }, { token: "paren.lparen", regex: "\\{", next: "ruleset" }, { token: "paren.rparen", regex: "\\}" }, { token: "string", regex: "@(?!viewport)", next: "media" }, { token: "keyword", regex: "#[a-z0-9-_]+" }, { token: "keyword", regex: "%" }, { token: "variable", regex: "\\.[a-z0-9-_]+" }, { token: "string", regex: ":[a-z0-9-_]+" }, { token: "constant.numeric", regex: h }, { token: "constant", regex: "[a-z0-9-_]+" }, { caseInsensitive: !0 }], media: [{ include: ["strings", "url", "comments"] }, { token: "paren.lparen", regex: "\\{", next: "start" }, { token: "paren.rparen", regex: "\\}", next: "start" }, { token: "string", regex: ";", next: "start" }, { token: "keyword", regex: "(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)" }], comments: [{ token: "comment", regex: "\\/\\*", push: [{ token: "comment", regex: "\\*\\/", next: "pop" }, { defaultToken: "comment" }] }], ruleset: [{ regex: "-(webkit|ms|moz|o)-", token: "text" }, { token: "punctuation.operator", regex: "[:;]" }, { token: "paren.rparen", regex: "\\}", next: "start" }, { include: ["strings", "url", "comments"] }, { token: ["constant.numeric", "keyword"], regex: "(" + h + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)" }, { token: "constant.numeric", regex: h }, { token: "constant.numeric", regex: "#[a-f0-9]{6}" }, { token: "constant.numeric", regex: "#[a-f0-9]{3}" }, { token: ["punctuation", "entity.other.attribute-name.pseudo-element.css"], regex: _ }, { token: ["punctuation", "entity.other.attribute-name.pseudo-class.css"], regex: b }, { include: "url" }, { token: x, regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*" }, { caseInsensitive: !0 }], url: [{ token: "support.function", regex: "(?:url(:?-prefix)?|domain|regexp)\\(", push: [{ token: "support.function", regex: "\\)", next: "pop" }, { defaultToken: "string" }] }], strings: [{ token: "string.start", regex: "'", push: [{ token: "string.end", regex: "'|$", next: "pop" }, { include: "escapes" }, { token: "constant.language.escape", regex: /\\$/, consumeLineEnd: !0 }, { defaultToken: "string" }] }, { token: "string.start", regex: '"', push: [{ token: "string.end", regex: '"|$', next: "pop" }, { include: "escapes" }, { token: "constant.language.escape", regex: /\\$/, consumeLineEnd: !0 }, { defaultToken: "string" }] }], escapes: [{ token: "constant.language.escape", regex: /\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/ }] }, this.normalizeRules();
    };
    i.inherits(v, l), n.CssHighlightRules = v;
  }), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(e, n, a) {
    var i = e("../range").Range, l = function() {
    };
    (function() {
      this.checkOutdent = function(r, s) {
        return /^\s+$/.test(r) ? /^\s*\}/.test(s) : !1;
      }, this.autoOutdent = function(r, s) {
        var d = r.getLine(s), m = d.match(/^(\s*\})/);
        if (!m)
          return 0;
        var c = m[1].length, h = r.findMatchingBracket({ row: s, column: c });
        if (!h || h.row == s)
          return 0;
        var _ = this.$getIndent(r.getLine(h.row));
        r.replace(new i(s, 0, s, c - 1), _);
      }, this.$getIndent = function(r) {
        return r.match(/^\s*/)[0];
      };
    }).call(l.prototype), n.MatchingBraceOutdent = l;
  }), ace.define("ace/mode/css_completions", ["require", "exports", "module"], function(e, n, a) {
    var i = { background: { "#$0": 1 }, "background-color": { "#$0": 1, transparent: 1, fixed: 1 }, "background-image": { "url('/$0')": 1 }, "background-repeat": { repeat: 1, "repeat-x": 1, "repeat-y": 1, "no-repeat": 1, inherit: 1 }, "background-position": { bottom: 2, center: 2, left: 2, right: 2, top: 2, inherit: 2 }, "background-attachment": { scroll: 1, fixed: 1 }, "background-size": { cover: 1, contain: 1 }, "background-clip": { "border-box": 1, "padding-box": 1, "content-box": 1 }, "background-origin": { "border-box": 1, "padding-box": 1, "content-box": 1 }, border: { "solid $0": 1, "dashed $0": 1, "dotted $0": 1, "#$0": 1 }, "border-color": { "#$0": 1 }, "border-style": { solid: 2, dashed: 2, dotted: 2, double: 2, groove: 2, hidden: 2, inherit: 2, inset: 2, none: 2, outset: 2, ridged: 2 }, "border-collapse": { collapse: 1, separate: 1 }, bottom: { px: 1, em: 1, "%": 1 }, clear: { left: 1, right: 1, both: 1, none: 1 }, color: { "#$0": 1, "rgb(#$00,0,0)": 1 }, cursor: { default: 1, pointer: 1, move: 1, text: 1, wait: 1, help: 1, progress: 1, "n-resize": 1, "ne-resize": 1, "e-resize": 1, "se-resize": 1, "s-resize": 1, "sw-resize": 1, "w-resize": 1, "nw-resize": 1 }, display: { none: 1, block: 1, inline: 1, "inline-block": 1, "table-cell": 1 }, "empty-cells": { show: 1, hide: 1 }, float: { left: 1, right: 1, none: 1 }, "font-family": { Arial: 2, "Comic Sans MS": 2, Consolas: 2, "Courier New": 2, Courier: 2, Georgia: 2, Monospace: 2, "Sans-Serif": 2, "Segoe UI": 2, Tahoma: 2, "Times New Roman": 2, "Trebuchet MS": 2, Verdana: 1 }, "font-size": { px: 1, em: 1, "%": 1 }, "font-weight": { bold: 1, normal: 1 }, "font-style": { italic: 1, normal: 1 }, "font-variant": { normal: 1, "small-caps": 1 }, height: { px: 1, em: 1, "%": 1 }, left: { px: 1, em: 1, "%": 1 }, "letter-spacing": { normal: 1 }, "line-height": { normal: 1 }, "list-style-type": { none: 1, disc: 1, circle: 1, square: 1, decimal: 1, "decimal-leading-zero": 1, "lower-roman": 1, "upper-roman": 1, "lower-greek": 1, "lower-latin": 1, "upper-latin": 1, georgian: 1, "lower-alpha": 1, "upper-alpha": 1 }, margin: { px: 1, em: 1, "%": 1 }, "margin-right": { px: 1, em: 1, "%": 1 }, "margin-left": { px: 1, em: 1, "%": 1 }, "margin-top": { px: 1, em: 1, "%": 1 }, "margin-bottom": { px: 1, em: 1, "%": 1 }, "max-height": { px: 1, em: 1, "%": 1 }, "max-width": { px: 1, em: 1, "%": 1 }, "min-height": { px: 1, em: 1, "%": 1 }, "min-width": { px: 1, em: 1, "%": 1 }, overflow: { hidden: 1, visible: 1, auto: 1, scroll: 1 }, "overflow-x": { hidden: 1, visible: 1, auto: 1, scroll: 1 }, "overflow-y": { hidden: 1, visible: 1, auto: 1, scroll: 1 }, padding: { px: 1, em: 1, "%": 1 }, "padding-top": { px: 1, em: 1, "%": 1 }, "padding-right": { px: 1, em: 1, "%": 1 }, "padding-bottom": { px: 1, em: 1, "%": 1 }, "padding-left": { px: 1, em: 1, "%": 1 }, "page-break-after": { auto: 1, always: 1, avoid: 1, left: 1, right: 1 }, "page-break-before": { auto: 1, always: 1, avoid: 1, left: 1, right: 1 }, position: { absolute: 1, relative: 1, fixed: 1, static: 1 }, right: { px: 1, em: 1, "%": 1 }, "table-layout": { fixed: 1, auto: 1 }, "text-decoration": { none: 1, underline: 1, "line-through": 1, blink: 1 }, "text-align": { left: 1, right: 1, center: 1, justify: 1 }, "text-transform": { capitalize: 1, uppercase: 1, lowercase: 1, none: 1 }, top: { px: 1, em: 1, "%": 1 }, "vertical-align": { top: 1, bottom: 1 }, visibility: { hidden: 1, visible: 1 }, "white-space": { nowrap: 1, normal: 1, pre: 1, "pre-line": 1, "pre-wrap": 1 }, width: { px: 1, em: 1, "%": 1 }, "word-spacing": { normal: 1 }, filter: { "alpha(opacity=$0100)": 1 }, "text-shadow": { "$02px 2px 2px #777": 1 }, "text-overflow": { "ellipsis-word": 1, clip: 1, ellipsis: 1 }, "-moz-border-radius": 1, "-moz-border-radius-topright": 1, "-moz-border-radius-bottomright": 1, "-moz-border-radius-topleft": 1, "-moz-border-radius-bottomleft": 1, "-webkit-border-radius": 1, "-webkit-border-top-right-radius": 1, "-webkit-border-top-left-radius": 1, "-webkit-border-bottom-right-radius": 1, "-webkit-border-bottom-left-radius": 1, "-moz-box-shadow": 1, "-webkit-box-shadow": 1, transform: { "rotate($00deg)": 1, "skew($00deg)": 1 }, "-moz-transform": { "rotate($00deg)": 1, "skew($00deg)": 1 }, "-webkit-transform": { "rotate($00deg)": 1, "skew($00deg)": 1 } }, l = function() {
    };
    (function() {
      this.completionsDefined = !1, this.defineCompletions = function() {
        if (document) {
          var r = document.createElement("c").style;
          for (var s in r)
            if (typeof r[s] == "string") {
              var d = s.replace(/[A-Z]/g, function(m) {
                return "-" + m.toLowerCase();
              });
              i.hasOwnProperty(d) || (i[d] = 1);
            }
        }
        this.completionsDefined = !0;
      }, this.getCompletions = function(r, s, d, m) {
        if (this.completionsDefined || this.defineCompletions(), r === "ruleset" || s.$mode.$id == "ace/mode/scss") {
          var c = s.getLine(d.row).substr(0, d.column);
          return /:[^;]+$/.test(c) ? (/([\w\-]+):[^:]*$/.test(c), this.getPropertyValueCompletions(r, s, d, m)) : this.getPropertyCompletions(r, s, d, m);
        }
        return [];
      }, this.getPropertyCompletions = function(r, s, d, m) {
        var c = Object.keys(i);
        return c.map(function(h) {
          return { caption: h, snippet: h + ": $0;", meta: "property", score: 1e6 };
        });
      }, this.getPropertyValueCompletions = function(r, s, d, m) {
        var c = s.getLine(d.row).substr(0, d.column), h = (/([\w\-]+):[^:]*$/.exec(c) || {})[1];
        if (!h)
          return [];
        var _ = [];
        return h in i && typeof i[h] == "object" && (_ = Object.keys(i[h])), _.map(function(b) {
          return { caption: b, snippet: b, meta: "property value", score: 1e6 };
        });
      };
    }).call(l.prototype), n.CssCompletions = l;
  }), ace.define("ace/mode/behaviour/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/mode/behaviour/cstyle", "ace/token_iterator"], function(e, n, a) {
    var i = e("../../lib/oop");
    e("../behaviour").Behaviour;
    var l = e("./cstyle").CstyleBehaviour, r = e("../../token_iterator").TokenIterator, s = function() {
      this.inherit(l), this.add("colon", "insertion", function(d, m, c, h, _) {
        if (_ === ":" && c.selection.isEmpty()) {
          var b = c.getCursorPosition(), v = new r(h, b.row, b.column), x = v.getCurrentToken();
          if (x && x.value.match(/\s+/) && (x = v.stepBackward()), x && x.type === "support.type") {
            var S = h.doc.getLine(b.row), k = S.substring(b.column, b.column + 1);
            if (k === ":")
              return { text: "", selection: [1, 1] };
            if (/^(\s+[^;]|\s*$)/.test(S.substring(b.column)))
              return { text: ":;", selection: [1, 1] };
          }
        }
      }), this.add("colon", "deletion", function(d, m, c, h, _) {
        var b = h.doc.getTextRange(_);
        if (!_.isMultiLine() && b === ":") {
          var v = c.getCursorPosition(), x = new r(h, v.row, v.column), S = x.getCurrentToken();
          if (S && S.value.match(/\s+/) && (S = x.stepBackward()), S && S.type === "support.type") {
            var k = h.doc.getLine(_.start.row), R = k.substring(_.end.column, _.end.column + 1);
            if (R === ";")
              return _.end.column++, _;
          }
        }
      }), this.add("semicolon", "insertion", function(d, m, c, h, _) {
        if (_ === ";" && c.selection.isEmpty()) {
          var b = c.getCursorPosition(), v = h.doc.getLine(b.row), x = v.substring(b.column, b.column + 1);
          if (x === ";")
            return { text: "", selection: [1, 1] };
        }
      }), this.add("!important", "insertion", function(d, m, c, h, _) {
        if (_ === "!" && c.selection.isEmpty()) {
          var b = c.getCursorPosition(), v = h.doc.getLine(b.row);
          if (/^\s*(;|}|$)/.test(v.substring(b.column)))
            return { text: "!important", selection: [10, 10] };
        }
      });
    };
    i.inherits(s, l), n.CssBehaviour = s;
  }), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(e, n, a) {
    var i = e("../../lib/oop"), l = e("../../range").Range, r = e("./fold_mode").FoldMode, s = n.FoldMode = function(d) {
      d && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + d.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + d.end)));
    };
    i.inherits(s, r), function() {
      this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(d, m, c) {
        var h = d.getLine(c);
        if (this.singleLineBlockCommentRe.test(h) && !this.startRegionRe.test(h) && !this.tripleStarBlockCommentRe.test(h))
          return "";
        var _ = this._getFoldWidgetBase(d, m, c);
        return !_ && this.startRegionRe.test(h) ? "start" : _;
      }, this.getFoldWidgetRange = function(d, m, c, h) {
        var _ = d.getLine(c);
        if (this.startRegionRe.test(_))
          return this.getCommentRegionBlock(d, _, c);
        var x = _.match(this.foldingStartMarker);
        if (x) {
          var b = x.index;
          if (x[1])
            return this.openingBracketBlock(d, x[1], c, b);
          var v = d.getCommentFoldRange(c, b + x[0].length, 1);
          return v && !v.isMultiLine() && (h ? v = this.getSectionRange(d, c) : m != "all" && (v = null)), v;
        }
        if (m !== "markbegin") {
          var x = _.match(this.foldingStopMarker);
          if (x) {
            var b = x.index + x[0].length;
            return x[1] ? this.closingBracketBlock(d, x[1], c, b) : d.getCommentFoldRange(c, b, -1);
          }
        }
      }, this.getSectionRange = function(d, m) {
        var c = d.getLine(m), h = c.search(/\S/), _ = m, b = c.length;
        m += 1;
        for (var v = m, x = d.getLength(); ++m < x; ) {
          c = d.getLine(m);
          var S = c.search(/\S/);
          if (S !== -1) {
            if (h > S)
              break;
            var k = this.getFoldWidgetRange(d, "all", m);
            if (k) {
              if (k.start.row <= _)
                break;
              if (k.isMultiLine())
                m = k.end.row;
              else if (h == S)
                break;
            }
            v = m;
          }
        }
        return new l(_, b, v, d.getLine(v).length);
      }, this.getCommentRegionBlock = function(d, m, c) {
        for (var h = m.search(/\s*$/), _ = d.getLength(), b = c, v = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, x = 1; ++c < _; ) {
          m = d.getLine(c);
          var S = v.exec(m);
          if (!!S && (S[1] ? x-- : x++, !x))
            break;
        }
        var k = c;
        if (k > b)
          return new l(b, h, k, m.length);
      };
    }.call(s.prototype);
  }), ace.define("ace/mode/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/css_highlight_rules", "ace/mode/matching_brace_outdent", "ace/worker/worker_client", "ace/mode/css_completions", "ace/mode/behaviour/css", "ace/mode/folding/cstyle"], function(e, n, a) {
    var i = e("../lib/oop"), l = e("./text").Mode, r = e("./css_highlight_rules").CssHighlightRules, s = e("./matching_brace_outdent").MatchingBraceOutdent, d = e("../worker/worker_client").WorkerClient, m = e("./css_completions").CssCompletions, c = e("./behaviour/css").CssBehaviour, h = e("./folding/cstyle").FoldMode, _ = function() {
      this.HighlightRules = r, this.$outdent = new s(), this.$behaviour = new c(), this.$completer = new m(), this.foldingRules = new h();
    };
    i.inherits(_, l), function() {
      this.foldingRules = "cStyle", this.blockComment = { start: "/*", end: "*/" }, this.getNextLineIndent = function(b, v, x) {
        var S = this.$getIndent(v), k = this.getTokenizer().getLineTokens(v, b).tokens;
        if (k.length && k[k.length - 1].type == "comment")
          return S;
        var R = v.match(/^.*\{\s*$/);
        return R && (S += x), S;
      }, this.checkOutdent = function(b, v, x) {
        return this.$outdent.checkOutdent(v, x);
      }, this.autoOutdent = function(b, v, x) {
        this.$outdent.autoOutdent(v, x);
      }, this.getCompletions = function(b, v, x, S) {
        return this.$completer.getCompletions(b, v, x, S);
      }, this.createWorker = function(b) {
        var v = new d(["ace"], "ace/mode/css_worker", "Worker");
        return v.attachToDocument(b.getDocument()), v.on("annotate", function(x) {
          b.setAnnotations(x.data);
        }), v.on("terminate", function() {
          b.clearAnnotations();
        }), v;
      }, this.$id = "ace/mode/css", this.snippetFileId = "ace/snippets/css";
    }.call(_.prototype), n.Mode = _;
  }), function() {
    ace.require(["ace/mode/css"], function(e) {
      o && (o.exports = e);
    });
  }();
})(Ml);
const w = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [n, a] of t)
    e[n] = a;
  return e;
}, pn = ["blur", "input", "change", "changeSelectionStyle", "changeSession", "copy", "focus", "paste"], Il = Ct({
  props: {
    modelValue: {
      type: String,
      required: !0
    },
    lang: {
      type: String,
      default: "text"
    },
    theme: {
      type: String,
      default: "chrome"
    },
    options: Object,
    placeholder: String,
    readonly: Boolean,
    wrap: Boolean,
    printMargin: {
      type: [Boolean, Number],
      default: !0
    },
    minLines: Number,
    maxLines: Number
  },
  emits: ["update:modelValue", "init", ...pn],
  mounted() {
    const o = this._editor = _l(
      fl.edit(this.$el, {
        placeholder: this.placeholder,
        readOnly: this.readonly,
        value: this.modelValue,
        mode: "ace/mode/" + this.lang,
        theme: "ace/theme/" + this.theme,
        wrap: this.wrap,
        printMargin: this.printMargin,
        useWorker: !1,
        minLines: this.minLines,
        maxLines: this.maxLines,
        ...this.options
      })
    );
    this._contentBackup = this.modelValue, this._isSettingContent = !1, o.on("change", () => {
      if (this._isSettingContent)
        return;
      const t = o.getValue();
      this._contentBackup = t, this.$emit("update:modelValue", t);
    }), pn.forEach((t) => {
      const e = "on" + hl(t);
      typeof this.$.vnode.props[e] == "function" && o.on(t, this.$emit.bind(this, t));
    }), this.$emit("init", o);
  },
  beforeUnmount() {
    var o;
    (o = this._editor) === null || o === void 0 || o.destroy();
  },
  methods: {
    focus() {
      this._editor.focus();
    },
    blur() {
      this._editor.blur();
    },
    selectAll() {
      this._editor.selectAll();
    }
  },
  watch: {
    modelValue(o) {
      if (this._contentBackup !== o) {
        try {
          this._isSettingContent = !0, this._editor.setValue(o, 1);
        } finally {
          this._isSettingContent = !1;
        }
        this._contentBackup = o;
      }
    },
    theme(o) {
      this._editor.setTheme("ace/theme/" + o);
    },
    options(o) {
      this._editor.setOptions(o);
    },
    readonly(o) {
      this._editor.setReadOnly(o);
    },
    placeholder(o) {
      this._editor.setOption("placeholder", o);
    },
    wrap(o) {
      this._editor.setWrapBehavioursEnabled(o);
    },
    printMargin(o) {
      this._editor.setOption("printMargin", o);
    },
    lang(o) {
      this._editor.setOption("mode", "ace/mode/" + o);
    },
    minLines(o) {
      this._editor.setOption("minLines", o);
    },
    maxLines(o) {
      this._editor.setOption("maxLines", o);
    }
  }
}), Al = { class: "code-editor-wrap" };
function Rl(o, t, e, n, a, i) {
  return g(), D("div", Al);
}
const dt = /* @__PURE__ */ w(Il, [["render", Rl]]);
/*!
 * Signature Pad v4.0.7 | https://github.com/szimek/signature_pad
 * (c) 2022 Szymon Nowak | Released under the MIT license
 */
class Jt {
  constructor(t, e, n, a) {
    if (isNaN(t) || isNaN(e))
      throw new Error(`Point is invalid: (${t}, ${e})`);
    this.x = +t, this.y = +e, this.pressure = n || 0, this.time = a || Date.now();
  }
  distanceTo(t) {
    return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2));
  }
  equals(t) {
    return this.x === t.x && this.y === t.y && this.pressure === t.pressure && this.time === t.time;
  }
  velocityFrom(t) {
    return this.time !== t.time ? this.distanceTo(t) / (this.time - t.time) : 0;
  }
}
class qo {
  constructor(t, e, n, a, i, l) {
    this.startPoint = t, this.control2 = e, this.control1 = n, this.endPoint = a, this.startWidth = i, this.endWidth = l;
  }
  static fromPoints(t, e) {
    const n = this.calculateControlPoints(t[0], t[1], t[2]).c2, a = this.calculateControlPoints(t[1], t[2], t[3]).c1;
    return new qo(t[1], n, a, t[2], e.start, e.end);
  }
  static calculateControlPoints(t, e, n) {
    const a = t.x - e.x, i = t.y - e.y, l = e.x - n.x, r = e.y - n.y, s = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 }, d = { x: (e.x + n.x) / 2, y: (e.y + n.y) / 2 }, m = Math.sqrt(a * a + i * i), c = Math.sqrt(l * l + r * r), h = s.x - d.x, _ = s.y - d.y, b = c / (m + c), v = { x: d.x + h * b, y: d.y + _ * b }, x = e.x - v.x, S = e.y - v.y;
    return {
      c1: new Jt(s.x + x, s.y + S),
      c2: new Jt(d.x + x, d.y + S)
    };
  }
  length() {
    let e = 0, n, a;
    for (let i = 0; i <= 10; i += 1) {
      const l = i / 10, r = this.point(l, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), s = this.point(l, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (i > 0) {
        const d = r - n, m = s - a;
        e += Math.sqrt(d * d + m * m);
      }
      n = r, a = s;
    }
    return e;
  }
  point(t, e, n, a, i) {
    return e * (1 - t) * (1 - t) * (1 - t) + 3 * n * (1 - t) * (1 - t) * t + 3 * a * (1 - t) * t * t + i * t * t * t;
  }
}
class zl {
  constructor() {
    try {
      this._et = new EventTarget();
    } catch {
      this._et = document;
    }
  }
  addEventListener(t, e, n) {
    this._et.addEventListener(t, e, n);
  }
  dispatchEvent(t) {
    return this._et.dispatchEvent(t);
  }
  removeEventListener(t, e, n) {
    this._et.removeEventListener(t, e, n);
  }
}
function Fl(o, t = 250) {
  let e = 0, n = null, a, i, l;
  const r = () => {
    e = Date.now(), n = null, a = o.apply(i, l), n || (i = null, l = []);
  };
  return function(...d) {
    const m = Date.now(), c = t - (m - e);
    return i = this, l = d, c <= 0 || c > t ? (n && (clearTimeout(n), n = null), e = m, a = o.apply(i, l), n || (i = null, l = [])) : n || (n = window.setTimeout(r, c)), a;
  };
}
class Zt extends zl {
  constructor(t, e = {}) {
    super(), this.canvas = t, this._handleMouseDown = (n) => {
      n.buttons === 1 && (this._drawningStroke = !0, this._strokeBegin(n));
    }, this._handleMouseMove = (n) => {
      this._drawningStroke && this._strokeMoveUpdate(n);
    }, this._handleMouseUp = (n) => {
      n.buttons === 1 && this._drawningStroke && (this._drawningStroke = !1, this._strokeEnd(n));
    }, this._handleTouchStart = (n) => {
      if (n.cancelable && n.preventDefault(), n.targetTouches.length === 1) {
        const a = n.changedTouches[0];
        this._strokeBegin(a);
      }
    }, this._handleTouchMove = (n) => {
      n.cancelable && n.preventDefault();
      const a = n.targetTouches[0];
      this._strokeMoveUpdate(a);
    }, this._handleTouchEnd = (n) => {
      if (n.target === this.canvas) {
        n.cancelable && n.preventDefault();
        const i = n.changedTouches[0];
        this._strokeEnd(i);
      }
    }, this._handlePointerStart = (n) => {
      this._drawningStroke = !0, n.preventDefault(), this._strokeBegin(n);
    }, this._handlePointerMove = (n) => {
      this._drawningStroke && (n.preventDefault(), this._strokeMoveUpdate(n));
    }, this._handlePointerEnd = (n) => {
      this._drawningStroke && (n.preventDefault(), this._drawningStroke = !1, this._strokeEnd(n));
    }, this.velocityFilterWeight = e.velocityFilterWeight || 0.7, this.minWidth = e.minWidth || 0.5, this.maxWidth = e.maxWidth || 2.5, this.throttle = "throttle" in e ? e.throttle : 16, this.minDistance = "minDistance" in e ? e.minDistance : 5, this.dotSize = e.dotSize || 0, this.penColor = e.penColor || "black", this.backgroundColor = e.backgroundColor || "rgba(0,0,0,0)", this._strokeMoveUpdate = this.throttle ? Fl(Zt.prototype._strokeUpdate, this.throttle) : Zt.prototype._strokeUpdate, this._ctx = t.getContext("2d"), this.clear(), this.on();
  }
  clear() {
    const { _ctx: t, canvas: e } = this;
    t.fillStyle = this.backgroundColor, t.clearRect(0, 0, e.width, e.height), t.fillRect(0, 0, e.width, e.height), this._data = [], this._reset(), this._isEmpty = !0;
  }
  fromDataURL(t, e = {}) {
    return new Promise((n, a) => {
      const i = new Image(), l = e.ratio || window.devicePixelRatio || 1, r = e.width || this.canvas.width / l, s = e.height || this.canvas.height / l, d = e.xOffset || 0, m = e.yOffset || 0;
      this._reset(), i.onload = () => {
        this._ctx.drawImage(i, d, m, r, s), n();
      }, i.onerror = (c) => {
        a(c);
      }, i.crossOrigin = "anonymous", i.src = t, this._isEmpty = !1;
    });
  }
  toDataURL(t = "image/png", e) {
    switch (t) {
      case "image/svg+xml":
        return this._toSVG();
      default:
        return this.canvas.toDataURL(t, e);
    }
  }
  on() {
    this.canvas.style.touchAction = "none", this.canvas.style.msTouchAction = "none", this.canvas.style.userSelect = "none";
    const t = /Macintosh/.test(navigator.userAgent) && "ontouchstart" in document;
    window.PointerEvent && !t ? this._handlePointerEvents() : (this._handleMouseEvents(), "ontouchstart" in window && this._handleTouchEvents());
  }
  off() {
    this.canvas.style.touchAction = "auto", this.canvas.style.msTouchAction = "auto", this.canvas.style.userSelect = "auto", this.canvas.removeEventListener("pointerdown", this._handlePointerStart), this.canvas.removeEventListener("pointermove", this._handlePointerMove), this.canvas.ownerDocument.removeEventListener("pointerup", this._handlePointerEnd), this.canvas.removeEventListener("mousedown", this._handleMouseDown), this.canvas.removeEventListener("mousemove", this._handleMouseMove), this.canvas.ownerDocument.removeEventListener("mouseup", this._handleMouseUp), this.canvas.removeEventListener("touchstart", this._handleTouchStart), this.canvas.removeEventListener("touchmove", this._handleTouchMove), this.canvas.removeEventListener("touchend", this._handleTouchEnd);
  }
  isEmpty() {
    return this._isEmpty;
  }
  fromData(t, { clear: e = !0 } = {}) {
    e && this.clear(), this._fromData(t, this._drawCurve.bind(this), this._drawDot.bind(this)), this._data = this._data.concat(t);
  }
  toData() {
    return this._data;
  }
  _strokeBegin(t) {
    this.dispatchEvent(new CustomEvent("beginStroke", { detail: t }));
    const e = {
      dotSize: this.dotSize,
      minWidth: this.minWidth,
      maxWidth: this.maxWidth,
      penColor: this.penColor,
      points: []
    };
    this._data.push(e), this._reset(), this._strokeUpdate(t);
  }
  _strokeUpdate(t) {
    if (this._data.length === 0) {
      this._strokeBegin(t);
      return;
    }
    this.dispatchEvent(new CustomEvent("beforeUpdateStroke", { detail: t }));
    const e = t.clientX, n = t.clientY, a = t.pressure !== void 0 ? t.pressure : t.force !== void 0 ? t.force : 0, i = this._createPoint(e, n, a), l = this._data[this._data.length - 1], r = l.points, s = r.length > 0 && r[r.length - 1], d = s ? i.distanceTo(s) <= this.minDistance : !1, { penColor: m, dotSize: c, minWidth: h, maxWidth: _ } = l;
    if (!s || !(s && d)) {
      const b = this._addPoint(i);
      s ? b && this._drawCurve(b, {
        penColor: m,
        dotSize: c,
        minWidth: h,
        maxWidth: _
      }) : this._drawDot(i, {
        penColor: m,
        dotSize: c,
        minWidth: h,
        maxWidth: _
      }), r.push({
        time: i.time,
        x: i.x,
        y: i.y,
        pressure: i.pressure
      });
    }
    this.dispatchEvent(new CustomEvent("afterUpdateStroke", { detail: t }));
  }
  _strokeEnd(t) {
    this._strokeUpdate(t), this.dispatchEvent(new CustomEvent("endStroke", { detail: t }));
  }
  _handlePointerEvents() {
    this._drawningStroke = !1, this.canvas.addEventListener("pointerdown", this._handlePointerStart), this.canvas.addEventListener("pointermove", this._handlePointerMove), this.canvas.ownerDocument.addEventListener("pointerup", this._handlePointerEnd);
  }
  _handleMouseEvents() {
    this._drawningStroke = !1, this.canvas.addEventListener("mousedown", this._handleMouseDown), this.canvas.addEventListener("mousemove", this._handleMouseMove), this.canvas.ownerDocument.addEventListener("mouseup", this._handleMouseUp);
  }
  _handleTouchEvents() {
    this.canvas.addEventListener("touchstart", this._handleTouchStart), this.canvas.addEventListener("touchmove", this._handleTouchMove), this.canvas.addEventListener("touchend", this._handleTouchEnd);
  }
  _reset() {
    this._lastPoints = [], this._lastVelocity = 0, this._lastWidth = (this.minWidth + this.maxWidth) / 2, this._ctx.fillStyle = this.penColor;
  }
  _createPoint(t, e, n) {
    const a = this.canvas.getBoundingClientRect();
    return new Jt(t - a.left, e - a.top, n, new Date().getTime());
  }
  _addPoint(t) {
    const { _lastPoints: e } = this;
    if (e.push(t), e.length > 2) {
      e.length === 3 && e.unshift(e[0]);
      const n = this._calculateCurveWidths(e[1], e[2]), a = qo.fromPoints(e, n);
      return e.shift(), a;
    }
    return null;
  }
  _calculateCurveWidths(t, e) {
    const n = this.velocityFilterWeight * e.velocityFrom(t) + (1 - this.velocityFilterWeight) * this._lastVelocity, a = this._strokeWidth(n), i = {
      end: a,
      start: this._lastWidth
    };
    return this._lastVelocity = n, this._lastWidth = a, i;
  }
  _strokeWidth(t) {
    return Math.max(this.maxWidth / (t + 1), this.minWidth);
  }
  _drawCurveSegment(t, e, n) {
    const a = this._ctx;
    a.moveTo(t, e), a.arc(t, e, n, 0, 2 * Math.PI, !1), this._isEmpty = !1;
  }
  _drawCurve(t, e) {
    const n = this._ctx, a = t.endWidth - t.startWidth, i = Math.ceil(t.length()) * 2;
    n.beginPath(), n.fillStyle = e.penColor;
    for (let l = 0; l < i; l += 1) {
      const r = l / i, s = r * r, d = s * r, m = 1 - r, c = m * m, h = c * m;
      let _ = h * t.startPoint.x;
      _ += 3 * c * r * t.control1.x, _ += 3 * m * s * t.control2.x, _ += d * t.endPoint.x;
      let b = h * t.startPoint.y;
      b += 3 * c * r * t.control1.y, b += 3 * m * s * t.control2.y, b += d * t.endPoint.y;
      const v = Math.min(t.startWidth + d * a, e.maxWidth);
      this._drawCurveSegment(_, b, v);
    }
    n.closePath(), n.fill();
  }
  _drawDot(t, e) {
    const n = this._ctx, a = e.dotSize > 0 ? e.dotSize : (e.minWidth + e.maxWidth) / 2;
    n.beginPath(), this._drawCurveSegment(t.x, t.y, a), n.closePath(), n.fillStyle = e.penColor, n.fill();
  }
  _fromData(t, e, n) {
    for (const a of t) {
      const { penColor: i, dotSize: l, minWidth: r, maxWidth: s, points: d } = a;
      if (d.length > 1)
        for (let m = 0; m < d.length; m += 1) {
          const c = d[m], h = new Jt(c.x, c.y, c.pressure, c.time);
          this.penColor = i, m === 0 && this._reset();
          const _ = this._addPoint(h);
          _ && e(_, {
            penColor: i,
            dotSize: l,
            minWidth: r,
            maxWidth: s
          });
        }
      else
        this._reset(), n(d[0], {
          penColor: i,
          dotSize: l,
          minWidth: r,
          maxWidth: s
        });
    }
  }
  _toSVG() {
    const t = this._data, e = Math.max(window.devicePixelRatio || 1, 1), n = 0, a = 0, i = this.canvas.width / e, l = this.canvas.height / e, r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    r.setAttribute("width", this.canvas.width.toString()), r.setAttribute("height", this.canvas.height.toString()), this._fromData(t, (_, { penColor: b }) => {
      const v = document.createElement("path");
      if (!isNaN(_.control1.x) && !isNaN(_.control1.y) && !isNaN(_.control2.x) && !isNaN(_.control2.y)) {
        const x = `M ${_.startPoint.x.toFixed(3)},${_.startPoint.y.toFixed(3)} C ${_.control1.x.toFixed(3)},${_.control1.y.toFixed(3)} ${_.control2.x.toFixed(3)},${_.control2.y.toFixed(3)} ${_.endPoint.x.toFixed(3)},${_.endPoint.y.toFixed(3)}`;
        v.setAttribute("d", x), v.setAttribute("stroke-width", (_.endWidth * 2.25).toFixed(3)), v.setAttribute("stroke", b), v.setAttribute("fill", "none"), v.setAttribute("stroke-linecap", "round"), r.appendChild(v);
      }
    }, (_, { penColor: b, dotSize: v, minWidth: x, maxWidth: S }) => {
      const k = document.createElement("circle"), R = v > 0 ? v : (x + S) / 2;
      k.setAttribute("r", R.toString()), k.setAttribute("cx", _.x.toString()), k.setAttribute("cy", _.y.toString()), k.setAttribute("fill", b), r.appendChild(k);
    });
    const s = "data:image/svg+xml;base64,", d = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${n} ${a} ${this.canvas.width} ${this.canvas.height}" width="${i}" height="${l}">`;
    let m = r.innerHTML;
    if (m === void 0) {
      const _ = document.createElement("dummy"), b = r.childNodes;
      _.innerHTML = "";
      for (let v = 0; v < b.length; v += 1)
        _.appendChild(b[v].cloneNode(!0));
      m = _.innerHTML;
    }
    const c = "</svg>", h = d + m + c;
    return s + btoa(h);
  }
}
const Do = ["image/png", "image/jpeg", "image/svg+xml"], Bl = (o) => Do.includes(o), fn = (o) => JSON.parse(JSON.stringify(o)), _n = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  x: 0,
  y: 0
}, Ll = {
  dotSize: (0.5 + 2.5) / 2,
  minWidth: 0.5,
  maxWidth: 2.5,
  throttle: 16,
  minDistance: 5,
  backgroundColor: "rgba(0,0,0,0)",
  penColor: "black",
  velocityFilterWeight: 0.7,
  onBegin: () => {
  },
  onEnd: () => {
  }
}, sr = Ct({
  name: "signature",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    customStyle: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Object,
      default: () => ({})
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    signaturePad: {},
    cacheImages: [],
    signatureData: _n,
    onResizeHandler: null
  }),
  computed: {
    propsImagesAndCustomImages() {
      const o = fn(this.images), t = fn(this.cacheImages);
      return [...o, ...t];
    }
  },
  watch: {
    options: function(o) {
      Object.keys(o).forEach((t) => {
        this.signaturePad[t] && (this.signaturePad[t] = o[t]);
      });
    }
  },
  mounted() {
    const { options: o } = this, t = this.$refs.signaturePadCanvas, e = new Zt(t, {
      ...Ll,
      ...o
    });
    this.signaturePad = e, o.resizeHandler && (this.resizeCanvas = o.resizeHandler.bind(this)), this.onResizeHandler = this.resizeCanvas.bind(this), window.addEventListener("resize", this.onResizeHandler, !1), this.resizeCanvas(), o.beginStroke && e.addEventListener("beginStroke", o.beginStroke.bind(this)), o.endStroke && e.addEventListener("endStroke", o.endStroke.bind(this));
  },
  beforeUnmount() {
    this.onResizeHandler && window.removeEventListener("resize", this.onResizeHandler, !1);
  },
  methods: {
    resizeCanvas() {
      const o = this.$refs.signaturePadCanvas, t = this.signaturePad.toData(), e = Math.max(window.devicePixelRatio || 1, 1);
      o.width = o.offsetWidth * e, o.height = o.offsetHeight * e, o.getContext("2d").scale(e, e), this.signaturePad.clear(), this.signatureData = _n, this.signaturePad.fromData(t);
    },
    saveSignature(o = Do[0], t) {
      const { signaturePad: e } = this, n = { isEmpty: !1, data: void 0 };
      if (!Bl(o)) {
        const a = Do.join(", ");
        throw new Error(`The Image type is incorrect! We are support ${a} types.`);
      }
      return e.isEmpty() ? {
        ...n,
        isEmpty: !0
      } : (this.signatureData = e.toDataURL(o, t), {
        ...n,
        data: this.signatureData
      });
    },
    undoSignature() {
      const { signaturePad: o } = this, t = o.toData();
      if (t)
        return o.fromData(t.slice(0, -1));
    },
    fromDataURL(o, t = {}, e) {
      return this.signaturePad.fromDataURL(o, t, e);
    },
    fromData(o) {
      return this.signaturePad.fromData(o);
    },
    toData() {
      return this.signaturePad.toData();
    },
    lockSignaturePad() {
      return this.signaturePad.off();
    },
    openSignaturePad() {
      return this.signaturePad.on();
    },
    isEmpty() {
      return this.signaturePad.isEmpty();
    },
    getPropImagesAndCacheImages() {
      return this.propsImagesAndCustomImages;
    },
    clearCacheImages() {
      return this.cacheImages = [], this.cacheImages;
    },
    clearSignature() {
      return this.signaturePad.clear();
    }
  },
  render() {
    const { width: o, height: t, customStyle: e } = this;
    return Xt(
      "div",
      {
        style: {
          width: o,
          height: t,
          ...e
        }
      },
      [
        Xt("canvas", {
          style: {
            width: o,
            height: t
          },
          ref: "signaturePadCanvas"
        })
      ]
    );
  }
});
function dr(o) {
  const t = {}, e = {}, n = {};
  o.headers.forEach(({ key: s, value: d }) => {
    s && d && (t[s] = d);
  }), o.params.forEach(({ key: s, value: d }) => {
    s && d && (e[s] = d);
  }), o.data.forEach(({ key: s, value: d }) => {
    s && d && (n[s] = d);
  });
  const a = Vl.create({
    timeout: 3e4
  }), i = new Function("config", o.requestHandler), l = new Function("response", o.responseHandler), r = new Function("error", o.errorHandler);
  return a.interceptors.request.use(
    function(s) {
      return i(s);
    },
    function(s) {
      return Promise.reject(s);
    }
  ), a.interceptors.response.use(
    function(s) {
      return l(s);
    },
    function(s) {
      return r(s);
    }
  ), a({ url: o.url, method: o.method, headers: t, params: e, data: n });
}
function Yo(o) {
  return /\{\{((?:.|\n)+?)\}\}/g.test(o);
}
function ur(o) {
  const t = /\{\{((?:.|\n)+?)\}\}/g;
  return t.test(o) ? (t.lastIndex = 0, t.exec(o)[1]) : o;
}
function cr(o) {
  var t;
  for (t in o)
    return !1;
  return !0;
}
function Ul(o) {
  return !["object", "function"].includes(typeof o) || o === null;
}
function Go(o, t) {
  return Object.hasOwnProperty.call(o, t);
}
function Vt(o, t) {
  var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = [], a;
  if (t = t || e.length, o)
    for (a = 0; a < o; a++)
      n[a] = e[0 | Math.random() * t];
  else {
    var i;
    for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++)
      n[a] || (i = 0 | Math.random() * 16, n[a] = e[a == 19 ? i & 3 | 8 : i]);
  }
  return n.join("");
}
var mr = { exports: {} };
const Nl = {
  86: {
    11e4: "\u5317\u4EAC\u5E02",
    12e4: "\u5929\u6D25\u5E02",
    13e4: "\u6CB3\u5317\u7701",
    14e4: "\u5C71\u897F\u7701",
    15e4: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
    21e4: "\u8FBD\u5B81\u7701",
    22e4: "\u5409\u6797\u7701",
    23e4: "\u9ED1\u9F99\u6C5F\u7701",
    31e4: "\u4E0A\u6D77\u5E02",
    32e4: "\u6C5F\u82CF\u7701",
    33e4: "\u6D59\u6C5F\u7701",
    34e4: "\u5B89\u5FBD\u7701",
    35e4: "\u798F\u5EFA\u7701",
    36e4: "\u6C5F\u897F\u7701",
    37e4: "\u5C71\u4E1C\u7701",
    41e4: "\u6CB3\u5357\u7701",
    42e4: "\u6E56\u5317\u7701",
    43e4: "\u6E56\u5357\u7701",
    44e4: "\u5E7F\u4E1C\u7701",
    45e4: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
    46e4: "\u6D77\u5357\u7701",
    5e5: "\u91CD\u5E86\u5E02",
    51e4: "\u56DB\u5DDD\u7701",
    52e4: "\u8D35\u5DDE\u7701",
    53e4: "\u4E91\u5357\u7701",
    54e4: "\u897F\u85CF\u81EA\u6CBB\u533A",
    61e4: "\u9655\u897F\u7701",
    62e4: "\u7518\u8083\u7701",
    63e4: "\u9752\u6D77\u7701",
    64e4: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
    65e4: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
    71e4: "\u53F0\u6E7E\u7701",
    81e4: "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",
    82e4: "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A"
  },
  11e4: {
    110100: "\u5E02\u8F96\u533A"
  },
  110100: {
    110101: "\u4E1C\u57CE\u533A",
    110102: "\u897F\u57CE\u533A",
    110105: "\u671D\u9633\u533A",
    110106: "\u4E30\u53F0\u533A",
    110107: "\u77F3\u666F\u5C71\u533A",
    110108: "\u6D77\u6DC0\u533A",
    110109: "\u95E8\u5934\u6C9F\u533A",
    110111: "\u623F\u5C71\u533A",
    110112: "\u901A\u5DDE\u533A",
    110113: "\u987A\u4E49\u533A",
    110114: "\u660C\u5E73\u533A",
    110115: "\u5927\u5174\u533A",
    110116: "\u6000\u67D4\u533A",
    110117: "\u5E73\u8C37\u533A",
    110118: "\u5BC6\u4E91\u533A",
    110119: "\u5EF6\u5E86\u533A"
  },
  12e4: {
    120100: "\u5E02\u8F96\u533A"
  },
  120100: {
    120101: "\u548C\u5E73\u533A",
    120102: "\u6CB3\u4E1C\u533A",
    120103: "\u6CB3\u897F\u533A",
    120104: "\u5357\u5F00\u533A",
    120105: "\u6CB3\u5317\u533A",
    120106: "\u7EA2\u6865\u533A",
    120110: "\u4E1C\u4E3D\u533A",
    120111: "\u897F\u9752\u533A",
    120112: "\u6D25\u5357\u533A",
    120113: "\u5317\u8FB0\u533A",
    120114: "\u6B66\u6E05\u533A",
    120115: "\u5B9D\u577B\u533A",
    120116: "\u6EE8\u6D77\u65B0\u533A",
    120117: "\u5B81\u6CB3\u533A",
    120118: "\u9759\u6D77\u533A",
    120119: "\u84DF\u5DDE\u533A"
  },
  13e4: {
    130100: "\u77F3\u5BB6\u5E84\u5E02",
    130200: "\u5510\u5C71\u5E02",
    130300: "\u79E6\u7687\u5C9B\u5E02",
    130400: "\u90AF\u90F8\u5E02",
    130500: "\u90A2\u53F0\u5E02",
    130600: "\u4FDD\u5B9A\u5E02",
    130700: "\u5F20\u5BB6\u53E3\u5E02",
    130800: "\u627F\u5FB7\u5E02",
    130900: "\u6CA7\u5DDE\u5E02",
    131e3: "\u5ECA\u574A\u5E02",
    131100: "\u8861\u6C34\u5E02"
  },
  130100: {
    130101: "\u5E02\u8F96\u533A",
    130102: "\u957F\u5B89\u533A",
    130104: "\u6865\u897F\u533A",
    130105: "\u65B0\u534E\u533A",
    130107: "\u4E95\u9649\u77FF\u533A",
    130108: "\u88D5\u534E\u533A",
    130109: "\u85C1\u57CE\u533A",
    130110: "\u9E7F\u6CC9\u533A",
    130111: "\u683E\u57CE\u533A",
    130121: "\u4E95\u9649\u53BF",
    130123: "\u6B63\u5B9A\u53BF",
    130125: "\u884C\u5510\u53BF",
    130126: "\u7075\u5BFF\u53BF",
    130127: "\u9AD8\u9091\u53BF",
    130128: "\u6DF1\u6CFD\u53BF",
    130129: "\u8D5E\u7687\u53BF",
    130130: "\u65E0\u6781\u53BF",
    130131: "\u5E73\u5C71\u53BF",
    130132: "\u5143\u6C0F\u53BF",
    130133: "\u8D75\u53BF",
    130171: "\u77F3\u5BB6\u5E84\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    130172: "\u77F3\u5BB6\u5E84\u5FAA\u73AF\u5316\u5DE5\u56ED\u533A",
    130181: "\u8F9B\u96C6\u5E02",
    130183: "\u664B\u5DDE\u5E02",
    130184: "\u65B0\u4E50\u5E02"
  },
  130200: {
    130201: "\u5E02\u8F96\u533A",
    130202: "\u8DEF\u5357\u533A",
    130203: "\u8DEF\u5317\u533A",
    130204: "\u53E4\u51B6\u533A",
    130205: "\u5F00\u5E73\u533A",
    130207: "\u4E30\u5357\u533A",
    130208: "\u4E30\u6DA6\u533A",
    130209: "\u66F9\u5983\u7538\u533A",
    130224: "\u6EE6\u5357\u53BF",
    130225: "\u4E50\u4EAD\u53BF",
    130227: "\u8FC1\u897F\u53BF",
    130229: "\u7389\u7530\u53BF",
    130271: "\u6CB3\u5317\u5510\u5C71\u82A6\u53F0\u7ECF\u6D4E\u5F00\u53D1\u533A",
    130272: "\u5510\u5C71\u5E02\u6C49\u6CBD\u7BA1\u7406\u533A",
    130273: "\u5510\u5C71\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    130274: "\u6CB3\u5317\u5510\u5C71\u6D77\u6E2F\u7ECF\u6D4E\u5F00\u53D1\u533A",
    130281: "\u9075\u5316\u5E02",
    130283: "\u8FC1\u5B89\u5E02",
    130284: "\u6EE6\u5DDE\u5E02"
  },
  130300: {
    130301: "\u5E02\u8F96\u533A",
    130302: "\u6D77\u6E2F\u533A",
    130303: "\u5C71\u6D77\u5173\u533A",
    130304: "\u5317\u6234\u6CB3\u533A",
    130306: "\u629A\u5B81\u533A",
    130321: "\u9752\u9F99\u6EE1\u65CF\u81EA\u6CBB\u53BF",
    130322: "\u660C\u9ECE\u53BF",
    130324: "\u5362\u9F99\u53BF",
    130371: "\u79E6\u7687\u5C9B\u5E02\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    130372: "\u5317\u6234\u6CB3\u65B0\u533A"
  },
  130400: {
    130401: "\u5E02\u8F96\u533A",
    130402: "\u90AF\u5C71\u533A",
    130403: "\u4E1B\u53F0\u533A",
    130404: "\u590D\u5174\u533A",
    130406: "\u5CF0\u5CF0\u77FF\u533A",
    130407: "\u80A5\u4E61\u533A",
    130408: "\u6C38\u5E74\u533A",
    130423: "\u4E34\u6F33\u53BF",
    130424: "\u6210\u5B89\u53BF",
    130425: "\u5927\u540D\u53BF",
    130426: "\u6D89\u53BF",
    130427: "\u78C1\u53BF",
    130430: "\u90B1\u53BF",
    130431: "\u9E21\u6CFD\u53BF",
    130432: "\u5E7F\u5E73\u53BF",
    130433: "\u9986\u9676\u53BF",
    130434: "\u9B4F\u53BF",
    130435: "\u66F2\u5468\u53BF",
    130471: "\u90AF\u90F8\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    130473: "\u90AF\u90F8\u5180\u5357\u65B0\u533A",
    130481: "\u6B66\u5B89\u5E02"
  },
  130500: {
    130501: "\u5E02\u8F96\u533A",
    130502: "\u6865\u4E1C\u533A",
    130503: "\u6865\u897F\u533A",
    130521: "\u90A2\u53F0\u53BF",
    130522: "\u4E34\u57CE\u53BF",
    130523: "\u5185\u4E18\u53BF",
    130524: "\u67CF\u4E61\u53BF",
    130525: "\u9686\u5C27\u53BF",
    130526: "\u4EFB\u53BF",
    130527: "\u5357\u548C\u53BF",
    130528: "\u5B81\u664B\u53BF",
    130529: "\u5DE8\u9E7F\u53BF",
    130530: "\u65B0\u6CB3\u53BF",
    130531: "\u5E7F\u5B97\u53BF",
    130532: "\u5E73\u4E61\u53BF",
    130533: "\u5A01\u53BF",
    130534: "\u6E05\u6CB3\u53BF",
    130535: "\u4E34\u897F\u53BF",
    130571: "\u6CB3\u5317\u90A2\u53F0\u7ECF\u6D4E\u5F00\u53D1\u533A",
    130581: "\u5357\u5BAB\u5E02",
    130582: "\u6C99\u6CB3\u5E02"
  },
  130600: {
    130601: "\u5E02\u8F96\u533A",
    130602: "\u7ADE\u79C0\u533A",
    130606: "\u83B2\u6C60\u533A",
    130607: "\u6EE1\u57CE\u533A",
    130608: "\u6E05\u82D1\u533A",
    130609: "\u5F90\u6C34\u533A",
    130623: "\u6D9E\u6C34\u53BF",
    130624: "\u961C\u5E73\u53BF",
    130626: "\u5B9A\u5174\u53BF",
    130627: "\u5510\u53BF",
    130628: "\u9AD8\u9633\u53BF",
    130629: "\u5BB9\u57CE\u53BF",
    130630: "\u6D9E\u6E90\u53BF",
    130631: "\u671B\u90FD\u53BF",
    130632: "\u5B89\u65B0\u53BF",
    130633: "\u6613\u53BF",
    130634: "\u66F2\u9633\u53BF",
    130635: "\u8821\u53BF",
    130636: "\u987A\u5E73\u53BF",
    130637: "\u535A\u91CE\u53BF",
    130638: "\u96C4\u53BF",
    130671: "\u4FDD\u5B9A\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    130672: "\u4FDD\u5B9A\u767D\u6C9F\u65B0\u57CE",
    130681: "\u6DBF\u5DDE\u5E02",
    130682: "\u5B9A\u5DDE\u5E02",
    130683: "\u5B89\u56FD\u5E02",
    130684: "\u9AD8\u7891\u5E97\u5E02"
  },
  130700: {
    130701: "\u5E02\u8F96\u533A",
    130702: "\u6865\u4E1C\u533A",
    130703: "\u6865\u897F\u533A",
    130705: "\u5BA3\u5316\u533A",
    130706: "\u4E0B\u82B1\u56ED\u533A",
    130708: "\u4E07\u5168\u533A",
    130709: "\u5D07\u793C\u533A",
    130722: "\u5F20\u5317\u53BF",
    130723: "\u5EB7\u4FDD\u53BF",
    130724: "\u6CBD\u6E90\u53BF",
    130725: "\u5C1A\u4E49\u53BF",
    130726: "\u851A\u53BF",
    130727: "\u9633\u539F\u53BF",
    130728: "\u6000\u5B89\u53BF",
    130730: "\u6000\u6765\u53BF",
    130731: "\u6DBF\u9E7F\u53BF",
    130732: "\u8D64\u57CE\u53BF",
    130771: "\u5F20\u5BB6\u53E3\u7ECF\u6D4E\u5F00\u53D1\u533A",
    130772: "\u5F20\u5BB6\u53E3\u5E02\u5BDF\u5317\u7BA1\u7406\u533A",
    130773: "\u5F20\u5BB6\u53E3\u5E02\u585E\u5317\u7BA1\u7406\u533A"
  },
  130800: {
    130801: "\u5E02\u8F96\u533A",
    130802: "\u53CC\u6865\u533A",
    130803: "\u53CC\u6EE6\u533A",
    130804: "\u9E70\u624B\u8425\u5B50\u77FF\u533A",
    130821: "\u627F\u5FB7\u53BF",
    130822: "\u5174\u9686\u53BF",
    130824: "\u6EE6\u5E73\u53BF",
    130825: "\u9686\u5316\u53BF",
    130826: "\u4E30\u5B81\u6EE1\u65CF\u81EA\u6CBB\u53BF",
    130827: "\u5BBD\u57CE\u6EE1\u65CF\u81EA\u6CBB\u53BF",
    130828: "\u56F4\u573A\u6EE1\u65CF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
    130871: "\u627F\u5FB7\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    130881: "\u5E73\u6CC9\u5E02"
  },
  130900: {
    130901: "\u5E02\u8F96\u533A",
    130902: "\u65B0\u534E\u533A",
    130903: "\u8FD0\u6CB3\u533A",
    130921: "\u6CA7\u53BF",
    130922: "\u9752\u53BF",
    130923: "\u4E1C\u5149\u53BF",
    130924: "\u6D77\u5174\u53BF",
    130925: "\u76D0\u5C71\u53BF",
    130926: "\u8083\u5B81\u53BF",
    130927: "\u5357\u76AE\u53BF",
    130928: "\u5434\u6865\u53BF",
    130929: "\u732E\u53BF",
    130930: "\u5B5F\u6751\u56DE\u65CF\u81EA\u6CBB\u53BF",
    130971: "\u6CB3\u5317\u6CA7\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A",
    130972: "\u6CA7\u5DDE\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    130973: "\u6CA7\u5DDE\u6E24\u6D77\u65B0\u533A",
    130981: "\u6CCA\u5934\u5E02",
    130982: "\u4EFB\u4E18\u5E02",
    130983: "\u9EC4\u9A85\u5E02",
    130984: "\u6CB3\u95F4\u5E02"
  },
  131e3: {
    131001: "\u5E02\u8F96\u533A",
    131002: "\u5B89\u6B21\u533A",
    131003: "\u5E7F\u9633\u533A",
    131022: "\u56FA\u5B89\u53BF",
    131023: "\u6C38\u6E05\u53BF",
    131024: "\u9999\u6CB3\u53BF",
    131025: "\u5927\u57CE\u53BF",
    131026: "\u6587\u5B89\u53BF",
    131028: "\u5927\u5382\u56DE\u65CF\u81EA\u6CBB\u53BF",
    131071: "\u5ECA\u574A\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    131081: "\u9738\u5DDE\u5E02",
    131082: "\u4E09\u6CB3\u5E02"
  },
  131100: {
    131101: "\u5E02\u8F96\u533A",
    131102: "\u6843\u57CE\u533A",
    131103: "\u5180\u5DDE\u533A",
    131121: "\u67A3\u5F3A\u53BF",
    131122: "\u6B66\u9091\u53BF",
    131123: "\u6B66\u5F3A\u53BF",
    131124: "\u9976\u9633\u53BF",
    131125: "\u5B89\u5E73\u53BF",
    131126: "\u6545\u57CE\u53BF",
    131127: "\u666F\u53BF",
    131128: "\u961C\u57CE\u53BF",
    131171: "\u6CB3\u5317\u8861\u6C34\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    131172: "\u8861\u6C34\u6EE8\u6E56\u65B0\u533A",
    131182: "\u6DF1\u5DDE\u5E02"
  },
  14e4: {
    140100: "\u592A\u539F\u5E02",
    140200: "\u5927\u540C\u5E02",
    140300: "\u9633\u6CC9\u5E02",
    140400: "\u957F\u6CBB\u5E02",
    140500: "\u664B\u57CE\u5E02",
    140600: "\u6714\u5DDE\u5E02",
    140700: "\u664B\u4E2D\u5E02",
    140800: "\u8FD0\u57CE\u5E02",
    140900: "\u5FFB\u5DDE\u5E02",
    141e3: "\u4E34\u6C7E\u5E02",
    141100: "\u5415\u6881\u5E02"
  },
  140100: {
    140101: "\u5E02\u8F96\u533A",
    140105: "\u5C0F\u5E97\u533A",
    140106: "\u8FCE\u6CFD\u533A",
    140107: "\u674F\u82B1\u5CAD\u533A",
    140108: "\u5C16\u8349\u576A\u533A",
    140109: "\u4E07\u67CF\u6797\u533A",
    140110: "\u664B\u6E90\u533A",
    140121: "\u6E05\u5F90\u53BF",
    140122: "\u9633\u66F2\u53BF",
    140123: "\u5A04\u70E6\u53BF",
    140171: "\u5C71\u897F\u8F6C\u578B\u7EFC\u5408\u6539\u9769\u793A\u8303\u533A",
    140181: "\u53E4\u4EA4\u5E02"
  },
  140200: {
    140201: "\u5E02\u8F96\u533A",
    140212: "\u65B0\u8363\u533A",
    140213: "\u5E73\u57CE\u533A",
    140214: "\u4E91\u5188\u533A",
    140215: "\u4E91\u5DDE\u533A",
    140221: "\u9633\u9AD8\u53BF",
    140222: "\u5929\u9547\u53BF",
    140223: "\u5E7F\u7075\u53BF",
    140224: "\u7075\u4E18\u53BF",
    140225: "\u6D51\u6E90\u53BF",
    140226: "\u5DE6\u4E91\u53BF",
    140271: "\u5C71\u897F\u5927\u540C\u7ECF\u6D4E\u5F00\u53D1\u533A"
  },
  140300: {
    140301: "\u5E02\u8F96\u533A",
    140302: "\u57CE\u533A",
    140303: "\u77FF\u533A",
    140311: "\u90CA\u533A",
    140321: "\u5E73\u5B9A\u53BF",
    140322: "\u76C2\u53BF"
  },
  140400: {
    140401: "\u5E02\u8F96\u533A",
    140403: "\u6F5E\u5DDE\u533A",
    140404: "\u4E0A\u515A\u533A",
    140405: "\u5C6F\u7559\u533A",
    140406: "\u6F5E\u57CE\u533A",
    140423: "\u8944\u57A3\u53BF",
    140425: "\u5E73\u987A\u53BF",
    140426: "\u9ECE\u57CE\u53BF",
    140427: "\u58F6\u5173\u53BF",
    140428: "\u957F\u5B50\u53BF",
    140429: "\u6B66\u4E61\u53BF",
    140430: "\u6C81\u53BF",
    140431: "\u6C81\u6E90\u53BF",
    140471: "\u5C71\u897F\u957F\u6CBB\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
  },
  140500: {
    140501: "\u5E02\u8F96\u533A",
    140502: "\u57CE\u533A",
    140521: "\u6C81\u6C34\u53BF",
    140522: "\u9633\u57CE\u53BF",
    140524: "\u9675\u5DDD\u53BF",
    140525: "\u6CFD\u5DDE\u53BF",
    140581: "\u9AD8\u5E73\u5E02"
  },
  140600: {
    140601: "\u5E02\u8F96\u533A",
    140602: "\u6714\u57CE\u533A",
    140603: "\u5E73\u9C81\u533A",
    140621: "\u5C71\u9634\u53BF",
    140622: "\u5E94\u53BF",
    140623: "\u53F3\u7389\u53BF",
    140671: "\u5C71\u897F\u6714\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A",
    140681: "\u6000\u4EC1\u5E02"
  },
  140700: {
    140701: "\u5E02\u8F96\u533A",
    140702: "\u6986\u6B21\u533A",
    140721: "\u6986\u793E\u53BF",
    140722: "\u5DE6\u6743\u53BF",
    140723: "\u548C\u987A\u53BF",
    140724: "\u6614\u9633\u53BF",
    140725: "\u5BFF\u9633\u53BF",
    140726: "\u592A\u8C37\u53BF",
    140727: "\u7941\u53BF",
    140728: "\u5E73\u9065\u53BF",
    140729: "\u7075\u77F3\u53BF",
    140781: "\u4ECB\u4F11\u5E02"
  },
  140800: {
    140801: "\u5E02\u8F96\u533A",
    140802: "\u76D0\u6E56\u533A",
    140821: "\u4E34\u7317\u53BF",
    140822: "\u4E07\u8363\u53BF",
    140823: "\u95FB\u559C\u53BF",
    140824: "\u7A37\u5C71\u53BF",
    140825: "\u65B0\u7EDB\u53BF",
    140826: "\u7EDB\u53BF",
    140827: "\u57A3\u66F2\u53BF",
    140828: "\u590F\u53BF",
    140829: "\u5E73\u9646\u53BF",
    140830: "\u82AE\u57CE\u53BF",
    140881: "\u6C38\u6D4E\u5E02",
    140882: "\u6CB3\u6D25\u5E02"
  },
  140900: {
    140901: "\u5E02\u8F96\u533A",
    140902: "\u5FFB\u5E9C\u533A",
    140921: "\u5B9A\u8944\u53BF",
    140922: "\u4E94\u53F0\u53BF",
    140923: "\u4EE3\u53BF",
    140924: "\u7E41\u5CD9\u53BF",
    140925: "\u5B81\u6B66\u53BF",
    140926: "\u9759\u4E50\u53BF",
    140927: "\u795E\u6C60\u53BF",
    140928: "\u4E94\u5BE8\u53BF",
    140929: "\u5CA2\u5C9A\u53BF",
    140930: "\u6CB3\u66F2\u53BF",
    140931: "\u4FDD\u5FB7\u53BF",
    140932: "\u504F\u5173\u53BF",
    140971: "\u4E94\u53F0\u5C71\u98CE\u666F\u540D\u80DC\u533A",
    140981: "\u539F\u5E73\u5E02"
  },
  141e3: {
    141001: "\u5E02\u8F96\u533A",
    141002: "\u5C27\u90FD\u533A",
    141021: "\u66F2\u6C83\u53BF",
    141022: "\u7FFC\u57CE\u53BF",
    141023: "\u8944\u6C7E\u53BF",
    141024: "\u6D2A\u6D1E\u53BF",
    141025: "\u53E4\u53BF",
    141026: "\u5B89\u6CFD\u53BF",
    141027: "\u6D6E\u5C71\u53BF",
    141028: "\u5409\u53BF",
    141029: "\u4E61\u5B81\u53BF",
    141030: "\u5927\u5B81\u53BF",
    141031: "\u96B0\u53BF",
    141032: "\u6C38\u548C\u53BF",
    141033: "\u84B2\u53BF",
    141034: "\u6C7E\u897F\u53BF",
    141081: "\u4FAF\u9A6C\u5E02",
    141082: "\u970D\u5DDE\u5E02"
  },
  141100: {
    141101: "\u5E02\u8F96\u533A",
    141102: "\u79BB\u77F3\u533A",
    141121: "\u6587\u6C34\u53BF",
    141122: "\u4EA4\u57CE\u53BF",
    141123: "\u5174\u53BF",
    141124: "\u4E34\u53BF",
    141125: "\u67F3\u6797\u53BF",
    141126: "\u77F3\u697C\u53BF",
    141127: "\u5C9A\u53BF",
    141128: "\u65B9\u5C71\u53BF",
    141129: "\u4E2D\u9633\u53BF",
    141130: "\u4EA4\u53E3\u53BF",
    141181: "\u5B5D\u4E49\u5E02",
    141182: "\u6C7E\u9633\u5E02"
  },
  15e4: {
    150100: "\u547C\u548C\u6D69\u7279\u5E02",
    150200: "\u5305\u5934\u5E02",
    150300: "\u4E4C\u6D77\u5E02",
    150400: "\u8D64\u5CF0\u5E02",
    150500: "\u901A\u8FBD\u5E02",
    150600: "\u9102\u5C14\u591A\u65AF\u5E02",
    150700: "\u547C\u4F26\u8D1D\u5C14\u5E02",
    150800: "\u5DF4\u5F66\u6DD6\u5C14\u5E02",
    150900: "\u4E4C\u5170\u5BDF\u5E03\u5E02",
    152200: "\u5174\u5B89\u76DF",
    152500: "\u9521\u6797\u90ED\u52D2\u76DF",
    152900: "\u963F\u62C9\u5584\u76DF"
  },
  150100: {
    150101: "\u5E02\u8F96\u533A",
    150102: "\u65B0\u57CE\u533A",
    150103: "\u56DE\u6C11\u533A",
    150104: "\u7389\u6CC9\u533A",
    150105: "\u8D5B\u7F55\u533A",
    150121: "\u571F\u9ED8\u7279\u5DE6\u65D7",
    150122: "\u6258\u514B\u6258\u53BF",
    150123: "\u548C\u6797\u683C\u5C14\u53BF",
    150124: "\u6E05\u6C34\u6CB3\u53BF",
    150125: "\u6B66\u5DDD\u53BF",
    150171: "\u547C\u548C\u6D69\u7279\u91D1\u6D77\u5DE5\u4E1A\u56ED\u533A",
    150172: "\u547C\u548C\u6D69\u7279\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
  },
  150200: {
    150201: "\u5E02\u8F96\u533A",
    150202: "\u4E1C\u6CB3\u533A",
    150203: "\u6606\u90FD\u4ED1\u533A",
    150204: "\u9752\u5C71\u533A",
    150205: "\u77F3\u62D0\u533A",
    150206: "\u767D\u4E91\u9102\u535A\u77FF\u533A",
    150207: "\u4E5D\u539F\u533A",
    150221: "\u571F\u9ED8\u7279\u53F3\u65D7",
    150222: "\u56FA\u9633\u53BF",
    150223: "\u8FBE\u5C14\u7F55\u8302\u660E\u5B89\u8054\u5408\u65D7",
    150271: "\u5305\u5934\u7A00\u571F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
  },
  150300: {
    150301: "\u5E02\u8F96\u533A",
    150302: "\u6D77\u52C3\u6E7E\u533A",
    150303: "\u6D77\u5357\u533A",
    150304: "\u4E4C\u8FBE\u533A"
  },
  150400: {
    150401: "\u5E02\u8F96\u533A",
    150402: "\u7EA2\u5C71\u533A",
    150403: "\u5143\u5B9D\u5C71\u533A",
    150404: "\u677E\u5C71\u533A",
    150421: "\u963F\u9C81\u79D1\u5C14\u6C81\u65D7",
    150422: "\u5DF4\u6797\u5DE6\u65D7",
    150423: "\u5DF4\u6797\u53F3\u65D7",
    150424: "\u6797\u897F\u53BF",
    150425: "\u514B\u4EC0\u514B\u817E\u65D7",
    150426: "\u7FC1\u725B\u7279\u65D7",
    150428: "\u5580\u5587\u6C81\u65D7",
    150429: "\u5B81\u57CE\u53BF",
    150430: "\u6556\u6C49\u65D7"
  },
  150500: {
    150501: "\u5E02\u8F96\u533A",
    150502: "\u79D1\u5C14\u6C81\u533A",
    150521: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u4E2D\u65D7",
    150522: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u540E\u65D7",
    150523: "\u5F00\u9C81\u53BF",
    150524: "\u5E93\u4F26\u65D7",
    150525: "\u5948\u66FC\u65D7",
    150526: "\u624E\u9C81\u7279\u65D7",
    150571: "\u901A\u8FBD\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    150581: "\u970D\u6797\u90ED\u52D2\u5E02"
  },
  150600: {
    150601: "\u5E02\u8F96\u533A",
    150602: "\u4E1C\u80DC\u533A",
    150603: "\u5EB7\u5DF4\u4EC0\u533A",
    150621: "\u8FBE\u62C9\u7279\u65D7",
    150622: "\u51C6\u683C\u5C14\u65D7",
    150623: "\u9102\u6258\u514B\u524D\u65D7",
    150624: "\u9102\u6258\u514B\u65D7",
    150625: "\u676D\u9526\u65D7",
    150626: "\u4E4C\u5BA1\u65D7",
    150627: "\u4F0A\u91D1\u970D\u6D1B\u65D7"
  },
  150700: {
    150701: "\u5E02\u8F96\u533A",
    150702: "\u6D77\u62C9\u5C14\u533A",
    150703: "\u624E\u8D49\u8BFA\u5C14\u533A",
    150721: "\u963F\u8363\u65D7",
    150722: "\u83AB\u529B\u8FBE\u74E6\u8FBE\u65A1\u5C14\u65CF\u81EA\u6CBB\u65D7",
    150723: "\u9102\u4F26\u6625\u81EA\u6CBB\u65D7",
    150724: "\u9102\u6E29\u514B\u65CF\u81EA\u6CBB\u65D7",
    150725: "\u9648\u5DF4\u5C14\u864E\u65D7",
    150726: "\u65B0\u5DF4\u5C14\u864E\u5DE6\u65D7",
    150727: "\u65B0\u5DF4\u5C14\u864E\u53F3\u65D7",
    150781: "\u6EE1\u6D32\u91CC\u5E02",
    150782: "\u7259\u514B\u77F3\u5E02",
    150783: "\u624E\u5170\u5C6F\u5E02",
    150784: "\u989D\u5C14\u53E4\u7EB3\u5E02",
    150785: "\u6839\u6CB3\u5E02"
  },
  150800: {
    150801: "\u5E02\u8F96\u533A",
    150802: "\u4E34\u6CB3\u533A",
    150821: "\u4E94\u539F\u53BF",
    150822: "\u78F4\u53E3\u53BF",
    150823: "\u4E4C\u62C9\u7279\u524D\u65D7",
    150824: "\u4E4C\u62C9\u7279\u4E2D\u65D7",
    150825: "\u4E4C\u62C9\u7279\u540E\u65D7",
    150826: "\u676D\u9526\u540E\u65D7"
  },
  150900: {
    150901: "\u5E02\u8F96\u533A",
    150902: "\u96C6\u5B81\u533A",
    150921: "\u5353\u8D44\u53BF",
    150922: "\u5316\u5FB7\u53BF",
    150923: "\u5546\u90FD\u53BF",
    150924: "\u5174\u548C\u53BF",
    150925: "\u51C9\u57CE\u53BF",
    150926: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u524D\u65D7",
    150927: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u4E2D\u65D7",
    150928: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u540E\u65D7",
    150929: "\u56DB\u5B50\u738B\u65D7",
    150981: "\u4E30\u9547\u5E02"
  },
  152200: {
    152201: "\u4E4C\u5170\u6D69\u7279\u5E02",
    152202: "\u963F\u5C14\u5C71\u5E02",
    152221: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u524D\u65D7",
    152222: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u4E2D\u65D7",
    152223: "\u624E\u8D49\u7279\u65D7",
    152224: "\u7A81\u6CC9\u53BF"
  },
  152500: {
    152501: "\u4E8C\u8FDE\u6D69\u7279\u5E02",
    152502: "\u9521\u6797\u6D69\u7279\u5E02",
    152522: "\u963F\u5DF4\u560E\u65D7",
    152523: "\u82CF\u5C3C\u7279\u5DE6\u65D7",
    152524: "\u82CF\u5C3C\u7279\u53F3\u65D7",
    152525: "\u4E1C\u4E4C\u73E0\u7A46\u6C81\u65D7",
    152526: "\u897F\u4E4C\u73E0\u7A46\u6C81\u65D7",
    152527: "\u592A\u4EC6\u5BFA\u65D7",
    152528: "\u9576\u9EC4\u65D7",
    152529: "\u6B63\u9576\u767D\u65D7",
    152530: "\u6B63\u84DD\u65D7",
    152531: "\u591A\u4F26\u53BF",
    152571: "\u4E4C\u62C9\u76D6\u7BA1\u59D4\u4F1A"
  },
  152900: {
    152921: "\u963F\u62C9\u5584\u5DE6\u65D7",
    152922: "\u963F\u62C9\u5584\u53F3\u65D7",
    152923: "\u989D\u6D4E\u7EB3\u65D7",
    152971: "\u5185\u8499\u53E4\u963F\u62C9\u5584\u7ECF\u6D4E\u5F00\u53D1\u533A"
  },
  21e4: {
    210100: "\u6C88\u9633\u5E02",
    210200: "\u5927\u8FDE\u5E02",
    210300: "\u978D\u5C71\u5E02",
    210400: "\u629A\u987A\u5E02",
    210500: "\u672C\u6EAA\u5E02",
    210600: "\u4E39\u4E1C\u5E02",
    210700: "\u9526\u5DDE\u5E02",
    210800: "\u8425\u53E3\u5E02",
    210900: "\u961C\u65B0\u5E02",
    211e3: "\u8FBD\u9633\u5E02",
    211100: "\u76D8\u9526\u5E02",
    211200: "\u94C1\u5CAD\u5E02",
    211300: "\u671D\u9633\u5E02",
    211400: "\u846B\u82A6\u5C9B\u5E02"
  },
  210100: {
    210101: "\u5E02\u8F96\u533A",
    210102: "\u548C\u5E73\u533A",
    210103: "\u6C88\u6CB3\u533A",
    210104: "\u5927\u4E1C\u533A",
    210105: "\u7687\u59D1\u533A",
    210106: "\u94C1\u897F\u533A",
    210111: "\u82CF\u5BB6\u5C6F\u533A",
    210112: "\u6D51\u5357\u533A",
    210113: "\u6C88\u5317\u65B0\u533A",
    210114: "\u4E8E\u6D2A\u533A",
    210115: "\u8FBD\u4E2D\u533A",
    210123: "\u5EB7\u5E73\u53BF",
    210124: "\u6CD5\u5E93\u53BF",
    210181: "\u65B0\u6C11\u5E02"
  },
  210200: {
    210201: "\u5E02\u8F96\u533A",
    210202: "\u4E2D\u5C71\u533A",
    210203: "\u897F\u5C97\u533A",
    210204: "\u6C99\u6CB3\u53E3\u533A",
    210211: "\u7518\u4E95\u5B50\u533A",
    210212: "\u65C5\u987A\u53E3\u533A",
    210213: "\u91D1\u5DDE\u533A",
    210214: "\u666E\u5170\u5E97\u533A",
    210224: "\u957F\u6D77\u53BF",
    210281: "\u74E6\u623F\u5E97\u5E02",
    210283: "\u5E84\u6CB3\u5E02"
  },
  210300: {
    210301: "\u5E02\u8F96\u533A",
    210302: "\u94C1\u4E1C\u533A",
    210303: "\u94C1\u897F\u533A",
    210304: "\u7ACB\u5C71\u533A",
    210311: "\u5343\u5C71\u533A",
    210321: "\u53F0\u5B89\u53BF",
    210323: "\u5CAB\u5CA9\u6EE1\u65CF\u81EA\u6CBB\u53BF",
    210381: "\u6D77\u57CE\u5E02"
  },
  210400: {
    210401: "\u5E02\u8F96\u533A",
    210402: "\u65B0\u629A\u533A",
    210403: "\u4E1C\u6D32\u533A",
    210404: "\u671B\u82B1\u533A",
    210411: "\u987A\u57CE\u533A",
    210421: "\u629A\u987A\u53BF",
    210422: "\u65B0\u5BBE\u6EE1\u65CF\u81EA\u6CBB\u53BF",
    210423: "\u6E05\u539F\u6EE1\u65CF\u81EA\u6CBB\u53BF"
  },
  210500: {
    210501: "\u5E02\u8F96\u533A",
    210502: "\u5E73\u5C71\u533A",
    210503: "\u6EAA\u6E56\u533A",
    210504: "\u660E\u5C71\u533A",
    210505: "\u5357\u82AC\u533A",
    210521: "\u672C\u6EAA\u6EE1\u65CF\u81EA\u6CBB\u53BF",
    210522: "\u6853\u4EC1\u6EE1\u65CF\u81EA\u6CBB\u53BF"
  },
  210600: {
    210601: "\u5E02\u8F96\u533A",
    210602: "\u5143\u5B9D\u533A",
    210603: "\u632F\u5174\u533A",
    210604: "\u632F\u5B89\u533A",
    210624: "\u5BBD\u7538\u6EE1\u65CF\u81EA\u6CBB\u53BF",
    210681: "\u4E1C\u6E2F\u5E02",
    210682: "\u51E4\u57CE\u5E02"
  },
  210700: {
    210701: "\u5E02\u8F96\u533A",
    210702: "\u53E4\u5854\u533A",
    210703: "\u51CC\u6CB3\u533A",
    210711: "\u592A\u548C\u533A",
    210726: "\u9ED1\u5C71\u53BF",
    210727: "\u4E49\u53BF",
    210781: "\u51CC\u6D77\u5E02",
    210782: "\u5317\u9547\u5E02"
  },
  210800: {
    210801: "\u5E02\u8F96\u533A",
    210802: "\u7AD9\u524D\u533A",
    210803: "\u897F\u5E02\u533A",
    210804: "\u9C85\u9C7C\u5708\u533A",
    210811: "\u8001\u8FB9\u533A",
    210881: "\u76D6\u5DDE\u5E02",
    210882: "\u5927\u77F3\u6865\u5E02"
  },
  210900: {
    210901: "\u5E02\u8F96\u533A",
    210902: "\u6D77\u5DDE\u533A",
    210903: "\u65B0\u90B1\u533A",
    210904: "\u592A\u5E73\u533A",
    210905: "\u6E05\u6CB3\u95E8\u533A",
    210911: "\u7EC6\u6CB3\u533A",
    210921: "\u961C\u65B0\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
    210922: "\u5F70\u6B66\u53BF"
  },
  211e3: {
    211001: "\u5E02\u8F96\u533A",
    211002: "\u767D\u5854\u533A",
    211003: "\u6587\u5723\u533A",
    211004: "\u5B8F\u4F1F\u533A",
    211005: "\u5F13\u957F\u5CAD\u533A",
    211011: "\u592A\u5B50\u6CB3\u533A",
    211021: "\u8FBD\u9633\u53BF",
    211081: "\u706F\u5854\u5E02"
  },
  211100: {
    211101: "\u5E02\u8F96\u533A",
    211102: "\u53CC\u53F0\u5B50\u533A",
    211103: "\u5174\u9686\u53F0\u533A",
    211104: "\u5927\u6D3C\u533A",
    211122: "\u76D8\u5C71\u53BF"
  },
  211200: {
    211201: "\u5E02\u8F96\u533A",
    211202: "\u94F6\u5DDE\u533A",
    211204: "\u6E05\u6CB3\u533A",
    211221: "\u94C1\u5CAD\u53BF",
    211223: "\u897F\u4E30\u53BF",
    211224: "\u660C\u56FE\u53BF",
    211281: "\u8C03\u5175\u5C71\u5E02",
    211282: "\u5F00\u539F\u5E02"
  },
  211300: {
    211301: "\u5E02\u8F96\u533A",
    211302: "\u53CC\u5854\u533A",
    211303: "\u9F99\u57CE\u533A",
    211321: "\u671D\u9633\u53BF",
    211322: "\u5EFA\u5E73\u53BF",
    211324: "\u5580\u5587\u6C81\u5DE6\u7FFC\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
    211381: "\u5317\u7968\u5E02",
    211382: "\u51CC\u6E90\u5E02"
  },
  211400: {
    211401: "\u5E02\u8F96\u533A",
    211402: "\u8FDE\u5C71\u533A",
    211403: "\u9F99\u6E2F\u533A",
    211404: "\u5357\u7968\u533A",
    211421: "\u7EE5\u4E2D\u53BF",
    211422: "\u5EFA\u660C\u53BF",
    211481: "\u5174\u57CE\u5E02"
  },
  22e4: {
    220100: "\u957F\u6625\u5E02",
    220200: "\u5409\u6797\u5E02",
    220300: "\u56DB\u5E73\u5E02",
    220400: "\u8FBD\u6E90\u5E02",
    220500: "\u901A\u5316\u5E02",
    220600: "\u767D\u5C71\u5E02",
    220700: "\u677E\u539F\u5E02",
    220800: "\u767D\u57CE\u5E02",
    222400: "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE"
  },
  220100: {
    220101: "\u5E02\u8F96\u533A",
    220102: "\u5357\u5173\u533A",
    220103: "\u5BBD\u57CE\u533A",
    220104: "\u671D\u9633\u533A",
    220105: "\u4E8C\u9053\u533A",
    220106: "\u7EFF\u56ED\u533A",
    220112: "\u53CC\u9633\u533A",
    220113: "\u4E5D\u53F0\u533A",
    220122: "\u519C\u5B89\u53BF",
    220171: "\u957F\u6625\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    220172: "\u957F\u6625\u51C0\u6708\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    220173: "\u957F\u6625\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    220174: "\u957F\u6625\u6C7D\u8F66\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    220182: "\u6986\u6811\u5E02",
    220183: "\u5FB7\u60E0\u5E02"
  },
  220200: {
    220201: "\u5E02\u8F96\u533A",
    220202: "\u660C\u9091\u533A",
    220203: "\u9F99\u6F6D\u533A",
    220204: "\u8239\u8425\u533A",
    220211: "\u4E30\u6EE1\u533A",
    220221: "\u6C38\u5409\u53BF",
    220271: "\u5409\u6797\u7ECF\u6D4E\u5F00\u53D1\u533A",
    220272: "\u5409\u6797\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    220273: "\u5409\u6797\u4E2D\u56FD\u65B0\u52A0\u5761\u98DF\u54C1\u533A",
    220281: "\u86DF\u6CB3\u5E02",
    220282: "\u6866\u7538\u5E02",
    220283: "\u8212\u5170\u5E02",
    220284: "\u78D0\u77F3\u5E02"
  },
  220300: {
    220301: "\u5E02\u8F96\u533A",
    220302: "\u94C1\u897F\u533A",
    220303: "\u94C1\u4E1C\u533A",
    220322: "\u68A8\u6811\u53BF",
    220323: "\u4F0A\u901A\u6EE1\u65CF\u81EA\u6CBB\u53BF",
    220381: "\u516C\u4E3B\u5CAD\u5E02",
    220382: "\u53CC\u8FBD\u5E02"
  },
  220400: {
    220401: "\u5E02\u8F96\u533A",
    220402: "\u9F99\u5C71\u533A",
    220403: "\u897F\u5B89\u533A",
    220421: "\u4E1C\u4E30\u53BF",
    220422: "\u4E1C\u8FBD\u53BF"
  },
  220500: {
    220501: "\u5E02\u8F96\u533A",
    220502: "\u4E1C\u660C\u533A",
    220503: "\u4E8C\u9053\u6C5F\u533A",
    220521: "\u901A\u5316\u53BF",
    220523: "\u8F89\u5357\u53BF",
    220524: "\u67F3\u6CB3\u53BF",
    220581: "\u6885\u6CB3\u53E3\u5E02",
    220582: "\u96C6\u5B89\u5E02"
  },
  220600: {
    220601: "\u5E02\u8F96\u533A",
    220602: "\u6D51\u6C5F\u533A",
    220605: "\u6C5F\u6E90\u533A",
    220621: "\u629A\u677E\u53BF",
    220622: "\u9756\u5B87\u53BF",
    220623: "\u957F\u767D\u671D\u9C9C\u65CF\u81EA\u6CBB\u53BF",
    220681: "\u4E34\u6C5F\u5E02"
  },
  220700: {
    220701: "\u5E02\u8F96\u533A",
    220702: "\u5B81\u6C5F\u533A",
    220721: "\u524D\u90ED\u5C14\u7F57\u65AF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
    220722: "\u957F\u5CAD\u53BF",
    220723: "\u4E7E\u5B89\u53BF",
    220771: "\u5409\u6797\u677E\u539F\u7ECF\u6D4E\u5F00\u53D1\u533A",
    220781: "\u6276\u4F59\u5E02"
  },
  220800: {
    220801: "\u5E02\u8F96\u533A",
    220802: "\u6D2E\u5317\u533A",
    220821: "\u9547\u8D49\u53BF",
    220822: "\u901A\u6986\u53BF",
    220871: "\u5409\u6797\u767D\u57CE\u7ECF\u6D4E\u5F00\u53D1\u533A",
    220881: "\u6D2E\u5357\u5E02",
    220882: "\u5927\u5B89\u5E02"
  },
  222400: {
    222401: "\u5EF6\u5409\u5E02",
    222402: "\u56FE\u4EEC\u5E02",
    222403: "\u6566\u5316\u5E02",
    222404: "\u73F2\u6625\u5E02",
    222405: "\u9F99\u4E95\u5E02",
    222406: "\u548C\u9F99\u5E02",
    222424: "\u6C6A\u6E05\u53BF",
    222426: "\u5B89\u56FE\u53BF"
  },
  23e4: {
    230100: "\u54C8\u5C14\u6EE8\u5E02",
    230200: "\u9F50\u9F50\u54C8\u5C14\u5E02",
    230300: "\u9E21\u897F\u5E02",
    230400: "\u9E64\u5C97\u5E02",
    230500: "\u53CC\u9E2D\u5C71\u5E02",
    230600: "\u5927\u5E86\u5E02",
    230700: "\u4F0A\u6625\u5E02",
    230800: "\u4F73\u6728\u65AF\u5E02",
    230900: "\u4E03\u53F0\u6CB3\u5E02",
    231e3: "\u7261\u4E39\u6C5F\u5E02",
    231100: "\u9ED1\u6CB3\u5E02",
    231200: "\u7EE5\u5316\u5E02",
    232700: "\u5927\u5174\u5B89\u5CAD\u5730\u533A"
  },
  230100: {
    230101: "\u5E02\u8F96\u533A",
    230102: "\u9053\u91CC\u533A",
    230103: "\u5357\u5C97\u533A",
    230104: "\u9053\u5916\u533A",
    230108: "\u5E73\u623F\u533A",
    230109: "\u677E\u5317\u533A",
    230110: "\u9999\u574A\u533A",
    230111: "\u547C\u5170\u533A",
    230112: "\u963F\u57CE\u533A",
    230113: "\u53CC\u57CE\u533A",
    230123: "\u4F9D\u5170\u53BF",
    230124: "\u65B9\u6B63\u53BF",
    230125: "\u5BBE\u53BF",
    230126: "\u5DF4\u5F66\u53BF",
    230127: "\u6728\u5170\u53BF",
    230128: "\u901A\u6CB3\u53BF",
    230129: "\u5EF6\u5BFF\u53BF",
    230183: "\u5C1A\u5FD7\u5E02",
    230184: "\u4E94\u5E38\u5E02"
  },
  230200: {
    230201: "\u5E02\u8F96\u533A",
    230202: "\u9F99\u6C99\u533A",
    230203: "\u5EFA\u534E\u533A",
    230204: "\u94C1\u950B\u533A",
    230205: "\u6602\u6602\u6EAA\u533A",
    230206: "\u5BCC\u62C9\u5C14\u57FA\u533A",
    230207: "\u78BE\u5B50\u5C71\u533A",
    230208: "\u6885\u91CC\u65AF\u8FBE\u65A1\u5C14\u65CF\u533A",
    230221: "\u9F99\u6C5F\u53BF",
    230223: "\u4F9D\u5B89\u53BF",
    230224: "\u6CF0\u6765\u53BF",
    230225: "\u7518\u5357\u53BF",
    230227: "\u5BCC\u88D5\u53BF",
    230229: "\u514B\u5C71\u53BF",
    230230: "\u514B\u4E1C\u53BF",
    230231: "\u62DC\u6CC9\u53BF",
    230281: "\u8BB7\u6CB3\u5E02"
  },
  230300: {
    230301: "\u5E02\u8F96\u533A",
    230302: "\u9E21\u51A0\u533A",
    230303: "\u6052\u5C71\u533A",
    230304: "\u6EF4\u9053\u533A",
    230305: "\u68A8\u6811\u533A",
    230306: "\u57CE\u5B50\u6CB3\u533A",
    230307: "\u9EBB\u5C71\u533A",
    230321: "\u9E21\u4E1C\u53BF",
    230381: "\u864E\u6797\u5E02",
    230382: "\u5BC6\u5C71\u5E02"
  },
  230400: {
    230401: "\u5E02\u8F96\u533A",
    230402: "\u5411\u9633\u533A",
    230403: "\u5DE5\u519C\u533A",
    230404: "\u5357\u5C71\u533A",
    230405: "\u5174\u5B89\u533A",
    230406: "\u4E1C\u5C71\u533A",
    230407: "\u5174\u5C71\u533A",
    230421: "\u841D\u5317\u53BF",
    230422: "\u7EE5\u6EE8\u53BF"
  },
  230500: {
    230501: "\u5E02\u8F96\u533A",
    230502: "\u5C16\u5C71\u533A",
    230503: "\u5CAD\u4E1C\u533A",
    230505: "\u56DB\u65B9\u53F0\u533A",
    230506: "\u5B9D\u5C71\u533A",
    230521: "\u96C6\u8D24\u53BF",
    230522: "\u53CB\u8C0A\u53BF",
    230523: "\u5B9D\u6E05\u53BF",
    230524: "\u9976\u6CB3\u53BF"
  },
  230600: {
    230601: "\u5E02\u8F96\u533A",
    230602: "\u8428\u5C14\u56FE\u533A",
    230603: "\u9F99\u51E4\u533A",
    230604: "\u8BA9\u80E1\u8DEF\u533A",
    230605: "\u7EA2\u5C97\u533A",
    230606: "\u5927\u540C\u533A",
    230621: "\u8087\u5DDE\u53BF",
    230622: "\u8087\u6E90\u53BF",
    230623: "\u6797\u7538\u53BF",
    230624: "\u675C\u5C14\u4F2F\u7279\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
    230671: "\u5927\u5E86\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
  },
  230700: {
    230701: "\u5E02\u8F96\u533A",
    230717: "\u4F0A\u7F8E\u533A",
    230718: "\u4E4C\u7FE0\u533A",
    230719: "\u53CB\u597D\u533A",
    230722: "\u5609\u836B\u53BF",
    230723: "\u6C64\u65FA\u53BF",
    230724: "\u4E30\u6797\u53BF",
    230725: "\u5927\u7B90\u5C71\u53BF",
    230726: "\u5357\u5C94\u53BF",
    230751: "\u91D1\u6797\u533A",
    230781: "\u94C1\u529B\u5E02"
  },
  230800: {
    230801: "\u5E02\u8F96\u533A",
    230803: "\u5411\u9633\u533A",
    230804: "\u524D\u8FDB\u533A",
    230805: "\u4E1C\u98CE\u533A",
    230811: "\u90CA\u533A",
    230822: "\u6866\u5357\u53BF",
    230826: "\u6866\u5DDD\u53BF",
    230828: "\u6C64\u539F\u53BF",
    230881: "\u540C\u6C5F\u5E02",
    230882: "\u5BCC\u9526\u5E02",
    230883: "\u629A\u8FDC\u5E02"
  },
  230900: {
    230901: "\u5E02\u8F96\u533A",
    230902: "\u65B0\u5174\u533A",
    230903: "\u6843\u5C71\u533A",
    230904: "\u8304\u5B50\u6CB3\u533A",
    230921: "\u52C3\u5229\u53BF"
  },
  231e3: {
    231001: "\u5E02\u8F96\u533A",
    231002: "\u4E1C\u5B89\u533A",
    231003: "\u9633\u660E\u533A",
    231004: "\u7231\u6C11\u533A",
    231005: "\u897F\u5B89\u533A",
    231025: "\u6797\u53E3\u53BF",
    231071: "\u7261\u4E39\u6C5F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    231081: "\u7EE5\u82AC\u6CB3\u5E02",
    231083: "\u6D77\u6797\u5E02",
    231084: "\u5B81\u5B89\u5E02",
    231085: "\u7A46\u68F1\u5E02",
    231086: "\u4E1C\u5B81\u5E02"
  },
  231100: {
    231101: "\u5E02\u8F96\u533A",
    231102: "\u7231\u8F89\u533A",
    231123: "\u900A\u514B\u53BF",
    231124: "\u5B59\u5434\u53BF",
    231181: "\u5317\u5B89\u5E02",
    231182: "\u4E94\u5927\u8FDE\u6C60\u5E02",
    231183: "\u5AE9\u6C5F\u5E02"
  },
  231200: {
    231201: "\u5E02\u8F96\u533A",
    231202: "\u5317\u6797\u533A",
    231221: "\u671B\u594E\u53BF",
    231222: "\u5170\u897F\u53BF",
    231223: "\u9752\u5188\u53BF",
    231224: "\u5E86\u5B89\u53BF",
    231225: "\u660E\u6C34\u53BF",
    231226: "\u7EE5\u68F1\u53BF",
    231281: "\u5B89\u8FBE\u5E02",
    231282: "\u8087\u4E1C\u5E02",
    231283: "\u6D77\u4F26\u5E02"
  },
  232700: {
    232701: "\u6F20\u6CB3\u5E02",
    232721: "\u547C\u739B\u53BF",
    232722: "\u5854\u6CB3\u53BF",
    232761: "\u52A0\u683C\u8FBE\u5947\u533A",
    232762: "\u677E\u5CAD\u533A",
    232763: "\u65B0\u6797\u533A",
    232764: "\u547C\u4E2D\u533A"
  },
  31e4: {
    310100: "\u5E02\u8F96\u533A"
  },
  310100: {
    310101: "\u9EC4\u6D66\u533A",
    310104: "\u5F90\u6C47\u533A",
    310105: "\u957F\u5B81\u533A",
    310106: "\u9759\u5B89\u533A",
    310107: "\u666E\u9640\u533A",
    310109: "\u8679\u53E3\u533A",
    310110: "\u6768\u6D66\u533A",
    310112: "\u95F5\u884C\u533A",
    310113: "\u5B9D\u5C71\u533A",
    310114: "\u5609\u5B9A\u533A",
    310115: "\u6D66\u4E1C\u65B0\u533A",
    310116: "\u91D1\u5C71\u533A",
    310117: "\u677E\u6C5F\u533A",
    310118: "\u9752\u6D66\u533A",
    310120: "\u5949\u8D24\u533A",
    310151: "\u5D07\u660E\u533A"
  },
  32e4: {
    320100: "\u5357\u4EAC\u5E02",
    320200: "\u65E0\u9521\u5E02",
    320300: "\u5F90\u5DDE\u5E02",
    320400: "\u5E38\u5DDE\u5E02",
    320500: "\u82CF\u5DDE\u5E02",
    320600: "\u5357\u901A\u5E02",
    320700: "\u8FDE\u4E91\u6E2F\u5E02",
    320800: "\u6DEE\u5B89\u5E02",
    320900: "\u76D0\u57CE\u5E02",
    321e3: "\u626C\u5DDE\u5E02",
    321100: "\u9547\u6C5F\u5E02",
    321200: "\u6CF0\u5DDE\u5E02",
    321300: "\u5BBF\u8FC1\u5E02"
  },
  320100: {
    320101: "\u5E02\u8F96\u533A",
    320102: "\u7384\u6B66\u533A",
    320104: "\u79E6\u6DEE\u533A",
    320105: "\u5EFA\u90BA\u533A",
    320106: "\u9F13\u697C\u533A",
    320111: "\u6D66\u53E3\u533A",
    320113: "\u6816\u971E\u533A",
    320114: "\u96E8\u82B1\u53F0\u533A",
    320115: "\u6C5F\u5B81\u533A",
    320116: "\u516D\u5408\u533A",
    320117: "\u6EA7\u6C34\u533A",
    320118: "\u9AD8\u6DF3\u533A"
  },
  320200: {
    320201: "\u5E02\u8F96\u533A",
    320205: "\u9521\u5C71\u533A",
    320206: "\u60E0\u5C71\u533A",
    320211: "\u6EE8\u6E56\u533A",
    320213: "\u6881\u6EAA\u533A",
    320214: "\u65B0\u5434\u533A",
    320281: "\u6C5F\u9634\u5E02",
    320282: "\u5B9C\u5174\u5E02"
  },
  320300: {
    320301: "\u5E02\u8F96\u533A",
    320302: "\u9F13\u697C\u533A",
    320303: "\u4E91\u9F99\u533A",
    320305: "\u8D3E\u6C6A\u533A",
    320311: "\u6CC9\u5C71\u533A",
    320312: "\u94DC\u5C71\u533A",
    320321: "\u4E30\u53BF",
    320322: "\u6C9B\u53BF",
    320324: "\u7762\u5B81\u53BF",
    320371: "\u5F90\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    320381: "\u65B0\u6C82\u5E02",
    320382: "\u90B3\u5DDE\u5E02"
  },
  320400: {
    320401: "\u5E02\u8F96\u533A",
    320402: "\u5929\u5B81\u533A",
    320404: "\u949F\u697C\u533A",
    320411: "\u65B0\u5317\u533A",
    320412: "\u6B66\u8FDB\u533A",
    320413: "\u91D1\u575B\u533A",
    320481: "\u6EA7\u9633\u5E02"
  },
  320500: {
    320501: "\u5E02\u8F96\u533A",
    320505: "\u864E\u4E18\u533A",
    320506: "\u5434\u4E2D\u533A",
    320507: "\u76F8\u57CE\u533A",
    320508: "\u59D1\u82CF\u533A",
    320509: "\u5434\u6C5F\u533A",
    320571: "\u82CF\u5DDE\u5DE5\u4E1A\u56ED\u533A",
    320581: "\u5E38\u719F\u5E02",
    320582: "\u5F20\u5BB6\u6E2F\u5E02",
    320583: "\u6606\u5C71\u5E02",
    320585: "\u592A\u4ED3\u5E02"
  },
  320600: {
    320601: "\u5E02\u8F96\u533A",
    320602: "\u5D07\u5DDD\u533A",
    320611: "\u6E2F\u95F8\u533A",
    320612: "\u901A\u5DDE\u533A",
    320623: "\u5982\u4E1C\u53BF",
    320671: "\u5357\u901A\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    320681: "\u542F\u4E1C\u5E02",
    320682: "\u5982\u768B\u5E02",
    320684: "\u6D77\u95E8\u5E02",
    320685: "\u6D77\u5B89\u5E02"
  },
  320700: {
    320701: "\u5E02\u8F96\u533A",
    320703: "\u8FDE\u4E91\u533A",
    320706: "\u6D77\u5DDE\u533A",
    320707: "\u8D63\u6986\u533A",
    320722: "\u4E1C\u6D77\u53BF",
    320723: "\u704C\u4E91\u53BF",
    320724: "\u704C\u5357\u53BF",
    320771: "\u8FDE\u4E91\u6E2F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    320772: "\u8FDE\u4E91\u6E2F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
  },
  320800: {
    320801: "\u5E02\u8F96\u533A",
    320803: "\u6DEE\u5B89\u533A",
    320804: "\u6DEE\u9634\u533A",
    320812: "\u6E05\u6C5F\u6D66\u533A",
    320813: "\u6D2A\u6CFD\u533A",
    320826: "\u6D9F\u6C34\u53BF",
    320830: "\u76F1\u7719\u53BF",
    320831: "\u91D1\u6E56\u53BF",
    320871: "\u6DEE\u5B89\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
  },
  320900: {
    320901: "\u5E02\u8F96\u533A",
    320902: "\u4EAD\u6E56\u533A",
    320903: "\u76D0\u90FD\u533A",
    320904: "\u5927\u4E30\u533A",
    320921: "\u54CD\u6C34\u53BF",
    320922: "\u6EE8\u6D77\u53BF",
    320923: "\u961C\u5B81\u53BF",
    320924: "\u5C04\u9633\u53BF",
    320925: "\u5EFA\u6E56\u53BF",
    320971: "\u76D0\u57CE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    320981: "\u4E1C\u53F0\u5E02"
  },
  321e3: {
    321001: "\u5E02\u8F96\u533A",
    321002: "\u5E7F\u9675\u533A",
    321003: "\u9097\u6C5F\u533A",
    321012: "\u6C5F\u90FD\u533A",
    321023: "\u5B9D\u5E94\u53BF",
    321071: "\u626C\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    321081: "\u4EEA\u5F81\u5E02",
    321084: "\u9AD8\u90AE\u5E02"
  },
  321100: {
    321101: "\u5E02\u8F96\u533A",
    321102: "\u4EAC\u53E3\u533A",
    321111: "\u6DA6\u5DDE\u533A",
    321112: "\u4E39\u5F92\u533A",
    321171: "\u9547\u6C5F\u65B0\u533A",
    321181: "\u4E39\u9633\u5E02",
    321182: "\u626C\u4E2D\u5E02",
    321183: "\u53E5\u5BB9\u5E02"
  },
  321200: {
    321201: "\u5E02\u8F96\u533A",
    321202: "\u6D77\u9675\u533A",
    321203: "\u9AD8\u6E2F\u533A",
    321204: "\u59DC\u5830\u533A",
    321271: "\u6CF0\u5DDE\u533B\u836F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    321281: "\u5174\u5316\u5E02",
    321282: "\u9756\u6C5F\u5E02",
    321283: "\u6CF0\u5174\u5E02"
  },
  321300: {
    321301: "\u5E02\u8F96\u533A",
    321302: "\u5BBF\u57CE\u533A",
    321311: "\u5BBF\u8C6B\u533A",
    321322: "\u6CAD\u9633\u53BF",
    321323: "\u6CD7\u9633\u53BF",
    321324: "\u6CD7\u6D2A\u53BF",
    321371: "\u5BBF\u8FC1\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
  },
  33e4: {
    330100: "\u676D\u5DDE\u5E02",
    330200: "\u5B81\u6CE2\u5E02",
    330300: "\u6E29\u5DDE\u5E02",
    330400: "\u5609\u5174\u5E02",
    330500: "\u6E56\u5DDE\u5E02",
    330600: "\u7ECD\u5174\u5E02",
    330700: "\u91D1\u534E\u5E02",
    330800: "\u8862\u5DDE\u5E02",
    330900: "\u821F\u5C71\u5E02",
    331e3: "\u53F0\u5DDE\u5E02",
    331100: "\u4E3D\u6C34\u5E02"
  },
  330100: {
    330101: "\u5E02\u8F96\u533A",
    330102: "\u4E0A\u57CE\u533A",
    330103: "\u4E0B\u57CE\u533A",
    330104: "\u6C5F\u5E72\u533A",
    330105: "\u62F1\u5885\u533A",
    330106: "\u897F\u6E56\u533A",
    330108: "\u6EE8\u6C5F\u533A",
    330109: "\u8427\u5C71\u533A",
    330110: "\u4F59\u676D\u533A",
    330111: "\u5BCC\u9633\u533A",
    330112: "\u4E34\u5B89\u533A",
    330122: "\u6850\u5E90\u53BF",
    330127: "\u6DF3\u5B89\u53BF",
    330182: "\u5EFA\u5FB7\u5E02"
  },
  330200: {
    330201: "\u5E02\u8F96\u533A",
    330203: "\u6D77\u66D9\u533A",
    330205: "\u6C5F\u5317\u533A",
    330206: "\u5317\u4ED1\u533A",
    330211: "\u9547\u6D77\u533A",
    330212: "\u911E\u5DDE\u533A",
    330213: "\u5949\u5316\u533A",
    330225: "\u8C61\u5C71\u53BF",
    330226: "\u5B81\u6D77\u53BF",
    330281: "\u4F59\u59DA\u5E02",
    330282: "\u6148\u6EAA\u5E02"
  },
  330300: {
    330301: "\u5E02\u8F96\u533A",
    330302: "\u9E7F\u57CE\u533A",
    330303: "\u9F99\u6E7E\u533A",
    330304: "\u74EF\u6D77\u533A",
    330305: "\u6D1E\u5934\u533A",
    330324: "\u6C38\u5609\u53BF",
    330326: "\u5E73\u9633\u53BF",
    330327: "\u82CD\u5357\u53BF",
    330328: "\u6587\u6210\u53BF",
    330329: "\u6CF0\u987A\u53BF",
    330371: "\u6E29\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    330381: "\u745E\u5B89\u5E02",
    330382: "\u4E50\u6E05\u5E02",
    330383: "\u9F99\u6E2F\u5E02"
  },
  330400: {
    330401: "\u5E02\u8F96\u533A",
    330402: "\u5357\u6E56\u533A",
    330411: "\u79C0\u6D32\u533A",
    330421: "\u5609\u5584\u53BF",
    330424: "\u6D77\u76D0\u53BF",
    330481: "\u6D77\u5B81\u5E02",
    330482: "\u5E73\u6E56\u5E02",
    330483: "\u6850\u4E61\u5E02"
  },
  330500: {
    330501: "\u5E02\u8F96\u533A",
    330502: "\u5434\u5174\u533A",
    330503: "\u5357\u6D54\u533A",
    330521: "\u5FB7\u6E05\u53BF",
    330522: "\u957F\u5174\u53BF",
    330523: "\u5B89\u5409\u53BF"
  },
  330600: {
    330601: "\u5E02\u8F96\u533A",
    330602: "\u8D8A\u57CE\u533A",
    330603: "\u67EF\u6865\u533A",
    330604: "\u4E0A\u865E\u533A",
    330624: "\u65B0\u660C\u53BF",
    330681: "\u8BF8\u66A8\u5E02",
    330683: "\u5D4A\u5DDE\u5E02"
  },
  330700: {
    330701: "\u5E02\u8F96\u533A",
    330702: "\u5A7A\u57CE\u533A",
    330703: "\u91D1\u4E1C\u533A",
    330723: "\u6B66\u4E49\u53BF",
    330726: "\u6D66\u6C5F\u53BF",
    330727: "\u78D0\u5B89\u53BF",
    330781: "\u5170\u6EAA\u5E02",
    330782: "\u4E49\u4E4C\u5E02",
    330783: "\u4E1C\u9633\u5E02",
    330784: "\u6C38\u5EB7\u5E02"
  },
  330800: {
    330801: "\u5E02\u8F96\u533A",
    330802: "\u67EF\u57CE\u533A",
    330803: "\u8862\u6C5F\u533A",
    330822: "\u5E38\u5C71\u53BF",
    330824: "\u5F00\u5316\u53BF",
    330825: "\u9F99\u6E38\u53BF",
    330881: "\u6C5F\u5C71\u5E02"
  },
  330900: {
    330901: "\u5E02\u8F96\u533A",
    330902: "\u5B9A\u6D77\u533A",
    330903: "\u666E\u9640\u533A",
    330921: "\u5CB1\u5C71\u53BF",
    330922: "\u5D4A\u6CD7\u53BF"
  },
  331e3: {
    331001: "\u5E02\u8F96\u533A",
    331002: "\u6912\u6C5F\u533A",
    331003: "\u9EC4\u5CA9\u533A",
    331004: "\u8DEF\u6865\u533A",
    331022: "\u4E09\u95E8\u53BF",
    331023: "\u5929\u53F0\u53BF",
    331024: "\u4ED9\u5C45\u53BF",
    331081: "\u6E29\u5CAD\u5E02",
    331082: "\u4E34\u6D77\u5E02",
    331083: "\u7389\u73AF\u5E02"
  },
  331100: {
    331101: "\u5E02\u8F96\u533A",
    331102: "\u83B2\u90FD\u533A",
    331121: "\u9752\u7530\u53BF",
    331122: "\u7F19\u4E91\u53BF",
    331123: "\u9042\u660C\u53BF",
    331124: "\u677E\u9633\u53BF",
    331125: "\u4E91\u548C\u53BF",
    331126: "\u5E86\u5143\u53BF",
    331127: "\u666F\u5B81\u7572\u65CF\u81EA\u6CBB\u53BF",
    331181: "\u9F99\u6CC9\u5E02"
  },
  34e4: {
    340100: "\u5408\u80A5\u5E02",
    340200: "\u829C\u6E56\u5E02",
    340300: "\u868C\u57E0\u5E02",
    340400: "\u6DEE\u5357\u5E02",
    340500: "\u9A6C\u978D\u5C71\u5E02",
    340600: "\u6DEE\u5317\u5E02",
    340700: "\u94DC\u9675\u5E02",
    340800: "\u5B89\u5E86\u5E02",
    341e3: "\u9EC4\u5C71\u5E02",
    341100: "\u6EC1\u5DDE\u5E02",
    341200: "\u961C\u9633\u5E02",
    341300: "\u5BBF\u5DDE\u5E02",
    341500: "\u516D\u5B89\u5E02",
    341600: "\u4EB3\u5DDE\u5E02",
    341700: "\u6C60\u5DDE\u5E02",
    341800: "\u5BA3\u57CE\u5E02"
  },
  340100: {
    340101: "\u5E02\u8F96\u533A",
    340102: "\u7476\u6D77\u533A",
    340103: "\u5E90\u9633\u533A",
    340104: "\u8700\u5C71\u533A",
    340111: "\u5305\u6CB3\u533A",
    340121: "\u957F\u4E30\u53BF",
    340122: "\u80A5\u4E1C\u53BF",
    340123: "\u80A5\u897F\u53BF",
    340124: "\u5E90\u6C5F\u53BF",
    340171: "\u5408\u80A5\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    340172: "\u5408\u80A5\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    340173: "\u5408\u80A5\u65B0\u7AD9\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    340181: "\u5DE2\u6E56\u5E02"
  },
  340200: {
    340201: "\u5E02\u8F96\u533A",
    340202: "\u955C\u6E56\u533A",
    340203: "\u5F0B\u6C5F\u533A",
    340207: "\u9E20\u6C5F\u533A",
    340208: "\u4E09\u5C71\u533A",
    340221: "\u829C\u6E56\u53BF",
    340222: "\u7E41\u660C\u53BF",
    340223: "\u5357\u9675\u53BF",
    340225: "\u65E0\u4E3A\u53BF",
    340271: "\u829C\u6E56\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    340272: "\u5B89\u5FBD\u829C\u6E56\u957F\u6C5F\u5927\u6865\u7ECF\u6D4E\u5F00\u53D1\u533A"
  },
  340300: {
    340301: "\u5E02\u8F96\u533A",
    340302: "\u9F99\u5B50\u6E56\u533A",
    340303: "\u868C\u5C71\u533A",
    340304: "\u79B9\u4F1A\u533A",
    340311: "\u6DEE\u4E0A\u533A",
    340321: "\u6000\u8FDC\u53BF",
    340322: "\u4E94\u6CB3\u53BF",
    340323: "\u56FA\u9547\u53BF",
    340371: "\u868C\u57E0\u5E02\u9AD8\u65B0\u6280\u672F\u5F00\u53D1\u533A",
    340372: "\u868C\u57E0\u5E02\u7ECF\u6D4E\u5F00\u53D1\u533A"
  },
  340400: {
    340401: "\u5E02\u8F96\u533A",
    340402: "\u5927\u901A\u533A",
    340403: "\u7530\u5BB6\u5EB5\u533A",
    340404: "\u8C22\u5BB6\u96C6\u533A",
    340405: "\u516B\u516C\u5C71\u533A",
    340406: "\u6F58\u96C6\u533A",
    340421: "\u51E4\u53F0\u53BF",
    340422: "\u5BFF\u53BF"
  },
  340500: {
    340501: "\u5E02\u8F96\u533A",
    340503: "\u82B1\u5C71\u533A",
    340504: "\u96E8\u5C71\u533A",
    340506: "\u535A\u671B\u533A",
    340521: "\u5F53\u6D82\u53BF",
    340522: "\u542B\u5C71\u53BF",
    340523: "\u548C\u53BF"
  },
  340600: {
    340601: "\u5E02\u8F96\u533A",
    340602: "\u675C\u96C6\u533A",
    340603: "\u76F8\u5C71\u533A",
    340604: "\u70C8\u5C71\u533A",
    340621: "\u6FC9\u6EAA\u53BF"
  },
  340700: {
    340701: "\u5E02\u8F96\u533A",
    340705: "\u94DC\u5B98\u533A",
    340706: "\u4E49\u5B89\u533A",
    340711: "\u90CA\u533A",
    340722: "\u679E\u9633\u53BF"
  },
  340800: {
    340801: "\u5E02\u8F96\u533A",
    340802: "\u8FCE\u6C5F\u533A",
    340803: "\u5927\u89C2\u533A",
    340811: "\u5B9C\u79C0\u533A",
    340822: "\u6000\u5B81\u53BF",
    340825: "\u592A\u6E56\u53BF",
    340826: "\u5BBF\u677E\u53BF",
    340827: "\u671B\u6C5F\u53BF",
    340828: "\u5CB3\u897F\u53BF",
    340871: "\u5B89\u5FBD\u5B89\u5E86\u7ECF\u6D4E\u5F00\u53D1\u533A",
    340881: "\u6850\u57CE\u5E02",
    340882: "\u6F5C\u5C71\u5E02"
  },
  341e3: {
    341001: "\u5E02\u8F96\u533A",
    341002: "\u5C6F\u6EAA\u533A",
    341003: "\u9EC4\u5C71\u533A",
    341004: "\u5FBD\u5DDE\u533A",
    341021: "\u6B59\u53BF",
    341022: "\u4F11\u5B81\u53BF",
    341023: "\u9EDF\u53BF",
    341024: "\u7941\u95E8\u53BF"
  },
  341100: {
    341101: "\u5E02\u8F96\u533A",
    341102: "\u7405\u740A\u533A",
    341103: "\u5357\u8C2F\u533A",
    341122: "\u6765\u5B89\u53BF",
    341124: "\u5168\u6912\u53BF",
    341125: "\u5B9A\u8FDC\u53BF",
    341126: "\u51E4\u9633\u53BF",
    341171: "\u82CF\u6EC1\u73B0\u4EE3\u4EA7\u4E1A\u56ED",
    341172: "\u6EC1\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    341181: "\u5929\u957F\u5E02",
    341182: "\u660E\u5149\u5E02"
  },
  341200: {
    341201: "\u5E02\u8F96\u533A",
    341202: "\u988D\u5DDE\u533A",
    341203: "\u988D\u4E1C\u533A",
    341204: "\u988D\u6CC9\u533A",
    341221: "\u4E34\u6CC9\u53BF",
    341222: "\u592A\u548C\u53BF",
    341225: "\u961C\u5357\u53BF",
    341226: "\u988D\u4E0A\u53BF",
    341271: "\u961C\u9633\u5408\u80A5\u73B0\u4EE3\u4EA7\u4E1A\u56ED\u533A",
    341272: "\u961C\u9633\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    341282: "\u754C\u9996\u5E02"
  },
  341300: {
    341301: "\u5E02\u8F96\u533A",
    341302: "\u57C7\u6865\u533A",
    341321: "\u7800\u5C71\u53BF",
    341322: "\u8427\u53BF",
    341323: "\u7075\u74A7\u53BF",
    341324: "\u6CD7\u53BF",
    341371: "\u5BBF\u5DDE\u9A6C\u978D\u5C71\u73B0\u4EE3\u4EA7\u4E1A\u56ED\u533A",
    341372: "\u5BBF\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
  },
  341500: {
    341501: "\u5E02\u8F96\u533A",
    341502: "\u91D1\u5B89\u533A",
    341503: "\u88D5\u5B89\u533A",
    341504: "\u53F6\u96C6\u533A",
    341522: "\u970D\u90B1\u53BF",
    341523: "\u8212\u57CE\u53BF",
    341524: "\u91D1\u5BE8\u53BF",
    341525: "\u970D\u5C71\u53BF"
  },
  341600: {
    341601: "\u5E02\u8F96\u533A",
    341602: "\u8C2F\u57CE\u533A",
    341621: "\u6DA1\u9633\u53BF",
    341622: "\u8499\u57CE\u53BF",
    341623: "\u5229\u8F9B\u53BF"
  },
  341700: {
    341701: "\u5E02\u8F96\u533A",
    341702: "\u8D35\u6C60\u533A",
    341721: "\u4E1C\u81F3\u53BF",
    341722: "\u77F3\u53F0\u53BF",
    341723: "\u9752\u9633\u53BF"
  },
  341800: {
    341801: "\u5E02\u8F96\u533A",
    341802: "\u5BA3\u5DDE\u533A",
    341821: "\u90CE\u6EAA\u53BF",
    341823: "\u6CFE\u53BF",
    341824: "\u7EE9\u6EAA\u53BF",
    341825: "\u65CC\u5FB7\u53BF",
    341871: "\u5BA3\u57CE\u5E02\u7ECF\u6D4E\u5F00\u53D1\u533A",
    341881: "\u5B81\u56FD\u5E02",
    341882: "\u5E7F\u5FB7\u5E02"
  },
  35e4: {
    350100: "\u798F\u5DDE\u5E02",
    350200: "\u53A6\u95E8\u5E02",
    350300: "\u8386\u7530\u5E02",
    350400: "\u4E09\u660E\u5E02",
    350500: "\u6CC9\u5DDE\u5E02",
    350600: "\u6F33\u5DDE\u5E02",
    350700: "\u5357\u5E73\u5E02",
    350800: "\u9F99\u5CA9\u5E02",
    350900: "\u5B81\u5FB7\u5E02"
  },
  350100: {
    350101: "\u5E02\u8F96\u533A",
    350102: "\u9F13\u697C\u533A",
    350103: "\u53F0\u6C5F\u533A",
    350104: "\u4ED3\u5C71\u533A",
    350105: "\u9A6C\u5C3E\u533A",
    350111: "\u664B\u5B89\u533A",
    350112: "\u957F\u4E50\u533A",
    350121: "\u95FD\u4FAF\u53BF",
    350122: "\u8FDE\u6C5F\u53BF",
    350123: "\u7F57\u6E90\u53BF",
    350124: "\u95FD\u6E05\u53BF",
    350125: "\u6C38\u6CF0\u53BF",
    350128: "\u5E73\u6F6D\u53BF",
    350181: "\u798F\u6E05\u5E02"
  },
  350200: {
    350201: "\u5E02\u8F96\u533A",
    350203: "\u601D\u660E\u533A",
    350205: "\u6D77\u6CA7\u533A",
    350206: "\u6E56\u91CC\u533A",
    350211: "\u96C6\u7F8E\u533A",
    350212: "\u540C\u5B89\u533A",
    350213: "\u7FD4\u5B89\u533A"
  },
  350300: {
    350301: "\u5E02\u8F96\u533A",
    350302: "\u57CE\u53A2\u533A",
    350303: "\u6DB5\u6C5F\u533A",
    350304: "\u8354\u57CE\u533A",
    350305: "\u79C0\u5C7F\u533A",
    350322: "\u4ED9\u6E38\u53BF"
  },
  350400: {
    350401: "\u5E02\u8F96\u533A",
    350402: "\u6885\u5217\u533A",
    350403: "\u4E09\u5143\u533A",
    350421: "\u660E\u6EAA\u53BF",
    350423: "\u6E05\u6D41\u53BF",
    350424: "\u5B81\u5316\u53BF",
    350425: "\u5927\u7530\u53BF",
    350426: "\u5C24\u6EAA\u53BF",
    350427: "\u6C99\u53BF",
    350428: "\u5C06\u4E50\u53BF",
    350429: "\u6CF0\u5B81\u53BF",
    350430: "\u5EFA\u5B81\u53BF",
    350481: "\u6C38\u5B89\u5E02"
  },
  350500: {
    350501: "\u5E02\u8F96\u533A",
    350502: "\u9CA4\u57CE\u533A",
    350503: "\u4E30\u6CFD\u533A",
    350504: "\u6D1B\u6C5F\u533A",
    350505: "\u6CC9\u6E2F\u533A",
    350521: "\u60E0\u5B89\u53BF",
    350524: "\u5B89\u6EAA\u53BF",
    350525: "\u6C38\u6625\u53BF",
    350526: "\u5FB7\u5316\u53BF",
    350527: "\u91D1\u95E8\u53BF",
    350581: "\u77F3\u72EE\u5E02",
    350582: "\u664B\u6C5F\u5E02",
    350583: "\u5357\u5B89\u5E02"
  },
  350600: {
    350601: "\u5E02\u8F96\u533A",
    350602: "\u8297\u57CE\u533A",
    350603: "\u9F99\u6587\u533A",
    350622: "\u4E91\u9704\u53BF",
    350623: "\u6F33\u6D66\u53BF",
    350624: "\u8BCF\u5B89\u53BF",
    350625: "\u957F\u6CF0\u53BF",
    350626: "\u4E1C\u5C71\u53BF",
    350627: "\u5357\u9756\u53BF",
    350628: "\u5E73\u548C\u53BF",
    350629: "\u534E\u5B89\u53BF",
    350681: "\u9F99\u6D77\u5E02"
  },
  350700: {
    350701: "\u5E02\u8F96\u533A",
    350702: "\u5EF6\u5E73\u533A",
    350703: "\u5EFA\u9633\u533A",
    350721: "\u987A\u660C\u53BF",
    350722: "\u6D66\u57CE\u53BF",
    350723: "\u5149\u6CFD\u53BF",
    350724: "\u677E\u6EAA\u53BF",
    350725: "\u653F\u548C\u53BF",
    350781: "\u90B5\u6B66\u5E02",
    350782: "\u6B66\u5937\u5C71\u5E02",
    350783: "\u5EFA\u74EF\u5E02"
  },
  350800: {
    350801: "\u5E02\u8F96\u533A",
    350802: "\u65B0\u7F57\u533A",
    350803: "\u6C38\u5B9A\u533A",
    350821: "\u957F\u6C40\u53BF",
    350823: "\u4E0A\u676D\u53BF",
    350824: "\u6B66\u5E73\u53BF",
    350825: "\u8FDE\u57CE\u53BF",
    350881: "\u6F33\u5E73\u5E02"
  },
  350900: {
    350901: "\u5E02\u8F96\u533A",
    350902: "\u8549\u57CE\u533A",
    350921: "\u971E\u6D66\u53BF",
    350922: "\u53E4\u7530\u53BF",
    350923: "\u5C4F\u5357\u53BF",
    350924: "\u5BFF\u5B81\u53BF",
    350925: "\u5468\u5B81\u53BF",
    350926: "\u67D8\u8363\u53BF",
    350981: "\u798F\u5B89\u5E02",
    350982: "\u798F\u9F0E\u5E02"
  },
  36e4: {
    360100: "\u5357\u660C\u5E02",
    360200: "\u666F\u5FB7\u9547\u5E02",
    360300: "\u840D\u4E61\u5E02",
    360400: "\u4E5D\u6C5F\u5E02",
    360500: "\u65B0\u4F59\u5E02",
    360600: "\u9E70\u6F6D\u5E02",
    360700: "\u8D63\u5DDE\u5E02",
    360800: "\u5409\u5B89\u5E02",
    360900: "\u5B9C\u6625\u5E02",
    361e3: "\u629A\u5DDE\u5E02",
    361100: "\u4E0A\u9976\u5E02"
  },
  360100: {
    360101: "\u5E02\u8F96\u533A",
    360102: "\u4E1C\u6E56\u533A",
    360103: "\u897F\u6E56\u533A",
    360104: "\u9752\u4E91\u8C31\u533A",
    360105: "\u6E7E\u91CC\u533A",
    360111: "\u9752\u5C71\u6E56\u533A",
    360112: "\u65B0\u5EFA\u533A",
    360121: "\u5357\u660C\u53BF",
    360123: "\u5B89\u4E49\u53BF",
    360124: "\u8FDB\u8D24\u53BF"
  },
  360200: {
    360201: "\u5E02\u8F96\u533A",
    360202: "\u660C\u6C5F\u533A",
    360203: "\u73E0\u5C71\u533A",
    360222: "\u6D6E\u6881\u53BF",
    360281: "\u4E50\u5E73\u5E02"
  },
  360300: {
    360301: "\u5E02\u8F96\u533A",
    360302: "\u5B89\u6E90\u533A",
    360313: "\u6E58\u4E1C\u533A",
    360321: "\u83B2\u82B1\u53BF",
    360322: "\u4E0A\u6817\u53BF",
    360323: "\u82A6\u6EAA\u53BF"
  },
  360400: {
    360401: "\u5E02\u8F96\u533A",
    360402: "\u6FC2\u6EAA\u533A",
    360403: "\u6D54\u9633\u533A",
    360404: "\u67F4\u6851\u533A",
    360423: "\u6B66\u5B81\u53BF",
    360424: "\u4FEE\u6C34\u53BF",
    360425: "\u6C38\u4FEE\u53BF",
    360426: "\u5FB7\u5B89\u53BF",
    360428: "\u90FD\u660C\u53BF",
    360429: "\u6E56\u53E3\u53BF",
    360430: "\u5F6D\u6CFD\u53BF",
    360481: "\u745E\u660C\u5E02",
    360482: "\u5171\u9752\u57CE\u5E02",
    360483: "\u5E90\u5C71\u5E02"
  },
  360500: {
    360501: "\u5E02\u8F96\u533A",
    360502: "\u6E1D\u6C34\u533A",
    360521: "\u5206\u5B9C\u53BF"
  },
  360600: {
    360601: "\u5E02\u8F96\u533A",
    360602: "\u6708\u6E56\u533A",
    360603: "\u4F59\u6C5F\u533A",
    360681: "\u8D35\u6EAA\u5E02"
  },
  360700: {
    360701: "\u5E02\u8F96\u533A",
    360702: "\u7AE0\u8D21\u533A",
    360703: "\u5357\u5EB7\u533A",
    360704: "\u8D63\u53BF\u533A",
    360722: "\u4FE1\u4E30\u53BF",
    360723: "\u5927\u4F59\u53BF",
    360724: "\u4E0A\u72B9\u53BF",
    360725: "\u5D07\u4E49\u53BF",
    360726: "\u5B89\u8FDC\u53BF",
    360727: "\u9F99\u5357\u53BF",
    360728: "\u5B9A\u5357\u53BF",
    360729: "\u5168\u5357\u53BF",
    360730: "\u5B81\u90FD\u53BF",
    360731: "\u4E8E\u90FD\u53BF",
    360732: "\u5174\u56FD\u53BF",
    360733: "\u4F1A\u660C\u53BF",
    360734: "\u5BFB\u4E4C\u53BF",
    360735: "\u77F3\u57CE\u53BF",
    360781: "\u745E\u91D1\u5E02"
  },
  360800: {
    360801: "\u5E02\u8F96\u533A",
    360802: "\u5409\u5DDE\u533A",
    360803: "\u9752\u539F\u533A",
    360821: "\u5409\u5B89\u53BF",
    360822: "\u5409\u6C34\u53BF",
    360823: "\u5CE1\u6C5F\u53BF",
    360824: "\u65B0\u5E72\u53BF",
    360825: "\u6C38\u4E30\u53BF",
    360826: "\u6CF0\u548C\u53BF",
    360827: "\u9042\u5DDD\u53BF",
    360828: "\u4E07\u5B89\u53BF",
    360829: "\u5B89\u798F\u53BF",
    360830: "\u6C38\u65B0\u53BF",
    360881: "\u4E95\u5188\u5C71\u5E02"
  },
  360900: {
    360901: "\u5E02\u8F96\u533A",
    360902: "\u8881\u5DDE\u533A",
    360921: "\u5949\u65B0\u53BF",
    360922: "\u4E07\u8F7D\u53BF",
    360923: "\u4E0A\u9AD8\u53BF",
    360924: "\u5B9C\u4E30\u53BF",
    360925: "\u9756\u5B89\u53BF",
    360926: "\u94DC\u9F13\u53BF",
    360981: "\u4E30\u57CE\u5E02",
    360982: "\u6A1F\u6811\u5E02",
    360983: "\u9AD8\u5B89\u5E02"
  },
  361e3: {
    361001: "\u5E02\u8F96\u533A",
    361002: "\u4E34\u5DDD\u533A",
    361003: "\u4E1C\u4E61\u533A",
    361021: "\u5357\u57CE\u53BF",
    361022: "\u9ECE\u5DDD\u53BF",
    361023: "\u5357\u4E30\u53BF",
    361024: "\u5D07\u4EC1\u53BF",
    361025: "\u4E50\u5B89\u53BF",
    361026: "\u5B9C\u9EC4\u53BF",
    361027: "\u91D1\u6EAA\u53BF",
    361028: "\u8D44\u6EAA\u53BF",
    361030: "\u5E7F\u660C\u53BF"
  },
  361100: {
    361101: "\u5E02\u8F96\u533A",
    361102: "\u4FE1\u5DDE\u533A",
    361103: "\u5E7F\u4E30\u533A",
    361104: "\u5E7F\u4FE1\u533A",
    361123: "\u7389\u5C71\u53BF",
    361124: "\u94C5\u5C71\u53BF",
    361125: "\u6A2A\u5CF0\u53BF",
    361126: "\u5F0B\u9633\u53BF",
    361127: "\u4F59\u5E72\u53BF",
    361128: "\u9131\u9633\u53BF",
    361129: "\u4E07\u5E74\u53BF",
    361130: "\u5A7A\u6E90\u53BF",
    361181: "\u5FB7\u5174\u5E02"
  },
  37e4: {
    370100: "\u6D4E\u5357\u5E02",
    370200: "\u9752\u5C9B\u5E02",
    370300: "\u6DC4\u535A\u5E02",
    370400: "\u67A3\u5E84\u5E02",
    370500: "\u4E1C\u8425\u5E02",
    370600: "\u70DF\u53F0\u5E02",
    370700: "\u6F4D\u574A\u5E02",
    370800: "\u6D4E\u5B81\u5E02",
    370900: "\u6CF0\u5B89\u5E02",
    371e3: "\u5A01\u6D77\u5E02",
    371100: "\u65E5\u7167\u5E02",
    371300: "\u4E34\u6C82\u5E02",
    371400: "\u5FB7\u5DDE\u5E02",
    371500: "\u804A\u57CE\u5E02",
    371600: "\u6EE8\u5DDE\u5E02",
    371700: "\u83CF\u6CFD\u5E02"
  },
  370100: {
    370101: "\u5E02\u8F96\u533A",
    370102: "\u5386\u4E0B\u533A",
    370103: "\u5E02\u4E2D\u533A",
    370104: "\u69D0\u836B\u533A",
    370105: "\u5929\u6865\u533A",
    370112: "\u5386\u57CE\u533A",
    370113: "\u957F\u6E05\u533A",
    370114: "\u7AE0\u4E18\u533A",
    370115: "\u6D4E\u9633\u533A",
    370116: "\u83B1\u829C\u533A",
    370117: "\u94A2\u57CE\u533A",
    370124: "\u5E73\u9634\u53BF",
    370126: "\u5546\u6CB3\u53BF",
    370171: "\u6D4E\u5357\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
  },
  370200: {
    370201: "\u5E02\u8F96\u533A",
    370202: "\u5E02\u5357\u533A",
    370203: "\u5E02\u5317\u533A",
    370211: "\u9EC4\u5C9B\u533A",
    370212: "\u5D02\u5C71\u533A",
    370213: "\u674E\u6CA7\u533A",
    370214: "\u57CE\u9633\u533A",
    370215: "\u5373\u58A8\u533A",
    370271: "\u9752\u5C9B\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    370281: "\u80F6\u5DDE\u5E02",
    370283: "\u5E73\u5EA6\u5E02",
    370285: "\u83B1\u897F\u5E02"
  },
  370300: {
    370301: "\u5E02\u8F96\u533A",
    370302: "\u6DC4\u5DDD\u533A",
    370303: "\u5F20\u5E97\u533A",
    370304: "\u535A\u5C71\u533A",
    370305: "\u4E34\u6DC4\u533A",
    370306: "\u5468\u6751\u533A",
    370321: "\u6853\u53F0\u53BF",
    370322: "\u9AD8\u9752\u53BF",
    370323: "\u6C82\u6E90\u53BF"
  },
  370400: {
    370401: "\u5E02\u8F96\u533A",
    370402: "\u5E02\u4E2D\u533A",
    370403: "\u859B\u57CE\u533A",
    370404: "\u5CC4\u57CE\u533A",
    370405: "\u53F0\u513F\u5E84\u533A",
    370406: "\u5C71\u4EAD\u533A",
    370481: "\u6ED5\u5DDE\u5E02"
  },
  370500: {
    370501: "\u5E02\u8F96\u533A",
    370502: "\u4E1C\u8425\u533A",
    370503: "\u6CB3\u53E3\u533A",
    370505: "\u57A6\u5229\u533A",
    370522: "\u5229\u6D25\u53BF",
    370523: "\u5E7F\u9976\u53BF",
    370571: "\u4E1C\u8425\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    370572: "\u4E1C\u8425\u6E2F\u7ECF\u6D4E\u5F00\u53D1\u533A"
  },
  370600: {
    370601: "\u5E02\u8F96\u533A",
    370602: "\u829D\u7F58\u533A",
    370611: "\u798F\u5C71\u533A",
    370612: "\u725F\u5E73\u533A",
    370613: "\u83B1\u5C71\u533A",
    370634: "\u957F\u5C9B\u53BF",
    370671: "\u70DF\u53F0\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    370672: "\u70DF\u53F0\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    370681: "\u9F99\u53E3\u5E02",
    370682: "\u83B1\u9633\u5E02",
    370683: "\u83B1\u5DDE\u5E02",
    370684: "\u84EC\u83B1\u5E02",
    370685: "\u62DB\u8FDC\u5E02",
    370686: "\u6816\u971E\u5E02",
    370687: "\u6D77\u9633\u5E02"
  },
  370700: {
    370701: "\u5E02\u8F96\u533A",
    370702: "\u6F4D\u57CE\u533A",
    370703: "\u5BD2\u4EAD\u533A",
    370704: "\u574A\u5B50\u533A",
    370705: "\u594E\u6587\u533A",
    370724: "\u4E34\u6710\u53BF",
    370725: "\u660C\u4E50\u53BF",
    370772: "\u6F4D\u574A\u6EE8\u6D77\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    370781: "\u9752\u5DDE\u5E02",
    370782: "\u8BF8\u57CE\u5E02",
    370783: "\u5BFF\u5149\u5E02",
    370784: "\u5B89\u4E18\u5E02",
    370785: "\u9AD8\u5BC6\u5E02",
    370786: "\u660C\u9091\u5E02"
  },
  370800: {
    370801: "\u5E02\u8F96\u533A",
    370811: "\u4EFB\u57CE\u533A",
    370812: "\u5156\u5DDE\u533A",
    370826: "\u5FAE\u5C71\u53BF",
    370827: "\u9C7C\u53F0\u53BF",
    370828: "\u91D1\u4E61\u53BF",
    370829: "\u5609\u7965\u53BF",
    370830: "\u6C76\u4E0A\u53BF",
    370831: "\u6CD7\u6C34\u53BF",
    370832: "\u6881\u5C71\u53BF",
    370871: "\u6D4E\u5B81\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    370881: "\u66F2\u961C\u5E02",
    370883: "\u90B9\u57CE\u5E02"
  },
  370900: {
    370901: "\u5E02\u8F96\u533A",
    370902: "\u6CF0\u5C71\u533A",
    370911: "\u5CB1\u5CB3\u533A",
    370921: "\u5B81\u9633\u53BF",
    370923: "\u4E1C\u5E73\u53BF",
    370982: "\u65B0\u6CF0\u5E02",
    370983: "\u80A5\u57CE\u5E02"
  },
  371e3: {
    371001: "\u5E02\u8F96\u533A",
    371002: "\u73AF\u7FE0\u533A",
    371003: "\u6587\u767B\u533A",
    371071: "\u5A01\u6D77\u706B\u70AC\u9AD8\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    371072: "\u5A01\u6D77\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    371073: "\u5A01\u6D77\u4E34\u6E2F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    371082: "\u8363\u6210\u5E02",
    371083: "\u4E73\u5C71\u5E02"
  },
  371100: {
    371101: "\u5E02\u8F96\u533A",
    371102: "\u4E1C\u6E2F\u533A",
    371103: "\u5C9A\u5C71\u533A",
    371121: "\u4E94\u83B2\u53BF",
    371122: "\u8392\u53BF",
    371171: "\u65E5\u7167\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
  },
  371300: {
    371301: "\u5E02\u8F96\u533A",
    371302: "\u5170\u5C71\u533A",
    371311: "\u7F57\u5E84\u533A",
    371312: "\u6CB3\u4E1C\u533A",
    371321: "\u6C82\u5357\u53BF",
    371322: "\u90EF\u57CE\u53BF",
    371323: "\u6C82\u6C34\u53BF",
    371324: "\u5170\u9675\u53BF",
    371325: "\u8D39\u53BF",
    371326: "\u5E73\u9091\u53BF",
    371327: "\u8392\u5357\u53BF",
    371328: "\u8499\u9634\u53BF",
    371329: "\u4E34\u6CAD\u53BF",
    371371: "\u4E34\u6C82\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    371372: "\u4E34\u6C82\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    371373: "\u4E34\u6C82\u4E34\u6E2F\u7ECF\u6D4E\u5F00\u53D1\u533A"
  },
  371400: {
    371401: "\u5E02\u8F96\u533A",
    371402: "\u5FB7\u57CE\u533A",
    371403: "\u9675\u57CE\u533A",
    371422: "\u5B81\u6D25\u53BF",
    371423: "\u5E86\u4E91\u53BF",
    371424: "\u4E34\u9091\u53BF",
    371425: "\u9F50\u6CB3\u53BF",
    371426: "\u5E73\u539F\u53BF",
    371427: "\u590F\u6D25\u53BF",
    371428: "\u6B66\u57CE\u53BF",
    371471: "\u5FB7\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    371472: "\u5FB7\u5DDE\u8FD0\u6CB3\u7ECF\u6D4E\u5F00\u53D1\u533A",
    371481: "\u4E50\u9675\u5E02",
    371482: "\u79B9\u57CE\u5E02"
  },
  371500: {
    371501: "\u5E02\u8F96\u533A",
    371502: "\u4E1C\u660C\u5E9C\u533A",
    371503: "\u830C\u5E73\u533A",
    371521: "\u9633\u8C37\u53BF",
    371522: "\u8398\u53BF",
    371524: "\u4E1C\u963F\u53BF",
    371525: "\u51A0\u53BF",
    371526: "\u9AD8\u5510\u53BF",
    371581: "\u4E34\u6E05\u5E02"
  },
  371600: {
    371601: "\u5E02\u8F96\u533A",
    371602: "\u6EE8\u57CE\u533A",
    371603: "\u6CBE\u5316\u533A",
    371621: "\u60E0\u6C11\u53BF",
    371622: "\u9633\u4FE1\u53BF",
    371623: "\u65E0\u68E3\u53BF",
    371625: "\u535A\u5174\u53BF",
    371681: "\u90B9\u5E73\u5E02"
  },
  371700: {
    371701: "\u5E02\u8F96\u533A",
    371702: "\u7261\u4E39\u533A",
    371703: "\u5B9A\u9676\u533A",
    371721: "\u66F9\u53BF",
    371722: "\u5355\u53BF",
    371723: "\u6210\u6B66\u53BF",
    371724: "\u5DE8\u91CE\u53BF",
    371725: "\u90D3\u57CE\u53BF",
    371726: "\u9104\u57CE\u53BF",
    371728: "\u4E1C\u660E\u53BF",
    371771: "\u83CF\u6CFD\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    371772: "\u83CF\u6CFD\u9AD8\u65B0\u6280\u672F\u5F00\u53D1\u533A"
  },
  41e4: {
    410100: "\u90D1\u5DDE\u5E02",
    410200: "\u5F00\u5C01\u5E02",
    410300: "\u6D1B\u9633\u5E02",
    410400: "\u5E73\u9876\u5C71\u5E02",
    410500: "\u5B89\u9633\u5E02",
    410600: "\u9E64\u58C1\u5E02",
    410700: "\u65B0\u4E61\u5E02",
    410800: "\u7126\u4F5C\u5E02",
    410900: "\u6FEE\u9633\u5E02",
    411e3: "\u8BB8\u660C\u5E02",
    411100: "\u6F2F\u6CB3\u5E02",
    411200: "\u4E09\u95E8\u5CE1\u5E02",
    411300: "\u5357\u9633\u5E02",
    411400: "\u5546\u4E18\u5E02",
    411500: "\u4FE1\u9633\u5E02",
    411600: "\u5468\u53E3\u5E02",
    411700: "\u9A7B\u9A6C\u5E97\u5E02",
    419e3: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212"
  },
  410100: {
    410101: "\u5E02\u8F96\u533A",
    410102: "\u4E2D\u539F\u533A",
    410103: "\u4E8C\u4E03\u533A",
    410104: "\u7BA1\u57CE\u56DE\u65CF\u533A",
    410105: "\u91D1\u6C34\u533A",
    410106: "\u4E0A\u8857\u533A",
    410108: "\u60E0\u6D4E\u533A",
    410122: "\u4E2D\u725F\u53BF",
    410171: "\u90D1\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    410172: "\u90D1\u5DDE\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    410173: "\u90D1\u5DDE\u822A\u7A7A\u6E2F\u7ECF\u6D4E\u7EFC\u5408\u5B9E\u9A8C\u533A",
    410181: "\u5DE9\u4E49\u5E02",
    410182: "\u8365\u9633\u5E02",
    410183: "\u65B0\u5BC6\u5E02",
    410184: "\u65B0\u90D1\u5E02",
    410185: "\u767B\u5C01\u5E02"
  },
  410200: {
    410201: "\u5E02\u8F96\u533A",
    410202: "\u9F99\u4EAD\u533A",
    410203: "\u987A\u6CB3\u56DE\u65CF\u533A",
    410204: "\u9F13\u697C\u533A",
    410205: "\u79B9\u738B\u53F0\u533A",
    410212: "\u7965\u7B26\u533A",
    410221: "\u675E\u53BF",
    410222: "\u901A\u8BB8\u53BF",
    410223: "\u5C09\u6C0F\u53BF",
    410225: "\u5170\u8003\u53BF"
  },
  410300: {
    410301: "\u5E02\u8F96\u533A",
    410302: "\u8001\u57CE\u533A",
    410303: "\u897F\u5DE5\u533A",
    410304: "\u700D\u6CB3\u56DE\u65CF\u533A",
    410305: "\u6DA7\u897F\u533A",
    410306: "\u5409\u5229\u533A",
    410311: "\u6D1B\u9F99\u533A",
    410322: "\u5B5F\u6D25\u53BF",
    410323: "\u65B0\u5B89\u53BF",
    410324: "\u683E\u5DDD\u53BF",
    410325: "\u5D69\u53BF",
    410326: "\u6C5D\u9633\u53BF",
    410327: "\u5B9C\u9633\u53BF",
    410328: "\u6D1B\u5B81\u53BF",
    410329: "\u4F0A\u5DDD\u53BF",
    410371: "\u6D1B\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    410381: "\u5043\u5E08\u5E02"
  },
  410400: {
    410401: "\u5E02\u8F96\u533A",
    410402: "\u65B0\u534E\u533A",
    410403: "\u536B\u4E1C\u533A",
    410404: "\u77F3\u9F99\u533A",
    410411: "\u6E5B\u6CB3\u533A",
    410421: "\u5B9D\u4E30\u53BF",
    410422: "\u53F6\u53BF",
    410423: "\u9C81\u5C71\u53BF",
    410425: "\u90CF\u53BF",
    410471: "\u5E73\u9876\u5C71\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    410472: "\u5E73\u9876\u5C71\u5E02\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A",
    410481: "\u821E\u94A2\u5E02",
    410482: "\u6C5D\u5DDE\u5E02"
  },
  410500: {
    410501: "\u5E02\u8F96\u533A",
    410502: "\u6587\u5CF0\u533A",
    410503: "\u5317\u5173\u533A",
    410505: "\u6BB7\u90FD\u533A",
    410506: "\u9F99\u5B89\u533A",
    410522: "\u5B89\u9633\u53BF",
    410523: "\u6C64\u9634\u53BF",
    410526: "\u6ED1\u53BF",
    410527: "\u5185\u9EC4\u53BF",
    410571: "\u5B89\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    410581: "\u6797\u5DDE\u5E02"
  },
  410600: {
    410601: "\u5E02\u8F96\u533A",
    410602: "\u9E64\u5C71\u533A",
    410603: "\u5C71\u57CE\u533A",
    410611: "\u6DC7\u6EE8\u533A",
    410621: "\u6D5A\u53BF",
    410622: "\u6DC7\u53BF",
    410671: "\u9E64\u58C1\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
  },
  410700: {
    410701: "\u5E02\u8F96\u533A",
    410702: "\u7EA2\u65D7\u533A",
    410703: "\u536B\u6EE8\u533A",
    410704: "\u51E4\u6CC9\u533A",
    410711: "\u7267\u91CE\u533A",
    410721: "\u65B0\u4E61\u53BF",
    410724: "\u83B7\u5609\u53BF",
    410725: "\u539F\u9633\u53BF",
    410726: "\u5EF6\u6D25\u53BF",
    410727: "\u5C01\u4E18\u53BF",
    410771: "\u65B0\u4E61\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    410772: "\u65B0\u4E61\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    410773: "\u65B0\u4E61\u5E02\u5E73\u539F\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A",
    410781: "\u536B\u8F89\u5E02",
    410782: "\u8F89\u53BF\u5E02",
    410783: "\u957F\u57A3\u5E02"
  },
  410800: {
    410801: "\u5E02\u8F96\u533A",
    410802: "\u89E3\u653E\u533A",
    410803: "\u4E2D\u7AD9\u533A",
    410804: "\u9A6C\u6751\u533A",
    410811: "\u5C71\u9633\u533A",
    410821: "\u4FEE\u6B66\u53BF",
    410822: "\u535A\u7231\u53BF",
    410823: "\u6B66\u965F\u53BF",
    410825: "\u6E29\u53BF",
    410871: "\u7126\u4F5C\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A",
    410882: "\u6C81\u9633\u5E02",
    410883: "\u5B5F\u5DDE\u5E02"
  },
  410900: {
    410901: "\u5E02\u8F96\u533A",
    410902: "\u534E\u9F99\u533A",
    410922: "\u6E05\u4E30\u53BF",
    410923: "\u5357\u4E50\u53BF",
    410926: "\u8303\u53BF",
    410927: "\u53F0\u524D\u53BF",
    410928: "\u6FEE\u9633\u53BF",
    410971: "\u6CB3\u5357\u6FEE\u9633\u5DE5\u4E1A\u56ED\u533A",
    410972: "\u6FEE\u9633\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
  },
  411e3: {
    411001: "\u5E02\u8F96\u533A",
    411002: "\u9B4F\u90FD\u533A",
    411003: "\u5EFA\u5B89\u533A",
    411024: "\u9122\u9675\u53BF",
    411025: "\u8944\u57CE\u53BF",
    411071: "\u8BB8\u660C\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    411081: "\u79B9\u5DDE\u5E02",
    411082: "\u957F\u845B\u5E02"
  },
  411100: {
    411101: "\u5E02\u8F96\u533A",
    411102: "\u6E90\u6C47\u533A",
    411103: "\u90FE\u57CE\u533A",
    411104: "\u53EC\u9675\u533A",
    411121: "\u821E\u9633\u53BF",
    411122: "\u4E34\u988D\u53BF",
    411171: "\u6F2F\u6CB3\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
  },
  411200: {
    411201: "\u5E02\u8F96\u533A",
    411202: "\u6E56\u6EE8\u533A",
    411203: "\u9655\u5DDE\u533A",
    411221: "\u6E11\u6C60\u53BF",
    411224: "\u5362\u6C0F\u53BF",
    411271: "\u6CB3\u5357\u4E09\u95E8\u5CE1\u7ECF\u6D4E\u5F00\u53D1\u533A",
    411281: "\u4E49\u9A6C\u5E02",
    411282: "\u7075\u5B9D\u5E02"
  },
  411300: {
    411301: "\u5E02\u8F96\u533A",
    411302: "\u5B9B\u57CE\u533A",
    411303: "\u5367\u9F99\u533A",
    411321: "\u5357\u53EC\u53BF",
    411322: "\u65B9\u57CE\u53BF",
    411323: "\u897F\u5CE1\u53BF",
    411324: "\u9547\u5E73\u53BF",
    411325: "\u5185\u4E61\u53BF",
    411326: "\u6DC5\u5DDD\u53BF",
    411327: "\u793E\u65D7\u53BF",
    411328: "\u5510\u6CB3\u53BF",
    411329: "\u65B0\u91CE\u53BF",
    411330: "\u6850\u67CF\u53BF",
    411371: "\u5357\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A",
    411372: "\u5357\u9633\u5E02\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A",
    411381: "\u9093\u5DDE\u5E02"
  },
  411400: {
    411401: "\u5E02\u8F96\u533A",
    411402: "\u6881\u56ED\u533A",
    411403: "\u7762\u9633\u533A",
    411421: "\u6C11\u6743\u53BF",
    411422: "\u7762\u53BF",
    411423: "\u5B81\u9675\u53BF",
    411424: "\u67D8\u57CE\u53BF",
    411425: "\u865E\u57CE\u53BF",
    411426: "\u590F\u9091\u53BF",
    411471: "\u8C6B\u4E1C\u7EFC\u5408\u7269\u6D41\u4EA7\u4E1A\u805A\u96C6\u533A",
    411472: "\u6CB3\u5357\u5546\u4E18\u7ECF\u6D4E\u5F00\u53D1\u533A",
    411481: "\u6C38\u57CE\u5E02"
  },
  411500: {
    411501: "\u5E02\u8F96\u533A",
    411502: "\u6D49\u6CB3\u533A",
    411503: "\u5E73\u6865\u533A",
    411521: "\u7F57\u5C71\u53BF",
    411522: "\u5149\u5C71\u53BF",
    411523: "\u65B0\u53BF",
    411524: "\u5546\u57CE\u53BF",
    411525: "\u56FA\u59CB\u53BF",
    411526: "\u6F62\u5DDD\u53BF",
    411527: "\u6DEE\u6EE8\u53BF",
    411528: "\u606F\u53BF",
    411571: "\u4FE1\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
  },
  411600: {
    411601: "\u5E02\u8F96\u533A",
    411602: "\u5DDD\u6C47\u533A",
    411603: "\u6DEE\u9633\u533A",
    411621: "\u6276\u6C9F\u53BF",
    411622: "\u897F\u534E\u53BF",
    411623: "\u5546\u6C34\u53BF",
    411624: "\u6C88\u4E18\u53BF",
    411625: "\u90F8\u57CE\u53BF",
    411627: "\u592A\u5EB7\u53BF",
    411628: "\u9E7F\u9091\u53BF",
    411671: "\u6CB3\u5357\u5468\u53E3\u7ECF\u6D4E\u5F00\u53D1\u533A",
    411681: "\u9879\u57CE\u5E02"
  },
  411700: {
    411701: "\u5E02\u8F96\u533A",
    411702: "\u9A7F\u57CE\u533A",
    411721: "\u897F\u5E73\u53BF",
    411722: "\u4E0A\u8521\u53BF",
    411723: "\u5E73\u8206\u53BF",
    411724: "\u6B63\u9633\u53BF",
    411725: "\u786E\u5C71\u53BF",
    411726: "\u6CCC\u9633\u53BF",
    411727: "\u6C5D\u5357\u53BF",
    411728: "\u9042\u5E73\u53BF",
    411729: "\u65B0\u8521\u53BF",
    411771: "\u6CB3\u5357\u9A7B\u9A6C\u5E97\u7ECF\u6D4E\u5F00\u53D1\u533A"
  },
  419e3: {
    419001: "\u6D4E\u6E90\u5E02"
  },
  42e4: {
    420100: "\u6B66\u6C49\u5E02",
    420200: "\u9EC4\u77F3\u5E02",
    420300: "\u5341\u5830\u5E02",
    420500: "\u5B9C\u660C\u5E02",
    420600: "\u8944\u9633\u5E02",
    420700: "\u9102\u5DDE\u5E02",
    420800: "\u8346\u95E8\u5E02",
    420900: "\u5B5D\u611F\u5E02",
    421e3: "\u8346\u5DDE\u5E02",
    421100: "\u9EC4\u5188\u5E02",
    421200: "\u54B8\u5B81\u5E02",
    421300: "\u968F\u5DDE\u5E02",
    422800: "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
    429e3: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212"
  },
  420100: {
    420101: "\u5E02\u8F96\u533A",
    420102: "\u6C5F\u5CB8\u533A",
    420103: "\u6C5F\u6C49\u533A",
    420104: "\u785A\u53E3\u533A",
    420105: "\u6C49\u9633\u533A",
    420106: "\u6B66\u660C\u533A",
    420107: "\u9752\u5C71\u533A",
    420111: "\u6D2A\u5C71\u533A",
    420112: "\u4E1C\u897F\u6E56\u533A",
    420113: "\u6C49\u5357\u533A",
    420114: "\u8521\u7538\u533A",
    420115: "\u6C5F\u590F\u533A",
    420116: "\u9EC4\u9642\u533A",
    420117: "\u65B0\u6D32\u533A"
  },
  420200: {
    420201: "\u5E02\u8F96\u533A",
    420202: "\u9EC4\u77F3\u6E2F\u533A",
    420203: "\u897F\u585E\u5C71\u533A",
    420204: "\u4E0B\u9646\u533A",
    420205: "\u94C1\u5C71\u533A",
    420222: "\u9633\u65B0\u53BF",
    420281: "\u5927\u51B6\u5E02"
  },
  420300: {
    420301: "\u5E02\u8F96\u533A",
    420302: "\u8305\u7BAD\u533A",
    420303: "\u5F20\u6E7E\u533A",
    420304: "\u90E7\u9633\u533A",
    420322: "\u90E7\u897F\u53BF",
    420323: "\u7AF9\u5C71\u53BF",
    420324: "\u7AF9\u6EAA\u53BF",
    420325: "\u623F\u53BF",
    420381: "\u4E39\u6C5F\u53E3\u5E02"
  },
  420500: {
    420501: "\u5E02\u8F96\u533A",
    420502: "\u897F\u9675\u533A",
    420503: "\u4F0D\u5BB6\u5C97\u533A",
    420504: "\u70B9\u519B\u533A",
    420505: "\u7307\u4EAD\u533A",
    420506: "\u5937\u9675\u533A",
    420525: "\u8FDC\u5B89\u53BF",
    420526: "\u5174\u5C71\u53BF",
    420527: "\u79ED\u5F52\u53BF",
    420528: "\u957F\u9633\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
    420529: "\u4E94\u5CF0\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
    420581: "\u5B9C\u90FD\u5E02",
    420582: "\u5F53\u9633\u5E02",
    420583: "\u679D\u6C5F\u5E02"
  },
  420600: {
    420601: "\u5E02\u8F96\u533A",
    420602: "\u8944\u57CE\u533A",
    420606: "\u6A0A\u57CE\u533A",
    420607: "\u8944\u5DDE\u533A",
    420624: "\u5357\u6F33\u53BF",
    420625: "\u8C37\u57CE\u53BF",
    420626: "\u4FDD\u5EB7\u53BF",
    420682: "\u8001\u6CB3\u53E3\u5E02",
    420683: "\u67A3\u9633\u5E02",
    420684: "\u5B9C\u57CE\u5E02"
  },
  420700: {
    420701: "\u5E02\u8F96\u533A",
    420702: "\u6881\u5B50\u6E56\u533A",
    420703: "\u534E\u5BB9\u533A",
    420704: "\u9102\u57CE\u533A"
  },
  420800: {
    420801: "\u5E02\u8F96\u533A",
    420802: "\u4E1C\u5B9D\u533A",
    420804: "\u6387\u5200\u533A",
    420822: "\u6C99\u6D0B\u53BF",
    420881: "\u949F\u7965\u5E02",
    420882: "\u4EAC\u5C71\u5E02"
  },
  420900: {
    420901: "\u5E02\u8F96\u533A",
    420902: "\u5B5D\u5357\u533A",
    420921: "\u5B5D\u660C\u53BF",
    420922: "\u5927\u609F\u53BF",
    420923: "\u4E91\u68A6\u53BF",
    420981: "\u5E94\u57CE\u5E02",
    420982: "\u5B89\u9646\u5E02",
    420984: "\u6C49\u5DDD\u5E02"
  },
  421e3: {
    421001: "\u5E02\u8F96\u533A",
    421002: "\u6C99\u5E02\u533A",
    421003: "\u8346\u5DDE\u533A",
    421022: "\u516C\u5B89\u53BF",
    421023: "\u76D1\u5229\u53BF",
    421024: "\u6C5F\u9675\u53BF",
    421071: "\u8346\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    421081: "\u77F3\u9996\u5E02",
    421083: "\u6D2A\u6E56\u5E02",
    421087: "\u677E\u6ECB\u5E02"
  },
  421100: {
    421101: "\u5E02\u8F96\u533A",
    421102: "\u9EC4\u5DDE\u533A",
    421121: "\u56E2\u98CE\u53BF",
    421122: "\u7EA2\u5B89\u53BF",
    421123: "\u7F57\u7530\u53BF",
    421124: "\u82F1\u5C71\u53BF",
    421125: "\u6D60\u6C34\u53BF",
    421126: "\u8572\u6625\u53BF",
    421127: "\u9EC4\u6885\u53BF",
    421171: "\u9F99\u611F\u6E56\u7BA1\u7406\u533A",
    421181: "\u9EBB\u57CE\u5E02",
    421182: "\u6B66\u7A74\u5E02"
  },
  421200: {
    421201: "\u5E02\u8F96\u533A",
    421202: "\u54B8\u5B89\u533A",
    421221: "\u5609\u9C7C\u53BF",
    421222: "\u901A\u57CE\u53BF",
    421223: "\u5D07\u9633\u53BF",
    421224: "\u901A\u5C71\u53BF",
    421281: "\u8D64\u58C1\u5E02"
  },
  421300: {
    421301: "\u5E02\u8F96\u533A",
    421303: "\u66FE\u90FD\u533A",
    421321: "\u968F\u53BF",
    421381: "\u5E7F\u6C34\u5E02"
  },
  422800: {
    422801: "\u6069\u65BD\u5E02",
    422802: "\u5229\u5DDD\u5E02",
    422822: "\u5EFA\u59CB\u53BF",
    422823: "\u5DF4\u4E1C\u53BF",
    422825: "\u5BA3\u6069\u53BF",
    422826: "\u54B8\u4E30\u53BF",
    422827: "\u6765\u51E4\u53BF",
    422828: "\u9E64\u5CF0\u53BF"
  },
  429e3: {
    429004: "\u4ED9\u6843\u5E02",
    429005: "\u6F5C\u6C5F\u5E02",
    429006: "\u5929\u95E8\u5E02",
    429021: "\u795E\u519C\u67B6\u6797\u533A"
  },
  43e4: {
    430100: "\u957F\u6C99\u5E02",
    430200: "\u682A\u6D32\u5E02",
    430300: "\u6E58\u6F6D\u5E02",
    430400: "\u8861\u9633\u5E02",
    430500: "\u90B5\u9633\u5E02",
    430600: "\u5CB3\u9633\u5E02",
    430700: "\u5E38\u5FB7\u5E02",
    430800: "\u5F20\u5BB6\u754C\u5E02",
    430900: "\u76CA\u9633\u5E02",
    431e3: "\u90F4\u5DDE\u5E02",
    431100: "\u6C38\u5DDE\u5E02",
    431200: "\u6000\u5316\u5E02",
    431300: "\u5A04\u5E95\u5E02",
    433100: "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
  },
  430100: {
    430101: "\u5E02\u8F96\u533A",
    430102: "\u8299\u84C9\u533A",
    430103: "\u5929\u5FC3\u533A",
    430104: "\u5CB3\u9E93\u533A",
    430105: "\u5F00\u798F\u533A",
    430111: "\u96E8\u82B1\u533A",
    430112: "\u671B\u57CE\u533A",
    430121: "\u957F\u6C99\u53BF",
    430181: "\u6D4F\u9633\u5E02",
    430182: "\u5B81\u4E61\u5E02"
  },
  430200: {
    430201: "\u5E02\u8F96\u533A",
    430202: "\u8377\u5858\u533A",
    430203: "\u82A6\u6DDE\u533A",
    430204: "\u77F3\u5CF0\u533A",
    430211: "\u5929\u5143\u533A",
    430212: "\u6E0C\u53E3\u533A",
    430223: "\u6538\u53BF",
    430224: "\u8336\u9675\u53BF",
    430225: "\u708E\u9675\u53BF",
    430271: "\u4E91\u9F99\u793A\u8303\u533A",
    430281: "\u91B4\u9675\u5E02"
  },
  430300: {
    430301: "\u5E02\u8F96\u533A",
    430302: "\u96E8\u6E56\u533A",
    430304: "\u5CB3\u5858\u533A",
    430321: "\u6E58\u6F6D\u53BF",
    430371: "\u6E56\u5357\u6E58\u6F6D\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A",
    430372: "\u6E58\u6F6D\u662D\u5C71\u793A\u8303\u533A",
    430373: "\u6E58\u6F6D\u4E5D\u534E\u793A\u8303\u533A",
    430381: "\u6E58\u4E61\u5E02",
    430382: "\u97F6\u5C71\u5E02"
  },
  430400: {
    430401: "\u5E02\u8F96\u533A",
    430405: "\u73E0\u6656\u533A",
    430406: "\u96C1\u5CF0\u533A",
    430407: "\u77F3\u9F13\u533A",
    430408: "\u84B8\u6E58\u533A",
    430412: "\u5357\u5CB3\u533A",
    430421: "\u8861\u9633\u53BF",
    430422: "\u8861\u5357\u53BF",
    430423: "\u8861\u5C71\u53BF",
    430424: "\u8861\u4E1C\u53BF",
    430426: "\u7941\u4E1C\u53BF",
    430471: "\u8861\u9633\u7EFC\u5408\u4FDD\u7A0E\u533A",
    430472: "\u6E56\u5357\u8861\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A",
    430473: "\u6E56\u5357\u8861\u9633\u677E\u6728\u7ECF\u6D4E\u5F00\u53D1\u533A",
    430481: "\u8012\u9633\u5E02",
    430482: "\u5E38\u5B81\u5E02"
  },
  430500: {
    430501: "\u5E02\u8F96\u533A",
    430502: "\u53CC\u6E05\u533A",
    430503: "\u5927\u7965\u533A",
    430511: "\u5317\u5854\u533A",
    430522: "\u65B0\u90B5\u53BF",
    430523: "\u90B5\u9633\u53BF",
    430524: "\u9686\u56DE\u53BF",
    430525: "\u6D1E\u53E3\u53BF",
    430527: "\u7EE5\u5B81\u53BF",
    430528: "\u65B0\u5B81\u53BF",
    430529: "\u57CE\u6B65\u82D7\u65CF\u81EA\u6CBB\u53BF",
    430581: "\u6B66\u5188\u5E02",
    430582: "\u90B5\u4E1C\u5E02"
  },
  430600: {
    430601: "\u5E02\u8F96\u533A",
    430602: "\u5CB3\u9633\u697C\u533A",
    430603: "\u4E91\u6EAA\u533A",
    430611: "\u541B\u5C71\u533A",
    430621: "\u5CB3\u9633\u53BF",
    430623: "\u534E\u5BB9\u53BF",
    430624: "\u6E58\u9634\u53BF",
    430626: "\u5E73\u6C5F\u53BF",
    430671: "\u5CB3\u9633\u5E02\u5C48\u539F\u7BA1\u7406\u533A",
    430681: "\u6C68\u7F57\u5E02",
    430682: "\u4E34\u6E58\u5E02"
  },
  430700: {
    430701: "\u5E02\u8F96\u533A",
    430702: "\u6B66\u9675\u533A",
    430703: "\u9F0E\u57CE\u533A",
    430721: "\u5B89\u4E61\u53BF",
    430722: "\u6C49\u5BFF\u53BF",
    430723: "\u6FA7\u53BF",
    430724: "\u4E34\u6FA7\u53BF",
    430725: "\u6843\u6E90\u53BF",
    430726: "\u77F3\u95E8\u53BF",
    430771: "\u5E38\u5FB7\u5E02\u897F\u6D1E\u5EAD\u7BA1\u7406\u533A",
    430781: "\u6D25\u5E02\u5E02"
  },
  430800: {
    430801: "\u5E02\u8F96\u533A",
    430802: "\u6C38\u5B9A\u533A",
    430811: "\u6B66\u9675\u6E90\u533A",
    430821: "\u6148\u5229\u53BF",
    430822: "\u6851\u690D\u53BF"
  },
  430900: {
    430901: "\u5E02\u8F96\u533A",
    430902: "\u8D44\u9633\u533A",
    430903: "\u8D6B\u5C71\u533A",
    430921: "\u5357\u53BF",
    430922: "\u6843\u6C5F\u53BF",
    430923: "\u5B89\u5316\u53BF",
    430971: "\u76CA\u9633\u5E02\u5927\u901A\u6E56\u7BA1\u7406\u533A",
    430972: "\u6E56\u5357\u76CA\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A",
    430981: "\u6C85\u6C5F\u5E02"
  },
  431e3: {
    431001: "\u5E02\u8F96\u533A",
    431002: "\u5317\u6E56\u533A",
    431003: "\u82CF\u4ED9\u533A",
    431021: "\u6842\u9633\u53BF",
    431022: "\u5B9C\u7AE0\u53BF",
    431023: "\u6C38\u5174\u53BF",
    431024: "\u5609\u79BE\u53BF",
    431025: "\u4E34\u6B66\u53BF",
    431026: "\u6C5D\u57CE\u53BF",
    431027: "\u6842\u4E1C\u53BF",
    431028: "\u5B89\u4EC1\u53BF",
    431081: "\u8D44\u5174\u5E02"
  },
  431100: {
    431101: "\u5E02\u8F96\u533A",
    431102: "\u96F6\u9675\u533A",
    431103: "\u51B7\u6C34\u6EE9\u533A",
    431121: "\u7941\u9633\u53BF",
    431122: "\u4E1C\u5B89\u53BF",
    431123: "\u53CC\u724C\u53BF",
    431124: "\u9053\u53BF",
    431125: "\u6C5F\u6C38\u53BF",
    431126: "\u5B81\u8FDC\u53BF",
    431127: "\u84DD\u5C71\u53BF",
    431128: "\u65B0\u7530\u53BF",
    431129: "\u6C5F\u534E\u7476\u65CF\u81EA\u6CBB\u53BF",
    431171: "\u6C38\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    431172: "\u6C38\u5DDE\u5E02\u91D1\u6D1E\u7BA1\u7406\u533A",
    431173: "\u6C38\u5DDE\u5E02\u56DE\u9F99\u5729\u7BA1\u7406\u533A"
  },
  431200: {
    431201: "\u5E02\u8F96\u533A",
    431202: "\u9E64\u57CE\u533A",
    431221: "\u4E2D\u65B9\u53BF",
    431222: "\u6C85\u9675\u53BF",
    431223: "\u8FB0\u6EAA\u53BF",
    431224: "\u6E86\u6D66\u53BF",
    431225: "\u4F1A\u540C\u53BF",
    431226: "\u9EBB\u9633\u82D7\u65CF\u81EA\u6CBB\u53BF",
    431227: "\u65B0\u6643\u4F97\u65CF\u81EA\u6CBB\u53BF",
    431228: "\u82B7\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF",
    431229: "\u9756\u5DDE\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u53BF",
    431230: "\u901A\u9053\u4F97\u65CF\u81EA\u6CBB\u53BF",
    431271: "\u6000\u5316\u5E02\u6D2A\u6C5F\u7BA1\u7406\u533A",
    431281: "\u6D2A\u6C5F\u5E02"
  },
  431300: {
    431301: "\u5E02\u8F96\u533A",
    431302: "\u5A04\u661F\u533A",
    431321: "\u53CC\u5CF0\u53BF",
    431322: "\u65B0\u5316\u53BF",
    431381: "\u51B7\u6C34\u6C5F\u5E02",
    431382: "\u6D9F\u6E90\u5E02"
  },
  433100: {
    433101: "\u5409\u9996\u5E02",
    433122: "\u6CF8\u6EAA\u53BF",
    433123: "\u51E4\u51F0\u53BF",
    433124: "\u82B1\u57A3\u53BF",
    433125: "\u4FDD\u9756\u53BF",
    433126: "\u53E4\u4E08\u53BF",
    433127: "\u6C38\u987A\u53BF",
    433130: "\u9F99\u5C71\u53BF",
    433173: "\u6E56\u5357\u6C38\u987A\u7ECF\u6D4E\u5F00\u53D1\u533A"
  },
  44e4: {
    440100: "\u5E7F\u5DDE\u5E02",
    440200: "\u97F6\u5173\u5E02",
    440300: "\u6DF1\u5733\u5E02",
    440400: "\u73E0\u6D77\u5E02",
    440500: "\u6C55\u5934\u5E02",
    440600: "\u4F5B\u5C71\u5E02",
    440700: "\u6C5F\u95E8\u5E02",
    440800: "\u6E5B\u6C5F\u5E02",
    440900: "\u8302\u540D\u5E02",
    441200: "\u8087\u5E86\u5E02",
    441300: "\u60E0\u5DDE\u5E02",
    441400: "\u6885\u5DDE\u5E02",
    441500: "\u6C55\u5C3E\u5E02",
    441600: "\u6CB3\u6E90\u5E02",
    441700: "\u9633\u6C5F\u5E02",
    441800: "\u6E05\u8FDC\u5E02",
    441900: "\u4E1C\u839E\u5E02",
    442e3: "\u4E2D\u5C71\u5E02",
    445100: "\u6F6E\u5DDE\u5E02",
    445200: "\u63ED\u9633\u5E02",
    445300: "\u4E91\u6D6E\u5E02"
  },
  440100: {
    440101: "\u5E02\u8F96\u533A",
    440103: "\u8354\u6E7E\u533A",
    440104: "\u8D8A\u79C0\u533A",
    440105: "\u6D77\u73E0\u533A",
    440106: "\u5929\u6CB3\u533A",
    440111: "\u767D\u4E91\u533A",
    440112: "\u9EC4\u57D4\u533A",
    440113: "\u756A\u79BA\u533A",
    440114: "\u82B1\u90FD\u533A",
    440115: "\u5357\u6C99\u533A",
    440117: "\u4ECE\u5316\u533A",
    440118: "\u589E\u57CE\u533A"
  },
  440200: {
    440201: "\u5E02\u8F96\u533A",
    440203: "\u6B66\u6C5F\u533A",
    440204: "\u6D48\u6C5F\u533A",
    440205: "\u66F2\u6C5F\u533A",
    440222: "\u59CB\u5174\u53BF",
    440224: "\u4EC1\u5316\u53BF",
    440229: "\u7FC1\u6E90\u53BF",
    440232: "\u4E73\u6E90\u7476\u65CF\u81EA\u6CBB\u53BF",
    440233: "\u65B0\u4E30\u53BF",
    440281: "\u4E50\u660C\u5E02",
    440282: "\u5357\u96C4\u5E02"
  },
  440300: {
    440301: "\u5E02\u8F96\u533A",
    440303: "\u7F57\u6E56\u533A",
    440304: "\u798F\u7530\u533A",
    440305: "\u5357\u5C71\u533A",
    440306: "\u5B9D\u5B89\u533A",
    440307: "\u9F99\u5C97\u533A",
    440308: "\u76D0\u7530\u533A",
    440309: "\u9F99\u534E\u533A",
    440310: "\u576A\u5C71\u533A",
    440311: "\u5149\u660E\u533A"
  },
  440400: {
    440401: "\u5E02\u8F96\u533A",
    440402: "\u9999\u6D32\u533A",
    440403: "\u6597\u95E8\u533A",
    440404: "\u91D1\u6E7E\u533A"
  },
  440500: {
    440501: "\u5E02\u8F96\u533A",
    440507: "\u9F99\u6E56\u533A",
    440511: "\u91D1\u5E73\u533A",
    440512: "\u6FE0\u6C5F\u533A",
    440513: "\u6F6E\u9633\u533A",
    440514: "\u6F6E\u5357\u533A",
    440515: "\u6F84\u6D77\u533A",
    440523: "\u5357\u6FB3\u53BF"
  },
  440600: {
    440601: "\u5E02\u8F96\u533A",
    440604: "\u7985\u57CE\u533A",
    440605: "\u5357\u6D77\u533A",
    440606: "\u987A\u5FB7\u533A",
    440607: "\u4E09\u6C34\u533A",
    440608: "\u9AD8\u660E\u533A"
  },
  440700: {
    440701: "\u5E02\u8F96\u533A",
    440703: "\u84EC\u6C5F\u533A",
    440704: "\u6C5F\u6D77\u533A",
    440705: "\u65B0\u4F1A\u533A",
    440781: "\u53F0\u5C71\u5E02",
    440783: "\u5F00\u5E73\u5E02",
    440784: "\u9E64\u5C71\u5E02",
    440785: "\u6069\u5E73\u5E02"
  },
  440800: {
    440801: "\u5E02\u8F96\u533A",
    440802: "\u8D64\u574E\u533A",
    440803: "\u971E\u5C71\u533A",
    440804: "\u5761\u5934\u533A",
    440811: "\u9EBB\u7AE0\u533A",
    440823: "\u9042\u6EAA\u53BF",
    440825: "\u5F90\u95FB\u53BF",
    440881: "\u5EC9\u6C5F\u5E02",
    440882: "\u96F7\u5DDE\u5E02",
    440883: "\u5434\u5DDD\u5E02"
  },
  440900: {
    440901: "\u5E02\u8F96\u533A",
    440902: "\u8302\u5357\u533A",
    440904: "\u7535\u767D\u533A",
    440981: "\u9AD8\u5DDE\u5E02",
    440982: "\u5316\u5DDE\u5E02",
    440983: "\u4FE1\u5B9C\u5E02"
  },
  441200: {
    441201: "\u5E02\u8F96\u533A",
    441202: "\u7AEF\u5DDE\u533A",
    441203: "\u9F0E\u6E56\u533A",
    441204: "\u9AD8\u8981\u533A",
    441223: "\u5E7F\u5B81\u53BF",
    441224: "\u6000\u96C6\u53BF",
    441225: "\u5C01\u5F00\u53BF",
    441226: "\u5FB7\u5E86\u53BF",
    441284: "\u56DB\u4F1A\u5E02"
  },
  441300: {
    441301: "\u5E02\u8F96\u533A",
    441302: "\u60E0\u57CE\u533A",
    441303: "\u60E0\u9633\u533A",
    441322: "\u535A\u7F57\u53BF",
    441323: "\u60E0\u4E1C\u53BF",
    441324: "\u9F99\u95E8\u53BF"
  },
  441400: {
    441401: "\u5E02\u8F96\u533A",
    441402: "\u6885\u6C5F\u533A",
    441403: "\u6885\u53BF\u533A",
    441422: "\u5927\u57D4\u53BF",
    441423: "\u4E30\u987A\u53BF",
    441424: "\u4E94\u534E\u53BF",
    441426: "\u5E73\u8FDC\u53BF",
    441427: "\u8549\u5CAD\u53BF",
    441481: "\u5174\u5B81\u5E02"
  },
  441500: {
    441501: "\u5E02\u8F96\u533A",
    441502: "\u57CE\u533A",
    441521: "\u6D77\u4E30\u53BF",
    441523: "\u9646\u6CB3\u53BF",
    441581: "\u9646\u4E30\u5E02"
  },
  441600: {
    441601: "\u5E02\u8F96\u533A",
    441602: "\u6E90\u57CE\u533A",
    441621: "\u7D2B\u91D1\u53BF",
    441622: "\u9F99\u5DDD\u53BF",
    441623: "\u8FDE\u5E73\u53BF",
    441624: "\u548C\u5E73\u53BF",
    441625: "\u4E1C\u6E90\u53BF"
  },
  441700: {
    441701: "\u5E02\u8F96\u533A",
    441702: "\u6C5F\u57CE\u533A",
    441704: "\u9633\u4E1C\u533A",
    441721: "\u9633\u897F\u53BF",
    441781: "\u9633\u6625\u5E02"
  },
  441800: {
    441801: "\u5E02\u8F96\u533A",
    441802: "\u6E05\u57CE\u533A",
    441803: "\u6E05\u65B0\u533A",
    441821: "\u4F5B\u5188\u53BF",
    441823: "\u9633\u5C71\u53BF",
    441825: "\u8FDE\u5C71\u58EE\u65CF\u7476\u65CF\u81EA\u6CBB\u53BF",
    441826: "\u8FDE\u5357\u7476\u65CF\u81EA\u6CBB\u53BF",
    441881: "\u82F1\u5FB7\u5E02",
    441882: "\u8FDE\u5DDE\u5E02"
  },
  441900: {
    441900003: "\u4E1C\u57CE\u8857\u9053",
    441900004: "\u5357\u57CE\u8857\u9053",
    441900005: "\u4E07\u6C5F\u8857\u9053",
    441900006: "\u839E\u57CE\u8857\u9053",
    441900101: "\u77F3\u78A3\u9547",
    441900102: "\u77F3\u9F99\u9547",
    441900103: "\u8336\u5C71\u9547",
    441900104: "\u77F3\u6392\u9547",
    441900105: "\u4F01\u77F3\u9547",
    441900106: "\u6A2A\u6CA5\u9547",
    441900107: "\u6865\u5934\u9547",
    441900108: "\u8C22\u5C97\u9547",
    441900109: "\u4E1C\u5751\u9547",
    441900110: "\u5E38\u5E73\u9547",
    441900111: "\u5BEE\u6B65\u9547",
    441900112: "\u6A1F\u6728\u5934\u9547",
    441900113: "\u5927\u6717\u9547",
    441900114: "\u9EC4\u6C5F\u9547",
    441900115: "\u6E05\u6EAA\u9547",
    441900116: "\u5858\u53A6\u9547",
    441900117: "\u51E4\u5C97\u9547",
    441900118: "\u5927\u5CAD\u5C71\u9547",
    441900119: "\u957F\u5B89\u9547",
    441900121: "\u864E\u95E8\u9547",
    441900122: "\u539A\u8857\u9547",
    441900123: "\u6C99\u7530\u9547",
    441900124: "\u9053\u6ED8\u9547",
    441900125: "\u6D2A\u6885\u9547",
    441900126: "\u9EBB\u6D8C\u9547",
    441900127: "\u671B\u725B\u58A9\u9547",
    441900128: "\u4E2D\u5802\u9547",
    441900129: "\u9AD8\u57D7\u9547",
    441900401: "\u677E\u5C71\u6E56",
    441900402: "\u4E1C\u839E\u6E2F",
    441900403: "\u4E1C\u839E\u751F\u6001\u56ED"
  },
  442e3: {
    442000001: "\u77F3\u5C90\u8857\u9053",
    442000002: "\u4E1C\u533A\u8857\u9053",
    442000003: "\u4E2D\u5C71\u6E2F\u8857\u9053",
    442000004: "\u897F\u533A\u8857\u9053",
    442000005: "\u5357\u533A\u8857\u9053",
    442000006: "\u4E94\u6842\u5C71\u8857\u9053",
    442000100: "\u5C0F\u6984\u9547",
    442000101: "\u9EC4\u5703\u9547",
    442000102: "\u6C11\u4F17\u9547",
    442000103: "\u4E1C\u51E4\u9547",
    442000104: "\u4E1C\u5347\u9547",
    442000105: "\u53E4\u9547\u9547",
    442000106: "\u6C99\u6EAA\u9547",
    442000107: "\u5766\u6D32\u9547",
    442000108: "\u6E2F\u53E3\u9547",
    442000109: "\u4E09\u89D2\u9547",
    442000110: "\u6A2A\u680F\u9547",
    442000111: "\u5357\u5934\u9547",
    442000112: "\u961C\u6C99\u9547",
    442000113: "\u5357\u6717\u9547",
    442000114: "\u4E09\u4E61\u9547",
    442000115: "\u677F\u8299\u9547",
    442000116: "\u5927\u6D8C\u9547",
    442000117: "\u795E\u6E7E\u9547"
  },
  445100: {
    445101: "\u5E02\u8F96\u533A",
    445102: "\u6E58\u6865\u533A",
    445103: "\u6F6E\u5B89\u533A",
    445122: "\u9976\u5E73\u53BF"
  },
  445200: {
    445201: "\u5E02\u8F96\u533A",
    445202: "\u6995\u57CE\u533A",
    445203: "\u63ED\u4E1C\u533A",
    445222: "\u63ED\u897F\u53BF",
    445224: "\u60E0\u6765\u53BF",
    445281: "\u666E\u5B81\u5E02"
  },
  445300: {
    445301: "\u5E02\u8F96\u533A",
    445302: "\u4E91\u57CE\u533A",
    445303: "\u4E91\u5B89\u533A",
    445321: "\u65B0\u5174\u53BF",
    445322: "\u90C1\u5357\u53BF",
    445381: "\u7F57\u5B9A\u5E02"
  },
  45e4: {
    450100: "\u5357\u5B81\u5E02",
    450200: "\u67F3\u5DDE\u5E02",
    450300: "\u6842\u6797\u5E02",
    450400: "\u68A7\u5DDE\u5E02",
    450500: "\u5317\u6D77\u5E02",
    450600: "\u9632\u57CE\u6E2F\u5E02",
    450700: "\u94A6\u5DDE\u5E02",
    450800: "\u8D35\u6E2F\u5E02",
    450900: "\u7389\u6797\u5E02",
    451e3: "\u767E\u8272\u5E02",
    451100: "\u8D3A\u5DDE\u5E02",
    451200: "\u6CB3\u6C60\u5E02",
    451300: "\u6765\u5BBE\u5E02",
    451400: "\u5D07\u5DE6\u5E02"
  },
  450100: {
    450101: "\u5E02\u8F96\u533A",
    450102: "\u5174\u5B81\u533A",
    450103: "\u9752\u79C0\u533A",
    450105: "\u6C5F\u5357\u533A",
    450107: "\u897F\u4E61\u5858\u533A",
    450108: "\u826F\u5E86\u533A",
    450109: "\u9095\u5B81\u533A",
    450110: "\u6B66\u9E23\u533A",
    450123: "\u9686\u5B89\u53BF",
    450124: "\u9A6C\u5C71\u53BF",
    450125: "\u4E0A\u6797\u53BF",
    450126: "\u5BBE\u9633\u53BF",
    450127: "\u6A2A\u53BF"
  },
  450200: {
    450201: "\u5E02\u8F96\u533A",
    450202: "\u57CE\u4E2D\u533A",
    450203: "\u9C7C\u5CF0\u533A",
    450204: "\u67F3\u5357\u533A",
    450205: "\u67F3\u5317\u533A",
    450206: "\u67F3\u6C5F\u533A",
    450222: "\u67F3\u57CE\u53BF",
    450223: "\u9E7F\u5BE8\u53BF",
    450224: "\u878D\u5B89\u53BF",
    450225: "\u878D\u6C34\u82D7\u65CF\u81EA\u6CBB\u53BF",
    450226: "\u4E09\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF"
  },
  450300: {
    450301: "\u5E02\u8F96\u533A",
    450302: "\u79C0\u5CF0\u533A",
    450303: "\u53E0\u5F69\u533A",
    450304: "\u8C61\u5C71\u533A",
    450305: "\u4E03\u661F\u533A",
    450311: "\u96C1\u5C71\u533A",
    450312: "\u4E34\u6842\u533A",
    450321: "\u9633\u6714\u53BF",
    450323: "\u7075\u5DDD\u53BF",
    450324: "\u5168\u5DDE\u53BF",
    450325: "\u5174\u5B89\u53BF",
    450326: "\u6C38\u798F\u53BF",
    450327: "\u704C\u9633\u53BF",
    450328: "\u9F99\u80DC\u5404\u65CF\u81EA\u6CBB\u53BF",
    450329: "\u8D44\u6E90\u53BF",
    450330: "\u5E73\u4E50\u53BF",
    450332: "\u606D\u57CE\u7476\u65CF\u81EA\u6CBB\u53BF",
    450381: "\u8354\u6D66\u5E02"
  },
  450400: {
    450401: "\u5E02\u8F96\u533A",
    450403: "\u4E07\u79C0\u533A",
    450405: "\u957F\u6D32\u533A",
    450406: "\u9F99\u5729\u533A",
    450421: "\u82CD\u68A7\u53BF",
    450422: "\u85E4\u53BF",
    450423: "\u8499\u5C71\u53BF",
    450481: "\u5C91\u6EAA\u5E02"
  },
  450500: {
    450501: "\u5E02\u8F96\u533A",
    450502: "\u6D77\u57CE\u533A",
    450503: "\u94F6\u6D77\u533A",
    450512: "\u94C1\u5C71\u6E2F\u533A",
    450521: "\u5408\u6D66\u53BF"
  },
  450600: {
    450601: "\u5E02\u8F96\u533A",
    450602: "\u6E2F\u53E3\u533A",
    450603: "\u9632\u57CE\u533A",
    450621: "\u4E0A\u601D\u53BF",
    450681: "\u4E1C\u5174\u5E02"
  },
  450700: {
    450701: "\u5E02\u8F96\u533A",
    450702: "\u94A6\u5357\u533A",
    450703: "\u94A6\u5317\u533A",
    450721: "\u7075\u5C71\u53BF",
    450722: "\u6D66\u5317\u53BF"
  },
  450800: {
    450801: "\u5E02\u8F96\u533A",
    450802: "\u6E2F\u5317\u533A",
    450803: "\u6E2F\u5357\u533A",
    450804: "\u8983\u5858\u533A",
    450821: "\u5E73\u5357\u53BF",
    450881: "\u6842\u5E73\u5E02"
  },
  450900: {
    450901: "\u5E02\u8F96\u533A",
    450902: "\u7389\u5DDE\u533A",
    450903: "\u798F\u7EF5\u533A",
    450921: "\u5BB9\u53BF",
    450922: "\u9646\u5DDD\u53BF",
    450923: "\u535A\u767D\u53BF",
    450924: "\u5174\u4E1A\u53BF",
    450981: "\u5317\u6D41\u5E02"
  },
  451e3: {
    451001: "\u5E02\u8F96\u533A",
    451002: "\u53F3\u6C5F\u533A",
    451003: "\u7530\u9633\u533A",
    451022: "\u7530\u4E1C\u53BF",
    451023: "\u5E73\u679C\u53BF",
    451024: "\u5FB7\u4FDD\u53BF",
    451026: "\u90A3\u5761\u53BF",
    451027: "\u51CC\u4E91\u53BF",
    451028: "\u4E50\u4E1A\u53BF",
    451029: "\u7530\u6797\u53BF",
    451030: "\u897F\u6797\u53BF",
    451031: "\u9686\u6797\u5404\u65CF\u81EA\u6CBB\u53BF",
    451081: "\u9756\u897F\u5E02"
  },
  451100: {
    451101: "\u5E02\u8F96\u533A",
    451102: "\u516B\u6B65\u533A",
    451103: "\u5E73\u6842\u533A",
    451121: "\u662D\u5E73\u53BF",
    451122: "\u949F\u5C71\u53BF",
    451123: "\u5BCC\u5DDD\u7476\u65CF\u81EA\u6CBB\u53BF"
  },
  451200: {
    451201: "\u5E02\u8F96\u533A",
    451202: "\u91D1\u57CE\u6C5F\u533A",
    451203: "\u5B9C\u5DDE\u533A",
    451221: "\u5357\u4E39\u53BF",
    451222: "\u5929\u5CE8\u53BF",
    451223: "\u51E4\u5C71\u53BF",
    451224: "\u4E1C\u5170\u53BF",
    451225: "\u7F57\u57CE\u4EEB\u4F6C\u65CF\u81EA\u6CBB\u53BF",
    451226: "\u73AF\u6C5F\u6BDB\u5357\u65CF\u81EA\u6CBB\u53BF",
    451227: "\u5DF4\u9A6C\u7476\u65CF\u81EA\u6CBB\u53BF",
    451228: "\u90FD\u5B89\u7476\u65CF\u81EA\u6CBB\u53BF",
    451229: "\u5927\u5316\u7476\u65CF\u81EA\u6CBB\u53BF"
  },
  451300: {
    451301: "\u5E02\u8F96\u533A",
    451302: "\u5174\u5BBE\u533A",
    451321: "\u5FFB\u57CE\u53BF",
    451322: "\u8C61\u5DDE\u53BF",
    451323: "\u6B66\u5BA3\u53BF",
    451324: "\u91D1\u79C0\u7476\u65CF\u81EA\u6CBB\u53BF",
    451381: "\u5408\u5C71\u5E02"
  },
  451400: {
    451401: "\u5E02\u8F96\u533A",
    451402: "\u6C5F\u5DDE\u533A",
    451421: "\u6276\u7EE5\u53BF",
    451422: "\u5B81\u660E\u53BF",
    451423: "\u9F99\u5DDE\u53BF",
    451424: "\u5927\u65B0\u53BF",
    451425: "\u5929\u7B49\u53BF",
    451481: "\u51ED\u7965\u5E02"
  },
  46e4: {
    460100: "\u6D77\u53E3\u5E02",
    460200: "\u4E09\u4E9A\u5E02",
    460300: "\u4E09\u6C99\u5E02",
    460400: "\u510B\u5DDE\u5E02",
    469e3: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212"
  },
  460100: {
    460101: "\u5E02\u8F96\u533A",
    460105: "\u79C0\u82F1\u533A",
    460106: "\u9F99\u534E\u533A",
    460107: "\u743C\u5C71\u533A",
    460108: "\u7F8E\u5170\u533A"
  },
  460200: {
    460201: "\u5E02\u8F96\u533A",
    460202: "\u6D77\u68E0\u533A",
    460203: "\u5409\u9633\u533A",
    460204: "\u5929\u6DAF\u533A",
    460205: "\u5D16\u5DDE\u533A"
  },
  460300: {
    460321: "\u897F\u6C99\u7FA4\u5C9B",
    460322: "\u5357\u6C99\u7FA4\u5C9B",
    460323: "\u4E2D\u6C99\u7FA4\u5C9B\u7684\u5C9B\u7901\u53CA\u5176\u6D77\u57DF"
  },
  460400: {
    460400100: "\u90A3\u5927\u9547",
    460400101: "\u548C\u5E86\u9547",
    460400102: "\u5357\u4E30\u9547",
    460400103: "\u5927\u6210\u9547",
    460400104: "\u96C5\u661F\u9547",
    460400105: "\u5170\u6D0B\u9547",
    460400106: "\u5149\u6751\u9547",
    460400107: "\u6728\u68E0\u9547",
    460400108: "\u6D77\u5934\u9547",
    460400109: "\u5CE8\u8513\u9547",
    460400111: "\u738B\u4E94\u9547",
    460400112: "\u767D\u9A6C\u4E95\u9547",
    460400113: "\u4E2D\u548C\u9547",
    460400114: "\u6392\u6D66\u9547",
    460400115: "\u4E1C\u6210\u9547",
    460400116: "\u65B0\u5DDE\u9547",
    460400499: "\u6D0B\u6D66\u7ECF\u6D4E\u5F00\u53D1\u533A",
    460400500: "\u534E\u5357\u70ED\u4F5C\u5B66\u9662"
  },
  469e3: {
    469001: "\u4E94\u6307\u5C71\u5E02",
    469002: "\u743C\u6D77\u5E02",
    469005: "\u6587\u660C\u5E02",
    469006: "\u4E07\u5B81\u5E02",
    469007: "\u4E1C\u65B9\u5E02",
    469021: "\u5B9A\u5B89\u53BF",
    469022: "\u5C6F\u660C\u53BF",
    469023: "\u6F84\u8FC8\u53BF",
    469024: "\u4E34\u9AD8\u53BF",
    469025: "\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF",
    469026: "\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF",
    469027: "\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF",
    469028: "\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF",
    469029: "\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    469030: "\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
  },
  5e5: {
    500100: "\u5E02\u8F96\u533A",
    500200: "\u53BF"
  },
  500100: {
    500101: "\u4E07\u5DDE\u533A",
    500102: "\u6DAA\u9675\u533A",
    500103: "\u6E1D\u4E2D\u533A",
    500104: "\u5927\u6E21\u53E3\u533A",
    500105: "\u6C5F\u5317\u533A",
    500106: "\u6C99\u576A\u575D\u533A",
    500107: "\u4E5D\u9F99\u5761\u533A",
    500108: "\u5357\u5CB8\u533A",
    500109: "\u5317\u789A\u533A",
    500110: "\u7DA6\u6C5F\u533A",
    500111: "\u5927\u8DB3\u533A",
    500112: "\u6E1D\u5317\u533A",
    500113: "\u5DF4\u5357\u533A",
    500114: "\u9ED4\u6C5F\u533A",
    500115: "\u957F\u5BFF\u533A",
    500116: "\u6C5F\u6D25\u533A",
    500117: "\u5408\u5DDD\u533A",
    500118: "\u6C38\u5DDD\u533A",
    500119: "\u5357\u5DDD\u533A",
    500120: "\u74A7\u5C71\u533A",
    500151: "\u94DC\u6881\u533A",
    500152: "\u6F7C\u5357\u533A",
    500153: "\u8363\u660C\u533A",
    500154: "\u5F00\u5DDE\u533A",
    500155: "\u6881\u5E73\u533A",
    500156: "\u6B66\u9686\u533A"
  },
  500200: {
    500229: "\u57CE\u53E3\u53BF",
    500230: "\u4E30\u90FD\u53BF",
    500231: "\u57AB\u6C5F\u53BF",
    500233: "\u5FE0\u53BF",
    500235: "\u4E91\u9633\u53BF",
    500236: "\u5949\u8282\u53BF",
    500237: "\u5DEB\u5C71\u53BF",
    500238: "\u5DEB\u6EAA\u53BF",
    500240: "\u77F3\u67F1\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
    500241: "\u79C0\u5C71\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    500242: "\u9149\u9633\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    500243: "\u5F6D\u6C34\u82D7\u65CF\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
  },
  51e4: {
    510100: "\u6210\u90FD\u5E02",
    510300: "\u81EA\u8D21\u5E02",
    510400: "\u6500\u679D\u82B1\u5E02",
    510500: "\u6CF8\u5DDE\u5E02",
    510600: "\u5FB7\u9633\u5E02",
    510700: "\u7EF5\u9633\u5E02",
    510800: "\u5E7F\u5143\u5E02",
    510900: "\u9042\u5B81\u5E02",
    511e3: "\u5185\u6C5F\u5E02",
    511100: "\u4E50\u5C71\u5E02",
    511300: "\u5357\u5145\u5E02",
    511400: "\u7709\u5C71\u5E02",
    511500: "\u5B9C\u5BBE\u5E02",
    511600: "\u5E7F\u5B89\u5E02",
    511700: "\u8FBE\u5DDE\u5E02",
    511800: "\u96C5\u5B89\u5E02",
    511900: "\u5DF4\u4E2D\u5E02",
    512e3: "\u8D44\u9633\u5E02",
    513200: "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE",
    513300: "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE",
    513400: "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE"
  },
  510100: {
    510101: "\u5E02\u8F96\u533A",
    510104: "\u9526\u6C5F\u533A",
    510105: "\u9752\u7F8A\u533A",
    510106: "\u91D1\u725B\u533A",
    510107: "\u6B66\u4FAF\u533A",
    510108: "\u6210\u534E\u533A",
    510112: "\u9F99\u6CC9\u9A7F\u533A",
    510113: "\u9752\u767D\u6C5F\u533A",
    510114: "\u65B0\u90FD\u533A",
    510115: "\u6E29\u6C5F\u533A",
    510116: "\u53CC\u6D41\u533A",
    510117: "\u90EB\u90FD\u533A",
    510121: "\u91D1\u5802\u53BF",
    510129: "\u5927\u9091\u53BF",
    510131: "\u84B2\u6C5F\u53BF",
    510132: "\u65B0\u6D25\u53BF",
    510181: "\u90FD\u6C5F\u5830\u5E02",
    510182: "\u5F6D\u5DDE\u5E02",
    510183: "\u909B\u5D03\u5E02",
    510184: "\u5D07\u5DDE\u5E02",
    510185: "\u7B80\u9633\u5E02"
  },
  510300: {
    510301: "\u5E02\u8F96\u533A",
    510302: "\u81EA\u6D41\u4E95\u533A",
    510303: "\u8D21\u4E95\u533A",
    510304: "\u5927\u5B89\u533A",
    510311: "\u6CBF\u6EE9\u533A",
    510321: "\u8363\u53BF",
    510322: "\u5BCC\u987A\u53BF"
  },
  510400: {
    510401: "\u5E02\u8F96\u533A",
    510402: "\u4E1C\u533A",
    510403: "\u897F\u533A",
    510411: "\u4EC1\u548C\u533A",
    510421: "\u7C73\u6613\u53BF",
    510422: "\u76D0\u8FB9\u53BF"
  },
  510500: {
    510501: "\u5E02\u8F96\u533A",
    510502: "\u6C5F\u9633\u533A",
    510503: "\u7EB3\u6EAA\u533A",
    510504: "\u9F99\u9A6C\u6F6D\u533A",
    510521: "\u6CF8\u53BF",
    510522: "\u5408\u6C5F\u53BF",
    510524: "\u53D9\u6C38\u53BF",
    510525: "\u53E4\u853A\u53BF"
  },
  510600: {
    510601: "\u5E02\u8F96\u533A",
    510603: "\u65CC\u9633\u533A",
    510604: "\u7F57\u6C5F\u533A",
    510623: "\u4E2D\u6C5F\u53BF",
    510681: "\u5E7F\u6C49\u5E02",
    510682: "\u4EC0\u90A1\u5E02",
    510683: "\u7EF5\u7AF9\u5E02"
  },
  510700: {
    510701: "\u5E02\u8F96\u533A",
    510703: "\u6DAA\u57CE\u533A",
    510704: "\u6E38\u4ED9\u533A",
    510705: "\u5B89\u5DDE\u533A",
    510722: "\u4E09\u53F0\u53BF",
    510723: "\u76D0\u4EAD\u53BF",
    510725: "\u6893\u6F7C\u53BF",
    510726: "\u5317\u5DDD\u7F8C\u65CF\u81EA\u6CBB\u53BF",
    510727: "\u5E73\u6B66\u53BF",
    510781: "\u6C5F\u6CB9\u5E02"
  },
  510800: {
    510801: "\u5E02\u8F96\u533A",
    510802: "\u5229\u5DDE\u533A",
    510811: "\u662D\u5316\u533A",
    510812: "\u671D\u5929\u533A",
    510821: "\u65FA\u82CD\u53BF",
    510822: "\u9752\u5DDD\u53BF",
    510823: "\u5251\u9601\u53BF",
    510824: "\u82CD\u6EAA\u53BF"
  },
  510900: {
    510901: "\u5E02\u8F96\u533A",
    510903: "\u8239\u5C71\u533A",
    510904: "\u5B89\u5C45\u533A",
    510921: "\u84EC\u6EAA\u53BF",
    510923: "\u5927\u82F1\u53BF",
    510981: "\u5C04\u6D2A\u5E02"
  },
  511e3: {
    511001: "\u5E02\u8F96\u533A",
    511002: "\u5E02\u4E2D\u533A",
    511011: "\u4E1C\u5174\u533A",
    511024: "\u5A01\u8FDC\u53BF",
    511025: "\u8D44\u4E2D\u53BF",
    511071: "\u5185\u6C5F\u7ECF\u6D4E\u5F00\u53D1\u533A",
    511083: "\u9686\u660C\u5E02"
  },
  511100: {
    511101: "\u5E02\u8F96\u533A",
    511102: "\u5E02\u4E2D\u533A",
    511111: "\u6C99\u6E7E\u533A",
    511112: "\u4E94\u901A\u6865\u533A",
    511113: "\u91D1\u53E3\u6CB3\u533A",
    511123: "\u728D\u4E3A\u53BF",
    511124: "\u4E95\u7814\u53BF",
    511126: "\u5939\u6C5F\u53BF",
    511129: "\u6C90\u5DDD\u53BF",
    511132: "\u5CE8\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    511133: "\u9A6C\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    511181: "\u5CE8\u7709\u5C71\u5E02"
  },
  511300: {
    511301: "\u5E02\u8F96\u533A",
    511302: "\u987A\u5E86\u533A",
    511303: "\u9AD8\u576A\u533A",
    511304: "\u5609\u9675\u533A",
    511321: "\u5357\u90E8\u53BF",
    511322: "\u8425\u5C71\u53BF",
    511323: "\u84EC\u5B89\u53BF",
    511324: "\u4EEA\u9647\u53BF",
    511325: "\u897F\u5145\u53BF",
    511381: "\u9606\u4E2D\u5E02"
  },
  511400: {
    511401: "\u5E02\u8F96\u533A",
    511402: "\u4E1C\u5761\u533A",
    511403: "\u5F6D\u5C71\u533A",
    511421: "\u4EC1\u5BFF\u53BF",
    511423: "\u6D2A\u96C5\u53BF",
    511424: "\u4E39\u68F1\u53BF",
    511425: "\u9752\u795E\u53BF"
  },
  511500: {
    511501: "\u5E02\u8F96\u533A",
    511502: "\u7FE0\u5C4F\u533A",
    511503: "\u5357\u6EAA\u533A",
    511504: "\u53D9\u5DDE\u533A",
    511523: "\u6C5F\u5B89\u53BF",
    511524: "\u957F\u5B81\u53BF",
    511525: "\u9AD8\u53BF",
    511526: "\u73D9\u53BF",
    511527: "\u7B60\u8FDE\u53BF",
    511528: "\u5174\u6587\u53BF",
    511529: "\u5C4F\u5C71\u53BF"
  },
  511600: {
    511601: "\u5E02\u8F96\u533A",
    511602: "\u5E7F\u5B89\u533A",
    511603: "\u524D\u950B\u533A",
    511621: "\u5CB3\u6C60\u53BF",
    511622: "\u6B66\u80DC\u53BF",
    511623: "\u90BB\u6C34\u53BF",
    511681: "\u534E\u84E5\u5E02"
  },
  511700: {
    511701: "\u5E02\u8F96\u533A",
    511702: "\u901A\u5DDD\u533A",
    511703: "\u8FBE\u5DDD\u533A",
    511722: "\u5BA3\u6C49\u53BF",
    511723: "\u5F00\u6C5F\u53BF",
    511724: "\u5927\u7AF9\u53BF",
    511725: "\u6E20\u53BF",
    511771: "\u8FBE\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A",
    511781: "\u4E07\u6E90\u5E02"
  },
  511800: {
    511801: "\u5E02\u8F96\u533A",
    511802: "\u96E8\u57CE\u533A",
    511803: "\u540D\u5C71\u533A",
    511822: "\u8365\u7ECF\u53BF",
    511823: "\u6C49\u6E90\u53BF",
    511824: "\u77F3\u68C9\u53BF",
    511825: "\u5929\u5168\u53BF",
    511826: "\u82A6\u5C71\u53BF",
    511827: "\u5B9D\u5174\u53BF"
  },
  511900: {
    511901: "\u5E02\u8F96\u533A",
    511902: "\u5DF4\u5DDE\u533A",
    511903: "\u6069\u9633\u533A",
    511921: "\u901A\u6C5F\u53BF",
    511922: "\u5357\u6C5F\u53BF",
    511923: "\u5E73\u660C\u53BF",
    511971: "\u5DF4\u4E2D\u7ECF\u6D4E\u5F00\u53D1\u533A"
  },
  512e3: {
    512001: "\u5E02\u8F96\u533A",
    512002: "\u96C1\u6C5F\u533A",
    512021: "\u5B89\u5CB3\u53BF",
    512022: "\u4E50\u81F3\u53BF"
  },
  513200: {
    513201: "\u9A6C\u5C14\u5EB7\u5E02",
    513221: "\u6C76\u5DDD\u53BF",
    513222: "\u7406\u53BF",
    513223: "\u8302\u53BF",
    513224: "\u677E\u6F58\u53BF",
    513225: "\u4E5D\u5BE8\u6C9F\u53BF",
    513226: "\u91D1\u5DDD\u53BF",
    513227: "\u5C0F\u91D1\u53BF",
    513228: "\u9ED1\u6C34\u53BF",
    513230: "\u58E4\u5858\u53BF",
    513231: "\u963F\u575D\u53BF",
    513232: "\u82E5\u5C14\u76D6\u53BF",
    513233: "\u7EA2\u539F\u53BF"
  },
  513300: {
    513301: "\u5EB7\u5B9A\u5E02",
    513322: "\u6CF8\u5B9A\u53BF",
    513323: "\u4E39\u5DF4\u53BF",
    513324: "\u4E5D\u9F99\u53BF",
    513325: "\u96C5\u6C5F\u53BF",
    513326: "\u9053\u5B5A\u53BF",
    513327: "\u7089\u970D\u53BF",
    513328: "\u7518\u5B5C\u53BF",
    513329: "\u65B0\u9F99\u53BF",
    513330: "\u5FB7\u683C\u53BF",
    513331: "\u767D\u7389\u53BF",
    513332: "\u77F3\u6E20\u53BF",
    513333: "\u8272\u8FBE\u53BF",
    513334: "\u7406\u5858\u53BF",
    513335: "\u5DF4\u5858\u53BF",
    513336: "\u4E61\u57CE\u53BF",
    513337: "\u7A3B\u57CE\u53BF",
    513338: "\u5F97\u8363\u53BF"
  },
  513400: {
    513401: "\u897F\u660C\u5E02",
    513422: "\u6728\u91CC\u85CF\u65CF\u81EA\u6CBB\u53BF",
    513423: "\u76D0\u6E90\u53BF",
    513424: "\u5FB7\u660C\u53BF",
    513425: "\u4F1A\u7406\u53BF",
    513426: "\u4F1A\u4E1C\u53BF",
    513427: "\u5B81\u5357\u53BF",
    513428: "\u666E\u683C\u53BF",
    513429: "\u5E03\u62D6\u53BF",
    513430: "\u91D1\u9633\u53BF",
    513431: "\u662D\u89C9\u53BF",
    513432: "\u559C\u5FB7\u53BF",
    513433: "\u5195\u5B81\u53BF",
    513434: "\u8D8A\u897F\u53BF",
    513435: "\u7518\u6D1B\u53BF",
    513436: "\u7F8E\u59D1\u53BF",
    513437: "\u96F7\u6CE2\u53BF"
  },
  52e4: {
    520100: "\u8D35\u9633\u5E02",
    520200: "\u516D\u76D8\u6C34\u5E02",
    520300: "\u9075\u4E49\u5E02",
    520400: "\u5B89\u987A\u5E02",
    520500: "\u6BD5\u8282\u5E02",
    520600: "\u94DC\u4EC1\u5E02",
    522300: "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
    522600: "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE",
    522700: "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
  },
  520100: {
    520101: "\u5E02\u8F96\u533A",
    520102: "\u5357\u660E\u533A",
    520103: "\u4E91\u5CA9\u533A",
    520111: "\u82B1\u6EAA\u533A",
    520112: "\u4E4C\u5F53\u533A",
    520113: "\u767D\u4E91\u533A",
    520115: "\u89C2\u5C71\u6E56\u533A",
    520121: "\u5F00\u9633\u53BF",
    520122: "\u606F\u70FD\u53BF",
    520123: "\u4FEE\u6587\u53BF",
    520181: "\u6E05\u9547\u5E02"
  },
  520200: {
    520201: "\u949F\u5C71\u533A",
    520203: "\u516D\u679D\u7279\u533A",
    520221: "\u6C34\u57CE\u53BF",
    520281: "\u76D8\u5DDE\u5E02"
  },
  520300: {
    520301: "\u5E02\u8F96\u533A",
    520302: "\u7EA2\u82B1\u5C97\u533A",
    520303: "\u6C47\u5DDD\u533A",
    520304: "\u64AD\u5DDE\u533A",
    520322: "\u6850\u6893\u53BF",
    520323: "\u7EE5\u9633\u53BF",
    520324: "\u6B63\u5B89\u53BF",
    520325: "\u9053\u771F\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    520326: "\u52A1\u5DDD\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    520327: "\u51E4\u5188\u53BF",
    520328: "\u6E44\u6F6D\u53BF",
    520329: "\u4F59\u5E86\u53BF",
    520330: "\u4E60\u6C34\u53BF",
    520381: "\u8D64\u6C34\u5E02",
    520382: "\u4EC1\u6000\u5E02"
  },
  520400: {
    520401: "\u5E02\u8F96\u533A",
    520402: "\u897F\u79C0\u533A",
    520403: "\u5E73\u575D\u533A",
    520422: "\u666E\u5B9A\u53BF",
    520423: "\u9547\u5B81\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    520424: "\u5173\u5CAD\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    520425: "\u7D2B\u4E91\u82D7\u65CF\u5E03\u4F9D\u65CF\u81EA\u6CBB\u53BF"
  },
  520500: {
    520501: "\u5E02\u8F96\u533A",
    520502: "\u4E03\u661F\u5173\u533A",
    520521: "\u5927\u65B9\u53BF",
    520522: "\u9ED4\u897F\u53BF",
    520523: "\u91D1\u6C99\u53BF",
    520524: "\u7EC7\u91D1\u53BF",
    520525: "\u7EB3\u96CD\u53BF",
    520526: "\u5A01\u5B81\u5F5D\u65CF\u56DE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    520527: "\u8D6B\u7AE0\u53BF"
  },
  520600: {
    520601: "\u5E02\u8F96\u533A",
    520602: "\u78A7\u6C5F\u533A",
    520603: "\u4E07\u5C71\u533A",
    520621: "\u6C5F\u53E3\u53BF",
    520622: "\u7389\u5C4F\u4F97\u65CF\u81EA\u6CBB\u53BF",
    520623: "\u77F3\u9621\u53BF",
    520624: "\u601D\u5357\u53BF",
    520625: "\u5370\u6C5F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    520626: "\u5FB7\u6C5F\u53BF",
    520627: "\u6CBF\u6CB3\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
    520628: "\u677E\u6843\u82D7\u65CF\u81EA\u6CBB\u53BF"
  },
  522300: {
    522301: "\u5174\u4E49\u5E02",
    522302: "\u5174\u4EC1\u5E02",
    522323: "\u666E\u5B89\u53BF",
    522324: "\u6674\u9686\u53BF",
    522325: "\u8D1E\u4E30\u53BF",
    522326: "\u671B\u8C1F\u53BF",
    522327: "\u518C\u4EA8\u53BF",
    522328: "\u5B89\u9F99\u53BF"
  },
  522600: {
    522601: "\u51EF\u91CC\u5E02",
    522622: "\u9EC4\u5E73\u53BF",
    522623: "\u65BD\u79C9\u53BF",
    522624: "\u4E09\u7A57\u53BF",
    522625: "\u9547\u8FDC\u53BF",
    522626: "\u5C91\u5DE9\u53BF",
    522627: "\u5929\u67F1\u53BF",
    522628: "\u9526\u5C4F\u53BF",
    522629: "\u5251\u6CB3\u53BF",
    522630: "\u53F0\u6C5F\u53BF",
    522631: "\u9ECE\u5E73\u53BF",
    522632: "\u6995\u6C5F\u53BF",
    522633: "\u4ECE\u6C5F\u53BF",
    522634: "\u96F7\u5C71\u53BF",
    522635: "\u9EBB\u6C5F\u53BF",
    522636: "\u4E39\u5BE8\u53BF"
  },
  522700: {
    522701: "\u90FD\u5300\u5E02",
    522702: "\u798F\u6CC9\u5E02",
    522722: "\u8354\u6CE2\u53BF",
    522723: "\u8D35\u5B9A\u53BF",
    522725: "\u74EE\u5B89\u53BF",
    522726: "\u72EC\u5C71\u53BF",
    522727: "\u5E73\u5858\u53BF",
    522728: "\u7F57\u7538\u53BF",
    522729: "\u957F\u987A\u53BF",
    522730: "\u9F99\u91CC\u53BF",
    522731: "\u60E0\u6C34\u53BF",
    522732: "\u4E09\u90FD\u6C34\u65CF\u81EA\u6CBB\u53BF"
  },
  53e4: {
    530100: "\u6606\u660E\u5E02",
    530300: "\u66F2\u9756\u5E02",
    530400: "\u7389\u6EAA\u5E02",
    530500: "\u4FDD\u5C71\u5E02",
    530600: "\u662D\u901A\u5E02",
    530700: "\u4E3D\u6C5F\u5E02",
    530800: "\u666E\u6D31\u5E02",
    530900: "\u4E34\u6CA7\u5E02",
    532300: "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
    532500: "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
    532600: "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
    532800: "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE",
    532900: "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE",
    533100: "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE",
    533300: "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE",
    533400: "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE"
  },
  530100: {
    530101: "\u5E02\u8F96\u533A",
    530102: "\u4E94\u534E\u533A",
    530103: "\u76D8\u9F99\u533A",
    530111: "\u5B98\u6E21\u533A",
    530112: "\u897F\u5C71\u533A",
    530113: "\u4E1C\u5DDD\u533A",
    530114: "\u5448\u8D21\u533A",
    530115: "\u664B\u5B81\u533A",
    530124: "\u5BCC\u6C11\u53BF",
    530125: "\u5B9C\u826F\u53BF",
    530126: "\u77F3\u6797\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    530127: "\u5D69\u660E\u53BF",
    530128: "\u7984\u529D\u5F5D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
    530129: "\u5BFB\u7538\u56DE\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    530181: "\u5B89\u5B81\u5E02"
  },
  530300: {
    530301: "\u5E02\u8F96\u533A",
    530302: "\u9E92\u9E9F\u533A",
    530303: "\u6CBE\u76CA\u533A",
    530304: "\u9A6C\u9F99\u533A",
    530322: "\u9646\u826F\u53BF",
    530323: "\u5E08\u5B97\u53BF",
    530324: "\u7F57\u5E73\u53BF",
    530325: "\u5BCC\u6E90\u53BF",
    530326: "\u4F1A\u6CFD\u53BF",
    530381: "\u5BA3\u5A01\u5E02"
  },
  530400: {
    530401: "\u5E02\u8F96\u533A",
    530402: "\u7EA2\u5854\u533A",
    530403: "\u6C5F\u5DDD\u533A",
    530422: "\u6F84\u6C5F\u53BF",
    530423: "\u901A\u6D77\u53BF",
    530424: "\u534E\u5B81\u53BF",
    530425: "\u6613\u95E8\u53BF",
    530426: "\u5CE8\u5C71\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    530427: "\u65B0\u5E73\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF",
    530428: "\u5143\u6C5F\u54C8\u5C3C\u65CF\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
  },
  530500: {
    530501: "\u5E02\u8F96\u533A",
    530502: "\u9686\u9633\u533A",
    530521: "\u65BD\u7538\u53BF",
    530523: "\u9F99\u9675\u53BF",
    530524: "\u660C\u5B81\u53BF",
    530581: "\u817E\u51B2\u5E02"
  },
  530600: {
    530601: "\u5E02\u8F96\u533A",
    530602: "\u662D\u9633\u533A",
    530621: "\u9C81\u7538\u53BF",
    530622: "\u5DE7\u5BB6\u53BF",
    530623: "\u76D0\u6D25\u53BF",
    530624: "\u5927\u5173\u53BF",
    530625: "\u6C38\u5584\u53BF",
    530626: "\u7EE5\u6C5F\u53BF",
    530627: "\u9547\u96C4\u53BF",
    530628: "\u5F5D\u826F\u53BF",
    530629: "\u5A01\u4FE1\u53BF",
    530681: "\u6C34\u5BCC\u5E02"
  },
  530700: {
    530701: "\u5E02\u8F96\u533A",
    530702: "\u53E4\u57CE\u533A",
    530721: "\u7389\u9F99\u7EB3\u897F\u65CF\u81EA\u6CBB\u53BF",
    530722: "\u6C38\u80DC\u53BF",
    530723: "\u534E\u576A\u53BF",
    530724: "\u5B81\u8497\u5F5D\u65CF\u81EA\u6CBB\u53BF"
  },
  530800: {
    530801: "\u5E02\u8F96\u533A",
    530802: "\u601D\u8305\u533A",
    530821: "\u5B81\u6D31\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    530822: "\u58A8\u6C5F\u54C8\u5C3C\u65CF\u81EA\u6CBB\u53BF",
    530823: "\u666F\u4E1C\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    530824: "\u666F\u8C37\u50A3\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    530825: "\u9547\u6C85\u5F5D\u65CF\u54C8\u5C3C\u65CF\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF",
    530826: "\u6C5F\u57CE\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    530827: "\u5B5F\u8FDE\u50A3\u65CF\u62C9\u795C\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF",
    530828: "\u6F9C\u6CA7\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF",
    530829: "\u897F\u76DF\u4F64\u65CF\u81EA\u6CBB\u53BF"
  },
  530900: {
    530901: "\u5E02\u8F96\u533A",
    530902: "\u4E34\u7FD4\u533A",
    530921: "\u51E4\u5E86\u53BF",
    530922: "\u4E91\u53BF",
    530923: "\u6C38\u5FB7\u53BF",
    530924: "\u9547\u5EB7\u53BF",
    530925: "\u53CC\u6C5F\u62C9\u795C\u65CF\u4F64\u65CF\u5E03\u6717\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF",
    530926: "\u803F\u9A6C\u50A3\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF",
    530927: "\u6CA7\u6E90\u4F64\u65CF\u81EA\u6CBB\u53BF"
  },
  532300: {
    532301: "\u695A\u96C4\u5E02",
    532322: "\u53CC\u67CF\u53BF",
    532323: "\u725F\u5B9A\u53BF",
    532324: "\u5357\u534E\u53BF",
    532325: "\u59DA\u5B89\u53BF",
    532326: "\u5927\u59DA\u53BF",
    532327: "\u6C38\u4EC1\u53BF",
    532328: "\u5143\u8C0B\u53BF",
    532329: "\u6B66\u5B9A\u53BF",
    532331: "\u7984\u4E30\u53BF"
  },
  532500: {
    532501: "\u4E2A\u65E7\u5E02",
    532502: "\u5F00\u8FDC\u5E02",
    532503: "\u8499\u81EA\u5E02",
    532504: "\u5F25\u52D2\u5E02",
    532523: "\u5C4F\u8FB9\u82D7\u65CF\u81EA\u6CBB\u53BF",
    532524: "\u5EFA\u6C34\u53BF",
    532525: "\u77F3\u5C4F\u53BF",
    532527: "\u6CF8\u897F\u53BF",
    532528: "\u5143\u9633\u53BF",
    532529: "\u7EA2\u6CB3\u53BF",
    532530: "\u91D1\u5E73\u82D7\u65CF\u7476\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF",
    532531: "\u7EFF\u6625\u53BF",
    532532: "\u6CB3\u53E3\u7476\u65CF\u81EA\u6CBB\u53BF"
  },
  532600: {
    532601: "\u6587\u5C71\u5E02",
    532622: "\u781A\u5C71\u53BF",
    532623: "\u897F\u7574\u53BF",
    532624: "\u9EBB\u6817\u5761\u53BF",
    532625: "\u9A6C\u5173\u53BF",
    532626: "\u4E18\u5317\u53BF",
    532627: "\u5E7F\u5357\u53BF",
    532628: "\u5BCC\u5B81\u53BF"
  },
  532800: {
    532801: "\u666F\u6D2A\u5E02",
    532822: "\u52D0\u6D77\u53BF",
    532823: "\u52D0\u814A\u53BF"
  },
  532900: {
    532901: "\u5927\u7406\u5E02",
    532922: "\u6F3E\u6FDE\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    532923: "\u7965\u4E91\u53BF",
    532924: "\u5BBE\u5DDD\u53BF",
    532925: "\u5F25\u6E21\u53BF",
    532926: "\u5357\u6DA7\u5F5D\u65CF\u81EA\u6CBB\u53BF",
    532927: "\u5DCD\u5C71\u5F5D\u65CF\u56DE\u65CF\u81EA\u6CBB\u53BF",
    532928: "\u6C38\u5E73\u53BF",
    532929: "\u4E91\u9F99\u53BF",
    532930: "\u6D31\u6E90\u53BF",
    532931: "\u5251\u5DDD\u53BF",
    532932: "\u9E64\u5E86\u53BF"
  },
  533100: {
    533102: "\u745E\u4E3D\u5E02",
    533103: "\u8292\u5E02",
    533122: "\u6881\u6CB3\u53BF",
    533123: "\u76C8\u6C5F\u53BF",
    533124: "\u9647\u5DDD\u53BF"
  },
  533300: {
    533301: "\u6CF8\u6C34\u5E02",
    533323: "\u798F\u8D21\u53BF",
    533324: "\u8D21\u5C71\u72EC\u9F99\u65CF\u6012\u65CF\u81EA\u6CBB\u53BF",
    533325: "\u5170\u576A\u767D\u65CF\u666E\u7C73\u65CF\u81EA\u6CBB\u53BF"
  },
  533400: {
    533401: "\u9999\u683C\u91CC\u62C9\u5E02",
    533422: "\u5FB7\u94A6\u53BF",
    533423: "\u7EF4\u897F\u5088\u50F3\u65CF\u81EA\u6CBB\u53BF"
  },
  54e4: {
    540100: "\u62C9\u8428\u5E02",
    540200: "\u65E5\u5580\u5219\u5E02",
    540300: "\u660C\u90FD\u5E02",
    540400: "\u6797\u829D\u5E02",
    540500: "\u5C71\u5357\u5E02",
    540600: "\u90A3\u66F2\u5E02",
    542500: "\u963F\u91CC\u5730\u533A"
  },
  540100: {
    540101: "\u5E02\u8F96\u533A",
    540102: "\u57CE\u5173\u533A",
    540103: "\u5806\u9F99\u5FB7\u5E86\u533A",
    540104: "\u8FBE\u5B5C\u533A",
    540121: "\u6797\u5468\u53BF",
    540122: "\u5F53\u96C4\u53BF",
    540123: "\u5C3C\u6728\u53BF",
    540124: "\u66F2\u6C34\u53BF",
    540127: "\u58A8\u7AF9\u5DE5\u5361\u53BF",
    540171: "\u683C\u5C14\u6728\u85CF\u9752\u5DE5\u4E1A\u56ED\u533A",
    540172: "\u62C9\u8428\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A",
    540173: "\u897F\u85CF\u6587\u5316\u65C5\u6E38\u521B\u610F\u56ED\u533A",
    540174: "\u8FBE\u5B5C\u5DE5\u4E1A\u56ED\u533A"
  },
  540200: {
    540202: "\u6851\u73E0\u5B5C\u533A",
    540221: "\u5357\u6728\u6797\u53BF",
    540222: "\u6C5F\u5B5C\u53BF",
    540223: "\u5B9A\u65E5\u53BF",
    540224: "\u8428\u8FE6\u53BF",
    540225: "\u62C9\u5B5C\u53BF",
    540226: "\u6602\u4EC1\u53BF",
    540227: "\u8C22\u901A\u95E8\u53BF",
    540228: "\u767D\u6717\u53BF",
    540229: "\u4EC1\u5E03\u53BF",
    540230: "\u5EB7\u9A6C\u53BF",
    540231: "\u5B9A\u7ED3\u53BF",
    540232: "\u4EF2\u5DF4\u53BF",
    540233: "\u4E9A\u4E1C\u53BF",
    540234: "\u5409\u9686\u53BF",
    540235: "\u8042\u62C9\u6728\u53BF",
    540236: "\u8428\u560E\u53BF",
    540237: "\u5C97\u5DF4\u53BF"
  },
  540300: {
    540302: "\u5361\u82E5\u533A",
    540321: "\u6C5F\u8FBE\u53BF",
    540322: "\u8D21\u89C9\u53BF",
    540323: "\u7C7B\u4E4C\u9F50\u53BF",
    540324: "\u4E01\u9752\u53BF",
    540325: "\u5BDF\u96C5\u53BF",
    540326: "\u516B\u5BBF\u53BF",
    540327: "\u5DE6\u8D21\u53BF",
    540328: "\u8292\u5EB7\u53BF",
    540329: "\u6D1B\u9686\u53BF",
    540330: "\u8FB9\u575D\u53BF"
  },
  540400: {
    540402: "\u5DF4\u5B9C\u533A",
    540421: "\u5DE5\u5E03\u6C5F\u8FBE\u53BF",
    540422: "\u7C73\u6797\u53BF",
    540423: "\u58A8\u8131\u53BF",
    540424: "\u6CE2\u5BC6\u53BF",
    540425: "\u5BDF\u9685\u53BF",
    540426: "\u6717\u53BF"
  },
  540500: {
    540501: "\u5E02\u8F96\u533A",
    540502: "\u4E43\u4E1C\u533A",
    540521: "\u624E\u56CA\u53BF",
    540522: "\u8D21\u560E\u53BF",
    540523: "\u6851\u65E5\u53BF",
    540524: "\u743C\u7ED3\u53BF",
    540525: "\u66F2\u677E\u53BF",
    540526: "\u63AA\u7F8E\u53BF",
    540527: "\u6D1B\u624E\u53BF",
    540528: "\u52A0\u67E5\u53BF",
    540529: "\u9686\u5B50\u53BF",
    540530: "\u9519\u90A3\u53BF",
    540531: "\u6D6A\u5361\u5B50\u53BF"
  },
  540600: {
    540602: "\u8272\u5C3C\u533A",
    540621: "\u5609\u9ECE\u53BF",
    540622: "\u6BD4\u5982\u53BF",
    540623: "\u8042\u8363\u53BF",
    540624: "\u5B89\u591A\u53BF",
    540625: "\u7533\u624E\u53BF",
    540626: "\u7D22\u53BF",
    540627: "\u73ED\u6208\u53BF",
    540628: "\u5DF4\u9752\u53BF",
    540629: "\u5C3C\u739B\u53BF",
    540630: "\u53CC\u6E56\u53BF"
  },
  542500: {
    542521: "\u666E\u5170\u53BF",
    542522: "\u672D\u8FBE\u53BF",
    542523: "\u5676\u5C14\u53BF",
    542524: "\u65E5\u571F\u53BF",
    542525: "\u9769\u5409\u53BF",
    542526: "\u6539\u5219\u53BF",
    542527: "\u63AA\u52E4\u53BF"
  },
  61e4: {
    610100: "\u897F\u5B89\u5E02",
    610200: "\u94DC\u5DDD\u5E02",
    610300: "\u5B9D\u9E21\u5E02",
    610400: "\u54B8\u9633\u5E02",
    610500: "\u6E2D\u5357\u5E02",
    610600: "\u5EF6\u5B89\u5E02",
    610700: "\u6C49\u4E2D\u5E02",
    610800: "\u6986\u6797\u5E02",
    610900: "\u5B89\u5EB7\u5E02",
    611e3: "\u5546\u6D1B\u5E02"
  },
  610100: {
    610101: "\u5E02\u8F96\u533A",
    610102: "\u65B0\u57CE\u533A",
    610103: "\u7891\u6797\u533A",
    610104: "\u83B2\u6E56\u533A",
    610111: "\u705E\u6865\u533A",
    610112: "\u672A\u592E\u533A",
    610113: "\u96C1\u5854\u533A",
    610114: "\u960E\u826F\u533A",
    610115: "\u4E34\u6F7C\u533A",
    610116: "\u957F\u5B89\u533A",
    610117: "\u9AD8\u9675\u533A",
    610118: "\u9120\u9091\u533A",
    610122: "\u84DD\u7530\u53BF",
    610124: "\u5468\u81F3\u53BF"
  },
  610200: {
    610201: "\u5E02\u8F96\u533A",
    610202: "\u738B\u76CA\u533A",
    610203: "\u5370\u53F0\u533A",
    610204: "\u8000\u5DDE\u533A",
    610222: "\u5B9C\u541B\u53BF"
  },
  610300: {
    610301: "\u5E02\u8F96\u533A",
    610302: "\u6E2D\u6EE8\u533A",
    610303: "\u91D1\u53F0\u533A",
    610304: "\u9648\u4ED3\u533A",
    610322: "\u51E4\u7FD4\u53BF",
    610323: "\u5C90\u5C71\u53BF",
    610324: "\u6276\u98CE\u53BF",
    610326: "\u7709\u53BF",
    610327: "\u9647\u53BF",
    610328: "\u5343\u9633\u53BF",
    610329: "\u9E9F\u6E38\u53BF",
    610330: "\u51E4\u53BF",
    610331: "\u592A\u767D\u53BF"
  },
  610400: {
    610401: "\u5E02\u8F96\u533A",
    610402: "\u79E6\u90FD\u533A",
    610403: "\u6768\u9675\u533A",
    610404: "\u6E2D\u57CE\u533A",
    610422: "\u4E09\u539F\u53BF",
    610423: "\u6CFE\u9633\u53BF",
    610424: "\u4E7E\u53BF",
    610425: "\u793C\u6CC9\u53BF",
    610426: "\u6C38\u5BFF\u53BF",
    610428: "\u957F\u6B66\u53BF",
    610429: "\u65EC\u9091\u53BF",
    610430: "\u6DF3\u5316\u53BF",
    610431: "\u6B66\u529F\u53BF",
    610481: "\u5174\u5E73\u5E02",
    610482: "\u5F6C\u5DDE\u5E02"
  },
  610500: {
    610501: "\u5E02\u8F96\u533A",
    610502: "\u4E34\u6E2D\u533A",
    610503: "\u534E\u5DDE\u533A",
    610522: "\u6F7C\u5173\u53BF",
    610523: "\u5927\u8354\u53BF",
    610524: "\u5408\u9633\u53BF",
    610525: "\u6F84\u57CE\u53BF",
    610526: "\u84B2\u57CE\u53BF",
    610527: "\u767D\u6C34\u53BF",
    610528: "\u5BCC\u5E73\u53BF",
    610581: "\u97E9\u57CE\u5E02",
    610582: "\u534E\u9634\u5E02"
  },
  610600: {
    610601: "\u5E02\u8F96\u533A",
    610602: "\u5B9D\u5854\u533A",
    610603: "\u5B89\u585E\u533A",
    610621: "\u5EF6\u957F\u53BF",
    610622: "\u5EF6\u5DDD\u53BF",
    610625: "\u5FD7\u4E39\u53BF",
    610626: "\u5434\u8D77\u53BF",
    610627: "\u7518\u6CC9\u53BF",
    610628: "\u5BCC\u53BF",
    610629: "\u6D1B\u5DDD\u53BF",
    610630: "\u5B9C\u5DDD\u53BF",
    610631: "\u9EC4\u9F99\u53BF",
    610632: "\u9EC4\u9675\u53BF",
    610681: "\u5B50\u957F\u5E02"
  },
  610700: {
    610701: "\u5E02\u8F96\u533A",
    610702: "\u6C49\u53F0\u533A",
    610703: "\u5357\u90D1\u533A",
    610722: "\u57CE\u56FA\u53BF",
    610723: "\u6D0B\u53BF",
    610724: "\u897F\u4E61\u53BF",
    610725: "\u52C9\u53BF",
    610726: "\u5B81\u5F3A\u53BF",
    610727: "\u7565\u9633\u53BF",
    610728: "\u9547\u5DF4\u53BF",
    610729: "\u7559\u575D\u53BF",
    610730: "\u4F5B\u576A\u53BF"
  },
  610800: {
    610801: "\u5E02\u8F96\u533A",
    610802: "\u6986\u9633\u533A",
    610803: "\u6A2A\u5C71\u533A",
    610822: "\u5E9C\u8C37\u53BF",
    610824: "\u9756\u8FB9\u53BF",
    610825: "\u5B9A\u8FB9\u53BF",
    610826: "\u7EE5\u5FB7\u53BF",
    610827: "\u7C73\u8102\u53BF",
    610828: "\u4F73\u53BF",
    610829: "\u5434\u5821\u53BF",
    610830: "\u6E05\u6DA7\u53BF",
    610831: "\u5B50\u6D32\u53BF",
    610881: "\u795E\u6728\u5E02"
  },
  610900: {
    610901: "\u5E02\u8F96\u533A",
    610902: "\u6C49\u6EE8\u533A",
    610921: "\u6C49\u9634\u53BF",
    610922: "\u77F3\u6CC9\u53BF",
    610923: "\u5B81\u9655\u53BF",
    610924: "\u7D2B\u9633\u53BF",
    610925: "\u5C9A\u768B\u53BF",
    610926: "\u5E73\u5229\u53BF",
    610927: "\u9547\u576A\u53BF",
    610928: "\u65EC\u9633\u53BF",
    610929: "\u767D\u6CB3\u53BF"
  },
  611e3: {
    611001: "\u5E02\u8F96\u533A",
    611002: "\u5546\u5DDE\u533A",
    611021: "\u6D1B\u5357\u53BF",
    611022: "\u4E39\u51E4\u53BF",
    611023: "\u5546\u5357\u53BF",
    611024: "\u5C71\u9633\u53BF",
    611025: "\u9547\u5B89\u53BF",
    611026: "\u67DE\u6C34\u53BF"
  },
  62e4: {
    620100: "\u5170\u5DDE\u5E02",
    620200: "\u5609\u5CEA\u5173\u5E02",
    620300: "\u91D1\u660C\u5E02",
    620400: "\u767D\u94F6\u5E02",
    620500: "\u5929\u6C34\u5E02",
    620600: "\u6B66\u5A01\u5E02",
    620700: "\u5F20\u6396\u5E02",
    620800: "\u5E73\u51C9\u5E02",
    620900: "\u9152\u6CC9\u5E02",
    621e3: "\u5E86\u9633\u5E02",
    621100: "\u5B9A\u897F\u5E02",
    621200: "\u9647\u5357\u5E02",
    622900: "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE",
    623e3: "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE"
  },
  620100: {
    620101: "\u5E02\u8F96\u533A",
    620102: "\u57CE\u5173\u533A",
    620103: "\u4E03\u91CC\u6CB3\u533A",
    620104: "\u897F\u56FA\u533A",
    620105: "\u5B89\u5B81\u533A",
    620111: "\u7EA2\u53E4\u533A",
    620121: "\u6C38\u767B\u53BF",
    620122: "\u768B\u5170\u53BF",
    620123: "\u6986\u4E2D\u53BF",
    620171: "\u5170\u5DDE\u65B0\u533A"
  },
  620200: {
    620201: "\u5E02\u8F96\u533A"
  },
  620300: {
    620301: "\u5E02\u8F96\u533A",
    620302: "\u91D1\u5DDD\u533A",
    620321: "\u6C38\u660C\u53BF"
  },
  620400: {
    620401: "\u5E02\u8F96\u533A",
    620402: "\u767D\u94F6\u533A",
    620403: "\u5E73\u5DDD\u533A",
    620421: "\u9756\u8FDC\u53BF",
    620422: "\u4F1A\u5B81\u53BF",
    620423: "\u666F\u6CF0\u53BF"
  },
  620500: {
    620501: "\u5E02\u8F96\u533A",
    620502: "\u79E6\u5DDE\u533A",
    620503: "\u9EA6\u79EF\u533A",
    620521: "\u6E05\u6C34\u53BF",
    620522: "\u79E6\u5B89\u53BF",
    620523: "\u7518\u8C37\u53BF",
    620524: "\u6B66\u5C71\u53BF",
    620525: "\u5F20\u5BB6\u5DDD\u56DE\u65CF\u81EA\u6CBB\u53BF"
  },
  620600: {
    620601: "\u5E02\u8F96\u533A",
    620602: "\u51C9\u5DDE\u533A",
    620621: "\u6C11\u52E4\u53BF",
    620622: "\u53E4\u6D6A\u53BF",
    620623: "\u5929\u795D\u85CF\u65CF\u81EA\u6CBB\u53BF"
  },
  620700: {
    620701: "\u5E02\u8F96\u533A",
    620702: "\u7518\u5DDE\u533A",
    620721: "\u8083\u5357\u88D5\u56FA\u65CF\u81EA\u6CBB\u53BF",
    620722: "\u6C11\u4E50\u53BF",
    620723: "\u4E34\u6CFD\u53BF",
    620724: "\u9AD8\u53F0\u53BF",
    620725: "\u5C71\u4E39\u53BF"
  },
  620800: {
    620801: "\u5E02\u8F96\u533A",
    620802: "\u5D06\u5CD2\u533A",
    620821: "\u6CFE\u5DDD\u53BF",
    620822: "\u7075\u53F0\u53BF",
    620823: "\u5D07\u4FE1\u53BF",
    620825: "\u5E84\u6D6A\u53BF",
    620826: "\u9759\u5B81\u53BF",
    620881: "\u534E\u4EAD\u5E02"
  },
  620900: {
    620901: "\u5E02\u8F96\u533A",
    620902: "\u8083\u5DDE\u533A",
    620921: "\u91D1\u5854\u53BF",
    620922: "\u74DC\u5DDE\u53BF",
    620923: "\u8083\u5317\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
    620924: "\u963F\u514B\u585E\u54C8\u8428\u514B\u65CF\u81EA\u6CBB\u53BF",
    620981: "\u7389\u95E8\u5E02",
    620982: "\u6566\u714C\u5E02"
  },
  621e3: {
    621001: "\u5E02\u8F96\u533A",
    621002: "\u897F\u5CF0\u533A",
    621021: "\u5E86\u57CE\u53BF",
    621022: "\u73AF\u53BF",
    621023: "\u534E\u6C60\u53BF",
    621024: "\u5408\u6C34\u53BF",
    621025: "\u6B63\u5B81\u53BF",
    621026: "\u5B81\u53BF",
    621027: "\u9547\u539F\u53BF"
  },
  621100: {
    621101: "\u5E02\u8F96\u533A",
    621102: "\u5B89\u5B9A\u533A",
    621121: "\u901A\u6E2D\u53BF",
    621122: "\u9647\u897F\u53BF",
    621123: "\u6E2D\u6E90\u53BF",
    621124: "\u4E34\u6D2E\u53BF",
    621125: "\u6F33\u53BF",
    621126: "\u5CB7\u53BF"
  },
  621200: {
    621201: "\u5E02\u8F96\u533A",
    621202: "\u6B66\u90FD\u533A",
    621221: "\u6210\u53BF",
    621222: "\u6587\u53BF",
    621223: "\u5B95\u660C\u53BF",
    621224: "\u5EB7\u53BF",
    621225: "\u897F\u548C\u53BF",
    621226: "\u793C\u53BF",
    621227: "\u5FBD\u53BF",
    621228: "\u4E24\u5F53\u53BF"
  },
  622900: {
    622901: "\u4E34\u590F\u5E02",
    622921: "\u4E34\u590F\u53BF",
    622922: "\u5EB7\u4E50\u53BF",
    622923: "\u6C38\u9756\u53BF",
    622924: "\u5E7F\u6CB3\u53BF",
    622925: "\u548C\u653F\u53BF",
    622926: "\u4E1C\u4E61\u65CF\u81EA\u6CBB\u53BF",
    622927: "\u79EF\u77F3\u5C71\u4FDD\u5B89\u65CF\u4E1C\u4E61\u65CF\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
  },
  623e3: {
    623001: "\u5408\u4F5C\u5E02",
    623021: "\u4E34\u6F6D\u53BF",
    623022: "\u5353\u5C3C\u53BF",
    623023: "\u821F\u66F2\u53BF",
    623024: "\u8FED\u90E8\u53BF",
    623025: "\u739B\u66F2\u53BF",
    623026: "\u788C\u66F2\u53BF",
    623027: "\u590F\u6CB3\u53BF"
  },
  63e4: {
    630100: "\u897F\u5B81\u5E02",
    630200: "\u6D77\u4E1C\u5E02",
    632200: "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE",
    632300: "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
    632500: "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
    632600: "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE",
    632700: "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE",
    632800: "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE"
  },
  630100: {
    630101: "\u5E02\u8F96\u533A",
    630102: "\u57CE\u4E1C\u533A",
    630103: "\u57CE\u4E2D\u533A",
    630104: "\u57CE\u897F\u533A",
    630105: "\u57CE\u5317\u533A",
    630121: "\u5927\u901A\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF",
    630122: "\u6E5F\u4E2D\u53BF",
    630123: "\u6E5F\u6E90\u53BF"
  },
  630200: {
    630202: "\u4E50\u90FD\u533A",
    630203: "\u5E73\u5B89\u533A",
    630222: "\u6C11\u548C\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF",
    630223: "\u4E92\u52A9\u571F\u65CF\u81EA\u6CBB\u53BF",
    630224: "\u5316\u9686\u56DE\u65CF\u81EA\u6CBB\u53BF",
    630225: "\u5FAA\u5316\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
  },
  632200: {
    632221: "\u95E8\u6E90\u56DE\u65CF\u81EA\u6CBB\u53BF",
    632222: "\u7941\u8FDE\u53BF",
    632223: "\u6D77\u664F\u53BF",
    632224: "\u521A\u5BDF\u53BF"
  },
  632300: {
    632321: "\u540C\u4EC1\u53BF",
    632322: "\u5C16\u624E\u53BF",
    632323: "\u6CFD\u5E93\u53BF",
    632324: "\u6CB3\u5357\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
  },
  632500: {
    632521: "\u5171\u548C\u53BF",
    632522: "\u540C\u5FB7\u53BF",
    632523: "\u8D35\u5FB7\u53BF",
    632524: "\u5174\u6D77\u53BF",
    632525: "\u8D35\u5357\u53BF"
  },
  632600: {
    632621: "\u739B\u6C81\u53BF",
    632622: "\u73ED\u739B\u53BF",
    632623: "\u7518\u5FB7\u53BF",
    632624: "\u8FBE\u65E5\u53BF",
    632625: "\u4E45\u6CBB\u53BF",
    632626: "\u739B\u591A\u53BF"
  },
  632700: {
    632701: "\u7389\u6811\u5E02",
    632722: "\u6742\u591A\u53BF",
    632723: "\u79F0\u591A\u53BF",
    632724: "\u6CBB\u591A\u53BF",
    632725: "\u56CA\u8C26\u53BF",
    632726: "\u66F2\u9EBB\u83B1\u53BF"
  },
  632800: {
    632801: "\u683C\u5C14\u6728\u5E02",
    632802: "\u5FB7\u4EE4\u54C8\u5E02",
    632803: "\u832B\u5D16\u5E02",
    632821: "\u4E4C\u5170\u53BF",
    632822: "\u90FD\u5170\u53BF",
    632823: "\u5929\u5CFB\u53BF",
    632857: "\u5927\u67F4\u65E6\u884C\u653F\u59D4\u5458\u4F1A"
  },
  64e4: {
    640100: "\u94F6\u5DDD\u5E02",
    640200: "\u77F3\u5634\u5C71\u5E02",
    640300: "\u5434\u5FE0\u5E02",
    640400: "\u56FA\u539F\u5E02",
    640500: "\u4E2D\u536B\u5E02"
  },
  640100: {
    640101: "\u5E02\u8F96\u533A",
    640104: "\u5174\u5E86\u533A",
    640105: "\u897F\u590F\u533A",
    640106: "\u91D1\u51E4\u533A",
    640121: "\u6C38\u5B81\u53BF",
    640122: "\u8D3A\u5170\u53BF",
    640181: "\u7075\u6B66\u5E02"
  },
  640200: {
    640201: "\u5E02\u8F96\u533A",
    640202: "\u5927\u6B66\u53E3\u533A",
    640205: "\u60E0\u519C\u533A",
    640221: "\u5E73\u7F57\u53BF"
  },
  640300: {
    640301: "\u5E02\u8F96\u533A",
    640302: "\u5229\u901A\u533A",
    640303: "\u7EA2\u5BFA\u5821\u533A",
    640323: "\u76D0\u6C60\u53BF",
    640324: "\u540C\u5FC3\u53BF",
    640381: "\u9752\u94DC\u5CE1\u5E02"
  },
  640400: {
    640401: "\u5E02\u8F96\u533A",
    640402: "\u539F\u5DDE\u533A",
    640422: "\u897F\u5409\u53BF",
    640423: "\u9686\u5FB7\u53BF",
    640424: "\u6CFE\u6E90\u53BF",
    640425: "\u5F6D\u9633\u53BF"
  },
  640500: {
    640501: "\u5E02\u8F96\u533A",
    640502: "\u6C99\u5761\u5934\u533A",
    640521: "\u4E2D\u5B81\u53BF",
    640522: "\u6D77\u539F\u53BF"
  },
  65e4: {
    650100: "\u4E4C\u9C81\u6728\u9F50\u5E02",
    650200: "\u514B\u62C9\u739B\u4F9D\u5E02",
    650400: "\u5410\u9C81\u756A\u5E02",
    650500: "\u54C8\u5BC6\u5E02",
    652300: "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",
    652700: "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE",
    652800: "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE",
    652900: "\u963F\u514B\u82CF\u5730\u533A",
    653e3: "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE",
    653100: "\u5580\u4EC0\u5730\u533A",
    653200: "\u548C\u7530\u5730\u533A",
    654e3: "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",
    654200: "\u5854\u57CE\u5730\u533A",
    654300: "\u963F\u52D2\u6CF0\u5730\u533A",
    659e3: "\u81EA\u6CBB\u533A\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212"
  },
  650100: {
    650101: "\u5E02\u8F96\u533A",
    650102: "\u5929\u5C71\u533A",
    650103: "\u6C99\u4F9D\u5DF4\u514B\u533A",
    650104: "\u65B0\u5E02\u533A",
    650105: "\u6C34\u78E8\u6C9F\u533A",
    650106: "\u5934\u5C6F\u6CB3\u533A",
    650107: "\u8FBE\u5742\u57CE\u533A",
    650109: "\u7C73\u4E1C\u533A",
    650121: "\u4E4C\u9C81\u6728\u9F50\u53BF"
  },
  650200: {
    650201: "\u5E02\u8F96\u533A",
    650202: "\u72EC\u5C71\u5B50\u533A",
    650203: "\u514B\u62C9\u739B\u4F9D\u533A",
    650204: "\u767D\u78B1\u6EE9\u533A",
    650205: "\u4E4C\u5C14\u79BE\u533A"
  },
  650400: {
    650402: "\u9AD8\u660C\u533A",
    650421: "\u912F\u5584\u53BF",
    650422: "\u6258\u514B\u900A\u53BF"
  },
  650500: {
    650502: "\u4F0A\u5DDE\u533A",
    650521: "\u5DF4\u91CC\u5764\u54C8\u8428\u514B\u81EA\u6CBB\u53BF",
    650522: "\u4F0A\u543E\u53BF"
  },
  652300: {
    652301: "\u660C\u5409\u5E02",
    652302: "\u961C\u5EB7\u5E02",
    652323: "\u547C\u56FE\u58C1\u53BF",
    652324: "\u739B\u7EB3\u65AF\u53BF",
    652325: "\u5947\u53F0\u53BF",
    652327: "\u5409\u6728\u8428\u5C14\u53BF",
    652328: "\u6728\u5792\u54C8\u8428\u514B\u81EA\u6CBB\u53BF"
  },
  652700: {
    652701: "\u535A\u4E50\u5E02",
    652702: "\u963F\u62C9\u5C71\u53E3\u5E02",
    652722: "\u7CBE\u6CB3\u53BF",
    652723: "\u6E29\u6CC9\u53BF"
  },
  652800: {
    652801: "\u5E93\u5C14\u52D2\u5E02",
    652822: "\u8F6E\u53F0\u53BF",
    652823: "\u5C09\u7281\u53BF",
    652824: "\u82E5\u7F8C\u53BF",
    652825: "\u4E14\u672B\u53BF",
    652826: "\u7109\u8006\u56DE\u65CF\u81EA\u6CBB\u53BF",
    652827: "\u548C\u9759\u53BF",
    652828: "\u548C\u7855\u53BF",
    652829: "\u535A\u6E56\u53BF",
    652871: "\u5E93\u5C14\u52D2\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
  },
  652900: {
    652901: "\u963F\u514B\u82CF\u5E02",
    652922: "\u6E29\u5BBF\u53BF",
    652923: "\u5E93\u8F66\u53BF",
    652924: "\u6C99\u96C5\u53BF",
    652925: "\u65B0\u548C\u53BF",
    652926: "\u62DC\u57CE\u53BF",
    652927: "\u4E4C\u4EC0\u53BF",
    652928: "\u963F\u74E6\u63D0\u53BF",
    652929: "\u67EF\u576A\u53BF"
  },
  653e3: {
    653001: "\u963F\u56FE\u4EC0\u5E02",
    653022: "\u963F\u514B\u9676\u53BF",
    653023: "\u963F\u5408\u5947\u53BF",
    653024: "\u4E4C\u6070\u53BF"
  },
  653100: {
    653101: "\u5580\u4EC0\u5E02",
    653121: "\u758F\u9644\u53BF",
    653122: "\u758F\u52D2\u53BF",
    653123: "\u82F1\u5409\u6C99\u53BF",
    653124: "\u6CFD\u666E\u53BF",
    653125: "\u838E\u8F66\u53BF",
    653126: "\u53F6\u57CE\u53BF",
    653127: "\u9EA6\u76D6\u63D0\u53BF",
    653128: "\u5CB3\u666E\u6E56\u53BF",
    653129: "\u4F3D\u5E08\u53BF",
    653130: "\u5DF4\u695A\u53BF",
    653131: "\u5854\u4EC0\u5E93\u5C14\u5E72\u5854\u5409\u514B\u81EA\u6CBB\u53BF"
  },
  653200: {
    653201: "\u548C\u7530\u5E02",
    653221: "\u548C\u7530\u53BF",
    653222: "\u58A8\u7389\u53BF",
    653223: "\u76AE\u5C71\u53BF",
    653224: "\u6D1B\u6D66\u53BF",
    653225: "\u7B56\u52D2\u53BF",
    653226: "\u4E8E\u7530\u53BF",
    653227: "\u6C11\u4E30\u53BF"
  },
  654e3: {
    654002: "\u4F0A\u5B81\u5E02",
    654003: "\u594E\u5C6F\u5E02",
    654004: "\u970D\u5C14\u679C\u65AF\u5E02",
    654021: "\u4F0A\u5B81\u53BF",
    654022: "\u5BDF\u5E03\u67E5\u5C14\u9521\u4F2F\u81EA\u6CBB\u53BF",
    654023: "\u970D\u57CE\u53BF",
    654024: "\u5DE9\u7559\u53BF",
    654025: "\u65B0\u6E90\u53BF",
    654026: "\u662D\u82CF\u53BF",
    654027: "\u7279\u514B\u65AF\u53BF",
    654028: "\u5C3C\u52D2\u514B\u53BF"
  },
  654200: {
    654201: "\u5854\u57CE\u5E02",
    654202: "\u4E4C\u82CF\u5E02",
    654221: "\u989D\u654F\u53BF",
    654223: "\u6C99\u6E7E\u53BF",
    654224: "\u6258\u91CC\u53BF",
    654225: "\u88D5\u6C11\u53BF",
    654226: "\u548C\u5E03\u514B\u8D5B\u5C14\u8499\u53E4\u81EA\u6CBB\u53BF"
  },
  654300: {
    654301: "\u963F\u52D2\u6CF0\u5E02",
    654321: "\u5E03\u5C14\u6D25\u53BF",
    654322: "\u5BCC\u8574\u53BF",
    654323: "\u798F\u6D77\u53BF",
    654324: "\u54C8\u5DF4\u6CB3\u53BF",
    654325: "\u9752\u6CB3\u53BF",
    654326: "\u5409\u6728\u4E43\u53BF"
  },
  659e3: {
    659001: "\u77F3\u6CB3\u5B50\u5E02",
    659002: "\u963F\u62C9\u5C14\u5E02",
    659003: "\u56FE\u6728\u8212\u514B\u5E02",
    659004: "\u4E94\u5BB6\u6E20\u5E02",
    659006: "\u94C1\u95E8\u5173\u5E02"
  },
  71e4: {
    710100: "\u53F0\u5317\u5E02",
    710200: "\u9AD8\u96C4\u5E02",
    710300: "\u57FA\u9686\u5E02",
    710400: "\u53F0\u4E2D\u5E02",
    710500: "\u53F0\u5357\u5E02",
    710600: "\u65B0\u7AF9\u5E02",
    710700: "\u5609\u4E49\u5E02"
  },
  710100: {
    710101: "\u5185\u6E56\u533A",
    710102: "\u5357\u6E2F\u533A",
    710103: "\u4E2D\u6B63\u533A",
    710104: "\u677E\u5C71\u533A",
    710105: "\u4FE1\u4E49\u533A",
    710106: "\u5927\u5B89\u533A",
    710107: "\u4E2D\u5C71\u533A",
    710108: "\u6587\u5C71\u533A",
    710109: "\u5927\u540C\u533A",
    710110: "\u4E07\u534E\u533A",
    710111: "\u58EB\u6797\u533A",
    710112: "\u5317\u6295\u533A"
  },
  710200: {
    710201: "\u65B0\u5174\u533A",
    710202: "\u524D\u91D1\u533A",
    710203: "\u82A9\u96C5\u533A",
    710204: "\u76D0\u57D5\u533A",
    710205: "\u9F13\u5C71\u533A",
    710206: "\u65D7\u6D25\u533A",
    710207: "\u524D\u9547\u533A",
    710208: "\u4E09\u6C11\u533A",
    710209: "\u5DE6\u8425\u533A",
    710210: "\u6960\u6893\u533A",
    710211: "\u5C0F\u6E2F\u533A"
  },
  710300: {
    710301: "\u4EC1\u7231\u533A",
    710302: "\u4FE1\u4E49\u533A",
    710303: "\u4E2D\u6B63\u533A",
    710304: "\u6696\u6696\u533A",
    710305: "\u5B89\u4E50\u533A",
    710307: "\u4E03\u5835\u533A"
  },
  710400: {
    710301: "\u4E2D\u533A",
    710302: "\u4E1C\u533A",
    710303: "\u5357\u533A",
    710304: "\u897F\u533A",
    710305: "\u5317\u533A",
    710306: "\u5317\u5C6F\u533A",
    710307: "\u897F\u5C6F\u533A",
    710308: "\u5357\u5C6F\u533A"
  },
  710500: {
    710501: "\u4E2D\u897F\u533A",
    710502: "\u4E1C\u533A",
    710503: "\u5357\u533A",
    710504: "\u5317\u533A",
    710505: "\u5B89\u5E73\u533A",
    710506: "\u5B89\u5357\u533A"
  },
  710600: {
    710601: "\u4E1C\u533A",
    710602: "\u5317\u533A",
    710603: "\u9999\u5C71\u533A"
  },
  710700: {
    710701: "\u4E1C\u533A",
    710702: "\u897F\u533A"
  },
  81e4: {
    810001: "\u4E2D\u897F\u5340",
    810002: "\u7063\u4ED4\u5340",
    810003: "\u6771\u5340",
    810004: "\u5357\u5340",
    810005: "\u6CB9\u5C16\u65FA\u5340",
    810006: "\u6DF1\u6C34\u57D7\u5340",
    810007: "\u4E5D\u9F8D\u57CE\u5340",
    810008: "\u9EC3\u5927\u4ED9\u5340",
    810009: "\u89C0\u5858\u5340",
    810010: "\u8343\u7063\u5340",
    810011: "\u5C6F\u9580\u5340",
    810012: "\u5143\u6717\u5340",
    810013: "\u5317\u5340",
    810014: "\u5927\u57D4\u5340",
    810015: "\u897F\u8CA2\u5340",
    810016: "\u6C99\u7530\u5340",
    810017: "\u8475\u9752\u5340",
    810018: "\u96E2\u5CF6\u5340"
  },
  82e4: {
    820001: "\u82B1\u5730\u746A\u5802\u5340",
    820002: "\u82B1\u738B\u5802\u5340",
    820003: "\u671B\u5FB7\u5802\u5340",
    820004: "\u5927\u5802\u5340",
    820005: "\u98A8\u9806\u5802\u5340",
    820006: "\u5609\u6A21\u5802\u5340",
    820007: "\u8DEF\u6C39\u586B\u6D77\u5340",
    820008: "\u8056\u65B9\u6FDF\u5404\u5802\u5340"
  }
};
(function(o) {
  o.exports = Nl;
})(mr);
const zt = /* @__PURE__ */ jl(mr.exports), Xo = [];
function pr(o, t) {
  return Go(zt, o) ? (Object.keys(zt[o]).forEach((n) => {
    zt[o][n], t.push({
      value: n,
      label: zt[o][n],
      children: pr(n, [])
    });
  }), t) : null;
}
pr(86, Xo);
function Hl(o) {
  return { all: o = o || /* @__PURE__ */ new Map(), on: function(t, e) {
    var n = o.get(t);
    n ? n.push(e) : o.set(t, [e]);
  }, off: function(t, e) {
    var n = o.get(t);
    n && (e ? n.splice(n.indexOf(e) >>> 0, 1) : o.set(t, []));
  }, emit: function(t, e) {
    var n = o.get(t);
    n && n.slice().map(function(a) {
      a(e);
    }), (n = o.get("*")) && n.slice().map(function(a) {
      a(t, e);
    });
  } };
}
const Wl = {
  name: "areaRender",
  components: { ElFormItem: I, ElCascader: lo },
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
    return {
      region: ie(Xo)
    };
  }
};
function ql(o, t, e, n, a, i) {
  const l = u("el-cascader"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        options: n.region,
        placeholder: e.options.placeholder,
        disabled: e.options.disabled,
        clearable: e.options.clearable,
        props: {
          expandTrigger: e.options.expandTrigger
        }
      }, null, 8, ["model-value", "options", "placeholder", "disabled", "clearable", "props"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Yl = /* @__PURE__ */ w(Wl, [["render", ql]]), Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yl
}, Symbol.toStringTag, { value: "Module" })), Xl = {
  name: "objectRender",
  components: { FormRenderItem: Uo(() => Promise.resolve().then(() => Pc)) },
  props: {
    path: String,
    modelValue: Object,
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o, { emit: t }) {
    return {
      update: (n, a) => {
        t("update:modelValue", Object.assign({}, o.modelValue, { [n]: a }));
      }
    };
  }
}, Kl = { class: "form-item-list" };
function Jl(o, t, e, n, a, i) {
  const l = u("form-render-item");
  return g(), D("div", Kl, [
    (g(!0), D(U, null, Q(e.items, (r) => (g(), y(l, {
      key: r.uuid,
      "model-value": e.modelValue[r.options.key],
      "onUpdate:modelValue": (s) => n.update(r.options.key, s),
      component: r.component,
      items: r.items,
      options: r.options,
      path: r.options.key ? e.path + "." + r.options.key : e.path,
      style: Ye({
        "padding-left": e.options.gutter / 2 + "px",
        "padding-right": e.options.gutter / 2 + "px"
      })
    }, null, 8, ["model-value", "onUpdate:modelValue", "component", "items", "options", "path", "style"]))), 128))
  ]);
}
const Ko = /* @__PURE__ */ w(Xl, [["render", Jl]]), Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ko
}, Symbol.toStringTag, { value: "Module" })), Ql = {
  name: "cardRender",
  components: { ElCard: tr, objectRender: Ko },
  props: {
    path: String,
    modelValue: Object,
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
}, ea = { class: "card-header" };
function ta(o, t, e, n, a, i) {
  const l = u("object-render"), r = u("el-card");
  return g(), y(r, {
    class: "form-card",
    shadow: e.options.shadow,
    "body-style": { padding: e.options.padding }
  }, {
    header: f(() => [
      $("div", ea, [
        $("span", null, te(e.options.label), 1)
      ])
    ]),
    default: f(() => [
      p(l, {
        items: e.items,
        options: e.options,
        path: e.path,
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s))
      }, null, 8, ["items", "options", "path", "model-value"])
    ]),
    _: 1
  }, 8, ["shadow", "body-style"]);
}
const oa = /* @__PURE__ */ w(Ql, [["render", ta]]), na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oa
}, Symbol.toStringTag, { value: "Module" }));
function Ve(o, t) {
  const e = B([]), n = (a) => {
    e.value = [], a.type === "static" ? e.value = a.items : a.type === "remote" && (a.remote && Go(t.options.remotes, a.remote) ? dr(t.options.remotes[a.remote]).then((i) => {
      e.value = i;
    }) : e.value = []);
  };
  return ye(
    () => o.options.options,
    (a) => {
      n(a);
    }
  ), n(o.options.options), {
    items: e,
    requestItems: n
  };
}
const ra = {
  name: "cascaderRender",
  components: { ElFormItem: I, ElCascader: lo },
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function la(o, t, e, n, a, i) {
  const l = u("el-cascader"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        options: n.items,
        placeholder: e.options.placeholder,
        disabled: e.options.disabled,
        clearable: e.options.clearable,
        props: {
          expandTrigger: e.options.expandTrigger
        }
      }, null, 8, ["model-value", "options", "placeholder", "disabled", "clearable", "props"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const aa = /* @__PURE__ */ w(ra, [["render", la]]), ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: aa
}, Symbol.toStringTag, { value: "Module" })), sa = {
  name: "checkboxRender",
  components: { ElFormItem: I, ElCheckboxGroup: or, ElCheckbox: oe },
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function da(o, t, e, n, a, i) {
  const l = u("el-checkbox"), r = u("el-checkbox-group"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(r, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => o.$emit("update:modelValue", d)),
        disabled: e.options.disabled
      }, {
        default: f(() => [
          (g(!0), D(U, null, Q(n.items, (d) => (g(), y(l, {
            key: d.value,
            label: d.value
          }, {
            default: f(() => [
              j(te(d.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const ua = /* @__PURE__ */ w(sa, [["render", da]]), ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ua
}, Symbol.toStringTag, { value: "Module" })), ma = {
  name: "colorPickerRender",
  components: { ElFormItem: I, ElColorPicker: it },
  props: {
    path: String,
    modelValue: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function pa(o, t, e, n, a, i) {
  const l = u("el-color-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        disabled: e.options.disabled,
        "show-alpha": e.options.showAlpha
      }, null, 8, ["model-value", "disabled", "show-alpha"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const fa = /* @__PURE__ */ w(ma, [["render", pa]]), _a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fa
}, Symbol.toStringTag, { value: "Module" })), ha = {
  name: "datePickerRender",
  components: { ElFormItem: I, ElDatePicker: ao },
  props: {
    path: String,
    modelValue: Date,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function ga(o, t, e, n, a, i) {
  const l = u("el-date-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        format: e.options.format,
        "prefix-icon": e.options.prefixIcon
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "format", "prefix-icon"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const ba = /* @__PURE__ */ w(ha, [["render", ga]]), va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ba
}, Symbol.toStringTag, { value: "Module" })), ya = {
  name: "dateRangePickerRender",
  components: { ElFormItem: I, ElDatePicker: ao },
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function xa(o, t, e, n, a, i) {
  const l = u("el-date-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        type: "daterange",
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        format: e.options.format,
        "prefix-icon": e.options.prefixIcon
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "format", "prefix-icon"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const wa = /* @__PURE__ */ w(ya, [["render", xa]]), Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wa
}, Symbol.toStringTag, { value: "Module" })), ka = {
  name: "dividerRender",
  components: { ElDivider: Wo },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function Oa(o, t, e, n, a, i) {
  const l = u("el-divider");
  return g(), y(l);
}
const Va = /* @__PURE__ */ w(ka, [["render", Oa]]), Ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Va
}, Symbol.toStringTag, { value: "Module" })), $a = {
  name: "htmlRender",
  components: {},
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
}, Ca = ["innerHTML"];
function ja(o, t, e, n, a, i) {
  return g(), D("div", {
    innerHTML: e.options.richContent
  }, null, 8, Ca);
}
const Ea = /* @__PURE__ */ w($a, [["render", ja]]), Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ea
}, Symbol.toStringTag, { value: "Module" })), Pa = {
  name: "inputRender",
  components: { ElFormItem: I, ElInput: W },
  props: {
    path: String,
    modelValue: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function Ma(o, t, e, n, a, i) {
  const l = u("el-input"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        type: "text",
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        "show-password": e.options.showPassword,
        "prefix-icon": e.options.prefixIcon,
        "suffix-icon": e.options.suffixIcon,
        maxlength: e.options.maxlength,
        "show-word-limit": e.options.showWordLimit
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "show-password", "prefix-icon", "suffix-icon", "maxlength", "show-word-limit"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Ia = /* @__PURE__ */ w(Pa, [["render", Ma]]), Aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ia
}, Symbol.toStringTag, { value: "Module" })), Ra = {
  name: "labelRender",
  components: { ElFormItem: I, ElInput: W },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function za(o, t, e, n, a, i) {
  return g(), D("label", {
    style: Ye({
      "line-height": e.options.lineHeight
    })
  }, te(e.options.content), 5);
}
const Fa = /* @__PURE__ */ w(Ra, [["render", za]]), Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fa
}, Symbol.toStringTag, { value: "Module" })), La = {
  name: "multiSelectRender",
  components: { ElFormItem: I, ElSelect: Ke, ElOption: jt },
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function Ua(o, t, e, n, a, i) {
  const l = u("el-option"), r = u("el-select"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(r, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => o.$emit("update:modelValue", d)),
        multiple: !0,
        "collapse-tags": e.options.collapseTags,
        "multiple-limit": e.options.multipleLimit,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        filterable: e.options.filterable,
        placeholder: e.options.placeholder,
        "no-data-text": e.options.noDataText,
        "no-match-text": e.options.noMatchText
      }, {
        default: f(() => [
          (g(!0), D(U, null, Q(n.items, (d) => (g(), y(l, {
            key: d.value,
            label: d.label,
            value: d.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "collapse-tags", "multiple-limit", "clearable", "disabled", "filterable", "placeholder", "no-data-text", "no-match-text"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Na = /* @__PURE__ */ w(La, [["render", Ua]]), Ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Na
}, Symbol.toStringTag, { value: "Module" })), Wa = {
  name: "numberRender",
  components: { ElFormItem: I, ElInputNumber: ze },
  props: {
    path: String,
    modelValue: Number,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function qa(o, t, e, n, a, i) {
  const l = u("el-input-number"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        min: e.options.min,
        max: e.options.max,
        disabled: e.options.disabled
      }, null, 8, ["model-value", "min", "max", "disabled"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Ya = /* @__PURE__ */ w(Wa, [["render", qa]]), Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ya
}, Symbol.toStringTag, { value: "Module" })), Xa = {
  name: "radioRender",
  components: { ElFormItem: I, ElRadioGroup: Fe, ElRadio: nr },
  props: {
    path: String,
    modelValue: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function Ka(o, t, e, n, a, i) {
  const l = u("el-radio"), r = u("el-radio-group"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(r, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => o.$emit("update:modelValue", d)),
        disabled: e.options.disabled
      }, {
        default: f(() => [
          (g(!0), D(U, null, Q(n.items, (d) => (g(), y(l, {
            key: d.value,
            label: d.value
          }, {
            default: f(() => [
              j(te(d.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Ja = /* @__PURE__ */ w(Xa, [["render", Ka]]), Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ja
}, Symbol.toStringTag, { value: "Module" })), Qa = {
  name: "rateRender",
  components: { ElFormItem: I, ElRate: rr },
  props: {
    path: String,
    modelValue: Number,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function ei(o, t, e, n, a, i) {
  const l = u("el-rate"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        class: "form-rate",
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        disabled: e.options.disabled,
        "allow-half": e.options.allowHalf,
        max: e.options.max
      }, null, 8, ["model-value", "disabled", "allow-half", "max"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const ti = /* @__PURE__ */ w(Qa, [["render", ei]]), oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ti
}, Symbol.toStringTag, { value: "Module" }));
var ni = Object.defineProperty, ri = Object.defineProperties, li = Object.getOwnPropertyDescriptors, hn = Object.getOwnPropertySymbols, ai = Object.prototype.hasOwnProperty, ii = Object.prototype.propertyIsEnumerable, gn = (o, t, e) => t in o ? ni(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, si = (o, t) => {
  for (var e in t || (t = {}))
    ai.call(t, e) && gn(o, e, t[e]);
  if (hn)
    for (var e of hn(t))
      ii.call(t, e) && gn(o, e, t[e]);
  return o;
}, di = (o, t) => ri(o, li(t));
function Me(o) {
  let t = `\u8BF7\u4F7F\u7528 '@${o}' \u4E8B\u4EF6\uFF0C\u4E0D\u8981\u653E\u5728 props \u4E2D`;
  return t += `
Please use '@${o}' event instead of props`, t;
}
var fr = (o, t) => {
  for (const [e, n] of t)
    o[e] = n;
  return o;
};
const ui = Ct({
  props: {
    mode: {
      type: String,
      default: "default"
    },
    defaultContent: {
      type: Array,
      default: []
    },
    defaultHtml: {
      type: String,
      default: ""
    },
    defaultConfig: {
      type: Object,
      default: {}
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(o, t) {
    const e = B(null), n = No(null), a = B(""), i = () => {
      if (!e.value)
        return;
      const r = Qn(o.defaultContent);
      Tl({
        selector: e.value,
        mode: o.mode,
        content: r || [],
        html: o.defaultHtml || o.modelValue || "",
        config: di(si({}, o.defaultConfig), {
          onCreated(s) {
            if (n.value = s, t.emit("onCreated", s), o.defaultConfig.onCreated) {
              const d = Me("onCreated");
              throw new Error(d);
            }
          },
          onChange(s) {
            const d = s.getHtml();
            if (a.value = d, t.emit("update:modelValue", d), t.emit("onChange", s), o.defaultConfig.onChange) {
              const m = Me("onChange");
              throw new Error(m);
            }
          },
          onDestroyed(s) {
            if (t.emit("onDestroyed", s), o.defaultConfig.onDestroyed) {
              const d = Me("onDestroyed");
              throw new Error(d);
            }
          },
          onMaxLength(s) {
            if (t.emit("onMaxLength", s), o.defaultConfig.onMaxLength) {
              const d = Me("onMaxLength");
              throw new Error(d);
            }
          },
          onFocus(s) {
            if (t.emit("onFocus", s), o.defaultConfig.onFocus) {
              const d = Me("onFocus");
              throw new Error(d);
            }
          },
          onBlur(s) {
            if (t.emit("onBlur", s), o.defaultConfig.onBlur) {
              const d = Me("onBlur");
              throw new Error(d);
            }
          },
          customAlert(s, d) {
            if (t.emit("customAlert", s, d), o.defaultConfig.customAlert) {
              const m = Me("customAlert");
              throw new Error(m);
            }
          },
          customPaste: (s, d) => {
            if (o.defaultConfig.customPaste) {
              const c = Me("customPaste");
              throw new Error(c);
            }
            let m;
            return t.emit("customPaste", s, d, (c) => {
              m = c;
            }), m;
          }
        })
      });
    };
    function l(r) {
      const s = n.value;
      s != null && s.setHtml(r);
    }
    return Oe(() => {
      i();
    }), ye(() => o.modelValue, (r) => {
      r !== a.value && l(r);
    }), {
      box: e
    };
  }
}), ci = {
  ref: "box",
  style: { height: "100%" }
};
function mi(o, t, e, n, a, i) {
  return g(), D("div", ci, null, 512);
}
var _r = /* @__PURE__ */ fr(ui, [["render", mi]]);
const pi = Ct({
  props: {
    editor: {
      type: Object
    },
    mode: {
      type: String,
      default: "default"
    },
    defaultConfig: {
      type: Object,
      default: {}
    }
  },
  setup(o) {
    const t = B(null), e = (n) => {
      if (!!t.value) {
        if (n == null)
          throw new Error("Not found instance of Editor when create <Toolbar/> component");
        $l.getToolbar(n) || Cl({
          editor: n,
          selector: t.value || "<div></div>",
          mode: o.mode,
          config: o.defaultConfig
        });
      }
    };
    return gl(() => {
      const { editor: n } = o;
      n != null && e(n);
    }), {
      selector: t
    };
  }
}), fi = { ref: "selector" };
function _i(o, t, e, n, a, i) {
  return g(), D("div", fi, null, 512);
}
var hr = /* @__PURE__ */ fr(pi, [["render", _i]]);
const hi = {
  name: "richEditorRender",
  components: { ElFormItem: I, Editor: _r, Toolbar: hr },
  props: {
    path: String,
    modelValue: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
    const o = No(), t = (e) => {
      o.value = e;
    };
    return er(() => {
      const e = o.value;
      e != null && e.destroy();
    }), {
      editorRef: o,
      handleCreated: t
    };
  }
}, gi = { class: "rich-editor-container" };
function bi(o, t, e, n, a, i) {
  const l = u("Toolbar"), r = u("Editor"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      $("div", gi, [
        p(l, {
          class: "rich-editor-toolbar",
          editor: n.editorRef
        }, null, 8, ["editor"]),
        p(r, {
          class: "rich-editor",
          "model-value": e.modelValue,
          "onUpdate:modelValue": t[0] || (t[0] = (d) => o.$emit("update:modelValue", d)),
          defaultConfig: { placeholder: e.options.placeholder, readOnly: e.options.disabled },
          onOnCreated: n.handleCreated,
          style: Ye({ height: e.options.height, width: "100%" })
        }, null, 8, ["model-value", "defaultConfig", "onOnCreated", "style"])
      ])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const vi = /* @__PURE__ */ w(hi, [["render", bi]]), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vi
}, Symbol.toStringTag, { value: "Module" })), xi = {
  name: "selectRender",
  components: { ElFormItem: I, ElSelect: Ke, ElOption: jt },
  props: {
    path: String,
    modelValue: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function wi(o, t, e, n, a, i) {
  const l = u("el-option"), r = u("el-select"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(r, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => o.$emit("update:modelValue", d)),
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        filterable: e.options.filterable,
        placeholder: e.options.placeholder,
        "no-data-text": e.options.noDataText,
        "no-match-text": e.options.noMatchText
      }, {
        default: f(() => [
          (g(!0), D(U, null, Q(n.items, (d) => (g(), y(l, {
            key: d.value,
            label: d.label,
            value: d.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "clearable", "disabled", "filterable", "placeholder", "no-data-text", "no-match-text"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Si = /* @__PURE__ */ w(xi, [["render", wi]]), ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Si
}, Symbol.toStringTag, { value: "Module" })), Oi = {
  name: "signatureRender",
  components: { Signature: sr, ElButton: xe },
  props: {
    path: String,
    modelValue: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o, { emit: t }) {
    const e = B(null), n = () => {
      const { data: l } = e.value.saveSignature();
      t("update:modelValue", l);
    }, a = () => {
      e.value.undoSignature(), n();
    }, i = () => {
      o.modelValue ? e.value.fromDataURL(o.modelValue) : e.value.clearSignature();
    };
    return ye(() => o.modelValue, i), Oe(i), {
      signatureRef: e,
      endStroke: n,
      undo: a
    };
  }
}, Vi = { class: "btn-submit" }, Ti = /* @__PURE__ */ j("\u64A4\u9500");
function $i(o, t, e, n, a, i) {
  const l = u("Signature"), r = u("el-button"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        ref: "signatureRef",
        disabled: e.options.disabled,
        width: e.options.width,
        height: e.options.height,
        options: {
          penColor: e.options.penColor,
          backgroundColor: e.options.backgroundColor,
          endStroke: n.endStroke
        }
      }, null, 8, ["disabled", "width", "height", "options"]),
      $("div", Vi, [
        p(r, {
          type: "primary",
          onClick: n.undo
        }, {
          default: f(() => [
            Ti
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Ci = /* @__PURE__ */ w(Oi, [["render", $i]]), ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ci
}, Symbol.toStringTag, { value: "Module" })), Ei = {
  name: "sliderRender",
  components: { ElFormItem: I, ElSlider: Be },
  props: {
    path: String,
    modelValue: Number,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function Di(o, t, e, n, a, i) {
  const l = u("el-slider"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        disabled: e.options.disabled,
        min: e.options.min,
        max: e.options.max,
        step: e.options.step,
        "show-stops": e.options.showStops,
        "show-input": e.options.showInput,
        "show-tooltip": e.options.showToolTip
      }, null, 8, ["model-value", "disabled", "min", "max", "step", "show-stops", "show-input", "show-tooltip"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Pi = /* @__PURE__ */ w(Ei, [["render", Di]]), Mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pi
}, Symbol.toStringTag, { value: "Module" })), Ii = {
  name: "switchRender",
  components: { ElFormItem: I, ElSwitch: lr },
  props: {
    path: String,
    modelValue: Boolean,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function Ai(o, t, e, n, a, i) {
  const l = u("el-switch"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        disabled: e.options.disabled,
        "active-text": e.options.activeText,
        "inactive-text": e.options.inactiveText,
        "active-color": e.options.activeColor,
        "inactive-color": e.options.inactiveColor
      }, null, 8, ["model-value", "disabled", "active-text", "inactive-text", "active-color", "inactive-color"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Ri = /* @__PURE__ */ w(Ii, [["render", Ai]]), zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ri
}, Symbol.toStringTag, { value: "Module" })), Fi = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
}, Bi = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M12 12h2v12h-2zm6 0h2v12h-2z"
}, null, -1), Li = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"
}, null, -1), Ui = [
  Bi,
  Li
];
function Ni(o, t) {
  return g(), D("svg", Fi, Ui);
}
const ut = { name: "carbon-trash-can", render: Ni }, Hi = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
}, Wi = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"
}, null, -1), qi = [
  Wi
];
function Yi(o, t) {
  return g(), D("svg", Hi, qi);
}
const Gi = { name: "carbon-edit", render: Yi }, Xi = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
}, Ki = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"
}, null, -1), Ji = [
  Ki
];
function Zi(o, t) {
  return g(), D("svg", Xi, Ji);
}
const Jo = { name: "carbon-add", render: Zi };
var Qi = typeof global == "object" && global && global.Object === Object && global;
const gr = Qi;
var es = typeof self == "object" && self && self.Object === Object && self, ts = gr || es || Function("return this")();
const Te = ts;
var os = Te.Symbol;
const rt = os;
var br = Object.prototype, ns = br.hasOwnProperty, rs = br.toString, ht = rt ? rt.toStringTag : void 0;
function ls(o) {
  var t = ns.call(o, ht), e = o[ht];
  try {
    o[ht] = void 0;
    var n = !0;
  } catch {
  }
  var a = rs.call(o);
  return n && (t ? o[ht] = e : delete o[ht]), a;
}
var as = Object.prototype, is = as.toString;
function ss(o) {
  return is.call(o);
}
var ds = "[object Null]", us = "[object Undefined]", bn = rt ? rt.toStringTag : void 0;
function Dt(o) {
  return o == null ? o === void 0 ? us : ds : bn && bn in Object(o) ? ls(o) : ss(o);
}
function Pt(o) {
  return o != null && typeof o == "object";
}
var cs = Array.isArray;
const Zo = cs;
function Mt(o) {
  var t = typeof o;
  return o != null && (t == "object" || t == "function");
}
var ms = "[object AsyncFunction]", ps = "[object Function]", fs = "[object GeneratorFunction]", _s = "[object Proxy]";
function vr(o) {
  if (!Mt(o))
    return !1;
  var t = Dt(o);
  return t == ps || t == fs || t == ms || t == _s;
}
var hs = Te["__core-js_shared__"];
const vo = hs;
var vn = function() {
  var o = /[^.]+$/.exec(vo && vo.keys && vo.keys.IE_PROTO || "");
  return o ? "Symbol(src)_1." + o : "";
}();
function gs(o) {
  return !!vn && vn in o;
}
var bs = Function.prototype, vs = bs.toString;
function Je(o) {
  if (o != null) {
    try {
      return vs.call(o);
    } catch {
    }
    try {
      return o + "";
    } catch {
    }
  }
  return "";
}
var ys = /[\\^$.*+?()[\]{}|]/g, xs = /^\[object .+?Constructor\]$/, ws = Function.prototype, Ss = Object.prototype, ks = ws.toString, Os = Ss.hasOwnProperty, Vs = RegExp(
  "^" + ks.call(Os).replace(ys, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ts(o) {
  if (!Mt(o) || gs(o))
    return !1;
  var t = vr(o) ? Vs : xs;
  return t.test(Je(o));
}
function $s(o, t) {
  return o == null ? void 0 : o[t];
}
function Ze(o, t) {
  var e = $s(o, t);
  return Ts(e) ? e : void 0;
}
var Cs = Ze(Te, "WeakMap");
const Po = Cs;
var yn = Object.create, js = function() {
  function o() {
  }
  return function(t) {
    if (!Mt(t))
      return {};
    if (yn)
      return yn(t);
    o.prototype = t;
    var e = new o();
    return o.prototype = void 0, e;
  };
}();
const Es = js;
function Ds(o, t) {
  var e = -1, n = o.length;
  for (t || (t = Array(n)); ++e < n; )
    t[e] = o[e];
  return t;
}
var Ps = function() {
  try {
    var o = Ze(Object, "defineProperty");
    return o({}, "", {}), o;
  } catch {
  }
}();
const xn = Ps;
function Ms(o, t) {
  for (var e = -1, n = o == null ? 0 : o.length; ++e < n && t(o[e], e, o) !== !1; )
    ;
  return o;
}
var Is = 9007199254740991, As = /^(?:0|[1-9]\d*)$/;
function Rs(o, t) {
  var e = typeof o;
  return t = t == null ? Is : t, !!t && (e == "number" || e != "symbol" && As.test(o)) && o > -1 && o % 1 == 0 && o < t;
}
function yr(o, t, e) {
  t == "__proto__" && xn ? xn(o, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : o[t] = e;
}
function xr(o, t) {
  return o === t || o !== o && t !== t;
}
var zs = Object.prototype, Fs = zs.hasOwnProperty;
function wr(o, t, e) {
  var n = o[t];
  (!(Fs.call(o, t) && xr(n, e)) || e === void 0 && !(t in o)) && yr(o, t, e);
}
function po(o, t, e, n) {
  var a = !e;
  e || (e = {});
  for (var i = -1, l = t.length; ++i < l; ) {
    var r = t[i], s = n ? n(e[r], o[r], r, e, o) : void 0;
    s === void 0 && (s = o[r]), a ? yr(e, r, s) : wr(e, r, s);
  }
  return e;
}
var Bs = 9007199254740991;
function Sr(o) {
  return typeof o == "number" && o > -1 && o % 1 == 0 && o <= Bs;
}
function kr(o) {
  return o != null && Sr(o.length) && !vr(o);
}
var Ls = Object.prototype;
function Qo(o) {
  var t = o && o.constructor, e = typeof t == "function" && t.prototype || Ls;
  return o === e;
}
function Us(o, t) {
  for (var e = -1, n = Array(o); ++e < o; )
    n[e] = t(e);
  return n;
}
var Ns = "[object Arguments]";
function wn(o) {
  return Pt(o) && Dt(o) == Ns;
}
var Or = Object.prototype, Hs = Or.hasOwnProperty, Ws = Or.propertyIsEnumerable, qs = wn(function() {
  return arguments;
}()) ? wn : function(o) {
  return Pt(o) && Hs.call(o, "callee") && !Ws.call(o, "callee");
};
const Ys = qs;
function Gs() {
  return !1;
}
var Vr = typeof exports == "object" && exports && !exports.nodeType && exports, Sn = Vr && typeof module == "object" && module && !module.nodeType && module, Xs = Sn && Sn.exports === Vr, kn = Xs ? Te.Buffer : void 0, Ks = kn ? kn.isBuffer : void 0, Js = Ks || Gs;
const Tr = Js;
var Zs = "[object Arguments]", Qs = "[object Array]", e0 = "[object Boolean]", t0 = "[object Date]", o0 = "[object Error]", n0 = "[object Function]", r0 = "[object Map]", l0 = "[object Number]", a0 = "[object Object]", i0 = "[object RegExp]", s0 = "[object Set]", d0 = "[object String]", u0 = "[object WeakMap]", c0 = "[object ArrayBuffer]", m0 = "[object DataView]", p0 = "[object Float32Array]", f0 = "[object Float64Array]", _0 = "[object Int8Array]", h0 = "[object Int16Array]", g0 = "[object Int32Array]", b0 = "[object Uint8Array]", v0 = "[object Uint8ClampedArray]", y0 = "[object Uint16Array]", x0 = "[object Uint32Array]", H = {};
H[p0] = H[f0] = H[_0] = H[h0] = H[g0] = H[b0] = H[v0] = H[y0] = H[x0] = !0;
H[Zs] = H[Qs] = H[c0] = H[e0] = H[m0] = H[t0] = H[o0] = H[n0] = H[r0] = H[l0] = H[a0] = H[i0] = H[s0] = H[d0] = H[u0] = !1;
function w0(o) {
  return Pt(o) && Sr(o.length) && !!H[Dt(o)];
}
function en(o) {
  return function(t) {
    return o(t);
  };
}
var $r = typeof exports == "object" && exports && !exports.nodeType && exports, yt = $r && typeof module == "object" && module && !module.nodeType && module, S0 = yt && yt.exports === $r, yo = S0 && gr.process, k0 = function() {
  try {
    var o = yt && yt.require && yt.require("util").types;
    return o || yo && yo.binding && yo.binding("util");
  } catch {
  }
}();
const lt = k0;
var On = lt && lt.isTypedArray, O0 = On ? en(On) : w0;
const V0 = O0;
var T0 = Object.prototype, $0 = T0.hasOwnProperty;
function Cr(o, t) {
  var e = Zo(o), n = !e && Ys(o), a = !e && !n && Tr(o), i = !e && !n && !a && V0(o), l = e || n || a || i, r = l ? Us(o.length, String) : [], s = r.length;
  for (var d in o)
    (t || $0.call(o, d)) && !(l && (d == "length" || a && (d == "offset" || d == "parent") || i && (d == "buffer" || d == "byteLength" || d == "byteOffset") || Rs(d, s))) && r.push(d);
  return r;
}
function jr(o, t) {
  return function(e) {
    return o(t(e));
  };
}
var C0 = jr(Object.keys, Object);
const j0 = C0;
var E0 = Object.prototype, D0 = E0.hasOwnProperty;
function P0(o) {
  if (!Qo(o))
    return j0(o);
  var t = [];
  for (var e in Object(o))
    D0.call(o, e) && e != "constructor" && t.push(e);
  return t;
}
function tn(o) {
  return kr(o) ? Cr(o) : P0(o);
}
function M0(o) {
  var t = [];
  if (o != null)
    for (var e in Object(o))
      t.push(e);
  return t;
}
var I0 = Object.prototype, A0 = I0.hasOwnProperty;
function R0(o) {
  if (!Mt(o))
    return M0(o);
  var t = Qo(o), e = [];
  for (var n in o)
    n == "constructor" && (t || !A0.call(o, n)) || e.push(n);
  return e;
}
function on(o) {
  return kr(o) ? Cr(o, !0) : R0(o);
}
var z0 = Ze(Object, "create");
const Tt = z0;
function F0() {
  this.__data__ = Tt ? Tt(null) : {}, this.size = 0;
}
function B0(o) {
  var t = this.has(o) && delete this.__data__[o];
  return this.size -= t ? 1 : 0, t;
}
var L0 = "__lodash_hash_undefined__", U0 = Object.prototype, N0 = U0.hasOwnProperty;
function H0(o) {
  var t = this.__data__;
  if (Tt) {
    var e = t[o];
    return e === L0 ? void 0 : e;
  }
  return N0.call(t, o) ? t[o] : void 0;
}
var W0 = Object.prototype, q0 = W0.hasOwnProperty;
function Y0(o) {
  var t = this.__data__;
  return Tt ? t[o] !== void 0 : q0.call(t, o);
}
var G0 = "__lodash_hash_undefined__";
function X0(o, t) {
  var e = this.__data__;
  return this.size += this.has(o) ? 0 : 1, e[o] = Tt && t === void 0 ? G0 : t, this;
}
function Xe(o) {
  var t = -1, e = o == null ? 0 : o.length;
  for (this.clear(); ++t < e; ) {
    var n = o[t];
    this.set(n[0], n[1]);
  }
}
Xe.prototype.clear = F0;
Xe.prototype.delete = B0;
Xe.prototype.get = H0;
Xe.prototype.has = Y0;
Xe.prototype.set = X0;
function K0() {
  this.__data__ = [], this.size = 0;
}
function fo(o, t) {
  for (var e = o.length; e--; )
    if (xr(o[e][0], t))
      return e;
  return -1;
}
var J0 = Array.prototype, Z0 = J0.splice;
function Q0(o) {
  var t = this.__data__, e = fo(t, o);
  if (e < 0)
    return !1;
  var n = t.length - 1;
  return e == n ? t.pop() : Z0.call(t, e, 1), --this.size, !0;
}
function ed(o) {
  var t = this.__data__, e = fo(t, o);
  return e < 0 ? void 0 : t[e][1];
}
function td(o) {
  return fo(this.__data__, o) > -1;
}
function od(o, t) {
  var e = this.__data__, n = fo(e, o);
  return n < 0 ? (++this.size, e.push([o, t])) : e[n][1] = t, this;
}
function Ee(o) {
  var t = -1, e = o == null ? 0 : o.length;
  for (this.clear(); ++t < e; ) {
    var n = o[t];
    this.set(n[0], n[1]);
  }
}
Ee.prototype.clear = K0;
Ee.prototype.delete = Q0;
Ee.prototype.get = ed;
Ee.prototype.has = td;
Ee.prototype.set = od;
var nd = Ze(Te, "Map");
const $t = nd;
function rd() {
  this.size = 0, this.__data__ = {
    hash: new Xe(),
    map: new ($t || Ee)(),
    string: new Xe()
  };
}
function ld(o) {
  var t = typeof o;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? o !== "__proto__" : o === null;
}
function _o(o, t) {
  var e = o.__data__;
  return ld(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function ad(o) {
  var t = _o(this, o).delete(o);
  return this.size -= t ? 1 : 0, t;
}
function id(o) {
  return _o(this, o).get(o);
}
function sd(o) {
  return _o(this, o).has(o);
}
function dd(o, t) {
  var e = _o(this, o), n = e.size;
  return e.set(o, t), this.size += e.size == n ? 0 : 1, this;
}
function ct(o) {
  var t = -1, e = o == null ? 0 : o.length;
  for (this.clear(); ++t < e; ) {
    var n = o[t];
    this.set(n[0], n[1]);
  }
}
ct.prototype.clear = rd;
ct.prototype.delete = ad;
ct.prototype.get = id;
ct.prototype.has = sd;
ct.prototype.set = dd;
function Er(o, t) {
  for (var e = -1, n = t.length, a = o.length; ++e < n; )
    o[a + e] = t[e];
  return o;
}
var ud = jr(Object.getPrototypeOf, Object);
const Dr = ud;
function cd() {
  this.__data__ = new Ee(), this.size = 0;
}
function md(o) {
  var t = this.__data__, e = t.delete(o);
  return this.size = t.size, e;
}
function pd(o) {
  return this.__data__.get(o);
}
function fd(o) {
  return this.__data__.has(o);
}
var _d = 200;
function hd(o, t) {
  var e = this.__data__;
  if (e instanceof Ee) {
    var n = e.__data__;
    if (!$t || n.length < _d - 1)
      return n.push([o, t]), this.size = ++e.size, this;
    e = this.__data__ = new ct(n);
  }
  return e.set(o, t), this.size = e.size, this;
}
function mt(o) {
  var t = this.__data__ = new Ee(o);
  this.size = t.size;
}
mt.prototype.clear = cd;
mt.prototype.delete = md;
mt.prototype.get = pd;
mt.prototype.has = fd;
mt.prototype.set = hd;
function gd(o, t) {
  return o && po(t, tn(t), o);
}
function bd(o, t) {
  return o && po(t, on(t), o);
}
var Pr = typeof exports == "object" && exports && !exports.nodeType && exports, Vn = Pr && typeof module == "object" && module && !module.nodeType && module, vd = Vn && Vn.exports === Pr, Tn = vd ? Te.Buffer : void 0, $n = Tn ? Tn.allocUnsafe : void 0;
function yd(o, t) {
  if (t)
    return o.slice();
  var e = o.length, n = $n ? $n(e) : new o.constructor(e);
  return o.copy(n), n;
}
function xd(o, t) {
  for (var e = -1, n = o == null ? 0 : o.length, a = 0, i = []; ++e < n; ) {
    var l = o[e];
    t(l, e, o) && (i[a++] = l);
  }
  return i;
}
function Mr() {
  return [];
}
var wd = Object.prototype, Sd = wd.propertyIsEnumerable, Cn = Object.getOwnPropertySymbols, kd = Cn ? function(o) {
  return o == null ? [] : (o = Object(o), xd(Cn(o), function(t) {
    return Sd.call(o, t);
  }));
} : Mr;
const nn = kd;
function Od(o, t) {
  return po(o, nn(o), t);
}
var Vd = Object.getOwnPropertySymbols, Td = Vd ? function(o) {
  for (var t = []; o; )
    Er(t, nn(o)), o = Dr(o);
  return t;
} : Mr;
const Ir = Td;
function $d(o, t) {
  return po(o, Ir(o), t);
}
function Ar(o, t, e) {
  var n = t(o);
  return Zo(o) ? n : Er(n, e(o));
}
function Cd(o) {
  return Ar(o, tn, nn);
}
function jd(o) {
  return Ar(o, on, Ir);
}
var Ed = Ze(Te, "DataView");
const Mo = Ed;
var Dd = Ze(Te, "Promise");
const Io = Dd;
var Pd = Ze(Te, "Set");
const Ao = Pd;
var jn = "[object Map]", Md = "[object Object]", En = "[object Promise]", Dn = "[object Set]", Pn = "[object WeakMap]", Mn = "[object DataView]", Id = Je(Mo), Ad = Je($t), Rd = Je(Io), zd = Je(Ao), Fd = Je(Po), We = Dt;
(Mo && We(new Mo(new ArrayBuffer(1))) != Mn || $t && We(new $t()) != jn || Io && We(Io.resolve()) != En || Ao && We(new Ao()) != Dn || Po && We(new Po()) != Pn) && (We = function(o) {
  var t = Dt(o), e = t == Md ? o.constructor : void 0, n = e ? Je(e) : "";
  if (n)
    switch (n) {
      case Id:
        return Mn;
      case Ad:
        return jn;
      case Rd:
        return En;
      case zd:
        return Dn;
      case Fd:
        return Pn;
    }
  return t;
});
const rn = We;
var Bd = Object.prototype, Ld = Bd.hasOwnProperty;
function Ud(o) {
  var t = o.length, e = new o.constructor(t);
  return t && typeof o[0] == "string" && Ld.call(o, "index") && (e.index = o.index, e.input = o.input), e;
}
var Nd = Te.Uint8Array;
const In = Nd;
function ln(o) {
  var t = new o.constructor(o.byteLength);
  return new In(t).set(new In(o)), t;
}
function Hd(o, t) {
  var e = t ? ln(o.buffer) : o.buffer;
  return new o.constructor(e, o.byteOffset, o.byteLength);
}
var Wd = /\w*$/;
function qd(o) {
  var t = new o.constructor(o.source, Wd.exec(o));
  return t.lastIndex = o.lastIndex, t;
}
var An = rt ? rt.prototype : void 0, Rn = An ? An.valueOf : void 0;
function Yd(o) {
  return Rn ? Object(Rn.call(o)) : {};
}
function Gd(o, t) {
  var e = t ? ln(o.buffer) : o.buffer;
  return new o.constructor(e, o.byteOffset, o.length);
}
var Xd = "[object Boolean]", Kd = "[object Date]", Jd = "[object Map]", Zd = "[object Number]", Qd = "[object RegExp]", eu = "[object Set]", tu = "[object String]", ou = "[object Symbol]", nu = "[object ArrayBuffer]", ru = "[object DataView]", lu = "[object Float32Array]", au = "[object Float64Array]", iu = "[object Int8Array]", su = "[object Int16Array]", du = "[object Int32Array]", uu = "[object Uint8Array]", cu = "[object Uint8ClampedArray]", mu = "[object Uint16Array]", pu = "[object Uint32Array]";
function fu(o, t, e) {
  var n = o.constructor;
  switch (t) {
    case nu:
      return ln(o);
    case Xd:
    case Kd:
      return new n(+o);
    case ru:
      return Hd(o, e);
    case lu:
    case au:
    case iu:
    case su:
    case du:
    case uu:
    case cu:
    case mu:
    case pu:
      return Gd(o, e);
    case Jd:
      return new n();
    case Zd:
    case tu:
      return new n(o);
    case Qd:
      return qd(o);
    case eu:
      return new n();
    case ou:
      return Yd(o);
  }
}
function _u(o) {
  return typeof o.constructor == "function" && !Qo(o) ? Es(Dr(o)) : {};
}
var hu = "[object Map]";
function gu(o) {
  return Pt(o) && rn(o) == hu;
}
var zn = lt && lt.isMap, bu = zn ? en(zn) : gu;
const vu = bu;
var yu = "[object Set]";
function xu(o) {
  return Pt(o) && rn(o) == yu;
}
var Fn = lt && lt.isSet, wu = Fn ? en(Fn) : xu;
const Su = wu;
var ku = 1, Ou = 2, Vu = 4, Rr = "[object Arguments]", Tu = "[object Array]", $u = "[object Boolean]", Cu = "[object Date]", ju = "[object Error]", zr = "[object Function]", Eu = "[object GeneratorFunction]", Du = "[object Map]", Pu = "[object Number]", Fr = "[object Object]", Mu = "[object RegExp]", Iu = "[object Set]", Au = "[object String]", Ru = "[object Symbol]", zu = "[object WeakMap]", Fu = "[object ArrayBuffer]", Bu = "[object DataView]", Lu = "[object Float32Array]", Uu = "[object Float64Array]", Nu = "[object Int8Array]", Hu = "[object Int16Array]", Wu = "[object Int32Array]", qu = "[object Uint8Array]", Yu = "[object Uint8ClampedArray]", Gu = "[object Uint16Array]", Xu = "[object Uint32Array]", N = {};
N[Rr] = N[Tu] = N[Fu] = N[Bu] = N[$u] = N[Cu] = N[Lu] = N[Uu] = N[Nu] = N[Hu] = N[Wu] = N[Du] = N[Pu] = N[Fr] = N[Mu] = N[Iu] = N[Au] = N[Ru] = N[qu] = N[Yu] = N[Gu] = N[Xu] = !0;
N[ju] = N[zr] = N[zu] = !1;
function Nt(o, t, e, n, a, i) {
  var l, r = t & ku, s = t & Ou, d = t & Vu;
  if (e && (l = a ? e(o, n, a, i) : e(o)), l !== void 0)
    return l;
  if (!Mt(o))
    return o;
  var m = Zo(o);
  if (m) {
    if (l = Ud(o), !r)
      return Ds(o, l);
  } else {
    var c = rn(o), h = c == zr || c == Eu;
    if (Tr(o))
      return yd(o, r);
    if (c == Fr || c == Rr || h && !a) {
      if (l = s || h ? {} : _u(o), !r)
        return s ? $d(o, bd(l, o)) : Od(o, gd(l, o));
    } else {
      if (!N[c])
        return a ? o : {};
      l = fu(o, c, r);
    }
  }
  i || (i = new mt());
  var _ = i.get(o);
  if (_)
    return _;
  i.set(o, l), Su(o) ? o.forEach(function(x) {
    l.add(Nt(x, t, e, x, o, i));
  }) : vu(o) && o.forEach(function(x, S) {
    l.set(S, Nt(x, t, e, S, o, i));
  });
  var b = d ? s ? jd : Cd : s ? on : tn, v = m ? void 0 : b(o);
  return Ms(v || o, function(x, S) {
    v && (S = x, x = o[S]), wr(l, S, Nt(x, t, e, S, o, i));
  }), l;
}
var Ku = 1, Ju = 4;
function ue(o) {
  return Nt(o, Ku | Ju);
}
const Zu = {
  name: "tableRender",
  components: {
    ElFormItem: I,
    ElButton: xe,
    ElTable: xl,
    ElTableColumn: wl,
    ElDialog: Le,
    ElIcon: Et,
    FormRender: Uo(() => Promise.resolve().then(() => Fc))
  },
  props: {
    path: String,
    modelValue: Array,
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o, { emit: t }) {
    const e = z("state"), n = ie({
      items: []
    }), a = B(null), i = ie({
      title: "",
      isShow: !1,
      index: -1
    }), l = () => {
      i.title = "\u6DFB\u52A0", i.isShow = !0, i.index = -1, Ge(() => {
        setTimeout(() => {
          a.value && a.value.init(Object.assign({}, e.formDesign, { items: o.items }));
        }, 20);
      });
    }, r = (c, h) => {
      i.title = "\u7F16\u8F91", i.isShow = !0, i.index = c, Ge(() => {
        setTimeout(() => {
          a.value && a.value.init(Object.assign({}, e.formDesign, { items: o.items }), h);
        }, 20);
      });
    }, s = (c) => {
      n.items.splice(c, 1), t("update:modelValue", n.items);
    }, d = (c) => {
      i.index > -1 ? n.items.splice(i.index, 1, c) : n.items.push(c), i.isShow = !1, t("update:modelValue", n.items);
    }, m = () => {
      n.items = ue(o.modelValue);
    };
    return Oe(m), ye(() => o.modelValue, m), {
      data: n,
      formRender: a,
      formDialog: i,
      add: l,
      edit: r,
      remove: s,
      save: d
    };
  }
}, Qu = { class: "tools" }, ec = /* @__PURE__ */ j(" \u6DFB\u52A0 ");
function tc(o, t, e, n, a, i) {
  const l = Jo, r = u("el-icon"), s = u("el-button"), d = u("el-table-column"), m = Gi, c = ut, h = u("el-table"), _ = u("el-form-item"), b = u("form-render"), v = u("el-dialog");
  return g(), D(U, null, [
    p(_, {
      prop: e.path,
      label: e.options.label,
      rules: e.options.rules
    }, {
      default: f(() => [
        $("div", Qu, [
          p(s, {
            class: "add-btn",
            type: "primary",
            onClick: n.add
          }, {
            default: f(() => [
              p(r, null, {
                default: f(() => [
                  p(l)
                ]),
                _: 1
              }),
              ec
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        p(h, {
          class: "edit-table",
          data: n.data.items,
          style: { width: "100%" },
          border: ""
        }, {
          default: f(() => [
            p(d, {
              type: "index",
              width: "80",
              label: "\u5E8F\u53F7",
              align: "center"
            }),
            (g(!0), D(U, null, Q(e.items, (x, S) => (g(), y(d, {
              key: S,
              prop: x.options.key,
              label: x.options.label
            }, null, 8, ["prop", "label"]))), 128)),
            p(d, {
              label: "\u64CD\u4F5C",
              align: "center",
              width: "120",
              "class-name": "small-padding"
            }, {
              default: f((x) => [
                p(s, {
                  type: "primary",
                  circle: "",
                  onClick: (S) => n.edit(x.$index, x.row)
                }, {
                  default: f(() => [
                    p(r, null, {
                      default: f(() => [
                        p(m)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                p(s, {
                  type: "danger",
                  circle: "",
                  onClick: (S) => n.remove(x.$index)
                }, {
                  default: f(() => [
                    p(r, null, {
                      default: f(() => [
                        p(c)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["data"])
      ]),
      _: 1
    }, 8, ["prop", "label", "rules"]),
    p(v, {
      title: n.formDialog.title,
      modelValue: n.formDialog.isShow,
      "onUpdate:modelValue": t[0] || (t[0] = (x) => n.formDialog.isShow = x),
      "close-on-click-modal": !1,
      width: "750px"
    }, {
      default: f(() => [
        p(b, {
          ref: "formRender",
          onSubmit: n.save
        }, null, 8, ["onSubmit"])
      ]),
      _: 1
    }, 8, ["title", "modelValue"])
  ], 64);
}
const oc = /* @__PURE__ */ w(Zu, [["render", tc], ["__scopeId", "data-v-797c1a17"]]), nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oc
}, Symbol.toStringTag, { value: "Module" })), rc = {
  name: "tabsRender",
  components: { ElFormItem: I, ElTabs: ar, ElTabPane: ir, objectRender: Ko },
  props: {
    path: String,
    modelValue: Object,
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o, { emit: t }) {
    const e = B(""), n = z("emitter"), a = (i, l) => {
      t("update:modelValue", Object.assign({}, o.modelValue, { [i]: l }));
    };
    return Oe(() => {
      e.value = o.items.length ? o.items[0].options.key : "", n.on("validateError", (i) => {
        for (let l = 0; l < o.items.length; l++) {
          const r = o.items[l];
          if (i.indexOf(o.path + "." + r.options.key) > -1)
            return e.value = r.options.key;
        }
      });
    }), {
      tabsValue: e,
      update: a
    };
  }
};
function lc(o, t, e, n, a, i) {
  const l = u("object-render"), r = u("el-tab-pane"), s = u("el-tabs");
  return g(), y(s, {
    modelValue: n.tabsValue,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => n.tabsValue = d),
    type: e.options.tabType,
    "tab-position": e.options.tabPosition
  }, {
    default: f(() => [
      (g(!0), D(U, null, Q(e.items, (d) => (g(), y(r, {
        key: d.name,
        label: d.options.label,
        name: d.options.key
      }, {
        default: f(() => [
          p(l, {
            items: d.items,
            options: d.options,
            path: e.path + "." + d.options.key,
            "model-value": e.modelValue[d.options.key],
            "onUpdate:modelValue": (m) => n.update(d.options.key, m)
          }, null, 8, ["items", "options", "path", "model-value", "onUpdate:modelValue"])
        ]),
        _: 2
      }, 1032, ["label", "name"]))), 128))
    ]),
    _: 1
  }, 8, ["modelValue", "type", "tab-position"]);
}
const ac = /* @__PURE__ */ w(rc, [["render", lc]]), ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ac
}, Symbol.toStringTag, { value: "Module" })), sc = {
  name: "textareaRender",
  components: { ElFormItem: I, ElInput: W },
  props: {
    path: String,
    modelValue: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function dc(o, t, e, n, a, i) {
  const l = u("el-input"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        type: "textarea",
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        placeholder: e.options.placeholder,
        rows: e.options.rows,
        disabled: e.options.disabled,
        maxlength: e.options.maxlength,
        "show-word-limit": e.options.showWordLimit
      }, null, 8, ["model-value", "placeholder", "rows", "disabled", "maxlength", "show-word-limit"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const uc = /* @__PURE__ */ w(sc, [["render", dc]]), cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uc
}, Symbol.toStringTag, { value: "Module" })), mc = {
  name: "timePickerRender",
  components: { ElFormItem: I, ElTimePicker: io },
  props: {
    path: String,
    modelValue: Date,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function pc(o, t, e, n, a, i) {
  const l = u("el-time-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        format: e.options.format,
        "prefix-icon": e.options.prefixIcon
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "format", "prefix-icon"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const fc = /* @__PURE__ */ w(mc, [["render", pc]]), _c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fc
}, Symbol.toStringTag, { value: "Module" })), hc = {
  name: "timeRangePickerRender",
  components: { ElFormItem: I, ElTimePicker: io },
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function gc(o, t, e, n, a, i) {
  const l = u("el-time-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        "is-range": "",
        "model-value": e.modelValue,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        format: e.options.format,
        "prefix-icon": e.options.prefixIcon
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "format", "prefix-icon"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const bc = /* @__PURE__ */ w(hc, [["render", gc]]), vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bc
}, Symbol.toStringTag, { value: "Module" })), yc = {
  name: "uploadFileRender",
  components: { ElFormItem: I, ElUpload: so, ElButton: xe },
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o, { emit: t }) {
    const e = ie({
      fileList: []
    }), n = (r) => {
      const s = o.options.fileSuffix, d = o.options.uploadSize, m = parseFloat(d), h = { KB: 1024, MB: 1024 * 1024, GB: 1024 * 1024 * 1024 }[d.substr(d.length - 2)];
      if (r.size / h < m) {
        if (s && s.length && !s.some((b) => r.type.indexOf(b) > -1))
          return me.error(`\u8BF7\u4E0A\u4F20 ${s.join("\uFF0C")} \u683C\u5F0F\u6587\u4EF6!`), !1;
      } else
        return me.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${d}!`), !1;
      return !0;
    }, a = (r, s, d) => {
      const m = [];
      d && d.length && d.forEach((c) => {
        m.push({
          name: c.name,
          ...c.response
        });
      }), t("update:modelValue", m);
    }, i = () => {
      me.error("\u4E0A\u4F20\u5931\u8D25!");
    }, l = () => {
      e.fileList = ue(o.modelValue);
    };
    return Oe(l), ye(() => o.modelValue, l), {
      data: e,
      beforeUpload: n,
      handleChange: a,
      handleError: i
    };
  }
}, xc = { class: "el-upload__tip" };
function wc(o, t, e, n, a, i) {
  const l = u("el-button"), r = u("el-upload"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(r, {
        action: e.options.uploadUrl,
        name: e.options.uploadName,
        multiple: e.options.multiple,
        data: e.options.uploadData,
        headers: e.options.uploadHeaders,
        "show-file-list": e.options.showFileList,
        limit: e.options.limit,
        "file-list": n.data.fileList,
        "onUpdate:file-list": t[0] || (t[0] = (d) => n.data.fileList = d),
        disabled: e.options.disabled,
        "before-upload": n.beforeUpload,
        "on-success": n.handleChange,
        "on-remove": n.handleChange,
        "on-error": n.handleError
      }, ro({
        default: f(() => [
          p(l, { type: "primary" }, {
            default: f(() => [
              j(te(e.options.buttonText), 1)
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        e.options.showToolTip ? {
          name: "tip",
          fn: f(() => [
            $("div", xc, te(e.options.tip), 1)
          ])
        } : void 0
      ]), 1032, ["action", "name", "multiple", "data", "headers", "show-file-list", "limit", "file-list", "disabled", "before-upload", "on-success", "on-remove", "on-error"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Sc = /* @__PURE__ */ w(yc, [["render", wc]]), kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sc
}, Symbol.toStringTag, { value: "Module" })), Oc = {
  name: "uploadImageRender",
  components: { ElFormItem: I, ElUpload: so },
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o, { emit: t }) {
    const e = ie({
      fileList: []
    }), n = B(""), a = B(!1), i = (m) => {
      const c = o.options.imageSuffix, h = o.options.uploadSize, _ = parseFloat(h), v = { KB: 1024, MB: 1024 * 1024, GB: 1024 * 1024 * 1024 }[h.substr(h.length - 2)];
      if (m.size / v < _) {
        if (c && c.length && !c.some((S) => m.type.indexOf(S) > -1))
          return me.error(`\u8BF7\u4E0A\u4F20 ${c.join("\uFF0C")} \u683C\u5F0F\u56FE\u7247!`), !1;
      } else
        return me.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${h}!`), !1;
      return !0;
    }, l = (m, c, h) => {
      const _ = [];
      h && h.length && h.forEach((b) => {
        _.push({
          name: b.name,
          ...b.response
        });
      }), t("update:modelValue", _);
    }, r = () => {
      me.error("\u4E0A\u4F20\u5931\u8D25!");
    }, s = (m) => {
      n.value = m.url, a.value = !0;
    }, d = () => {
      e.fileList = ue(o.modelValue);
    };
    return Oe(d), ye(() => o.modelValue, d), {
      data: e,
      dialogImageUrl: n,
      dialogVisible: a,
      beforeUpload: i,
      handleChange: l,
      handleError: r,
      handlePreview: s
    };
  }
}, Vc = { class: "el-upload__tip" }, Tc = ["src"];
function $c(o, t, e, n, a, i) {
  const l = Jo, r = u("el-icon"), s = u("el-upload"), d = u("el-dialog"), m = u("el-form-item");
  return g(), y(m, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(s, {
        "list-type": "picture-card",
        action: e.options.uploadUrl,
        name: e.options.uploadName,
        multiple: e.options.multiple,
        data: e.options.uploadData,
        headers: e.options.uploadHeaders,
        limit: e.options.limit,
        "file-list": n.data.fileList,
        "onUpdate:file-list": t[0] || (t[0] = (c) => n.data.fileList = c),
        disabled: e.options.disabled,
        "before-upload": n.beforeUpload,
        "on-success": n.handleChange,
        "on-remove": n.handleChange,
        "on-error": n.handleError,
        "on-preview": n.handlePreview
      }, ro({
        default: f(() => [
          p(r, null, {
            default: f(() => [
              p(l)
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        e.options.showToolTip ? {
          name: "tip",
          fn: f(() => [
            $("div", Vc, te(e.options.tip), 1)
          ])
        } : void 0
      ]), 1032, ["action", "name", "multiple", "data", "headers", "limit", "file-list", "disabled", "before-upload", "on-success", "on-remove", "on-error", "on-preview"]),
      p(d, {
        modelValue: n.dialogVisible,
        "onUpdate:modelValue": t[1] || (t[1] = (c) => n.dialogVisible = c)
      }, {
        default: f(() => [
          $("img", {
            "w-full": "",
            src: n.dialogImageUrl,
            alt: "Preview Image"
          }, null, 8, Tc)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Cc = /* @__PURE__ */ w(Oc, [["render", $c]]), jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cc
}, Symbol.toStringTag, { value: "Module" })), Br = {};
Object.values(/* @__PURE__ */ Object.assign({ "./components/area-render.vue": Gl, "./components/card-render.vue": na, "./components/cascader-render.vue": ia, "./components/checkbox-render.vue": ca, "./components/color-picker-render.vue": _a, "./components/date-picker-render.vue": va, "./components/date-range-picker-render.vue": Sa, "./components/divider-render.vue": Ta, "./components/html-render.vue": Da, "./components/input-render.vue": Aa, "./components/label-render.vue": Ba, "./components/multi-select-render.vue": Ha, "./components/number-render.vue": Ga, "./components/object-render.vue": Zl, "./components/radio-render.vue": Za, "./components/rate-render.vue": oi, "./components/rich-editor-render.vue": yi, "./components/select-render.vue": ki, "./components/signature-render.vue": ji, "./components/slider-render.vue": Mi, "./components/switch-render.vue": zi, "./components/table-render.vue": nc, "./components/tabs-render.vue": ic, "./components/textarea-render.vue": cc, "./components/time-picker-render.vue": _c, "./components/time-range-picker-render.vue": vc, "./components/upload-file-render.vue": kc, "./components/upload-image-render.vue": jc })).forEach(
  ({ default: o }) => Br[o.name] = o
);
const Ec = {
  name: "formRenderItem",
  components: { ...Br },
  props: {
    path: {
      type: String,
      default: ""
    },
    component: String,
    modelValue: [String, Number, Boolean, Date, Object, Array],
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function Dc(o, t, e, n, a, i) {
  return e.options.hidden ? G("", !0) : (g(), D("div", {
    key: 0,
    class: "form-item",
    style: Ye({ width: e.options.width })
  }, [
    (g(), y(Ho(e.component + "-render"), {
      items: e.items,
      options: e.options,
      "model-value": e.modelValue,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => o.$emit("update:modelValue", l)),
      path: e.path
    }, null, 8, ["items", "options", "model-value", "path"]))
  ], 4));
}
const an = /* @__PURE__ */ w(Ec, [["render", Dc]]), Pc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: an
}, Symbol.toStringTag, { value: "Module" })), Mc = {
  name: "formRender",
  components: { ElForm: uo, FormRenderItem: an, ElButton: xe },
  props: {},
  setup(o, { emit: t }) {
    const e = B(null), n = ie({
      formDesign: {
        options: {
          key: "",
          defaultValue: {}
        }
      },
      formData: {}
    }), a = Hl(), i = (d, m, c = {}) => {
      d.forEach((h) => {
        const _ = h.options.key;
        m[_] = c[_] || h.options.defaultValue;
        for (let b in h.options)
          if (Yo(h.options[b])) {
            const v = new Function(
              "root",
              "options",
              `try {
                return ${ur(h.options[b])}
              } catch(e) {
                console.log(e)
              }`
            );
            h.options[b] = ve({
              get() {
                return v(n.formData.root, h.options);
              }
            });
          }
        h.items && i(h.items, m[_], c[_]);
      });
    }, l = (d, m) => {
      n.formDesign = d, n.formDesign.options.key = "root", n.formDesign.options.defaultValue = {}, i([n.formDesign], n.formData, { root: m }), e.value && e.value.clearValidate();
    }, r = () => {
      e.value.validate((d, m) => {
        d ? t("submit", Qn(n.formData.root)) : a.emit("validateError", Object.keys(m)[0]);
      });
    }, s = () => {
      e.value.resetFields();
    };
    return le("emitter", a), le("state", n), {
      formRef: e,
      state: n,
      init: l,
      submit: r,
      reset: s
    };
  }
}, Ic = { class: "btn-submit" }, Ac = /* @__PURE__ */ j("\u63D0\u4EA4"), Rc = /* @__PURE__ */ j("\u91CD\u7F6E");
function zc(o, t, e, n, a, i) {
  const l = u("form-render-item"), r = u("el-button"), s = u("el-form");
  return g(), y(s, {
    class: "form-render",
    ref: "formRef",
    "label-width": n.state.formDesign.options.labelWidth,
    "label-position": n.state.formDesign.options.labelPosition,
    "hide-required-asterisk": n.state.formDesign.options.hideRequiredAsterisk,
    "status-icon": n.state.formDesign.options.statusIcon,
    inline: n.state.formDesign.options.inline,
    size: n.state.formDesign.options.size,
    model: n.state.formData
  }, {
    default: f(() => [
      p(l, {
        class: "root",
        modelValue: n.state.formData.root,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => n.state.formData.root = d),
        component: n.state.formDesign.component,
        items: n.state.formDesign.items,
        options: n.state.formDesign.options,
        path: "root"
      }, null, 8, ["modelValue", "component", "items", "options"]),
      $("div", Ic, [
        p(r, {
          type: "primary",
          onClick: n.submit
        }, {
          default: f(() => [
            Ac
          ]),
          _: 1
        }, 8, ["onClick"]),
        p(r, {
          type: "default",
          onClick: n.reset
        }, {
          default: f(() => [
            Rc
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    _: 1
  }, 8, ["label-width", "label-position", "hide-required-asterisk", "status-icon", "inline", "size", "model"]);
}
const sn = /* @__PURE__ */ w(Mc, [["render", zc]]), Fc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn
}, Symbol.toStringTag, { value: "Module" }));
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Bn(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(o);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(o, a).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function ke(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bn(Object(e), !0).forEach(function(n) {
      Bc(o, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Bn(Object(e)).forEach(function(n) {
      Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return o;
}
function Ht(o) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ht = function(t) {
    return typeof t;
  } : Ht = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ht(o);
}
function Bc(o, t, e) {
  return t in o ? Object.defineProperty(o, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[t] = e, o;
}
function je() {
  return je = Object.assign || function(o) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
    }
    return o;
  }, je.apply(this, arguments);
}
function Lc(o, t) {
  if (o == null)
    return {};
  var e = {}, n = Object.keys(o), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (e[a] = o[a]);
  return e;
}
function Uc(o, t) {
  if (o == null)
    return {};
  var e = Lc(o, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(o, n) || (e[n] = o[n]));
  }
  return e;
}
var Nc = "1.14.0";
function Ce(o) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(o);
}
var De = Ce(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), It = Ce(/Edge/i), Ln = Ce(/firefox/i), xt = Ce(/safari/i) && !Ce(/chrome/i) && !Ce(/android/i), Lr = Ce(/iP(ad|od|hone)/i), Hc = Ce(/chrome/i) && Ce(/android/i), Ur = {
  capture: !1,
  passive: !1
};
function L(o, t, e) {
  o.addEventListener(t, e, !De && Ur);
}
function F(o, t, e) {
  o.removeEventListener(t, e, !De && Ur);
}
function Qt(o, t) {
  if (!!t) {
    if (t[0] === ">" && (t = t.substring(1)), o)
      try {
        if (o.matches)
          return o.matches(t);
        if (o.msMatchesSelector)
          return o.msMatchesSelector(t);
        if (o.webkitMatchesSelector)
          return o.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Wc(o) {
  return o.host && o !== document && o.host.nodeType ? o.host : o.parentNode;
}
function we(o, t, e, n) {
  if (o) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? o.parentNode === e && Qt(o, t) : Qt(o, t)) || n && o === e)
        return o;
      if (o === e)
        break;
    } while (o = Wc(o));
  }
  return null;
}
var Un = /\s+/g;
function pe(o, t, e) {
  if (o && t)
    if (o.classList)
      o.classList[e ? "add" : "remove"](t);
    else {
      var n = (" " + o.className + " ").replace(Un, " ").replace(" " + t + " ", " ");
      o.className = (n + (e ? " " + t : "")).replace(Un, " ");
    }
}
function P(o, t, e) {
  var n = o && o.style;
  if (n) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(o, "") : o.currentStyle && (e = o.currentStyle), t === void 0 ? e : e[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function nt(o, t) {
  var e = "";
  if (typeof o == "string")
    e = o;
  else
    do {
      var n = P(o, "transform");
      n && n !== "none" && (e = n + " " + e);
    } while (!t && (o = o.parentNode));
  var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return a && new a(e);
}
function Nr(o, t, e) {
  if (o) {
    var n = o.getElementsByTagName(t), a = 0, i = n.length;
    if (e)
      for (; a < i; a++)
        e(n[a], a);
    return n;
  }
  return [];
}
function Se() {
  var o = document.scrollingElement;
  return o || document.documentElement;
}
function ne(o, t, e, n, a) {
  if (!(!o.getBoundingClientRect && o !== window)) {
    var i, l, r, s, d, m, c;
    if (o !== window && o.parentNode && o !== Se() ? (i = o.getBoundingClientRect(), l = i.top, r = i.left, s = i.bottom, d = i.right, m = i.height, c = i.width) : (l = 0, r = 0, s = window.innerHeight, d = window.innerWidth, m = window.innerHeight, c = window.innerWidth), (t || e) && o !== window && (a = a || o.parentNode, !De))
      do
        if (a && a.getBoundingClientRect && (P(a, "transform") !== "none" || e && P(a, "position") !== "static")) {
          var h = a.getBoundingClientRect();
          l -= h.top + parseInt(P(a, "border-top-width")), r -= h.left + parseInt(P(a, "border-left-width")), s = l + i.height, d = r + i.width;
          break;
        }
      while (a = a.parentNode);
    if (n && o !== window) {
      var _ = nt(a || o), b = _ && _.a, v = _ && _.d;
      _ && (l /= v, r /= b, c /= b, m /= v, s = l + m, d = r + c);
    }
    return {
      top: l,
      left: r,
      bottom: s,
      right: d,
      width: c,
      height: m
    };
  }
}
function Nn(o, t, e) {
  for (var n = Re(o, !0), a = ne(o)[t]; n; ) {
    var i = ne(n)[e], l = void 0;
    if (e === "top" || e === "left" ? l = a >= i : l = a <= i, !l)
      return n;
    if (n === Se())
      break;
    n = Re(n, !1);
  }
  return !1;
}
function at(o, t, e, n) {
  for (var a = 0, i = 0, l = o.children; i < l.length; ) {
    if (l[i].style.display !== "none" && l[i] !== M.ghost && (n || l[i] !== M.dragged) && we(l[i], e.draggable, o, !1)) {
      if (a === t)
        return l[i];
      a++;
    }
    i++;
  }
  return null;
}
function dn(o, t) {
  for (var e = o.lastElementChild; e && (e === M.ghost || P(e, "display") === "none" || t && !Qt(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function ge(o, t) {
  var e = 0;
  if (!o || !o.parentNode)
    return -1;
  for (; o = o.previousElementSibling; )
    o.nodeName.toUpperCase() !== "TEMPLATE" && o !== M.clone && (!t || Qt(o, t)) && e++;
  return e;
}
function Hn(o) {
  var t = 0, e = 0, n = Se();
  if (o)
    do {
      var a = nt(o), i = a.a, l = a.d;
      t += o.scrollLeft * i, e += o.scrollTop * l;
    } while (o !== n && (o = o.parentNode));
  return [t, e];
}
function qc(o, t) {
  for (var e in o)
    if (!!o.hasOwnProperty(e)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === o[e][n])
          return Number(e);
    }
  return -1;
}
function Re(o, t) {
  if (!o || !o.getBoundingClientRect)
    return Se();
  var e = o, n = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var a = P(e);
      if (e.clientWidth < e.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return Se();
        if (n || t)
          return e;
        n = !0;
      }
    }
  while (e = e.parentNode);
  return Se();
}
function Yc(o, t) {
  if (o && t)
    for (var e in t)
      t.hasOwnProperty(e) && (o[e] = t[e]);
  return o;
}
function xo(o, t) {
  return Math.round(o.top) === Math.round(t.top) && Math.round(o.left) === Math.round(t.left) && Math.round(o.height) === Math.round(t.height) && Math.round(o.width) === Math.round(t.width);
}
var wt;
function Hr(o, t) {
  return function() {
    if (!wt) {
      var e = arguments, n = this;
      e.length === 1 ? o.call(n, e[0]) : o.apply(n, e), wt = setTimeout(function() {
        wt = void 0;
      }, t);
    }
  };
}
function Gc() {
  clearTimeout(wt), wt = void 0;
}
function Wr(o, t, e) {
  o.scrollLeft += t, o.scrollTop += e;
}
function qr(o) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(o).cloneNode(!0) : e ? e(o).clone(!0)[0] : o.cloneNode(!0);
}
var _e = "Sortable" + new Date().getTime();
function Xc() {
  var o = [], t;
  return {
    captureAnimationState: function() {
      if (o = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(a) {
          if (!(P(a, "display") === "none" || a === M.ghost)) {
            o.push({
              target: a,
              rect: ne(a)
            });
            var i = ke({}, o[o.length - 1].rect);
            if (a.thisAnimationDuration) {
              var l = nt(a, !0);
              l && (i.top -= l.f, i.left -= l.e);
            }
            a.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(n) {
      o.push(n);
    },
    removeAnimationState: function(n) {
      o.splice(qc(o, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var a = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var i = !1, l = 0;
      o.forEach(function(r) {
        var s = 0, d = r.target, m = d.fromRect, c = ne(d), h = d.prevFromRect, _ = d.prevToRect, b = r.rect, v = nt(d, !0);
        v && (c.top -= v.f, c.left -= v.e), d.toRect = c, d.thisAnimationDuration && xo(h, c) && !xo(m, c) && (b.top - c.top) / (b.left - c.left) === (m.top - c.top) / (m.left - c.left) && (s = Jc(b, h, _, a.options)), xo(c, m) || (d.prevFromRect = m, d.prevToRect = c, s || (s = a.options.animation), a.animate(d, b, c, s)), s && (i = !0, l = Math.max(l, s), clearTimeout(d.animationResetTimer), d.animationResetTimer = setTimeout(function() {
          d.animationTime = 0, d.prevFromRect = null, d.fromRect = null, d.prevToRect = null, d.thisAnimationDuration = null;
        }, s), d.thisAnimationDuration = s);
      }), clearTimeout(t), i ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, l) : typeof n == "function" && n(), o = [];
    },
    animate: function(n, a, i, l) {
      if (l) {
        P(n, "transition", ""), P(n, "transform", "");
        var r = nt(this.el), s = r && r.a, d = r && r.d, m = (a.left - i.left) / (s || 1), c = (a.top - i.top) / (d || 1);
        n.animatingX = !!m, n.animatingY = !!c, P(n, "transform", "translate3d(" + m + "px," + c + "px,0)"), this.forRepaintDummy = Kc(n), P(n, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), P(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          P(n, "transition", ""), P(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, l);
      }
    }
  };
}
function Kc(o) {
  return o.offsetWidth;
}
function Jc(o, t, e, n) {
  return Math.sqrt(Math.pow(t.top - o.top, 2) + Math.pow(t.left - o.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * n.animation;
}
var Qe = [], wo = {
  initializeByDefault: !0
}, At = {
  mount: function(t) {
    for (var e in wo)
      wo.hasOwnProperty(e) && !(e in t) && (t[e] = wo[e]);
    Qe.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Qe.push(t);
  },
  pluginEvent: function(t, e, n) {
    var a = this;
    this.eventCanceled = !1, n.cancel = function() {
      a.eventCanceled = !0;
    };
    var i = t + "Global";
    Qe.forEach(function(l) {
      !e[l.pluginName] || (e[l.pluginName][i] && e[l.pluginName][i](ke({
        sortable: e
      }, n)), e.options[l.pluginName] && e[l.pluginName][t] && e[l.pluginName][t](ke({
        sortable: e
      }, n)));
    });
  },
  initializePlugins: function(t, e, n, a) {
    Qe.forEach(function(r) {
      var s = r.pluginName;
      if (!(!t.options[s] && !r.initializeByDefault)) {
        var d = new r(t, e, t.options);
        d.sortable = t, d.options = t.options, t[s] = d, je(n, d.defaults);
      }
    });
    for (var i in t.options)
      if (!!t.options.hasOwnProperty(i)) {
        var l = this.modifyOption(t, i, t.options[i]);
        typeof l < "u" && (t.options[i] = l);
      }
  },
  getEventProperties: function(t, e) {
    var n = {};
    return Qe.forEach(function(a) {
      typeof a.eventProperties == "function" && je(n, a.eventProperties.call(e[a.pluginName], t));
    }), n;
  },
  modifyOption: function(t, e, n) {
    var a;
    return Qe.forEach(function(i) {
      !t[i.pluginName] || i.optionListeners && typeof i.optionListeners[e] == "function" && (a = i.optionListeners[e].call(t[i.pluginName], n));
    }), a;
  }
};
function Zc(o) {
  var t = o.sortable, e = o.rootEl, n = o.name, a = o.targetEl, i = o.cloneEl, l = o.toEl, r = o.fromEl, s = o.oldIndex, d = o.newIndex, m = o.oldDraggableIndex, c = o.newDraggableIndex, h = o.originalEvent, _ = o.putSortable, b = o.extraEventProperties;
  if (t = t || e && e[_e], !!t) {
    var v, x = t.options, S = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !De && !It ? v = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(n, !0, !0)), v.to = l || e, v.from = r || e, v.item = a || e, v.clone = i, v.oldIndex = s, v.newIndex = d, v.oldDraggableIndex = m, v.newDraggableIndex = c, v.originalEvent = h, v.pullMode = _ ? _.lastPutMode : void 0;
    var k = ke(ke({}, b), At.getEventProperties(n, t));
    for (var R in k)
      v[R] = k[R];
    e && e.dispatchEvent(v), x[S] && x[S].call(t, v);
  }
}
var Qc = ["evt"], ce = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = n.evt, i = Uc(n, Qc);
  At.pluginEvent.bind(M)(t, e, ke({
    dragEl: O,
    parentEl: J,
    ghostEl: A,
    rootEl: Y,
    nextEl: qe,
    lastDownEl: Wt,
    cloneEl: Z,
    cloneHidden: Ae,
    dragStarted: gt,
    putSortable: ae,
    activeSortable: M.active,
    originalEvent: a,
    oldIndex: ot,
    oldDraggableIndex: St,
    newIndex: fe,
    newDraggableIndex: Ie,
    hideGhostForTarget: Kr,
    unhideGhostForTarget: Jr,
    cloneNowHidden: function() {
      Ae = !0;
    },
    cloneNowShown: function() {
      Ae = !1;
    },
    dispatchSortableEvent: function(r) {
      de({
        sortable: e,
        name: r,
        originalEvent: a
      });
    }
  }, i));
};
function de(o) {
  Zc(ke({
    putSortable: ae,
    cloneEl: Z,
    targetEl: O,
    rootEl: Y,
    oldIndex: ot,
    oldDraggableIndex: St,
    newIndex: fe,
    newDraggableIndex: Ie
  }, o));
}
var O, J, A, Y, qe, Wt, Z, Ae, ot, fe, St, Ie, Ft, ae, tt = !1, eo = !1, to = [], Ne, be, So, ko, Wn, qn, gt, et, kt, Ot = !1, Bt = !1, qt, se, Oo = [], Ro = !1, oo = [], ho = typeof document < "u", Lt = Lr, Yn = It || De ? "cssFloat" : "float", e1 = ho && !Hc && !Lr && "draggable" in document.createElement("div"), Yr = function() {
  if (!!ho) {
    if (De)
      return !1;
    var o = document.createElement("x");
    return o.style.cssText = "pointer-events:auto", o.style.pointerEvents === "auto";
  }
}(), Gr = function(t, e) {
  var n = P(t), a = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), i = at(t, 0, e), l = at(t, 1, e), r = i && P(i), s = l && P(l), d = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + ne(i).width, m = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + ne(l).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && r.float && r.float !== "none") {
    var c = r.float === "left" ? "left" : "right";
    return l && (s.clear === "both" || s.clear === c) ? "vertical" : "horizontal";
  }
  return i && (r.display === "block" || r.display === "flex" || r.display === "table" || r.display === "grid" || d >= a && n[Yn] === "none" || l && n[Yn] === "none" && d + m > a) ? "vertical" : "horizontal";
}, t1 = function(t, e, n) {
  var a = n ? t.left : t.top, i = n ? t.right : t.bottom, l = n ? t.width : t.height, r = n ? e.left : e.top, s = n ? e.right : e.bottom, d = n ? e.width : e.height;
  return a === r || i === s || a + l / 2 === r + d / 2;
}, o1 = function(t, e) {
  var n;
  return to.some(function(a) {
    var i = a[_e].options.emptyInsertThreshold;
    if (!(!i || dn(a))) {
      var l = ne(a), r = t >= l.left - i && t <= l.right + i, s = e >= l.top - i && e <= l.bottom + i;
      if (r && s)
        return n = a;
    }
  }), n;
}, Xr = function(t) {
  function e(i, l) {
    return function(r, s, d, m) {
      var c = r.options.group.name && s.options.group.name && r.options.group.name === s.options.group.name;
      if (i == null && (l || c))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (l && i === "clone")
        return i;
      if (typeof i == "function")
        return e(i(r, s, d, m), l)(r, s, d, m);
      var h = (l ? r : s).options.group.name;
      return i === !0 || typeof i == "string" && i === h || i.join && i.indexOf(h) > -1;
    };
  }
  var n = {}, a = t.group;
  (!a || Ht(a) != "object") && (a = {
    name: a
  }), n.name = a.name, n.checkPull = e(a.pull, !0), n.checkPut = e(a.put), n.revertClone = a.revertClone, t.group = n;
}, Kr = function() {
  !Yr && A && P(A, "display", "none");
}, Jr = function() {
  !Yr && A && P(A, "display", "");
};
ho && document.addEventListener("click", function(o) {
  if (eo)
    return o.preventDefault(), o.stopPropagation && o.stopPropagation(), o.stopImmediatePropagation && o.stopImmediatePropagation(), eo = !1, !1;
}, !0);
var He = function(t) {
  if (O) {
    t = t.touches ? t.touches[0] : t;
    var e = o1(t.clientX, t.clientY);
    if (e) {
      var n = {};
      for (var a in t)
        t.hasOwnProperty(a) && (n[a] = t[a]);
      n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[_e]._onDragOver(n);
    }
  }
}, n1 = function(t) {
  O && O.parentNode[_e]._isOutsideThisEl(t.target);
};
function M(o, t) {
  if (!(o && o.nodeType && o.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));
  this.el = o, this.options = t = je({}, t), o[_e] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(o.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return Gr(o, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(l, r) {
      l.setData("Text", r.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: M.supportPointer !== !1 && "PointerEvent" in window && !xt,
    emptyInsertThreshold: 5
  };
  At.initializePlugins(this, o, e);
  for (var n in e)
    !(n in t) && (t[n] = e[n]);
  Xr(t);
  for (var a in this)
    a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : e1, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? L(o, "pointerdown", this._onTapStart) : (L(o, "mousedown", this._onTapStart), L(o, "touchstart", this._onTapStart)), this.nativeDraggable && (L(o, "dragover", this), L(o, "dragenter", this)), to.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), je(this, Xc());
}
M.prototype = {
  constructor: M,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (et = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, O) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (!!t.cancelable) {
      var e = this, n = this.el, a = this.options, i = a.preventOnFilter, l = t.type, r = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (r || t).target, d = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, m = a.filter;
      if (c1(n), !O && !(/mousedown|pointerdown/.test(l) && t.button !== 0 || a.disabled) && !d.isContentEditable && !(!this.nativeDraggable && xt && s && s.tagName.toUpperCase() === "SELECT") && (s = we(s, a.draggable, n, !1), !(s && s.animated) && Wt !== s)) {
        if (ot = ge(s), St = ge(s, a.draggable), typeof m == "function") {
          if (m.call(this, t, s, this)) {
            de({
              sortable: e,
              rootEl: d,
              name: "filter",
              targetEl: s,
              toEl: n,
              fromEl: n
            }), ce("filter", e, {
              evt: t
            }), i && t.cancelable && t.preventDefault();
            return;
          }
        } else if (m && (m = m.split(",").some(function(c) {
          if (c = we(d, c.trim(), n, !1), c)
            return de({
              sortable: e,
              rootEl: c,
              name: "filter",
              targetEl: s,
              fromEl: n,
              toEl: n
            }), ce("filter", e, {
              evt: t
            }), !0;
        }), m)) {
          i && t.cancelable && t.preventDefault();
          return;
        }
        a.handle && !we(d, a.handle, n, !1) || this._prepareDragStart(t, r, s);
      }
    }
  },
  _prepareDragStart: function(t, e, n) {
    var a = this, i = a.el, l = a.options, r = i.ownerDocument, s;
    if (n && !O && n.parentNode === i) {
      var d = ne(n);
      if (Y = i, O = n, J = O.parentNode, qe = O.nextSibling, Wt = n, Ft = l.group, M.dragged = O, Ne = {
        target: O,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, Wn = Ne.clientX - d.left, qn = Ne.clientY - d.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, O.style["will-change"] = "all", s = function() {
        if (ce("delayEnded", a, {
          evt: t
        }), M.eventCanceled) {
          a._onDrop();
          return;
        }
        a._disableDelayedDragEvents(), !Ln && a.nativeDraggable && (O.draggable = !0), a._triggerDragStart(t, e), de({
          sortable: a,
          name: "choose",
          originalEvent: t
        }), pe(O, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(m) {
        Nr(O, m.trim(), Vo);
      }), L(r, "dragover", He), L(r, "mousemove", He), L(r, "touchmove", He), L(r, "mouseup", a._onDrop), L(r, "touchend", a._onDrop), L(r, "touchcancel", a._onDrop), Ln && this.nativeDraggable && (this.options.touchStartThreshold = 4, O.draggable = !0), ce("delayStart", this, {
        evt: t
      }), l.delay && (!l.delayOnTouchOnly || e) && (!this.nativeDraggable || !(It || De))) {
        if (M.eventCanceled) {
          this._onDrop();
          return;
        }
        L(r, "mouseup", a._disableDelayedDrag), L(r, "touchend", a._disableDelayedDrag), L(r, "touchcancel", a._disableDelayedDrag), L(r, "mousemove", a._delayedDragTouchMoveHandler), L(r, "touchmove", a._delayedDragTouchMoveHandler), l.supportPointer && L(r, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(s, l.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    O && Vo(O), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    F(t, "mouseup", this._disableDelayedDrag), F(t, "touchend", this._disableDelayedDrag), F(t, "touchcancel", this._disableDelayedDrag), F(t, "mousemove", this._delayedDragTouchMoveHandler), F(t, "touchmove", this._delayedDragTouchMoveHandler), F(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? L(document, "pointermove", this._onTouchMove) : e ? L(document, "touchmove", this._onTouchMove) : L(document, "mousemove", this._onTouchMove) : (L(O, "dragend", this), L(Y, "dragstart", this._onDragStart));
    try {
      document.selection ? Yt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (tt = !1, Y && O) {
      ce("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && L(document, "dragover", n1);
      var n = this.options;
      !t && pe(O, n.dragClass, !1), pe(O, n.ghostClass, !0), M.active = this, t && this._appendGhost(), de({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (be) {
      this._lastX = be.clientX, this._lastY = be.clientY, Kr();
      for (var t = document.elementFromPoint(be.clientX, be.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(be.clientX, be.clientY), t !== e); )
        e = t;
      if (O.parentNode[_e]._isOutsideThisEl(t), e)
        do {
          if (e[_e]) {
            var n = void 0;
            if (n = e[_e]._onDragOver({
              clientX: be.clientX,
              clientY: be.clientY,
              target: t,
              rootEl: e
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = e.parentNode);
      Jr();
    }
  },
  _onTouchMove: function(t) {
    if (Ne) {
      var e = this.options, n = e.fallbackTolerance, a = e.fallbackOffset, i = t.touches ? t.touches[0] : t, l = A && nt(A, !0), r = A && l && l.a, s = A && l && l.d, d = Lt && se && Hn(se), m = (i.clientX - Ne.clientX + a.x) / (r || 1) + (d ? d[0] - Oo[0] : 0) / (r || 1), c = (i.clientY - Ne.clientY + a.y) / (s || 1) + (d ? d[1] - Oo[1] : 0) / (s || 1);
      if (!M.active && !tt) {
        if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (A) {
        l ? (l.e += m - (So || 0), l.f += c - (ko || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: m,
          f: c
        };
        var h = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        P(A, "webkitTransform", h), P(A, "mozTransform", h), P(A, "msTransform", h), P(A, "transform", h), So = m, ko = c, be = i;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!A) {
      var t = this.options.fallbackOnBody ? document.body : Y, e = ne(O, !0, Lt, !0, t), n = this.options;
      if (Lt) {
        for (se = t; P(se, "position") === "static" && P(se, "transform") === "none" && se !== document; )
          se = se.parentNode;
        se !== document.body && se !== document.documentElement ? (se === document && (se = Se()), e.top += se.scrollTop, e.left += se.scrollLeft) : se = Se(), Oo = Hn(se);
      }
      A = O.cloneNode(!0), pe(A, n.ghostClass, !1), pe(A, n.fallbackClass, !0), pe(A, n.dragClass, !0), P(A, "transition", ""), P(A, "transform", ""), P(A, "box-sizing", "border-box"), P(A, "margin", 0), P(A, "top", e.top), P(A, "left", e.left), P(A, "width", e.width), P(A, "height", e.height), P(A, "opacity", "0.8"), P(A, "position", Lt ? "absolute" : "fixed"), P(A, "zIndex", "100000"), P(A, "pointerEvents", "none"), M.ghost = A, t.appendChild(A), P(A, "transform-origin", Wn / parseInt(A.style.width) * 100 + "% " + qn / parseInt(A.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var n = this, a = t.dataTransfer, i = n.options;
    if (ce("dragStart", this, {
      evt: t
    }), M.eventCanceled) {
      this._onDrop();
      return;
    }
    ce("setupClone", this), M.eventCanceled || (Z = qr(O), Z.draggable = !1, Z.style["will-change"] = "", this._hideClone(), pe(Z, this.options.chosenClass, !1), M.clone = Z), n.cloneId = Yt(function() {
      ce("clone", n), !M.eventCanceled && (n.options.removeCloneOnHide || Y.insertBefore(Z, O), n._hideClone(), de({
        sortable: n,
        name: "clone"
      }));
    }), !e && pe(O, i.dragClass, !0), e ? (eo = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (F(document, "mouseup", n._onDrop), F(document, "touchend", n._onDrop), F(document, "touchcancel", n._onDrop), a && (a.effectAllowed = "move", i.setData && i.setData.call(n, a, O)), L(document, "drop", n), P(O, "transform", "translateZ(0)")), tt = !0, n._dragStartId = Yt(n._dragStarted.bind(n, e, t)), L(document, "selectstart", n), gt = !0, xt && P(document.body, "user-select", "none");
  },
  _onDragOver: function(t) {
    var e = this.el, n = t.target, a, i, l, r = this.options, s = r.group, d = M.active, m = Ft === s, c = r.sort, h = ae || d, _, b = this, v = !1;
    if (Ro)
      return;
    function x(_t, ml) {
      ce(_t, b, ke({
        evt: t,
        isOwner: m,
        axis: _ ? "vertical" : "horizontal",
        revert: l,
        dragRect: a,
        targetRect: i,
        canSort: c,
        fromSortable: h,
        target: n,
        completed: k,
        onMove: function(mn, pl) {
          return Ut(Y, e, O, a, mn, ne(mn), t, pl);
        },
        changed: R
      }, ml));
    }
    function S() {
      x("dragOverAnimationCapture"), b.captureAnimationState(), b !== h && h.captureAnimationState();
    }
    function k(_t) {
      return x("dragOverCompleted", {
        insertion: _t
      }), _t && (m ? d._hideClone() : d._showClone(b), b !== h && (pe(O, ae ? ae.options.ghostClass : d.options.ghostClass, !1), pe(O, r.ghostClass, !0)), ae !== b && b !== M.active ? ae = b : b === M.active && ae && (ae = null), h === b && (b._ignoreWhileAnimating = n), b.animateAll(function() {
        x("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (n === O && !O.animated || n === e && !n.animated) && (et = null), !r.dragoverBubble && !t.rootEl && n !== document && (O.parentNode[_e]._isOutsideThisEl(t.target), !_t && He(t)), !r.dragoverBubble && t.stopPropagation && t.stopPropagation(), v = !0;
    }
    function R() {
      fe = ge(O), Ie = ge(O, r.draggable), de({
        sortable: b,
        name: "change",
        toEl: e,
        newIndex: fe,
        newDraggableIndex: Ie,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = we(n, r.draggable, e, !0), x("dragOver"), M.eventCanceled)
      return v;
    if (O.contains(t.target) || n.animated && n.animatingX && n.animatingY || b._ignoreWhileAnimating === n)
      return k(!1);
    if (eo = !1, d && !r.disabled && (m ? c || (l = J !== Y) : ae === this || (this.lastPutMode = Ft.checkPull(this, d, O, t)) && s.checkPut(this, d, O, t))) {
      if (_ = this._getDirection(t, n) === "vertical", a = ne(O), x("dragOverValid"), M.eventCanceled)
        return v;
      if (l)
        return J = Y, S(), this._hideClone(), x("revert"), M.eventCanceled || (qe ? Y.insertBefore(O, qe) : Y.appendChild(O)), k(!0);
      var q = dn(e, r.draggable);
      if (!q || i1(t, _, this) && !q.animated) {
        if (q === O)
          return k(!1);
        if (q && e === t.target && (n = q), n && (i = ne(n)), Ut(Y, e, O, a, n, i, t, !!n) !== !1)
          return S(), e.appendChild(O), J = e, R(), k(!0);
      } else if (q && a1(t, _, this)) {
        var he = at(e, 0, r, !0);
        if (he === O)
          return k(!1);
        if (n = he, i = ne(n), Ut(Y, e, O, a, n, i, t, !1) !== !1)
          return S(), e.insertBefore(O, he), J = e, R(), k(!0);
      } else if (n.parentNode === e) {
        i = ne(n);
        var C = 0, T, E = O.parentNode !== e, V = !t1(O.animated && O.toRect || a, n.animated && n.toRect || i, _), re = _ ? "top" : "left", X = Nn(n, "top", "top") || Nn(O, "top", "top"), pt = X ? X.scrollTop : void 0;
        et !== n && (T = i[re], Ot = !1, Bt = !V && r.invertSwap || E), C = s1(t, n, i, _, V ? 1 : r.swapThreshold, r.invertedSwapThreshold == null ? r.swapThreshold : r.invertedSwapThreshold, Bt, et === n);
        var $e;
        if (C !== 0) {
          var Ue = ge(O);
          do
            Ue -= C, $e = J.children[Ue];
          while ($e && (P($e, "display") === "none" || $e === A));
        }
        if (C === 0 || $e === n)
          return k(!1);
        et = n, kt = C;
        var ft = n.nextElementSibling, Pe = !1;
        Pe = C === 1;
        var Rt = Ut(Y, e, O, a, n, i, t, Pe);
        if (Rt !== !1)
          return (Rt === 1 || Rt === -1) && (Pe = Rt === 1), Ro = !0, setTimeout(l1, 30), S(), Pe && !ft ? e.appendChild(O) : n.parentNode.insertBefore(O, Pe ? ft : n), X && Wr(X, 0, pt - X.scrollTop), J = O.parentNode, T !== void 0 && !Bt && (qt = Math.abs(T - ne(n)[re])), R(), k(!0);
      }
      if (e.contains(O))
        return k(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    F(document, "mousemove", this._onTouchMove), F(document, "touchmove", this._onTouchMove), F(document, "pointermove", this._onTouchMove), F(document, "dragover", He), F(document, "mousemove", He), F(document, "touchmove", He);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    F(t, "mouseup", this._onDrop), F(t, "touchend", this._onDrop), F(t, "pointerup", this._onDrop), F(t, "touchcancel", this._onDrop), F(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, n = this.options;
    if (fe = ge(O), Ie = ge(O, n.draggable), ce("drop", this, {
      evt: t
    }), J = O && O.parentNode, fe = ge(O), Ie = ge(O, n.draggable), M.eventCanceled) {
      this._nulling();
      return;
    }
    tt = !1, Bt = !1, Ot = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), zo(this.cloneId), zo(this._dragStartId), this.nativeDraggable && (F(document, "drop", this), F(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), xt && P(document.body, "user-select", ""), P(O, "transform", ""), t && (gt && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), A && A.parentNode && A.parentNode.removeChild(A), (Y === J || ae && ae.lastPutMode !== "clone") && Z && Z.parentNode && Z.parentNode.removeChild(Z), O && (this.nativeDraggable && F(O, "dragend", this), Vo(O), O.style["will-change"] = "", gt && !tt && pe(O, ae ? ae.options.ghostClass : this.options.ghostClass, !1), pe(O, this.options.chosenClass, !1), de({
      sortable: this,
      name: "unchoose",
      toEl: J,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Y !== J ? (fe >= 0 && (de({
      rootEl: J,
      name: "add",
      toEl: J,
      fromEl: Y,
      originalEvent: t
    }), de({
      sortable: this,
      name: "remove",
      toEl: J,
      originalEvent: t
    }), de({
      rootEl: J,
      name: "sort",
      toEl: J,
      fromEl: Y,
      originalEvent: t
    }), de({
      sortable: this,
      name: "sort",
      toEl: J,
      originalEvent: t
    })), ae && ae.save()) : fe !== ot && fe >= 0 && (de({
      sortable: this,
      name: "update",
      toEl: J,
      originalEvent: t
    }), de({
      sortable: this,
      name: "sort",
      toEl: J,
      originalEvent: t
    })), M.active && ((fe == null || fe === -1) && (fe = ot, Ie = St), de({
      sortable: this,
      name: "end",
      toEl: J,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ce("nulling", this), Y = O = J = A = qe = Z = Wt = Ae = Ne = be = gt = fe = Ie = ot = St = et = kt = ae = Ft = M.dragged = M.ghost = M.clone = M.active = null, oo.forEach(function(t) {
      t.checked = !0;
    }), oo.length = So = ko = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        O && (this._onDragOver(t), r1(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var t = [], e, n = this.el.children, a = 0, i = n.length, l = this.options; a < i; a++)
      e = n[a], we(e, l.draggable, this.el, !1) && t.push(e.getAttribute(l.dataIdAttr) || u1(e));
    return t;
  },
  sort: function(t, e) {
    var n = {}, a = this.el;
    this.toArray().forEach(function(i, l) {
      var r = a.children[l];
      we(r, this.options.draggable, a, !1) && (n[i] = r);
    }, this), e && this.captureAnimationState(), t.forEach(function(i) {
      n[i] && (a.removeChild(n[i]), a.appendChild(n[i]));
    }), e && this.animateAll();
  },
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  closest: function(t, e) {
    return we(t, e || this.options.draggable, this.el, !1);
  },
  option: function(t, e) {
    var n = this.options;
    if (e === void 0)
      return n[t];
    var a = At.modifyOption(this, t, e);
    typeof a < "u" ? n[t] = a : n[t] = e, t === "group" && Xr(n);
  },
  destroy: function() {
    ce("destroy", this);
    var t = this.el;
    t[_e] = null, F(t, "mousedown", this._onTapStart), F(t, "touchstart", this._onTapStart), F(t, "pointerdown", this._onTapStart), this.nativeDraggable && (F(t, "dragover", this), F(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), to.splice(to.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Ae) {
      if (ce("hideClone", this), M.eventCanceled)
        return;
      P(Z, "display", "none"), this.options.removeCloneOnHide && Z.parentNode && Z.parentNode.removeChild(Z), Ae = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ae) {
      if (ce("showClone", this), M.eventCanceled)
        return;
      O.parentNode == Y && !this.options.group.revertClone ? Y.insertBefore(Z, O) : qe ? Y.insertBefore(Z, qe) : Y.appendChild(Z), this.options.group.revertClone && this.animate(O, Z), P(Z, "display", ""), Ae = !1;
    }
  }
};
function r1(o) {
  o.dataTransfer && (o.dataTransfer.dropEffect = "move"), o.cancelable && o.preventDefault();
}
function Ut(o, t, e, n, a, i, l, r) {
  var s, d = o[_e], m = d.options.onMove, c;
  return window.CustomEvent && !De && !It ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = o, s.dragged = e, s.draggedRect = n, s.related = a || t, s.relatedRect = i || ne(t), s.willInsertAfter = r, s.originalEvent = l, o.dispatchEvent(s), m && (c = m.call(d, s, l)), c;
}
function Vo(o) {
  o.draggable = !1;
}
function l1() {
  Ro = !1;
}
function a1(o, t, e) {
  var n = ne(at(e.el, 0, e.options, !0)), a = 10;
  return t ? o.clientX < n.left - a || o.clientY < n.top && o.clientX < n.right : o.clientY < n.top - a || o.clientY < n.bottom && o.clientX < n.left;
}
function i1(o, t, e) {
  var n = ne(dn(e.el, e.options.draggable)), a = 10;
  return t ? o.clientX > n.right + a || o.clientX <= n.right && o.clientY > n.bottom && o.clientX >= n.left : o.clientX > n.right && o.clientY > n.top || o.clientX <= n.right && o.clientY > n.bottom + a;
}
function s1(o, t, e, n, a, i, l, r) {
  var s = n ? o.clientY : o.clientX, d = n ? e.height : e.width, m = n ? e.top : e.left, c = n ? e.bottom : e.right, h = !1;
  if (!l) {
    if (r && qt < d * a) {
      if (!Ot && (kt === 1 ? s > m + d * i / 2 : s < c - d * i / 2) && (Ot = !0), Ot)
        h = !0;
      else if (kt === 1 ? s < m + qt : s > c - qt)
        return -kt;
    } else if (s > m + d * (1 - a) / 2 && s < c - d * (1 - a) / 2)
      return d1(t);
  }
  return h = h || l, h && (s < m + d * i / 2 || s > c - d * i / 2) ? s > m + d / 2 ? 1 : -1 : 0;
}
function d1(o) {
  return ge(O) < ge(o) ? 1 : -1;
}
function u1(o) {
  for (var t = o.tagName + o.className + o.src + o.href + o.textContent, e = t.length, n = 0; e--; )
    n += t.charCodeAt(e);
  return n.toString(36);
}
function c1(o) {
  oo.length = 0;
  for (var t = o.getElementsByTagName("input"), e = t.length; e--; ) {
    var n = t[e];
    n.checked && oo.push(n);
  }
}
function Yt(o) {
  return setTimeout(o, 0);
}
function zo(o) {
  return clearTimeout(o);
}
ho && L(document, "touchmove", function(o) {
  (M.active || tt) && o.cancelable && o.preventDefault();
});
M.utils = {
  on: L,
  off: F,
  css: P,
  find: Nr,
  is: function(t, e) {
    return !!we(t, e, t, !1);
  },
  extend: Yc,
  throttle: Hr,
  closest: we,
  toggleClass: pe,
  clone: qr,
  index: ge,
  nextTick: Yt,
  cancelNextTick: zo,
  detectDirection: Gr,
  getChild: at
};
M.get = function(o) {
  return o[_e];
};
M.mount = function() {
  for (var o = arguments.length, t = new Array(o), e = 0; e < o; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (M.utils = ke(ke({}, M.utils), n.utils)), At.mount(n);
  });
};
M.create = function(o, t) {
  return new M(o, t);
};
M.version = Nc;
var ee = [], bt, Fo, Bo = !1, To, $o, no, vt;
function m1() {
  function o() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return o.prototype = {
    dragStarted: function(e) {
      var n = e.originalEvent;
      this.sortable.nativeDraggable ? L(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? L(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? L(document, "touchmove", this._handleFallbackAutoScroll) : L(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var n = e.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? F(document, "dragover", this._handleAutoScroll) : (F(document, "pointermove", this._handleFallbackAutoScroll), F(document, "touchmove", this._handleFallbackAutoScroll), F(document, "mousemove", this._handleFallbackAutoScroll)), Gn(), Gt(), Gc();
    },
    nulling: function() {
      no = Fo = bt = Bo = vt = To = $o = null, ee.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, n) {
      var a = this, i = (e.touches ? e.touches[0] : e).clientX, l = (e.touches ? e.touches[0] : e).clientY, r = document.elementFromPoint(i, l);
      if (no = e, n || this.options.forceAutoScrollFallback || It || De || xt) {
        Co(e, this.options, r, n);
        var s = Re(r, !0);
        Bo && (!vt || i !== To || l !== $o) && (vt && Gn(), vt = setInterval(function() {
          var d = Re(document.elementFromPoint(i, l), !0);
          d !== s && (s = d, Gt()), Co(e, a.options, d, n);
        }, 10), To = i, $o = l);
      } else {
        if (!this.options.bubbleScroll || Re(r, !0) === Se()) {
          Gt();
          return;
        }
        Co(e, this.options, Re(r, !1), !1);
      }
    }
  }, je(o, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Gt() {
  ee.forEach(function(o) {
    clearInterval(o.pid);
  }), ee = [];
}
function Gn() {
  clearInterval(vt);
}
var Co = Hr(function(o, t, e, n) {
  if (!!t.scroll) {
    var a = (o.touches ? o.touches[0] : o).clientX, i = (o.touches ? o.touches[0] : o).clientY, l = t.scrollSensitivity, r = t.scrollSpeed, s = Se(), d = !1, m;
    Fo !== e && (Fo = e, Gt(), bt = t.scroll, m = t.scrollFn, bt === !0 && (bt = Re(e, !0)));
    var c = 0, h = bt;
    do {
      var _ = h, b = ne(_), v = b.top, x = b.bottom, S = b.left, k = b.right, R = b.width, q = b.height, he = void 0, C = void 0, T = _.scrollWidth, E = _.scrollHeight, V = P(_), re = _.scrollLeft, X = _.scrollTop;
      _ === s ? (he = R < T && (V.overflowX === "auto" || V.overflowX === "scroll" || V.overflowX === "visible"), C = q < E && (V.overflowY === "auto" || V.overflowY === "scroll" || V.overflowY === "visible")) : (he = R < T && (V.overflowX === "auto" || V.overflowX === "scroll"), C = q < E && (V.overflowY === "auto" || V.overflowY === "scroll"));
      var pt = he && (Math.abs(k - a) <= l && re + R < T) - (Math.abs(S - a) <= l && !!re), $e = C && (Math.abs(x - i) <= l && X + q < E) - (Math.abs(v - i) <= l && !!X);
      if (!ee[c])
        for (var Ue = 0; Ue <= c; Ue++)
          ee[Ue] || (ee[Ue] = {});
      (ee[c].vx != pt || ee[c].vy != $e || ee[c].el !== _) && (ee[c].el = _, ee[c].vx = pt, ee[c].vy = $e, clearInterval(ee[c].pid), (pt != 0 || $e != 0) && (d = !0, ee[c].pid = setInterval(function() {
        n && this.layer === 0 && M.active._onTouchMove(no);
        var ft = ee[this.layer].vy ? ee[this.layer].vy * r : 0, Pe = ee[this.layer].vx ? ee[this.layer].vx * r : 0;
        typeof m == "function" && m.call(M.dragged.parentNode[_e], Pe, ft, o, no, ee[this.layer].el) !== "continue" || Wr(ee[this.layer].el, Pe, ft);
      }.bind({
        layer: c
      }), 24))), c++;
    } while (t.bubbleScroll && h !== s && (h = Re(h, !1)));
    Bo = d;
  }
}, 30), Zr = function(t) {
  var e = t.originalEvent, n = t.putSortable, a = t.dragEl, i = t.activeSortable, l = t.dispatchSortableEvent, r = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (!!e) {
    var d = n || i;
    r();
    var m = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, c = document.elementFromPoint(m.clientX, m.clientY);
    s(), d && !d.el.contains(c) && (l("spill"), this.onSpill({
      dragEl: a,
      putSortable: n
    }));
  }
};
function un() {
}
un.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var a = at(this.sortable.el, this.startIndex, this.options);
    a ? this.sortable.el.insertBefore(e, a) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Zr
};
je(un, {
  pluginName: "revertOnSpill"
});
function cn() {
}
cn.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable, a = n || this.sortable;
    a.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), a.animateAll();
  },
  drop: Zr
};
je(cn, {
  pluginName: "removeOnSpill"
});
M.mount(new m1());
M.mount(cn, un);
function jo(o) {
  o.parentElement !== null && o.parentElement.removeChild(o);
}
function Xn(o, t, e) {
  const n = e === 0 ? o.children[0] : o.children[e - 1].nextSibling;
  o.insertBefore(t, n);
}
function p1() {
  return typeof window < "u" ? window.console : global.console;
}
const f1 = p1();
function _1(o) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] || (t[n] = o(n));
  };
}
const h1 = /-(\w)/g, g1 = _1((o) => o.replace(h1, (t, e) => e.toUpperCase())), Qr = ["Start", "Add", "Remove", "Update", "End"], el = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], tl = ["Move"], b1 = [tl, Qr, el].flatMap((o) => o).map((o) => `on${o}`), Lo = {
  manage: tl,
  manageAndEmit: Qr,
  emit: el
};
function v1(o) {
  return b1.indexOf(o) !== -1;
}
const y1 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function x1(o) {
  return y1.includes(o);
}
function w1(o) {
  return ["transition-group", "TransitionGroup"].includes(o);
}
function ol(o) {
  return ["id", "class", "role", "style"].includes(o) || o.startsWith("data-") || o.startsWith("aria-") || o.startsWith("on");
}
function nl(o) {
  return o.reduce((t, [e, n]) => (t[e] = n, t), {});
}
function S1({ $attrs: o, componentData: t = {} }) {
  return {
    ...nl(
      Object.entries(o).filter(([n, a]) => ol(n))
    ),
    ...t
  };
}
function k1({ $attrs: o, callBackBuilder: t }) {
  const e = nl(rl(o));
  Object.entries(t).forEach(([a, i]) => {
    Lo[a].forEach((l) => {
      e[`on${l}`] = i(l);
    });
  });
  const n = `[data-draggable]${e.draggable || ""}`;
  return {
    ...e,
    draggable: n
  };
}
function rl(o) {
  return Object.entries(o).filter(([t, e]) => !ol(t)).map(([t, e]) => [g1(t), e]).filter(([t, e]) => !v1(t));
}
const Kn = ({ el: o }) => o, O1 = (o, t) => o.__draggable_context = t, Jn = (o) => o.__draggable_context;
class V1 {
  constructor({
    nodes: { header: t, default: e, footer: n },
    root: a,
    realList: i
  }) {
    this.defaultNodes = e, this.children = [...t, ...e, ...n], this.externalComponent = a.externalComponent, this.rootTransition = a.transition, this.tag = a.tag, this.realList = i;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(t, e) {
    const { tag: n, children: a, _isRootComponent: i } = this;
    return t(n, e, i ? { default: () => a } : a);
  }
  updated() {
    const { defaultNodes: t, realList: e } = this;
    t.forEach((n, a) => {
      O1(Kn(n), {
        element: e[a],
        index: a
      });
    });
  }
  getUnderlyingVm(t) {
    return Jn(t);
  }
  getVmIndexFromDomIndex(t, e) {
    const { defaultNodes: n } = this, { length: a } = n, i = e.children, l = i.item(t);
    if (l === null)
      return a;
    const r = Jn(l);
    if (r)
      return r.index;
    if (a === 0)
      return 0;
    const s = Kn(n[0]), d = [...i].findIndex(
      (m) => m === s
    );
    return t < d ? 0 : a;
  }
}
function T1(o, t) {
  const e = o[t];
  return e ? e() : [];
}
function $1({ $slots: o, realList: t, getKey: e }) {
  const n = t || [], [a, i] = ["header", "footer"].map(
    (s) => T1(o, s)
  ), { item: l } = o;
  if (!l)
    throw new Error("draggable element must have an item slot");
  const r = n.flatMap(
    (s, d) => l({ element: s, index: d }).map((m) => (m.key = e(s), m.props = { ...m.props || {}, "data-draggable": !0 }, m))
  );
  if (r.length !== n.length)
    throw new Error("Item slot must have only one child");
  return {
    header: a,
    footer: i,
    default: r
  };
}
function C1(o) {
  const t = w1(o), e = !x1(o) && !t;
  return {
    transition: t,
    externalComponent: e,
    tag: e ? u(o) : t ? bl : o
  };
}
function j1({ $slots: o, tag: t, realList: e, getKey: n }) {
  const a = $1({ $slots: o, realList: e, getKey: n }), i = C1(t);
  return new V1({ nodes: a, root: i, realList: e });
}
function ll(o, t) {
  Ge(() => this.$emit(o.toLowerCase(), t));
}
function al(o) {
  return (t, e) => {
    if (this.realList !== null)
      return this[`onDrag${o}`](t, e);
  };
}
function E1(o) {
  const t = al.call(this, o);
  return (e, n) => {
    t.call(this, e, n), ll.call(this, o, e);
  };
}
let Eo = null;
const D1 = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (o) => o
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, P1 = [
  "update:modelValue",
  "change",
  ...[...Lo.manageAndEmit, ...Lo.emit].map((o) => o.toLowerCase())
], il = Ct({
  name: "draggable",
  inheritAttrs: !1,
  props: D1,
  emits: P1,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: o, $attrs: t, tag: e, componentData: n, realList: a, getKey: i } = this, l = j1({
        $slots: o,
        tag: e,
        realList: a,
        getKey: i
      });
      this.componentStructure = l;
      const r = S1({ $attrs: t, componentData: n });
      return l.render(Xt, r);
    } catch (o) {
      return this.error = !0, Xt("pre", { style: { color: "red" } }, o.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && f1.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: o, $el: t, componentStructure: e } = this;
    e.updated();
    const n = k1({
      $attrs: o,
      callBackBuilder: {
        manageAndEmit: (i) => E1.call(this, i),
        emit: (i) => ll.bind(this, i),
        manage: (i) => al.call(this, i)
      }
    }), a = t.nodeType === 1 ? t : t.parentElement;
    this._sortable = new M(a, n), this.targetDomElement = a, a.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: o } = this;
      return o || this.modelValue;
    },
    getKey() {
      const { itemKey: o } = this;
      return typeof o == "function" ? o : (t) => t[o];
    }
  },
  watch: {
    $attrs: {
      handler(o) {
        const { _sortable: t } = this;
        !t || rl(o).forEach(([e, n]) => {
          t.option(e, n);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(o) {
      return this.componentStructure.getUnderlyingVm(o) || null;
    },
    getUnderlyingPotencialDraggableComponent(o) {
      return o.__draggable_component__;
    },
    emitChanges(o) {
      Ge(() => this.$emit("change", o));
    },
    alterList(o) {
      if (this.list) {
        o(this.list);
        return;
      }
      const t = [...this.modelValue];
      o(t), this.$emit("update:modelValue", t);
    },
    spliceList() {
      const o = (t) => t.splice(...arguments);
      this.alterList(o);
    },
    updatePosition(o, t) {
      const e = (n) => n.splice(t, 0, n.splice(o, 1)[0]);
      this.alterList(e);
    },
    getRelatedContextFromMoveEvent({ to: o, related: t }) {
      const e = this.getUnderlyingPotencialDraggableComponent(o);
      if (!e)
        return { component: e };
      const n = e.realList, a = { list: n, component: e };
      return o !== t && n ? { ...e.getUnderlyingVm(t) || {}, ...a } : a;
    },
    getVmIndexFromDomIndex(o) {
      return this.componentStructure.getVmIndexFromDomIndex(
        o,
        this.targetDomElement
      );
    },
    onDragStart(o) {
      this.context = this.getUnderlyingVm(o.item), o.item._underlying_vm_ = this.clone(this.context.element), Eo = o.item;
    },
    onDragAdd(o) {
      const t = o.item._underlying_vm_;
      if (t === void 0)
        return;
      jo(o.item);
      const e = this.getVmIndexFromDomIndex(o.newIndex);
      this.spliceList(e, 0, t);
      const n = { element: t, newIndex: e };
      this.emitChanges({ added: n });
    },
    onDragRemove(o) {
      if (Xn(this.$el, o.item, o.oldIndex), o.pullMode === "clone") {
        jo(o.clone);
        return;
      }
      const { index: t, element: e } = this.context;
      this.spliceList(t, 1);
      const n = { element: e, oldIndex: t };
      this.emitChanges({ removed: n });
    },
    onDragUpdate(o) {
      jo(o.item), Xn(o.from, o.item, o.oldIndex);
      const t = this.context.index, e = this.getVmIndexFromDomIndex(o.newIndex);
      this.updatePosition(t, e);
      const n = { element: this.context.element, oldIndex: t, newIndex: e };
      this.emitChanges({ moved: n });
    },
    computeFutureIndex(o, t) {
      if (!o.element)
        return 0;
      const e = [...t.to.children].filter(
        (l) => l.style.display !== "none"
      ), n = e.indexOf(t.related), a = o.component.getVmIndexFromDomIndex(
        n
      );
      return e.indexOf(Eo) !== -1 || !t.willInsertAfter ? a : a + 1;
    },
    onDragMove(o, t) {
      const { move: e, realList: n } = this;
      if (!e || !n)
        return !0;
      const a = this.getRelatedContextFromMoveEvent(o), i = this.computeFutureIndex(a, o), l = {
        ...this.context,
        futureIndex: i
      }, r = {
        ...o,
        relatedContext: a,
        draggedContext: l
      };
      return e(r, t);
    },
    onDragEnd() {
      Eo = null;
    }
  }
}), K = [{ required: !1, message: "\u5FC5\u586B\u9879", trigger: "blur" }], M1 = [
  {
    name: "\u8F93\u5165\u6846",
    component: "input",
    uuid: "",
    options: {
      label: "\u8F93\u5165\u6846",
      key: "",
      defaultValue: "",
      rules: K,
      width: "100%",
      placeholder: "\u8BF7\u8F93\u5165",
      prefixIcon: "",
      suffixIcon: "",
      hidden: !1,
      clearable: !1,
      disabled: !1,
      showPassword: !1,
      maxlength: 50,
      showWordLimit: !0
    }
  },
  {
    name: "\u6587\u672C\u6846",
    component: "textarea",
    uuid: "",
    options: {
      label: "\u6587\u672C\u6846",
      key: "",
      defaultValue: "",
      rules: K,
      width: "100%",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      rows: 4,
      hidden: !1,
      disabled: !1,
      maxlength: 50,
      showWordLimit: !0
    }
  },
  {
    name: "\u6570\u5B57\u8F93\u5165\u6846",
    component: "number",
    uuid: "",
    options: {
      label: "\u6570\u5B57\u8F93\u5165\u6846",
      key: "",
      defaultValue: 10,
      rules: K,
      width: "100%",
      min: 0,
      max: 100,
      hidden: !1,
      disabled: !1
    }
  }
], I1 = [
  {
    name: "\u4E0B\u62C9\u5355\u9009",
    component: "select",
    uuid: "",
    options: {
      label: "\u4E0B\u62C9\u5355\u9009",
      key: "",
      options: {
        type: "static",
        remote: "",
        items: []
      },
      defaultValue: "",
      rules: K,
      placeholder: "\u8BF7\u9009\u62E9",
      noDataText: "\u6682\u65E0\u6570\u636E",
      noMatchText: "\u65E0\u5339\u914D\u6570\u636E",
      width: "100%",
      hidden: !1,
      clearable: !1,
      disabled: !1,
      filterable: !1
    }
  },
  {
    name: "\u4E0B\u62C9\u591A\u9009",
    component: "multi-select",
    uuid: "",
    options: {
      label: "\u4E0B\u62C9\u591A\u9009",
      key: "",
      options: {
        type: "static",
        remote: "",
        items: []
      },
      defaultValue: [],
      rules: K,
      placeholder: "\u8BF7\u9009\u62E9",
      noDataText: "\u6682\u65E0\u6570\u636E",
      noMatchText: "\u65E0\u5339\u914D\u6570\u636E",
      width: "100%",
      hidden: !1,
      clearable: !1,
      disabled: !1,
      filterable: !1,
      collapseTags: !1,
      multipleLimit: 0
    }
  },
  {
    name: "\u7EA7\u8054\u9009\u62E9\u5668",
    component: "cascader",
    uuid: "",
    options: {
      label: "\u7EA7\u8054\u9009\u62E9\u5668",
      key: "",
      options: {
        type: "static",
        remote: "",
        items: []
      },
      defaultValue: [],
      rules: K,
      placeholder: "\u8BF7\u9009\u62E9",
      width: "100%",
      expandTrigger: "click",
      hidden: !1,
      clearable: !1,
      disabled: !1,
      filterable: !1,
      collapseTags: !1,
      multipleLimit: 0,
      rules: K
    }
  },
  {
    name: "\u591A\u9009\u6846",
    component: "checkbox",
    uuid: "",
    options: {
      label: "\u591A\u9009\u6846",
      key: "",
      options: {
        type: "static",
        remote: "",
        items: []
      },
      defaultValue: [],
      rules: K,
      width: "100%",
      hidden: !1,
      disabled: !1
    }
  },
  {
    name: "\u5355\u9009\u6846",
    component: "radio",
    uuid: "",
    options: {
      label: "\u5355\u9009\u6846",
      key: "",
      options: {
        type: "static",
        remote: "",
        items: []
      },
      defaultValue: "",
      rules: K,
      width: "100%",
      hidden: !1,
      disabled: !1
    }
  },
  {
    name: "\u65F6\u95F4\u9009\u62E9\u5668",
    component: "time-picker",
    uuid: "",
    options: {
      label: "\u65F6\u95F4\u9009\u62E9\u5668",
      key: "",
      defaultValue: void 0,
      rules: K,
      placeholder: "\u8BF7\u9009\u62E9",
      width: "100%",
      prefixIcon: "el-icon-time",
      format: "HH:mm:ss",
      hidden: !1,
      clearable: !1,
      disabled: !1
    }
  },
  {
    name: "\u65F6\u95F4\u8303\u56F4",
    component: "time-range-picker",
    uuid: "",
    options: {
      label: "\u65F6\u95F4\u8303\u56F4",
      key: "",
      defaultValue: [],
      rules: K,
      placeholder: "\u8BF7\u9009\u62E9",
      width: "100%",
      prefixIcon: "el-icon-time",
      format: "HH:mm:ss",
      hidden: !1,
      clearable: !1,
      disabled: !1
    }
  },
  {
    name: "\u65E5\u671F\u9009\u62E9\u5668",
    component: "date-picker",
    uuid: "",
    options: {
      label: "\u65E5\u671F\u9009\u62E9\u5668",
      key: "",
      defaultValue: void 0,
      rules: K,
      placeholder: "\u8BF7\u9009\u62E9",
      width: "100%",
      prefixIcon: "el-icon-time",
      format: "YYYY-MM-DD",
      hidden: !1,
      clearable: !1,
      disabled: !1
    }
  },
  {
    name: "\u65E5\u671F\u8303\u56F4",
    component: "date-range-picker",
    uuid: "",
    options: {
      label: "\u65E5\u671F\u8303\u56F4",
      key: "",
      defaultValue: [],
      rules: K,
      placeholder: "\u8BF7\u9009\u62E9",
      width: "100%",
      prefixIcon: "el-icon-time",
      format: "YYYY-MM-DD",
      hidden: !1,
      clearable: !1,
      disabled: !1
    }
  },
  {
    name: "\u8BC4\u5206",
    component: "rate",
    uuid: "",
    options: {
      label: "\u8BC4\u5206",
      key: "",
      defaultValue: 3,
      rules: K,
      width: "100%",
      max: 5,
      hidden: !1,
      disabled: !1,
      allowHalf: !1
    }
  },
  {
    name: "\u6ED1\u5757",
    component: "slider",
    uuid: "",
    options: {
      label: "\u6ED1\u5757",
      key: "",
      defaultValue: 10,
      rules: K,
      width: "100%",
      min: 0,
      max: 100,
      step: 1,
      hidden: !1,
      disabled: !1,
      showStops: !1,
      showToolTip: !0,
      showInput: !1
    }
  },
  {
    name: "\u5F00\u5173",
    component: "switch",
    uuid: "",
    options: {
      label: "\u5F00\u5173",
      key: "",
      defaultValue: !1,
      rules: K,
      width: "100%",
      hidden: !1,
      disabled: !1,
      activeText: "",
      inactiveText: "",
      activeColor: "#409EFF",
      inactiveColor: "#C0CCDA"
    }
  },
  {
    name: "\u989C\u8272\u9009\u62E9\u5668",
    component: "color-picker",
    uuid: "",
    options: {
      label: "\u989C\u8272\u9009\u62E9\u5668",
      key: "",
      defaultValue: "",
      rules: K,
      width: "100%",
      hidden: !1,
      disabled: !1,
      showAlpha: !1
    }
  },
  {
    name: "\u6587\u4EF6\u4E0A\u4F20",
    component: "upload-file",
    uuid: "",
    options: {
      label: "\u6587\u4EF6\u4E0A\u4F20",
      key: "",
      defaultValue: [],
      rules: K,
      width: "100%",
      uploadUrl: "http://httpbin.org/post",
      uploadName: "file",
      buttonText: "\u4E0A\u4F20\u6587\u4EF6",
      fileSuffix: ["doc", "docx", "xls", "xlsx", "rar", "zip"],
      uploadSize: "500KB",
      tip: "",
      uploadData: {},
      uploadHeaders: {},
      limit: 3,
      hidden: !1,
      disabled: !1,
      showToolTip: !1,
      showFileList: !0,
      multiple: !1
    }
  },
  {
    name: "\u56FE\u7247\u4E0A\u4F20",
    component: "upload-image",
    uuid: "",
    options: {
      label: "\u56FE\u7247\u4E0A\u4F20",
      key: "",
      defaultValue: [],
      rules: K,
      width: "100%",
      uploadUrl: "http://httpbin.org/post",
      uploadName: "file",
      imageSuffix: ["jpg", "jpeg", "png", "gif"],
      uploadSize: "500KB",
      tip: "",
      uploadData: {},
      uploadHeaders: {},
      limit: 3,
      hidden: !1,
      disabled: !1,
      showToolTip: !1,
      multiple: !1
    }
  }
], A1 = [
  {
    name: "\u5BCC\u6587\u672C",
    component: "rich-editor",
    uuid: "",
    options: {
      label: "\u5BCC\u6587\u672C",
      key: "",
      defaultValue: "",
      rules: K,
      width: "100%",
      height: "300px",
      placeholder: "\u8BF7\u8F93\u5165",
      hidden: !1,
      disabled: !1
    }
  },
  {
    name: "\u624B\u5199\u7B7E\u540D",
    component: "signature",
    uuid: "",
    options: {
      label: "\u624B\u5199\u7B7E\u540D",
      key: "",
      defaultValue: "",
      rules: K,
      width: "100%",
      height: "100px",
      disabled: !1,
      penColor: "#000000",
      backgroundColor: "#dddddd"
    }
  },
  {
    name: "\u7701\u5E02\u53BF",
    component: "area",
    uuid: "",
    options: {
      label: "\u7701\u5E02\u53BF",
      key: "",
      defaultValue: [],
      rules: K,
      placeholder: "\u8BF7\u9009\u62E9",
      width: "100%",
      expandTrigger: "click",
      hidden: !1,
      clearable: !1,
      disabled: !1,
      filterable: !1,
      collapseTags: !1,
      multipleLimit: 0,
      rules: K
    }
  }
], sl = {
  name: "\u5B50\u8868\u5355",
  component: "object",
  uuid: "",
  options: {
    label: "\u5B50\u8868\u5355",
    key: "",
    defaultValue: {},
    width: "100%",
    gutter: 0
  },
  items: []
}, R1 = [
  {
    name: "\u6587\u5B57",
    component: "label",
    uuid: "",
    options: {
      content: "\u6587\u5B57",
      width: "100%",
      lineHeight: "40px"
    }
  },
  {
    name: "HTML",
    component: "html",
    uuid: "",
    options: {
      richContent: "<strong>HTML</strong>",
      width: "100%"
    }
  },
  {
    name: "\u5206\u5272\u7EBF",
    component: "divider",
    uuid: "",
    options: {
      width: "100%"
    }
  }
], z1 = [
  sl,
  {
    name: "\u5361\u7247\u5E03\u5C40",
    component: "card",
    uuid: "",
    options: {
      label: "\u5361\u7247\u5E03\u5C40",
      key: "",
      defaultValue: {},
      width: "100%",
      gutter: 0,
      shadow: "always",
      padding: "20px 20px 20px 20px"
    },
    items: []
  },
  {
    name: "\u6807\u7B7E\u5E03\u5C40",
    component: "tabs",
    uuid: "",
    options: {
      label: "\u6807\u7B7E\u5E03\u5C40",
      key: "",
      defaultValue: {},
      width: "100%",
      tabType: "border-card",
      tabPosition: "top"
    },
    items: []
  },
  {
    name: "\u5217\u8868",
    component: "table",
    uuid: "",
    options: {
      label: "\u5217\u8868",
      key: "",
      defaultValue: [],
      width: "100%"
    },
    items: []
  }
], Zn = {
  name: "\u8868\u5355",
  component: "object",
  uuid: "root",
  options: {
    labelWidth: "120px",
    labelPosition: "right",
    size: "default",
    gutter: 0,
    hideRequiredAsterisk: !1,
    statusIcon: !1,
    remotes: {}
  },
  items: []
}, F1 = {
  activeColor: "\u6253\u5F00\u65F6\u80CC\u666F\u8272",
  activeText: "\u6253\u5F00\u65F6\u6587\u5B57\u63CF\u8FF0",
  allowHalf: "\u5141\u8BB8\u534A\u9009",
  backgroundColor: "\u80CC\u666F\u989C\u8272",
  buttonText: "\u6309\u94AE\u6587\u5B57",
  clearable: "\u53EF\u6E05\u9664",
  collapseTags: "\u591A\u9009\u5408\u5E76\u663E\u793A",
  content: "\u5185\u5BB9",
  defaultValue: "\u9ED8\u8BA4\u503C",
  disabled: "\u7981\u7528",
  expandTrigger: "\u89E6\u53D1\u5B50\u83DC\u5355\u65B9\u5F0F",
  fileSuffix: "\u4E0A\u4F20\u6587\u4EF6\u7C7B\u578B",
  filterable: "\u53EF\u641C\u7D22",
  format: "\u663E\u793A\u683C\u5F0F",
  gutter: "\u884C\u5185\u95F4\u8DDD",
  height: "\u7EC4\u4EF6\u9AD8\u5EA6",
  hidden: "\u9690\u85CF",
  hideRequiredAsterisk: "\u9690\u85CF\u5FC5\u9009\u6807\u8BB0",
  imageSuffix: "\u4E0A\u4F20\u56FE\u7247\u7C7B\u578B",
  inactiveColor: "\u5173\u95ED\u65F6\u80CC\u666F\u8272",
  inactiveText: "\u5173\u95ED\u65F6\u6587\u5B57\u63CF\u8FF0",
  inline: "\u662F\u5426\u884C\u5185\u8868\u5355",
  key: "\u5B57\u6BB5\u540D\u79F0(\u82F1\u6587)",
  labelPosition: "\u5BF9\u9F50\u65B9\u5F0F",
  labelWidth: "\u6807\u7B7E\u5BBD\u5EA6",
  label: "\u6807\u7B7E",
  limit: "\u4E2A\u6570\u9650\u5236",
  lineHeight: "\u884C\u9AD8",
  max: "\u6700\u5927\u503C",
  maxlength: "\u6700\u5927\u957F\u5EA6",
  min: "\u6700\u5C0F\u503C",
  multipleLimit: "\u591A\u9009\u4E2A\u6570\u9650\u5236",
  multiple: "\u5141\u8BB8\u591A\u9009",
  noDataText: "\u65E0\u9009\u9879\u63D0\u793A",
  noMatchText: "\u641C\u7D22\u65E0\u5339\u914D\u63D0\u793A",
  options: "\u9009\u9879",
  penColor: "\u7B14\u989C\u8272",
  padding: "\u5185\u8FB9\u8DDD",
  placeholder: "\u5360\u4F4D\u6587\u672C",
  prefixIcon: "\u524D\u7F00\u56FE\u6807",
  remotes: "\u6570\u636E\u6E90",
  richContent: "HTML",
  rows: "\u6587\u672C\u57DF\u9AD8\u5EA6",
  rules: "\u9A8C\u8BC1",
  shadow: "\u9634\u5F71\u663E\u793A",
  showAlpha: "\u900F\u660E\u5EA6\u9009\u62E9",
  showFileList: "\u663E\u793A\u4E0A\u4F20\u5217\u8868",
  showInput: "\u663E\u793A\u8F93\u5165\u6846",
  showPassword: "\u5BC6\u7801\u6846",
  showStops: "\u663E\u793A\u95F4\u65AD\u70B9",
  showToolTip: "\u663E\u793A\u63D0\u793A",
  showWordLimit: "\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",
  size: "\u7EC4\u4EF6\u5C3A\u5BF8",
  statusIcon: "\u663E\u793A\u6821\u9A8C\u53CD\u9988\u56FE\u6807",
  suffixIcon: "\u540E\u7F00\u56FE\u6807",
  tabPosition: "\u9009\u9879\u5361\u4F4D\u7F6E",
  tabType: "\u9009\u9879\u5361\u6837\u5F0F",
  tip: "\u63D0\u793A\u8BF4\u660E\u6587\u5B57",
  uploadData: "\u4E0A\u4F20\u989D\u5916\u53C2\u6570",
  uploadHeaders: "\u4E0A\u4F20\u8BF7\u6C42\u5934\u90E8",
  uploadName: "\u6587\u4EF6\u5B57\u6BB5\u540D",
  uploadSize: "\u4E0A\u4F20\u5927\u5C0F\u9650\u5236",
  uploadUrl: "\u4E0A\u4F20\u5730\u5740",
  width: "\u7EC4\u4EF6\u5BBD\u5EA6"
}, B1 = {
  components: { draggable: il },
  setup() {
    const o = z("uuids"), t = z("groups"), e = z("register");
    return e("\u8F93\u5165\u7EC4\u4EF6", M1, 1), e("\u9009\u62E9\u7EC4\u4EF6", I1, 2), e("\u590D\u6742\u7EC4\u4EF6", A1, 3), e("\u5C55\u793A\u7EC4\u4EF6", R1, 4), e("\u5E03\u5C40\u7EC4\u4EF6", z1, 5), {
      uuids: o,
      groups: t,
      clone: (n) => {
        const a = ue(n);
        return a.uuid = a.uuid || a.component.replaceAll("-", "_") + "_" + Vt(8), a.options.key = a.options.key || a.uuid, a;
      }
    };
  }
}, L1 = { class: "form-picker" }, U1 = { class: "title" }, N1 = { class: "form-item-group" }, H1 = { class: "form-item-drop" };
function W1(o, t, e, n, a, i) {
  const l = u("draggable");
  return g(), D("div", L1, [
    (g(!0), D(U, null, Q(n.groups.sort((r, s) => r.order - s.order), (r) => (g(), D("div", {
      class: "form-item-section",
      key: r.name
    }, [
      $("div", U1, te(r.name), 1),
      $("div", N1, [
        (g(!0), D(U, null, Q(r.components, (s) => (g(), y(l, {
          key: s.name,
          class: Kt(["form-item-group-item", { "is-disabled": n.uuids.indexOf(s.uuid) > -1 }]),
          "model-value": [s],
          "item-key": "name",
          group: { name: "form-draggable", pull: "clone", put: !1 },
          "ghost-class": "ghost",
          sort: !1,
          disabled: n.uuids.indexOf(s.uuid) > -1,
          clone: n.clone
        }, {
          item: f(({ element: d }) => [
            $("div", H1, te(d.name), 1)
          ]),
          _: 2
        }, 1032, ["class", "model-value", "disabled", "clone"]))), 128))
      ])
    ]))), 128))
  ]);
}
const q1 = /* @__PURE__ */ w(B1, [["render", W1]]), Y1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
}, G1 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M26 18A10 10 0 1 1 16 8h6.182l-3.584 3.585L20 13l6-6l-6-6l-1.402 1.414L22.185 6H16a12 12 0 1 0 12 12Z"
}, null, -1), X1 = [
  G1
];
function K1(o, t) {
  return g(), D("svg", Y1, X1);
}
const J1 = { name: "carbon-restart", render: K1 }, Z1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
}, Q1 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z"
}, null, -1), em = [
  Q1
];
function tm(o, t) {
  return g(), D("svg", Z1, em);
}
const om = { name: "carbon-reset", render: tm }, nm = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
}, rm = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7zm11.42 9.484L17.64 6l1.932.517L14.352 26z"
}, null, -1), lm = [
  rm
];
function am(o, t) {
  return g(), D("svg", nm, lm);
}
const im = { name: "carbon-code", render: am }, sm = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
}, dm = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23Zm1-11.382v8.764L20.764 16Z"
}, null, -1), um = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z"
}, null, -1), cm = [
  dm,
  um
];
function mm(o, t) {
  return g(), D("svg", sm, cm);
}
const pm = { name: "carbon-play-outline", render: mm }, fm = {
  components: {
    ElTooltip: Sl,
    ElDialog: Le,
    ElButton: xe,
    ElDivider: Wo,
    ElIcon: Et,
    CodeEditor: dt,
    FormRender: sn
  },
  setup() {
    const o = B(null), t = B(!1), e = ie({
      title: "",
      isShow: !1,
      code: ""
    }), n = ie({
      title: "",
      isShow: !1,
      code: ""
    }), a = z("state"), i = z("clear"), l = z("revoke"), r = z("forward"), s = z("init");
    return {
      previewDialog: t,
      jsonDialog: e,
      resultDialog: n,
      clear: () => i(),
      revoke: l,
      forward: r,
      preview: () => {
        t.value = !0, Ge(() => {
          o.value && o.value.init(ue(a.formDesign));
        });
      },
      submit: (_) => {
        n.title = "\u83B7\u53D6\u6570\u636E", n.isShow = !0, n.code = JSON.stringify(_, null, "	");
      },
      editJson: () => {
        e.title = "\u67E5\u770BJSON", e.isShow = !0, e.code = JSON.stringify(a.formDesign, null, "	");
      },
      saveJson: () => {
        try {
          s(JSON.parse(e.code));
        } catch {
          return me.error("\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E");
        }
        e.isShow = !1;
      },
      formRender: o,
      cached: ve(() => a.cached),
      current: ve(() => a.current)
    };
  }
}, _m = { class: "form-operator" }, hm = { class: "form-design-code-editor" }, gm = /* @__PURE__ */ j("\u53D6\u6D88"), bm = /* @__PURE__ */ j("\u786E\u5B9A"), vm = { class: "form-design-code-editor" }, ym = /* @__PURE__ */ j("\u5173\u95ED");
function xm(o, t, e, n, a, i) {
  const l = pm, r = u("el-icon"), s = u("el-tooltip"), d = im, m = ut, c = u("el-divider"), h = om, _ = J1, b = u("form-render"), v = u("el-dialog"), x = u("code-editor"), S = u("el-button");
  return g(), D("div", _m, [
    p(s, {
      effect: "dark",
      content: "\u9884\u89C8",
      placement: "bottom"
    }, {
      default: f(() => [
        p(r, {
          class: "icon",
          onClick: n.preview
        }, {
          default: f(() => [
            p(l)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }),
    p(s, {
      effect: "dark",
      content: "\u7F16\u8F91JSON",
      placement: "bottom"
    }, {
      default: f(() => [
        p(r, {
          class: "icon",
          onClick: n.editJson
        }, {
          default: f(() => [
            p(d)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }),
    p(s, {
      effect: "dark",
      content: "\u6E05\u7A7A",
      placement: "bottom"
    }, {
      default: f(() => [
        p(r, {
          class: "icon",
          onClick: n.clear
        }, {
          default: f(() => [
            p(m)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }),
    p(c, { direction: "vertical" }),
    p(s, {
      effect: "dark",
      content: "\u540E\u9000",
      placement: "bottom"
    }, {
      default: f(() => [
        p(r, {
          class: Kt(["icon", { disabled: n.current <= 0 }]),
          onClick: n.revoke
        }, {
          default: f(() => [
            p(h)
          ]),
          _: 1
        }, 8, ["class", "onClick"])
      ]),
      _: 1
    }),
    p(s, {
      effect: "dark",
      content: "\u524D\u8FDB",
      placement: "bottom"
    }, {
      default: f(() => [
        p(r, {
          class: Kt(["icon", { disabled: n.current >= n.cached.length - 1 }]),
          onClick: n.forward
        }, {
          default: f(() => [
            p(_)
          ]),
          _: 1
        }, 8, ["class", "onClick"])
      ]),
      _: 1
    }),
    p(v, {
      title: "\u9884\u89C8",
      modelValue: n.previewDialog,
      "onUpdate:modelValue": t[0] || (t[0] = (k) => n.previewDialog = k),
      "destroy-on-close": "",
      "append-to-body": "",
      width: "750px"
    }, {
      default: f(() => [
        p(b, {
          ref: "formRender",
          onSubmit: n.submit
        }, null, 8, ["onSubmit"])
      ]),
      _: 1
    }, 8, ["modelValue"]),
    p(v, {
      title: n.jsonDialog.title,
      modelValue: n.jsonDialog.isShow,
      "onUpdate:modelValue": t[3] || (t[3] = (k) => n.jsonDialog.isShow = k),
      "append-to-body": "",
      width: "750px"
    }, {
      footer: f(() => [
        $("div", null, [
          p(S, {
            onClick: t[2] || (t[2] = (k) => n.jsonDialog.isShow = !1)
          }, {
            default: f(() => [
              gm
            ]),
            _: 1
          }),
          p(S, {
            type: "primary",
            onClick: n.saveJson
          }, {
            default: f(() => [
              bm
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: f(() => [
        $("div", hm, [
          p(x, {
            modelValue: n.jsonDialog.code,
            "onUpdate:modelValue": t[1] || (t[1] = (k) => n.jsonDialog.code = k),
            lang: "json"
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }, 8, ["title", "modelValue"]),
    p(v, {
      title: n.resultDialog.title,
      modelValue: n.resultDialog.isShow,
      "onUpdate:modelValue": t[6] || (t[6] = (k) => n.resultDialog.isShow = k),
      "append-to-body": "",
      width: "750px"
    }, {
      footer: f(() => [
        $("div", null, [
          p(S, {
            onClick: t[5] || (t[5] = (k) => n.resultDialog.isShow = !1)
          }, {
            default: f(() => [
              ym
            ]),
            _: 1
          })
        ])
      ]),
      default: f(() => [
        $("div", vm, [
          p(x, {
            modelValue: n.resultDialog.code,
            "onUpdate:modelValue": t[4] || (t[4] = (k) => n.resultDialog.code = k),
            lang: "json"
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }, 8, ["title", "modelValue"])
  ]);
}
const wm = /* @__PURE__ */ w(fm, [["render", xm]]), Sm = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
}, km = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "m27.4 14.7l-6.1-6.1C21 8.2 20.5 8 20 8h-8c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V16.1c0-.5-.2-1-.6-1.4zM20 10l5.9 6H20v-6zm-8 18V10h6v6c0 1.1.9 2 2 2h6v10H12z"
}, null, -1), Om = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M6 18H4V4c0-1.1.9-2 2-2h14v2H6v14z"
}, null, -1), Vm = [
  km,
  Om
];
function Tm(o, t) {
  return g(), D("svg", Sm, Vm);
}
const $m = { name: "carbon-copy-file", render: Tm }, Cm = {
  name: "areaBuilder",
  components: { ElFormItem: I, ElCascader: lo },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
    return {
      region: ie(Xo)
    };
  }
};
function jm(o, t, e, n, a, i) {
  const l = u("el-cascader"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        "model-value": e.options.defaultValue,
        options: n.region,
        placeholder: e.options.placeholder,
        disabled: e.options.disabled,
        clearable: e.options.clearable,
        props: {
          expandTrigger: e.options.expandTrigger
        }
      }, null, 8, ["model-value", "options", "placeholder", "disabled", "clearable", "props"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Em = /* @__PURE__ */ w(Cm, [["render", jm]]), Dm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Em
}, Symbol.toStringTag, { value: "Module" })), Pm = {
  name: "objectBuilder",
  components: { draggable: il, FormBuilderItem: Uo(() => Promise.resolve().then(() => X2)) },
  props: {
    path: String,
    uuid: String,
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("setSelected"), e = z("updateFormItem");
    return {
      add: (n) => t(o.items[n.newIndex].uuid),
      dragStart: (n) => t(o.items[n.oldIndex].uuid),
      updateItems: (n) => e({ uuid: o.uuid, items: n })
    };
  }
};
function Mm(o, t, e, n, a, i) {
  const l = u("form-builder-item"), r = u("draggable");
  return g(), y(r, {
    class: "form-item-drop-list",
    "model-value": e.items,
    "onUpdate:modelValue": n.updateItems,
    onStart: n.dragStart,
    onAdd: n.add,
    "item-key": "uuid",
    animation: 200,
    group: { name: "form-draggable" },
    "ghost-class": "ghost"
  }, {
    item: f(({ element: s }) => [
      $("div", {
        class: "form-item-drop-item",
        style: Ye({
          width: s.options.width
        })
      }, [
        p(l, {
          component: s.component,
          uuid: s.uuid,
          items: s.items,
          options: s.options,
          path: s.options.key ? e.path + "." + s.options.key : e.path,
          style: Ye({
            "padding-left": e.options.gutter / 2 + "px",
            "padding-right": e.options.gutter / 2 + "px"
          })
        }, null, 8, ["component", "uuid", "items", "options", "path", "style"])
      ], 4)
    ]),
    _: 1
  }, 8, ["model-value", "onUpdate:modelValue", "onStart", "onAdd"]);
}
const go = /* @__PURE__ */ w(Pm, [["render", Mm]]), Im = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: go
}, Symbol.toStringTag, { value: "Module" })), Am = {
  name: "cardBuilder",
  components: { ElCard: tr, objectBuilder: go },
  props: {
    path: String,
    uuid: String,
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
}, Rm = { class: "card-header" };
function zm(o, t, e, n, a, i) {
  const l = u("object-builder"), r = u("el-card");
  return g(), y(r, {
    shadow: e.options.shadow,
    "body-style": { padding: e.options.padding }
  }, {
    header: f(() => [
      $("div", Rm, [
        $("span", null, te(e.options.label), 1)
      ])
    ]),
    default: f(() => [
      p(l, {
        uuid: e.uuid,
        items: e.items,
        options: e.options,
        path: e.path
      }, null, 8, ["uuid", "items", "options", "path"])
    ]),
    _: 1
  }, 8, ["shadow", "body-style"]);
}
const Fm = /* @__PURE__ */ w(Am, [["render", zm]]), Bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fm
}, Symbol.toStringTag, { value: "Module" })), Lm = {
  name: "cascaderBuilder",
  components: { ElFormItem: I, ElCascader: lo },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function Um(o, t, e, n, a, i) {
  const l = u("el-cascader"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        "model-value": e.options.defaultValue,
        options: n.items,
        placeholder: e.options.placeholder,
        disabled: e.options.disabled,
        clearable: e.options.clearable,
        props: {
          expandTrigger: e.options.expandTrigger
        }
      }, null, 8, ["model-value", "options", "placeholder", "disabled", "clearable", "props"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Nm = /* @__PURE__ */ w(Lm, [["render", Um]]), Hm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nm
}, Symbol.toStringTag, { value: "Module" })), Wm = {
  name: "checkboxBuilder",
  components: { ElFormItem: I, ElCheckboxGroup: or, ElCheckbox: oe },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function qm(o, t, e, n, a, i) {
  const l = u("el-checkbox"), r = u("el-checkbox-group"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(r, {
        key: 0,
        "model-value": e.options.defaultValue,
        disabled: e.options.disabled
      }, {
        default: f(() => [
          (g(!0), D(U, null, Q(n.items, (d) => (g(), y(l, {
            key: d.value,
            label: d.value
          }, {
            default: f(() => [
              j(te(d.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Ym = /* @__PURE__ */ w(Wm, [["render", qm]]), Gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ym
}, Symbol.toStringTag, { value: "Module" })), Xm = {
  name: "colorPickerBuilder",
  components: { ElFormItem: I, ElColorPicker: it },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function Km(o, t, e, n, a, i) {
  const l = u("el-color-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        "model-value": e.options.defaultValue,
        disabled: e.options.disabled,
        "show-alpha": e.options.showAlpha
      }, null, 8, ["model-value", "disabled", "show-alpha"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Jm = /* @__PURE__ */ w(Xm, [["render", Km]]), Zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jm
}, Symbol.toStringTag, { value: "Module" })), Qm = {
  name: "datePickerBuilder",
  components: { ElFormItem: I, ElDatePicker: ao },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function ep(o, t, e, n, a, i) {
  const l = u("el-date-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        "model-value": e.options.defaultValue,
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        format: e.options.format,
        "prefix-icon": e.options.prefixIcon
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "format", "prefix-icon"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const tp = /* @__PURE__ */ w(Qm, [["render", ep]]), op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tp
}, Symbol.toStringTag, { value: "Module" })), np = {
  name: "dateRangePickerBuilder",
  components: { ElFormItem: I, ElDatePicker: ao },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function rp(o, t, e, n, a, i) {
  const l = u("el-date-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        type: "daterange",
        "model-value": e.options.defaultValue,
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        format: e.options.format,
        "prefix-icon": e.options.prefixIcon
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "format", "prefix-icon"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const lp = /* @__PURE__ */ w(np, [["render", rp]]), ap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lp
}, Symbol.toStringTag, { value: "Module" })), ip = {
  name: "dividerBuilder",
  components: { ElDivider: Wo },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function sp(o, t, e, n, a, i) {
  const l = u("el-divider");
  return g(), y(l);
}
const dp = /* @__PURE__ */ w(ip, [["render", sp]]), up = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dp
}, Symbol.toStringTag, { value: "Module" })), cp = {
  name: "htmlBuilder",
  components: {},
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
}, mp = ["innerHTML"];
function pp(o, t, e, n, a, i) {
  return g(), D("div", {
    innerHTML: e.options.richContent
  }, null, 8, mp);
}
const fp = /* @__PURE__ */ w(cp, [["render", pp]]), _p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fp
}, Symbol.toStringTag, { value: "Module" })), hp = {
  name: "inputBuilder",
  components: { ElFormItem: I, ElInput: W },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function gp(o, t, e, n, a, i) {
  const l = u("el-input"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        type: "text",
        "model-value": e.options.defaultValue,
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        "show-password": e.options.showPassword,
        "prefix-icon": e.options.prefixIcon,
        "suffix-icon": e.options.suffixIcon,
        maxlength: e.options.maxlength,
        "show-word-limit": e.options.showWordLimit
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "show-password", "prefix-icon", "suffix-icon", "maxlength", "show-word-limit"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const bp = /* @__PURE__ */ w(hp, [["render", gp]]), vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bp
}, Symbol.toStringTag, { value: "Module" })), yp = {
  name: "labelBuilder",
  components: {},
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function xp(o, t, e, n, a, i) {
  return g(), D("label", null, te(e.options.content), 1);
}
const wp = /* @__PURE__ */ w(yp, [["render", xp]]), Sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wp
}, Symbol.toStringTag, { value: "Module" })), kp = {
  name: "multiSelectBuilder",
  components: { ElFormItem: I, ElSelect: Ke, ElOption: jt },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function Op(o, t, e, n, a, i) {
  const l = u("el-option"), r = u("el-select"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(r, {
        key: 0,
        "model-value": e.options.defaultValue,
        multiple: !0,
        "collapse-tags": e.options.collapseTags,
        "multiple-limit": e.options.multipleLimit,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        filterable: e.options.filterable,
        placeholder: e.options.placeholder,
        "no-data-text": e.options.noDataText,
        "no-match-text": e.options.noMatchText
      }, {
        default: f(() => [
          (g(!0), D(U, null, Q(n.items, (d) => (g(), y(l, {
            key: d.value,
            label: d.label,
            value: d.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "collapse-tags", "multiple-limit", "clearable", "disabled", "filterable", "placeholder", "no-data-text", "no-match-text"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Vp = /* @__PURE__ */ w(kp, [["render", Op]]), Tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vp
}, Symbol.toStringTag, { value: "Module" })), $p = {
  name: "numberBuilder",
  components: { ElFormItem: I, ElInputNumber: ze },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function Cp(o, t, e, n, a, i) {
  const l = u("el-input-number"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        "model-value": e.options.defaultValue,
        min: e.options.min,
        max: e.options.max,
        disabled: e.options.disabled
      }, null, 8, ["model-value", "min", "max", "disabled"]))
    ]),
    _: 1
  }, 8, ["prop", "label"]);
}
const jp = /* @__PURE__ */ w($p, [["render", Cp]]), Ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jp
}, Symbol.toStringTag, { value: "Module" })), Dp = {
  name: "radioBuilder",
  components: { ElFormItem: I, ElRadioGroup: Fe, ElRadio: nr },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function Pp(o, t, e, n, a, i) {
  const l = u("el-radio"), r = u("el-radio-group"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(r, {
        key: 0,
        "model-value": e.options.defaultValue,
        disabled: e.options.disabled
      }, {
        default: f(() => [
          (g(!0), D(U, null, Q(n.items, (d) => (g(), y(l, {
            key: d.value,
            label: d.value
          }, {
            default: f(() => [
              j(te(d.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Mp = /* @__PURE__ */ w(Dp, [["render", Pp]]), Ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mp
}, Symbol.toStringTag, { value: "Module" })), Ap = {
  name: "rateBuilder",
  components: { ElFormItem: I, ElRate: rr },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function Rp(o, t, e, n, a, i) {
  const l = u("el-rate"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        class: "form-rate",
        "model-value": e.options.defaultValue,
        disabled: e.options.disabled,
        "allow-half": e.options.allowHalf,
        max: e.options.max
      }, null, 8, ["model-value", "disabled", "allow-half", "max"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const zp = /* @__PURE__ */ w(Ap, [["render", Rp]]), Fp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zp
}, Symbol.toStringTag, { value: "Module" })), Bp = {
  name: "richEditorBuilder",
  components: { ElFormItem: I, Editor: _r, Toolbar: hr },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
    const o = No(), t = (e) => {
      o.value = e;
    };
    return er(() => {
      const e = o.value;
      e != null && e.destroy();
    }), {
      editorRef: o,
      handleCreated: t
    };
  }
}, Lp = {
  key: 0,
  class: "rich-editor-container"
};
function Up(o, t, e, n, a, i) {
  const l = u("Toolbar"), r = u("Editor"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), D("div", Lp, [
        p(l, {
          class: "rich-editor-toolbar",
          editor: n.editorRef
        }, null, 8, ["editor"]),
        p(r, {
          class: "rich-editor",
          defaultConfig: { placeholder: e.options.placeholder, readOnly: !0 },
          onOnCreated: n.handleCreated,
          style: Ye({ height: e.options.height, width: "100%" })
        }, null, 8, ["defaultConfig", "onOnCreated", "style"])
      ]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Np = /* @__PURE__ */ w(Bp, [["render", Up]]), Hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Np
}, Symbol.toStringTag, { value: "Module" })), Wp = {
  name: "selectBuilder",
  components: { ElFormItem: I, ElSelect: Ke, ElOption: jt },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), { items: e } = Ve(o, t.formDesign);
    return {
      items: e
    };
  }
};
function qp(o, t, e, n, a, i) {
  const l = u("el-option"), r = u("el-select"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(r, {
        key: 0,
        "model-value": e.options.defaultValue,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        filterable: e.options.filterable,
        placeholder: e.options.placeholder,
        "no-data-text": e.options.noDataText,
        "no-match-text": e.options.noMatchText
      }, {
        default: f(() => [
          (g(!0), D(U, null, Q(n.items, (d) => (g(), y(l, {
            key: d.value,
            label: d.label,
            value: d.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "clearable", "disabled", "filterable", "placeholder", "no-data-text", "no-match-text"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Yp = /* @__PURE__ */ w(Wp, [["render", qp]]), Gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yp
}, Symbol.toStringTag, { value: "Module" })), Xp = {
  name: "signatureBuilder",
  components: { Signature: sr },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = B(null);
    return ye(
      () => o.options.defaultValue,
      (e) => {
        e ? t.value.fromDataURL(e) : t.value.clearSignature();
      }
    ), {
      signatureRef: t
    };
  }
};
function Kp(o, t, e, n, a, i) {
  const l = u("Signature"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        ref: "signatureRef",
        disabled: e.options.disabled,
        width: e.options.width,
        height: e.options.height,
        options: {
          penColor: e.options.penColor,
          backgroundColor: e.options.backgroundColor
        }
      }, null, 8, ["disabled", "width", "height", "options"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const Jp = /* @__PURE__ */ w(Xp, [["render", Kp]]), Zp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jp
}, Symbol.toStringTag, { value: "Module" })), Qp = {
  name: "sliderBuilder",
  components: { ElFormItem: I, ElSlider: Be },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function e2(o, t, e, n, a, i) {
  const l = u("el-slider"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        "model-value": e.options.defaultValue,
        disabled: e.options.disabled,
        min: e.options.min,
        max: e.options.max,
        step: e.options.step,
        "show-stops": e.options.showStops,
        "show-input": e.options.showInput,
        "show-tooltip": e.options.showToolTip
      }, null, 8, ["model-value", "disabled", "min", "max", "step", "show-stops", "show-input", "show-tooltip"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const t2 = /* @__PURE__ */ w(Qp, [["render", e2]]), o2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: t2
}, Symbol.toStringTag, { value: "Module" })), n2 = {
  name: "switchBuilder",
  components: { ElFormItem: I, ElSwitch: lr },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function r2(o, t, e, n, a, i) {
  const l = u("el-switch"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        "model-value": e.options.defaultValue,
        disabled: e.options.disabled,
        "active-text": e.options.activeText,
        "inactive-text": e.options.inactiveText,
        "active-color": e.options.activeColor,
        "inactive-color": e.options.inactiveColor
      }, null, 8, ["model-value", "disabled", "active-text", "inactive-text", "active-color", "inactive-color"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const l2 = /* @__PURE__ */ w(n2, [["render", r2]]), a2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l2
}, Symbol.toStringTag, { value: "Module" })), i2 = {
  name: "tableBuilder",
  components: { ElFormItem: I, objectBuilder: go },
  props: {
    path: String,
    uuid: String,
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function s2(o, t, e, n, a, i) {
  const l = u("object-builder"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      p(l, {
        uuid: e.uuid,
        items: e.items,
        options: e.options,
        path: e.path
      }, null, 8, ["uuid", "items", "options", "path"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const d2 = /* @__PURE__ */ w(i2, [["render", s2]]), u2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: d2
}, Symbol.toStringTag, { value: "Module" })), c2 = {
  name: "tabsBuilder",
  components: { ElForm: uo, ElFormItem: I, ElTabs: ar, ElTabPane: ir, ElDialog: Le, ElInput: W, ElButton: xe, objectBuilder: go },
  props: {
    path: String,
    uuid: String,
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("updateFormItem"), e = z("updateFormOption"), n = B(""), a = ie({
      title: "",
      isShow: !1
    }), i = B(null), l = ie({
      label: [{ required: !0, message: "\u8BF7\u8F93\u5165\u6807\u7B7E\u540D\u79F0", trigger: "change" }],
      key: [{ required: !0, message: "\u8BF7\u8F93\u5165ID", trigger: "change" }]
    }), r = ie({
      uuid: "",
      label: "",
      key: ""
    });
    return {
      tabsValue: n,
      tabDialog: a,
      formRef: i,
      rules: l,
      tabForm: r,
      addTab: () => {
        r.uuid = "", r.label = "\u6807\u7B7E" + (o.items.length + 1), r.key = "tab_" + Vt(8), a.isShow = !0, a.title = "\u6DFB\u52A0", Ge(() => {
          i.value && i.value.clearValidate();
        });
      },
      editTab: () => {
        const h = o.items.find((_) => _.uuid === n.value);
        h && (r.uuid = h.uuid, r.label = h.options.label, r.key = h.options.key, a.isShow = !0, a.title = "\u7F16\u8F91", Ge(() => {
          i.value && i.value.clearValidate();
        }));
      },
      removeTab: () => {
        const h = o.items.findIndex((b) => b.uuid === n.value), _ = o.items[h + 1] || o.items[h - 1];
        t({ uuid: o.uuid, items: o.items.filter((b) => b.uuid !== n.value) }), _ && (n.value = _.uuid);
      },
      saveTab: () => {
        i.value.validate((h) => {
          if (h) {
            if (r.uuid)
              o.items.find((b) => b.uuid === n.value) && (e({ uuid: r.uuid, key: "label", value: r.label }), e({ uuid: r.uuid, key: "key", value: r.key }));
            else {
              const _ = ue(sl);
              _.uuid = _.component.replaceAll("-", "_") + "_" + Vt(8), _.options.label = r.label, _.options.key = r.key, n.value = _.uuid, t({ uuid: o.uuid, items: [...o.items, _] });
            }
            a.isShow = !1;
          }
        });
      }
    };
  }
}, m2 = { style: { "margin-bottom": "20px" } }, p2 = /* @__PURE__ */ j(" \u6DFB\u52A0 "), f2 = /* @__PURE__ */ j(" \u4FEE\u6539 "), _2 = /* @__PURE__ */ j(" \u5220\u9664 "), h2 = /* @__PURE__ */ j("\u53D6\u6D88"), g2 = /* @__PURE__ */ j("\u786E\u5B9A");
function b2(o, t, e, n, a, i) {
  const l = u("el-button"), r = u("object-builder"), s = u("el-tab-pane"), d = u("el-tabs"), m = u("el-input"), c = u("el-form-item"), h = u("el-form"), _ = u("el-dialog");
  return g(), D(U, null, [
    $("div", m2, [
      p(l, {
        type: "primary",
        onClick: n.addTab
      }, {
        default: f(() => [
          p2
        ]),
        _: 1
      }, 8, ["onClick"]),
      p(l, {
        type: "primary",
        onClick: n.editTab
      }, {
        default: f(() => [
          f2
        ]),
        _: 1
      }, 8, ["onClick"]),
      p(l, {
        type: "danger",
        disabled: e.items.length <= 0,
        onClick: n.removeTab
      }, {
        default: f(() => [
          _2
        ]),
        _: 1
      }, 8, ["disabled", "onClick"])
    ]),
    p(d, {
      modelValue: n.tabsValue,
      "onUpdate:modelValue": t[0] || (t[0] = (b) => n.tabsValue = b),
      type: e.options.tabType,
      "tab-position": e.options.tabPosition
    }, {
      default: f(() => [
        (g(!0), D(U, null, Q(e.items, (b) => (g(), y(s, {
          key: b.name,
          label: b.options.label,
          name: b.uuid
        }, {
          default: f(() => [
            p(r, {
              uuid: b.uuid,
              items: b.items,
              options: b.options,
              path: e.path + "." + b.options.key
            }, null, 8, ["uuid", "items", "options", "path"])
          ]),
          _: 2
        }, 1032, ["label", "name"]))), 128))
      ]),
      _: 1
    }, 8, ["modelValue", "type", "tab-position"]),
    p(_, {
      title: n.tabDialog.title,
      modelValue: n.tabDialog.isShow,
      "onUpdate:modelValue": t[4] || (t[4] = (b) => n.tabDialog.isShow = b),
      width: "750px"
    }, {
      footer: f(() => [
        $("div", null, [
          p(l, {
            onClick: t[3] || (t[3] = (b) => n.tabDialog.isShow = !1)
          }, {
            default: f(() => [
              h2
            ]),
            _: 1
          }),
          p(l, {
            type: "primary",
            onClick: n.saveTab
          }, {
            default: f(() => [
              g2
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: f(() => [
        p(h, {
          ref: "formRef",
          model: n.tabForm,
          rules: n.rules,
          "label-position": "left",
          "label-width": "150px",
          style: { width: "400px", "margin-left": "50px" }
        }, {
          default: f(() => [
            p(c, {
              label: "\u6807\u7B7E\u540D\u79F0",
              prop: "label"
            }, {
              default: f(() => [
                p(m, {
                  modelValue: n.tabForm.label,
                  "onUpdate:modelValue": t[1] || (t[1] = (b) => n.tabForm.label = b),
                  type: "text"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            p(c, {
              label: "ID (\u5B57\u6BB5\u540D\u79F0/\u82F1\u6587)",
              prop: "key",
              style: { "margin-top": "22px" }
            }, {
              default: f(() => [
                p(m, {
                  modelValue: n.tabForm.key,
                  "onUpdate:modelValue": t[2] || (t[2] = (b) => n.tabForm.key = b),
                  type: "text"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"])
      ]),
      _: 1
    }, 8, ["title", "modelValue"])
  ], 64);
}
const v2 = /* @__PURE__ */ w(c2, [["render", b2]]), y2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v2
}, Symbol.toStringTag, { value: "Module" })), x2 = {
  name: "textareaBuilder",
  components: { ElFormItem: I, ElInput: W },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function w2(o, t, e, n, a, i) {
  const l = u("el-input"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        type: "textarea",
        "model-value": e.options.defaultValue,
        rows: e.options.rows,
        placeholder: e.options.placeholder,
        disabled: e.options.disabled,
        maxlength: e.options.maxlength,
        "show-word-limit": e.options.showWordLimit
      }, null, 8, ["model-value", "rows", "placeholder", "disabled", "maxlength", "show-word-limit"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const S2 = /* @__PURE__ */ w(x2, [["render", w2]]), k2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: S2
}, Symbol.toStringTag, { value: "Module" })), O2 = {
  name: "timePickerBuilder",
  components: { ElFormItem: I, ElTimePicker: io },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function V2(o, t, e, n, a, i) {
  const l = u("el-time-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        "model-value": e.options.defaultValue,
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        format: e.options.format,
        "prefix-icon": e.options.prefixIcon
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "format", "prefix-icon"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const T2 = /* @__PURE__ */ w(O2, [["render", V2]]), $2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T2
}, Symbol.toStringTag, { value: "Module" })), C2 = {
  name: "timeRangePickerBuilder",
  components: { ElFormItem: I, ElTimePicker: io },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
};
function j2(o, t, e, n, a, i) {
  const l = u("el-time-picker"), r = u("el-form-item");
  return g(), y(r, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(l, {
        key: 0,
        "is-range": "",
        "model-value": e.options.defaultValue,
        placeholder: e.options.placeholder,
        clearable: e.options.clearable,
        disabled: e.options.disabled,
        format: e.options.format,
        "prefix-icon": e.options.prefixIcon
      }, null, 8, ["model-value", "placeholder", "clearable", "disabled", "format", "prefix-icon"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const E2 = /* @__PURE__ */ w(C2, [["render", j2]]), D2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: E2
}, Symbol.toStringTag, { value: "Module" })), P2 = {
  name: "uploadFileBuilder",
  components: { ElFormItem: I, ElUpload: so, ElButton: xe },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
  }
}, M2 = { class: "el-upload__tip" };
function I2(o, t, e, n, a, i) {
  const l = u("el-button"), r = u("el-upload"), s = u("el-form-item");
  return g(), y(s, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(r, {
        key: 0,
        action: e.options.uploadUrl,
        name: e.options.uploadName,
        multiple: e.options.multiple,
        "show-file-list": e.options.showFileList,
        limit: e.options.limit,
        "file-list": e.options.defaultValue,
        "onUpdate:file-list": t[0] || (t[0] = (d) => e.options.defaultValue = d),
        disabled: e.options.disabled
      }, ro({
        default: f(() => [
          p(l, { type: "primary" }, {
            default: f(() => [
              j(te(e.options.buttonText), 1)
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        e.options.showToolTip ? {
          name: "tip",
          fn: f(() => [
            $("div", M2, te(e.options.tip), 1)
          ])
        } : void 0
      ]), 1032, ["action", "name", "multiple", "show-file-list", "limit", "file-list", "disabled"]))
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const A2 = /* @__PURE__ */ w(P2, [["render", I2]]), R2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A2
}, Symbol.toStringTag, { value: "Module" })), z2 = {
  name: "uploadImageBuilder",
  components: { ElFormItem: I, ElUpload: so },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup() {
    const o = B(""), t = B(!1);
    return {
      dialogImageUrl: o,
      dialogVisible: t,
      handlePreview: (a) => {
        o.value = a.url, t.value = !0;
      },
      beforeRemove: () => (me.warning("\u8BF7\u5728\u5B57\u6BB5\u8BBE\u7F6E\u7684\u9ED8\u8BA4\u503C\u79FB\u9664\uFF01"), !1)
    };
  }
}, F2 = { class: "el-upload__tip" }, B2 = ["src"];
function L2(o, t, e, n, a, i) {
  const l = Jo, r = u("el-icon"), s = u("el-upload"), d = u("el-dialog"), m = u("el-form-item");
  return g(), y(m, {
    prop: e.path,
    label: e.options.label,
    rules: e.options.rules
  }, {
    default: f(() => [
      e.options.hidden ? G("", !0) : (g(), y(s, {
        key: 0,
        "list-type": "picture-card",
        action: e.options.uploadUrl,
        name: e.options.uploadName,
        multiple: e.options.multiple,
        limit: e.options.limit,
        "file-list": e.options.defaultValue,
        "onUpdate:file-list": t[0] || (t[0] = (c) => e.options.defaultValue = c),
        disabled: e.options.disabled,
        "on-preview": n.handlePreview,
        "before-remove": n.beforeRemove
      }, ro({
        default: f(() => [
          p(r, null, {
            default: f(() => [
              p(l)
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        e.options.showToolTip ? {
          name: "tip",
          fn: f(() => [
            $("div", F2, te(e.options.tip), 1)
          ])
        } : void 0
      ]), 1032, ["action", "name", "multiple", "limit", "file-list", "disabled", "on-preview", "before-remove"])),
      p(d, {
        modelValue: n.dialogVisible,
        "onUpdate:modelValue": t[1] || (t[1] = (c) => n.dialogVisible = c)
      }, {
        default: f(() => [
          $("img", {
            "w-full": "",
            src: n.dialogImageUrl,
            alt: "Preview Image"
          }, null, 8, B2)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  }, 8, ["prop", "label", "rules"]);
}
const U2 = /* @__PURE__ */ w(z2, [["render", L2]]), N2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U2
}, Symbol.toStringTag, { value: "Module" })), dl = {};
Object.values(/* @__PURE__ */ Object.assign({ "./components/area-builder.vue": Dm, "./components/card-builder.vue": Bm, "./components/cascade-builder.vue": Hm, "./components/checkbox-builder.vue": Gm, "./components/color-picker-builder.vue": Zm, "./components/date-picker-builder.vue": op, "./components/date-range-picker-builder.vue": ap, "./components/divider-builder.vue": up, "./components/html-builder.vue": _p, "./components/input-builder.vue": vp, "./components/label-builder.vue": Sp, "./components/multi-select-builder.vue": Tp, "./components/number-builder.vue": Ep, "./components/object-builder.vue": Im, "./components/radio-builder.vue": Ip, "./components/rate-builder.vue": Fp, "./components/rich-editor-builder.vue": Hp, "./components/select-builder.vue": Gp, "./components/signature-builder.vue": Zp, "./components/slider-builder.vue": o2, "./components/switch-builder.vue": a2, "./components/table-builder.vue": u2, "./components/tabs-builder.vue": y2, "./components/textarea-builder.vue": k2, "./components/time-picker-builder.vue": $2, "./components/time-range-picker-builder.vue": D2, "./components/upload-file-builder.vue": R2, "./components/upload-image-builder.vue": N2 })).forEach(
  ({ default: o }) => dl[o.name] = o
);
const H2 = {
  name: "formBuilderItem",
  components: { ...dl, ElIcon: Et },
  props: {
    path: String,
    component: String,
    uuid: String,
    defaultValue: [String, Number, Boolean, Date, Object, Array],
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(o) {
    const t = z("state"), e = z("setSelected"), n = z("copyFormItem"), a = z("removeFormItem");
    return {
      select: () => e(o.uuid),
      copy: () => n(o.uuid),
      remove: () => a(o.uuid),
      isSelected: ve(() => t.selected.uuid === o.uuid)
    };
  }
}, W2 = { class: "form-item" }, q2 = { class: "operator" }, Y2 = { class: "info" };
function G2(o, t, e, n, a, i) {
  const l = $m, r = u("el-icon"), s = ut;
  return g(), D("div", W2, [
    $("div", {
      class: Kt(["form-item-box", { "is-selected": n.isSelected }]),
      onClick: t[2] || (t[2] = bo((...d) => n.select && n.select(...d), ["stop"]))
    }, [
      $("div", q2, [
        $("div", {
          class: "copy",
          onClick: t[0] || (t[0] = bo((...d) => n.copy && n.copy(...d), ["stop"]))
        }, [
          p(r, null, {
            default: f(() => [
              p(l)
            ]),
            _: 1
          })
        ]),
        $("div", {
          class: "remove",
          onClick: t[1] || (t[1] = bo((...d) => n.remove && n.remove(...d), ["stop"]))
        }, [
          p(r, null, {
            default: f(() => [
              p(s)
            ]),
            _: 1
          })
        ])
      ]),
      $("div", Y2, te(e.options.key), 1),
      (g(), y(Ho(e.component + "-builder"), {
        uuid: e.uuid,
        items: e.items,
        options: e.options,
        path: e.path
      }, null, 8, ["uuid", "items", "options", "path"]))
    ], 2)
  ]);
}
const ul = /* @__PURE__ */ w(H2, [["render", G2]]), X2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ul
}, Symbol.toStringTag, { value: "Module" })), K2 = {
  name: "formBuilder",
  components: { ElEmpty: kl, ElForm: uo, FormBuilderItem: ul },
  props: {},
  setup() {
    const o = z("state");
    return {
      formDesign: ve(() => o.formDesign)
    };
  }
};
function J2(o, t, e, n, a, i) {
  const l = u("el-empty"), r = u("form-builder-item"), s = u("el-form");
  return g(), D(U, null, [
    n.formDesign.items.length === 0 ? (g(), y(l, {
      key: 0,
      class: "empty",
      description: "\u4ECE\u5DE6\u4FA7\u9009\u62E9\u63A7\u4EF6\u6DFB\u52A0"
    })) : G("", !0),
    p(s, {
      class: "form-builder",
      "label-width": n.formDesign.options.labelWidth,
      "label-position": n.formDesign.options.labelPosition,
      "hide-required-asterisk": n.formDesign.options.hideRequiredAsterisk,
      "status-icon": n.formDesign.options.statusIcon,
      inline: n.formDesign.options.inline,
      size: n.formDesign.options.size
    }, {
      default: f(() => [
        p(r, {
          class: "root",
          component: n.formDesign.component,
          uuid: n.formDesign.uuid,
          items: n.formDesign.items,
          options: n.formDesign.options,
          path: "root"
        }, null, 8, ["component", "uuid", "items", "options"])
      ]),
      _: 1
    }, 8, ["label-width", "label-position", "hide-required-asterisk", "status-icon", "inline", "size"])
  ], 64);
}
const Z2 = /* @__PURE__ */ w(K2, [["render", J2]]), Q2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, ef = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
}, null, -1), tf = [
  ef
];
function of(o, t) {
  return g(), D("svg", Q2, tf);
}
const nf = { name: "ant-design-code-outlined", render: of }, rf = {
  name: "activeColorOption",
  components: { ElColorPicker: it },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function lf(o, t, e, n, a, i) {
  const l = u("el-color-picker");
  return g(), y(l, {
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const af = /* @__PURE__ */ w(rf, [["render", lf]]), sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: af
}, Symbol.toStringTag, { value: "Module" })), df = {
  name: "activeTextOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function uf(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const cf = /* @__PURE__ */ w(df, [["render", uf]]), mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cf
}, Symbol.toStringTag, { value: "Module" })), pf = {
  name: "allowHalfOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function ff(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const _f = /* @__PURE__ */ w(pf, [["render", ff]]), hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _f
}, Symbol.toStringTag, { value: "Module" })), gf = {
  name: "backgroundColorOption",
  components: { ElColorPicker: it },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function bf(o, t, e, n, a, i) {
  const l = u("el-color-picker");
  return g(), y(l, {
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const vf = /* @__PURE__ */ w(gf, [["render", bf]]), yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vf
}, Symbol.toStringTag, { value: "Module" })), xf = {
  name: "buttonTextOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function wf(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Sf = /* @__PURE__ */ w(xf, [["render", wf]]), kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sf
}, Symbol.toStringTag, { value: "Module" })), Of = {
  name: "clearableOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function Vf(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Tf = /* @__PURE__ */ w(Of, [["render", Vf]]), $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tf
}, Symbol.toStringTag, { value: "Module" })), Cf = {
  name: "collapseTagsOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function jf(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Ef = /* @__PURE__ */ w(Cf, [["render", jf]]), Df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ef
}, Symbol.toStringTag, { value: "Module" })), Pf = {
  name: "contentOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function Mf(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const If = /* @__PURE__ */ w(Pf, [["render", Mf]]), Af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: If
}, Symbol.toStringTag, { value: "Module" })), Rf = {
  name: "defaultValueOption",
  components: { FormRenderItem: an },
  props: {
    modelValue: [String, Number, Boolean, Date, Object, Array]
  },
  setup() {
    const o = z("state");
    return {
      component: ve(() => o.selected.component),
      items: ve(() => o.selected.items),
      options: ve(
        () => Object.assign({}, o.selected.options, {
          label: "",
          clearable: !0,
          disabled: !1,
          width: "100%"
        })
      )
    };
  }
};
function zf(o, t, e, n, a, i) {
  const l = u("form-render-item");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r)),
    component: n.component,
    items: n.items,
    options: n.options
  }, null, 8, ["model-value", "component", "items", "options"]);
}
const Ff = /* @__PURE__ */ w(Rf, [["render", zf]]), Bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ff
}, Symbol.toStringTag, { value: "Module" })), Lf = {
  name: "disabledOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function Uf(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Nf = /* @__PURE__ */ w(Lf, [["render", Uf]]), Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nf
}, Symbol.toStringTag, { value: "Module" })), Wf = {
  name: "expandTriggerOption",
  components: { ElRadioGroup: Fe, ElRadioButton: st },
  props: {
    modelValue: String
  },
  setup() {
  }
}, qf = /* @__PURE__ */ j("\u70B9\u51FB"), Yf = /* @__PURE__ */ j("\u60AC\u6D6E");
function Gf(o, t, e, n, a, i) {
  const l = u("el-radio-button"), r = u("el-radio-group");
  return g(), y(r, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s))
  }, {
    default: f(() => [
      p(l, { label: "click" }, {
        default: f(() => [
          qf
        ]),
        _: 1
      }),
      p(l, { label: "hover" }, {
        default: f(() => [
          Yf
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const Xf = /* @__PURE__ */ w(Wf, [["render", Gf]]), Kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xf
}, Symbol.toStringTag, { value: "Module" })), Jf = {
  name: "fileSuffixOption",
  components: { ElSelect: Ke },
  props: {
    modelValue: Array
  },
  setup() {
  }
};
function Zf(o, t, e, n, a, i) {
  const l = u("el-option"), r = u("el-select");
  return g(), y(r, {
    multiple: "",
    clearable: "",
    filterable: "",
    "allow-create": "",
    "default-first-option": "",
    placeholder: "\u8BF7\u9009\u62E9\u6587\u4EF6\u7C7B\u578B",
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
    style: { width: "88%" }
  }, {
    default: f(() => [
      p(l, {
        label: "doc",
        value: "doc"
      }),
      p(l, {
        label: "docx",
        value: "docx"
      }),
      p(l, {
        label: "xls",
        value: "xls"
      }),
      p(l, {
        label: "xlsx",
        value: "xlsx"
      }),
      p(l, {
        label: "rar",
        value: "rar"
      }),
      p(l, {
        label: "zip",
        value: "zip"
      })
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const Qf = /* @__PURE__ */ w(Jf, [["render", Zf]]), e_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qf
}, Symbol.toStringTag, { value: "Module" })), t_ = {
  name: "filterableOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function o_(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const n_ = /* @__PURE__ */ w(t_, [["render", o_]]), r_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n_
}, Symbol.toStringTag, { value: "Module" })), l_ = {
  name: "formatOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function a_(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const i_ = /* @__PURE__ */ w(l_, [["render", a_]]), s_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: i_
}, Symbol.toStringTag, { value: "Module" })), d_ = {
  name: "gutterOption",
  components: { ElSlider: Be },
  props: {
    modelValue: Number
  },
  setup() {
  }
};
function u_(o, t, e, n, a, i) {
  const l = u("el-slider");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.modelValue = r),
    onInput: t[1] || (t[1] = (r) => o.$emit("update:modelValue", r)),
    min: 0,
    max: 300
  }, null, 8, ["model-value"]);
}
const c_ = /* @__PURE__ */ w(d_, [["render", u_]]), m_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: c_
}, Symbol.toStringTag, { value: "Module" })), p_ = {
  name: "heightOption",
  components: { ElSlider: Be },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function f_(o, t, e, n, a, i) {
  const l = u("el-slider");
  return g(), y(l, {
    "model-value": parseInt(e.modelValue),
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.modelValue = r + "px"),
    onInput: t[1] || (t[1] = (r) => o.$emit("update:modelValue", r + "px")),
    min: 0,
    max: 1e3,
    "format-tooltip": (r) => r + "px"
  }, null, 8, ["model-value", "format-tooltip"]);
}
const __ = /* @__PURE__ */ w(p_, [["render", f_]]), h_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __
}, Symbol.toStringTag, { value: "Module" })), g_ = {
  name: "hiddenOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function b_(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const v_ = /* @__PURE__ */ w(g_, [["render", b_]]), y_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v_
}, Symbol.toStringTag, { value: "Module" })), x_ = {
  name: "hideRequiredAsteriskOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function w_(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const S_ = /* @__PURE__ */ w(x_, [["render", w_]]), k_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: S_
}, Symbol.toStringTag, { value: "Module" })), O_ = {
  name: "imageSuffixOption",
  components: { ElSelect: Ke },
  props: {
    modelValue: Array
  },
  setup() {
  }
};
function V_(o, t, e, n, a, i) {
  const l = u("el-option"), r = u("el-select");
  return g(), y(r, {
    multiple: "",
    clearable: "",
    filterable: "",
    "allow-create": "",
    "default-first-option": "",
    placeholder: "\u8BF7\u9009\u62E9\u56FE\u7247\u7C7B\u578B",
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (s) => o.$emit("update:modelValue", s)),
    style: { width: "88%" }
  }, {
    default: f(() => [
      p(l, {
        label: "jpg",
        value: "jpg"
      }),
      p(l, {
        label: "jpeg",
        value: "jpeg"
      }),
      p(l, {
        label: "png",
        value: "png"
      }),
      p(l, {
        label: "gif",
        value: "gif"
      })
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const T_ = /* @__PURE__ */ w(O_, [["render", V_]]), $_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T_
}, Symbol.toStringTag, { value: "Module" })), C_ = {
  name: "inactiveColorOption",
  components: { ElColorPicker: it },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function j_(o, t, e, n, a, i) {
  const l = u("el-color-picker");
  return g(), y(l, {
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const E_ = /* @__PURE__ */ w(C_, [["render", j_]]), D_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: E_
}, Symbol.toStringTag, { value: "Module" })), P_ = {
  name: "inactiveTextOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function M_(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const I_ = /* @__PURE__ */ w(P_, [["render", M_]]), A_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I_
}, Symbol.toStringTag, { value: "Module" })), R_ = {
  name: "inlineOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function z_(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const F_ = /* @__PURE__ */ w(R_, [["render", z_]]), B_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: F_
}, Symbol.toStringTag, { value: "Module" })), L_ = {
  name: "keyOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function U_(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const N_ = /* @__PURE__ */ w(L_, [["render", U_]]), H_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: N_
}, Symbol.toStringTag, { value: "Module" })), W_ = {
  name: "labelPositionOption",
  components: { ElRadioGroup: Fe, ElRadioButton: st },
  props: {
    modelValue: String
  },
  setup() {
  }
}, q_ = /* @__PURE__ */ j("\u5DE6"), Y_ = /* @__PURE__ */ j("\u53F3"), G_ = /* @__PURE__ */ j("\u9876\u90E8");
function X_(o, t, e, n, a, i) {
  const l = u("el-radio-button"), r = u("el-radio-group");
  return g(), y(r, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s))
  }, {
    default: f(() => [
      p(l, { label: "left" }, {
        default: f(() => [
          q_
        ]),
        _: 1
      }),
      p(l, { label: "right" }, {
        default: f(() => [
          Y_
        ]),
        _: 1
      }),
      p(l, { label: "top" }, {
        default: f(() => [
          G_
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const K_ = /* @__PURE__ */ w(W_, [["render", X_]]), J_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K_
}, Symbol.toStringTag, { value: "Module" })), Z_ = {
  name: "labelWidthOption",
  components: { ElSlider: Be },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function Q_(o, t, e, n, a, i) {
  const l = u("el-slider");
  return g(), y(l, {
    "model-value": parseInt(e.modelValue),
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.modelValue = r + "px"),
    onInput: t[1] || (t[1] = (r) => o.$emit("update:modelValue", r + "px")),
    min: 0,
    max: 300,
    "format-tooltip": (r) => r + "px"
  }, null, 8, ["model-value", "format-tooltip"]);
}
const e3 = /* @__PURE__ */ w(Z_, [["render", Q_]]), t3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: e3
}, Symbol.toStringTag, { value: "Module" })), o3 = {
  name: "labelOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function n3(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const r3 = /* @__PURE__ */ w(o3, [["render", n3]]), l3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: r3
}, Symbol.toStringTag, { value: "Module" })), a3 = {
  name: "limitOption",
  components: { ElInputNumber: ze },
  props: {
    modelValue: Number
  },
  setup() {
  }
};
function i3(o, t, e, n, a, i) {
  const l = u("el-input-number");
  return g(), y(l, {
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const s3 = /* @__PURE__ */ w(a3, [["render", i3]]), d3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: s3
}, Symbol.toStringTag, { value: "Module" })), u3 = {
  name: "lineHeightOption",
  components: { ElSlider: Be },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function c3(o, t, e, n, a, i) {
  const l = u("el-slider");
  return g(), y(l, {
    "model-value": parseInt(e.modelValue),
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.modelValue = r + "px"),
    onInput: t[1] || (t[1] = (r) => o.$emit("update:modelValue", r + "px")),
    min: 12,
    max: 200,
    "format-tooltip": (r) => r + "px"
  }, null, 8, ["model-value", "format-tooltip"]);
}
const m3 = /* @__PURE__ */ w(u3, [["render", c3]]), p3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: m3
}, Symbol.toStringTag, { value: "Module" })), f3 = {
  name: "maxOption",
  components: { ElInputNumber: ze },
  props: {
    modelValue: Number
  },
  setup() {
  }
};
function _3(o, t, e, n, a, i) {
  const l = u("el-input-number");
  return g(), y(l, {
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const h3 = /* @__PURE__ */ w(f3, [["render", _3]]), g3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h3
}, Symbol.toStringTag, { value: "Module" })), b3 = {
  name: "maxlengthOption",
  components: { ElInputNumber: ze },
  props: {
    modelValue: Number
  },
  setup() {
  }
};
function v3(o, t, e, n, a, i) {
  const l = u("el-input-number");
  return g(), y(l, {
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r || void 0))
  }, null, 8, ["model-value"]);
}
const y3 = /* @__PURE__ */ w(b3, [["render", v3]]), x3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y3
}, Symbol.toStringTag, { value: "Module" })), w3 = {
  name: "minOption",
  components: { ElInputNumber: ze },
  props: {
    modelValue: Number
  },
  setup() {
  }
};
function S3(o, t, e, n, a, i) {
  const l = u("el-input-number");
  return g(), y(l, {
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const k3 = /* @__PURE__ */ w(w3, [["render", S3]]), O3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: k3
}, Symbol.toStringTag, { value: "Module" })), V3 = {
  name: "multipleLimitOption",
  components: { ElInputNumber: ze },
  props: {
    modelValue: Number
  },
  setup() {
  }
};
function T3(o, t, e, n, a, i) {
  const l = u("el-input-number");
  return g(), y(l, {
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const $3 = /* @__PURE__ */ w(V3, [["render", T3]]), C3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $3
}, Symbol.toStringTag, { value: "Module" })), j3 = {
  name: "multipleOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function E3(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const D3 = /* @__PURE__ */ w(j3, [["render", E3]]), P3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D3
}, Symbol.toStringTag, { value: "Module" })), M3 = {
  name: "noDataTextOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function I3(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const A3 = /* @__PURE__ */ w(M3, [["render", I3]]), R3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A3
}, Symbol.toStringTag, { value: "Module" })), z3 = {
  name: "noMatchTextOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function F3(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const B3 = /* @__PURE__ */ w(z3, [["render", F3]]), L3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B3
}, Symbol.toStringTag, { value: "Module" })), U3 = {
  name: "optionsOption",
  components: { ElRow: co, ElCol: mo, ElButton: xe, ElDialog: Le, ElInput: W, ElIcon: Et, CodeEditor: dt },
  props: {
    modelValue: Object
  },
  setup(o, { emit: t }) {
    const e = ie({
      type: "static",
      remote: "",
      items: []
    }), n = B(""), a = B(!1), i = z("state"), l = () => {
      t("update:modelValue", {
        type: e.type,
        remote: e.remote,
        items: e.items
      });
    }, r = (_, b, v) => {
      e.items[_][b] = v, l();
    }, s = () => {
      const _ = String(e.items.length + 1);
      e.items.push({
        label: "\u9009\u9879" + _,
        value: _
      }), l();
    }, d = (_) => {
      e.items.splice(_, 1), l();
    }, m = () => {
      a.value = !0, n.value = JSON.stringify(e.items, null, "	");
    }, c = () => {
      try {
        e.items = JSON.parse(n.value);
      } catch {
        return me.error("\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E");
      }
      a.value = !1, l();
    }, h = () => {
      e.type = o.modelValue.type, e.remote = o.modelValue.remote, e.items = ue(o.modelValue.items);
    };
    return Oe(h), ye(() => o.modelValue, h), {
      data: e,
      code: n,
      codeDialog: a,
      state: i,
      update: r,
      emitChange: l,
      addOption: s,
      removeOption: d,
      editOptions: m,
      setOptions: c
    };
  }
}, N3 = { style: { width: "100%" } }, H3 = /* @__PURE__ */ j("\u589E\u52A0\u9009\u9879"), W3 = /* @__PURE__ */ j("\u7F16\u8F91\u9009\u9879"), q3 = { class: "form-design-code-editor" }, Y3 = /* @__PURE__ */ j("\u53D6\u6D88"), G3 = /* @__PURE__ */ j("\u786E\u5B9A");
function X3(o, t, e, n, a, i) {
  const l = u("el-input"), r = u("el-col"), s = ut, d = u("el-icon"), m = u("el-row"), c = u("el-button"), h = u("code-editor"), _ = u("el-dialog"), b = u("el-tab-pane"), v = u("el-option"), x = u("el-select"), S = u("el-tabs");
  return g(), D("div", N3, [
    p(S, {
      modelValue: n.data.type,
      "onUpdate:modelValue": t[4] || (t[4] = (k) => n.data.type = k),
      onTabChange: n.emitChange
    }, {
      default: f(() => [
        p(b, {
          label: "\u9759\u6001\u6570\u636E",
          name: "static"
        }, {
          default: f(() => [
            (g(!0), D(U, null, Q(n.data.items, (k, R) => (g(), y(m, {
              class: "option-row",
              key: R,
              gutter: 5
            }, {
              default: f(() => [
                p(r, { span: 11 }, {
                  default: f(() => [
                    p(l, {
                      "model-value": k.label,
                      onInput: (q) => n.update(R, "label", q),
                      placeholder: "\u540D\u79F0"
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 2
                }, 1024),
                p(r, { span: 11 }, {
                  default: f(() => [
                    p(l, {
                      "model-value": k.value,
                      onInput: (q) => n.update(R, "value", q),
                      placeholder: "\u503C"
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 2
                }, 1024),
                p(r, {
                  span: 2,
                  class: "btn-del"
                }, {
                  default: f(() => [
                    p(d, {
                      class: "el-icon-delete",
                      onClick: (q) => n.removeOption(R)
                    }, {
                      default: f(() => [
                        p(s)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024))), 128)),
            p(c, {
              link: "",
              type: "primary",
              onClick: n.addOption
            }, {
              default: f(() => [
                H3
              ]),
              _: 1
            }, 8, ["onClick"]),
            p(c, {
              link: "",
              type: "primary",
              onClick: n.editOptions
            }, {
              default: f(() => [
                W3
              ]),
              _: 1
            }, 8, ["onClick"]),
            p(_, {
              title: "\u7F16\u8F91\u9009\u9879",
              modelValue: n.codeDialog,
              "onUpdate:modelValue": t[2] || (t[2] = (k) => n.codeDialog = k),
              width: "750px"
            }, {
              footer: f(() => [
                $("div", null, [
                  p(c, {
                    onClick: t[1] || (t[1] = (k) => n.codeDialog = !1)
                  }, {
                    default: f(() => [
                      Y3
                    ]),
                    _: 1
                  }),
                  p(c, {
                    type: "primary",
                    onClick: n.setOptions
                  }, {
                    default: f(() => [
                      G3
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ]),
              default: f(() => [
                $("div", q3, [
                  p(h, {
                    modelValue: n.code,
                    "onUpdate:modelValue": t[0] || (t[0] = (k) => n.code = k),
                    lang: "json"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p(b, {
          label: "\u6570\u636E\u6E90",
          name: "remote"
        }, {
          default: f(() => [
            p(x, {
              clearable: "",
              placeholder: "\u8BF7\u9009\u62E9\u6570\u636E\u6E90",
              modelValue: n.data.remote,
              "onUpdate:modelValue": t[3] || (t[3] = (k) => n.data.remote = k),
              onChange: n.emitChange,
              style: { width: "88%", "margin-bottom": "5px" }
            }, {
              default: f(() => [
                (g(!0), D(U, null, Q(n.state.formDesign.options.remotes, (k, R) => (g(), y(v, {
                  key: R,
                  label: k.title,
                  value: R
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "onChange"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "onTabChange"])
  ]);
}
const K3 = /* @__PURE__ */ w(U3, [["render", X3]]), J3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K3
}, Symbol.toStringTag, { value: "Module" })), Z3 = {
  name: "paddingOption",
  components: { ElRow: co, ElCol: mo, ElInputNumber: ze },
  props: {
    modelValue: String
  },
  setup(o, { emit: t }) {
    const e = ie({
      top: 0,
      right: 0,
      down: 0,
      left: 0
    }), n = () => {
      t("update:modelValue", `${e.top || 0}px ${e.right || 0}px ${e.down || 0}px ${e.left || 0}px`);
    }, a = () => {
      const [i, l, r, s] = o.modelValue.split(" ");
      e.top = parseFloat(i), e.right = parseFloat(l), e.down = parseFloat(r), e.left = parseFloat(s);
    };
    return Oe(a), ye(() => o.modelValue, a), { data: e, emitChange: n };
  }
}, Q3 = /* @__PURE__ */ j(" \u4E0A\uFF1A"), eh = /* @__PURE__ */ j(" \u53F3\uFF1A"), th = /* @__PURE__ */ j(" \u4E0B\uFF1A"), oh = /* @__PURE__ */ j(" \u5DE6\uFF1A");
function nh(o, t, e, n, a, i) {
  const l = u("el-input-number"), r = u("el-col"), s = u("el-row");
  return g(), D(U, null, [
    p(s, { class: "option-row" }, {
      default: f(() => [
        p(r, { span: 24 }, {
          default: f(() => [
            Q3,
            p(l, {
              modelValue: n.data.top,
              "onUpdate:modelValue": t[0] || (t[0] = (d) => n.data.top = d),
              onInput: n.emitChange
            }, null, 8, ["modelValue", "onInput"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    p(s, { class: "option-row" }, {
      default: f(() => [
        p(r, { span: 24 }, {
          default: f(() => [
            eh,
            p(l, {
              modelValue: n.data.right,
              "onUpdate:modelValue": t[1] || (t[1] = (d) => n.data.right = d),
              onInput: n.emitChange
            }, null, 8, ["modelValue", "onInput"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    p(s, { class: "option-row" }, {
      default: f(() => [
        p(r, { span: 24 }, {
          default: f(() => [
            th,
            p(l, {
              modelValue: n.data.down,
              "onUpdate:modelValue": t[2] || (t[2] = (d) => n.data.down = d),
              onInput: n.emitChange
            }, null, 8, ["modelValue", "onInput"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    p(s, { class: "option-row" }, {
      default: f(() => [
        p(r, { span: 24 }, {
          default: f(() => [
            oh,
            p(l, {
              modelValue: n.data.left,
              "onUpdate:modelValue": t[3] || (t[3] = (d) => n.data.left = d),
              onInput: n.emitChange
            }, null, 8, ["modelValue", "onInput"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
const rh = /* @__PURE__ */ w(Z3, [["render", nh]]), lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rh
}, Symbol.toStringTag, { value: "Module" })), ah = {
  name: "penColorOption",
  components: { ElColorPicker: it },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function ih(o, t, e, n, a, i) {
  const l = u("el-color-picker");
  return g(), y(l, {
    "model-value": e.modelValue,
    onChange: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const sh = /* @__PURE__ */ w(ah, [["render", ih]]), dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sh
}, Symbol.toStringTag, { value: "Module" })), uh = {
  name: "placeholderOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function ch(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const mh = /* @__PURE__ */ w(uh, [["render", ch]]), ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mh
}, Symbol.toStringTag, { value: "Module" })), fh = {
  name: "prefixIconOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function _h(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const hh = /* @__PURE__ */ w(fh, [["render", _h]]), gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hh
}, Symbol.toStringTag, { value: "Module" })), bh = {
  name: "remotesOption",
  components: { ElDialog: Le, CodeEditor: dt },
  props: {
    modelValue: Object
  },
  setup(o, { emit: t }) {
    const e = ie({
      remotes: {},
      remoteTabs: {},
      remoteCollapses: {},
      remoteResults: {},
      loading: !1
    }), n = B(null), a = B(""), i = B(!1);
    return {
      form: e,
      formRef: n,
      remoteTabsValue: a,
      remoteDialog: i,
      showRemote: () => {
        if (i.value = !0, e.remotes = ue(o.modelValue), e.remoteTabs = {}, e.remoteCollapses = {}, e.remoteResults = {}, e.remotes && !cr(e.remotes)) {
          const h = Object.keys(e.remotes);
          a.value = h[0], h.forEach((_) => {
            e.remoteTabs[_] = "headers", e.remoteCollapses[_] = ["request", "response", "error"], e.remoteResults[_] = "";
          });
        }
      },
      saveRemote: () => {
        n.value.validate((h, _) => {
          if (h)
            t("update:modelValue", e.remotes), i.value = !1;
          else {
            const b = Object.keys(_)[0];
            a.value = b.split(".")[1];
          }
        });
      },
      editRemote: (h, _) => {
        if (_ === "add") {
          const b = "remote_" + Vt(8);
          a.value = b, e.remotes[b] = {
            title: "",
            url: "",
            method: "get",
            headers: [],
            params: [],
            data: [],
            requestHandler: "return config;",
            responseHandler: "return response.data;",
            errorHandler: "return Promise.reject(error);"
          }, e.remoteTabs[b] = "headers", e.remoteCollapses[b] = ["request", "response", "error"], e.remoteResults[b] = "";
        } else if (_ === "remove") {
          if (a.value === h) {
            const b = Object.keys(e.remotes), v = b.findIndex((S) => S === h), x = b[v + 1] || b[v - 1];
            x && (a.value = x);
          }
          delete e.remotes[h], delete e.remoteTabs[h], delete e.remoteCollapses[h], delete e.remoteResults[h];
        }
      },
      addKeyValue: (h, _) => {
        e.remotes[h][_].push({ key: "", value: "" });
      },
      removeKeyValue: (h, _, b) => {
        e.remotes[h][_].splice(b, 1);
      },
      testRequest: () => {
        n.value.validateField("remotes." + a.value + ".url").then(() => {
          e.loading = !0, dr(e.remotes[a.value]).then((h) => {
            e.remoteResults[a.value] = JSON.stringify(h, null, "	"), e.loading = !1, me.success("\u8BF7\u6C42\u6210\u529F");
          }).catch((h) => {
            e.remoteResults[a.value] = "", e.loading = !1, me.error(h.message);
          });
        });
      }
    };
  }
}, vh = /* @__PURE__ */ j("\u8BBE\u7F6E"), yh = /* @__PURE__ */ j(" \u8BBE\u7F6E\u6570\u636E\u6E90 "), xh = { style: { float: "right" } }, wh = /* @__PURE__ */ j("\u4FDD\u5B58"), Sh = /* @__PURE__ */ j("\u53D6\u6D88"), kh = /* @__PURE__ */ j("\u6D4B\u8BD5\u8BF7\u6C42"), Oh = /* @__PURE__ */ j("\u589E\u52A0\u5934\u90E8"), Vh = /* @__PURE__ */ j("\u589E\u52A0\u53C2\u6570"), Th = /* @__PURE__ */ j("\u589E\u52A0\u6570\u636E"), $h = { class: "form-design-code-editor" }, Ch = /* @__PURE__ */ $("div", { class: "code-editor-tip" }, "\u54CD\u5E94\u6570\u636E", -1), jh = { class: "form-design-code-editor" }, Eh = /* @__PURE__ */ $("div", { class: "code-editor-tip" }, "(config) => {", -1), Dh = /* @__PURE__ */ $("div", { class: "code-editor-tip" }, "}", -1), Ph = { class: "form-design-code-editor" }, Mh = /* @__PURE__ */ $("div", { class: "code-editor-tip" }, "(response) => {", -1), Ih = /* @__PURE__ */ $("div", { class: "code-editor-tip" }, "}", -1), Ah = { class: "form-design-code-editor" }, Rh = /* @__PURE__ */ $("div", { class: "code-editor-tip" }, "(error) => {", -1), zh = /* @__PURE__ */ $("div", { class: "code-editor-tip" }, "}", -1);
function Fh(o, t, e, n, a, i) {
  const l = u("el-button"), r = u("el-input"), s = u("el-form-item"), d = u("el-option"), m = u("el-select"), c = u("el-col"), h = ut, _ = u("el-icon"), b = u("el-row"), v = u("el-tab-pane"), x = u("el-tabs"), S = u("code-editor"), k = u("el-collapse-item"), R = u("el-collapse"), q = u("el-form"), he = u("el-dialog"), C = vl("loading");
  return g(), D(U, null, [
    p(l, {
      type: "primary",
      plain: "",
      onClick: n.showRemote,
      style: { width: "88%" }
    }, {
      default: f(() => [
        vh
      ]),
      _: 1
    }, 8, ["onClick"]),
    p(he, {
      title: "\u6570\u636E\u6E90",
      modelValue: n.remoteDialog,
      "onUpdate:modelValue": t[2] || (t[2] = (T) => n.remoteDialog = T),
      width: "750px",
      "show-close": !1
    }, {
      header: f(() => [
        yh,
        $("div", xh, [
          p(l, {
            type: "primary",
            onClick: n.saveRemote
          }, {
            default: f(() => [
              wh
            ]),
            _: 1
          }, 8, ["onClick"]),
          p(l, {
            onClick: t[0] || (t[0] = (T) => n.remoteDialog = !1)
          }, {
            default: f(() => [
              Sh
            ]),
            _: 1
          })
        ])
      ]),
      default: f(() => [
        p(q, {
          ref: "formRef",
          model: n.form,
          "label-width": "0px"
        }, {
          default: f(() => [
            p(x, {
              modelValue: n.remoteTabsValue,
              "onUpdate:modelValue": t[1] || (t[1] = (T) => n.remoteTabsValue = T),
              type: "card",
              editable: "",
              onEdit: n.editRemote
            }, {
              default: f(() => [
                (g(!0), D(U, null, Q(n.form.remotes, (T, E) => (g(), y(v, {
                  key: E,
                  label: T.title || "\u672A\u547D\u540D",
                  name: E
                }, {
                  default: f(() => [
                    p(s, {
                      prop: "remotes." + E + ".title",
                      rules: {
                        required: !0,
                        message: "\u8BF7\u8F93\u5165\u540D\u79F0",
                        trigger: "blur"
                      },
                      style: { "margin-bottom": "18px" }
                    }, {
                      default: f(() => [
                        p(r, {
                          modelValue: T.title,
                          "onUpdate:modelValue": (V) => T.title = V,
                          placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["prop"]),
                    p(s, {
                      prop: "remotes." + E + ".url",
                      rules: {
                        required: !0,
                        message: "\u8BF7\u8F93\u5165\u5730\u5740",
                        trigger: "blur"
                      },
                      style: { "margin-bottom": "18px" }
                    }, {
                      default: f(() => [
                        p(r, {
                          modelValue: T.url,
                          "onUpdate:modelValue": (V) => T.url = V,
                          placeholder: "\u8BF7\u8F93\u5165\u5730\u5740"
                        }, {
                          prepend: f(() => [
                            p(m, {
                              modelValue: T.method,
                              "onUpdate:modelValue": (V) => T.method = V,
                              style: { width: "100px" }
                            }, {
                              default: f(() => [
                                p(d, {
                                  label: "GET",
                                  value: "get"
                                }),
                                p(d, {
                                  label: "POST",
                                  value: "post"
                                }),
                                p(d, {
                                  label: "PUT",
                                  value: "put"
                                }),
                                p(d, {
                                  label: "DELETE",
                                  value: "delete"
                                })
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          append: f(() => [
                            p(l, {
                              onClick: n.testRequest,
                              loading: n.form.loading
                            }, {
                              default: f(() => [
                                kh
                              ]),
                              _: 1
                            }, 8, ["onClick", "loading"])
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["prop"]),
                    p(x, {
                      modelValue: n.form.remoteTabs[E],
                      "onUpdate:modelValue": (V) => n.form.remoteTabs[E] = V
                    }, {
                      default: f(() => [
                        p(v, {
                          label: "\u8BF7\u6C42\u5934\u90E8Headers" + (T.headers.length ? "\uFF08" + T.headers.length + "\uFF09" : ""),
                          name: "headers"
                        }, {
                          default: f(() => [
                            (g(!0), D(U, null, Q(T.headers, (V, re) => (g(), y(b, {
                              class: "option-row",
                              key: re,
                              gutter: 5
                            }, {
                              default: f(() => [
                                p(c, { span: 11 }, {
                                  default: f(() => [
                                    p(r, {
                                      modelValue: V.key,
                                      "onUpdate:modelValue": (X) => V.key = X,
                                      placeholder: "Key"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1024),
                                p(c, { span: 11 }, {
                                  default: f(() => [
                                    p(r, {
                                      modelValue: V.value,
                                      "onUpdate:modelValue": (X) => V.value = X,
                                      placeholder: "Value"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1024),
                                p(c, {
                                  span: 2,
                                  class: "btn-del"
                                }, {
                                  default: f(() => [
                                    p(_, {
                                      class: "el-icon-delete",
                                      onClick: (X) => n.removeKeyValue(E, "headers", re)
                                    }, {
                                      default: f(() => [
                                        p(h)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024))), 128)),
                            p(l, {
                              link: "",
                              type: "primary",
                              onClick: (V) => n.addKeyValue(E, "headers")
                            }, {
                              default: f(() => [
                                Oh
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["label"]),
                        p(v, {
                          label: "\u8BF7\u6C42\u53C2\u6570Params" + (T.params.length ? "\uFF08" + T.params.length + "\uFF09" : ""),
                          name: "params"
                        }, {
                          default: f(() => [
                            (g(!0), D(U, null, Q(T.params, (V, re) => (g(), y(b, {
                              class: "option-row",
                              key: re,
                              gutter: 5
                            }, {
                              default: f(() => [
                                p(c, { span: 11 }, {
                                  default: f(() => [
                                    p(r, {
                                      modelValue: V.key,
                                      "onUpdate:modelValue": (X) => V.key = X,
                                      placeholder: "Key"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1024),
                                p(c, { span: 11 }, {
                                  default: f(() => [
                                    p(r, {
                                      modelValue: V.value,
                                      "onUpdate:modelValue": (X) => V.value = X,
                                      placeholder: "Value"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1024),
                                p(c, {
                                  span: 2,
                                  class: "btn-del"
                                }, {
                                  default: f(() => [
                                    p(_, {
                                      class: "el-icon-delete",
                                      onClick: (X) => n.removeKeyValue(E, "params", re)
                                    }, {
                                      default: f(() => [
                                        p(h)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024))), 128)),
                            p(l, {
                              link: "",
                              type: "primary",
                              onClick: (V) => n.addKeyValue(E, "params")
                            }, {
                              default: f(() => [
                                Vh
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["label"]),
                        p(v, {
                          label: "\u8BF7\u6C42\u6570\u636EData" + (T.data.length ? "\uFF08" + T.data.length + "\uFF09" : ""),
                          name: "data"
                        }, {
                          default: f(() => [
                            (g(!0), D(U, null, Q(T.data, (V, re) => (g(), y(b, {
                              class: "option-row",
                              key: re,
                              gutter: 5
                            }, {
                              default: f(() => [
                                p(c, { span: 11 }, {
                                  default: f(() => [
                                    p(r, {
                                      modelValue: V.key,
                                      "onUpdate:modelValue": (X) => V.key = X,
                                      placeholder: "Key"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1024),
                                p(c, { span: 11 }, {
                                  default: f(() => [
                                    p(r, {
                                      modelValue: V.value,
                                      "onUpdate:modelValue": (X) => V.value = X,
                                      placeholder: "Value"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1024),
                                p(c, {
                                  span: 2,
                                  class: "btn-del"
                                }, {
                                  default: f(() => [
                                    p(_, {
                                      class: "el-icon-delete",
                                      onClick: (X) => n.removeKeyValue(E, "data", re)
                                    }, {
                                      default: f(() => [
                                        p(h)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024))), 128)),
                            p(l, {
                              link: "",
                              type: "primary",
                              onClick: (V) => n.addKeyValue(E, "data")
                            }, {
                              default: f(() => [
                                Th
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["label"])
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"]),
                    yl((g(), D("div", $h, [
                      Ch,
                      p(S, {
                        modelValue: n.form.remoteResults[E],
                        "onUpdate:modelValue": (V) => n.form.remoteResults[E] = V,
                        lang: "json"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])), [
                      [C, n.form.loading]
                    ]),
                    p(R, {
                      modelValue: n.form.remoteCollapses[E],
                      "onUpdate:modelValue": (V) => n.form.remoteCollapses[E] = V
                    }, {
                      default: f(() => [
                        p(k, {
                          title: "\u5904\u7406\u8BF7\u6C42\u6570\u636E",
                          name: "request"
                        }, {
                          default: f(() => [
                            $("div", jh, [
                              Eh,
                              p(S, {
                                modelValue: T.requestHandler,
                                "onUpdate:modelValue": (V) => T.requestHandler = V,
                                lang: "javascript"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              Dh
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        p(k, {
                          title: "\u5904\u7406\u54CD\u5E94\u6570\u636E",
                          name: "response"
                        }, {
                          default: f(() => [
                            $("div", Ph, [
                              Mh,
                              p(S, {
                                modelValue: T.responseHandler,
                                "onUpdate:modelValue": (V) => T.responseHandler = V,
                                lang: "javascript"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              Ih
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        p(k, {
                          title: "\u9519\u8BEF\u5904\u7406",
                          name: "error"
                        }, {
                          default: f(() => [
                            $("div", Ah, [
                              Rh,
                              p(S, {
                                modelValue: T.errorHandler,
                                "onUpdate:modelValue": (V) => T.errorHandler = V,
                                lang: "javascript"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              zh
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["label", "name"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "onEdit"])
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64);
}
const Bh = /* @__PURE__ */ w(bh, [["render", Fh]]), Lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bh
}, Symbol.toStringTag, { value: "Module" })), Uh = {
  name: "richContentOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function Nh(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "textarea",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r)),
    rows: 4
  }, null, 8, ["model-value"]);
}
const Hh = /* @__PURE__ */ w(Uh, [["render", Nh]]), Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hh
}, Symbol.toStringTag, { value: "Module" })), qh = {
  name: "rowsOption",
  components: { ElSlider: Be },
  props: {
    modelValue: Number
  },
  setup() {
  }
};
function Yh(o, t, e, n, a, i) {
  const l = u("el-slider");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.modelValue = r),
    onInput: t[1] || (t[1] = (r) => o.$emit("update:modelValue", r)),
    min: 2,
    max: 10
  }, null, 8, ["model-value"]);
}
const Gh = /* @__PURE__ */ w(qh, [["render", Yh]]), Xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gh
}, Symbol.toStringTag, { value: "Module" })), Kh = {
  name: "rulesOption",
  components: { ElRow: co, ElCol: mo, ElCheckbox: oe, ElInput: W, ElButton: xe, ElDialog: Le, ElIcon: Et, CodeEditor: dt },
  props: {
    modelValue: Array
  },
  setup(o, { emit: t }) {
    const e = ie({
      required: { required: !1, message: "\u5FC5\u586B\u9879", trigger: "blur" },
      patterns: []
    }), n = B(""), a = B(!1), i = () => {
      t("update:modelValue", [e.required, ...e.patterns]);
    }, l = (h, _, b) => {
      e.patterns[h][_] = b, i();
    }, r = () => {
      e.patterns.push({
        pattern: "",
        message: "",
        trigger: "blur"
      }), i();
    }, s = (h) => {
      e.patterns.splice(h, 1), i();
    }, d = () => {
      a.value = !0, n.value = JSON.stringify(e.patterns, null, "	");
    }, m = () => {
      try {
        e.patterns = JSON.parse(n.value);
      } catch {
        return me.error("\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E");
      }
      a.value = !1, i();
    }, c = () => {
      e.required = ue(o.modelValue[0]), e.patterns = ue(o.modelValue.slice(1));
    };
    return Oe(c), ye(() => o.modelValue, c), {
      data: e,
      code: n,
      codeDialog: a,
      update: l,
      emitChange: i,
      addRule: r,
      removeRule: s,
      editRules: d,
      setRules: m
    };
  }
}, Jh = /* @__PURE__ */ j(" \u5FC5\u586B "), Zh = /* @__PURE__ */ j("\u589E\u52A0\u9A8C\u8BC1"), Qh = /* @__PURE__ */ j("\u7F16\u8F91\u9A8C\u8BC1"), eg = { class: "form-design-code-editor" }, tg = /* @__PURE__ */ j("\u53D6\u6D88"), og = /* @__PURE__ */ j("\u786E\u5B9A");
function ng(o, t, e, n, a, i) {
  const l = u("el-checkbox"), r = u("el-col"), s = u("el-input"), d = u("el-row"), m = ut, c = u("el-icon"), h = u("el-button"), _ = u("code-editor"), b = u("el-dialog");
  return g(), D("div", null, [
    p(d, {
      class: "option-row",
      gutter: 5
    }, {
      default: f(() => [
        p(r, { span: 11 }, {
          default: f(() => [
            p(l, {
              modelValue: n.data.required.required,
              "onUpdate:modelValue": t[0] || (t[0] = (v) => n.data.required.required = v),
              onChange: n.emitChange
            }, {
              default: f(() => [
                Jh
              ]),
              _: 1
            }, 8, ["modelValue", "onChange"])
          ]),
          _: 1
        }),
        p(r, { span: 11 }, {
          default: f(() => [
            p(s, {
              modelValue: n.data.required.message,
              "onUpdate:modelValue": t[1] || (t[1] = (v) => n.data.required.message = v),
              onInput: n.emitChange,
              placeholder: "\u63D0\u793A\u4FE1\u606F"
            }, null, 8, ["modelValue", "onInput"])
          ]),
          _: 1
        }),
        p(r, { span: 2 })
      ]),
      _: 1
    }),
    (g(!0), D(U, null, Q(n.data.patterns, (v, x) => (g(), y(d, {
      class: "option-row",
      key: x,
      gutter: 5
    }, {
      default: f(() => [
        p(r, { span: 11 }, {
          default: f(() => [
            p(s, {
              "model-value": v.pattern,
              onInput: (S) => n.update(x, "pattern", S),
              placeholder: "\u6B63\u5219\u8868\u8FBE\u5F0F"
            }, null, 8, ["model-value", "onInput"])
          ]),
          _: 2
        }, 1024),
        p(r, { span: 11 }, {
          default: f(() => [
            p(s, {
              "model-value": v.message,
              onInput: (S) => n.update(x, "message", S),
              placeholder: "\u63D0\u793A\u4FE1\u606F"
            }, null, 8, ["model-value", "onInput"])
          ]),
          _: 2
        }, 1024),
        p(r, {
          span: 2,
          class: "btn-del"
        }, {
          default: f(() => [
            p(c, {
              class: "el-icon-delete",
              onClick: (S) => n.removeRule(x)
            }, {
              default: f(() => [
                p(m)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 2
    }, 1024))), 128)),
    p(h, {
      link: "",
      type: "primary",
      onClick: n.addRule
    }, {
      default: f(() => [
        Zh
      ]),
      _: 1
    }, 8, ["onClick"]),
    p(h, {
      link: "",
      type: "primary",
      onClick: n.editRules
    }, {
      default: f(() => [
        Qh
      ]),
      _: 1
    }, 8, ["onClick"]),
    p(b, {
      title: "\u7F16\u8F91\u9A8C\u8BC1",
      modelValue: n.codeDialog,
      "onUpdate:modelValue": t[4] || (t[4] = (v) => n.codeDialog = v),
      width: "750px"
    }, {
      footer: f(() => [
        $("div", null, [
          p(h, {
            onClick: t[3] || (t[3] = (v) => n.codeDialog = !1)
          }, {
            default: f(() => [
              tg
            ]),
            _: 1
          }),
          p(h, {
            type: "primary",
            onClick: n.setRules
          }, {
            default: f(() => [
              og
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: f(() => [
        $("div", eg, [
          p(_, {
            modelValue: n.code,
            "onUpdate:modelValue": t[2] || (t[2] = (v) => n.code = v),
            lang: "json"
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const rg = /* @__PURE__ */ w(Kh, [["render", ng]]), lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rg
}, Symbol.toStringTag, { value: "Module" })), ag = {
  name: "shadowOption",
  components: { ElRadioGroup: Fe, ElRadioButton: st },
  props: {
    modelValue: String
  },
  setup() {
  }
}, ig = /* @__PURE__ */ j("\u603B\u662F"), sg = /* @__PURE__ */ j("\u60AC\u6D6E"), dg = /* @__PURE__ */ j("\u4ECE\u4E0D");
function ug(o, t, e, n, a, i) {
  const l = u("el-radio-button"), r = u("el-radio-group");
  return g(), y(r, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s))
  }, {
    default: f(() => [
      p(l, { label: "always" }, {
        default: f(() => [
          ig
        ]),
        _: 1
      }),
      p(l, { label: "hover" }, {
        default: f(() => [
          sg
        ]),
        _: 1
      }),
      p(l, { label: "never" }, {
        default: f(() => [
          dg
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const cg = /* @__PURE__ */ w(ag, [["render", ug]]), mg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cg
}, Symbol.toStringTag, { value: "Module" })), pg = {
  name: "showAlphaOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function fg(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const _g = /* @__PURE__ */ w(pg, [["render", fg]]), hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _g
}, Symbol.toStringTag, { value: "Module" })), gg = {
  name: "showFileListOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function bg(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const vg = /* @__PURE__ */ w(gg, [["render", bg]]), yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vg
}, Symbol.toStringTag, { value: "Module" })), xg = {
  name: "showInputOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function wg(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Sg = /* @__PURE__ */ w(xg, [["render", wg]]), kg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sg
}, Symbol.toStringTag, { value: "Module" })), Og = {
  name: "showPasswordOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function Vg(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Tg = /* @__PURE__ */ w(Og, [["render", Vg]]), $g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tg
}, Symbol.toStringTag, { value: "Module" })), Cg = {
  name: "showStopsOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function jg(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Eg = /* @__PURE__ */ w(Cg, [["render", jg]]), Dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eg
}, Symbol.toStringTag, { value: "Module" })), Pg = {
  name: "showToolTipOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function Mg(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Ig = /* @__PURE__ */ w(Pg, [["render", Mg]]), Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ig
}, Symbol.toStringTag, { value: "Module" })), Rg = {
  name: "showWordLimitOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function zg(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Fg = /* @__PURE__ */ w(Rg, [["render", zg]]), Bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fg
}, Symbol.toStringTag, { value: "Module" })), Lg = {
  name: "sizeOption",
  components: { ElRadioGroup: Fe, ElRadioButton: st },
  props: {
    modelValue: String
  },
  setup() {
  }
}, Ug = /* @__PURE__ */ j("\u5927\u53F7"), Ng = /* @__PURE__ */ j("\u6B63\u5E38"), Hg = /* @__PURE__ */ j("\u5C0F\u53F7");
function Wg(o, t, e, n, a, i) {
  const l = u("el-radio-button"), r = u("el-radio-group");
  return g(), y(r, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s))
  }, {
    default: f(() => [
      p(l, { label: "large" }, {
        default: f(() => [
          Ug
        ]),
        _: 1
      }),
      p(l, { label: "default" }, {
        default: f(() => [
          Ng
        ]),
        _: 1
      }),
      p(l, { label: "small" }, {
        default: f(() => [
          Hg
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const qg = /* @__PURE__ */ w(Lg, [["render", Wg]]), Yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qg
}, Symbol.toStringTag, { value: "Module" })), Gg = {
  name: "statusIconOption",
  components: { ElCheckbox: oe },
  props: {
    modelValue: Boolean
  },
  setup() {
  }
};
function Xg(o, t, e, n, a, i) {
  const l = u("el-checkbox");
  return g(), y(l, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const Kg = /* @__PURE__ */ w(Gg, [["render", Xg]]), Jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kg
}, Symbol.toStringTag, { value: "Module" })), Zg = {
  name: "suffixIconOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function Qg(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const e4 = /* @__PURE__ */ w(Zg, [["render", Qg]]), t4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: e4
}, Symbol.toStringTag, { value: "Module" })), o4 = {
  name: "tabPositionOption",
  components: { ElRadioGroup: Fe, ElRadioButton: st },
  props: {
    modelValue: String
  },
  setup() {
  }
}, n4 = /* @__PURE__ */ j("\u4E0A"), r4 = /* @__PURE__ */ j("\u53F3"), l4 = /* @__PURE__ */ j("\u4E0B"), a4 = /* @__PURE__ */ j("\u5DE6");
function i4(o, t, e, n, a, i) {
  const l = u("el-radio-button"), r = u("el-radio-group");
  return g(), y(r, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s))
  }, {
    default: f(() => [
      p(l, { label: "top" }, {
        default: f(() => [
          n4
        ]),
        _: 1
      }),
      p(l, { label: "right" }, {
        default: f(() => [
          r4
        ]),
        _: 1
      }),
      p(l, { label: "bottom" }, {
        default: f(() => [
          l4
        ]),
        _: 1
      }),
      p(l, { label: "left" }, {
        default: f(() => [
          a4
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const s4 = /* @__PURE__ */ w(o4, [["render", i4]]), d4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: s4
}, Symbol.toStringTag, { value: "Module" })), u4 = {
  name: "tabTypeOption",
  components: { ElRadioGroup: Fe, ElRadioButton: st },
  props: {
    modelValue: String
  },
  setup() {
  }
}, c4 = /* @__PURE__ */ j("\u9009\u9879\u5361"), m4 = /* @__PURE__ */ j("\u5361\u7247\u5316");
function p4(o, t, e, n, a, i) {
  const l = u("el-radio-button"), r = u("el-radio-group");
  return g(), y(r, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (s) => o.$emit("update:modelValue", s))
  }, {
    default: f(() => [
      p(l, { label: "card" }, {
        default: f(() => [
          c4
        ]),
        _: 1
      }),
      p(l, { label: "border-card" }, {
        default: f(() => [
          m4
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const f4 = /* @__PURE__ */ w(u4, [["render", p4]]), _4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: f4
}, Symbol.toStringTag, { value: "Module" })), h4 = {
  name: "tipOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function g4(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const b4 = /* @__PURE__ */ w(h4, [["render", g4]]), v4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: b4
}, Symbol.toStringTag, { value: "Module" })), y4 = {
  name: "uploadDataOption",
  components: { ElDialog: Le, ElButton: xe, CodeEditor: dt },
  props: {
    modelValue: Object
  },
  setup(o, { emit: t }) {
    const e = B(""), n = B(!1);
    return {
      code: e,
      codeDialog: n,
      editData: () => {
        n.value = !0, e.value = JSON.stringify(o.modelValue, null, "	");
      },
      setData: () => {
        try {
          const l = JSON.parse(e.value);
          t("update:modelValue", l);
        } catch {
          return me.error("\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E");
        }
        n.value = !1;
      }
    };
  }
}, x4 = { class: "form-design-code-editor" }, w4 = /* @__PURE__ */ j("\u53D6\u6D88"), S4 = /* @__PURE__ */ j("\u786E\u5B9A"), k4 = /* @__PURE__ */ j("\u7F16\u8F91\u6570\u636E");
function O4(o, t, e, n, a, i) {
  const l = u("code-editor"), r = u("el-button"), s = u("el-dialog");
  return g(), D(U, null, [
    p(s, {
      title: "\u7F16\u8F91\u989D\u5916\u53C2\u6570",
      modelValue: n.codeDialog,
      "onUpdate:modelValue": t[2] || (t[2] = (d) => n.codeDialog = d),
      width: "750px"
    }, {
      footer: f(() => [
        $("div", null, [
          p(r, {
            onClick: t[1] || (t[1] = (d) => n.codeDialog = !1)
          }, {
            default: f(() => [
              w4
            ]),
            _: 1
          }),
          p(r, {
            type: "primary",
            onClick: n.setData
          }, {
            default: f(() => [
              S4
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: f(() => [
        $("div", x4, [
          p(l, {
            modelValue: n.code,
            "onUpdate:modelValue": t[0] || (t[0] = (d) => n.code = d),
            lang: "json"
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]),
    p(r, {
      link: "",
      type: "primary",
      onClick: n.editData
    }, {
      default: f(() => [
        k4
      ]),
      _: 1
    }, 8, ["onClick"])
  ], 64);
}
const V4 = /* @__PURE__ */ w(y4, [["render", O4]]), T4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: V4
}, Symbol.toStringTag, { value: "Module" })), $4 = {
  name: "uploadHeadersOption",
  components: { ElDialog: Le, ElButton: xe, CodeEditor: dt },
  props: {
    modelValue: Object
  },
  setup(o, { emit: t }) {
    const e = B(""), n = B(!1);
    return {
      code: e,
      codeDialog: n,
      editData: () => {
        n.value = !0, e.value = JSON.stringify(o.modelValue, null, "	");
      },
      setData: () => {
        try {
          const l = JSON.parse(e.value);
          t("update:modelValue", l);
        } catch {
          return me.error("\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E");
        }
        n.value = !1;
      }
    };
  }
}, C4 = { class: "form-design-code-editor" }, j4 = /* @__PURE__ */ j("\u53D6\u6D88"), E4 = /* @__PURE__ */ j("\u786E\u5B9A"), D4 = /* @__PURE__ */ j("\u7F16\u8F91\u6570\u636E");
function P4(o, t, e, n, a, i) {
  const l = u("code-editor"), r = u("el-button"), s = u("el-dialog");
  return g(), D(U, null, [
    p(s, {
      title: "\u7F16\u8F91\u8BF7\u6C42\u5934\u90E8",
      modelValue: n.codeDialog,
      "onUpdate:modelValue": t[2] || (t[2] = (d) => n.codeDialog = d),
      width: "750px"
    }, {
      footer: f(() => [
        $("div", null, [
          p(r, {
            onClick: t[1] || (t[1] = (d) => n.codeDialog = !1)
          }, {
            default: f(() => [
              j4
            ]),
            _: 1
          }),
          p(r, {
            type: "primary",
            onClick: n.setData
          }, {
            default: f(() => [
              E4
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: f(() => [
        $("div", C4, [
          p(l, {
            modelValue: n.code,
            "onUpdate:modelValue": t[0] || (t[0] = (d) => n.code = d),
            lang: "json"
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]),
    p(r, {
      link: "",
      type: "primary",
      onClick: n.editData
    }, {
      default: f(() => [
        D4
      ]),
      _: 1
    }, 8, ["onClick"])
  ], 64);
}
const M4 = /* @__PURE__ */ w($4, [["render", P4]]), I4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M4
}, Symbol.toStringTag, { value: "Module" })), A4 = {
  name: "uploadNameOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function R4(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const z4 = /* @__PURE__ */ w(A4, [["render", R4]]), F4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: z4
}, Symbol.toStringTag, { value: "Module" })), B4 = {
  name: "uploadSizeOption",
  components: { ElInput: W, ElSelect: Ke, ElOption: jt },
  props: {
    modelValue: String
  },
  setup(o, { emit: t }) {
    const e = B(0), n = B("KB"), a = () => {
      e.value = parseFloat(o.modelValue), n.value = o.modelValue.substr(o.modelValue.length - 2);
    };
    return ye(() => o.modelValue, a), Oe(a), {
      size: e,
      unit: n,
      update: () => {
        t("update:modelValue", e.value + n.value);
      }
    };
  }
};
function L4(o, t, e, n, a, i) {
  const l = u("el-option"), r = u("el-select"), s = u("el-input");
  return g(), y(s, {
    type: "text",
    modelValue: n.size,
    "onUpdate:modelValue": t[1] || (t[1] = (d) => n.size = d),
    modelModifiers: { number: !0 },
    onInput: n.update
  }, {
    append: f(() => [
      p(r, {
        modelValue: n.unit,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => n.unit = d),
        style: { width: "70px" },
        onChange: n.update
      }, {
        default: f(() => [
          p(l, {
            label: "KB",
            value: "KB"
          }),
          p(l, {
            label: "MB",
            value: "MB"
          }),
          p(l, {
            label: "GB",
            value: "GB"
          })
        ]),
        _: 1
      }, 8, ["modelValue", "onChange"])
    ]),
    _: 1
  }, 8, ["modelValue", "onInput"]);
}
const U4 = /* @__PURE__ */ w(B4, [["render", L4]]), N4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U4
}, Symbol.toStringTag, { value: "Module" })), H4 = {
  name: "uploadUrlOption",
  components: { ElInput: W },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function W4(o, t, e, n, a, i) {
  const l = u("el-input");
  return g(), y(l, {
    type: "text",
    "model-value": e.modelValue,
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r))
  }, null, 8, ["model-value"]);
}
const q4 = /* @__PURE__ */ w(H4, [["render", W4]]), Y4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: q4
}, Symbol.toStringTag, { value: "Module" })), G4 = {
  name: "widthOption",
  components: { ElSlider: Be },
  props: {
    modelValue: String
  },
  setup() {
  }
};
function X4(o, t, e, n, a, i) {
  const l = u("el-slider");
  return g(), y(l, {
    "model-value": parseInt(e.modelValue),
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.modelValue = r + "%"),
    onInput: t[1] || (t[1] = (r) => o.$emit("update:modelValue", r + "%")),
    min: 0,
    max: 100,
    marks: { 33: "1/3", 50: "1/2", 66: "2/3" }
  }, null, 8, ["model-value"]);
}
const K4 = /* @__PURE__ */ w(G4, [["render", X4]]), J4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K4
}, Symbol.toStringTag, { value: "Module" })), Z4 = {
  name: "interpolation",
  components: { ElAutocomplete: Ol },
  props: {
    modelValue: String
  },
  setup() {
    const o = B([
      { value: "root", label: "\u6574\u4E2A\u8868\u5355\u7684\u503C" },
      { value: "options", label: "\u8BE5\u7EC4\u4EF6\u7684\u9009\u9879" }
    ]);
    return {
      getInterpolation: ur,
      querySearch: (e, n) => {
        const a = e ? o.value.filter((i) => i.value.toLowerCase().indexOf(e.toLowerCase()) === 0) : o.value;
        n(a);
      }
    };
  }
}, Q4 = { class: "value" }, eb = { class: "label" }, tb = /* @__PURE__ */ $("span", { innerHTML: "{{" }, null, -1), ob = /* @__PURE__ */ $("span", { innerHTML: "}}" }, null, -1);
function nb(o, t, e, n, a, i) {
  const l = u("el-autocomplete");
  return g(), y(l, {
    "popper-class": "form-setting-interpolation",
    "model-value": n.getInterpolation(e.modelValue).trim(),
    onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r.trim() ? `{{${r.trim()}}}` : "{{  }}")),
    "fetch-suggestions": n.querySearch,
    placeholder: "\u8BF7\u8F93\u5165JS\u8868\u8FBE\u5F0F"
  }, {
    default: f(({ item: r }) => [
      $("div", Q4, te(r.value), 1),
      $("span", eb, te(r.label), 1)
    ]),
    prefix: f(() => [
      tb
    ]),
    suffix: f(() => [
      ob
    ]),
    _: 1
  }, 8, ["model-value", "fetch-suggestions"]);
}
const rb = /* @__PURE__ */ w(Z4, [["render", nb]]), cl = {};
Object.values(/* @__PURE__ */ Object.assign({ "./components/active-color.vue": sf, "./components/active-text.vue": mf, "./components/allow-half.vue": hf, "./components/background-color.vue": yf, "./components/button-text.vue": kf, "./components/clearable.vue": $f, "./components/collapse-tags.vue": Df, "./components/content.vue": Af, "./components/default-value.vue": Bf, "./components/disabled.vue": Hf, "./components/expand-trigger.vue": Kf, "./components/file-suffix.vue": e_, "./components/filterable.vue": r_, "./components/format.vue": s_, "./components/gutter.vue": m_, "./components/height.vue": h_, "./components/hidden.vue": y_, "./components/hide-required-asterisk.vue": k_, "./components/image-suffix.vue": $_, "./components/inactive-color.vue": D_, "./components/inactive-text.vue": A_, "./components/inline.vue": B_, "./components/key.vue": H_, "./components/label-position.vue": J_, "./components/label-width.vue": t3, "./components/label.vue": l3, "./components/limit.vue": d3, "./components/line-height.vue": p3, "./components/max.vue": g3, "./components/maxlength.vue": x3, "./components/min.vue": O3, "./components/multiple-limit.vue": C3, "./components/multiple.vue": P3, "./components/no-data-text.vue": R3, "./components/no-match-text.vue": L3, "./components/options.vue": J3, "./components/padding.vue": lh, "./components/pen-color.vue": dh, "./components/placeholder.vue": ph, "./components/prefix-icon.vue": gh, "./components/remotes.vue": Lh, "./components/rich-content.vue": Wh, "./components/rows.vue": Xh, "./components/rules.vue": lg, "./components/shadow.vue": mg, "./components/show-alpha.vue": hg, "./components/show-file-list.vue": yg, "./components/show-input.vue": kg, "./components/show-password.vue": $g, "./components/show-stops.vue": Dg, "./components/show-tooltip.vue": Ag, "./components/show-word-limit.vue": Bg, "./components/size.vue": Yg, "./components/status-icon.vue": Jg, "./components/suffix-icon.vue": t4, "./components/tab-position.vue": d4, "./components/tab-type.vue": _4, "./components/tip.vue": v4, "./components/upload-data.vue": T4, "./components/upload-headers.vue": I4, "./components/upload-name.vue": F4, "./components/upload-size.vue": N4, "./components/upload-url.vue": Y4, "./components/width.vue": J4 })).forEach(
  ({ default: o }) => cl[o.name] = o
);
const lb = {
  name: "formOption",
  components: { ElRow: co, ElCol: mo, ElFormItem: I, Interpolation: rb, ...cl },
  props: {
    optionKey: String,
    optionValue: [String, Number, Boolean, Date, Object, Array]
  },
  setup() {
    const o = z("updateSelectedFormOption"), t = z("switchInterpolate");
    return {
      isPrimitive: Ul,
      validateInterpolation: Yo,
      optionKeyLabels: F1,
      updateOption: (e, n) => o({ key: e, value: n }),
      switchInterpolate: (e) => t(e)
    };
  }
};
function ab(o, t, e, n, a, i) {
  const l = u("interpolation"), r = u("el-form-item"), s = u("el-col"), d = nf, m = u("el-row");
  return g(), y(m, null, {
    default: f(() => [
      p(s, {
        span: n.isPrimitive(e.optionValue) ? 22 : 24
      }, {
        default: f(() => [
          p(r, {
            label: n.optionKeyLabels[e.optionKey]
          }, {
            default: f(() => [
              n.validateInterpolation(e.optionValue) ? (g(), y(l, {
                key: 0,
                "model-value": e.optionValue,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => n.updateOption(e.optionKey, c))
              }, null, 8, ["model-value"])) : (g(), y(Ho(e.optionKey + "Option"), {
                key: 1,
                "model-value": e.optionValue,
                "onUpdate:modelValue": t[1] || (t[1] = (c) => n.updateOption(e.optionKey, c))
              }, null, 8, ["model-value"]))
            ]),
            _: 1
          }, 8, ["label"])
        ]),
        _: 1
      }, 8, ["span"]),
      n.isPrimitive(e.optionValue) && e.optionKey !== "defaultValue" ? (g(), y(s, {
        key: 0,
        span: 2,
        class: "code-switch"
      }, {
        default: f(() => [
          p(d, {
            class: "svg-icon",
            "class-name": n.validateInterpolation(e.optionValue) ? "highlight" : "",
            onClick: t[2] || (t[2] = (c) => n.switchInterpolate(e.optionKey))
          }, null, 8, ["class-name"])
        ]),
        _: 1
      })) : G("", !0)
    ]),
    _: 1
  });
}
const ib = /* @__PURE__ */ w(lb, [["render", ab]]), sb = {
  name: "formSetting",
  components: { ElForm: uo, FormOptionItem: ib },
  props: {},
  setup() {
    const o = z("state");
    return {
      selected: ve(() => o.selected)
    };
  }
}, db = { class: "form-setting" }, ub = { class: "title" };
function cb(o, t, e, n, a, i) {
  const l = u("form-option-item"), r = u("el-form");
  return g(), D("div", db, [
    $("div", ub, te(n.selected.uuid === "root" ? "\u8868\u5355\u8BBE\u7F6E" : "\u5B57\u6BB5\u8BBE\u7F6E"), 1),
    (g(), y(r, {
      "label-position": "left",
      "label-width": "120px",
      key: n.selected.uuid
    }, {
      default: f(() => [
        (g(!0), D(U, null, Q(n.selected.options, (s, d) => (g(), D("div", { key: d }, [
          d !== "defaultValue" || !n.selected.items ? (g(), y(l, {
            key: 0,
            "option-key": d,
            "option-value": s
          }, null, 8, ["option-key", "option-value"])) : G("", !0)
        ]))), 128))
      ]),
      _: 1
    }))
  ]);
}
const mb = /* @__PURE__ */ w(sb, [["render", cb]]), pb = {
  components: { FormFields: q1, FormOperator: wm, FormBuilder: Z2, FormOptions: mb },
  props: {
    fields: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(o) {
    const t = ie({
      formDesign: {},
      selected: {},
      cached: [],
      current: -1
    }), e = B([]), n = ve(() => e.value.reduce((C, T) => C.concat(T.components), [Zn])), a = ve(() => i(t.formDesign.items, [])), i = (C, T) => {
      for (let E = 0; E < C.length; E++)
        T.push(C[E].uuid), C[E].items && C[E].items.length && i(C[E].items, T);
      return T;
    }, l = (C, T) => {
      let E = !1;
      if (!T)
        return !1;
      for (let V = 0; V < C.length; V++) {
        if (C[V].uuid === T)
          return C[V];
        if (C[V].items && C[V].items.length && (E = l(C[V].items, T), !cr(E)))
          return E;
      }
      return E;
    }, r = (C, T) => {
      if (!T)
        return !1;
      for (let E = 0; E < C.length; E++) {
        if (C[E].uuid === T) {
          let V = ue(C[E]);
          return V.uuid = V.options.key = V.component.replaceAll("-", "_") + "_" + Vt(8), Go(V, "items") && (V.items = []), C.splice(E + 1, 0, V), V;
        }
        if (C[E].items && C[E].items.length) {
          const V = r(C[E].items, T);
          if (V)
            return V;
        }
      }
      return !1;
    }, s = (C, T) => {
      if (!T)
        return !1;
      for (let E = 0; E < C.length; E++) {
        if (C[E].uuid === T)
          return C.splice(E, 1), !0;
        if (C[E].items && C[E].items.length && s(C[E].items, T))
          return !0;
      }
    }, d = (C) => {
      t.selected = l([t.formDesign], C) || t.formDesign;
    }, m = ({ uuid: C, items: T }) => {
      const E = l([t.formDesign], C);
      E && (E.items = T), k();
    }, c = ({ uuid: C, key: T, value: E }) => {
      const V = l([t.formDesign], C);
      V && (V.options[T] = E);
    }, h = ({ key: C, value: T }) => {
      t.selected.options[C] = T, k();
    }, _ = (C) => {
      const T = t.selected.options[C];
      t.selected.options[C] = Yo(T) ? n.value.find((E) => E.name === t.selected.name).options[C] : "{{  }}", k();
    }, b = (C) => {
      const T = r(t.formDesign.items, C);
      t.selected = T, k();
    }, v = (C) => {
      s(t.formDesign.items, C), t.selected = t.formDesign, k();
    }, x = () => {
      t.cached.length && t.current > 0 && (t.current--, t.formDesign = ue(t.cached[t.current]), d(t.selected.uuid));
    }, S = () => {
      t.cached.length && t.current < t.cached.length - 1 && (t.current++, t.formDesign = ue(t.cached[t.current]), d(t.selected.uuid));
    }, k = () => {
      t.cached.length >= 10 && t.cached.shift(), t.cached.splice(t.current + 1, 1 / 0, ue(t.formDesign)), t.current = t.cached.length - 1;
    }, R = (C) => {
      t.formDesign = C || ue(Zn), t.selected = l([t.formDesign], t.selected.uuid) || t.formDesign, k();
    }, q = () => {
      t.formDesign.items = [], t.selected = t.formDesign, k();
    }, he = (C = "\u57FA\u7840\u7EC4\u4EF6", T = [], E = 0) => {
      const V = e.value.findIndex((re) => re.name === C);
      o && o.fields && o.fields.length && (T = T.filter((re) => o.fields.includes(re.component))), T.length && (V > -1 ? e.value[V].components = T : e.value.push({ name: C, components: T, order: E }));
    };
    return R(), le("state", t), le("uuids", a), le("clear", q), le("init", R), le("setSelected", d), le("updateFormItem", m), le("updateFormOption", c), le("updateSelectedFormOption", h), le("switchInterpolate", _), le("copyFormItem", b), le("removeFormItem", v), le("revoke", x), le("forward", S), le("groups", e), le("register", he), {
      init: R,
      register: he,
      getJson() {
        return t.formDesign;
      }
    };
  }
}, fb = { class: "form-design" }, _b = { class: "left-container" }, hb = { class: "center-container" }, gb = { class: "right-container" };
function bb(o, t, e, n, a, i) {
  const l = u("form-fields"), r = u("form-operator"), s = u("form-builder"), d = u("form-options");
  return g(), D("div", fb, [
    $("div", _b, [
      p(l)
    ]),
    $("div", hb, [
      p(r),
      p(s)
    ]),
    $("div", gb, [
      p(d)
    ])
  ]);
}
const vb = /* @__PURE__ */ w(pb, [["render", bb]]);
function Vb(o) {
  o.component("FormDesign", vb), o.component("FormRender", sn);
}
export {
  vb as FormDesign,
  sn as FormRender,
  Vb as default
};
