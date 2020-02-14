/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class DefinitionAnnotation extends quickstart.StartBody {
        /*private*/ static createTextArea() {
            let diz = ({});
            let definizione = new quickstart.HTMLTextAreaElementBuilder().setClassName("form-control").setPlaceholder("Scrivi qui la definizione della parola").setName("definizione").build();
            $(definizione).css("position", "relative");
            $(definizione).css("height", "150px");
            /* put */ (diz["definizione"] = definizione);
            return diz;
        }
        /*private*/ static createLabel() {
            let diz = ({});
            let pagina = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("DEFINITION ANNOTATION").setCss("font-size", "40px").build();
            /* put */ (diz["pagina"] = pagina);
            let consegna = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Data una parola ed un suo iperonimo, fornire una definizione appropiata").build();
            $(consegna).css("font-size", "25px");
            $(consegna).css("font-style", "italic");
            /* put */ (diz["consegna"] = consegna);
            let word = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(word).css("font-weight", "bold");
            /* put */ (diz["word"] = word);
            let hypernym = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(hypernym).css("font-weight", "bold");
            /* put */ (diz["consegna"] = consegna);
            /* put */ (diz["word"] = word);
            /* put */ (diz["hypernym"] = hypernym);
            return diz;
        }
        static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = DefinitionAnnotation.createLabel());
            /* put */ (diz["TextArea"] = DefinitionAnnotation.createTextArea());
            return diz;
        }
        static createDiv() {
            let diz = ({});
            let nomePagina = new quickstart.HTMLDivElementBuilder().build();
            $(nomePagina).css("text-align", "center");
            /* put */ (diz["nomePagina"] = nomePagina);
            let divIperonimo = new quickstart.HTMLDivElementBuilder().build();
            $(divIperonimo).css("margin-left", "30px");
            /* put */ (diz["divIperonimo"] = divIperonimo);
            let divConsegna = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divConsegna"] = divConsegna);
            let divDefinizione = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divDefinizione"] = divDefinizione);
            let divFinale = new quickstart.HTMLDivElementBuilder().build();
            $(divFinale).css("position", "relative");
            $(divFinale).css("top", "80px");
            /* put */ (diz["divFinale"] = divFinale);
            let divLink = quickstart.StartBody.createFinalButton(DefinitionAnnotation.SERVLET_URL);
            $(divLink).css("position", "relative");
            $(divLink).css("top", "200px");
            /* put */ (diz["divLink"] = divLink);
            return diz;
        }
        /*private*/ static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "nomePagina")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "pagina"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divIperonimo")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "hypernym"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "consegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divIperonimo"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDefinizione")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "TextArea"), "definizione"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDefinizione"));
        }
        /*private*/ static setJSon(elementi) {
            $.getJSON(DefinitionAnnotation.REST_URL, "task=DEFINITION_ANNOTATION", (result, a, ctx) => {
                let json = result;
                let sWord = (json["word"]);
                let sHypernim = (json["hypernym"]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word")).text("Parola: " + sWord);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "hypernym")).text("Iperonimo: " + sHypernim);
                return null;
            });
        }
        static main(args) {
            let form = quickstart.StartBody.start(DefinitionAnnotation.SERVLET_URL);
            $(form).css("margin-right", "30px");
            $(form).css("margin-left", "30px");
            let elementi = DefinitionAnnotation.createElement();
            let divs = DefinitionAnnotation.createDiv();
            DefinitionAnnotation.setJSon(elementi);
            DefinitionAnnotation.setDiv(divs, elementi);
            quickstart.StartBody.end(form, quickstart.StartBody.createArray(divs));
        }
    }
    DefinitionAnnotation.SERVLET_URL = "definitionAnnotation.jsp";
    DefinitionAnnotation.REST_URL = "nextExample.jsp";
    quickstart.DefinitionAnnotation = DefinitionAnnotation;
    DefinitionAnnotation["__class"] = "quickstart.DefinitionAnnotation";
})(quickstart || (quickstart = {}));
quickstart.DefinitionAnnotation.main(null);
