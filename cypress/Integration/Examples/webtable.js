describe('TS_1',()=>{
    it('TC1_1',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.table-display tr:nth-child(9)').each(($el,index,$list)=>{
            const pricetxt = $el.text()
            if(pricetxt.includes('25')){
                cy.get('.table-display tr td:nth-child(3)').eq(index).prev().then((coursetxt)=>{
                   const crstxt = coursetxt.text()
                   expect(crstxt).to.equal('Master Selenium Automation in simple Python Language')
                })
            }
        })
    })
})