import getItems from './getItems';

import data from './mock-data';


describe('getItems', () => {
  it('calls fetch + gets all of the item', () => {
    fetch.mockResponse(JSON.stringify(data))
    return getItems({
      AIRTABLE_DATABASE_ID: 'SOME_DATABASE_ID',
      AIRTABLE_TOKEN: 'SOME_TOKEN'
    }).then(items => {
      expect(items).toEqual(data.records.map(record => ({
        id: record.id,
        title: record.fields.title,
        body: record.fields.body,
        completed: record.fields.completed,
        success: record.fields.success,
        failure: record.fields.failure,
        priority: record.fields.priority,
        duedate: record.fields.duedate,
        createddate: record.createdTime
      })))
    })
    
    afterAll(() => {
      fetch.mockReset();
    })
    
  })
})