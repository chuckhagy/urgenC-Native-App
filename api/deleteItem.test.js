import deleteItem from './deleteItem';

let mockDataResponse = {
  "id": "rec7YrLkGZrl9kYfZ",
}
let dataObject = {"id": "rec7YrLkGZrl9kYfZ"}

describe('createItem', () => {
  it('calls fetch + deletes a selected item', () => {
    fetch.mockResponse(JSON.stringify(mockDataResponse))
    let newItem = {
      "createdTime": "2017-09-21T23:25:22.980Z",
      "fields": {
        "body": "This Message",
        "createddate": "2017-09-21T23:30:49.047Z",
        "duedate": "2017-09-21T23:35:00.000Z",
        "priority": "2",
        "title": "Test",
      },
      "id": "rec7YrLkGZrl9kYfZ",
    }
    
    return deleteItem(newItem, {
      AIRTABLE_DATABASE_ID: 'SOME_DATABASE_ID',
      AIRTABLE_TOKEN: 'SOME_TOKEN'
    }).then(item => {
      expect(item).toEqual(dataObject)
    })
    
    afterAll(() => {
      fetch.mockReset();
    })
    
  })
})