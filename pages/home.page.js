class HomePage{

    constructor(page){
        this.page = page
        this.origem = '[name="fromPort"]'
        this.destino = '[name="toPort"]'
        this.btnFindFlights = '.btn.btn-primary'
    }

    async selecionar_viagem(origem, destino){
        await this.page.locator(this.origem).selectOption(origem)
        await this.page.locator(this.destino).selectOption(destino)
        await this.page.locator(this.btnFindFlights).click()
        
    }
}