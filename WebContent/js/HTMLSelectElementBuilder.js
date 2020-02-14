/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class HTMLSelectElementBuilder {
        constructor() {
            if (this.name === undefined)
                this.name = null;
        }
        setName(name) {
            this.name = name;
            return this;
        }
        build() {
            let select = document.createElement("select");
            if (this.name != null)
                select.name = this.name;
            return select;
        }
    }
    quickstart.HTMLSelectElementBuilder = HTMLSelectElementBuilder;
    HTMLSelectElementBuilder["__class"] = "quickstart.HTMLSelectElementBuilder";
})(quickstart || (quickstart = {}));
