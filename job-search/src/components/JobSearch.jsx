// src/components/JobSearch.js

import React, { useState } from 'react';
import axios from 'axios';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const searchJobs = async () => {
    const options = {
      method: 'GET',
      url: 'https://jobs-api14.p.rapidapi.com/list',
      params: {
        query: searchQuery,
        location: 'United States',
        distance: '1.0',
        language: 'en_GB',
        remoteOnly: 'false',
        datePosted: 'month',
        employmentTypes: 'fulltime;parttime;intern;contractor',
        index: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'dcbc879a96mshd3f8dbe552e4c45p1465fdjsn1265f315913c',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setJobs(response.data.jobs)
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchJobs();
  };

  return (
    <div>
      <h2>Job Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter job title, keywords, or company name"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> - {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSearch;
