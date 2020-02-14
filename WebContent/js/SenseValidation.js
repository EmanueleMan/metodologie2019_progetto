/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class SenseValidation extends quickstart.StartBody {
        /*private*/ static createLabel() {
            let diz = ({});
            let pagina = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("SENSE VALIDATION").setCss("font-size", "40px").build();
            /* put */ (diz["pagina"] = pagina);
            let consegna = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Data una parola e una frase su cui essa compare, selezionare il senso della parola").build();
            $(consegna).css("font-size", "25px");
            $(consegna).css("font-style", "italic");
            /* put */ (diz["consegna"] = consegna);
            let word = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(word).css("font-weight", "bold");
            /* put */ (diz["word"] = word);
            let example = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(example).css("font-weight", "bold");
            /* put */ (diz["example"] = example);
            let sense = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(sense).css("font-weight", "bold");
            /* put */ (diz["sense"] = sense);
            let nameRadioOne = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Si").setLinkage("radioYes").build();
            $(nameRadioOne).css("position", "relative");
            $(nameRadioOne).css("left", "30px");
            $(nameRadioOne).css("bottom", "26px");
            /* put */ (diz["nameRadioOne"] = nameRadioOne);
            let nameRadioTwo = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("No").setLinkage("radioNo").build();
            $(nameRadioTwo).css("position", "relative");
            $(nameRadioTwo).css("left", "30px");
            $(nameRadioTwo).css("bottom", "26px");
            /* put */ (diz["nameRadioTwo"] = nameRadioTwo);
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
        static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = SenseValidation.createLabel());
            /* put */ (diz["Input"] = SenseValidation.createInput());
            return diz;
        }
        /*private*/ static createDiv() {
            let diz = ({});
            let nomePagina = new quickstart.HTMLDivElementBuilder().build();
            $(nomePagina).css("text-align", "center");
            /* put */ (diz["nomePagina"] = nomePagina);
            let divSense = new quickstart.HTMLDivElementBuilder().build();
            $(divSense).css("margin-left", "30px");
            /* put */ (diz["divSense"] = divSense);
            let divConsegna = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divConsegna"] = divConsegna);
            let divRadioOne = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divRadioOne"] = divRadioOne);
            let divRadioTwo = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divRadioTwo"] = divRadioTwo);
            let divRadio = new quickstart.HTMLDivElementBuilder().build();
            $(divRadio).css("margin-left", "60px");
            $(divRadio).css("margin-top", "70px");
            /* put */ (diz["divRadio"] = divRadio);
            let divFinale = new quickstart.HTMLDivElementBuilder().build();
            $(divFinale).css("position", "relative");
            $(divFinale).css("top", "80px");
            /* put */ (diz["divFinale"] = divFinale);
            let divLink = quickstart.StartBody.createFinalButton(SenseValidation.SERVLET_URL);
            $(divLink).css("position", "relative");
            $(divLink).css("top", "142px");
            /* put */ (diz["divLink"] = divLink);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "nomePagina")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "pagina"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divSense")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "example"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "sense"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "consegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divSense"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadioOne")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "radioOne"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "nameRadioOne"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadioTwo")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "radioTwo"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "nameRadioTwo"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadio")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadioOne"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadioTwo"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRadio"));
        }
        /*private*/ static setJSon(elementi) {
            $.getJSON(SenseValidation.REST_URL, "task=SENSE_VALIDATION", (result, a, ctx) => {
                let json = result;
                let sWord = (json["word"]);
                let sExample = (json["example"]);
                let sSense = (json["sense"]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word")).text("Parola: " + sWord);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "example")).text("Esempio: " + sExample);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "sense")).text("Significato: " + sSense);
                return null;
            });
        }
        static main(args) {
            let form = quickstart.StartBody.start(SenseValidation.SERVLET_URL);
            $(form).css("margin-right", "30px");
            $(form).css("margin-left", "30px");
            let elementi = SenseValidation.createElement();
            let divs = SenseValidation.createDiv();
            SenseValidation.setJSon(elementi);
            SenseValidation.setDiv(divs, elementi);
            quickstart.StartBody.end(form, quickstart.StartBody.createArray(divs));
        }
    }
    SenseValidation.SERVLET_URL = "senseValidation.jsp";
    SenseValidation.REST_URL = "nextExample.jsp";
    quickstart.SenseValidation = SenseValidation;
    SenseValidation["__class"] = "quickstart.SenseValidation";
})(quickstart || (quickstart = {}));
quickstart.SenseValidation.main(null);
