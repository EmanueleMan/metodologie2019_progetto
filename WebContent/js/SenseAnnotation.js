/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class SenseAnnotation extends quickstart.StartBody {
        /*private*/ static createLabel() {
            let diz = ({});
            let pagina = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("SENSE ANNOTATION").setCss("font-size", "40px").build();
            /* put */ (diz["pagina"] = pagina);
            let consegna = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Data una parola e una frase su cui essa compare, selezionare il senso della parola").build();
            $(consegna).css("font-size", "25px");
            $(consegna).css("font-style", "italic");
            /* put */ (diz["consegna"] = consegna);
            let word = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            /* put */ (diz["word"] = word);
            let description = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            /* put */ (diz["description"] = description);
            let senseOne = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("checkone").build();
            $(senseOne).css("position", "relative");
            $(senseOne).css("left", "30px");
            $(senseOne).css("bottom", "26px");
            /* put */ (diz["senseOne"] = senseOne);
            let senseTwo = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("checktwo").build();
            $(senseTwo).css("position", "relative");
            $(senseTwo).css("left", "30px");
            $(senseTwo).css("bottom", "26px");
            /* put */ (diz["senseTwo"] = senseTwo);
            let senseThree = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("checkthree").build();
            $(senseThree).css("position", "relative");
            $(senseThree).css("left", "30px");
            $(senseThree).css("bottom", "26px");
            /* put */ (diz["senseThree"] = senseThree);
            let sensefour = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("checkfour").build();
            $(sensefour).css("position", "relative");
            $(sensefour).css("left", "30px");
            $(sensefour).css("bottom", "26px");
            /* put */ (diz["senseFour"] = sensefour);
            return diz;
        }
        /*private*/ static createInput() {
            let diz = ({});
            let checkbox1 = new quickstart.HTMLInputElementBuilder().setType("checkbox").setName("checkboxOne").setId("checkone").build();
            /* put */ (diz["checkbox1"] = checkbox1);
            let checkbox2 = new quickstart.HTMLInputElementBuilder().setType("checkbox").setName("checkboxTwo").setId("checktwo").build();
            /* put */ (diz["checkbox2"] = checkbox2);
            let checkbox3 = new quickstart.HTMLInputElementBuilder().setType("checkbox").setName("checkboxTree").setId("checkthree").build();
            /* put */ (diz["checkbox3"] = checkbox3);
            let checkbox4 = new quickstart.HTMLInputElementBuilder().setType("checkbox").setName("checkboxFour").setId("checkfour").build();
            /* put */ (diz["checkbox4"] = checkbox4);
            return diz;
        }
        static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = SenseAnnotation.createLabel());
            /* put */ (diz["Input"] = SenseAnnotation.createInput());
            return diz;
        }
        /*private*/ static createDiv() {
            let diz = ({});
            let nomePagina = new quickstart.HTMLDivElementBuilder().build();
            $(nomePagina).css("text-align", "center");
            /* put */ (diz["nomePagina"] = nomePagina);
            let divTranslation = new quickstart.HTMLDivElementBuilder().build();
            $(divTranslation).css("margin-left", "30px");
            /* put */ (diz["divTranslation"] = divTranslation);
            let divConsegna = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divConsegna"] = divConsegna);
            let divCheckbox1 = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divCheckbox1"] = divCheckbox1);
            let divCheckbox2 = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divCheckbox2"] = divCheckbox2);
            let divCheckbox3 = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divCheckbox3"] = divCheckbox3);
            let divCheckbox4 = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divCheckbox4"] = divCheckbox4);
            let divCheckbox = new quickstart.HTMLDivElementBuilder().build();
            $(divCheckbox).css("margin-left", "60px");
            $(divCheckbox).css("margin-top", "30px");
            /* put */ (diz["divCheckbox"] = divCheckbox);
            let divFinale = new quickstart.HTMLDivElementBuilder().build();
            $(divFinale).css("position", "relative");
            $(divFinale).css("top", "80px");
            /* put */ (diz["divFinale"] = divFinale);
            let divLink = quickstart.StartBody.createFinalButton(SenseAnnotation.SERVLET_URL);
            $(divLink).css("position", "relative");
            $(divLink).css("top", "87px");
            /* put */ (diz["divLink"] = divLink);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "nomePagina")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "pagina"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divTranslation")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "consegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divTranslation"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox1")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox1"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "senseOne"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox2")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox2"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "senseTwo"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox3")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox3"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "senseThree"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox4")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox4"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "senseFour"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox1"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox2"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox3"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox4"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox"));
        }
        /*private*/ static setJson(elementi) {
            $.getJSON(SenseAnnotation.REST_URL, "task=SENSE_ANNOTATION", (result, a, ctx) => {
                let json = result;
                let sWord = (json["word"]);
                let sDescription = (json["description"]);
                let sSense = (json["senses"]);
                console.log(sSense);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word")).text("Parola: " + sWord);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description")).text("Descrizione: " + sDescription);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "senseOne")).text(sSense[0]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox1")).val(sSense[0]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "senseTwo")).text(sSense[1]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox2")).val(sSense[1]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "senseThree")).text(sSense[2]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox3")).attr("value", sSense[2]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "senseFour")).text(sSense[3]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox4")).attr("value", sSense[3]);
                return null;
            });
        }
        static main(args) {
            let form = quickstart.StartBody.start(SenseAnnotation.SERVLET_URL);
            $(form).css("margin-right", "30px");
            $(form).css("margin-left", "30px");
            let elementi = SenseAnnotation.createElement();
            let divs = SenseAnnotation.createDiv();
            SenseAnnotation.setJson(elementi);
            SenseAnnotation.setDiv(divs, elementi);
            quickstart.StartBody.end(form, quickstart.StartBody.createArray(divs));
        }
    }
    SenseAnnotation.SERVLET_URL = "senseAnnotation.jsp";
    SenseAnnotation.REST_URL = "nextExample.jsp";
    quickstart.SenseAnnotation = SenseAnnotation;
    SenseAnnotation["__class"] = "quickstart.SenseAnnotation";
})(quickstart || (quickstart = {}));
quickstart.SenseAnnotation.main(null);
