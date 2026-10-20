class PurchasePage {

    constructor(page){
        this.page = page
        this.url = 'purchase'
        this.titulosecao = 'h2'
        this.name = '#inputName'
        this.cardType = '[name="cardType"]'
        this.rememberMe = '#rememberMe'
        this.btn_purchase_flight = '.btn.btn-primary'
    }
 
    async preencher_nome(nome) {
        await this.page.locator(this.name).fill(nome)
    }
 
    async selecionar_bandeira(bandeira) {
        await this.page.locator(this.cardtype).selectOption(bandeira)
    }
 
    async lembrar_de_mim() {
        await this.page.locator(this.rememberMe).check()
    }
 
    async clicar_para_concluir_compra() {
        await this.page.locator(this.btn_purchase_flight).click()
    }

}

module.exports = PurchasePage