/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class StartBody {
        static start(s) {
            let form = document.createElement("form");
            form.action = s;
            form.method = "POST";
            $("body").css("background-image", "url(\"https://i.pinimg.com/originals/f1/84/33/f184338dea8956a78b0d72dff5895a90.jpg\")");
            $("body").css("margin-top", "30px");
            return form;
        }
        static createArray(divs) {
            let array = [/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "nomePagina"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divFinale"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divLink")];
            return array;
        }
        static takeOption(select) {
            let nessuno = new quickstart.HTMLOptionElementBuilder().setText(" ").setValue(null).build();
            let A1 = new quickstart.HTMLOptionElementBuilder().setText("A1").setValue("A1").build();
            let A2 = new quickstart.HTMLOptionElementBuilder().setText("A2").setValue("A2").build();
            let B1 = new quickstart.HTMLOptionElementBuilder().setText("B1").setValue("B1").build();
            let B2 = new quickstart.HTMLOptionElementBuilder().setText("B2").setValue("B2").build();
            let C1 = new quickstart.HTMLOptionElementBuilder().setText("C1").setValue("C1").build();
            let C2 = new quickstart.HTMLOptionElementBuilder().setText("C2").setValue("C2").build();
            $(select).append(nessuno, A1, A2, B1, B2, C1, C2);
        }
        static end(form, array) {
            for (let i = 0; i < array.length; i++) {
                $(form).append(array[i]);
            }
            $("body").append(form);
        }
        static createFinalButton(s) {
            let next = new quickstart.HTMLInputElementBuilder().setClassName("btn btn-primary").setName("next").setValue("Next").setType("submit").build();
            $(next).css("position", "relative");
            $(next).css("left", "500px");
            let skip = new quickstart.HTMLInputElementBuilder().setClassName("btn btn-primary").setName("skip").setValue("Skip").setType("submit").build();
            $(skip).css("position", "relative");
            $(skip).css("left", "800px");
            let home = new quickstart.HTMLAnchorElementBuilder().setClassName("plain-control-text").setName("home").setHref("home.html").setText("Home").build();
            $(home).css("position", "relative");
            $(home).css("left", "-80px");
            $(home).css("bottom", "500px");
            $(home).css("color", "white");
            $(home).css("text-decoration", "underline");
            let logout = new quickstart.HTMLAnchorElementBuilder().setClassName("plain-control-text").setName("logout").setHref("logout.jsp").setText("Logout").build();
            $(logout).css("position", "relative");
            $(logout).css("left", "1200px");
            $(logout).css("bottom", "500px");
            $(logout).css("color", "white");
            $(logout).css("text-decoration", "underline");
            let divLink = document.createElement("div");
            divLink.className = "form-group";
            $(divLink).append(next, skip, home, logout);
            return divLink;
        }
    }
    quickstart.StartBody = StartBody;
    StartBody["__class"] = "quickstart.StartBody";
})(quickstart || (quickstart = {}));
