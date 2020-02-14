/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class Finish extends quickstart.StartBody {
        /*private*/ static createLabel() {
            let diz = ({});
            let finish1 = new quickstart.HTMLLabelElementBuilder().setTextContent("Complimenti!").setClassName("form-control-plaintext").setCss("font-size", "40px").build();
            /* put */ (diz["finish1"] = finish1);
            let finish2 = new quickstart.HTMLLabelElementBuilder().setTextContent("Hai completato tutti i Task con successo").setClassName("form-control-plaintext").setCss("font-size", "40px").build();
            /* put */ (diz["finish2"] = finish2);
            let save = new quickstart.HTMLLabelElementBuilder().setTextContent("Clicca su \"Save\" per uscire salvando i tuoi task,in modo tale da salvare i tuoi progressi per la prossima volta che effettuerai l\'accesso").setClassName("form-control-plaintext").setCss("font-size", "22px").build();
            /* put */ (diz["save"] = save);
            let exit = new quickstart.HTMLLabelElementBuilder().setTextContent("Oppure su \"Exit\" per uscire senza salvare nulla").setClassName("form-control-plaintext").setCss("font-size", "22px").build();
            /* put */ (diz["exit"] = exit);
            return diz;
        }
        /*private*/ static createInput() {
            let diz = ({});
            let logout = new quickstart.HTMLInputElementBuilder().setClassName("btn btn-primary").setName("save").setValue("Save").setType("submit").build();
            /* put */ (diz["logout"] = logout);
            let restart = new quickstart.HTMLInputElementBuilder().setClassName("btn btn-primary").setName("delete").setValue("Exit").setType("submit").build();
            /* put */ (diz["restart"] = restart);
            return diz;
        }
        static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = Finish.createLabel());
            /* put */ (diz["Input"] = Finish.createInput());
            return diz;
        }
        /*private*/ static createDiv() {
            let diz = ({});
            let divDescrizione = new quickstart.HTMLDivElementBuilder().build();
            $(divDescrizione).css("text-align", "center");
            /* put */ (diz["divDescrizione"] = divDescrizione);
            let divSave = new quickstart.HTMLDivElementBuilder().build();
            $(divSave).css("text-align", "center");
            $(divSave).css("width", "800px");
            $(divSave).css("position", "relative");
            $(divSave).css("top", "80px");
            /* put */ (diz["divSave"] = divSave);
            let divExit = new quickstart.HTMLDivElementBuilder().build();
            $(divExit).css("text-align", "center");
            $(divExit).css("width", "800px");
            $(divExit).css("position", "relative");
            $(divExit).css("top", "150px");
            $(divExit).css("left", "580px");
            /* put */ (diz["divExit"] = divExit);
            let divButton = new quickstart.HTMLDivElementBuilder().build();
            $(divButton).css("text-align", "center");
            /* put */ (diz["divButton"] = divButton);
            let divFinale = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divFinale"] = divFinale);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescrizione")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "finish1"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "finish2"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divSave")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "save"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "logout"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divExit")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "exit"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "restart"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divButton")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divSave"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divExit"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescrizione"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divButton"));
        }
        static createArray(divs) {
            let array = [/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale")];
            return array;
        }
        /*private*/ static setJSon(elementi) {
            $.getJSON(Finish.REST_URL, "task=TRANSLATION_ANNOTATION", (result, a, ctx) => {
                let json = result;
                let sWord = (json["word"]);
                let sDescription = (json["description"]);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "word")).text("Parola: " + sWord);
                $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description")).text("Descrizione: " + sDescription);
                return null;
            });
        }
        static main(args) {
            let form = quickstart.StartBody.start(Finish.SERVLET_URL);
            $(form).css("margin-right", "30px");
            $(form).css("margin-left", "30px");
            let elementi = Finish.createElement();
            let divs = Finish.createDiv();
            Finish.setJSon(elementi);
            Finish.setDiv(divs, elementi);
            quickstart.StartBody.end(form, Finish.createArray(divs));
        }
    }
    Finish.SERVLET_URL = "finish.jsp";
    Finish.REST_URL = "nextExample.jsp";
    quickstart.Finish = Finish;
    Finish["__class"] = "quickstart.Finish";
})(quickstart || (quickstart = {}));
quickstart.Finish.main(null);
