var table = document.getElementsByClassName('sc-1spczzx-2 bXsQvb sc-kAzzGY csyHXp')[0];
var rows = table.getElementsByTagName('tr')

for (const row of rows) {
    var tds = row.getElementsByTagName('td')
    console.log(tds[3])
}

var bl = true;

function t(numIdTicket) {
    while (true) {
        var table = document.getElementsByClassName('sc-1spczzx-2 bXsQvb sc-kAzzGY csyHXp')[0];
        var rows = table.getElementsByTagName('tr')
    
        for (const row of rows) {
            var tds = row.getElementsByTagName('td')
            var tdCheck = tds[0]
            var tdTextId = tds[3]
            if (tdCheck && tdTextId) {
                if (tdTextId.innerText.replace('#', '').trim() == numIdTicket) {
                    var checkbox = tdCheck.querySelector('div > input')
                    if (checkbox) {
                        checkbox.click()
                        return 'sucesso';
                    }
                }
            }
        }
        var elNextPage = document.querySelectorAll('ul > [data-garden-id="pagination.navigation"]')[1]
        if (elNextPage.style.pointerEvents == 'none') {
            bl = false
           return 'Idticket não encontrado'
        } 
        elNextPage.click()
    }
}

console.log(t('105827'))

var btnFind = document.querySelector('ul > li[data-garden-id="pagination.navigation"]:nth-child(9)')
if (!btnFind) {
    return 'Não foi possível encontrar a caixa de pesquisa'
}
return 'ava'

btnFind.value = '${txStatus}'
return 'sucesso'






try {
    var elCaixaMsg = document.querySelector('div[data-simplified-get-started-tour-id="replyInput"]')
var elItemNaoEncontrado = document.getElementsByClassName('sc-1ff66ry-0 hmhARl sc-chPdSV dQBIkj')[0]
    if (elCaixaMsg) {
        return 'sucesso'
    } else if (elItemNaoEncontrado){
        if (elItemNaoEncontrado.innerText == 'Nenhuma ocorrência encontrada') {
            return 'Nenhuma ocorrência encontrada'
        }
    }
    return 'nada encontrado'
} catch (error) {
    return 'ERRO: '+ error + ' MOTIVO: '+ error.message
}