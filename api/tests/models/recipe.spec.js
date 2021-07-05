const { Recipe, Type, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { v4: uuidv4 } = require('uuid');

describe('Models:', () => {

    afterAll(async function() {
        await conn.sync({ force: true });
        conn.close();
    })

    describe('Recipes model', function () {
        beforeEach(async function() {
        await Recipe.sync({ force: true });
        });

        describe('Validations', function () {

            it('Must not be created if id, title and summary are not specified', function(done) {
                Recipe.create({})
                .then(() => done('Must not be created'))
                .catch(() => done());
            });

            it('Must not be created if ID is not an UUID', function(done) {
                Recipe.create({title: 'TestTitle', summary:'TestSummary', id: 5 })
                .then(() => done('Must not be created'))
                .catch(() => done());
            });

            it('Must not be created if title is not a string', function(done) {
                Recipe.create({title: ['TestTitle'], summary:'TestSummary', id: uuidv4() })
                .then(() => done('Must not be created'))
                .catch(() => done());
            });

            it('Must not be created if summary is not a string', function(done) {
                Recipe.create({title: 'TestTitle', summary:{summary: 'TestSummary'}, id: uuidv4() })
                .then(() => done('Must not be created'))
                .catch(() => done());
            });

            it('Must be created if title, summart and id are specified', function() {
                return Recipe.create({title: 'TestTitle', summary:'TestSummary', id: uuidv4() })
                .then(recipe => {
                    expect(recipe).to.exist
                })
            });

        });
    });

    describe('Types model', function () {
        beforeEach(async function() {
        await Type.sync({ force: true });
        });

        describe('Validations', function () {

            it('Must not be created if id and name are not specified', function(done) {
                Type.create({})
                .then(() => done('Must not be created'))
                .catch(() => done());
            });

            it('Must not be created if ID is not an UUID', function(done) {
                Type.create({name: 'ketogenic', id: 'im Not An UUID'})
                .then(() => done('Must not be created'))
                .catch(() => done());
            });

            it('Must not be created if name is not a String', function(done) {
                Type.create({name: ['Im an Array'], id: uuidv4()})
                .then(() => done('Must not be created'))
                .catch(() => done());
            });

            it('Must be created if ID and name are specified with the correct datatype', function() {
                return Type.create({name: 'ketogenic', id: uuidv4() })
                .then(type => {
                    expect(type).to.exist
                })
            });

        });
    });
 
});

