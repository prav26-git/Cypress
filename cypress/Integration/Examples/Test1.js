describe('TS_1',function(){
    it('TC_1_Radiobutton',function(){
        cy.visit('/AutomationPractice/')
        cy.viewport(2048, 1080) //2048 × 1080

        cy.get('[type="radio"]').check('radio1').should('be.checked')
    })

    it('TC_2_Staticdropdown',function(){
        cy.visit('/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option1').should('eq', 'option1')
    })
})
    


