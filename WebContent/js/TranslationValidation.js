/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class TranslationValidation extends quickstart.StartBody {
        /*private*/ static createLabel() {
            let diz = ({});
            let pagina = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("TRANSLATION VALIDATION").setCss("font-size", "40px").build();
            /* put */ (diz["pagina"] = pagina);
            let consegna = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Data una parola e una sua definizione in inglese, selezionare la traduzione giusta").build();
            $(consegna).css("font-size", "25px");
            $(consegna).css("font-style", "italic");
            /* put */ (diz["consegna"] = consegna);
            let word = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(word).css("font-weight", "bold");
            /* put */ (diz["word"] = word);
            let description = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(description).css("font-weight", "bold");
            /* put */ (diz["description"] = description);
            let translationsOne = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("one").build();
            $(translationsOne).css("position", "relative");
            $(translationsOne).css("left", "30px");
            $(translationsOne).css("bottom", "26px");
            /* put */ (diz["translationsOne"] = translationsOne);
            let translationsTwo = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("two").build();
            $(translationsTwo).css("position", "relative");
            $(translationsTwo).css("left", "30px");
            $(translationsTwo).css("bottom", "26px");
            /* put */ (diz["translationsTwo"] = translationsTwo);
            let translationsThree = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("three").build();
            $(translationsThree).css("position", "relative");
            $(translationsThree).css("left", "30px");
            $(translationsThree).css("bottom", "26px");
            /* put */ (diz["translationsThree"] = translationsThree);
            let translationsNull = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Nessuna delle precedenti").setLinkage("nll").build();
            $(translationsNull).css("position", "relative");
            $(translationsNull).css("left", "30px");
            $(translationsNull).css("bottom", "26px");
            /* put */ (diz["translationsNull"] = translationsNull);
            return diz;
        }
        /*private*/ static createInput() {
            let diz = ({});
            let checkbox1 = new quickstart.HTMLInputElementBuilder().setType("checkbox").setName("checkboxOne").setId("one").build();
            /* put */ (diz["checkbox1"] = checkbox1);
            let checkbox2 = new quickstart.HTMLInputElementBuilder().setType("checkbox").setId("two").setName("checkboxTwo").build();
            /* put */ (diz["checkbox2"] = checkbox2);
            let checkbox3 = new quickstart.HTMLInputElementBuilder().setType("checkbox").setId("three").setName("checkboxTree").build();
            /* put */ (diz["checkbox3"] = checkbox3);
            let checkboxNull = new quickstart.HTMLInputElementBuilder().setType("checkbox").setName("checkboxFour").setId("nll").setValue("nessuna").build();
            /* put */ (diz["checkboxNull"] = checkboxNull);
            return diz;
        }
        static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = TranslationValidation.createLabel());
            /* put */ (diz["Input"] = TranslationValidation.createInput());
            return diz;
        }
        /*private*/ static createDiv() {
            let diz = ({});
            let nomePagina = new quickstart.HTMLDivElementBuilder().build();
            $(nomePagina).css("text-align", "center");
            /* put */ (diz["nomePagina"] = nomePagina);
            let divParola = new quickstart.HTMLDivElementBuilder().build();
            $(divParola).css("margin-left", "30px");
            /* put */ (diz["divParola"] = divParola);
            let divConsegna = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divConsegna"] = divConsegna);
            let divCheckbox1 = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divCheckbox1"] = divCheckbox1);
            let divCheckbox2 = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divCheckbox2"] = divCheckbox2);
            let divCheckbox3 = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divCheckbox3"] = divCheckbox3);
            let divCheckboxNull = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divCheckboxNull"] = divCheckboxNull);
            let divCheckbox = new quickstart.HTMLDivElementBuilder().build();
            $(divCheckbox).css("margin-left", "60px");
            $(divCheckbox).css("margin-top", "30px");
            /* put */ (diz["divCheckbox"] = divCheckbox);
            let divFinale = new quickstart.HTMLDivElementBuilder().build();
            $(divFinale).css("position", "relative");
            $(divFinale).css("top", "80px");
            /* put */ (diz["divFinale"] = divFinale);
            let divLink = quickstart.StartBody.createFinalButton(TranslationValidation.SERVLET_URL);
            $(divLink).css("position", "relative");
            $(divLink).css("top", "84px");
            /* put */ (diz["divLink"] = divLink);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "nomePagina")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "pagina"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divParola")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "consegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divParola"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox1")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox1"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "translationsOne"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox2")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox2"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "translationsTwo"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox3")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox3"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "translationsThree"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckboxNull")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkboxNull"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "translationsNull"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox1"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox2"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox3"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckboxNull"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox"));
        }
        /*private*/ static setJSon(elementi) {
            $.getJSON(TranslationValidation.REST_URL, "task=TRANSLATION_VALIDATION", (result, a, ctx) => {
                let json = result;
                let sWord = (json["word"]);
                let sDescription = (json["description"]);
                let sTranslations = (json["translations"]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word")).text("Parola: " + sWord);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description")).text("Descrizione: " + sDescription);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "translationsOne")).text(sTranslations[0]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox1")).val(sTranslations[0]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "translationsTwo")).text(sTranslations[1]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox2")).val(sTranslations[1]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "translationsThree")).text(sTranslations[2]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox3")).val(sTranslations[2]);
                return null;
            });
        }
        static main(args) {
            let form = quickstart.StartBody.start(TranslationValidation.SERVLET_URL);
            $(form).css("margin-right", "30px");
            $(form).css("margin-left", "30px");
            let elementi = TranslationValidation.createElement();
            let divs = TranslationValidation.createDiv();
            TranslationValidation.setJSon(elementi);
            TranslationValidation.setDiv(divs, elementi);
            quickstart.StartBody.end(form, quickstart.StartBody.createArray(divs));
        }
    }
    TranslationValidation.SERVLET_URL = "translationValidation.jsp";
    TranslationValidation.REST_URL = "nextExample.jsp";
    quickstart.TranslationValidation = TranslationValidation;
    TranslationValidation["__class"] = "quickstart.TranslationValidation";
})(quickstart || (quickstart = {}));
quickstart.TranslationValidation.main(null);
