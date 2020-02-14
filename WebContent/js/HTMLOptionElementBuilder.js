/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class HTMLOptionElementBuilder {
        constructor() {
            if (this.text === undefined)
                this.text = null;
            if (this.value === undefined)
                this.value = null;
        }
        setText(text) {
            this.text = text;
            return this;
        }
        setValue(value) {
            this.value = value;
            return this;
        }
        build() {
            let option = document.createElement("option");
            if (this.value != null)
                option.className = this.value;
            if (this.text != null)
                option.text = this.text;
            return option;
        }
    }
    quickstart.HTMLOptionElementBuilder = HTMLOptionElementBuilder;
    HTMLOptionElementBuilder["__class"] = "quickstart.HTMLOptionElementBuilder";
})(quickstart || (quickstart = {}));
