const request = require('supertest');
const app = require('../server/app.js');

describe('Test root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/nav/Los_Angeles').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

// describe('Test the root path', () => {
//     test('It should response the GET method', () => {
//         return request(app).get('/nav/Los_Angeles').expect(200);
//     })
// })