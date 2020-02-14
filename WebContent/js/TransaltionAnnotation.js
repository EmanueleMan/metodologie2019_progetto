/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class TransaltionAnnotation extends quickstart.StartBody {
        /*private*/ static createLabel() {
            let diz = ({});
            let pagina = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("TRANSLATION ANNOTATION").setCss("font-size", "40px").build();
            /* put */ (diz["pagina"] = pagina);
            let consegna = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Data una parola e la sua definizione in inglese, fornire una traduzione nella tua lingua madre").build();
            $(consegna).css("font-size", "25px");
            $(consegna).css("font-style", "italic");
            /* put */ (diz["consegna"] = consegna);
            let word = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(word).css("font-weight", "bold");
            /* put */ (diz["word"] = word);
            let description = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(description).css("font-weight", "bold");
            $(description).css("color", "white");
            /* put */ (diz["description"] = description);
            return diz;
        }
        /*private*/ static createInput() {
            let diz = ({});
            let radioOne = new quickstart.HTMLInputElementBuilder().setType("radio").setName("radioButtonYes").setId("radioYes").setValue("si").build();
            /* put */ (diz["radioOne"] = radioOne);
            let radioTwo = new quickstart.HTMLInputElementBuilder().setType("radio").setName("radioButtonNo").setId("radioNo").setValue("no").build();
            /* put */ (diz["radioTwo"] = radioTwo);
            return diz;
        }
        /*private*/ static createTextArea() {
            let diz = ({});
            let traduzione = new quickstart.HTMLTextAreaElementBuilder().setClassName("form-control").setPlaceholder("Scrivi qui la traduzine della parola").setName("traduzione").build();
            $(traduzione).css("position", "relative");
            $(traduzione).css("height", "150px");
            /* put */ (diz["traduzione"] = traduzione);
            return diz;
        }
        static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = TransaltionAnnotation.createLabel());
            /* put */ (diz["Input"] = TransaltionAnnotation.createInput());
            /* put */ (diz["TextArea"] = TransaltionAnnotation.createTextArea());
            return diz;
        }
        /*private*/ static createDiv() {
            let diz = ({});
            let nomePagina = new quickstart.HTMLDivElementBuilder().build();
            $(nomePagina).css("text-align", "center");
            /* put */ (diz["nomePagina"] = nomePagina);
            let divTraduzione = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divTraduzione"] = divTraduzione);
            let divTranslation = new quickstart.HTMLDivElementBuilder().build();
            $(divTranslation).css("margin-left", "30px");
            /* put */ (diz["divTranslation"] = divTranslation);
            let divConsegna = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divConsegna"] = divConsegna);
            let divFinale = new quickstart.HTMLDivElementBuilder().build();
            $(divFinale).css("position", "relative");
            $(divFinale).css("top", "80px");
            /* put */ (diz["divFinale"] = divFinale);
            let divLink = quickstart.StartBody.createFinalButton(TransaltionAnnotation.SERVLET_URL);
            $(divLink).css("position", "relative");
            $(divLink).css("top", "200px");
            /* put */ (diz["divLink"] = divLink);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "nomePagina")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "pagina"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divTraduzione")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "TextArea"), "traduzione"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divTranslation")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "consegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divTranslation"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divTraduzione"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadioTwo")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "radioTwo"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "nameRadioTwo"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadio")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadioOne"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadioTwo"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadio"));
        }
        /*private*/ static setJSon(elementi) {
            $.getJSON(TransaltionAnnotation.REST_URL, "task=TRANSLATION_ANNOTATION", (result, a, ctx) => {
                let json = result;
                let sWord = (json["word"]);
                let sDescription = (json["description"]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word")).text("Parola: " + sWord);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description")).text("Descrizione: " + sDescription);
                return null;
            });
        }
        static main(args) {
            let form = quickstart.StartBody.start(TransaltionAnnotation.SERVLET_URL);
            $(form).css("margin-right", "30px");
            $(form).css("margin-left", "30px");
            let elementi = TransaltionAnnotation.createElement();
            let divs = TransaltionAnnotation.createDiv();
            TransaltionAnnotation.setJSon(elementi);
            TransaltionAnnotation.setDiv(divs, elementi);
            quickstart.StartBody.end(form, quickstart.StartBody.createArray(divs));
        }
    }
    TransaltionAnnotation.SERVLET_URL = "translationAnnotation.jsp";
    TransaltionAnnotation.REST_URL = "nextExample.jsp";
    quickstart.TransaltionAnnotation = TransaltionAnnotation;
    TransaltionAnnotation["__class"] = "quickstart.TransaltionAnnotation";
})(quickstart || (quickstart = {}));
quickstart.TransaltionAnnotation.main(null);
