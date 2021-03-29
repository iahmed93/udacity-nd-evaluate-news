import { doRequest } from '../src/client/js/formHandler'

test('send data to the backend and get the meanings of article',  async() => {

    const expectedResult = {
        agreement: 'DISAGREEMENT',
        subjectivity: 'SUBJECTIVE',
        confidence: '86',
        irony: 'NONIRONIC'
    }

    const data = await doRequest('https://dev.to/bhupesh/making-grep-searches-sexier-2mal');
    const actualResult = JSON.stringify(data);
    expect(actualResult).toBe(JSON.stringify(expectedResult));
});


