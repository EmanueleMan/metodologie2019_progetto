/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class Login extends quickstart.StartBody {
        /*private*/ static createLabel() {
            let diz = ({});
            let descrizioneIniziale = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Benvenuto in FabbricaSemantica").setCss("font-size", "40px").build();
            let descrition1 = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Una volta connesso le verranno sottoposte delle domande.").build();
            let descrition2 = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Non sono altro che semplici pagine nelle quali dovr\u00e0 convalidare una definizione o scriverne una inerente alla consegna data.").build();
            /* put */ (diz["descrizioneIniziale"] = descrizioneIniziale);
            /* put */ (diz["descrition1"] = descrition1);
            /* put */ (diz["descrition2"] = descrition2);
            let descrizioneCredenziali = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Hai gi\u00e0 un account? Accedi usando le tue credenziali").setCss("margin-block", "20px").build();
            /* put */ (diz["descrizioneCredenziali"] = descrizioneCredenziali);
            let registrazione = new quickstart.HTMLLabelElementBuilder().setClassName("form-control-plaintext").setTextContent("Oppure crea subito un nuovo account").build();
            $(registrazione).css("width", "max-content");
            $(registrazione).css("position", "relative");
            $(registrazione).css("left", "550px");
            /* put */ (diz["registrazione"] = registrazione);
            return diz;
        }
        /*private*/ static createAnchor() {
            let diz = ({});
            let link = new quickstart.HTMLAnchorElementBuilder().setName("goToSignup").setClassName("form-control-plaintext").setHref("signup.html").setText("cliccando qui").build();
            $(link).css("color", "white");
            $(link).css("position", "relative");
            $(link).css("width", "max-content");
            $(link).css("bottom", "38px");
            $(link).css("left", "826px");
            $(link).css("text-decoration", "underline");
            /* put */ (diz["link"] = link);
            return diz;
        }
        /*private*/ static createInput() {
            let diz = ({});
            let email = new quickstart.HTMLInputElementBuilder().setClassName("form-input").setType("email").setName("email").setPlaceholder(" E-mail").setCss("border-radius", "10px").build();
            /* put */ (diz["email"] = email);
            let password = new quickstart.HTMLInputElementBuilder().setClassName("form-input").setType("password").setName("password").setPlaceholder(" Password").setCss("border-radius", "10px").build();
            /* put */ (diz["password"] = password);
            let loginButton = new quickstart.HTMLInputElementBuilder().setClassName("btn btn-primary").setType("submit").setName("submit_button").setValue("Accedi").setCss("width", "200px").build();
            /* put */ (diz["loginButton"] = loginButton);
            return diz;
        }
        static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = Login.createLabel());
            /* put */ (diz["Input"] = Login.createInput());
            /* put */ (diz["Anchor"] = Login.createAnchor());
            return diz;
        }
        static createDiv() {
            let diz = ({});
            let divDescrizioneIniziale = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divDescrizioneIniziale"] = divDescrizioneIniziale);
            let divEmail = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divEmail"] = divEmail);
            let divPassword = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divPassword"] = divPassword);
            let divLogin = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divLogin"] = divLogin);
            let divDescrizione = new quickstart.HTMLDivElementBuilder().build();
            $(divDescrizione).css("border-style", "solid");
            $(divDescrizione).css("border-color", "gray");
            $(divDescrizione).css("margin-block-start", "80px");
            $(divDescrizione).css("margin-left", "200px");
            $(divDescrizione).css("margin-right", "200px");
            /* put */ (diz["divDescrizione"] = divDescrizione);
            let divLink = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divLink"] = divLink);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescrizioneIniziale")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "descrizioneIniziale"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "descrition1"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "descrition2"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divEmail")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "email"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divPassword")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "password"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLogin")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "loginButton"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescrizione")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "descrizioneCredenziali"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divEmail"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divPassword"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLogin"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLink")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "registrazione"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Anchor"), "link"));
        }
        static createArray(divs) {
            let array = [/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescrizioneIniziale"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescrizione"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLink")];
            return array;
        }
        static main(args) {
            let form = quickstart.StartBody.start(Login.SERVLET_URL);
            $(form).css("text-align", "center");
            let elementi = Login.createElement();
            let divs = Login.createDiv();
            Login.setDiv(divs, elementi);
            quickstart.StartBody.end(form, Login.createArray(divs));
        }
    }
    Login.SERVLET_URL = "login.jsp";
    quickstart.Login = Login;
    Login["__class"] = "quickstart.Login";
})(quickstart || (quickstart = {}));
quickstart.Login.main(null);
