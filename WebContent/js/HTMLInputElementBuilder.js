/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class HTMLInputElementBuilder {
        constructor() {
            if (this.className === undefined)
                this.className = null;
            if (this.type === undefined)
                this.type = null;
            if (this.name === undefined)
                this.name = null;
            if (this.value === undefined)
                this.value = null;
            if (this.placeholder === undefined)
                this.placeholder = null;
            if (this.id === undefined)
                this.id = null;
            if (this.a === undefined)
                this.a = null;
            if (this.b === undefined)
                this.b = null;
        }
        setId(id) {
            this.id = id;
            return this;
        }
        setPlaceholder(placeholder) {
            this.placeholder = placeholder;
            return this;
        }
        setClassName(className) {
            this.className = className;
            return this;
        }
        setType(type) {
            this.type = type;
            return this;
        }
        setName(name) {
            this.name = name;
            return this;
        }
        setValue(value) {
            this.value = value;
            return this;
        }
        setCss(a, b) {
            this.a = a;
            this.b = b;
            return this;
        }
        build() {
            let istanza = document.createElement("input");
            if (this.className != null)
                istanza.className = this.className;
            if (this.value != null)
                istanza.value = this.value;
            if (this.name != null)
                istanza.name = this.name;
            if (this.type != null)
                istanza.type = this.type;
            if (this.placeholder != null)
                istanza.placeholder = this.placeholder;
            if (this.id != null)
                istanza.id = this.id;
            if (this.a != null && this.b != null)
                $(istanza).css(this.a, this.b);
            return istanza;
        }
    }
    quickstart.HTMLInputElementBuilder = HTMLInputElementBuilder;
    HTMLInputElementBuilder["__class"] = "quickstart.HTMLInputElementBuilder";
})(quickstart || (quickstart = {}));
