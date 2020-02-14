/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class HTMLLabelElementBuilder {
        constructor() {
            if (this.linkage === undefined)
                this.linkage = null;
            if (this.className === undefined)
                this.className = null;
            if (this.textContent === undefined)
                this.textContent = null;
            if (this.a === undefined)
                this.a = null;
            if (this.b === undefined)
                this.b = null;
        }
        setLinkage(linkage) {
            this.linkage = linkage;
            return this;
        }
        setClassName(className) {
            this.className = className;
            return this;
        }
        setTextContent(textContent) {
            this.textContent = textContent;
            return this;
        }
        setCss(a, b) {
            this.a = a;
            this.b = b;
            return this;
        }
        build() {
            let label = document.createElement("label");
            if (this.textContent != null)
                label.textContent = this.textContent;
            if (this.className != null)
                label.className = this.className;
            if (this.linkage != null)
                label.setAttribute("for", this.linkage);
            if (this.a != null && this.b != null)
                $(label).css(this.a, this.b);
            $(label).css("color", "white");
            return label;
        }
    }
    quickstart.HTMLLabelElementBuilder = HTMLLabelElementBuilder;
    HTMLLabelElementBuilder["__class"] = "quickstart.HTMLLabelElementBuilder";
})(quickstart || (quickstart = {}));
