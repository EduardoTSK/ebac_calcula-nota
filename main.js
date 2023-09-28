const form = document.getElementById('form')
const imgApv = '<img src="./images/aprovado.png" alt="Emoji festejando"/>'
const imgRpv = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>'
const atvs = []
const notas = []
const spanApv = '<span class="result apv">Aprovado</span>'
const spanRpv = '<span class="result rpv">Reprovado</span>'
const notaMin = parseFloat(prompt("Digite a note mínima"))

let linhaS = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    addLinha()
    attTable()
    attMF()
})

function addLinha() {
    const nAtv = document.getElementById('name')
    const nota = document.getElementById('nota')

    if (atvs.includes(nAtv.value)) {
        alert(`A atividade: ${nAtv.value} já foi inserida`)
    } else {
        atvs.push(nAtv.value)
        notas.push(parseFloat(nota.value))

        let linha = '<tr>'
        linha += `<td>${nAtv.value}</td>`
        linha += `<td>${nota.value}</td>`
        linha += `<td>${nota.value >= notaMin ? imgApv : imgRpv}</td>`
        linha += '<tr>'

        linhaS += linha
    }

    nAtv.value = ''
    nota.value = ''
}

function attTable() {
    const tBody = document.querySelector('tbody')
    tBody.innerHTML = linhaS
}

function attMF() {
    const mediaF = calcMF()

    document.getElementById('mf-value').innerHTML = mediaF.toFixed(2)
    document.getElementById('mf').innerHTML = mediaF >= notaMin ? spanApv : spanRpv
}

function calcMF() {
    let sumNotas = 0

    for (let i = 0; i < notas.length; i++) {
        sumNotas += notas[i]
    }

    return sumNotas / notas.length
}