export const getTableName = (gameVersion:string, pokedex:string):string => {
    let table = ``
    switch(gameVersion){
        case 'black-2':
            table += 'black2'
            break
        case 'white-2':
            table += 'white2'
            break
        case 'ultra-sun':
            table += 'ultrasun'
            break
        case 'ultra-moon':
            table += 'ultramoon'
            break
        case 'alpha-sapphire':
            table += 'alphasapphire'
            break
        case 'omega-ruby':
            table += 'omegaruby'
            break
        default:
            table += gameVersion
            break
    }
    switch(pokedex){
        case 'original-johto':
            table += 'johto'
            break
        case 'original-sinnoh':
            table += 'sinnoh'
            break
        case 'extended-sinnoh':
            table += 'sinnoh'
            break
        case 'updated-johto':
            table += 'johto'
            break
        case 'original-unova':
            table += 'unova'
            break
        case 'updated-unova':
            table += 'unova'
            break
        case 'kalos-central':
            table += 'kaloscentral'
            break
        case 'kalos-coastal':
            table += 'kaloscoastal'
            break
        case 'kalos-mountain':
            table += 'kalosmountain'
            break
        case 'updated-hoenn':
            table += 'updatedhoenn'
            break
        case 'original-alola':
            table += 'alola'
            break
        case 'original-melemele':
            table += 'melemele'
            break
        case 'original-akala':
            table += 'akala'
            break
        case 'original-ulaula':
            table += 'ulaula'
            break
        case 'original-poni':
            table += 'poni'
            break
        case 'updated-alola':
            table += 'alola'
            break
        case 'updated-melemele':
            table += 'melemele'
            break
        case 'updated-akala':
            table += 'akala'
            break
        case 'updated-ulaula':
            table += 'ulaula'
            break
        case 'updated-poni':
            table += 'poni'
            break
        default:
            table += pokedex
            break      
    }
    return table
}