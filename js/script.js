const input_text_El = document.getElementById("numero")
const div_resposta_El = document.getElementById("resposta")

function distribuição_eletrônica_em_ordem_crescente() {
    return [
        {
            nivel: 1,
            camada: "s",
            numero_maximo_de_eletons: 2
        }, {
            nivel: 2,
            camada: "s",
            numero_maximo_de_eletons: 2
        }, {
            nivel: 2,
            camada: "p",
            numero_maximo_de_eletons: 6
        }, {
            nivel: 3,
            camada: "s",
            numero_maximo_de_eletons: 2
        }, {
            nivel: 3,
            camada: "p",
            numero_maximo_de_eletons: 6
        }, {
            nivel: 4,
            camada: "s",
            numero_maximo_de_eletons: 2
        }, {
            nivel: 3,
            camada: "d",
            numero_maximo_de_eletons: 10
        }, {
            nivel: 4,
            camada: "p",
            numero_maximo_de_eletons: 6
        }, {
            nivel: 5,
            camada: "s",
            numero_maximo_de_eletons: 2
        }, {
            nivel: 4,
            camada: "d",
            numero_maximo_de_eletons: 10
        }, {
            nivel: 5,
            camada: "p",
            numero_maximo_de_eletons: 6
        }, {
            nivel: 6,
            camada: "s",
            numero_maximo_de_eletons: 2
        }, {
            nivel: 4,
            camada: "f",
            numero_maximo_de_eletons: 14
        }, {
            nivel: 5,
            camada: "d",
            numero_maximo_de_eletons: 10
        }, {
            nivel: 6,
            camada: "p",
            numero_maximo_de_eletons: 6
        },
        {
            nivel: 7,
            camada: "s",
            numero_maximo_de_eletons: 2
        }, {
            nivel: 5,
            camada: "f",
            numero_maximo_de_eletons: 14
        }, {
            nivel: 6,
            camada: "d",
            numero_maximo_de_eletons: 10
        }, {
            nivel: 7,
            camada: "p",
            numero_maximo_de_eletons: 6
        },
    ]
}

function mostrar_valor_no_div_resposta(subniveis_arr) {
    let arr = []

    subniveis_arr.forEach(subnivel => {
        arr.push(`${subnivel.nivel}${subnivel.camada}${subnivel.numero_maximo_de_eletons}`)
    })

    div_resposta_El.innerText = arr.join(" ")
}

function pegar_distribição_eletronica_do_valor(valor){
    let subniveis_arr = []
    let soma_do_numero_maximo_de_eleton = 0

    for (let index = 0; index < distribuição_eletrônica_em_ordem_crescente().length; index++) {
        if (soma_do_numero_maximo_de_eleton>=valor) continue

        const subnivel = distribuição_eletrônica_em_ordem_crescente()[index];
        soma_do_numero_maximo_de_eleton+=subnivel.numero_maximo_de_eletons
        subniveis_arr.push(subnivel)
    }

    if (soma_do_numero_maximo_de_eleton > valor) {
        subniveis_arr[subniveis_arr.length-1].numero_maximo_de_eletons-=soma_do_numero_maximo_de_eleton-valor
    }

    return subniveis_arr
}

function click() {
    const valor = input_text_El.value || 0
    const subniveis_arr = pegar_distribição_eletronica_do_valor(valor)

    mostrar_valor_no_div_resposta(subniveis_arr)
}


document.querySelector("button").addEventListener("click", click)
document.addEventListener("keydown", (ev) => {
    if(ev.key == "Enter"){
        document.querySelector("button").click()
    }
})