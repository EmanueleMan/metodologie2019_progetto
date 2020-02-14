/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class HTMLImageElementBuilder {
        constructor() {
            if (this.src === undefined)
                this.src = null;
            if (this.width === undefined)
                this.width = 0;
            if (this.height === undefined)
                this.height = 0;
        }
        setheight(height) {
            this.height = height;
            return this;
        }
        setWidth(width) {
            this.width = width;
            return this;
        }
        setSrc(src) {
            this.src = src;
            return this;
        }
        build() {
            let immagine = document.createElement("img");
            if (this.src != null)
                immagine.src = this.src;
            immagine.height = this.height;
            immagine.width = this.width;
            return immagine;
        }
    }
    quickstart.HTMLImageElementBuilder = HTMLImageElementBuilder;
    HTMLImageElementBuilder["__class"] = "quickstart.HTMLImageElementBuilder";
})(quickstart || (quickstart = {}));
