import { test, expect } from '@playwright/test'

test('Comprar Passagem', async ({ page }) => {

    await page.goto('https://www.blazedemo.com')

    await page.locator('select[name="fromPort"]').selectOption("São Paolo")
    await page.locator('select[name="toPort"]').selectOption("London")
    await page.locator('.btn-primary').click()

    await expect(page).toHaveURL(/reserve\.php/)
    await expect(page.locator('h3')).toHaveText('Flights from São Paolo to London:')

    await page.getByRole('row', { name: 'Choose This Flight 9696 Aer Lingus	5:27 AM	8:22 PM	$200.98' }).getByRole('button').click()

    await expect(page).toHaveURL(/purchase\.php/)
    await expect(page.locator('h2')).toHaveText('Your flight from TLV to SFO has been reserved.')

    await page.locator('#inputName').fill('Allain')
    await page.locator('#cardType').selectOption('amex')
    await page.locator('#rememberMe').check()

    await page.locator('.btn-primary').click()

    await expect(page).toHaveURL(/confirmation\.php/)
    await expect(page.locator('h1')).toHaveText('Thank you for your purchase today!')

    await expect(page.getByRole('row', {name: 'Amount	555 USD'})).toBeVisible()

})

