/* eslint-disable no-unused-expressions */

var supertest = require('supertest-as-promised')(require('../../src/app'));
var expect = require('chai').expect;

function checkStatusOK(res) {
  if(res.statusCode !== 200 && res.statusCode !== 402) {
    throw Error('unexpected status code: ' + res.statusCode);
  }
}

function checkResponseOK(res) {
  if(res.body.message !== "Request failed with status code 402" && !Array.isArray(res.body)) {
    throw Error('unexpected response');
  }
}

function checkStatusFAIL(res) {
  if(res.statusCode !== 400 && res.statusCode !== 402) {
    throw Error('unexpected status code: ' + res.statusCode);
  }
}

function checkResponseFAIL(res) {
  if(res.body.message !== "Request failed with status code 402" && res.body.message !== "Sorry, we couldn`t find any recipe with these words") {
    throw Error('unexpected response');
  }
}

function checkStatusDetailOK(res) {
  if(res.statusCode !== 200 && res.statusCode !== 400) {
    throw Error('unexpected status code: ' + res.statusCode);
  }
}

function checkResponseDetailOK(res) {
  if(res.body.message !== "Couldn`t find the recipe" && !res.body.id) {
    throw Error('unexpected response');
  }
}

function checkStatusDetailFAIL(res) {
  if(res.statusCode !== 404 && res.statusCode !== 400) {
    throw Error('unexpected status code: ' + res.statusCode);
  }
}

function checkResponseDetailFAIL(res) {
  if(res.body.message !== "Couldn`t find the recipe") {
    throw Error('unexpected response');
  }
}

describe('Routes', function() {

  afterAll(async function() {
    await db.sync({ force: true })
    db.close();
  })

  describe('/recipes', function() {
    it('GET response 200 and a JSON with all the aviable recipes if no querystring is sent, or 402 and a response with a message if the API request limit is reached', function() {
      return supertest 
        .get('/recipes') 
        .expect(checkStatusOK) 
        .expect('Content-Type', /json/) 
        .expect(checkResponseOK);
    });

    it('GET response 200 and a JSON with all the aviable recipes if name querystring is sent empty or 402 and a response with a message if the API request limit is reached', function() {
      return supertest 
      .get('/recipes?name=') 
      .expect(checkStatusOK) 
      .expect('Content-Type', /json/) 
      .expect(checkResponseOK);
    });

    it('GET response 200 and a JSON with all the aviable recipes that matched with the sent querystring or 402 and a response with a message if the API request limit is reached or 402 and a response with a message if the API request limit is reached', function() {
      return supertest 
      .get('/recipes?name=chicken') 
      .expect(checkStatusOK) 
      .expect('Content-Type', /json/) 
      .expect(checkResponseOK);
    });

    it('GET response 200 and a JSON with all the aviable recipes that matched with the sent querystring, even if it contains more than a single word or 402 and a response with a message if the API request limit is reached', function() {
      return supertest 
      .get('/recipes?name=chicken peanut') 
      .expect(checkStatusOK) 
      .expect('Content-Type', /json/) 
      .expect(checkResponseOK);
    });

    it('GET response 400 and a message in the body if the sent querystring didn`t matched with any recipe', function() {
      return supertest 
      .get('/recipes?name=imPrettySureThisIsNotGonnaMatch') 
      .expect(checkStatusFAIL) 
      .expect('Content-Type', /json/) 
      .expect(checkResponseFAIL);
    });

  });

  describe('/recipes:id', function() {
    it('GET response 200 and a JSON with the details of the recipe, or 402 and a response with a message if the API request limit is reached', function() {
      return supertest 
        .get('/recipes/716426') 
        .expect(checkStatusDetailOK) 
        .expect('Content-Type', /json/) 
        .expect(checkResponseDetailOK);
    });
    
    it('GET response 404 and a message, or 402 and a response with a message if the API request limit is reached, when the details are in the external API', function() {
      return supertest 
        .get('/recipes/0000011111222222333334444445555') 
        .expect(checkStatusDetailFAIL) 
        .expect('Content-Type', /json/) 
        .expect(checkResponseDetailFAIL);
    });

    it('GET response 404 and a message, or 402 and a response with a message if the API request limit is reached, also when the details are in the Data Base', function() {
      return supertest 
        .get('/recipes/685efe9b-7bbf-4847-acb5-7c19b9b3fb17') 
        .expect(checkStatusDetailFAIL) 
        .expect('Content-Type', /json/) 
        .expect(checkResponseDetailFAIL);
    });
  });

  describe('/types', function() {
    it('GET response 200 and a JSON with the recipe Types', function() {
      return supertest
      .get('/types')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res) {
        expect(res.body).to.be.an('array');
      });
    });
  });


});
