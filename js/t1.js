async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function test(){
    try {
        var date = '2022-05-02T2022-05-04'
        var arrDays = []
        var table1 = document.getElementsByClassName('table-condensed')[0]
        var table2 = document.getElementsByClassName('table-condensed')[1]
        var tds1 = table1.getElementsByTagName('td')
        var tds2 = table2.getElementsByTagName('td')
        var dateInicio = new Date(date.split('T')[0]).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
        var dateFim = new Date(date.split('T')[1]).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
        var arrDate1 = dateInicio.split('/')
        var arrDate2 = dateFim.split('/')
        debugger

        // caso o dia esteja no mes anterior, voltar um mes
        if (parseInt(arrDate1[1]) < parseInt(arrDate2[1]) || parseInt(arrDate1[2]) < parseInt(arrDate2[2])) {
            var el = table1.querySelector('.icon-arrow-left12')
            if (!el)
                return 'Botão "Voltar" do calendário "Data de Criação não encontrado"'
            el.click()
        }
    
        await sleep(1000)
    
        for (let i = 0; i < tds1.length; i++) {
            var td = tds1[i]
            if (parseInt(td.innerText) == parseInt(arrDate1[0]) && td.className.split(' ').indexOf('past') == -1) {
                arrDays.push(td)
                break
            }
        }
    
        for (let i = 0; i < tds2.length; i++) {
            var td = tds2[i]
            if (parseInt(td.innerText) == parseInt(arrDate2[0]) && td.className.split(' ').indexOf('past') == -1) {
                arrDays.push(td)
                break
            }
        }
        
        if (arrDays.length == 2) {
            arrDays[0].click()
            arrDays[1].click()
        } else {
            return 'Data inicio e fim não encontradas em "Data de Criação"'
        }    
        return 'sucesso'
    } catch (error) {
        return 'ERRO: ' + error + ' | DETALHES: ' + error.message
    }
}

console.log(await test())