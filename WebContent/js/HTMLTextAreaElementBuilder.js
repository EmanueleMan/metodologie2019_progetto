/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class HTMLTextAreaElementBuilder {
        constructor() {
            if (this.name === undefined)
                this.name = null;
            if (this.className === undefined)
                this.className = null;
            if (this.placeholder === undefined)
                this.placeholder = null;
            if (this.a === undefined)
                this.a = null;
            if (this.b === undefined)
                this.b = null;
        }
        setName(name) {
            this.name = name;
            return this;
        }
        setClassName(className) {
            this.className = className;
            return this;
        }
        setPlaceholder(placeholder) {
            this.placeholder = placeholder;
            return this;
        }
        setCss(a, b) {
            this.a = a;
            this.b = b;
            return this;
        }
        build() {
            let textArea = document.createElement("textarea");
            if (this.className != null)
                textArea.className = this.className;
            if (this.placeholder != null)
                textArea.placeholder = this.placeholder;
            if (this.name != null)
                textArea.name = this.name;
            if (this.a != null && this.b != null)
                $(textArea).css(this.a, this.b);
            return textArea;
        }
    }
    quickstart.HTMLTextAreaElementBuilder = HTMLTextAreaElementBuilder;
    HTMLTextAreaElementBuilder["__class"] = "quickstart.HTMLTextAreaElementBuilder";
})(quickstart || (quickstart = {}));
