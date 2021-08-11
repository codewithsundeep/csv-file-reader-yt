        const x = document.querySelector("input");
        x.addEventListener("change", () => {
            const fr = new FileReader();
            fr.onloadend = e => {
                let r = fr.result.split("\n").map(e => {
                    return e.split(",");
                });
                r.forEach(e => {
                    let m = e.map(e => {
                        return `<td>${e}</td>`;
                    }).join("");
                    const ce = document.createElement("tr");
                    ce.innerHTML = m;

                    if (ce.innerText !== "") {
                        document.querySelector("table").append(ce);

                    }


                });

                // console.log(r)
            }
            fr.readAsText(x.files[0]);

        })