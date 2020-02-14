/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class Home extends quickstart.StartBody {
        /*private*/ static createImage() {
            let diz = ({});
            let sImg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhUTEhMWFRUVFxgaGBUYFRkVGhgcFxkXFxUWExgaKCggGCYlGxcWLTIiJSkrMi4uFx8zODMsNygwLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAPMA0AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEFBgcIBAP/xAA3EAABAwIDBgYBAwQBBQEAAAABAAIRAyEEEjEFBiJBUWEHEzJxgZGhQrHBFCPw8VIzYoLR4Qj/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A0aiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgkIgzM8v5lRREBERAREQEREBERAREQEREBVtHf29ov8AaoiAiIgKTmkGCCD0NlFEBFOlTmRziw69fa0n4RpJMzJuZMXi5mdf5QfZ2EiiKuZt3uZl/Vwta4u9uILzKpKqxhOgJsTa9gJJ+AD9IIovti6BY4tuRJhxEZgHFuYfIP0V8UBFXKYmLdfeY/Y/SogIiICIiAiKdKm5xAaCSdABJPsAggpNYToCbgWHM6D5g/SzLBbkFjGPxWeXkjyqZDXhw0p5iHS7UkAEMDTmINlufdfw/oZG1KtEU3AObTYwvikwm93Gc7wBmqeqCQDEFBpvcrcJ2LqZKpcx2vlyGmLGXOh5pmJhrmCbXvbZOH8EsMHEukgkQ0VDAjUAwCJ7k9oW18BsujRaG0qbGBogBrQ0D2AsPhetBhGx/DDZlIGcHSJv6i6t8zU0NuSt+3PCmhUg4byaJBuDhKLwQNG+m19TqZ1WxlVBpDanhaQRnwjHRrUw7iyfanm94t0k2g6827uBiaILmNc4TZhBL4sBoIzEzw87ZS+8dT41zgPRnHMDUdwDE/BnovNXw9OowNqNa8EfqbIIdyINxbWfpBxii3b4m+FjA018EA3KCTTmxY1oHCdDAAvyniJHENKlsEhwIIkRoQRyIKCCKrnT/qNLclRAREQVa4jQx7d7FTo1ImRMgjlzFiJBi8aX7hfNEEnPmOwjn1J/nkoqrWk6Cdfxc/hVc0jXsfsSPwUEUREBERAREQFme4eyaxf5lNriZDTldlcy7SAGuF3HhIdcN5Bzy0LE8Fg6lV7adJpc5xAAHcgCToLkXK6C8JNgNhzhTLGUDkkty+ZUApl1UO1eDxwdMr8uguGRbg7CcD/UVG5A1vl0KIENpNAAcb3c4kQXdtTqs4VAqFAJQFYJvz4hMweZlNpfUEtAGrngSWU7EGAeJx0MCHEmNGbT8UdrVXEjFPpNmzKXCG9g71H5JQdSjHMLsoe3N0Jg9LddR9jqF6Q5ca43ejHVgW1cTVeCIOZ5M3Drnndo/wAK9Wy99tpUP+ni6wAFgX5gLQID5AGlkHYJXzc0Fak3A8Z2V3U8PjWZKri1rarLse4kAZm6sJJ5SPZbapuDmhzCCHAEEEEEG4IIsUHnqU4Pbp/I6G+q0p4wbiNAGIoNcCZbYWJEnyoHpmCWW1OTmwDeZdNufZeDaezmV6dWk9stqNIImJta+rTpcXFiNEHGKLJt/wDBtZjHANLHOu5pAEEwc0ixNyHR+pjjzgY04XQUREQEREBFUN17d/i3XVUQERSymJi0/BiJH5H2giiq430jt07CUc0jURp+bj8IKIiINn+Du7rar/6h1i3zmtkGJyMDT8FzuRuO0LfW6ex6WFw7KVMWAEk8yGtbP00AdgFq3wWxzXU2sa2GAOaZcScwNIjtM1KxkAWcObSVuimRyQfRWveLaX9Ph31AC5wADWjVznENaB8kK5krG9/qTnYQw3MA7jAMHIWuDg09TIHzMGIIcw77bYOIxJObMGBrMw9LizNLmgWy5nOy/wDbHVY+vriqeVxER2Lg4iDBkjuD+F8kBERBJjyCCCQQZBFiCNCCt5+A++dWo92DrvLtXMcZJk9XdSZ1uS4c5nRSzLwuxTqGNo1Q3O1xqU3t0JaWtnyolznS4QMsTAm5LQ6scy8r4l/HHYf5/nRfUu4RebC/XuvAwOD41HL+f5+0GrPG7YbS19QMBL2Z2ujia6iSXiehY55i8ufMc1oRdRb/AFeniKOKw9zUpUGuEatNc1Gtt3NNo1njtrK5dQEREBERAUiBAuZkyItFoIPPny5DWbRRAREQVbE3sOwn8I1skDr1MfZOirUqFxlxJMASTNmgBo+AAPhUMWj5v+3RAMWj5v8At05KiIg3r4F41lRppNmKOYwS2bucWuibyHmTAuOdsu46L50gxrF/iVoz/wDPOGLK2Je9rf8Ao08phpMPc42cLgf27ieVwt0bDq5mnSZJItbPxiY7OQXRWLfkD+gxBc7IGsDi6AYDHNeYBtMNtII7HQ35RqU2uBa4AgiCCJBB1BB1QcebR3ZdRcGPr0S8gHy2ebUN3ZYlrC2c0jXUe02JbO27tBjtoVKJYKeBwbqtYU2OdTDgwNDWN4g29Voy6GXkakBa4x1cPe5zWBjTGVgJIaAAGiTc2Ak8zdB8EVXHtGn+7qiAr9uxVNHG0AIeHupTDQ6RUyktE3BGaDEaFWFZjuXsx4NPFFtLJ5tNrcznh0hwa5zALE8Wh5kGwiQ6g3fr+Zh6ToAlgsNLW+NNOWi9oaJtyVo3Qo1GYWk2o3KQ0cMgkCIGYixNp+VegNUGBb1U2Np7QxMuDi1lB0GGjy7io27SYFdsjMJNICRqOZdqUabKr203B7AeFwMyCJXSHi06nS2XiWcUPGYubYl1TENdBPSXAe3XlzRVqFxlxk9fawQRJtp83uqIiAiIgIiICrlMTFuvvMfsfpS8vhzSNYib6STHIXFzrNpgxRz7AchPXU6n9tOgQRU3MEA5gSZ4byI62i/YnRVdUkzAE8gLXEEgaD405QvmgIiIN1+B+Oc0tDmviXYcjLIYWl1dtSodWg53M6A5f+S3Ts7C5SXAmC1rcvdktBHuI+h3nlvw03oZgsSHVnRSuYylwzRlkxJ9JcNDrFpJXTmA2myvSbUpOBa8BzS0zOh1/hBdpUCvM/EhjczrCQNCbkwPyVF206WgeCejQXH6bKDSviJuqcI9tc4qkS+lUpOpVGOa00iHSWuc9xkF7IDWzNxJsdM1aDmgFzSA6SJETBLTHyCPhdbb64mm7A1cwc0ADi9DqcmPNY79BbM5uXNckVKrnXcSddTOpJP5J+0ASYAF9LC5n91BF98LhH1CA1pN4mCRMExbnANtSg+IC2X4TbjvxGMD3mKNEvzuExU/QGMkCM0kz6gIMNlpNj3J3FxOLxLWPouawGXZ5pyOwNyJ1iLWkEhdN7ubAp4RhZT0OW2gENA4WizRYn56AABdogW0UK7gGmTFjfpbVVr1Q1pcdB/JgfkrH95toRgqrxbzA5rXEwA0gh1Rx5NDA91uQ6lBpbxb21UqU3EuPl16jBSblF2Uml9TMeRa+rSFtcpubrVTmx+Oc635K+74baGIqtbTLjQoM8ukXWLgCXPqOGgL3EnQWyjkrFNoj5+7f50QUREQEREBTa+xF7xztI0JHOxP2oIgq50mevQR9AaKi++MrNc6WsyCGjLM+loaTMDUgn51OqrTwjnTlglrM5AvAET9AyegnmIQedFUNP1r25X+wqIJOI5CNO/K5+1FEQFn24viO/BZKVRmakJDnD1RILCBacvGNdHD/jfAUQdIYTfxteiZAqEOLajAHMcDEhjmuHCbhpBkZtC6xPrGPawUv6atQeCS7LXrvp1IBvxCczWkjVsR7grmihWcxwcxxa4aOaS0j2IuF6MZtGpVLnVMrnOMl+UB02Goi3CLe/UoN8b/AG82CGExNN2Kp1alRpp5KVQVCC6AYAInKbwSNFz2iILvu1sJ+LqGm2QGtzOfAIaJAl8kWvyk2sCtyeHXhs9g/vvzMzGwaKb6cgh5ovu8ZoaC5pb6LSFbPB7cmnVAqVDqwOqENcDlqWp0mVLZZAcX5bwQJAN98sYGgACAAAB0AsAg8eztlUKM+VSpskBstYGnK30tJFzF/teyVQlYJ4h77MwdOadQlzDdrA15uSzM4E+lpBEm2ctB0LSGT7b29hsOQyvUDS4EgGTwt9TnAeloMXMCSBMmFpDxb37q1AMM0UzTdxcTXioAC003lpDchzB8NIJy5SdViu9W+OJrllUYjK50yxjyXty52TWqBoDiczsoaYa2LSZWHVHlxLnEkkySTJJOpJ5oIoiIJBtiZGoteTM3HK0deY7xFEQEREBERB9XVpOZ13SNdCByI+Oq+lAPZL8tssgmmHtIJyTxCBfMM3UfTAYcPdDnZWwZcdBYkAnlJAHypYeuPLfTJAHqHDJc4Wa3NBLQA5xiwPPlAed755AdYtN500Hx0CgpyMsc5vYctIOvM/hRMWj5v+3S0IKIiICIiAiIgLIN1tgMxAqPqvcxjZa3K3MXPNOo9o1sAKZJ1mI5yLARpf8A+dj/AJzW5fC7CM/p6D8pOUVHlrTxF763lsflBkgNpxJ/4uHNBs/wwM4FjhTNJj3O8umTmLabTlZJ7taPYRrqstK8WycM2lSZTboxoGkT3XsQWjbWMNKk+roGBxOpuBDRlHqk8heYXLG/m0jWxbyYIa2mxsHNlyMGYZucvLyZvJM3XR3iDjnUcFXcBJa0vnNlIj9Q7jUDnHJctbTfnd5oYym2pcNYRAjhMgekyJy29QIABCDxqocRMHXXvzv8gfSoiAiIgIiICIiAiIg9Labcj8wcHtIiGSNSHCoSRki0cJkzovjTI5ieg5G4secROinRDQ64DwJtmygxprBI7CCexUa2sZcsQCD1FjM6X5IK1M4ABJgtEXkEE5otbXlyM81ANtNrEDUTedBqdNfbqEzmIkxrHL3hRQVcZJtHYcuwlUVS7Tt2+b9dVRAREQEREBdA+CGEc3CNrVHAtDXhrRc5c73aWg5nP6ggjnpz8t3+Am13GlWpuAIo5crpuBUJJDuwIt7noIDZ+6u1X1c/nZQ4OtB1Dszm20HCORPpJWRErGaRe3EHic9lTigtADA0GGsNgLxe5N51EXtmKYXQ0zYEawQbhzToR3EoMa8VaQOzcUbE+U+3sJJXMG08WS2nSI4qebMZkOcTJnuLgmYPLqetd5MC3EUH0nGzwWkjUBwLHR/4uIXKe9+HdSxVSg4D+wTTa4OzlzASaJLv1RTLAOjWtECIQWVERAREQEREBERAREQeijRaWzxEtMuAbIDLS6eUG1+oXzbUEkloM8tBqDoI7iB1UA4wRNjqOvuqIJCIOs8rfcnkqNPadf8AdlMtgTYgwNbg2Jtr2nTVU8l0ZspiJmLRMAk+9kEEREBERAREQFft0N56mBquewZm1Glr2zlJHItdBgg9v/YsKkxhJAAJJMAC5JOgAQb22F4oYWrkbWeY1LahDHMubZ4yEaAGZ0Ji8Xva/iPgGYXPQxgJfGUEOc9vEA85SNQHA5SB8jTS2B3FxVRnoPmS3+2IkNdIDnlxDW3jhzZr+kC5v+yPCTF1A1zhLYdmyPvmbmhrczYcCcozAkWdqIKD3bweMNbIaeDJBOtZ7QSIi7AZ+yBF7XtrXau1K2Jf5ld+d8RmIAJEk8UATrqe3RZnvV4VY7DUvOZSe9g9bQWvczo4ZPWO8COiwFzSLEQe9kEUREBERAREQEREBERBPJrcWAOo5xp3vp79EpAZhm0kT7c1QNMEwYGp6e6l5xggmZAGp5RH7c+qD7QTnysbaZjjytJ5EzYQOLW4vdfBzIAMi82m4jqOSoXn2kAGLTEa/Q+VObA5BAEE3uTmILr6+0DhHckPkiIgIiICIiAtkeG27NZ+R1Jn92uS1lcyRh2frqtERmgO9uASM99brpLwiqU6rzVp5ixuGYxhc0NyyR5jQGtA/RTuLcIaPSgz3ZGwqGGY1lNvoEBzuJxjmXH/AEOSuaqqSgLQvjvuQxjhjcKwCQfPpsAF5k18o7vAce7T1K30sJ8WHUaWy8YZFN1VtyAMz3ONOnfrIDQT0QcpoiICIiAiIgIiICIiCbicoBFjcHKJPL1akW9tUDQf1Rabg3M6NieXWOfyY4CZE9LwB3PX/NVQkQBF5MmdRaBHaD9oKOaRr2P2JH4VERAREQEREBERAXSPgTWY/BNdwyIZDY4XMNSxE2JY5rjYSXE3JK5uXt2XtbEYZxfh6z6TiIJY4tkdDGvyg7VRaG3N8WMdwNqvo4pvNrv7OJ9gbUql9IuRBMXjO9p+K+BoVDSdmL2iDxMADwJLDmIjlDoynML6wGfLUHjfvFTGGxOFE1HONITHDRLXUqhaZvLmuaZsIcI5q27zeNDgT/TPZliwax2eS2Rme/hGVx5NdmiIaNdc74b7Ox7GNfh6THhwc+q2S55Dctp9I1tcnhk8KDFEVWugg9Oon7B1VEBERAREQEREBERAU6dMnTteQAJsJJ0UFMSIcDfUQbiD+EEFNpFrTe97EdOvzKi6OXbXrF/zKPiTGnKdY5SgqG2Jkai15MzccrR15jvEUUmOgyP2B/dBFERBVw7zp/q6oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//Z";
            let img = new quickstart.HTMLImageElementBuilder().setSrc(sImg).setheight(300).setWidth(300).build();
            /* put */ (diz["img"] = img);
            return diz;
        }
        /*private*/ static createLabel() {
            let diz = ({});
            let nomePagina = new quickstart.HTMLLabelElementBuilder().setTextContent("HOME").setClassName("form-control-plaintext").setCss("font-size", "40px").build();
            /* put */ (diz["nomePagina"] = nomePagina);
            let description = new quickstart.HTMLLabelElementBuilder().setTextContent("Benissimo! Adesso clicca sul pulsante \"Start\" per iniziare il test oppure su \"Logout\" per uscire dal tuo account").setClassName("form-control-plaintext").build();
            $(description).css("color", "white");
            /* put */ (diz["description"] = description);
            return diz;
        }
        /*private*/ static createInput() {
            let diz = ({});
            let start = new quickstart.HTMLInputElementBuilder().setClassName("btn btn-primary").setType("submit").setName("startButton").setValue("Start").build();
            $(start).css("position", "relative");
            $(start).css("left", "-200px");
            $(start).css("bottom", "-150px");
            /* put */ (diz["start"] = start);
            let logout = new quickstart.HTMLInputElementBuilder().setClassName("btn btn-primary").setType("submit").setName("logout").setValue("Logout").build();
            $(logout).css("position", "relative");
            $(logout).css("right", "-200px");
            $(logout).css("bottom", "-150px");
            /* put */ (diz["logout"] = logout);
            return diz;
        }
        static createElement() {
            let diz = ({});
            /* put */ (diz["Label"] = Home.createLabel());
            /* put */ (diz["Input"] = Home.createInput());
            /* put */ (diz["Image"] = Home.createImage());
            return diz;
        }
        /*private*/ static createDiv() {
            let diz = ({});
            let divDescription = new quickstart.HTMLDivElementBuilder().build();
            /* put */ (diz["divDescription"] = divDescription);
            let divStart = new quickstart.HTMLDivElementBuilder().build();
            $(divStart).css("position", "relative");
            $(divStart).css("top", "80px");
            /* put */ (diz["divStart"] = divStart);
            return diz;
        }
        static setDiv(divs, elementi) {
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescription")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "nomePagina"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Label"), "description"));
            $(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divStart")).append(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "start"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Image"), "img"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(/* get */ ((m, k) => m[k] === undefined ? null : m[k])(elementi, "Input"), "logout"));
        }
        static createArray(divs) {
            let array = [/* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divDescription"), /* get */ ((m, k) => m[k] === undefined ? null : m[k])(divs, "divStart")];
            return array;
        }
        static main(args) {
            let form = quickstart.StartBody.start(Home.SERVLET_URL);
            $(form).css("text-align", "center");
            let elementi = Home.createElement();
            let divs = Home.createDiv();
            Home.setDiv(divs, elementi);
            quickstart.StartBody.end(form, Home.createArray(divs));
        }
    }
    Home.SERVLET_URL = "logout.jsp";
    quickstart.Home = Home;
    Home["__class"] = "quickstart.Home";
})(quickstart || (quickstart = {}));
quickstart.Home.main(null);
