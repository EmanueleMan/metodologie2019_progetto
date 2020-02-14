/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class WordAnnotation extends quickstart.StartBody {
        /*private*/ static createLabel() {
            let diz = ({});
            let pagina = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("WORD ANNOTATION").setCss("font-size", "40px").build();
            /* put */ (diz["pagina"] = pagina);
            let consegna = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Data una definizione in inglese, provare ad indovinare la parola definita.").build();
            $(consegna).css("font-size", "25px");
            $(consegna).css("font-style", "italic");
            /* put */ (diz["consegna"] = consegna);
            let description = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(description).css("font-weight", "bold");
            $(description).css("color", "white");
            $(description).css("margin-left", "30px");
            /* put */ (diz["description"] = description);
            return diz;
        }
        /*private*/ static createTextArea() {
            let diz = ({});
            let parola = new quickstart.HTMLTextAreaElementBuilder().setClassName("form-control").setPlaceholder("Scrivi qui la parola").setName("parola").build();
            $(parola).css("position", "relative");
            $(parola).css("height", "150px");
            /* put */ (diz["parola"] = parola);
            return diz;
        }
        /*private*/ static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = WordAnnotation.createLabel());
            /* put */ (diz["TextArea"] = WordAnnotation.createTextArea());
            return diz;
        }
        /*private*/ static createDiv() {
            let diz = ({});
            let nomePagina = new quickstart.HTMLDivElementBuilder().build();
            $(nomePagina).css("text-align", "center");
            /* put */ (diz["nomePagina"] = nomePagina);
            let divConsegna = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divConsegna"] = divConsegna);
            let divParola = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divParola"] = divParola);
            let divFinale = new quickstart.HTMLDivElementBuilder().build();
            $(divFinale).css("position", "relative");
            $(divFinale).css("top", "237px");
            /* put */ (diz["divFinale"] = divFinale);
            let divLink = quickstart.StartBody.createFinalButton(WordAnnotation.SERVLET_URL);
            $(divLink).css("position", "relative");
            $(divLink).css("top", "200px");
            /* put */ (diz["divLink"] = divLink);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "nomePagina")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "pagina"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "consegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divParola")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "TextArea"), "parola"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divParola"));
        }
        /*private*/ static setJSon(elementi) {
            $.getJSON(WordAnnotation.REST_URL, "task=WORD_ANNOTATION", (result, a, ctx) => {
                let json = result;
                let sDescription = (json["description"]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description")).text("Descrizione: " + sDescription);
                return null;
            });
        }
        static main(args) {
            let form = quickstart.StartBody.start(WordAnnotation.SERVLET_URL);
            $(form).css("margin-right", "30px");
            $(form).css("margin-left", "30px");
            let elementi = WordAnnotation.createElement();
            let divs = WordAnnotation.createDiv();
            WordAnnotation.setJSon(elementi);
            WordAnnotation.setDiv(divs, elementi);
            quickstart.StartBody.end(form, quickstart.StartBody.createArray(divs));
        }
    }
    WordAnnotation.SERVLET_URL = "wordAnnotation.jsp";
    WordAnnotation.REST_URL = "nextExample.jsp";
    quickstart.WordAnnotation = WordAnnotation;
    WordAnnotation["__class"] = "quickstart.WordAnnotation";
})(quickstart || (quickstart = {}));
quickstart.WordAnnotation.main(null);
