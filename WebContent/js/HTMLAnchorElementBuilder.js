/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class HTMLAnchorElementBuilder {
        constructor() {
            if (this.name === undefined)
                this.name = null;
            if (this.className === undefined)
                this.className = null;
            if (this.href === undefined)
                this.href = null;
            if (this.a === undefined)
                this.a = null;
            if (this.b === undefined)
                this.b = null;
            if (this.id === undefined)
                this.id = null;
            if (this.text === undefined)
                this.text = null;
        }
        setText(text) {
            this.text = text;
            return this;
        }
        setId(id) {
            this.id = id;
            return this;
        }
        setClassName(className) {
            this.className = className;
            return this;
        }
        setName(name) {
            this.name = name;
            return this;
        }
        setHref(href) {
            this.href = href;
            return this;
        }
        setCss(a, b) {
            this.a = a;
            this.b = b;
            return this;
        }
        build() {
            let link = document.createElement("a");
            if (this.className != null)
                link.className = this.className;
            if (this.name != null)
                link.name = this.name;
            if (this.href != null)
                link.href = this.href;
            if (this.href != null)
                link.id = this.id;
            if (this.text != null)
                link.text = this.text;
            if (this.a != null && this.b != null)
                $(link).css(this.a, this.b);
            return link;
        }
    }
    quickstart.HTMLAnchorElementBuilder = HTMLAnchorElementBuilder;
    HTMLAnchorElementBuilder["__class"] = "quickstart.HTMLAnchorElementBuilder";
})(quickstart || (quickstart = {}));
