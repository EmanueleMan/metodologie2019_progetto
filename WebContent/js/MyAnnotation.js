/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class MyAnnotation extends quickstart.StartBody {
        /*private*/ static createLabel() {
            let diz = ({});
            let pagina = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("MY ANNOTATION").setCss("font-size", "40px").build();
            /* put */ (diz["pagina"] = pagina);
            let consegna = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Dato il senso di una parola, provare ad indovinare la parola tra quelle date").build();
            $(consegna).css("font-size", "25px");
            $(consegna).css("font-style", "italic");
            /* put */ (diz["consegna"] = consegna);
            let sense = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").build();
            $(sense).css("font-weight", "bold");
            /* put */ (diz["sense"] = sense);
            let wordOne = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("checkone").build();
            $(wordOne).css("position", "relative");
            $(wordOne).css("left", "30px");
            $(wordOne).css("bottom", "26px");
            /* put */ (diz["wordOne"] = wordOne);
            let wordTwo = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("checktwo").build();
            $(wordTwo).css("position", "relative");
            $(wordTwo).css("left", "30px");
            $(wordTwo).css("bottom", "26px");
            /* put */ (diz["wordTwo"] = wordTwo);
            let wordThree = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("checkthree").build();
            $(wordThree).css("position", "relative");
            $(wordThree).css("left", "30px");
            $(wordThree).css("bottom", "26px");
            /* put */ (diz["wordThree"] = wordThree);
            let wordFour = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setLinkage("checkfour").build();
            $(wordFour).css("position", "relative");
            $(wordFour).css("left", "30px");
            $(wordFour).css("bottom", "26px");
            /* put */ (diz["wordFour"] = wordFour);
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
            /* put */ (diz["Label"] = MyAnnotation.createLabel());
            /* put */ (diz["Input"] = MyAnnotation.createInput());
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
            let divLink = quickstart.StartBody.createFinalButton(MyAnnotation.SERVLET_URL);
            $(divLink).css("position", "relative");
            $(divLink).css("top", "87px");
            /* put */ (diz["divLink"] = divLink);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "nomePagina")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "pagina"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divTranslation")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "sense"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "consegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divTranslation"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox1")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox1"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "wordOne"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox2")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox2"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "wordTwo"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox3")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox3"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "wordThree"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox4")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox4"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "wordFour"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox1"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox2"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox3"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox4"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divConsegna"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCheckbox"));
        }
        /*private*/ static setJSon(elementi) {
            $.getJSON(MyAnnotation.REST_URL, "task=MY_ANNOTATION", (result, a, ctx) => {
                let json = result;
                let sSense = (json["sense"]);
                let sWord = (json["words"]);
                console.log(sWord);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "sense")).text("Senso: " + sSense);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "wordOne")).text(sWord[0]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox1")).val(sWord[0]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "wordTwo")).text(sWord[1]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox2")).val(sWord[1]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "wordThree")).text(sWord[2]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox3")).attr("value", sWord[2]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "wordFour")).text(sWord[3]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox4")).attr("value", sWord[3]);
                return null;
            });
        }
        static main(args) {
            let form = quickstart.StartBody.start(MyAnnotation.SERVLET_URL);
            $(form).css("margin-right", "30px");
            $(form).css("margin-left", "30px");
            let elementi = MyAnnotation.createElement();
            let divs = MyAnnotation.createDiv();
            MyAnnotation.setJSon(elementi);
            MyAnnotation.setDiv(divs, elementi);
            quickstart.StartBody.end(form, quickstart.StartBody.createArray(divs));
        }
    }
    MyAnnotation.SERVLET_URL = "myAnnotation.jsp";
    MyAnnotation.REST_URL = "nextExample.jsp";
    quickstart.MyAnnotation = MyAnnotation;
    MyAnnotation["__class"] = "quickstart.MyAnnotation";
})(quickstart || (quickstart = {}));
quickstart.MyAnnotation.main(null);
