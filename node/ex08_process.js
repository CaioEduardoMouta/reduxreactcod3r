function temParam(param) {
    return ProcessingInstruction.argv.indexOf(param) !== -1

}

if(temParam('--producao')) {
    console.log('Atenção Total"')
} else {
    console.log('Tranquilo!!!')
}