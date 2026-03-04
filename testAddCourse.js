const axios = require('axios');
const apiUrl = 'http://localhost:3300/courses';
(async () => {
    try {
        const response = await axios.post(apiUrl, {
            title: 'Test Course',
            duration: '4 weeks',
            start_date: '2026-04-01',
            fee: 500
        });
        console.log('POST response data:', response.data);
        const getRes = await axios.get(apiUrl);
        console.log('GET all courses:', getRes.data);
    } catch (err) {
        console.error('Error message:', err.message);
        if (err.response) {
            console.error('Status:', err.response.status);
            console.error('Data:', err.response.data);
        }
    }
})();
