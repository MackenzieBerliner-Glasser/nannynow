import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
const { getFamilies, familiesSeedData } = require('./helpers/seedData');

describe('families routes', () => {
  it('creates a family profile (with seed data helper)', () => {
    const createdFamilies = getFamilies();
    const families = familiesSeedData();

    expect(createdFamilies[0]).toEqual({
      ...families[0],
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything()
    });
  });

  it('gets a list of all families', () => {
    const createdFamilies = getFamilies();

    return request(app)
      .get('/api/families')
      .then(res => {
        expect(res.body.length).toEqual(1);
        expect(res.body).toContainEqual(createdFamilies[0]);
      });
  });

  it('gets a family by id', () => {
    const createdFamilies = getFamilies();

    return request(app)
      .get(`/api/families/${createdFamilies[1]._id}`)
      .then(res => {
        expect(res.body).toEqual(createdFamilies[1]);
      });
  });

  // it('deletes a family by id', () => {
  //   const createdFamilys = getFamilys();

  //   return request(app)
  //     .delete(`/api/familys/${createdFamilys[1]._id}`)
  //     .then(() => request(app).get('/api/familys'))
  //     .then(res => {
  //       expect(res.body).not.toContainEqual(createdFamilys[1]);
  //       expect(res.body).toContainEqual(createdFamilys[0]);
  //       expect(res.body).toContainEqual(createdFamilys[2]);
  //     });
  // });

  // it('updates a family by id', () => {
  //   const createdFamilys = getFamilys();

  //   return request(app)
  //     .put(`/api/familys/${createdFamilys[0]._id}`)
  //     .send({
  //       role: 'nanny'
  //     })
  //     .then(res => {
  //       expect(res.body.role).toEqual('nanny');
  //     });
  // });
});
