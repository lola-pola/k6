import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 2,         // Number of virtual users
    duration: '10s', // Test duration
};

export default function () {
    let response = http.get('https://www.google.com');

    // Check to ensure the response status code is 200
    check(response, {
        'is status 200': (r) => r.status === 200,
    });

    // Sleep to simulate think time between requests
    sleep(1);
}
