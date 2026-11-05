// Entry point bundled into vendor/codemirror.js: a small JavaScript editor and a static highlighter.
// Both use @lezer/highlight's classHighlighter, so colors live in tutorial.css (.tok-keyword, .tok-string, ...).
import {EditorView, keymap, drawSelection, highlightActiveLine} from "@codemirror/view";
import {EditorState} from "@codemirror/state";
import {defaultKeymap, history, historyKeymap, indentWithTab} from "@codemirror/commands";
import {javascript} from "@codemirror/lang-javascript";
import {syntaxHighlighting, bracketMatching, indentOnInput, indentUnit} from "@codemirror/language";
import {closeBrackets, closeBracketsKeymap} from "@codemirror/autocomplete";
import {classHighlighter, highlightCode} from "@lezer/highlight";

// An editor with highlighting, bracket matching and Tab to indent. Mod-Enter calls onRun.
export function createEditor(parent, doc, {onChange, onRun, label} = {}) {
  const view = new EditorView({
    parent,
    state: EditorState.create({
      doc,
      extensions: [
        history(), drawSelection(), highlightActiveLine(), indentOnInput(), bracketMatching(), closeBrackets(),
        indentUnit.of("  "), javascript(), syntaxHighlighting(classHighlighter),
        keymap.of([{key: "Mod-Enter", run: () => { onRun?.(); return true; }}, indentWithTab, ...closeBracketsKeymap, ...defaultKeymap, ...historyKeymap]),
        EditorView.updateListener.of(u => { if (u.docChanged) onChange?.(); }),
        EditorView.contentAttributes.of({"aria-label": label || "Source code", spellcheck: "false"}),
      ],
    }),
  });
  return {
    get: () => view.state.doc.toString(),
    set: text => view.dispatch({changes: {from: 0, to: view.state.doc.length, insert: text}}),
  };
}

// Returns an HTML fragment (as a DocumentFragment) with the code wrapped in .tok-* spans.
export function highlightStatic(code) {
  const frag = document.createDocumentFragment();
  const tree = javascript().language.parser.parse(code);
  highlightCode(code, tree, classHighlighter,
    (text, cls) => {
      if (!cls) return frag.append(text);
      const s = document.createElement("span"); s.className = cls; s.textContent = text; frag.append(s);
    },
    () => frag.append("\n"));
  return frag;
}
