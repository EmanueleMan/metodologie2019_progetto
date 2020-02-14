/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class Signup extends quickstart.StartBody {
        /*private*/ static createLabel() {
            let diz = ({});
            let compilazione = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("compila il seguente modulo per registrarti").build();
            $(compilazione).css("font-size", "40px");
            /* put */ (diz["compilazione"] = compilazione);
            let insEmail = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("inserisci la tua E-mail").build();
            /* put */ (diz["insEmail"] = insEmail);
            let insPassword = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Scgeli una password").build();
            /* put */ (diz["insPassword"] = insPassword);
            let insRipetiPassword = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("ripeti la password").build();
            $(insRipetiPassword).css("width", "max-content");
            /* put */ (diz["insRipetiPassword"] = insRipetiPassword);
            let lingue = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Scegli la tua madrelingua:").build();
            /* put */ (diz["lingue"] = lingue);
            let italiano = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Italiano").setLinkage("checkboxIta").build();
            $(italiano).css("position", "relative");
            $(italiano).css("left", "25px");
            /* put */ (diz["italiano"] = italiano);
            let inglese = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Inglese").setLinkage("checkboxEng").build();
            $(inglese).css("position", "relative");
            $(inglese).css("left", "25px");
            /* put */ (diz["inglese"] = inglese);
            let descrizione = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("COMPILA SOLO SE PARLI ALTRE LINGUE").build();
            /* put */ (diz["descrizione"] = descrizione);
            let descAltreLingue = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Scrivi un\'altra lingua che parli").build();
            $(descAltreLingue).css("position", "relative");
            $(descAltreLingue).css("top", "27px");
            /* put */ (diz["descAltreLingue"] = descAltreLingue);
            let scegliLivelloLingua = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Seleziona il livello della nuova lingua").build();
            $(scegliLivelloLingua).css("position", "relative");
            $(scegliLivelloLingua).css("top", "27px");
            /* put */ (diz["scegliLivelloLingua"] = scegliLivelloLingua);
            return diz;
        }
        /*private*/ static createSelect() {
            let diz = ({});
            let select = new quickstart.HTMLSelectElementBuilder().setName("livelloAltraLingua").build();
            $(select).css("position", "relative");
            $(select).css("left", "290px");
            quickstart.StartBody.takeOption(select);
            /* put */ (diz["select"] = select);
            return diz;
        }
        /*private*/ static createInput() {
            let diz = ({});
            let email = new quickstart.HTMLInputElementBuilder().setClassName("form-input").setType("email").setName("emailSignup").setPlaceholder(" E-mail").build();
            $(email).css("border-radius", "10px");
            /* put */ (diz["email"] = email);
            let password = new quickstart.HTMLInputElementBuilder().setClassName("form-input").setType("password").setName("passwordSignup").setPlaceholder(" Password").setCss("border-radius", "10px").build();
            /* put */ (diz["password"] = password);
            let ripetiPassword = new quickstart.HTMLInputElementBuilder().setClassName("form-input").setType("password").setName("ripetiPassword").setPlaceholder(" Ripeti password").setCss("border-radius", "10px").build();
            /* put */ (diz["ripetiPassword"] = ripetiPassword);
            let checkbox1 = new quickstart.HTMLInputElementBuilder().setType("checkbox").setName("checkboxIta").setId("checkboxIta").setValue("italiano").build();
            $(checkbox1).css("position", "relative");
            $(checkbox1).css("left", "5px");
            $(checkbox1).css("bottom", "24px");
            /* put */ (diz["checkbox1"] = checkbox1);
            let checkbox2 = new quickstart.HTMLInputElementBuilder().setType("checkbox").setName("checkboxEng").setId("checkboxEng").setValue("inglese").build();
            $(checkbox2).css("position", "relative");
            $(checkbox2).css("left", "5px");
            $(checkbox2).css("bottom", "23px");
            /* put */ (diz["checkbox2"] = checkbox2);
            let signupButton = new quickstart.HTMLInputElementBuilder().setName("signup").setClassName("btn btn-primary").setType("submit").setValue("Signup").build();
            $(signupButton).css("float", "right");
            /* put */ (diz["signupButton"] = signupButton);
            return diz;
        }
        /*private*/ static createTextArea() {
            let diz = ({});
            let altreLingue = new quickstart.HTMLTextAreaElementBuilder().setClassName("otherLenguage").setName("altreLingue").setPlaceholder("Scrivi qui l\'altra lingua che parli...").build();
            $(altreLingue).css("position", "relative");
            $(altreLingue).css("left", "240px");
            /* put */ (diz["altreLingue"] = altreLingue);
            return diz;
        }
        /*private*/ static createAnchor() {
            let diz = ({});
            let loginButton = new quickstart.HTMLAnchorElementBuilder().setName("login").setClassName("btn btn-primary").setHref("login.html").setText("Login").build();
            /* put */ (diz["loginButton"] = loginButton);
            return diz;
        }
        static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = Signup.createLabel());
            /* put */ (diz["Input"] = Signup.createInput());
            /* put */ (diz["TextArea"] = Signup.createTextArea());
            /* put */ (diz["Option"] = Signup.createSelect());
            /* put */ (diz["Anchor"] = Signup.createAnchor());
            return diz;
        }
        /*private*/ static createDiv() {
            let diz = ({});
            let divInizio = new quickstart.HTMLDivElementBuilder().build();
            $(divInizio).css("text-align", "center");
            /* put */ (diz["divInizio"] = divInizio);
            let divEmail = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divEmail"] = divEmail);
            let divPassword = new quickstart.HTMLDivElementBuilder().build();
            $(divPassword).css("width", "max-content");
            /* put */ (diz["divPassword"] = divPassword);
            let divRipetiPassword = new quickstart.HTMLDivElementBuilder().build();
            $(divRipetiPassword).css("width", "max-content");
            $(divRipetiPassword).css("position", "relative");
            $(divRipetiPassword).css("bottom", "83px");
            $(divRipetiPassword).css("left", "240px");
            /* put */ (diz["divRipetiPassword"] = divRipetiPassword);
            let divCredenziali = new quickstart.HTMLDivElementBuilder().build();
            $(divCredenziali).css("height", "160px");
            $(divCredenziali).css("width", "448px");
            $(divCredenziali).css("position", "relative");
            $(divCredenziali).css("left", "195px");
            $(divCredenziali).css("top", "55px");
            /* put */ (diz["divCredenziali"] = divCredenziali);
            let divDescrizioneLingua = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divDescrizioneLingua"] = divDescrizioneLingua);
            let divLinguaIta = new quickstart.HTMLDivElementBuilder().build();
            $(divLinguaIta).css("position", "relative");
            $(divLinguaIta).css("left", "240px");
            $(divLinguaIta).css("bottom", "53px");
            $(divLinguaIta).css("width", "max-content");
            $(divLinguaIta).css("height", "30px");
            /* put */ (diz["divLinguaIta"] = divLinguaIta);
            let divLinguaEng = new quickstart.HTMLDivElementBuilder().build();
            $(divLinguaEng).css("position", "relative");
            $(divLinguaEng).css("left", "240px");
            $(divLinguaEng).css("bottom", "53px");
            $(divLinguaEng).css("width", "max-content");
            $(divLinguaEng).css("height", "30px");
            /* put */ (diz["divLinguaEng"] = divLinguaEng);
            let divLingua = new quickstart.HTMLDivElementBuilder().build();
            $(divLingua).css("height", "80px");
            $(divLingua).css("width", "448px");
            $(divLingua).css("position", "relative");
            $(divLingua).css("left", "775px");
            $(divLingua).css("bottom", "100px");
            /* put */ (diz["divLingua"] = divLingua);
            let divBlocco = new quickstart.HTMLDivElementBuilder().build();
            $(divBlocco).css("border-style", "solid");
            $(divBlocco).css("border-color", "gray");
            $(divBlocco).css("position", "relative");
            $(divBlocco).css("top", "20px");
            /* put */ (diz["divBlocco"] = divBlocco);
            let divDescription = new quickstart.HTMLDivElementBuilder().build();
            $(divDescription).css("color", "white");
            $(divDescription).css("position", "relative");
            $(divDescription).css("top", "27px");
            $(divDescription).css("text-decoration", "underline");
            /* put */ (diz["divDescription"] = divDescription);
            let divAltreLingue = new quickstart.HTMLDivElementBuilder().build();
            $(divAltreLingue).css("width", "max-content");
            /* put */ (diz["divAltreLingue"] = divAltreLingue);
            let divSelect = new quickstart.HTMLDivElementBuilder().build();
            $(divSelect).css("width", "max-content");
            $(divSelect).css("position", "relative");
            $(divSelect).css("left", "500px");
            $(divSelect).css("bottom", "122px");
            /* put */ (diz["divSelect"] = divSelect);
            let divOtherLenguage = new quickstart.HTMLDivElementBuilder().build();
            $(divOtherLenguage).css("position", "relative");
            $(divOtherLenguage).css("top", "20px");
            /* put */ (diz["divOtherLenguage"] = divOtherLenguage);
            let divAccess = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divAccess"] = divAccess);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divInizio")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "compilazione"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divEmail")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "insEmail"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "email"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divPassword")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "insPassword"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "password"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRipetiPassword")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "insRipetiPassword"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "ripetiPassword"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCredenziali")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divElement"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divPassword"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divRipetiPassword"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescrizioneLingua")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "lingue"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLinguaIta")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "italiano"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox1"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLinguaEng")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "inglese"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "checkbox2"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLingua")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescrizioneLingua"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLinguaIta"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLinguaEng"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divBlocco")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divCredenziali"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLingua"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescription")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "descrizione"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divAltreLingue")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "descAltreLingue"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "TextArea"), "altreLingue"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divSelect")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "scegliLivelloLingua"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Option"), "select"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divOtherLenguage")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescription"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divAltreLingue"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divSelect"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divAccess")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Anchor"), "loginButton"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "signupButton"));
        }
        static createArray(divs) {
            let array = [/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divInizio"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divBlocco"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divOtherLenguage"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divAccess")];
            return array;
        }
        static main(args) {
            let form = quickstart.StartBody.start(Signup.SERVLET_URL);
            $(form).css("margin-left", "80px");
            $(form).css("margin-right", "80px");
            let elementi = Signup.createElement();
            let divs = Signup.createDiv();
            Signup.setDiv(divs, elementi);
            quickstart.StartBody.end(form, Signup.createArray(divs));
        }
    }
    Signup.SERVLET_URL = "signup.jsp";
    quickstart.Signup = Signup;
    Signup["__class"] = "quickstart.Signup";
})(quickstart || (quickstart = {}));
quickstart.Signup.main(null);
