describe("HOME PAGE", () => {


    before(() => {
        cy.visit('http://localhost:3000')
    })

    it("should render root element", () => {
        cy.get('#root').should('be.visible')
    })

    it("should exist modal element", () => {
        cy.get('#modal').should('exist')
    })


    it("location should be has some factors", () => {
        cy.location().should((loc) => {
            expect(loc.host).to.eq('localhost:3000')
            expect(loc.hostname).to.eq('localhost')
            expect(loc.origin).to.eq('http://localhost:3000')
            expect(loc.port).to.eq('3000')
            expect(loc.protocol).to.eq('http:')
        })
    })


    it('should render cards', () => {
        cy.get('[data-test="app-cards"]').children('[data-test="app-card"]').should('have.length', 5)
    })


    it("should each card has child", () => {
        cy.get('[data-test="app-cards"]').children('[data-test="app-card"]').each(($card) => {
            cy.wrap($card).children().should('have.length.gte', 1)
        })
    })


    it('should exist search input', () => {
        cy.get('[data-test="search-input"]').should('exist')
    })

    it('should search and take effect on cards', () => {
        cy.get('[data-test="search-input"]').type('sunt').then(() => {
            cy.get('[data-test="app-cards"]').find('[data-test="app-card"]').eq(0).children().should('have.length', 1)
            cy.get('[data-test="app-cards"]').find('[data-test="app-card"]').eq(1).children().should('have.length', 0)
            cy.get('[data-test="app-cards"]').find('[data-test="app-card"]').eq(2).children().should('have.length', 1)
            cy.get('[data-test="app-cards"]').find('[data-test="app-card"]').eq(3).children().should('have.length', 1)
            cy.get('[data-test="app-cards"]').find('[data-test="app-card"]').eq(4).children().should('have.length', 1)
        }).then(()=>{
            cy.get('[data-test="search-input"]').clear().then(()=>{
                cy.get('[data-test="app-cards"]').children('[data-test="app-card"]').each(($card) => {
                    cy.wrap($card).children().should('have.length.gte', 1)
                })
            })

        })
    })


    it('should open modal when click on title and show body and title', () => {
        cy.get('[data-test="app-cards"]').find('[data-test="app-card"]').eq(0).children('[data-test="card-title"]').eq(0).invoke('text').as('selectedTitle').then(() => {
            cy.get('[data-test="app-cards"]').find('[data-test="app-card"]').eq(0).children('[data-test="card-title"]').eq(0).click().then(() => {
                cy.get('[data-test="app-modal"]').should('be.visible').then(function () {
                    cy.get('[data-test="modal-content-title"]').invoke("text").should('equal', this.selectedTitle).then(()=>{
                        cy.get('[data-test="modal-content-body"]').should('have.length.gte',1).then(()=>{
                            cy.get('[data-test="modal-close-button"]').click().then(()=>{
                                cy.get('[data-test="app-modal"]').should('not.be.visible')
                            })
                        })
                    })
                })
            })
        })

    })

})