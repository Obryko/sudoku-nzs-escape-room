const data = () => fetch('http://localhost:80/api/data', {
  method:'POST',
})
  .then(res => res.json());

export default data;